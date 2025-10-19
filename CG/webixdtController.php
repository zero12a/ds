<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('webixdtService.php');

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
$reqToken = reqGetString("TOKEN",37);
$resToken = uniqid();

$log = getLoggerStdout(
	array(
	"LIST_NM"=>"log_CG"
	, "PGM_ID"=>"WEBIXDT"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("WebixdtControl___________________________start");
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
}else if($objAuth->isAuth("WEBIXDT",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"WEBIXDT",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"WEBIXDT",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, PGM
//FILE먼저 : G3, GRP
//FILE먼저 : G4, PGM
$REQ["G4-CTLCUD"] = reqPostString("G4-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, PGM - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PJTSEQ"] = reqPostNumber("G2-PJTSEQ",20);//PJTSEQ, RORW=, INHERIT=Y	
$REQ["G2-PJTSEQ"] = getFilter($REQ["G2-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G2-PGMSEQ"] = reqPostNumber("G2-PGMSEQ",30);//PGMSEQ, RORW=, INHERIT=Y	
$REQ["G2-PGMSEQ"] = getFilter($REQ["G2-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	

//G3, GRP - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, PGM - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-PGMSEQ"] = reqPostNumber("G4-PGMSEQ",30);//PGMSEQ, RORW=RW, INHERIT=N	
$REQ["G4-PGMSEQ"] = getFilter($REQ["G4-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-PGMID"] = reqPostString("G4-PGMID",20);//프로그램ID, RORW=RW, INHERIT=N	
$REQ["G4-PGMID"] = getFilter($REQ["G4-PGMID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G4-PGMNM"] = reqPostString("G4-PGMNM",50);//프로그램이름, RORW=RW, INHERIT=N	
$REQ["G4-PGMNM"] = getFilter($REQ["G4-PGMNM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-PGMTYPE"] = reqPostString("G4-PGMTYPE",10);//PGMTYPE, RORW=RW, INHERIT=N	
$REQ["G4-PGMTYPE"] = getFilter($REQ["G4-PGMTYPE"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-CAL"] = reqPostString("G4-CAL",40);//달력, RORW=RW, INHERIT=N	
$REQ["G4-CAL"] = getFilter($REQ["G4-CAL"],"CLEARTEXT","/--미 정의--/");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//PGM	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//GRP	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"CHK,PJTSEQ,PGMTYPE,PGMSEQ,PGMID,PGMNM,LOGINYN,ADDDT"
		,"VALID"=>
			array(
			"CHK"=>array("STRING",100)	
			,"PJTSEQ"=>array("NUMBER",20)	
			,"PGMTYPE"=>array("STRING",10)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"PGMID"=>array("STRING",20)	
			,"PGMNM"=>array("STRING",50)	
			,"LOGINYN"=>array("STRING",3)	
			,"ADDDT"=>array("DATE",14)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMTYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMNM"=>array("CLEARTEXT","/--미 정의--/")
			,"LOGINYN"=>array("CLEARTEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"PJTSEQ,PGMSEQ,GRPSEQ,GRPID,GRPNM,GRPTYPE"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"GRPSEQ"=>array("NUMBER",30)	
			,"GRPID"=>array("STRING",30)	
			,"GRPNM"=>array("STRING",100)	
			,"GRPTYPE"=>array("STRING",10)	
			)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRPSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"GRPNM"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new webixdtService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //, 저장
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //PGM, 선택Update
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //PGM, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //PGM, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //GRP, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //GRP, 저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //PGM, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //PGM, 저장
		break;
	case "G4_DELETE" :
		echo $objService->goG4Delete(); //PGM, 삭제
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

$log->info("WebixdtControl___________________________end");
$log->close(); unset($log);
?>
