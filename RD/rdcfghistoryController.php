<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdcfghistoryService.php');

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
	"LIST_NM"=>"log_RD"
	, "PGM_ID"=>"RDCFGHISTORY"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RdcfghistoryControl___________________________start");
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
}else if($objAuth->isAuth("RDCFGHISTORY",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDCFGHISTORY",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDCFGHISTORY",$ctl,"N");
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
//FILE먼저 : G2, 
//FILE먼저 : G3, 
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-CFG_SEQ"] = reqPostNumber("G1-CFG_SEQ",99);//SEQ, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-CFG_SEQ"] = getFilter($REQ["G1-CFG_SEQ"],"","//");	
$REQ["G1-ACT_PGMID"] = reqPostString("G1-ACT_PGMID",99);//PGMID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-ACT_PGMID"] = getFilter($REQ["G1-ACT_PGMID"],"","//");	
$REQ["G1-HOST_NM"] = reqPostString("G1-HOST_NM",99);//HOST, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-HOST_NM"] = getFilter($REQ["G1-HOST_NM"],"","//");	
$REQ["G1-RESULT_YN"] = reqPostString("G1-RESULT_YN",99);//RESULT, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-RESULT_YN"] = getFilter($REQ["G1-RESULT_YN"],"","//");	
$REQ["G1-RESULT_MSG"] = reqPostString("G1-RESULT_MSG",99);//MSG, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-RESULT_MSG"] = getFilter($REQ["G1-RESULT_MSG"],"","//");	
$REQ["G1-ADD_DT"] = reqPostString("G1-ADD_DT",14);//ADD, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-ADD_DT"] = getFilter($REQ["G1-ADD_DT"],"","//");	

//G2,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-CFG_SEQ"] = reqPostNumber("G2-CFG_SEQ",99);//SEQ, RORW=, INHERIT=Y	
$REQ["G2-CFG_SEQ"] = getFilter($REQ["G2-CFG_SEQ"],"","//");	

//G3,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-OLD_CFG"] = reqPostString("G3-OLD_CFG",99);//OLD, RORW=RW, INHERIT=N	
$REQ["G3-OLD_CFG"] = getFilter($REQ["G3-OLD_CFG"],"","//");	
$REQ["G3-NEW_CFG"] = reqPostString("G3-NEW_CFG",99);//NEW, RORW=RW, INHERIT=N	
$REQ["G3-NEW_CFG"] = getFilter($REQ["G3-NEW_CFG"],"","//");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"CFG_SEQ,ACT_PGMID,OLD_CFG,NEW_CFG,HOST_NM,RESULT_YN,RESULT_MSG,ADD_DT"
		,"VALID"=>
			array(
			"CFG_SEQ"=>array("NUMBER",99)	
			,"ACT_PGMID"=>array("STRING",99)	
			,"OLD_CFG"=>array("STRING",99)	
			,"NEW_CFG"=>array("STRING",99)	
			,"HOST_NM"=>array("STRING",99)	
			,"RESULT_YN"=>array("STRING",99)	
			,"RESULT_MSG"=>array("STRING",99)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CFG_SEQ"=>array("","//")
			,"ACT_PGMID"=>array("","//")
			,"OLD_CFG"=>array("","//")
			,"NEW_CFG"=>array("","//")
			,"HOST_NM"=>array("","//")
			,"RESULT_YN"=>array("","//")
			,"RESULT_MSG"=>array("","//")
			,"ADD_DT"=>array("","//")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdcfghistoryService($REQ);
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
		echo $objService->goG2Search(); //, 조회
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //, 조회
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

$log->info("RdcfghistoryControl___________________________end");
$log->close(); unset($log);
?>
