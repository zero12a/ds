<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rddefaultauthService.php');

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
	, "PGM_ID"=>"RDDEFAULTAUTH"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RddefaultauthControl___________________________start");
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
}else if($objAuth->isAuth("RDDEFAULTAUTH",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDDEFAULTAUTH",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDDEFAULTAUTH",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 조회조건
//FILE먼저 : G3, 디펄트 보유 권한
//FILE먼저 : G4, 미보유 권한

//G1, 조회조건 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-PGMID"] = reqPostString("G1-PGMID",20);//프로그램ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-PGMID"] = getFilter($REQ["G1-PGMID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G1-MNU_NM"] = reqPostString("G1-MNU_NM",30);//MNU_NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-MNU_NM"] = getFilter($REQ["G1-MNU_NM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G1-AUTH_ID"] = reqPostString("G1-AUTH_ID",50);//AUTH_ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-AUTH_ID"] = getFilter($REQ["G1-AUTH_ID"],"REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/");	
$REQ["G1-AUTH_NM"] = reqPostString("G1-AUTH_NM",50);//AUTH_NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-AUTH_NM"] = getFilter($REQ["G1-AUTH_NM"],"SAFETEXT","/--미 정의--/");	

//G3, 디펄트 보유 권한 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, 미보유 권한 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//디펄트 보유 권한	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//미보유 권한	
//,  입력값 필터 
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"CHK,DA_SEQ,PGMID,MNU_NM,AUTH_ID,AUTH_NM,ADD_DT,ADD_ID"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"DA_SEQ"=>array("NUMBER",20)	
			,"PGMID"=>array("STRING",20)	
			,"MNU_NM"=>array("STRING",30)	
			,"AUTH_ID"=>array("STRING",50)	
			,"AUTH_NM"=>array("STRING",50)	
			,"ADD_DT"=>array("STRING",14)	
			,"ADD_ID"=>array("STRING",30)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"DA_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"MNU_NM"=>array("CLEARTEXT","/--미 정의--/")
			,"AUTH_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/")
			,"AUTH_NM"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_ID"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"CHK,AUTH_SEQ,PGMID,MNU_NM,AUTH_ID,AUTH_NM,USE_YN,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"AUTH_SEQ"=>array("NUMBER",10)	
			,"PGMID"=>array("STRING",20)	
			,"MNU_NM"=>array("STRING",30)	
			,"AUTH_ID"=>array("STRING",50)	
			,"AUTH_NM"=>array("STRING",50)	
			,"USE_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"AUTH_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"MNU_NM"=>array("CLEARTEXT","/--미 정의--/")
			,"AUTH_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[_a-zA-Z0-9]*$/")
			,"AUTH_NM"=>array("SAFETEXT","/--미 정의--/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MOD_DT"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rddefaultauthService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //조회조건, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //조회조건, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //디펄트 보유 권한, 조회
		break;
	case "G3_CHKDEL" :
		echo $objService->goG3Chkdel(); //디펄트 보유 권한, 선택 삭제
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //미보유 권한, 조회
		break;
	case "G4_CHKSAVE" :
		echo $objService->goG4Chksave(); //미보유 권한, 선택 추가
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

$log->info("RddefaultauthControl___________________________end");
$log->close(); unset($log);
?>
