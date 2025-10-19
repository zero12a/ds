<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('pjtenvService.php');

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
	, "PGM_ID"=>"PJTENV"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("PjtenvControl___________________________start");
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
}else if($objAuth->isAuth("PJTENV",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"PJTENV",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"PJTENV",$ctl,"N");
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
//FILE먼저 : G2, 2
//FILE먼저 : G6, CONFIG
//FILE먼저 : G7, FILE

//G2, 2 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PJTID"] = reqPostString("G2-PJTID",30);//프로젝트ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-PJTID"] = getFilter($REQ["G2-PJTID"],"","//");	
$REQ["G2-ADDDT"] = reqPostString("G2-ADDDT",14);//생성일, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-ADDDT"] = getFilter($REQ["G2-ADDDT"],"","//");	
$REQ["G2-MYRADIO"] = reqPostString("G2-MYRADIO",30);//나의라디오, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-MYRADIO"] = getFilter($REQ["G2-MYRADIO"],"","//");	

//G6, CONFIG - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G7, FILE - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G6-JSON"] = json_decode($_POST["G6-JSON"],true);//CONFIG	
$REQ["G7-JSON"] = json_decode($_POST["G7-JSON"],true);//FILE	
//,  입력값 필터 
$REQ["G6-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G6-JSON"]
		,"COLORD"=>"CFGSEQ,USEYN,CFGID,CFGNM,MVCGBN,PATH,CFGORD,ADDDT,MODDT"
		,"VALID"=>
			array(
			"CFGSEQ"=>array("NUMBER",30)	
			,"USEYN"=>array("STRING",1)	
			,"CFGID"=>array("STRING",30)	
			,"CFGNM"=>array("STRING",100)	
			,"MVCGBN"=>array("STRING",30)	
			,"PATH"=>array("STRING",300)	
			,"CFGORD"=>array("NUMBER",30)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CFGSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USEYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"CFGID"=>array("CLEARTEXT","/--미 정의--/")
			,"CFGNM"=>array("CLEARTEXT","/--미 정의--/")
			,"MVCGBN"=>array("CLEARTEXT","/--미 정의--/")
			,"PATH"=>array("SAFETEXT","/--미 정의--/")
			,"CFGORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G7-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G7-JSON"]
		,"COLORD"=>"FILESEQ,MKFILETYPE,MKFILETYPENM,MKFILEFORMAT,MKFILEEXT,TEMPLATE,FILEORD,USEYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"FILESEQ"=>array("STRING",30)	
			,"MKFILETYPE"=>array("STRING",0)	
			,"MKFILETYPENM"=>array("STRING",0)	
			,"MKFILEFORMAT"=>array("STRING",0)	
			,"MKFILEEXT"=>array("STRING",0)	
			,"TEMPLATE"=>array("STRING",0)	
			,"FILEORD"=>array("STRING",10)	
			,"USEYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"FILESEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"MKFILETYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"MKFILETYPENM"=>array("CLEARTEXT","/--미 정의--/")
			,"MKFILEFORMAT"=>array("CLEARTEXT","/--미 정의--/")
			,"MKFILEEXT"=>array("CLEARTEXT","/--미 정의--/")
			,"TEMPLATE"=>array("CLEARTEXT","/--미 정의--/")
			,"FILEORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"USEYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new pjtenvService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G6_USERDEF" :
		echo $objService->goG6Userdef(); //CONFIG, 사용자정의
		break;
	case "G6_SEARCH" :
		echo $objService->goG6Search(); //CONFIG, 조회
		break;
	case "G6_SAVE" :
		echo $objService->goG6Save(); //CONFIG, 저장
		break;
	case "G6_EXCEL" :
		echo $objService->goG6Excel(); //CONFIG, 엑셀다운로드
		break;
	case "G7_USERDEF" :
		echo $objService->goG7Userdef(); //FILE, 사용자정의
		break;
	case "G7_SEARCH" :
		echo $objService->goG7Search(); //FILE, 조회
		break;
	case "G7_SAVE" :
		echo $objService->goG7Save(); //FILE, 저장
		break;
	case "G7_EXCEL" :
		echo $objService->goG7Excel(); //FILE, 엑셀다운로드
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

$log->info("PjtenvControl___________________________end");
$log->close(); unset($log);
?>
