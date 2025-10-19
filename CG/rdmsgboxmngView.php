<?php
//PGMID : RDMSGBOXMNG
//PGMNM : [RD]메시지박스MNG
header("Content-Type: text/html; charset=UTF-8"); //HTML

//설정 함수 읽기
$CFG = require_once '../../common/include/incConfig.php';

//default lib Autoload
require_once($CFG["CFG_LIBS_VENDOR"]);

//LIBS
require_once('../../common/include/incUtil.php');//CG UTIL
require_once('../../common/include/incRequest.php');//CG REQUEST
require_once('../../common/include/incDB.php');//CG DB
require_once('../../common/include/incSec.php');//CG SEC
require_once('../../common/include/incAuth.php');//CG AUTH
require_once('../../common/include/incUser.php');//CG USER

//인증 게이트웨이
require_once('../../common/include/incLoginOauthGateway.php');//CG USER
?><!doctype html>
<html>
<head>
<title>[RD]메시지박스MNG</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="Context-Type" context="text/html;charset=UTF-8" />
<!--CSS/JS 불러오기-->
<!--JS 불러오기-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/feather.min.js" type="text/javascript" charset="UTF-8"></script> <!--FEATHER ICON JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/split.min.js" type="text/javascript" charset="UTF-8"></script> <!--SPLIT.jS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-3.4.1.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY CORE-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-ui.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY UI-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/cleave.min.js" type="text/javascript" charset="UTF-8"></script> <!--CLEAVE JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY DROPDOWN-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/select2.min.js" type="text/javascript" charset="UTF-8"></script> <!--SELECT2 JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/toastr.min.js" type="text/javascript" charset="UTF-8"></script> <!--TOASTR JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/anyselect.min.js" type="text/javascript" charset="UTF-8"></script> <!--ANYSELECT JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jqwidgets/jqx-all.js" type="text/javascript" charset="UTF-8"></script> <!--JQXGRID LIB JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/json2.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY JSON-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js" type="text/javascript" charset="UTF-8"></script> <!--LOADASH.JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/hashmap.js" type="text/javascript" charset="UTF-8"></script> <!--HASHMAP-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/dhtmlxSuite/codebase/dhtmlx.js" type="text/javascript" charset="UTF-8"></script> <!--DHTMLX CORE-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/Chart.min.js" type="text/javascript" charset="UTF-8"></script> <!--Chart.js-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/signature_pad.min.js" type="text/javascript" charset="UTF-8"></script> <!--SIGNATURE PAD-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/moment.min.js" type="text/javascript" charset="UTF-8"></script> <!--Moment Date-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/webix/codebase/webix.js" type="text/javascript" charset="UTF-8"></script> <!--WEBIX JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jodit.min.js" type="text/javascript" charset="UTF-8"></script> <!--JODIT JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/lib/codemirror.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR1-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/sql/sql.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR2-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/selection/active-line.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR3-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/foldcode.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/foldgutter.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/brace-fold.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/xml-fold.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/indent-fold.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/markdown-fold.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/comment-fold.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/javascript/javascript.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/xml/xml.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/css/css.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/htmlmixed/htmlmixed.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/markdown/markdown.js" type="text/javascript" charset="UTF-8"></script> <!--CODEMIRROR-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/xlsx.full.min.js" type="text/javascript" charset="UTF-8"></script> <!--EXCEL import JS-->

