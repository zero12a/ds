<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('sqlsearchService.php');

array_push($_RTIME,array("[TIME 10.INCLUDE SERVICE]",microtime(true)));
require_once('../../common/include/incUtil.php');//CG UTIL
require_once('../../common/include/incRequest.php');//CG REQUEST
require_once('../../common/include/incDB.php');//CG DB
require_once('../../common/include/incSec.php');//CG SEC
require_once('../../common/include/incFile.php');//CG FILE
require_once('../../common/include/incAuth.php');//CG AUTH
require_once('../../common/include/incUser.php');//CG USER
//하위에서 LOADDING LIB 처리
array_push($_RTIME,array("[TIME 20.IMPORT]",microtime(true)));
//SAFE HTML 필더 로더
$config = HTMLPurifier_Config::createDefault();
$purifier = new HTMLPurifier($config);	
$reqToken = reqGetString("TOKEN",37);
$resToken = uniqid();

$log = getLoggerStdout(
	array(
	"LIST_NM"=>"log_CG"
	, "PGM_ID"=>"SQLSEARCH"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("SqlsearchControl___________________________start");
$objAuth = new authObject();
//컨트롤 명령 받기
$ctl = "";
$ctl1 = reqGetString("CTLGRP",50);
$ctl2 = reqGetString("CTLFNC",50);
if($ctl1 == "" || $ctl2 == ""){
	JsonMsg("500","100","처리 명령이 잘못되었습니다.(no input ctl)");
}else{
	$ctl = $ctl1 . "_" . $ctl2;
}//로그인 : 권한정보 검사하기 in_array("aix", $os)
if(!isLogin()){
	JsonMsg("500","110"," 로그아웃되었습니다.");
}else if(!$objAuth->isOneConnection()){
	logOut();
	JsonMsg("500","120"," 다른기기(PC,브라우저 등)에서 로그인하였습니다. 다시로그인 후 사용해 주세요.");
}else if($objAuth->isAuth("SQLSEARCH",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"SQLSEARCH",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"SQLSEARCH",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 조건
//FILE먼저 : G2, 프로그램
//FILE먼저 : G3, SQL
//FILE먼저 : G4, 폼
$REQ["G4-CTLCUD"] = reqPostString("G4-CTLCUD",2);

//G1, 조건 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-PJTSEQ"] = reqPostNumber("G1-PJTSEQ",20);//PJTSEQ, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-PJTSEQ"] = getFilter($REQ["G1-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	

//G2, 프로그램 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PJTSEQ"] = reqPostNumber("G2-PJTSEQ",20);//PJTSEQ, RORW=RO, INHERIT=Y	
$REQ["G2-PJTSEQ"] = getFilter($REQ["G2-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G2-PGMSEQ"] = reqPostNumber("G2-PGMSEQ",30);//SEQ, RORW=RO, INHERIT=Y	
$REQ["G2-PGMSEQ"] = getFilter($REQ["G2-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	

//G3, SQL - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-PJTSEQ"] = reqPostNumber("G3-PJTSEQ",20);//PJTSEQ, RORW=RO, INHERIT=Y	
$REQ["G3-PJTSEQ"] = getFilter($REQ["G3-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G3-PGMSEQ"] = reqPostNumber("G3-PGMSEQ",30);//SEQ, RORW=RO, INHERIT=Y	
$REQ["G3-PGMSEQ"] = getFilter($REQ["G3-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G3-SQLSEQ"] = reqPostNumber("G3-SQLSEQ",30);//SQLSEQ, RORW=RO, INHERIT=Y	
$REQ["G3-SQLSEQ"] = getFilter($REQ["G3-SQLSEQ"],"REGEXMAT","/^[0-9]+$/");	

//G4, 폼 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-SQLTXT"] = reqPostString("G4-SQLTXT",1000);//SQLTXT, RORW=RW, INHERIT=N	
$REQ["G4-SQLTXT"] = getFilter($REQ["G4-SQLTXT"],"SAFEHTML","/--미 정의--/");	
$REQ["G2-XML"] = getXml2Array($_POST["G2-XML"]);//프로그램	
$REQ["G3-XML"] = getXml2Array($_POST["G3-XML"]);//SQL	
//,  입력값 필터 
$REQ["G2-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G2-XML"]
		,"COLORD"=>"PJTSEQ,PGMSEQ,PGMID,PGMNM,ADDDT"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"PGMID"=>array("STRING",20)	
			,"PGMNM"=>array("STRING",50)	
			,"ADDDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMNM"=>array("CLEARTEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G3-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G3-XML"]
		,"COLORD"=>"PJTSEQ,PGMSEQ,SQLSEQ,SQLID,SQLNM,CRUD,RTN_TYPE,ADDDT"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"SQLSEQ"=>array("NUMBER",30)	
			,"SQLID"=>array("STRING",30)	
			,"SQLNM"=>array("STRING",30)	
			,"CRUD"=>array("STRING",1)	
			,"RTN_TYPE"=>array("STRING",30)	
			,"ADDDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"SQLSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"SQLID"=>array("CLEARTEXT","/--미 정의--/")
			,"SQLNM"=>array("CLEARTEXT","/--미 정의--/")
			,"CRUD"=>array("REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/")
			,"RTN_TYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
//,  입력값 필터 
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new sqlsearchService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //조건, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //조건, 저장
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //프로그램, 조회
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //프로그램, 엑셀다운로드
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //SQL, 조회
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //SQL, 엑셀다운로드
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //폼, 조회
		break;
	default:
		JsonMsg("500","110","처리 명령을 찾을 수 없습니다. (no search ctl)");
		break;
}
array_push($_RTIME,array("[TIME 50.SVC]",microtime(true)));
if($PGM_CFG["SECTYPE"] == "POWER" || $PGM_CFG["SECTYPE"] == "PI") $objAuth->logUsrAuthD($reqToken,$resToken);;	//권한변경 로그 저장
	array_push($_RTIME,array("[TIME 60.AUGHD_LOG]",microtime(true)));
//실행시간 검사
for($j=1;$j<sizeof($_RTIME);$j++){
	$log->debug( $_RTIME[$j][0] . " " . number_format($_RTIME[$j][1]-$_RTIME[$j-1][1],4) );

	if($j == sizeof($_RTIME)-1) $log->debug( "RUN TIME : " . number_format($_RTIME[$j][1]-$_RTIME[0][1],4) );
}
//서비스 클래스 비우기
unset($objService);
unset($objAuth);

$log->info("SqlsearchControl___________________________end");
$log->close(); unset($log);
?>
