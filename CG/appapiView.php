<?php
//PGMID : APPAPI
//PGMNM : 앱API
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
<title>앱API</title>
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

<script src="appapi.js?<?=getRndVal(10)?>"></script>
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
	## 컨디션 컨디션1 - START G.GRPID : C2-
	#####################################################
	-->
 	<div class="GRP_OBJECT" style="width:100%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <!--<div class="GRP_INNER" style="height:74px;">-->
            <div class="GRP_INNER" style="height:74px;">	  	<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* 앱API</b>	
				<!--popup--><a href="?" target="_blank"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
				<!--fullscreen--><a><img class="common-img-btn"  style='cursor:pointer;' src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/fullscreen.png" height=10 align=absmiddle border=0 onclick="goFullScreen();"></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C2_sss" value="테스트" onclick="C2_sss(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C2_SEARCHALL" value="조회(전체)" onclick="C2_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C2_SAVE" value="저장" onclick="C2_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C2_RESET" value="검색조건 초기화" onclick="C2_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:calc(100% - 36px);border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : API_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:80;text-align:left;overflow:hidden;">
						SEQ
					</div>
					<!-- style="width:80;"-->
					<div class="CON_OBJECT">
						<!--API_SEQ오브젝트출력-->
						<input type="text" name="C2-API_SEQ" value="<?=getFilter(reqPostString("API_SEQ",10),"SAFEECHO","")?>" id="C2-API_SEQ" style="width:80;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : API_NM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:80;text-align:left;overflow:hidden;">
						NM
					</div>
					<!-- style="width:80;"-->
					<div class="CON_OBJECT">
						<!--API_NM오브젝트출력-->
						<input type="text" name="C2-API_NM" value="<?=getFilter(reqPostString("API_NM",50),"SAFEECHO","")?>" id="C2-API_NM" style="width:80;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : PGM_ID-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:60;text-align:left;overflow:hidden;">
						ID
					</div>
					<!-- style="width:60;"-->
					<div class="CON_OBJECT">
						<!--PGM_ID오브젝트출력-->
						<input type="text" name="C2-PGM_ID" value="<?=getFilter(reqPostString("PGM_ID",50),"SAFEECHO","")?>" id="C2-PGM_ID" style="width:60;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : URL-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:60;text-align:left;overflow:hidden;">
						URL
					</div>
					<!-- style="width:60;"-->
					<div class="CON_OBJECT">
						<!--URL오브젝트출력-->
						<input type="text" name="C2-URL" value="<?=getFilter(reqPostString("URL",50),"SAFEECHO","")?>" id="C2-URL" style="width:60;text-align:LEFT" class="">
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
    <div class="GRP_OBJECT" style="width:50%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG3_GRID_LABEL"class="GRID_LABEL" >
	  				* 그리드1      
			</div>
			<div id="div_gridG3_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG3Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_CHKSAVE2" value="11" onclick="G3_CHKSAVE2(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_RELOAD" value="새로고침" onclick="G3_RELOAD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_USER2" value="UU" onclick="G3_USER2(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_EXCEL2" value="엑셀받기" onclick="G3_EXCEL2(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT"  style="">
