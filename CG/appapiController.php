<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('appapiService.php');

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
	, "PGM_ID"=>"APPAPI"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("AppapiControl___________________________start");
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
}else if($objAuth->isAuth("APPAPI",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"APPAPI",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"APPAPI",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : C2, 컨디션1
//FILE먼저 : G3, 그리드1
//FILE먼저 : F4, 폼뷰1
$REQ["F4-MYFILE_NM"] = $_FILES["F4-MYFILE"]["name"];//MYFILE
$REQ["F4-MYFILE_TYPE"] = $_FILES["F4-MYFILE"]["type"];//MYFILE
$REQ["F4-MYFILE_TMPNM"] = $_FILES["F4-MYFILE"]["tmp_name"];//MYFILE
$REQ["F4-MYFILE_SIZE"] = $_FILES["F4-MYFILE"]["size"];//MYFILE
$REQ["F4-MYFILE_ERROR"] = $_FILES["F4-MYFILE"]["error"];//MYFILE
$REQ["F4-MYFILE_HASH"] = hash_file('sha256', $_FILES["F4-MYFILE"]["tmp_name"]);
$REQ["F4-MYFILE_IMGTYPE"] = exif_imagetype($_FILES["F4-MYFILE"]["tmp_name"]);
$REQ["F4-CTLCUD"] = reqPostString("F4-CTLCUD",2);

//C2, 컨디션1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["C2-API_SEQ"] = reqPostString("C2-API_SEQ",10);//SEQ, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C2-API_SEQ"] = getFilter($REQ["C2-API_SEQ"],"","//");	
$REQ["C2-API_NM"] = reqPostString("C2-API_NM",50);//NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C2-API_NM"] = getFilter($REQ["C2-API_NM"],"","//");	
$REQ["C2-PGM_ID"] = reqPostString("C2-PGM_ID",50);//ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C2-PGM_ID"] = getFilter($REQ["C2-PGM_ID"],"","//");	
$REQ["C2-URL"] = reqPostString("C2-URL",50);//URL, RORW=RW, INHERIT=N, METHOD=POST
$REQ["C2-URL"] = getFilter($REQ["C2-URL"],"","//");	

//G3, 그리드1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-API_SEQ"] = reqPostNumber("G3-API_SEQ",10);//SEQ, RORW=RO, INHERIT=Y	
$REQ["G3-API_SEQ"] = getFilter($REQ["G3-API_SEQ"],"CLEARTEXT","/--미 정의--/");	

//F4, 폼뷰1 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["F4-CAL"] = reqPostString("F4-CAL",40);//달력, RORW=RW, INHERIT=N	
$REQ["F4-CAL"] = getFilter($REQ["F4-CAL"],"CLEARTEXT","/--미 정의--/");	
$REQ["F4-API_SEQ"] = reqPostString("F4-API_SEQ",10);//SEQ, RORW=RW, INHERIT=N	
$REQ["F4-API_SEQ"] = getFilter($REQ["F4-API_SEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["F4-API_NM"] = reqPostString("F4-API_NM",50);//NM, RORW=RW, INHERIT=N	
$REQ["F4-API_NM"] = getFilter($REQ["F4-API_NM"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-PGM_ID"] = reqPostString("F4-PGM_ID",50);//ID, RORW=RW, INHERIT=N	
$REQ["F4-PGM_ID"] = getFilter($REQ["F4-PGM_ID"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-URL"] = reqPostString("F4-URL",50);//URL, RORW=RW, INHERIT=N	
$REQ["F4-URL"] = getFilter($REQ["F4-URL"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-REQ_ENCTYPE"] = reqPostString("F4-REQ_ENCTYPE",55);//REQENCTYPE, RORW=RW, INHERIT=N	
$REQ["F4-REQ_ENCTYPE"] = getFilter($REQ["F4-REQ_ENCTYPE"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-REQ_DATATYPE"] = reqPostString("F4-REQ_DATATYPE",50);//REQDATATYPE, RORW=RW, INHERIT=N	
$REQ["F4-REQ_DATATYPE"] = getFilter($REQ["F4-REQ_DATATYPE"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-REQ_BODY"] = reqPostString("F4-REQ_BODY",50);//REQBODY, RORW=RW, INHERIT=N	
$REQ["F4-REQ_BODY"] = getFilter($REQ["F4-REQ_BODY"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-RES_BODY"] = reqPostString("F4-RES_BODY",50);//RESBODY, RORW=RW, INHERIT=N	
$REQ["F4-RES_BODY"] = getFilter($REQ["F4-RES_BODY"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-MYFILESVRNM"] = reqPostString("F4-MYFILESVRNM",40);//MYFILESVRNM, RORW=RW, INHERIT=N	
$REQ["F4-MYFILESVRNM"] = getFilter($REQ["F4-MYFILESVRNM"],"SAFETEXT","/--미 정의--/");	
$REQ["F4-MYFILE"] = reqPostString("F4-MYFILE",40);//MYFILE, RORW=RW, INHERIT=N	
$REQ["F4-MYFILE"] = getFilter($REQ["F4-MYFILE"],"SAFETEXT","/--미 정의--/");	
//,  입력값 필터 
//,  입력값 필터 
$REQ["G3-CHK"] = $_POST["G3-CHK"];//CHK 받기
//filterGridChk($tStr,$tDataType,$tDataSize,$tValidType,$tValidRule)
$REQ["G3-CHK"] = filterGridChk($REQ["G3-CHK"],"NUMBER",10,"CLEARTEXT","/--미 정의--/");//API_SEQ 입력값검증
	array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new appapiService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "C2_SAVE" :
		echo $objService->goC2Save(); //컨디션1, 저장
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //그리드1, 조회
		break;
	case "G3_CHKSAVE2" :
		echo $objService->goG3Chksave2(); //그리드1, 11
		break;
	case "F4_SEARCH" :
		echo $objService->goF4Search(); //폼뷰1, 조회
		break;
	case "F4_SAVE" :
		echo $objService->goF4Save(); //폼뷰1, 저장
		break;
	case "F4_DELETE" :
		echo $objService->goF4Delete(); //폼뷰1, 삭제
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

$log->info("AppapiControl___________________________end");
$log->close(); unset($log);
?>
