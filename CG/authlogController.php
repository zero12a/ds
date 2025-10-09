<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('authlogService.php');

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
	, "PGM_ID"=>"AUTHLOG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("AuthlogControl___________________________start");
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
}else if($objAuth->isAuth("AUTHLOG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"AUTHLOG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"AUTHLOG",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 컨
//FILE먼저 : G2, AUTH
//FILE먼저 : G3, AUTHD
//FILE먼저 : G4, AUTHD상세
$REQ["G4-CTLCUD"] = reqPostString("G4-CTLCUD",2);

//G1, 컨 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, AUTH - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-RES_TOKEN"] = reqPostString("G2-RES_TOKEN",30);//RES, RORW=RO, INHERIT=Y	
$REQ["G2-RES_TOKEN"] = getFilter($REQ["G2-RES_TOKEN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G2-USR_ID"] = reqPostString("G2-USR_ID",10);//USR_ID, RORW=RW, INHERIT=N	
$REQ["G2-USR_ID"] = getFilter($REQ["G2-USR_ID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G2-PGMID"] = reqPostString("G2-PGMID",20);//프로그램ID, RORW=RW, INHERIT=N	
$REQ["G2-PGMID"] = getFilter($REQ["G2-PGMID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G2-AUTH_ID"] = reqPostString("G2-AUTH_ID",50);//AUTH_ID, RORW=RW, INHERIT=N	
$REQ["G2-AUTH_ID"] = getFilter($REQ["G2-AUTH_ID"],"REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/");	

//G3, AUTHD - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-LAUTH_SEQ"] = reqPostNumber("G3-LAUTH_SEQ",10);//SEQ, RORW=RO, INHERIT=Y	
$REQ["G3-LAUTH_SEQ"] = getFilter($REQ["G3-LAUTH_SEQ"],"REGEXMAT","/^[0-9]+$/");	

//G4, AUTHD상세 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-PREPARE_SQL"] = reqPostString("G4-PREPARE_SQL",30);//PREPARE, RORW=RW, INHERIT=N	
$REQ["G4-PREPARE_SQL"] = getFilter($REQ["G4-PREPARE_SQL"],"SAFETEXT","/--미 정의--/");	
$REQ["G4-FULL_SQL"] = reqPostString("G4-FULL_SQL",30);//FULL, RORW=RW, INHERIT=N	
$REQ["G4-FULL_SQL"] = getFilter($REQ["G4-FULL_SQL"],"SAFETEXT","/--미 정의--/");	
$REQ["G2-XML"] = getXml2Array($_POST["G2-XML"]);//AUTH	
$REQ["G3-XML"] = getXml2Array($_POST["G3-XML"]);//AUTHD	
//,  입력값 필터 
$REQ["G2-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G2-XML"]
		,"COLORD"=>"LAUTH_SEQ,REQ_TOKEN,RES_TOKEN,USR_SEQ,USR_ID,PGMID,AUTH_ID,SUCCESS_YN,ADD_DT"
		,"VALID"=>
			array(
			"LAUTH_SEQ"=>array("NUMBER",10)	
			,"REQ_TOKEN"=>array("STRING",30)	
			,"RES_TOKEN"=>array("STRING",30)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"PGMID"=>array("STRING",20)	
			,"AUTH_ID"=>array("STRING",50)	
			,"SUCCESS_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"LAUTH_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"REQ_TOKEN"=>array("CLEARTEXT","/--미 정의--/")
			,"RES_TOKEN"=>array("CLEARTEXT","/--미 정의--/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"AUTH_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/")
			,"SUCCESS_YN"=>array("CLEARTEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G3-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G3-XML"]
		,"COLORD"=>"LAUTHD_SEQ,REQ_TOKEN,RES_TOKEN,LAUTH_SEQ,PARAM_COLIDS,DD_COLIDS,PI_IN_COLIDS,PI_OUT_COLIDS,ROW_CNT,ADD_DT"
		,"VALID"=>
			array(
			"LAUTHD_SEQ"=>array("STRING",30)	
			,"REQ_TOKEN"=>array("STRING",30)	
			,"RES_TOKEN"=>array("STRING",30)	
			,"LAUTH_SEQ"=>array("NUMBER",10)	
			,"PARAM_COLIDS"=>array("STRING",30)	
			,"DD_COLIDS"=>array("STRING",30)	
			,"PI_IN_COLIDS"=>array("STRING",30)	
			,"PI_OUT_COLIDS"=>array("STRING",30)	
			,"ROW_CNT"=>array("STRING",30)	
			,"ADD_DT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"LAUTHD_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"REQ_TOKEN"=>array("CLEARTEXT","/--미 정의--/")
			,"RES_TOKEN"=>array("CLEARTEXT","/--미 정의--/")
			,"LAUTH_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PARAM_COLIDS"=>array("SAFETEXT","/--미 정의--/")
			,"DD_COLIDS"=>array("SAFETEXT","/--미 정의--/")
			,"PI_IN_COLIDS"=>array("SAFETEXT","/--미 정의--/")
			,"PI_OUT_COLIDS"=>array("SAFETEXT","/--미 정의--/")
			,"ROW_CNT"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
//,  입력값 필터 
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new authlogService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //컨, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //컨, 저장
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //AUTH, 조회
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //AUTH, 엑셀다운로드
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //AUTH, 선택저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //AUTHD, 조회
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //AUTHD, 엑셀다운로드
		break;
	case "G3_CHKSAVE" :
		echo $objService->goG3Chksave(); //AUTHD, 선택저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //AUTHD상세, 조회
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

$log->info("AuthlogControl___________________________end");
$log->close(); unset($log);
?>