<!--CSS 불러오기-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/select2.min.css" type="text/css" charset="UTF-8"><!--SELECT2 CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/toastr.min.css" type="text/css" charset="UTF-8"><!--TOASTR CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/anyselect.min.css" type="text/css" charset="UTF-8"><!--ANYSELECT CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jqwidgets/styles/jqx.base.min.css" type="text/css" charset="UTF-8"><!--JQXGRID LIB CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.css" type="text/css" charset="UTF-8"><!--JQUERY DROPDOWN CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/dhtmlxSuite/codebase/dhtmlx.css" type="text/css" charset="UTF-8"><!--DHTMLX CORE-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-ui.min.css" type="text/css" charset="UTF-8"><!--JQUERY UI-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/webix/codebase/skins/mini.min.css" type="text/css" charset="UTF-8"><!--WEBIX CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jodit.min.css" type="text/css" charset="UTF-8"><!--JODIT CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/lib/codemirror.css" type="text/css" charset="UTF-8"><!--CODE MIRROR CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/fold/foldgutter.css" type="text/css" charset="UTF-8"><!--CODEMIRROR FOLD-->
<!--공통 js/css-->
<script>
var CFG_CGWEB_URL = "<?=$CFG["CFG_CGWEB_URL"]?>";  // 형식 http://url:port/
var CFG_URL_LIBS_ROOT = "<?=$CFG["CFG_URL_LIBS_ROOT"]?>";  // 형식 http://url:port/
var CFG_URL_CODE_API = "<?=$CFG["CFG_URL_CODE_API"]?>"; // /d.s/CG/codeapiController?
</script>
<script src="/common/chartjs_util.js"></script>
<script src="/common/common.js?<?=getRndVal(10)?>"></script>
<script type="text/javascript" src="/common/common_dhtmlx.js"></script>
<script type="text/javascript" src="/common/common_jqwidgets.js"></script>
<script type="text/javascript" src="/common/common_webix.js"></script>

<link rel="stylesheet" href="/common/common_jqwidgets.css">
<link rel="stylesheet" href="/common/common_webix.css">
<link rel="stylesheet" href="/common/common.css?<?=getRndVal(10)?>" type="text/css" charset="UTF-8">

<script src="rdmsgboxmng.js?<?=getRndVal(10)?>"></script>
<script>
	//팝업창인 경우 오프너에게서 파라미터 받기
    var grpId = "<?=getFilter(reqPostString("GRPID",20),"SAFEECHO","")?>";
    var rowId = "<?=getFilter(reqPostString("ROWID",30),"SAFEECHO","")?>";
    var colId = "<?=getFilter(reqPostString("COLID",30),"SAFEECHO","")?>";
    var btnNm = "<?=getFilter(reqPostString("BTNNM",30),"SAFEECHO","")?>";
</script>
</head>
<body onload="initBody();">

