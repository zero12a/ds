<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdmsgsendhisService.php');

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
	, "PGM_ID"=>"RDMSGSENDHIS"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RdmsgsendhisControl___________________________start");
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
}else if($objAuth->isAuth("RDMSGSENDHIS",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDMSGSENDHIS",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDMSGSENDHIS",$ctl,"N");
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
//FILE먼저 : G2, 발송요청
//FILE먼저 : G3, 발송로그

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-FROM_ADDDT"] = reqPostString("G1-FROM_ADDDT",14);//ADDDT, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-FROM_ADDDT"] = getFilter($REQ["G1-FROM_ADDDT"],"REGEXMAT","/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/");	
$REQ["G1-TO_ADDDT"] = reqPostString("G1-TO_ADDDT",14);//~, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-TO_ADDDT"] = getFilter($REQ["G1-TO_ADDDT"],"REGEXMAT","/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/");	

//G2, 발송요청 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G3, 발송로그 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//발송요청	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//발송로그	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"REQUEST_SEQ,CAMPAIGN_SEQ,CAMPAIGN_NM,USR_SEQ,USR_ID,RETRY_CNT,ADD_DT"
		,"VALID"=>
			array(
			"REQUEST_SEQ"=>array("NUMBER",50)	
			,"CAMPAIGN_SEQ"=>array("NUMBER",30)	
			,"CAMPAIGN_NM"=>array("STRING",100)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"RETRY_CNT"=>array("NUMBER",2)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"REQUEST_SEQ"=>array("","//")
			,"CAMPAIGN_SEQ"=>array("","//")
			,"CAMPAIGN_NM"=>array("","//")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"RETRY_CNT"=>array("","//")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"SENDLOG_SEQ,REQUEST_SEQ,USR_SEQ,USR_ID,REQUEST_DT,REQUEST_ID,CAMPAIGN_SEQ,SENDER,EMAIL,USR_NM,TITLE,BODY,RES_GBN,RES_MSG,ADD_DT"
		,"VALID"=>
			array(
			"SENDLOG_SEQ"=>array("NUMBER",)	
			,"REQUEST_SEQ"=>array("NUMBER",50)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"REQUEST_DT"=>array("STRING",)	
			,"REQUEST_ID"=>array("STRING",)	
			,"CAMPAIGN_SEQ"=>array("NUMBER",30)	
			,"SENDER"=>array("STRING",40)	
			,"EMAIL"=>array("STRING",20)	
			,"USR_NM"=>array("STRING",10)	
			,"TITLE"=>array("STRING",100)	
			,"BODY"=>array("STRING",4000)	
			,"RES_GBN"=>array("STRING",)	
			,"RES_MSG"=>array("STRING",)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"SENDLOG_SEQ"=>array("","//")
			,"REQUEST_SEQ"=>array("","//")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"REQUEST_DT"=>array("","//")
			,"REQUEST_ID"=>array("","//")
			,"CAMPAIGN_SEQ"=>array("","//")
			,"SENDER"=>array("","//")
			,"EMAIL"=>array("","//")
			,"USR_NM"=>array("SAFETEXT","/--미 정의--/")
			,"TITLE"=>array("","//")
			,"BODY"=>array("","//")
			,"RES_GBN"=>array("","//")
			,"RES_MSG"=>array("","//")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdmsgsendhisService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //, 조회(전체)
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //발송요청, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //발송요청, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //발송로그, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //발송로그, 저장
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

$log->info("RdmsgsendhisControl___________________________end");
$log->close(); unset($log);
?>
