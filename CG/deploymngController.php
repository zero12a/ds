<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('deploymngService.php');

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
	, "PGM_ID"=>"DEPLOYMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("DeploymngControl___________________________start");
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
}else if($objAuth->isAuth("DEPLOYMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"DEPLOYMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"DEPLOYMNG",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, 파일
//FILE먼저 : G3, SQL PGM
//FILE먼저 : G4, SQL AUTH

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-PJTSEQ"] = reqPostNumber("G1-PJTSEQ",20);//PJTSEQ, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-PJTSEQ"] = getFilter($REQ["G1-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	

//G2, 파일 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-FILESEQ"] = reqPostString("G2-FILESEQ",30);//FILESEQ, RORW=RW, INHERIT=N	
$REQ["G2-FILESEQ"] = getFilter($REQ["G2-FILESEQ"],"REGEXMAT","/^[0-9]+$/");	

//G3, SQL PGM - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-PKGGRP"] = reqPostString("G3-PKGGRP",15);//PKGGRP, RORW=RW, INHERIT=N	
$REQ["G3-PKGGRP"] = getFilter($REQ["G3-PKGGRP"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-VIEWURL"] = reqPostString("G3-VIEWURL",30);//VIEWURL, RORW=RW, INHERIT=N	
$REQ["G3-VIEWURL"] = getFilter($REQ["G3-VIEWURL"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-PGMTYPE"] = reqPostString("G3-PGMTYPE",10);//PGMTYPE, RORW=RW, INHERIT=N	
$REQ["G3-PGMTYPE"] = getFilter($REQ["G3-PGMTYPE"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-SECTYPE"] = reqPostString("G3-SECTYPE",10);//SECTYPE, RORW=RW, INHERIT=N	
$REQ["G3-SECTYPE"] = getFilter($REQ["G3-SECTYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	

//G4, SQL AUTH - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-XML"] = getXml2Array($_POST["G2-XML"]);//파일	
$REQ["G3-XML"] = getXml2Array($_POST["G3-XML"]);//SQL PGM	
$REQ["G4-XML"] = getXml2Array($_POST["G4-XML"]);//SQL AUTH	
//,  입력값 필터 
$REQ["G2-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G2-XML"]
		,"COLORD"=>"CHK,PGMSEQ,VERSEQ,FILESEQ,FILETYPE,FILENM,FILEHASH,FILESIZE,ADDDT,MODDT"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"VERSEQ"=>array("NUMBER",30)	
			,"FILESEQ"=>array("STRING",30)	
			,"FILETYPE"=>array("STRING",30)	
			,"FILENM"=>array("STRING",30)	
			,"FILEHASH"=>array("STRING",32)	
			,"FILESIZE"=>array("STRING",30)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"VERSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"FILESEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"FILETYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"FILENM"=>array("CLEARTEXT","/--미 정의--/")
			,"FILEHASH"=>array("CLEARTEXT","/--미 정의--/")
			,"FILESIZE"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G3-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G3-XML"]
		,"COLORD"=>"CHK,PGMSEQ,PGMID,PGMNM,PKGGRP,VIEWURL,PGMTYPE,SECTYPE,ADDDT,MODDT"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"PGMID"=>array("STRING",20)	
			,"PGMNM"=>array("STRING",50)	
			,"PKGGRP"=>array("STRING",15)	
			,"VIEWURL"=>array("STRING",30)	
			,"PGMTYPE"=>array("STRING",10)	
			,"SECTYPE"=>array("STRING",10)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMNM"=>array("CLEARTEXT","/--미 정의--/")
			,"PKGGRP"=>array("CLEARTEXT","/--미 정의--/")
			,"VIEWURL"=>array("CLEARTEXT","/--미 정의--/")
			,"PGMTYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"SECTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G4-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G4-XML"]
		,"COLORD"=>"CHK,ROWID,PGMID,AUTH_ID,AUTH_NM"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"ROWID"=>array("STRING",40)	
			,"PGMID"=>array("STRING",20)	
			,"AUTH_ID"=>array("STRING",50)	
			,"AUTH_NM"=>array("STRING",50)	
					)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"ROWID"=>array("SAFETEXT","/--미 정의--/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"AUTH_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/")
			,"AUTH_NM"=>array("SAFETEXT","/--미 정의--/")
					)
	)
);
//,  입력값 필터 
$REQ["G2-CHK"] = $_POST["G2-CHK"];//CHK 받기
//filterGridChk($tStr,$tDataType,$tDataSize,$tValidType,$tValidRule)
$REQ["G2-CHK"] = filterGridChk($REQ["G2-CHK"],"STRING",30,"REGEXMAT","/^[0-9]+$/");//FILESEQ 입력값검증
	$REQ["G3-CHK"] = $_POST["G3-CHK"];//CHK 받기
//filterGridChk($tStr,$tDataType,$tDataSize,$tValidType,$tValidRule)
$REQ["G3-CHK"] = filterGridChk($REQ["G3-CHK"],"NUMBER",30,"REGEXMAT","/^[0-9]+$/");//PGMSEQ 입력값검증
	$REQ["G4-CHK"] = $_POST["G4-CHK"];//CHK 받기
//filterGridChk($tStr,$tDataType,$tDataSize,$tValidType,$tValidRule)
$REQ["G4-CHK"] = filterGridChk($REQ["G4-CHK"],"STRING",40,"SAFETEXT","/--미 정의--/");//ROWID 입력값검증
	array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new deploymngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //, 저장
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //파일, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //파일, 저장
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //파일, 엑셀다운로드
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //파일, 선택저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //SQL PGM, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //SQL PGM, 저장
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //SQL PGM, 엑셀다운로드
		break;
	case "G3_CHKSAVE" :
		echo $objService->goG3Chksave(); //SQL PGM, 선택저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //SQL AUTH, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //SQL AUTH, 저장
		break;
	case "G4_EXCEL" :
		echo $objService->goG4Excel(); //SQL AUTH, 엑셀다운로드
		break;
	case "G4_CHKSAVE" :
		echo $objService->goG4Chksave(); //SQL AUTH, 선택저장
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

$log->info("DeploymngControl___________________________end");
$log->close(); unset($log);
?>
