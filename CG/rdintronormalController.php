<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdintronormalService.php');

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
	, "PGM_ID"=>"RDINTRONORMAL"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RdintronormalControl___________________________start");
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
}else if($objAuth->isAuth("RDINTRONORMAL",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDINTRONORMAL",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDINTRONORMAL",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
	$REQ["USER.ID"] = getUserId();
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, 로그인
//FILE먼저 : G3, 잠금
//FILE먼저 : G4, 메뉴이력

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, 로그인 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G3, 잠금 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, 메뉴이력 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//로그인	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//잠금	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//메뉴이력	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,RESPONSE_MSG,PW_ERR_CNT,LOCKCD,USR_SEQ,SERVER_NAME,REMOTE_ADDR,USER_AGENT,ADD_DT"
		,"VALID"=>
			array(
			"LOGIN_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"SESSION_ID"=>array("STRING",30)	
			,"SUCCESS_YN"=>array("STRING",1)	
			,"RESPONSE_MSG"=>array("STRING",100)	
			,"PW_ERR_CNT"=>array("NUMBER",2)	
			,"LOCKCD"=>array("STRING",10)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"SERVER_NAME"=>array("STRING",100)	
			,"REMOTE_ADDR"=>array("STRING",20)	
			,"USER_AGENT"=>array("STRING",500)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"LOGIN_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"SESSION_ID"=>array("CLEARTEXT","/--미 정의--/")
			,"SUCCESS_YN"=>array("CLEARTEXT","/--미 정의--/")
			,"RESPONSE_MSG"=>array("CLEARTEXT","/--미 정의--/")
			,"PW_ERR_CNT"=>array("REGEXMAT","/^[0-9]+$/")
			,"LOCKCD"=>array("CLEARTEXT","/--미 정의--/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"SERVER_NAME"=>array("CLEARTEXT","/--미 정의--/")
			,"REMOTE_ADDR"=>array("CLEARTEXT","/--미 정의--/")
			,"USER_AGENT"=>array("CLEARTEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,LOCKCD,PW_ERR_CNT,LOCK_LIMIT_DT,USR_SEQ,ADD_DT"
		,"VALID"=>
			array(
			"LOGIN_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"SESSION_ID"=>array("STRING",30)	
			,"SUCCESS_YN"=>array("STRING",1)	
			,"LOCKCD"=>array("STRING",10)	
			,"PW_ERR_CNT"=>array("NUMBER",2)	
			,"LOCK_LIMIT_DT"=>array("STRING",14)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"LOGIN_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"SESSION_ID"=>array("CLEARTEXT","/--미 정의--/")
			,"SUCCESS_YN"=>array("CLEARTEXT","/--미 정의--/")
			,"LOCKCD"=>array("CLEARTEXT","/--미 정의--/")
			,"PW_ERR_CNT"=>array("REGEXMAT","/^[0-9]+$/")
			,"LOCK_LIMIT_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
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
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdintronormalService($REQ);
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
		echo $objService->goG2Search(); //로그인, 조회
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //로그인, 엑셀다운로드
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //잠금, 조회
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //잠금, 엑셀다운로드
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //메뉴이력, 조회
		break;
	case "G4_EXCEL" :
		echo $objService->goG4Excel(); //메뉴이력, 엑셀다운로드
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

$log->info("RdintronormalControl___________________________end");
$log->close(); unset($log);
?>
