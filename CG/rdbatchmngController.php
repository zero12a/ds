<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdbatchmngService.php');

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
	, "PGM_ID"=>"RDBATCHMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("RdbatchmngControl___________________________start");
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
}else if($objAuth->isAuth("RDBATCHMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDBATCHMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDBATCHMNG",$ctl,"N");
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
//FILE먼저 : G2, 배치목록
//FILE먼저 : G3, 배치상세
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, 배치목록 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-BATCH_SEQ"] = reqPostNumber("G2-BATCH_SEQ",30);//SEQ, RORW=, INHERIT=Y	
$REQ["G2-BATCH_SEQ"] = getFilter($REQ["G2-BATCH_SEQ"],"","//");	

//G3, 배치상세 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-BATCH_SEQ"] = reqPostNumber("G3-BATCH_SEQ",30);//SEQ, RORW=RW, INHERIT=N	
$REQ["G3-BATCH_SEQ"] = getFilter($REQ["G3-BATCH_SEQ"],"","//");	
$REQ["G3-BATCH_NM"] = reqPostString("G3-BATCH_NM",100);//NM, RORW=RW, INHERIT=N	
$REQ["G3-BATCH_NM"] = getFilter($REQ["G3-BATCH_NM"],"","//");	
$REQ["G3-CONDITION_SVRID"] = reqPostString("G3-CONDITION_SVRID",30);//CONDITION_SVRID, RORW=RW, INHERIT=N	
$REQ["G3-CONDITION_SVRID"] = getFilter($REQ["G3-CONDITION_SVRID"],"","//");	
$REQ["G3-CONDITION_SQL"] = reqPostString("G3-CONDITION_SQL",1000);//CONDITION_SQL, RORW=RW, INHERIT=N	
$REQ["G3-CONDITION_SQL"] = getFilter($REQ["G3-CONDITION_SQL"],"","//");	
$REQ["G3-SOURCE_SVRID"] = reqPostString("G3-SOURCE_SVRID",30);//SRC_SVRID, RORW=RW, INHERIT=N	
$REQ["G3-SOURCE_SVRID"] = getFilter($REQ["G3-SOURCE_SVRID"],"","//");	
$REQ["G3-SOURCE_SQL"] = reqPostString("G3-SOURCE_SQL",1000);//SRC_SQL, RORW=RW, INHERIT=N	
$REQ["G3-SOURCE_SQL"] = getFilter($REQ["G3-SOURCE_SQL"],"","//");	
$REQ["G3-SOURCE_IN_COLTYPES"] = reqPostString("G3-SOURCE_IN_COLTYPES",100);//SRC_IN_COLTYPES, RORW=RW, INHERIT=N	
$REQ["G3-SOURCE_IN_COLTYPES"] = getFilter($REQ["G3-SOURCE_IN_COLTYPES"],"","//");	
$REQ["G3-TARGET_SVRID"] = reqPostString("G3-TARGET_SVRID",30);//TARGET_SVRID, RORW=RW, INHERIT=N	
$REQ["G3-TARGET_SVRID"] = getFilter($REQ["G3-TARGET_SVRID"],"","//");	
$REQ["G3-TARGET_SQL"] = reqPostString("G3-TARGET_SQL",1000);//TARGET_SQL, RORW=RW, INHERIT=N	
$REQ["G3-TARGET_SQL"] = getFilter($REQ["G3-TARGET_SQL"],"","//");	
$REQ["G3-TARGET_IN_COLTYPES"] = reqPostString("G3-TARGET_IN_COLTYPES",100);//TARGET_IN_COLTYPES, RORW=RW, INHERIT=N	
$REQ["G3-TARGET_IN_COLTYPES"] = getFilter($REQ["G3-TARGET_IN_COLTYPES"],"","//");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//배치목록	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"BATCH_SEQ,BATCH_NM,CONDITION_SVRID,SOURCE_SVRID,TARGET_SVRID,CRON,START_DT,END_DT,USE_YN,STATUS,LAST_RUN,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"BATCH_SEQ"=>array("NUMBER",30)	
			,"BATCH_NM"=>array("STRING",100)	
			,"CONDITION_SVRID"=>array("STRING",30)	
			,"SOURCE_SVRID"=>array("STRING",30)	
			,"TARGET_SVRID"=>array("STRING",30)	
			,"CRON"=>array("STRING",100)	
			,"START_DT"=>array("STRING",14)	
			,"END_DT"=>array("STRING",14)	
			,"USE_YN"=>array("STRING",1)	
			,"STATUS"=>array("STRING",1)	
			,"LAST_RUN"=>array("STRING",30)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"BATCH_SEQ"=>array("","//")
			,"BATCH_NM"=>array("","//")
			,"CONDITION_SVRID"=>array("","//")
			,"SOURCE_SVRID"=>array("","//")
			,"TARGET_SVRID"=>array("","//")
			,"CRON"=>array("","//")
			,"START_DT"=>array("","//")
			,"END_DT"=>array("","//")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"STATUS"=>array("","//")
			,"LAST_RUN"=>array("","//")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"MOD_DT"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdbatchmngService($REQ);
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
		echo $objService->goG2Search(); //배치목록, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //배치목록, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //배치상세, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //배치상세, 저장
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

$log->info("RdbatchmngControl___________________________end");
$log->close(); unset($log);
?>
