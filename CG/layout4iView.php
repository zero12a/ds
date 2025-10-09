<?php
//PGMID : LAYOUT4I
//PGMNM : 레아아웃4I
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
<title>레아아웃4I</title>
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

<script src="layout4i.js?<?=getRndVal(10)?>"></script>
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
				<!-- layout = split vertical -->
	<!--layout vertical content - start-->
	<div id="layout_G2" class="split">
	<!--
	#####################################################
	## 컨디션  - START G.GRPID : G2-
	#####################################################
	-->
 	<div sytle="width:100%;height:100%">

			<div class="GRP_INNER" style="height:-6%;">	  	<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* 레아아웃4I</b>	
				<!--popup--><a href="?" target="_blank"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
				<!--fullscreen--><a><img class="common-img-btn"  style='cursor:pointer;' src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/fullscreen.png" height=10 align=absmiddle border=0 onclick="goFullScreen();"></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G2_USERDEF" value="사용자정의" onclick="G2_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G2_SEARCHALL" value="조회(전체)" onclick="G2_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G2_SAVE" value="저장" onclick="G2_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G2_RESET" value="입력 초기화" onclick="G2_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:calc(100% - 36px);border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : LAYOUTID-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:;text-align:left;overflow:hidden;">
						LAYOUTID
					</div>
					<!-- style="width:60px;"-->
					<div class="CON_OBJECT">
						<!--LAYOUTID오브젝트출력-->
						<input type="text" name="G2-LAYOUTID" value="<?=getFilter(reqPostString("LAYOUTID",30),"SAFEECHO","")?>" id="G2-LAYOUTID" style="width:60px;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : ADDDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:;text-align:left;overflow:hidden;">
						ADDDT
					</div>
					<!-- style="width:70px;"-->
					<div class="CON_OBJECT">
						<!--ADDDT오브젝트출력-->
						<input type="text" name="G2-ADDDT" value="<?=getFilter(reqPostString("ADDDT",14),"SAFEECHO","")?>" id="G2-ADDDT" style="width:70px;text-align:LEFT" class="">
					</div>
				</div>
			</div><!-- is_br_tag end -->
		</div>
		<div style="width:0px;height:0px;overflow: hidden"></form></div>    
		</div>
	</div>
	</div>
	<!--layout vertical content - end-->
	<!--layout vertical content - start-->
	<div id="layout_L3" class="split">
				<!-- layout = split horizontal -->
		<!--layout horizontal content - start-->
		<div id="layout_G4" class="split split-horizontal">
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div style="height:100%;width:100%">
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG4_GRID_LABEL"class="GRID_LABEL" >
				* M      
			</div>
			<div id="div_gridG4_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG4Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_USERDEF" value="사용자정의" onclick="G4_USERDEF(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_SAVE" value="저장" onclick="G4_SAVE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_ROWDELETE" value="행삭제" onclick="G4_ROWDELETE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_ROWBULKADD" value="행대량추가" onclick="G4_ROWBULKADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_ROWADD" value="행추가" onclick="G4_ROWADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_RELOAD" value="새로고침" onclick="G4_RELOAD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_HIDDENCOL" value="숨김필드보기" onclick="G4_HIDDENCOL(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_EXCEL" value="엑셀다운로드" onclick="G4_EXCEL(uuidv4());">
			<input type="checkbox" name="G4-EDITMODE_EDIT_MODE" id="G4-EDITMODE_EDIT_MODE" value="Y" style="vertical-align:middle;">편집모드
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_CHKSAVE" value="선택저장" onclick="G4_CHKSAVE(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT" style="height:calc(100% - 37px);width:100%;">
			<div id="gridG4"  style="background-color:white;overflow:hidden;height:100%;width:100%;"></div>
		</div>
	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
		</div>
		<!-- layout horizontal content - end-->
		<!--layout horizontal content - start-->
		<div id="layout_L5" class="split split-horizontal">
				<!-- layout = split vertical -->
	<!--layout vertical content - start-->
	<div id="layout_G6" class="split">
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div style="height:100%;width:100%">
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG6_GRID_LABEL"class="GRID_LABEL" >
				* D      
			</div>
			<div id="div_gridG6_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG6Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_USERDEF" value="사용자정의" onclick="G6_USERDEF(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_SAVE" value="저장" onclick="G6_SAVE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_ROWDELETE" value="행삭제" onclick="G6_ROWDELETE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_ROWBULKADD" value="행대량추가" onclick="G6_ROWBULKADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_ROWADD" value="행추가" onclick="G6_ROWADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_RELOAD" value="새로고침" onclick="G6_RELOAD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_HIDDENCOL" value="숨김필드보기" onclick="G6_HIDDENCOL(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_EXCEL" value="엑셀다운로드" onclick="G6_EXCEL(uuidv4());">
			<input type="checkbox" name="G6-EDITMODE_EDIT_MODE" id="G6-EDITMODE_EDIT_MODE" value="Y" style="vertical-align:middle;">편집모드
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G6_CHKSAVE" value="선택저장" onclick="G6_CHKSAVE(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT" style="height:calc(100% - 37px);width:100%;">
			<div id="gridG6"  style="background-color:white;overflow:hidden;height:100%;width:100%;"></div>
		</div>
	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
	</div>
	<!--layout vertical content - end-->
	<!--layout vertical content - start-->
	<div id="layout_G7" class="split">
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div style="height:100%;width:100%">
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG7_GRID_LABEL"class="GRID_LABEL" >
				* S      
			</div>
			<div id="div_gridG7_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG7Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_USERDEF" value="사용자정의" onclick="G7_USERDEF(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_SAVE" value="저장" onclick="G7_SAVE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_ROWDELETE" value="행삭제" onclick="G7_ROWDELETE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_ROWBULKADD" value="행대량추가" onclick="G7_ROWBULKADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_ROWADD" value="행추가" onclick="G7_ROWADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_RELOAD" value="새로고침" onclick="G7_RELOAD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_HIDDENCOL" value="숨김필드보기" onclick="G7_HIDDENCOL(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_EXCEL" value="엑셀다운로드" onclick="G7_EXCEL(uuidv4());">
			<input type="checkbox" name="G7-EDITMODE_EDIT_MODE" id="G7-EDITMODE_EDIT_MODE" value="Y" style="vertical-align:middle;">편집모드
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G7_CHKSAVE" value="선택저장" onclick="G7_CHKSAVE(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT" style="height:calc(100% - 37px);width:100%;">
			<div id="gridG7"  style="background-color:white;overflow:hidden;height:100%;width:100%;"></div>
		</div>
	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
	</div>
	<!--layout vertical content - end-->
		</div>
		<!-- layout horizontal content - end-->
	</div>
	<!--layout vertical content - end-->
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
