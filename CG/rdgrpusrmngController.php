<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('rdgrpusrmngService.php');

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
	, "PGM_ID"=>"RDGRPUSRMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RdgrpusrmngControl___________________________start");
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
}else if($objAuth->isAuth("RDGRPUSRMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"RDGRPUSRMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"RDGRPUSRMNG",$ctl,"N");
	JsonMsg("500","120",$ctl . " 권한이 없습니다.");
}
		//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "POWER";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 조회 조건
//FILE먼저 : G2, 그룹
//FILE먼저 : G3, 그룹에 속함
//FILE먼저 : G4, 해당그룹에 미포함

//G1, 조회 조건 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-GRP_SEQ"] = reqPostString("G1-GRP_SEQ",30);//GRP_SEQ, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-GRP_SEQ"] = getFilter($REQ["G1-GRP_SEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G1-GRP_NM"] = reqPostString("G1-GRP_NM",30);//GRP_NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-GRP_NM"] = getFilter($REQ["G1-GRP_NM"],"SAFETEXT","/--미 정의--/");	
$REQ["G1-USE_YN"] = reqPostString("G1-USE_YN",1);//USE_YN, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-USE_YN"] = getFilter($REQ["G1-USE_YN"],"SAFETEXT","/--미 정의--/");	
$REQ["G1-USR_ID"] = reqPostString("G1-USR_ID",10);//USR_ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-USR_ID"] = getFilter($REQ["G1-USR_ID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G1-USR_NM"] = reqPostString("G1-USR_NM",10);//USR_NM, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-USR_NM"] = getFilter($REQ["G1-USR_NM"],"SAFETEXT","/--미 정의--/");	

//G2, 그룹 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-GRP_SEQ"] = reqPostString("G2-GRP_SEQ",30);//GRP_SEQ, RORW=, INHERIT=Y	
$REQ["G2-GRP_SEQ"] = getFilter($REQ["G2-GRP_SEQ"],"REGEXMAT","/^[0-9]+$/");	

//G3, 그룹에 속함 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G4, 해당그룹에 미포함 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//그룹	
$REQ["G3-JSON"] = json_decode($_POST["G3-JSON"],true);//그룹에 속함	
$REQ["G4-JSON"] = json_decode($_POST["G4-JSON"],true);//해당그룹에 미포함	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"GRP_SEQ,GRP_NM,USE_YN,ADD_DT,MOD_DT"
		,"VALID"=>
			array(
			"GRP_SEQ"=>array("STRING",30)	
			,"GRP_NM"=>array("STRING",30)	
			,"USE_YN"=>array("STRING",1)	
			,"ADD_DT"=>array("STRING",14)	
			,"MOD_DT"=>array("STRING",14)	
			)
		,"FILTER"=>
			array(
			"GRP_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRP_NM"=>array("SAFETEXT","/--미 정의--/")
			,"USE_YN"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MOD_DT"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
$REQ["G3-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G3-JSON"]
		,"COLORD"=>"CHK,GRP_SEQ,USR_SEQ,USR_ID,USR_NM,ADD_DT,ADD_ID"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",3)	
			,"GRP_SEQ"=>array("STRING",30)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"USR_NM"=>array("STRING",10)	
			,"ADD_DT"=>array("STRING",14)	
			,"ADD_ID"=>array("STRING",30)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"GRP_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"USR_NM"=>array("SAFETEXT","/--미 정의--/")
			,"ADD_DT"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADD_ID"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
$REQ["G4-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G4-JSON"]
		,"COLORD"=>"CHK,USR_SEQ,USR_ID,USR_NM"
		,"VALID"=>
			array(
			"CHK"=>array("NUMBER",3)	
			,"USR_SEQ"=>array("NUMBER",10)	
			,"USR_ID"=>array("STRING",10)	
			,"USR_NM"=>array("STRING",10)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"USR_SEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"USR_ID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"USR_NM"=>array("SAFETEXT","/--미 정의--/")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new rdgrpusrmngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_SEARCHALL" :
		echo $objService->goG1Searchall(); //조회 조건, 조회(전체)
		break;
	case "G1_SAVE" :
		echo $objService->goG1Save(); //조회 조건, 저장
		break;
	case "G2_SEARCH" :
		echo $objService->goG2Search(); //그룹, 조회
		break;
	case "G2_SAVE" :
		echo $objService->goG2Save(); //그룹, S
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //그룹에 속함, 조회
		break;
	case "G3_CHKDEL" :
		echo $objService->goG3Chkdel(); //그룹에 속함, 선택 삭제
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //해당그룹에 미포함, 조회
		break;
	case "G4_CHKSAVE" :
		echo $objService->goG4Chksave(); //해당그룹에 미포함, 선택 추가
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

$log->info("RdgrpusrmngControl___________________________end");
$log->close(); unset($log);
?>
