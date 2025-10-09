<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('redismngService.php');

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
	, "PGM_ID"=>"REDISMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("RedismngControl___________________________start");
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
$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"REDISMNG",$ctl,"Y");
	//사용자 정보 가져오기
//로그 저장 방식 결정
//일반로그, 권한변경로그, PI로그
//NORMAL, POWER, PI
$PGM_CFG["SECTYPE"] = "NORMAL";
$PGM_CFG["SQLTXT"] = array();
array_push($_RTIME,array("[TIME 30.AUTH_CHECK]",microtime(true)));
//FILE먼저 : G1, 
//FILE먼저 : G2, 키목록
//FILE먼저 : G3, 키상세
//FILE먼저 : G4, 로그
$REQ["G3-CTLCUD"] = reqPostString("G3-CTLCUD",2);
$REQ["G4-CTLCUD"] = reqPostString("G4-CTLCUD",2);

//G1,  - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G1-REDIS_HOST"] = reqPostString("G1-REDIS_HOST",30);//REDIS_HOST, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-REDIS_HOST"] = getFilter($REQ["G1-REDIS_HOST"],"","//");	
$REQ["G1-REDIS_PORT"] = reqPostNumber("G1-REDIS_PORT",5);//REDIS_PORT, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-REDIS_PORT"] = getFilter($REQ["G1-REDIS_PORT"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G1-REDIS_PASSWORD"] = reqPostString("G1-REDIS_PASSWORD",30);//REDIS_PASSWORD, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G1-REDIS_PASSWORD"] = getFilter($REQ["G1-REDIS_PASSWORD"],"","//");	

//G2, 키목록 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )

//G3, 키상세 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-KEY"] = reqPostString("G3-KEY",100);//KEY, RORW=RW, INHERIT=N	
$REQ["G3-KEY"] = getFilter($REQ["G3-KEY"],"REGEXMAT","/^[0-9a-zA-Z ,.!?]$/");	
$REQ["G3-VALUE"] = reqPostString("G3-VALUE",4000);//VALUE, RORW=RW, INHERIT=N	
$REQ["G3-VALUE"] = getFilter($REQ["G3-VALUE"],"","//");	

//G4, 로그 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-LOG"] = reqPostString("G4-LOG",5000);//LOG, RORW=RW, INHERIT=N	
$REQ["G4-LOG"] = getFilter($REQ["G4-LOG"],"","//");	
//,  입력값 필터 
$REQ["G2-JSON"] = json_decode($_POST["G2-JSON"],true);//키목록	
//,  입력값 필터 
$REQ["G2-JSON"] = filterGridJson(
	array(
		"JSON"=>$REQ["G2-JSON"]
		,"COLORD"=>"CHK,KEY,VALUE"
		,"VALID"=>
			array(
			"CHK"=>array("STRING",100)	
			,"KEY"=>array("STRING",100)	
			,"VALUE"=>array("STRING",4000)	
			)
		,"FILTER"=>
			array(
			"CHK"=>array("REGEXMAT","/^([0-9a-zA-Z]|,)+$/")
			,"KEY"=>array("","//")
			,"VALUE"=>array("","//")
			)
	)
);
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new redismngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G1_Login" :
		echo $objService->goG1Login(); //, 로그인
		break;
	case "G1_SearchMaps" :
		echo $objService->goG1Searchmaps(); //, 키목록 조회
		break;
	case "G3_SEARCH" :
		echo $objService->goG3Search(); //키상세, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //키상세, 저장
		break;
	case "G3_DELETE" :
		echo $objService->goG3Delete(); //키상세, 삭제
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

$log->info("RedismngControl___________________________end");
$log->close(); unset($log);
?>
