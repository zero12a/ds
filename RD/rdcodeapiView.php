<?php
//PGMID : RDCODEAPI
//PGMNM : [RD]코드조회API
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
<title>[RD]코드조회API</title>
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

<script src="rdcodeapi.js?<?=getRndVal(10)?>"></script>
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
            <div class="GRP_INNER" style="height:94px;">	
		
	  		<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* [RD]코드조회API</b>	
				<!--popup--><a href="?" target="_blank"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
				<!--fullscreen--><a><img class="common-img-btn"  style='cursor:pointer;' src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/fullscreen.png" height=10 align=absmiddle border=0 onclick="goFullScreen();"></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_sCodeD" value="조회(전체)" onclick="G1_sCodeD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_RESET" value="입력 초기화" onclick="G1_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:calc(100% - 36px);border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : PCD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						PCD
					</div>
					<!-- style="width:100;"-->
					<div class="CON_OBJECT">
						<!--PCD오브젝트출력-->
						<input type="text" name="G1-PCD" value="<?=getFilter(reqPostString("PCD",30),"SAFEECHO","")?>" id="G1-PCD" style="width:100;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CD
					</div>
					<!-- style="width:100;"-->
					<div class="CON_OBJECT">
						<!--CD오브젝트출력-->
						<input type="text" name="G1-CD" value="<?=getFilter(reqPostString("CD",30),"SAFEECHO","")?>" id="G1-CD" style="width:100;text-align:LEFT" class="">
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
    <div class="GRP_OBJECT" style="width:50%;height:500px;"> 
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG2_GRID_LABEL"class="GRID_LABEL" >
				* 조회결과      
			</div>
			<div id="div_gridG2_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG2Cnt" name="그리드 ROW 갯수">N</span>
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_RELOAD" value="새로고침" onclick="G2_RELOAD(uuidv4());">
			</div>
			</div><!--GAP-->
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
	## 폼뷰 CDD - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:50%;" id="layout_G3">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:494px;">
				
			<div sty_le="width:0px;height:0px;overflow: hidden">
				<form id="formviewG3" name="formviewG3" method="post" enctype="multipart/form-data"  onsubmit="return false;">
				<input type="hidden" name="G3-CTLCUD"  id="G3-CTLCUD" value="">
			</div>	
		<div class="FORMVIEW_LABELGRP">
			<div class="FORMVIEW_LABEL"  style="">
				* CDD
			</div>
			<div class="FORMVIEW_LABELBTN"  style="">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_RELOAD" value="새로고침" onclick="G3_RELOAD(uuidv4());">
			</div>
		</div>
		<div style="height:452px;" class="FORMVIEW_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
			<!--OBJECT LIST PRINT.-->
				<!--I.COLID : CODED_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:;overflow:hidden;">
						SEQ
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CODED_SEQ오브젝트출력-->
						<input type="text" name="G3-CODED_SEQ" value="" id="G3-CODED_SEQ" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CD
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CD오브젝트출력-->
						<input type="text" name="G3-CD" value="" id="G3-CD" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : NM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						NM
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--NM오브젝트출력-->
						<input type="text" name="G3-NM" value="" id="G3-NM" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CDDESC-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CDDESC
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CDDESC오브젝트출력-->
						<input type="text" name="G3-CDDESC" value="" id="G3-CDDESC" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : PCD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						PCD
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--PCD오브젝트출력-->
						<input type="text" name="G3-PCD" value="" id="G3-PCD" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : ORD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						ORD
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--ORD오브젝트출력-->
						<input type="text" name="G3-ORD" value="" id="G3-ORD" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : CDVAL-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CDVAL
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CDVAL오브젝트출력-->
						<input type="text" name="G3-CDVAL" value="" id="G3-CDVAL" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CDVAL2-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CDVAL2
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CDVAL2오브젝트출력-->
						<input type="text" name="G3-CDVAL2" value="" id="G3-CDVAL2" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : CDMIN-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CDMIN
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CDMIN오브젝트출력-->
						<input type="text" name="G3-CDMIN" value="" id="G3-CDMIN" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CDMAX-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						CDMAX
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--CDMAX오브젝트출력-->
						<input type="text" name="G3-CDMAX" value="" id="G3-CDMAX" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : DATATYPE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						데이터타입
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--DATATYPE오브젝트출력-->
						<input type="text" name="G3-DATATYPE" value="" id="G3-DATATYPE" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : EDITYN-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						EDITYN
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--EDITYN오브젝트출력-->
						<input type="text" name="G3-EDITYN" value="" id="G3-EDITYN" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : FORMATYN-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						FORMATYN
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--FORMATYN오브젝트출력-->
						<input type="text" name="G3-FORMATYN" value="" id="G3-FORMATYN" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : USEYN-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						사용
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--USEYN오브젝트출력-->
						<input type="text" name="G3-USEYN" value="" id="G3-USEYN" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : DELYN-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						삭제YN
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<!--DELYN오브젝트출력-->
						<input type="text" name="G3-DELYN" value="" id="G3-DELYN" style="width:150;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : ADDDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;">	
					생성일	
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<div name="G3-ADDDT" id="G3-ADDDT" style="background-color:white; width:150;height:;line-height:px;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
				<!--I.COLID : MODDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;">	
					MODDT	
					</div>
					<!-- style="width:150;"-->
					<div class="CON_OBJECT">
						<div name="G3-MODDT" id="G3-MODDT" style="background-color:white; width:150;height:22;line-height:22px;vertical-align:middle;padding:0px 0px 0px 3px"></div>
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
