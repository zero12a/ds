<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('usermngService.php');

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
	, "PGM_ID"=>"USERMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("UsermngControl___________________________start");
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
}else if($objAuth->isAuth("USERMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"USERMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"USERMNG",$ctl,"N");
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
$REQ["G2-USERSEQ"] = reqPostNumber("G2-USERSEQ",20);//USERSEQ, RORW=RO, INHERIT=Y	
$REQ["G2-USERSEQ"] = getFilter($REQ["G2-USERSEQ"],"","//");	
$REQ["G2-EMAIL"] = reqPostString("G2-EMAIL",20);//이메일, RORW=RW, INHERIT=N	
$REQ["G2-EMAIL"] = getFilter($REQ["G2-EMAIL"],"","//");	
$REQ["G2-PASSWD"] = reqPostString("G2-PASSWD",20);//PASSWD, RORW=RW, INHERIT=N	
$REQ["G2-PASSWD"] = getFilter($REQ["G2-PASSWD"],"","//");	
$REQ["G2-EMAILVALIDYN"] = reqPostString("G2-EMAILVALIDYN",20);//이메일인증, RORW=RW, INHERIT=N	
$REQ["G2-EMAILVALIDYN"] = getFilter($REQ["G2-EMAILVALIDYN"],"","//");	
$REQ["G2-LASTPWCHGDT"] = reqPostString("G2-LASTPWCHGDT",20);//비번변경일, RORW=RW, INHERIT=N	
$REQ["G2-LASTPWCHGDT"] = getFilter($REQ["G2-LASTPWCHGDT"],"","//");	
$REQ["G2-PWFAILCNT"] = reqPostNumber("G2-PWFAILCNT",20);//로그인실패횟수, RORW=RW, INHERIT=N	
$REQ["G2-PWFAILCNT"] = getFilter($REQ["G2-PWFAILCNT"],"","//");	
$REQ["G2-LOCKYN"] = reqPostString("G2-LOCKYN",20);//잠금유무, RORW=RW, INHERIT=N	
$REQ["G2-LOCKYN"] = getFilter($REQ["G2-LOCKYN"],"","//");	
$REQ["G2-FREEZEDT"] = reqPostString("G2-FREEZEDT",20);//잠금대기시간, RORW=RW, INHERIT=N	
$REQ["G2-FREEZEDT"] = getFilter($REQ["G2-FREEZEDT"],"","//");	
$REQ["G2-LOCKDT"] = reqPostString("G2-LOCKDT",20);//잠긴시간, RORW=RW, INHERIT=N	
$REQ["G2-LOCKDT"] = getFilter($REQ["G2-LOCKDT"],"","//");	
$REQ["G2-SERVERSEQ"] = reqPostNumber("G2-SERVERSEQ",20);//SERVERSEQ, RORW=RW, INHERIT=N	
$REQ["G2-SERVERSEQ"] = getFilter($REQ["G2-SERVERSEQ"],"","//");	
$REQ["G2-ADDDT"] = reqPostString("G2-ADDDT",14);//ADDDT, RORW=RW, INHERIT=N	
$REQ["G2-ADDDT"] = getFilter($REQ["G2-ADDDT"],"","//");	
$REQ["G2-MODDT"] = reqPostString("G2-MODDT",14);//수정일, RORW=RW, INHERIT=N	
$REQ["G2-MODDT"] = getFilter($REQ["G2-MODDT"],"","//");	

//G3, FILE저장소 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-FILESTORESEQ"] = reqPostNumber("G3-FILESTORESEQ",100);//SEQ, RORW=RW, INHERIT=N	
$REQ["G3-FILESTORESEQ"] = getFilter($REQ["G3-FILESTORESEQ"],"","//");	
$REQ["G3-STORETYPE"] = reqPostString("G3-STORETYPE",100);//STORETYPE, RORW=RW, INHERIT=N	
$REQ["G3-STORETYPE"] = getFilter($REQ["G3-STORETYPE"],"","//");	
$REQ["G3-STOREID"] = reqPostString("G3-STOREID",100);//STOREID, RORW=RW, INHERIT=N	
$REQ["G3-STOREID"] = getFilter($REQ["G3-STOREID"],"","//");	
$REQ["G3-STORENM"] = reqPostString("G3-STORENM",100);//STORENM, RORW=RW, INHERIT=N	
$REQ["G3-STORENM"] = getFilter($REQ["G3-STORENM"],"","//");	
$REQ["G3-CREKEY"] = reqPostString("G3-CREKEY",100);//CREKEY, RORW=RW, INHERIT=N	
$REQ["G3-CREKEY"] = getFilter($REQ["G3-CREKEY"],"","//");	
$REQ["G3-CRESECRET"] = reqPostString("G3-CRESECRET",100);//CRESECRET, RORW=RW, INHERIT=N	
$REQ["G3-CRESECRET"] = getFilter($REQ["G3-CRESECRET"],"","//");	
$REQ["G3-REGION"] = reqPostString("G3-REGION",100);//REGION, RORW=RW, INHERIT=N	
$REQ["G3-REGION"] = getFilter($REQ["G3-REGION"],"","//");	
$REQ["G3-BUCKET"] = reqPostString("G3-BUCKET",100);//BUCKET, RORW=RW, INHERIT=N	
$REQ["G3-BUCKET"] = getFilter($REQ["G3-BUCKET"],"","//");	
$REQ["G3-ADDDT"] = reqPostString("G3-ADDDT",14);//ADDDT, RORW=RW, INHERIT=N	
$REQ["G3-ADDDT"] = getFilter($REQ["G3-ADDDT"],"","//");	
$REQ["G3-MODDT"] = reqPostString("G3-MODDT",14);//수정일, RORW=RW, INHERIT=N	
$REQ["G3-MODDT"] = getFilter($REQ["G3-MODDT"],"","//");	

//G4, DB저장소 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-SVRID"] = reqPostString("G4-SVRID",20);//SVRID, RORW=RW, INHERIT=N	
$REQ["G4-SVRID"] = getFilter($REQ["G4-SVRID"],"","//");	
$REQ["G4-SVRNM"] = reqPostString("G4-SVRNM",100);//SVRNM, RORW=RW, INHERIT=N	
$REQ["G4-SVRNM"] = getFilter($REQ["G4-SVRNM"],"","//");	
$REQ["G4-PJTSEQ"] = reqPostNumber("G4-PJTSEQ",20);//PJTSEQ, RORW=RW, INHERIT=N	
$REQ["G4-PJTSEQ"] = getFilter($REQ["G4-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-USERSEQ"] = reqPostNumber("G4-USERSEQ",20);//USERSEQ, RORW=RW, INHERIT=N	
$REQ["G4-USERSEQ"] = getFilter($REQ["G4-USERSEQ"],"","//");	
$REQ["G4-DBDRIVER"] = reqPostString("G4-DBDRIVER",30);//DBDRIVER, RORW=RW, INHERIT=N	
$REQ["G4-DBDRIVER"] = getFilter($REQ["G4-DBDRIVER"],"","//");	
$REQ["G4-DBHOST"] = reqPostString("G4-DBHOST",60);//DBHOST, RORW=RW, INHERIT=N	
$REQ["G4-DBHOST"] = getFilter($REQ["G4-DBHOST"],"","//");	
$REQ["G4-DBPORT"] = reqPostString("G4-DBPORT",60);//DBPORT, RORW=RW, INHERIT=N	
$REQ["G4-DBPORT"] = getFilter($REQ["G4-DBPORT"],"","//");	
$REQ["G4-DBNAME"] = reqPostString("G4-DBNAME",60);//DBNAME, RORW=RW, INHERIT=N	
$REQ["G4-DBNAME"] = getFilter($REQ["G4-DBNAME"],"","//");	
$REQ["G4-DBUSRID"] = reqPostString("G4-DBUSRID",60);//DBUSERID, RORW=RW, INHERIT=N	
$REQ["G4-DBUSRID"] = getFilter($REQ["G4-DBUSRID"],"","//");	
$REQ["G4-DBUSRPW"] = reqPostString("G4-DBUSRPW",100);//DBUSERPW, RORW=RW, INHERIT=N	
$REQ["G4-DBUSRPW"] = getFilter($REQ["G4-DBUSRPW"],"","//");	
$REQ["G4-USEYN"] = reqPostString("G4-USEYN",1);//사용유무, RORW=RW, INHERIT=N	
$REQ["G4-USEYN"] = getFilter($REQ["G4-USEYN"],"","//");	
$REQ["G4-ADDDT"] = reqPostString("G4-ADDDT",14);//ADDDT, RORW=RW, INHERIT=N	
$REQ["G4-ADDDT"] = getFilter($REQ["G4-ADDDT"],"","//");	
$REQ["G4-MODDT"] = reqPostString("G4-MODDT",14);//수정일, RORW=RW, INHERIT=N	
$REQ["G4-MODDT"] = getFilter($REQ["G4-MODDT"],"","//");	
$REQ["G2-XML"] = getXml2Array($_POST["G2-XML"]);//사용자1	
$REQ["G3-XML"] = getXml2Array($_POST["G3-XML"]);//FILE저장소	
$REQ["G4-XML"] = getXml2Array($_POST["G4-XML"]);//DB저장소	
//,  입력값 필터 
$REQ["G2-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G2-XML"]
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
					)
	)
);
$REQ["G3-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G3-XML"]
		,"COLORD"=>"FILESTORESEQ,USERSEQ,STORETYPE,STOREID,STORENM,CREKEY,CRESECRET,REGION,BUCKET,ADDDT,MODDT"
		,"VALID"=>
			array(
			"FILESTORESEQ"=>array("NUMBER",100)	
			,"USERSEQ"=>array("NUMBER",20)	
			,"STORETYPE"=>array("STRING",100)	
			,"STOREID"=>array("STRING",100)	
			,"STORENM"=>array("STRING",100)	
			,"CREKEY"=>array("STRING",100)	
			,"CRESECRET"=>array("STRING",100)	
			,"REGION"=>array("STRING",100)	
			,"BUCKET"=>array("STRING",100)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
					)
	)
);
$REQ["G4-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G4-XML"]
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
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
//,  입력값 필터 
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new usermngService($REQ);
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
	case "G3_USERDEF" :
		echo $objService->goG3Userdef(); //FILE저장소, 사용자정의
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

$log->info("UsermngControl___________________________end");
$log->close(); unset($log);
?>
