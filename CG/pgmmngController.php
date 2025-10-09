<?php
header("Content-Type: application/json; charset=UTF-8"); //SVRCTL
header("Cache-Control:no-cache");
header("Pragma:no-cache");
$_RTIME = array();
array_push($_RTIME,array("[TIME 00.START]",microtime(true)));
$CFG = require_once('../../common/include/incConfig.php');//CG CONFIG
require_once($CFG["CFG_LIBS_VENDOR"]);
require_once('pgmmngService.php');

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
	, "PGM_ID"=>"PGMMNG"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
$log->info("PgmmngControl___________________________start");
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
}else if($objAuth->isAuth("PGMMNG",$ctl)){
	$objAuth->LAUTH_SEQ = $objAuth->logUsrAuth($reqToken,$resToken,"PGMMNG",$ctl,"Y");
}else{
	$objAuth->logUsrAuth($reqToken,$resToken,"PGMMNG",$ctl,"N");
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
//FILE먼저 : G3, PJT
//FILE먼저 : G4, PGM
//FILE먼저 : G5, DD
//FILE먼저 : G6, DDOBJ

//G2, 2 - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G2-PJTID"] = reqPostString("G2-PJTID",30);//프로젝트ID, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-PJTID"] = getFilter($REQ["G2-PJTID"],"","//");	
$REQ["G2-ADDDT"] = reqPostString("G2-ADDDT",14);//생성일, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-ADDDT"] = getFilter($REQ["G2-ADDDT"],"","//");	
$REQ["G2-MYRADIO"] = reqPostString("G2-MYRADIO",30);//나의라디오, RORW=RW, INHERIT=N, METHOD=POST
$REQ["G2-MYRADIO"] = getFilter($REQ["G2-MYRADIO"],"","//");	

//G3, PJT - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G3-PJTSEQ"] = reqPostNumber("G3-PJTSEQ",20);//SEQ, RORW=RW, INHERIT=Y	
$REQ["G3-PJTSEQ"] = getFilter($REQ["G3-PJTSEQ"],"","//");	
$REQ["G3-PJTID"] = reqPostString("G3-PJTID",30);//프로젝트ID, RORW=RW, INHERIT=N	
$REQ["G3-PJTID"] = getFilter($REQ["G3-PJTID"],"","//");	
$REQ["G3-PJTNM"] = reqPostString("G3-PJTNM",100);//프로젝트명, RORW=RW, INHERIT=N	
$REQ["G3-PJTNM"] = getFilter($REQ["G3-PJTNM"],"","//");	
$REQ["G3-FILECHARSET"] = reqPostString("G3-FILECHARSET",30);//파일 CHARSET, RORW=RW, INHERIT=N	
$REQ["G3-FILECHARSET"] = getFilter($REQ["G3-FILECHARSET"],"","//");	
$REQ["G3-UITOOL"] = reqPostString("G3-UITOOL",10);//UITOOL, RORW=RW, INHERIT=N	
$REQ["G3-UITOOL"] = getFilter($REQ["G3-UITOOL"],"","//");	
$REQ["G3-SVRLANG"] = reqPostString("G3-SVRLANG",10);//서버언어, RORW=RW, INHERIT=N	
$REQ["G3-SVRLANG"] = getFilter($REQ["G3-SVRLANG"],"","//");	
$REQ["G3-DEPLOYKEY"] = reqPostString("G3-DEPLOYKEY",50);//DEPLOYKEY, RORW=RW, INHERIT=N	
$REQ["G3-DEPLOYKEY"] = getFilter($REQ["G3-DEPLOYKEY"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-PKGROOT"] = reqPostString("G3-PKGROOT",10);//패키지ROOT, RORW=RW, INHERIT=N	
$REQ["G3-PKGROOT"] = getFilter($REQ["G3-PKGROOT"],"","//");	
$REQ["G3-STARTDT"] = reqPostString("G3-STARTDT",8);//시작일, RORW=RW, INHERIT=N	
$REQ["G3-STARTDT"] = getFilter($REQ["G3-STARTDT"],"","//");	
$REQ["G3-ENDDT"] = reqPostString("G3-ENDDT",8);//종료일, RORW=RW, INHERIT=N	
$REQ["G3-ENDDT"] = getFilter($REQ["G3-ENDDT"],"","//");	
$REQ["G3-PJTORD"] = reqPostNumber("G3-PJTORD",4);//정렬, RORW=RW, INHERIT=N	
$REQ["G3-PJTORD"] = getFilter($REQ["G3-PJTORD"],"","//");	
$REQ["G3-DSNM"] = reqPostString("G3-DSNM",20);//DB소스, RORW=RW, INHERIT=Y	
$REQ["G3-DSNM"] = getFilter($REQ["G3-DSNM"],"","//");	
$REQ["G3-DELYN"] = reqPostString("G3-DELYN",1);//삭제YN, RORW=RW, INHERIT=N	
$REQ["G3-DELYN"] = getFilter($REQ["G3-DELYN"],"","//");	
$REQ["G3-ADDDT"] = reqPostString("G3-ADDDT",14);//ADDDT, RORW=RW, INHERIT=N	
$REQ["G3-ADDDT"] = getFilter($REQ["G3-ADDDT"],"","//");	
$REQ["G3-MODDT"] = reqPostString("G3-MODDT",14);//수정일, RORW=RW, INHERIT=N	
$REQ["G3-MODDT"] = getFilter($REQ["G3-MODDT"],"","//");	

//G4, PGM - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G4-PJTSEQ"] = reqPostNumber("G4-PJTSEQ",20);//PJTSEQ, RORW=RW, INHERIT=N	
$REQ["G4-PJTSEQ"] = getFilter($REQ["G4-PJTSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-PGMSEQ"] = reqPostNumber("G4-PGMSEQ",30);//SEQ, RORW=RW, INHERIT=N	
$REQ["G4-PGMSEQ"] = getFilter($REQ["G4-PGMSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-PGMID"] = reqPostString("G4-PGMID",20);//프로그램ID, RORW=RW, INHERIT=N	
$REQ["G4-PGMID"] = getFilter($REQ["G4-PGMID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G4-PGMNM"] = reqPostString("G4-PGMNM",50);//프로그램이름, RORW=RW, INHERIT=N	
$REQ["G4-PGMNM"] = getFilter($REQ["G4-PGMNM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-VIEWURL"] = reqPostString("G4-VIEWURL",30);//VIEWURL, RORW=RW, INHERIT=N	
$REQ["G4-VIEWURL"] = getFilter($REQ["G4-VIEWURL"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-PGMTYPE"] = reqPostString("G4-PGMTYPE",10);//PGMTYPE, RORW=RW, INHERIT=N	
$REQ["G4-PGMTYPE"] = getFilter($REQ["G4-PGMTYPE"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-POPWIDTH"] = reqPostString("G4-POPWIDTH",10);//POPWIDTH, RORW=RW, INHERIT=N	
$REQ["G4-POPWIDTH"] = getFilter($REQ["G4-POPWIDTH"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-POPHEIGHT"] = reqPostString("G4-POPHEIGHT",10);//POPHEIGHT, RORW=RW, INHERIT=N	
$REQ["G4-POPHEIGHT"] = getFilter($REQ["G4-POPHEIGHT"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-SECTYPE"] = reqPostString("G4-SECTYPE",10);//SECTYPE, RORW=RW, INHERIT=N	
$REQ["G4-SECTYPE"] = getFilter($REQ["G4-SECTYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G4-PKGGRP"] = reqPostString("G4-PKGGRP",15);//PKGGRP, RORW=RW, INHERIT=N	
$REQ["G4-PKGGRP"] = getFilter($REQ["G4-PKGGRP"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-LOGINYN"] = reqPostString("G4-LOGINYN",1);//로그인필요, RORW=RW, INHERIT=N	
$REQ["G4-LOGINYN"] = getFilter($REQ["G4-LOGINYN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G4-DFTCTLGRPID"] = reqPostString("G4-DFTCTLGRPID",30);//DFTCTLGRPID, RORW=RW, INHERIT=N	
$REQ["G4-DFTCTLGRPID"] = getFilter($REQ["G4-DFTCTLGRPID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G4-DFTCTLFNCID"] = reqPostString("G4-DFTCTLFNCID",30);//DFTCTLFNCID, RORW=RW, INHERIT=N	
$REQ["G4-DFTCTLFNCID"] = getFilter($REQ["G4-DFTCTLFNCID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G4-PGMORD"] = reqPostNumber("G4-PGMORD",10);//ORD, RORW=RW, INHERIT=N	
$REQ["G4-PGMORD"] = getFilter($REQ["G4-PGMORD"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-ADDDT"] = reqPostString("G4-ADDDT",14);//ADDDT, RORW=RW, INHERIT=N	
$REQ["G4-ADDDT"] = getFilter($REQ["G4-ADDDT"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G4-MODDT"] = reqPostString("G4-MODDT",14);//MODDT, RORW=RW, INHERIT=N	
$REQ["G4-MODDT"] = getFilter($REQ["G4-MODDT"],"REGEXMAT","/^[0-9]+$/");	

//G5, DD - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G5-DDSEQ"] = reqPostNumber("G5-DDSEQ",10);//DDSEQ, RORW=RO, INHERIT=Y	
$REQ["G5-DDSEQ"] = getFilter($REQ["G5-DDSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G5-COLID"] = reqPostString("G5-COLID",30);//컬럼ID, RORW=RW, INHERIT=N	
$REQ["G5-COLID"] = getFilter($REQ["G5-COLID"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-COLNM"] = reqPostString("G5-COLNM",30);//컬럼명, RORW=RW, INHERIT=N	
$REQ["G5-COLNM"] = getFilter($REQ["G5-COLNM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-COLSNM"] = reqPostString("G5-COLSNM",30);//단축명, RORW=RW, INHERIT=N	
$REQ["G5-COLSNM"] = getFilter($REQ["G5-COLSNM"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-DATATYPE"] = reqPostString("G5-DATATYPE",30);//데이터타입, RORW=RW, INHERIT=N	
$REQ["G5-DATATYPE"] = getFilter($REQ["G5-DATATYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-DATASIZE"] = reqPostNumber("G5-DATASIZE",30);//데이터사이즈, RORW=RW, INHERIT=N	
$REQ["G5-DATASIZE"] = getFilter($REQ["G5-DATASIZE"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G5-OBJTYPE"] = reqPostString("G5-OBJTYPE",30);//오브젝트타입, RORW=RW, INHERIT=N	
$REQ["G5-OBJTYPE"] = getFilter($REQ["G5-OBJTYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-OBJTYPE_FORMVIEW"] = reqPostString("G5-OBJTYPE_FORMVIEW",30);//OBJ폼뷰, RORW=RW, INHERIT=N	
$REQ["G5-OBJTYPE_FORMVIEW"] = getFilter($REQ["G5-OBJTYPE_FORMVIEW"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-OBJTYPE_GRID"] = reqPostString("G5-OBJTYPE_GRID",30);//OBJ그리드, RORW=RW, INHERIT=N	
$REQ["G5-OBJTYPE_GRID"] = getFilter($REQ["G5-OBJTYPE_GRID"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-LBLWIDTH"] = reqPostString("G5-LBLWIDTH",30);//라벨가로, RORW=RW, INHERIT=N	
$REQ["G5-LBLWIDTH"] = getFilter($REQ["G5-LBLWIDTH"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-LBLHEIGHT"] = reqPostString("G5-LBLHEIGHT",30);//라벨세로, RORW=RW, INHERIT=N	
$REQ["G5-LBLHEIGHT"] = getFilter($REQ["G5-LBLHEIGHT"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-LBLALIGN"] = reqPostString("G5-LBLALIGN",20);//LBLALIGN, RORW=RW, INHERIT=N	
$REQ["G5-LBLALIGN"] = getFilter($REQ["G5-LBLALIGN"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-OBJWIDTH"] = reqPostString("G5-OBJWIDTH",30);//오브젝트가로, RORW=RW, INHERIT=N	
$REQ["G5-OBJWIDTH"] = getFilter($REQ["G5-OBJWIDTH"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-OBJHEIGHT"] = reqPostString("G5-OBJHEIGHT",30);//오브젝트세로, RORW=RW, INHERIT=N	
$REQ["G5-OBJHEIGHT"] = getFilter($REQ["G5-OBJHEIGHT"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-OBJALIGN"] = reqPostString("G5-OBJALIGN",30);//가로정렬, RORW=RW, INHERIT=N	
$REQ["G5-OBJALIGN"] = getFilter($REQ["G5-OBJALIGN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-CRYPTCD"] = reqPostString("G5-CRYPTCD",10);//CRYPTCD, RORW=RW, INHERIT=N	
$REQ["G5-CRYPTCD"] = getFilter($REQ["G5-CRYPTCD"],"CLEARTEXT","/--미 정의--/");	
$REQ["G5-VALIDSEQ"] = reqPostNumber("G5-VALIDSEQ",30);//VALIDSEQ, RORW=RW, INHERIT=N	
$REQ["G5-VALIDSEQ"] = getFilter($REQ["G5-VALIDSEQ"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G5-PIYN"] = reqPostString("G5-PIYN",1);//PIYN, RORW=RW, INHERIT=N	
$REQ["G5-PIYN"] = getFilter($REQ["G5-PIYN"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G5-STOREID"] = reqPostString("G5-STOREID",100);//STOREID, RORW=RW, INHERIT=N	
$REQ["G5-STOREID"] = getFilter($REQ["G5-STOREID"],"","//");	
$REQ["G5-DSNM"] = reqPostString("G5-DSNM",20);//DB소스, RORW=RW, INHERIT=Y	
$REQ["G5-DSNM"] = getFilter($REQ["G5-DSNM"],"","//");	
$REQ["G5-ADDDT"] = reqPostString("G5-ADDDT",14);//등록일, RORW=RW, INHERIT=N	
$REQ["G5-ADDDT"] = getFilter($REQ["G5-ADDDT"],"REGEXMAT","/^[0-9]+$/");	
$REQ["G5-MODDT"] = reqPostString("G5-MODDT",14);//수정일, RORW=RW, INHERIT=N	
$REQ["G5-MODDT"] = getFilter($REQ["G5-MODDT"],"REGEXMAT","/^[0-9]+$/");	

//G6, DDOBJ - RW속성 오브젝트만 필터 적용 ( RO속성은 제외 )
$REQ["G6-GRPTYPE"] = reqPostString("G6-GRPTYPE",10);//GRPTYPE, RORW=RW, INHERIT=N	
$REQ["G6-GRPTYPE"] = getFilter($REQ["G6-GRPTYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G6-OBJTYPE"] = reqPostString("G6-OBJTYPE",30);//OBJTYPE, RORW=RW, INHERIT=N	
$REQ["G6-OBJTYPE"] = getFilter($REQ["G6-OBJTYPE"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G6-LBLALIGN"] = reqPostString("G6-LBLALIGN",20);//LBLALIGN, RORW=RW, INHERIT=N	
$REQ["G6-LBLALIGN"] = getFilter($REQ["G6-LBLALIGN"],"REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/");	
$REQ["G6-LBLWIDTH"] = reqPostString("G6-LBLWIDTH",30);//라벨가로, RORW=RW, INHERIT=N	
$REQ["G6-LBLWIDTH"] = getFilter($REQ["G6-LBLWIDTH"],"CLEARTEXT","/--미 정의--/");	
$REQ["G6-OBJALIGN"] = reqPostString("G6-OBJALIGN",30);//가로정렬, RORW=RW, INHERIT=N	
$REQ["G6-OBJALIGN"] = getFilter($REQ["G6-OBJALIGN"],"CLEARTEXT","/--미 정의--/");	
$REQ["G6-OBJHEIGHT"] = reqPostString("G6-OBJHEIGHT",30);//오브젝트세로, RORW=RW, INHERIT=N	
$REQ["G6-OBJHEIGHT"] = getFilter($REQ["G6-OBJHEIGHT"],"CLEARTEXT","/--미 정의--/");	
$REQ["G6-OBJWIDTH"] = reqPostString("G6-OBJWIDTH",30);//오브젝트가로, RORW=RW, INHERIT=N	
$REQ["G6-OBJWIDTH"] = getFilter($REQ["G6-OBJWIDTH"],"CLEARTEXT","/--미 정의--/");	
$REQ["G6-FNINIT"] = reqPostString("G6-FNINIT",60);//FNINIT, RORW=RW, INHERIT=N	
$REQ["G6-FNINIT"] = getFilter($REQ["G6-FNINIT"],"CLEARTEXT","/--미 정의--/");	
$REQ["G3-XML"] = getXml2Array($_POST["G3-XML"]);//PJT	
$REQ["G4-XML"] = getXml2Array($_POST["G4-XML"]);//PGM	
$REQ["G5-XML"] = getXml2Array($_POST["G5-XML"]);//DD	
$REQ["G6-XML"] = getXml2Array($_POST["G6-XML"]);//DDOBJ	
//,  입력값 필터 
$REQ["G3-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G3-XML"]
		,"COLORD"=>"PJTSEQ,PJTID,PJTNM,FILECHARSET,UITOOL,SVRLANG,DEPLOYKEY,PKGROOT,STARTDT,ENDDT,PJTORD,DSNM,DELYN,ADDDT,MODDT"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"PJTID"=>array("STRING",30)	
			,"PJTNM"=>array("STRING",100)	
			,"FILECHARSET"=>array("STRING",30)	
			,"UITOOL"=>array("STRING",10)	
			,"SVRLANG"=>array("STRING",10)	
			,"DEPLOYKEY"=>array("STRING",50)	
			,"PKGROOT"=>array("STRING",10)	
			,"STARTDT"=>array("STRING",8)	
			,"ENDDT"=>array("STRING",8)	
			,"PJTORD"=>array("NUMBER",4)	
			,"DSNM"=>array("STRING",20)	
			,"DELYN"=>array("STRING",1)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"DEPLOYKEY"=>array("CLEARTEXT","/--미 정의--/")
					)
	)
);
$REQ["G4-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G4-XML"]
		,"COLORD"=>"PJTSEQ,PGMSEQ,PGMID,PGMNM,VIEWURL,PGMTYPE,POPWIDTH,POPHEIGHT,SECTYPE,PKGGRP,LOGINYN,DFTCTLGRPID,DFTCTLFNCID,PGMORD,ADDDT,MODDT"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"PGMSEQ"=>array("NUMBER",30)	
			,"PGMID"=>array("STRING",20)	
			,"PGMNM"=>array("STRING",50)	
			,"VIEWURL"=>array("STRING",30)	
			,"PGMTYPE"=>array("STRING",10)	
			,"POPWIDTH"=>array("STRING",10)	
			,"POPHEIGHT"=>array("STRING",10)	
			,"SECTYPE"=>array("STRING",10)	
			,"PKGGRP"=>array("STRING",15)	
			,"LOGINYN"=>array("STRING",1)	
			,"DFTCTLGRPID"=>array("STRING",30)	
			,"DFTCTLFNCID"=>array("STRING",30)	
			,"PGMORD"=>array("NUMBER",10)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PGMID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMNM"=>array("CLEARTEXT","/--미 정의--/")
			,"VIEWURL"=>array("CLEARTEXT","/--미 정의--/")
			,"PGMTYPE"=>array("CLEARTEXT","/--미 정의--/")
			,"POPWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"POPHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"SECTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PKGGRP"=>array("CLEARTEXT","/--미 정의--/")
			,"LOGINYN"=>array("CLEARTEXT","/--미 정의--/")
			,"DFTCTLGRPID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"DFTCTLFNCID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"PGMORD"=>array("REGEXMAT","/^[0-9]+$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G5-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G5-XML"]
		,"COLORD"=>"PJTSEQ,DDSEQ,COLID,COLNM,COLSNM,DATATYPE,DATASIZE,OBJTYPE,OBJTYPE_FORMVIEW,OBJTYPE_GRID,LBLWIDTH,LBLHEIGHT,LBLALIGN,OBJWIDTH,OBJHEIGHT,OBJALIGN,CRYPTCD,VALIDSEQ,PIYN,STOREID,DSNM,ADDDT,MODDT"
		,"VALID"=>
			array(
			"PJTSEQ"=>array("NUMBER",20)	
			,"DDSEQ"=>array("NUMBER",10)	
			,"COLID"=>array("STRING",30)	
			,"COLNM"=>array("STRING",30)	
			,"COLSNM"=>array("STRING",30)	
			,"DATATYPE"=>array("STRING",30)	
			,"DATASIZE"=>array("NUMBER",30)	
			,"OBJTYPE"=>array("STRING",30)	
			,"OBJTYPE_FORMVIEW"=>array("STRING",30)	
			,"OBJTYPE_GRID"=>array("STRING",30)	
			,"LBLWIDTH"=>array("STRING",30)	
			,"LBLHEIGHT"=>array("STRING",30)	
			,"LBLALIGN"=>array("STRING",20)	
			,"OBJWIDTH"=>array("STRING",30)	
			,"OBJHEIGHT"=>array("STRING",30)	
			,"OBJALIGN"=>array("STRING",30)	
			,"CRYPTCD"=>array("STRING",10)	
			,"VALIDSEQ"=>array("NUMBER",30)	
			,"PIYN"=>array("STRING",1)	
			,"STOREID"=>array("STRING",100)	
			,"DSNM"=>array("STRING",20)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"PJTSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"DDSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"COLID"=>array("CLEARTEXT","/--미 정의--/")
			,"COLNM"=>array("CLEARTEXT","/--미 정의--/")
			,"COLSNM"=>array("CLEARTEXT","/--미 정의--/")
			,"DATATYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"DATASIZE"=>array("REGEXMAT","/^[0-9]+$/")
			,"OBJTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"OBJTYPE_FORMVIEW"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"OBJTYPE_GRID"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"LBLWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"LBLHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"LBLALIGN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"OBJWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"OBJHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"OBJALIGN"=>array("CLEARTEXT","/--미 정의--/")
			,"CRYPTCD"=>array("CLEARTEXT","/--미 정의--/")
			,"VALIDSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"PIYN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"ADDDT"=>array("REGEXMAT","/^[0-9]+$/")
			,"MODDT"=>array("REGEXMAT","/^[0-9]+$/")
					)
	)
);
$REQ["G6-XML"] = filterGridXml(
	array(
		"XML"=>$REQ["G6-XML"]
		,"COLORD"=>"DDSEQ,DDOBJSEQ,GRPTYPE,OBJTYPE,LBLALIGN,LBLWIDTH,OBJALIGN,OBJHEIGHT,OBJWIDTH,FNINIT,ADDDT,MODDT"
		,"VALID"=>
			array(
			"DDSEQ"=>array("NUMBER",10)	
			,"DDOBJSEQ"=>array("NUMBER",10)	
			,"GRPTYPE"=>array("STRING",10)	
			,"OBJTYPE"=>array("STRING",30)	
			,"LBLALIGN"=>array("STRING",20)	
			,"LBLWIDTH"=>array("STRING",30)	
			,"OBJALIGN"=>array("STRING",30)	
			,"OBJHEIGHT"=>array("STRING",30)	
			,"OBJWIDTH"=>array("STRING",30)	
			,"FNINIT"=>array("STRING",60)	
			,"ADDDT"=>array("STRING",14)	
			,"MODDT"=>array("STRING",14)	
					)
		,"FILTER"=>
			array(
			"DDSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"DDOBJSEQ"=>array("REGEXMAT","/^[0-9]+$/")
			,"GRPTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"OBJTYPE"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"LBLALIGN"=>array("REGEXMAT","/^[a-zA-Z]{1}[a-zA-Z0-9]*$/")
			,"LBLWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"OBJALIGN"=>array("CLEARTEXT","/--미 정의--/")
			,"OBJHEIGHT"=>array("CLEARTEXT","/--미 정의--/")
			,"OBJWIDTH"=>array("CLEARTEXT","/--미 정의--/")
			,"FNINIT"=>array("CLEARTEXT","/--미 정의--/")
					)
	)
);
//,  입력값 필터 
array_push($_RTIME,array("[TIME 40.REQ_VALID]",microtime(true)));
	//서비스 클래스 생성
$objService = new pgmmngService($REQ);
//컨트롤 명령별 분개처리
$log->info("ctl:" . $ctl);
switch ($ctl){
		case "G3_SEARCH" :
		echo $objService->goG3Search(); //PJT, 조회
		break;
	case "G3_SAVE" :
		echo $objService->goG3Save(); //PJT, 저장
		break;
	case "G4_SEARCH" :
		echo $objService->goG4Search(); //PGM, 조회
		break;
	case "G4_SAVE" :
		echo $objService->goG4Save(); //PGM, 저장
		break;
	case "G5_SEARCH" :
		echo $objService->goG5Search(); //DD, 조회
		break;
	case "G5_SAVE" :
		echo $objService->goG5Save(); //DD, 저장
		break;
	case "G6_SEARCH" :
		echo $objService->goG6Search(); //DDOBJ, 조회
		break;
	case "G6_SAVE" :
		echo $objService->goG6Save(); //DDOBJ, 저장
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

$log->info("PgmmngControl___________________________end");
$log->close(); unset($log);
?>