<!--<div id="BODY_BOX" class="BODY_BOX">--><!--그룹별 IO출력-->
	<!--
	#####################################################
	## 컨디션  - START G.GRPID : G1-
	#####################################################
	-->
 	<div class="GRP_OBJECT" style="width:100%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <!--<div class="GRP_INNER" style="height:74px;">-->
            <div class="GRP_INNER" style="height:74px;">	  	<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* [RD]메시지박스MNG</b>	
				<!--popup--><a href="?" target="_blank"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
				<!--fullscreen--><a><img class="common-img-btn"  style='cursor:pointer;' src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/fullscreen.png" height=10 align=absmiddle border=0 onclick="goFullScreen();"></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SEARCHALL" value="조회(전체)" onclick="G1_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SAVE" value="저장" onclick="G1_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_RESET" value="입력 초기화" onclick="G1_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:calc(100% - 36px);border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : MSG_BOX_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:;overflow:hidden;">
						MSG_BOX_SEQ
					</div>
					<!-- style="width:50px;"-->
					<div class="CON_OBJECT">
						<!--MSG_BOX_SEQ오브젝트출력-->
						<input type="text" name="G1-MSG_BOX_SEQ" value="<?=getFilter(reqPostString("MSG_BOX_SEQ",20),"SAFEECHO","")?>" id="G1-MSG_BOX_SEQ" style="width:50px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : USR_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:80px;text-align:left;overflow:hidden;">
						USR_SEQ
					</div>
					<!-- style="width:50px;"-->
					<div class="CON_OBJECT">
						<!--USR_SEQ오브젝트출력-->
						<input type="text" name="G1-USR_SEQ" value="<?=getFilter(reqPostString("USR_SEQ",10),"SAFEECHO","")?>" id="G1-USR_SEQ" style="width:50px;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : TITLE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:50px;text-align:;overflow:hidden;">
						TITLE
					</div>
					<!-- style="width:60px;"-->
					<div class="CON_OBJECT">
						<!--TITLE오브젝트출력-->
						<input type="text" name="G1-TITLE" value="<?=getFilter(reqPostString("TITLE",100),"SAFEECHO","")?>" id="G1-TITLE" style="width:60px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : BODY-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:50px;text-align:;overflow:hidden;">
						BODY
					</div>
					<!-- style="width:60px;"-->
					<div class="CON_OBJECT">
						<!--BODY오브젝트출력-->
						<input type="text" name="G1-BODY" value="<?=getFilter(reqPostString("BODY",4000),"SAFEECHO","")?>" id="G1-BODY" style="width:60px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : SEND_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:70px;text-align:;overflow:hidden;">
						SEND_DT
					</div>
					<!-- style="width:60px;"-->
					<div class="CON_OBJECT">
						<!--SEND_DT오브젝트출력-->
						<input type="text" name="G1-SEND_DT" value="<?=getFilter(reqPostString("SEND_DT",14),"SAFEECHO","")?>" id="G1-SEND_DT" style="width:60px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : READ_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:70px;text-align:;overflow:hidden;">
						READ_DT
					</div>
					<!-- style="width:60px;"-->
					<div class="CON_OBJECT">
						<!--READ_DT오브젝트출력-->
						<input type="text" name="G1-READ_DT" value="<?=getFilter(reqPostString("READ_DT",14),"SAFEECHO","")?>" id="G1-READ_DT" style="width:60px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : REQUEST_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:70px;text-align:;overflow:hidden;">
						REQ_SEQ
					</div>
					<!-- style="width:50px;"-->
					<div class="CON_OBJECT">
						<!--REQUEST_SEQ오브젝트출력-->
						<input type="text" name="G1-REQUEST_SEQ" value="<?=getFilter(reqPostString("REQUEST_SEQ",50),"SAFEECHO","")?>" id="G1-REQUEST_SEQ" style="width:50px;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : FROM_ADD_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:60px;text-align:left;">
						ADD 날짜
					</div>
					<div class="CON_OBJECT">
						<input type="text" name="G1-FROM_ADD_DT" value="" id="G1-FROM_ADD_DT" style="width:87px;" class="">
					</div>
				</div>
				<!--I.COLID : TO_ADD_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:20px;text-align:left;">
						~
					</div>
					<div class="CON_OBJECT">
						<input type="text" name="G1-TO_ADD_DT" value="" id="G1-TO_ADD_DT" style="width:87px;" class="">
					</div>
				</div>
			</div><!-- is_br_tag end -->
		</div>
		<div style="width:0px;height:0px;overflow: hidden"></form></div>    
		</div>
		</div><!--GRP GAP-->
	</div>
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:45%;height:600px;"> 
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
  			<div id="div_gridG2_GRID_LABEL"class="GRID_LABEL" >
				* 수신목록1      
			</div>
			<div id="div_gridG2_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG2Cnt" name="그리드 ROW 갯수">N</span>
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_SAVE" value="저장" onclick="G2_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWDELETE" value="행삭제" onclick="G2_ROWDELETE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWADD" value="행추가" onclick="G2_ROWADD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_RELOAD" value="새로고침" onclick="G2_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_EXCEL" value="엑셀다운로드" onclick="G2_EXCEL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_CHKUPD" value="선택삭제" onclick="G2_CHKUPD(uuidv4());">
			</div>
		</div>
		<div  class="GRID_OBJECT" style="height:calc(100% - 37px);width:100%;">
			<div id="wixdtG2"  style="background-color:white;overflow:hidden;height:100%;width:100%;"></div>
		</div>
		</div><!--GRP GAP-->

	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
	<!--
	#####################################################
	## 폼뷰 수신상세 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:55%;" id="layout_G3">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:594px;">
				
			<div sty_le="width:0px;height:0px;overflow: hidden">
				<form id="formviewG3" name="formviewG3" method="post" enctype="multipart/form-data"  onsubmit="return false;">
				<input type="hidden" name="G3-CTLCUD"  id="G3-CTLCUD" value="">
			</div>	
		<div class="FORMVIEW_LABELGRP">
			<div class="FORMVIEW_LABEL"  style="">
				* 수신상세
			</div>
			<div class="FORMVIEW_LABELBTN"  style="">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_USERDEF" value="사용자정의" onclick="G3_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_SAVE" value="저장" onclick="G3_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_RELOAD" value="새로고침" onclick="G3_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_NEW" value="신규" onclick="G3_NEW(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_MODIFY" value="수정" onclick="G3_MODIFY(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_DELETE" value="삭제" onclick="G3_DELETE(uuidv4());">
			</div>
		</div>
		<div style="height:552px;" class="FORMVIEW_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
			<!--OBJECT LIST PRINT.-->
				<!--I.COLID : MSG_BOX_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:;">	
					MSG_BOX_SEQ	
					</div>
					<!-- style="width:50px;"-->
					<div class="CON_OBJECT">
						<div name="G3-MSG_BOX_SEQ" id="G3-MSG_BOX_SEQ" style="background-color:white; width:50px;height:22px;line-height:22pxpx;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
				<!--I.COLID : USR_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:80px;text-align:left;overflow:hidden;">
						USR_SEQ
					</div>
					<!-- style="width:50px;"-->
					<div class="CON_OBJECT">
						<!--USR_SEQ오브젝트출력-->
						<input type="text" name="G3-USR_SEQ" value="" id="G3-USR_SEQ" style="width:50px;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : TITLE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:50px;text-align:;overflow:hidden;">
						TITLE
					</div>
					<!-- style="width:220px;"-->
					<div class="CON_OBJECT">
						<!--TITLE오브젝트출력-->
						<input type="text" name="G3-TITLE" value="" id="G3-TITLE" style="width:220px;text-align:" class="">
					</div>
				</div>
				<!--I.COLID : BODY-->
				<div class="CON_OBJGRP" style="width:100%;">
					<div class="CON_LABEL" style="width:px;text-align:;">
 						BODY
 					</div>
 					<!-- style="width:100%px;"-->
					<div class="CON_OBJECT" style="width:100%">
 						<!--BODY오브젝트출력 checkbox-->
						<div id="G3-BODY" name="G3-BODY"></div>
					</div>
 				</div>
 				<!--I.COLID : SEND_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:70px;text-align:;">	
					SEND_DT	
					</div>
					<!-- style="width:120px;"-->
					<div class="CON_OBJECT">
						<div name="G3-SEND_DT" id="G3-SEND_DT" style="background-color:white; width:120px;height:22px;line-height:22pxpx;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
				<!--I.COLID : READ_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:70px;text-align:;">	
					READ_DT	
					</div>
					<!-- style="width:120px;"-->
					<div class="CON_OBJECT">
						<div name="G3-READ_DT" id="G3-READ_DT" style="background-color:white; width:120px;height:22px;line-height:22pxpx;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
				<!--I.COLID : ADD_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:60px;text-align:left;">	
					ADD	
					</div>
					<!-- style="width:100px;"-->
					<div class="CON_OBJECT">
						<div name="G3-ADD_DT" id="G3-ADD_DT" style="background-color:white; width:100px;height:22px;line-height:22pxpx;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
		</div>
		<div style="width:0px;height:0px;overflow: hidden"></form></div>    
		</div>
		</div>
	</div>
	<!--
	#####################################################
	## 폼뷰 - END
	#####################################################
	-->
<div style="width:0px;height:0px;overflow: hidden">
	<form name="excelDownForm" id="excelDownForm">
	<input type="hidden" name="DATA_HEADERS" id="DATA_HEADERS">
	<input type="hidden" name="DATA_WIDTHS" id="DATA_WIDTHS">
	<input type="hidden" name="DATA_ROWS" id="DATA_ROWS">
	</form>
</div>
<div style="width:0px;height:0px;overflow: hidden">
	<form name="popupForm" id="popupForm">
	<input type="text" name="GRPID" id="GRPID">
	<input type="text" name="ROWID" id="ROWID">	
	<input type="text" name="COLID" id="COLID">
	<input type="text" name="BTNNM" id="BTNNM">
	</form>
</div>
<!--</div>-->



</body>
</html>
