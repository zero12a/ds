<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('iconmngService.php');

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
	, "PGM_ID"=>"ICONMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("IconmngControl___________________________start");
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
}else if($objAuth->isAuth("ICONMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"ICONMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"ICONMNG",$ctl,"N");
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
$REQ["G3-ICONFILE_NM"] = $_FILES["G3-ICONFILE"]["name"];//ICONFILE
$REQ["G3-ICONFILE_TYPE"] = $_FILES["G3-ICONFILE"]["type"];//ICONFILE
$REQ["G3-ICONFILE_TMPNM"] = $_FILES["G3-ICONFILE"]["tmp_name"];//ICONFILE
$REQ["G3-ICONFILE_SIZE"] = $_FILES["G3-ICONFILE"]["size"];//ICONFILE
$REQ["G3-ICONFILE_ERROR"] = $_FILES["G3-ICONFILE"]["error"];//ICONFILE
$REQ["G3-ICONFILE_HASH"] = hash_file('sha256', $_FILES["G3-ICONFILE"]["tmp_name"]);
$REQ["G3-ICONFILE_IMGTYPE"] = exif_imagetype($_FILES["G3-ICONFILE"]["tmp_name"]);
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G2,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-ICONSEQ"] = reqPostNumber("G2-ICONSEQ",20);//seq, RORW=RO, INHERIT=Y	
$REQ["G2-ICONSEQ"] = getFilter($REQ["G2-ICONSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G2-CHK"] = reqPostNumber("G2-CHK",100);//CHK, RORW=RW, INHERIT=N	
$REQ["G2-CHK"] = getFilter($REQ["G2-CHK"],"REGEXMAT","/^([0-9a-zA-Z]|,)+$/");	
$REQ["G2-IMGNM"] = reqPostString("G2-IMGNM",100);//IMGNM, RORW=RO, INHERIT=Y	
$REQ["G2-IMGNM"] = getFilter($REQ["G2-IMGNM"],"","//");	
$REQ["G2-IMGSVRNM"] = reqPostString("G2-IMGSVRNM",100);//IMGSVRNM, RORW=RO, INHERIT=Y	
$REQ["G2-IMGSVRNM"] = getFilter($REQ["G2-IMGSVRNM"],"","//");	
$REQ["G2-IMGSIZE"] = reqPostNumber("G2-IMGSIZE",100);//IMGSIZE, RORW=RO, INHERIT=Y	
$REQ["G2-IMGSIZE"] = getFilter($REQ["G2-IMGSIZE"],"","//");	
$REQ["G2-IMGHASH"] = reqPostString("G2-IMGHASH",100);//IMGHASH, RORW=RO, INHERIT=Y	
$REQ["G2-IMGHASH"] = getFilter($REQ["G2-IMGHASH"],"","//");	
$REQ["G2-IMGTYPE"] = reqPostNumber("G2-IMGTYPE",2);//IMGTYPE, RORW=RW, INHERIT=Y	
$REQ["G2-IMGTYPE"] = getFilter($REQ["G2-IMGTYPE"],"","//");	
$REQ["G2-IMGTYPE2"] = reqPostNumber("G2-IMGTYPE2",2);//IMGTYPE2, RORW=RW, INHERIT=Y	
$REQ["G2-IMGTYPE2"] = getFilter($REQ["G2-IMGTYPE2"],"","//");	
$REQ["G2-IMGTYPE3"] = reqPostString("G2-IMGTYPE3",100);//IMGTYPE3, RORW=RW, INHERIT=Y	
$REQ["G2-IMGTYPE3"] = getFilter($REQ["G2-IMGTYPE3"],"","//");	
$REQ["G2-IMGTYPE4"] = reqPostString("G2-IMGTYPE4",200);//IMGTYPE4, RORW=RW, INHERIT=Y	
$REQ["G2-IMGTYPE4"] = getFilter($REQ["G2-IMGTYPE4"],"","//");	
$REQ["G2-CODEMIRROR"] = reqPostString("G2-CODEMIRROR",300);//CODEMIRROR, RORW=RO, INHERIT=Y	
$REQ["G2-CODEMIRROR"] = getFilter($REQ["G2-CODEMIRROR"],"","//");	
$REQ["G2-TXTAREA"] = reqPostString("G2-TXTAREA",100);//TXTAREA, RORW=RW, INHERIT=Y	
$REQ["G2-TXTAREA"] = getFilter($REQ["G2-TXTAREA"],"","//");	
$REQ["G2-TXTVIEW"] = reqPostString("G2-TXTVIEW",100);//TXTVIEW, RORW=RW, INHERIT=Y	
$REQ["G2-TXTVIEW"] = getFilter($REQ["G2-TXTVIEW"],"","//");	
$REQ["G2-HTMLVIEW"] = reqPostString("G2-HTMLVIEW",100);//HTMLVIEW, RORW=RW, INHERIT=Y	
$REQ["G2-HTMLVIEW"] = getFilter($REQ["G2-HTMLVIEW"],"","//");	
$REQ["G2-SIGNPAD"] = reqPostString("G2-SIGNPAD",9000);//SIGNPAD, RORW=RO, INHERIT=Y	
$REQ["G2-SIGNPAD"] = getFilter($REQ["G2-SIGNPAD"],"","//");	
$REQ["G2-ADDDT2"] = reqPostString("G2-ADDDT2",14);//생성일2, RORW=RW, INHERIT=Y	
$REQ["G2-ADDDT2"] = getFilter($REQ["G2-ADDDT2"],"","//");	
$REQ["G2-ADDDT"] = reqPostString("G2-ADDDT",14);//생성일, RORW=RO, INHERIT=Y	
$REQ["G2-ADDDT"] = getFilter($REQ["G2-ADDDT"],"","//");	

//G3,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-ICONSEQ"] = reqPostNumber("G3-ICONSEQ",20);//seq, RORW=RW, INHERIT=N	
$REQ["G3-ICONSEQ"] = getFilter($REQ["G3-ICONSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G3-IMGNM"] = reqPostString("G3-IMGNM",100);//IMGNM, RORW=RW, INHERIT=N	
$REQ["G3-IMGNM"] = getFilter($REQ["G3-IMGNM"],"","//");	
$REQ["G3-IMGSIZE"] = reqPostNumber("G3-IMGSIZE",100);//IMGSIZE, RORW=RW, INHERIT=N	
$REQ["G3-IMGSIZE"] = getFilter($REQ["G3-IMGSIZE"],"","//");	
$REQ["G3-IMGSVRNM"] = reqPostString("G3-IMGSVRNM",100);//IMGSVRNM, RORW=RW, INHERIT=N	
$REQ["G3-IMGSVRNM"] = getFilter($REQ["G3-IMGSVRNM"],"","//");	
$REQ["G3-IMGHASH"] = reqPostString("G3-IMGHASH",100);//IMGHASH, RORW=RW, INHERIT=N	
$REQ["G3-IMGHASH"] = getFilter($REQ["G3-IMGHASH"],"","//");	
$REQ["G3-IMGTYPE"] = reqPostNumber("G3-IMGTYPE",2);//IMGTYPE, RORW=RW, INHERIT=N	
$REQ["G3-IMGTYPE"] = getFilter($REQ["G3-IMGTYPE"],"","//");	
$REQ["G3-IMGTYPE2"] = reqPostNumber("G3-IMGTYPE2",2);//IMGTYPE2, RORW=RW, INHERIT=N	
$REQ["G3-IMGTYPE2"] = getFilter($REQ["G3-IMGTYPE2"],"","//");	
$REQ["G3-CODEMIRROR"] = reqPostString("G3-CODEMIRROR",300);//CODEMIRROR, RORW=RW, INHERIT=N	
$REQ["G3-CODEMIRROR"] = getFilter($REQ["G3-CODEMIRROR"],"","//");	
$REQ["G3-TXTAREA"] = reqPostString("G3-TXTAREA",100);//TXTAREA, RORW=RW, INHERIT=N	
$REQ["G3-TXTAREA"] = getFilter($REQ["G3-TXTAREA"],"","//");	
$REQ["G3-HTMLVIEW"] = reqPostString("G3-HTMLVIEW",100);//HTMLVIEW, RORW=RW, INHERIT=N	
$REQ["G3-HTMLVIEW"] = getFilter($REQ["G3-HTMLVIEW"],"","//");	
$REQ["G3-SIGNPAD"] = reqPostString("G3-SIGNPAD",9000);//SIGNPAD, RORW=RW, INHERIT=N	
$REQ["G3-SIGNPAD"] = getFilter($REQ["G3-SIGNPAD"],"","//");	
$REQ["G3-ICONFILE"] = reqPostString("G3-ICONFILE",100);//ICONFILE, RORW=RW, INHERIT=N	
$REQ["G3-ICONFILE"] = getFilter($REQ["G3-ICONFILE"],"","//");	
$REQ["G3-IMGTYPE4"] = reqPostString("G3-IMGTYPE4",200);//IMGTYPE4, RORW=RW, INHERIT=N	
$REQ["G3-IMGTYPE4"] = getFilter($REQ["G3-IMGTYPE4"],"","//");	
$REQ["G3-ADDDT2"] = reqPostString("G3-ADDDT2",14);//생성일2, RORW=RW, INHERIT=N	
$REQ["G3-ADDDT2"] = getFilter($REQ["G3-ADDDT2"],"","//");	
$REQ["G3-ADDDT"] = reqPostString("G3-ADDDT",14);//생성일, RORW=RW, INHERIT=N	
$REQ["G3-ADDDT"] = getFilter($REQ["G3-ADDDT"],"","//");	
$REQ["G2-XML"] = getXml2Array($_POST["G2-XML"]);//	
//,  입력값 필터 
$REQ["G2-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G2-XML"]
		,"COLORD"=>"ICONSEQ,CHK,IMGNM,IMGSVRNM,IMGSIZE,IMGHASH,IMGTYPE,IMGTYPE2,IMGTYPE3,IMGTYPE4,CODEMIRROR,TXTAREA,TXTVIEW,HTMLVIEW,SIGNPAD,ADDDT2,ADDDT"
		,"VALID"=>
			array(
			"ICONSEQ"=>array("NUMBER",20)	
			,"CHK"=>array("NUMBER",100)	
			,"IMGNM"=>array("STRING",100)	
			,"IMGSVRNM"=>array("STRING",100)	
			,"IMGSIZE"=>array("NUMBER",100)	
			,"IMGHASH"=>array("STRING",100)	
			,"IMGTYPE"=>array("NUMBER",2)	
			,"IMGTYPE2"=>array("NUMBER",2)	
			,"IMGTYPE3"=>array("STRING",100)	
			,"IMGTYPE4"=>array("STRING",200)	
			,"CODEMIRROR"=>array("STRING",300)	
			,"TXTAREA"=>array("STRING",100)	
			,"TXTVIEW"=>array("STRING",100)	
			,"HTMLVIEW"=>array("STRING",100)	
			,"SIGNPAD"=>array("STRING",9000)	
			,"ADDDT2"=>array("STRING",14)	
			,"ADDDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"ICONSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
					)
	)
);
//,  입력값 필터 
$REQ["G3-IMGTYPE3"] = $_POST["G3-IMGTYPE3"];	//checkbox 받기
$REQ["G3-IMGTYPE3"] = filterFormviewChk($REQ["G3-IMGTYPE3"],"NUMBER",100,"","//");//IMGTYPE3 입력값검증
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new iconmngService($REQ);
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
	case "G2_SAVE" :
		echo $objService->goG2Save(); //, 저장
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //, 저장
		break;
	case "G3_DELETE" :
		echo $objService->goG3Delete(); //, 삭제
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

$log->info("IconmngControl___________________________end");
$log->close(); unset($log);
?>