<!--
data-toggle : 이 옵션이 있어야 데이터 load 처리시 동적으로 정상 처리됨
-->
<table id="btG3"
			data-toggle="table"
			data-height="457px"
			data-virtual-scroll="true"
			data-click-to-select="false"
			data-resizable="true"
			class="table table-bordered table-striped"
			data-id-field="API_SEQ"			>
			<thead>
				<tr>
					<th
						data-field="ROWID"
						data-sortable="false"
						data-visible="false"
						data-align="right"
						data-width="100"
						data-width-unit="px"
						>ROWID</th>
					<th
						data-field="ROWCHK"
						data-width="40" 
						data-align="center"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>ROWCHK
					</th>
					<th
						data-field="API_SEQ"
						data-width="60" 
						data-align="left"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>SEQ
					</th>
					<th
						data-field="API_NM"
						data-width="60" 
						data-align="left"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>NM
					</th>
					<th
						data-field="PGM_ID"
						data-width="60" 
						data-align="right"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>ID
					</th>
					<th
						data-field="LINK"
						data-width="100" 
						data-align="left"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					data-formatter="bt4TableLinkFormatter"
					>LINK
					</th>
					<th
						data-field="MULTILINK"
						data-width="50" 
						data-align="center"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					data-formatter="bt4TableMultiLinkFormatter"
					>MULTILINK
					</th>
					<th
						data-field="ADD_DT"
						data-width="60" 
						data-align="center"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>ADD
					</th>
					<th
						data-field="MOD_DT"
						data-width="60" 
						data-align="center"
						data-width-unit="px"
						data-sortable="true" 
						data-visible="true"
						data-halign="center"
					>MOD
					</th>
					</tr>            
				</thead>
        </table>
		</div>
		</div>
	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
	<!--
	#####################################################
	## 폼뷰 폼뷰1 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:50%;" id="layout_F4">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:494px;">
				
			<div sty_le="width:0px;height:0px;overflow: hidden">
				<form id="formviewF4" name="formviewF4" method="post" enctype="multipart/form-data"  onsubmit="return false;">
				<input type="hidden" name="F4-CTLCUD"  id="F4-CTLCUD" value="">
			</div>	
		<div class="FORMVIEW_LABELGRP">
			<div class="FORMVIEW_LABEL"  style="">
				* 폼뷰1
			</div>
			<div class="FORMVIEW_LABELBTN"  style="">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_F4_SAVE" value="저장" onclick="F4_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_F4_RELOAD" value="새로고침" onclick="F4_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_F4_NEW" value="신규" onclick="F4_NEW(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_F4_DELETE" value="삭제" onclick="F4_DELETE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_F4_MOD" value="수정" onclick="F4_MOD(uuidv4());">
			</div>
		</div>
		<div style="height:452px;" class="FORMVIEW_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
			<!--OBJECT LIST PRINT.-->
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : API_SEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;overflow:hidden;">
						SEQ
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<!--API_SEQ오브젝트출력-->
						<input type="text" name="F4-API_SEQ" value="" id="F4-API_SEQ" style="width:120;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : CAL-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						달력
					</div>
					<div class="CON_OBJECT">
						<input type="text" name="F4-CAL" value="" id="F4-CAL" style="width:97;" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : API_NM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;overflow:hidden;">
						NM
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<!--API_NM오브젝트출력-->
						<input type="text" name="F4-API_NM" value="" id="F4-API_NM" style="width:120;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : PGM_ID-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;overflow:hidden;">
						ID
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<!--PGM_ID오브젝트출력-->
						<input type="text" name="F4-PGM_ID" value="" id="F4-PGM_ID" style="width:120;text-align:LEFT" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : URL-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;overflow:hidden;">
						URL
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<!--URL오브젝트출력-->
						<input type="text" name="F4-URL" value="" id="F4-URL" style="width:120;text-align:LEFT" class="">
					</div>
				</div>
			</DIV>
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--REQ_ENCTYPE, REQENCTYPE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						REQENCTYPE
					</div>
					<div class="CON_OBJECT" style="width:200px;">
						<select id="F4-REQ_ENCTYPE" name="F4-REQ_ENCTYPE" style="width:200px;min-width:200px"></select>
					</div>
				</div>
			</DIV>
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--REQ_DATATYPE, REQDATATYPE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						REQDATATYPE
					</div>
					<div class="CON_OBJECT" style="width:200px;">
						<select id="F4-REQ_DATATYPE" name="F4-REQ_DATATYPE" style="width:200px;min-width:200px"></select>
					</div>
				</div>

			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--REQ_BODY, REQBODY-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						REQBODY<img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/crypt_shield.png" title="sha hashed" align="absmiddle">
					</div>
					<!--width:200;height:60-->
					<div class="CON_OBJECT" style="">
						<textarea  name="F4-REQ_BODY"  id="F4-REQ_BODY" style="padding:2px 2px 2px 2px;width:200;height:60"></textarea>
					</div>
				</div>

			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--RES_BODY, RESBODY-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						RESBODY<img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/crypt_shield.png" title="sha hashed" align="absmiddle">
					</div>
					<!--width:200;height:60-->
					<div class="CON_OBJECT" style="">
						<textarea  name="F4-RES_BODY"  id="F4-RES_BODY" style="padding:2px 2px 2px 2px;width:200;height:60"></textarea>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : MYFILESVRNM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;overflow:hidden;">
						MYFILESVRNM
					</div>
					<!-- style="width:200;"-->
					<div class="CON_OBJECT">
						<!--MYFILESVRNM오브젝트출력-->
						<input type="text" name="F4-MYFILESVRNM" value="" id="F4-MYFILESVRNM" style="width:200;text-align:LEFT" class="">
					</div>
				</div>
				</DIV>
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : MYFILE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">
						MYFILE
					</div>
					<!-- style="width:150;"-->	
					<div class="CON_OBJECT">
						<input type="file" name="F4-MYFILE" value="" id="F4-MYFILE" style="width:150px;">
						<div  id="DIV-F4-MYFILE" style="display:none">
							<a href="" target="_blank" name="F4-MYFILE-LINK" id="F4-MYFILE-LINK"><span id="F4-MYFILE-NM" name="F4-MYFILE-NM"></span></a><input type="checkbox" name="F4-MYFILE-DEL" id="F4-MYFILE-DEL">삭제
						</div>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : MYFILE_VIEWER-->
				<div class="CON_OBJGRP" style="">
				<div class="CON_LABEL" style="width:120;text-align:left;">	
					이미지뷰어	
				</div>	
				<!-- style="width:320;"-->
				<div class="CON_OBJECT">
					<div 
						 name="F4-MYFILE_VIEWER-HOLDER" 
						 id="F4-MYFILE_VIEWER-HOLDER"
						 class="FORMVIEW_IMGVIEWER"
						 style="width:320px;height:90px;">
					</div>
				</div>
			</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : ADD_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">	
					ADD	
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<div name="F4-ADD_DT" id="F4-ADD_DT" style="background-color:white; width:120;height:;line-height:px;vertical-align:middle;padding:0px 0px 0px 3px"></div>
					</div>
				</div>
				<!--I.COLID : MOD_DT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:120;text-align:left;">	
					MOD	
					</div>
					<!-- style="width:120;"-->
					<div class="CON_OBJECT">
						<div name="F4-MOD_DT" id="F4-MOD_DT" style="background-color:white; width:120;height:;line-height:px;vertical-align:middle;padding:0px 0px 0px 3px"></div>
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
