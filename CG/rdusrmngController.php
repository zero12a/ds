<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdusrmngService.php');

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
	, "PGM_ID"=>"RDUSRMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("RdusrmngControl___________________________start");
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
}else if($objAuth->isAuth("RDUSRMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDUSRMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDUSRMNG",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
	$REQ["USER.SEQ"] = getUserSeq();
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : C1, 조건1
//FILE먼저 : G2, 사용자1
//FILE먼저 : G3, 소속 그룹
//FILE먼저 : G4, 소속 팀

//C1, 조건1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["C1-USR_ID"] = reqPostString("C1-USR_ID",10);//USR_ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C1-USR_ID"] = getFilter($REQ["C1-USR_ID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["C1-USR_NM"] = reqPostString("C1-USR_NM",10);//USR_NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C1-USR_NM"] = getFilter($REQ["C1-USR_NM"],"SAFETEXT","/--미 정의--/");	
$REQ["C1-TEAMNM"] = reqPostString("C1-TEAMNM",40);//TEAMNM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C1-TEAMNM"] = getFilter($REQ["C1-TEAMNM"],"","//");	

//G2, 사용자1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-USR_SEQ"] = reqPostNumber("G2-USR_SEQ",10);//USR_SEQ, RORW=, INHERIT=Y	
$REQ["G2-USR_SEQ"] = getFilter($REQ["G2-USR_SEQ"],"REGEXMAT","/^[0-9]+$/");	

//G3, 소속 그룹 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, 소속 팀 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//사용자1	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//소속 그룹	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//소속 팀	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"CHK,USR_SEQ,USR_ID,USR_NM,PHONE,USE_YN,USR_PWD,PW_ERR_CNT,LAST_STATUS,LOCK_LIMIT_DT,LOCK_LAST_DT,EXPIRE_DT,PW_CHG_DT,PW_CHG_ID,LDAP_LOGIN_YN,TEAMCD,TEAMNM,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",1)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"USR_NM"=>array("STRING",10)	
			,"PHONE"=>array("STRING",20)	
			,"USE_YN"=>array("STRING",1)	
			,"USR_PWD"=>array("STRING",200)	
			,"PW_ERR_CNT"=>array("NUMBER",2)	
			,"LAST_STATUS"=>array("STRING",40)	
			,"LOCK_LIMIT_DT"=>array("STRING",14)	
			,"LOCK_LAST_DT"=>array("STRING",30)	
			,"EXPIRE_DT"=>array("STRING",30)	
			,"PW_CHG_DT"=>array("STRING",20)	
			,"PW_CHG_ID"=>array("STRING",30)	
			,"LDAP_LOGIN_YN"=>array("STRING",1)	
			,"TEAMCD"=>array("STRING",40)	
			,"TEAMNM"=>array("STRING",40)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"USR_NM"=>array("SAFETEXT","/--미 정의--/")
			,"PHONE"=>array("REGEXMAT","/^[0-9]{10,11}$/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"USR_PWD"=>array("SAFETEXT","/--미 정의--/")
			,"PW_ERR_CNT"=>array("REGEXMAT","/^[0-9]+$/")
			,"LAST_STATUS"=>array("SAFETEXT","/--미 정의--/")
			,"LOCK_LIMIT_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"LOCK_LAST_DT"=>array("","//")
			,"EXPIRE_DT"=>array("","//")
			,"PW_CHG_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"PW_CHG_ID"=>array("","//")
			,"LDAP_LOGIN_YN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"TEAMCD"=>array("","//")
			,"TEAMNM"=>array("","//")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MOD_DT"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"USR_SEQ,GRP_SEQ,GRP_NM,USE_YN,ADD_DT"
		,"VALID"=>
			array(
			"USR_SEQ"=>array("NUMBER",10)	
			,"GRP_SEQ"=>array("STRING",30)	
			,"GRP_NM"=>array("STRING",30)	
			,"USE_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRP_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRP_NM"=>array("SAFETEXT","/--미 정의--/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"USR_SEQ,TEAM_SEQ,TEAMCD,TEAMNM,USE_YN,ADD_DT"
		,"VALID"=>
			array(
			"USR_SEQ"=>array("NUMBER",10)	
			,"TEAM_SEQ"=>array("NUMBER",100)	
			,"TEAMCD"=>array("STRING",40)	
			,"TEAMNM"=>array("STRING",40)	
			,"USE_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"TEAM_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"TEAMCD"=>array("","//")
			,"TEAMNM"=>array("SAFETEXT","/--미 정의--/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdusrmngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G2_USERDEF" :
		echo $objService->goG2Userdef(); //사용자1, 비번변경
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //사용자1, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //사용자1, S
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //사용자1, E
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //사용자1, 선택 잠금하제
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //소속 그룹, 조회
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //소속 팀, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //소속 팀, 저장
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

$log->info("RdusrmngControl___________________________end");
$log->close(); unset($log);
?>
