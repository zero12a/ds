<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdcodemngService.php');

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
	, "PGM_ID"=>"RDCODEMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("RdcodemngControl___________________________start");
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
}else if($objAuth->isAuth("RDCODEMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDCODEMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDCODEMNG",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 1
//FILE먼저 : G2, 마스터
//FILE먼저 : G3, 상세

//G1, 1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-ADD_DT"] = reqPostString("G1-ADD_DT",14);//ADD, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-ADD_DT"] = getFilter($REQ["G1-ADD_DT"],"REGEXMAT","/^[0-9]+$/");	

//G2, 마스터 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PCD"] = reqPostString("G2-PCD",30);//PCD, RORW=, INHERIT=Y	
$REQ["G2-PCD"] = getFilter($REQ["G2-PCD"],"CLEARTEXT","/--미 정의--/");	

//G3, 상세 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//마스터	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//상세	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"PCD,PNM,PCDDESC,ORD,USEYN,DELYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"PCD"=>array("STRING",30)	
			,"PNM"=>array("STRING",100)	
			,"PCDDESC"=>array("STRING",500)	
			,"ORD"=>array("NUMBER",10)	
			,"USEYN"=>array("STRING",1)	
			,"DELYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"PCD"=>array("CLEARTEXT","/--미 정의--/")
			,"PNM"=>array("SAFETEXT","/--미 정의--/")
			,"PCDDESC"=>array("CLEARTEXT","/--미 정의--/")
			,"ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"USEYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"DELYN"=>array("SAFETEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"CODED_SEQ,CD,NM,CDDESC,PCD,ORD,CDVAL,CDVAL2,CDMIN,CDMAX,DATATYPE,EDITYN,FORMATYN,USEYN,DELYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"CODED_SEQ"=>array("NUMBER",30)	
			,"CD"=>array("STRING",30)	
			,"NM"=>array("STRING",100)	
			,"CDDESC"=>array("STRING",200)	
			,"PCD"=>array("STRING",30)	
			,"ORD"=>array("NUMBER",10)	
			,"CDVAL"=>array("STRING",200)	
			,"CDVAL2"=>array("STRING",200)	
			,"CDMIN"=>array("STRING",30)	
			,"CDMAX"=>array("STRING",30)	
			,"DATATYPE"=>array("STRING",30)	
			,"EDITYN"=>array("STRING",1)	
			,"FORMATYN"=>array("STRING",1)	
			,"USEYN"=>array("STRING",1)	
			,"DELYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CODED_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"CD"=>array("CLEARTEXT","/--미 정의--/")
			,"NM"=>array("SAFETEXT","/--미 정의--/")
			,"CDDESC"=>array("SAFETEXT","/--미 정의--/")
			,"PCD"=>array("CLEARTEXT","/--미 정의--/")
			,"ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"CDVAL"=>array("","//")
			,"CDVAL2"=>array("","//")
			,"CDMIN"=>array("CLEARTEXT","/--미 정의--/")
			,"CDMAX"=>array("CLEARTEXT","/--미 정의--/")
			,"DATATYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"EDITYN"=>array("CLEARTEXT","/--미 정의--/")
			,"FORMATYN"=>array("CLEARTEXT","/--미 정의--/")
			,"USEYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"DELYN"=>array("SAFETEXT","/--미 정의--/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdcodemngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //1, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //1, 저장
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //마스터, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //마스터, 저장
		break;
	case "G2_EXCEL" :
		echo $objService->goG2Excel(); //마스터, 엑셀다운로드
		break;
	case "G2_CHKSAVE" :
		echo $objService->goG2Chksave(); //마스터, 선택저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //상세, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //상세, 저장
		break;
	case "G3_EXCEL" :
		echo $objService->goG3Excel(); //상세, 엑셀다운로드
		break;
	case "G3_CHKSAVE" :
		echo $objService->goG3Chksave(); //상세, 선택저장
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

$log->info("RdcodemngControl___________________________end");
$log->close(); unset($log);
?>
