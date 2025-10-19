<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('layoutmngsService.php');

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
	, "PGM_ID"=>"LAYOUTMNGS"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("LayoutmngsControl___________________________start");
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
}else if($objAuth->isAuth("LAYOUTMNGS",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"LAYOUTMNGS",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"LAYOUTMNGS",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
	$REQ["USER.SEQ"] = getUserSeq();
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, LAYOUT
//FILE먼저 : G3, LAYOUTD
//FILE먼저 : G4, LAYOUTS

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-LAYOUTID"] = reqPostString("G1-LAYOUTID",30);//LAYOUTID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-LAYOUTID"] = getFilter($REQ["G1-LAYOUTID"],"CLEARTEXT","/--미 정의--/");	

//G2, LAYOUT - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PJTSEQ"] = reqPostNumber("G2-PJTSEQ",20);//PJTSEQ, RORW=, INHERIT=Y	
$REQ["G2-PJTSEQ"] = getFilter($REQ["G2-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G2-LAYOUTID"] = reqPostString("G2-LAYOUTID",30);//LAYOUTID, RORW=, INHERIT=Y	
$REQ["G2-LAYOUTID"] = getFilter($REQ["G2-LAYOUTID"],"CLEARTEXT","/--미 정의--/");	

//G3, LAYOUTD - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, LAYOUTS - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//LAYOUT	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//LAYOUTD	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//LAYOUTS	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"PJTSEQ,LAYOUTID,GRPCNT,USEYN,ADDDT,ADDID,MODDT,MODID"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"LAYOUTID"=>array("STRING",30)	
			,"GRPCNT"=>array("NUMBER",10)	
			,"USEYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"ADDID"=>array("NUMBER",10)	
			,"MODDT"=>array("STRING",14)	
			,"MODID"=>array("NUMBER",10)	
			)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"LAYOUTID"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPCNT"=>array("CLEARTEXT","/--미 정의--/")
			,"USEYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADDID"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODID"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"LAYOUTDSEQ,PJTSEQ,LAYOUTID,GRPID,REFGRPID,ORD,GRPTYPE,GRPWIDTH,GRPHEIGHT,VBOX,ADDDT,MODDT"
		,"VALID"=>
			array(
			"LAYOUTDSEQ"=>array("NUMBER",10)	
			,"PJTSEQ"=>array("NUMBER",20)	
			,"LAYOUTID"=>array("STRING",30)	
			,"GRPID"=>array("STRING",30)	
			,"REFGRPID"=>array("STRING",30)	
			,"ORD"=>array("NUMBER",10)	
			,"GRPTYPE"=>array("STRING",10)	
			,"GRPWIDTH"=>array("STRING",10)	
			,"GRPHEIGHT"=>array("STRING",10)	
			,"VBOX"=>array("STRING",10)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"LAYOUTDSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"LAYOUTID"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"REFGRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRPTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"GRPWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"VBOX"=>array("CLEARTEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"LAYOUTSSEQ,LAYOUTID,GRPID,REFGRPID,ORD,GRPTYPE,GRPWIDTH,GRPHEIGHT,PGRPID,SPLITGUTTERSIZE,SPLITDIRECTION,SPLITMINSIZE,ADDDT,ADDID,MODDT,MODID"
		,"VALID"=>
			array(
			"LAYOUTSSEQ"=>array("NUMBER",10)	
			,"LAYOUTID"=>array("STRING",30)	
			,"GRPID"=>array("STRING",30)	
			,"REFGRPID"=>array("STRING",30)	
			,"ORD"=>array("NUMBER",10)	
			,"GRPTYPE"=>array("STRING",10)	
			,"GRPWIDTH"=>array("STRING",10)	
			,"GRPHEIGHT"=>array("STRING",10)	
			,"PGRPID"=>array("STRING",30)	
			,"SPLITGUTTERSIZE"=>array("STRING",30)	
			,"SPLITDIRECTION"=>array("STRING",30)	
			,"SPLITMINSIZE"=>array("STRING",30)	
			,"ADDDT"=>array("STRING",14)	
			,"ADDID"=>array("NUMBER",10)	
			,"MODDT"=>array("STRING",14)	
			,"MODID"=>array("NUMBER",10)	
			)
		,"FILTER"=>
			array(
			"LAYOUTSSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"LAYOUTID"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"REFGRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRPTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"GRPWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"GRPHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"PGRPID"=>array("","//")
			,"SPLITGUTTERSIZE"=>array("","//")
			,"SPLITDIRECTION"=>array("","//")
			,"SPLITMINSIZE"=>array("","//")
			,"ADDDT"=>array("","//")
			,"ADDID"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("","//")
			,"MODID"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new layoutmngsService($REQ);
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
		echo $objService->goG2Search(); //LAYOUT, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //LAYOUT, 저장
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //LAYOUT, 엑셀다운로드
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //LAYOUT, 선택저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //LAYOUTD, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //LAYOUTD, 저장
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //LAYOUTD, 엑셀다운로드
		break;
	case "G3_CHKSAVE" :
		echo $objService->goG3Chksave(); //LAYOUTD, 선택저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //LAYOUTS, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //LAYOUTS, 저장
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

$log->info("LayoutmngsControl___________________________end");
$log->close(); unset($log);
?>
