<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdmnutreemngService.php');

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
	, "PGM_ID"=>"RDMNUTREEMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("RdmnutreemngControl___________________________start");
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
}else if($objAuth->isAuth("RDMNUTREEMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDMNUTREEMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDMNUTREEMNG",$ctl,"N");
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
//FILE먼저 : G2, MNU1
//FILE먼저 : G3, MNU2
//FILE먼저 : G4, 미지정PGM
//FILE먼저 : G5, MNU1에 추가
//FILE먼저 : G6, MNU2에 추가
$REQ["G5-CTLCUD"] = reqPostString("G5-CTLCUD",2);
$REQ["G6-CTLCUD"] = reqPostString("G6-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, MNU1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-MNU1_SEQ"] = reqPostNumber("G2-MNU1_SEQ",30);//MNU1_SEQ, RORW=, INHERIT=Y	
$REQ["G2-MNU1_SEQ"] = getFilter($REQ["G2-MNU1_SEQ"],"","//");	

//G3, MNU2 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, 미지정PGM - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G5, MNU1에 추가 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G5-MNU_ORD"] = reqPostString("G5-MNU_ORD",30);//MNU_ORD, RORW=RW, INHERIT=N	
$REQ["G5-MNU_ORD"] = getFilter($REQ["G5-MNU_ORD"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G5-MNU_ICON"] = reqPostString("G5-MNU_ICON",50);//MNU_ICON, RORW=RW, INHERIT=N	
$REQ["G5-MNU_ICON"] = getFilter($REQ["G5-MNU_ICON"],"","//");	

//G6, MNU2에 추가 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G6-MNU_ORD"] = reqPostString("G6-MNU_ORD",30);//MNU_ORD, RORW=RW, INHERIT=N	
$REQ["G6-MNU_ORD"] = getFilter($REQ["G6-MNU_ORD"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G6-MNU1_SEQ"] = reqPostNumber("G6-MNU1_SEQ",30);//MNU1_SEQ, RORW=RW, INHERIT=N	
$REQ["G6-MNU1_SEQ"] = getFilter($REQ["G6-MNU1_SEQ"],"REGEXMAT","/^[0-9]+$/");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//MNU1	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//MNU2	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//미지정PGM	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"MNU1_SEQ,FOLDER_YN,FOLDER_NM,PGMID,MNU_NM,MNU_ICON,MNU_ORD,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"MNU1_SEQ"=>array("NUMBER",30)	
			,"FOLDER_YN"=>array("STRING",1)	
			,"FOLDER_NM"=>array("STRING",30)	
			,"PGMID"=>array("STRING",20)	
			,"MNU_NM"=>array("STRING",30)	
			,"MNU_ICON"=>array("STRING",50)	
			,"MNU_ORD"=>array("STRING",30)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"MNU1_SEQ"=>array("","//")
			,"FOLDER_YN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"FOLDER_NM"=>array("SAFETEXT","/--미 정의--/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"MNU_NM"=>array("CLEARTEXT","/--미 정의--/")
			,"MNU_ICON"=>array("","//")
			,"MNU_ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"MOD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"MNU2_SEQ,MNU1_SEQ,PGMID,MNU_NM,MNU_ORD,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"MNU2_SEQ"=>array("NUMBER",30)	
			,"MNU1_SEQ"=>array("NUMBER",30)	
			,"PGMID"=>array("STRING",20)	
			,"MNU_NM"=>array("STRING",30)	
			,"MNU_ORD"=>array("STRING",30)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"MNU2_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"MNU1_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"MNU_NM"=>array("CLEARTEXT","/--미 정의--/")
			,"MNU_ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"MOD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"CHK,MNU_SEQ,MNU_NM,PGMID,URL,PGMTYPE,MNU_ORD,USE_YN,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"CHK"=>array("STRING",100)	
			,"MNU_SEQ"=>array("STRING",20)	
			,"MNU_NM"=>array("STRING",30)	
			,"PGMID"=>array("STRING",20)	
			,"URL"=>array("STRING",50)	
			,"PGMTYPE"=>array("STRING",10)	
			,"MNU_ORD"=>array("STRING",30)	
			,"USE_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"MNU_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"MNU_NM"=>array("CLEARTEXT","/--미 정의--/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"URL"=>array("CLEARTEXT","/--미 정의--/")
			,"PGMTYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"MNU_ORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			,"MOD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdmnutreemngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //, 조회(전체)
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //MNU1, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //MNU1, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //MNU2, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //MNU2, 저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //미지정PGM, 조회
		break;
	case "G4_CHKSAVE1" :
		echo $objService->goG4Chksave1(); //미지정PGM, 선택 MNU1에 저장
		break;
	case "G4_CHKSAVE2" :
		echo $objService->goG4Chksave2(); //미지정PGM, 선택 MNU2에 저장
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

$log->info("RdmnutreemngControl___________________________end");
$log->close(); unset($log);
?>
