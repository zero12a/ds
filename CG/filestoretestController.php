<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('filestoretestService.php');

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
	, "PGM_ID"=>"FILESTORETEST"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("FilestoretestControl___________________________start");
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
}else if($objAuth->isAuth("FILESTORETEST",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"FILESTORETEST",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"FILESTORETEST",$ctl,"N");
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
//FILE먼저 : G2, G1
//FILE먼저 : G3, G2
$REQ["G3-MYFILE1_NM"] = $_FILES["G3-MYFILE1"]["name"];//MYFILE
$REQ["G3-MYFILE1_TYPE"] = $_FILES["G3-MYFILE1"]["type"];//MYFILE
$REQ["G3-MYFILE1_TMPNM"] = $_FILES["G3-MYFILE1"]["tmp_name"];//MYFILE
$REQ["G3-MYFILE1_SIZE"] = $_FILES["G3-MYFILE1"]["size"];//MYFILE
$REQ["G3-MYFILE1_ERROR"] = $_FILES["G3-MYFILE1"]["error"];//MYFILE
$REQ["G3-MYFILE1_HASH"] = hash_file('sha256', $_FILES["G3-MYFILE1"]["tmp_name"]);
$REQ["G3-MYFILE1_IMGTYPE"] = exif_imagetype($_FILES["G3-MYFILE1"]["tmp_name"]);
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2, G1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-API_SEQ"] = reqPostNumber("G2-API_SEQ",10);//SEQ, RORW=, INHERIT=Y	
$REQ["G2-API_SEQ"] = getFilter($REQ["G2-API_SEQ"],"CLEARTEXT","/--미 정의--/");	

//G3, G2 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-MYFILE1"] = reqPostString("G3-MYFILE1",40);//MYFILE, RORW=RW, INHERIT=N	
$REQ["G3-MYFILE1"] = getFilter($REQ["G3-MYFILE1"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-MYFILE"] = reqPostString("G3-MYFILE",40);//MYFILE, RORW=RW, INHERIT=N	
$REQ["G3-MYFILE"] = getFilter($REQ["G3-MYFILE"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-MYFILESVRNM"] = reqPostString("G3-MYFILESVRNM",40);//MYFILESVRNM, RORW=RW, INHERIT=N	
$REQ["G3-MYFILESVRNM"] = getFilter($REQ["G3-MYFILESVRNM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-MYSIGN2"] = reqPostString("G3-MYSIGN2",10000);//SIGN, RORW=RW, INHERIT=N	
$REQ["G3-MYSIGN2"] = getFilter($REQ["G3-MYSIGN2"],"","//");	
$REQ["G3-WEJODIT"] = reqPostString("G3-WEJODIT",4000);//JODIT, RORW=RW, INHERIT=N	
$REQ["G3-WEJODIT"] = getFilter($REQ["G3-WEJODIT"],"","//");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//G1	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"API_SEQ,MYFILE,MYFILESVRNM,MYSIGNSVRNM,WEJODIT,ADD_DT"
		,"VALID"=>
			array(
			"API_SEQ"=>array("NUMBER",10)	
			,"MYFILE"=>array("STRING",40)	
			,"MYFILESVRNM"=>array("STRING",40)	
			,"MYSIGNSVRNM"=>array("STRING",100)	
			,"WEJODIT"=>array("STRING",4000)	
			,"ADD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"API_SEQ"=>array("CLEARTEXT","/--미 정의--/")
			,"MYFILE"=>array("CLEARTEXT","/--미 정의--/")
			,"MYFILESVRNM"=>array("CLEARTEXT","/--미 정의--/")
			,"MYSIGNSVRNM"=>array("","//")
			,"WEJODIT"=>array("","//")
			,"ADD_DT"=>array("CLEARTEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new filestoretestService($REQ);
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
		echo $objService->goG2Search(); //G1, 조회
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //G2, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //G2, 저장
		break;
	case "G3_DELETE" :
		echo $objService->goG3Delete(); //G2, 삭제
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

$log->info("FilestoretestControl___________________________end");
$log->close(); unset($log);
?>
