<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdcodeapiService.php');

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
	, "PGM_ID"=>"RDCODEAPI"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	, "FORMAT" => "LINE" //JSON, LINE
	)
);
$log->info("RdcodeapiControl___________________________start");
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
}else if($objAuth->isAuth("RDCODEAPI",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDCODEAPI",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDCODEAPI",$ctl,"N");
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
//FILE먼저 : G2, 조회결과
//FILE먼저 : G3, CDD
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-PCD"] = reqGetString("G1-PCD",30);//PCD, RORW=RW, INHERIT=N, METHOD=GET
$REQ["G1-PCD"] = getFilter($REQ["G1-PCD"],"","//");	
$REQ["G1-CD"] = reqGetString("G1-CD",30);//CD, RORW=RW, INHERIT=N, METHOD=GET
$REQ["G1-CD"] = getFilter($REQ["G1-CD"],"CLEARTEXT","/--미 정의--/");	

//G2, 조회결과 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G3, CDD - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-CODED_SEQ"] = reqPostNumber("G3-CODED_SEQ",30);//SEQ, RORW=RW, INHERIT=N	
$REQ["G3-CODED_SEQ"] = getFilter($REQ["G3-CODED_SEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G3-CD"] = reqPostString("G3-CD",30);//CD, RORW=RW, INHERIT=N	
$REQ["G3-CD"] = getFilter($REQ["G3-CD"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-NM"] = reqPostString("G3-NM",100);//NM, RORW=RW, INHERIT=N	
$REQ["G3-NM"] = getFilter($REQ["G3-NM"],"SAFETEXT","/--미 정의--/");	
$REQ["G3-CDDESC"] = reqPostString("G3-CDDESC",200);//CDDESC, RORW=RW, INHERIT=N	
$REQ["G3-CDDESC"] = getFilter($REQ["G3-CDDESC"],"SAFETEXT","/--미 정의--/");	
$REQ["G3-PCD"] = reqPostString("G3-PCD",30);//PCD, RORW=RW, INHERIT=N	
$REQ["G3-PCD"] = getFilter($REQ["G3-PCD"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-ORD"] = reqPostNumber("G3-ORD",10);//ORD, RORW=RW, INHERIT=N	
$REQ["G3-ORD"] = getFilter($REQ["G3-ORD"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G3-CDVAL"] = reqPostString("G3-CDVAL",200);//CDVAL, RORW=RW, INHERIT=N	
$REQ["G3-CDVAL"] = getFilter($REQ["G3-CDVAL"],"","//");	
$REQ["G3-CDVAL2"] = reqPostString("G3-CDVAL2",200);//CDVAL2, RORW=RW, INHERIT=N	
$REQ["G3-CDVAL2"] = getFilter($REQ["G3-CDVAL2"],"","//");	
$REQ["G3-CDMIN"] = reqPostString("G3-CDMIN",30);//CDMIN, RORW=RW, INHERIT=N	
$REQ["G3-CDMIN"] = getFilter($REQ["G3-CDMIN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-CDMAX"] = reqPostString("G3-CDMAX",30);//CDMAX, RORW=RW, INHERIT=N	
$REQ["G3-CDMAX"] = getFilter($REQ["G3-CDMAX"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-DATATYPE"] = reqPostString("G3-DATATYPE",30);//데이터타입, RORW=RW, INHERIT=N	
$REQ["G3-DATATYPE"] = getFilter($REQ["G3-DATATYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G3-EDITYN"] = reqPostString("G3-EDITYN",1);//EDITYN, RORW=RW, INHERIT=N	
$REQ["G3-EDITYN"] = getFilter($REQ["G3-EDITYN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-FORMATYN"] = reqPostString("G3-FORMATYN",1);//FORMATYN, RORW=RW, INHERIT=N	
$REQ["G3-FORMATYN"] = getFilter($REQ["G3-FORMATYN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-USEYN"] = reqPostString("G3-USEYN",1);//사용, RORW=RW, INHERIT=N	
$REQ["G3-USEYN"] = getFilter($REQ["G3-USEYN"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G3-DELYN"] = reqPostString("G3-DELYN",1);//삭제YN, RORW=RW, INHERIT=N	
$REQ["G3-DELYN"] = getFilter($REQ["G3-DELYN"],"SAFETEXT","/--미 정의--/");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//조회결과	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"CD,NM"
		,"VALID"=>
			array(
			"CD"=>array("STRING",30)	
			,"NM"=>array("STRING",100)	
			)
		,"FILTER"=>
			array(
			"CD"=>array("CLEARTEXT","/--미 정의--/")
			,"NM"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdcodeapiService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_sCodeD" :
		echo $objService->goG1Scoded(); //, 조회(전체)
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //조회결과, 조회
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //CDD, 조회
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

$log->info("RdcodeapiControl___________________________end");
$log->close(); unset($log);
?>
