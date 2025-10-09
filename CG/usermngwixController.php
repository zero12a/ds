<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('usermngwixService.php');

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
	, "PGM_ID"=>"USERMNGWIX"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("UsermngwixControl___________________________start");
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
}else if($objAuth->isAuth("USERMNGWIX",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"USERMNGWIX",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"USERMNGWIX",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : C1, 조건1
//FILE먼저 : G2, 사용자1
//FILE먼저 : G3, FILE저장소
//FILE먼저 : G4, DB저장소

//C1, 조건1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["C1-EMAIL"] = reqPostString("C1-EMAIL",20);//이메일, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C1-EMAIL"] = getFilter($REQ["C1-EMAIL"],"","//");	

//G2, 사용자1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-USERSEQ"] = reqPostNumber("G2-USERSEQ",20);//USERSEQ, RORW=, INHERIT=Y	
$REQ["G2-USERSEQ"] = getFilter($REQ["G2-USERSEQ"],"","//");	

//G3, FILE저장소 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, DB저장소 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//사용자1	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//FILE저장소	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//DB저장소	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"USERSEQ,EMAIL,PASSWD,EMAILVALIDYN,LASTPWCHGDT,PWFAILCNT,LOCKYN,FREEZEDT,LOCKDT,SERVERSEQ,ADDDT,MODDT"
		,"VALID"=>
			array(
			"USERSEQ"=>array("NUMBER",20)	
			,"EMAIL"=>array("STRING",20)	
			,"PASSWD"=>array("STRING",20)	
			,"EMAILVALIDYN"=>array("STRING",20)	
			,"LASTPWCHGDT"=>array("STRING",20)	
			,"PWFAILCNT"=>array("NUMBER",20)	
			,"LOCKYN"=>array("STRING",20)	
			,"FREEZEDT"=>array("STRING",20)	
			,"LOCKDT"=>array("STRING",20)	
			,"SERVERSEQ"=>array("NUMBER",20)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"USERSEQ"=>array("","//")
			,"EMAIL"=>array("","//")
			,"PASSWD"=>array("","//")
			,"EMAILVALIDYN"=>array("","//")
			,"LASTPWCHGDT"=>array("","//")
			,"PWFAILCNT"=>array("","//")
			,"LOCKYN"=>array("","//")
			,"FREEZEDT"=>array("","//")
			,"LOCKDT"=>array("","//")
			,"SERVERSEQ"=>array("","//")
			,"ADDDT"=>array("","//")
			,"MODDT"=>array("","//")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"FILESTORESEQ,USERSEQ,STOREID,STORENM,STORETYPE,UPLOADDIR,READURL,CREKEY,CRESECRET,REGION,BUCKET,ACL,USEYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"FILESTORESEQ"=>array("NUMBER",100)	
			,"USERSEQ"=>array("NUMBER",20)	
			,"STOREID"=>array("STRING",100)	
			,"STORENM"=>array("STRING",100)	
			,"STORETYPE"=>array("STRING",100)	
			,"UPLOADDIR"=>array("STRING",120)	
			,"READURL"=>array("STRING",120)	
			,"CREKEY"=>array("STRING",100)	
			,"CRESECRET"=>array("STRING",100)	
			,"REGION"=>array("STRING",100)	
			,"BUCKET"=>array("STRING",100)	
			,"ACL"=>array("STRING",100)	
			,"USEYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"FILESTORESEQ"=>array("","//")
			,"USERSEQ"=>array("","//")
			,"STOREID"=>array("","//")
			,"STORENM"=>array("","//")
			,"STORETYPE"=>array("","//")
			,"UPLOADDIR"=>array("","//")
			,"READURL"=>array("","//")
			,"CREKEY"=>array("","//")
			,"CRESECRET"=>array("","//")
			,"REGION"=>array("","//")
			,"BUCKET"=>array("","//")
			,"ACL"=>array("","//")
			,"USEYN"=>array("","//")
			,"ADDDT"=>array("","//")
			,"MODDT"=>array("","//")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"SVRSEQ,SVRID,SVRNM,PJTSEQ,USERSEQ,DBDRIVER,DBHOST,DBPORT,DBNAME,DBUSRID,DBUSRPW,USEYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"SVRSEQ"=>array("NUMBER",20)	
			,"SVRID"=>array("STRING",20)	
			,"SVRNM"=>array("STRING",100)	
			,"PJTSEQ"=>array("NUMBER",20)	
			,"USERSEQ"=>array("NUMBER",20)	
			,"DBDRIVER"=>array("STRING",30)	
			,"DBHOST"=>array("STRING",60)	
			,"DBPORT"=>array("STRING",60)	
			,"DBNAME"=>array("STRING",60)	
			,"DBUSRID"=>array("STRING",60)	
			,"DBUSRPW"=>array("STRING",100)	
			,"USEYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"SVRSEQ"=>array("","//")
			,"SVRID"=>array("","//")
			,"SVRNM"=>array("","//")
			,"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USERSEQ"=>array("","//")
			,"DBDRIVER"=>array("","//")
			,"DBHOST"=>array("","//")
			,"DBPORT"=>array("","//")
			,"DBNAME"=>array("","//")
			,"DBUSRID"=>array("","//")
			,"DBUSRPW"=>array("","//")
			,"USEYN"=>array("","//")
			,"ADDDT"=>array("","//")
			,"MODDT"=>array("","//")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new usermngwixService($REQ);
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
		echo $objService->goG2Chksave(); //사용자1, 선택저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //FILE저장소, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //FILE저장소, S
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //FILE저장소, E
		break;
	case "G3_CHKSAVE" :
		echo $objService->goG3Chksave(); //FILE저장소, 선택저장
		break;
	case "G4_USERDEF" :
		echo $objService->goG4Userdef(); //DB저장소, 사용자정의
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //DB저장소, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //DB저장소, S
		break;
	case "G4_EXCEL" :
		echo $objService->goG4Excel(); //DB저장소, E
		break;
	case "G4_CHKSAVE" :
		echo $objService->goG4Chksave(); //DB저장소, 선택저장
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

$log->info("UsermngwixControl___________________________end");
$log->close(); unset($log);
?>
