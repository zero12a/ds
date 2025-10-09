<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('perfjqxgridService.php');

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
	, "PGM_ID"=>"PERFJQXGRID"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("PerfjqxgridControl___________________________start");
$objAuth = new authObject();
//컨트롤 명령 받기
$ctl = "";
$ctl1 = reqGetString("CTLGRP",50);
$ctl2 = reqGetString("CTLFNC",50);
if($ctl1 == "" || $ctl2 == ""){
	JsonMsg("500","100","처리 명령이 잘못되었습니다.(no input ctl)");
}else{
	$ctl = $ctl1 . "_" . $ctl2;
}//비로그인 : 권한정보 검사하기 (로그인검사, 권한검사 없이 패스)
$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"PERFJQXGRID",$ctl,"Y");
	//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, rst

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, rst - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-RSTSEQ"] = reqPostNumber("G2-RSTSEQ",30);//RSTSEQ, RORW=RW, INHERIT=N	
$REQ["G2-RSTSEQ"] = getFilter($REQ["G2-RSTSEQ"],"","//");	
$REQ["G2-PJTSEQ"] = reqPostNumber("G2-PJTSEQ",20);//PJTSEQ, RORW=RW, INHERIT=N	
$REQ["G2-PJTSEQ"] = getFilter($REQ["G2-PJTSEQ"],"","//");	
$REQ["G2-PGMSEQ"] = reqPostNumber("G2-PGMSEQ",30);//PGMSEQ, RORW=RW, INHERIT=N	
$REQ["G2-PGMSEQ"] = getFilter($REQ["G2-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G2-FILETYPE"] = reqPostString("G2-FILETYPE",30);//FILETYPE, RORW=RW, INHERIT=N	
$REQ["G2-FILETYPE"] = getFilter($REQ["G2-FILETYPE"],"CLEARTEXT","/--미 정의--/");	
$REQ["G2-SRCORD"] = reqPostString("G2-SRCORD",30);//ORD, RORW=RW, INHERIT=N	
$REQ["G2-SRCORD"] = getFilter($REQ["G2-SRCORD"],"","//");	
$REQ["G2-SRCTXT"] = reqPostString("G2-SRCTXT",1000);//TXT, RORW=RW, INHERIT=N	
$REQ["G2-SRCTXT"] = getFilter($REQ["G2-SRCTXT"],"","//");	
$REQ["G2-ADDDT"] = reqPostString("G2-ADDDT",14);//생성일, RORW=RW, INHERIT=N	
$REQ["G2-ADDDT"] = getFilter($REQ["G2-ADDDT"],"","//");	
$REQ["G2-MODDT"] = reqPostString("G2-MODDT",14);//MODDT, RORW=RW, INHERIT=N	
$REQ["G2-MODDT"] = getFilter($REQ["G2-MODDT"],"REGEXMAT","/^[0-9]+$/");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//rst	
//,  입력값 필터 
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new perfjqxgridService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //, 조회(전체)
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //rst, 조회
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

$log->info("PerfjqxgridControl___________________________end");
$log->close(); unset($log);
?>
