<?php
//PGMID : ICONMNG2
//PGMNM : 아이콘관리(폼서치)
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
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>	
<title>아이콘관리(폼서치)</title>
<meta http-equiv="Context-Type" context="text/html;charset=UTF-8" />
<!--CSS/JS 불러오기-->
<!--JS 불러오기-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/feather.min.js" type="text/javascript" charset="UTF-8"></script> <!--FEATHER ICON JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-3.4.1.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY CORE-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-ui.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY UI-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/tableExport/FileSaver.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 TABLE EXPORT SAVER-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/cleave.min.js" type="text/javascript" charset="UTF-8"></script> <!--CLEAVE JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY DROPDOWN-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/tableExport/tableExport.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 TABLE EXPORT-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/json2.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY JSON-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js" type="text/javascript" charset="UTF-8"></script> <!--LOADASH.JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/hashmap.js" type="text/javascript" charset="UTF-8"></script> <!--HASHMAP-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/dhtmlxSuite/codebase/dhtmlx.js" type="text/javascript" charset="UTF-8"></script> <!--DHTMLX CORE-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/Chart.min.js" type="text/javascript" charset="UTF-8"></script> <!--Chart.js-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap4/popper.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 Poper Js-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap4/js/bootstrap.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 Min Js-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/signature_pad.min.js" type="text/javascript" charset="UTF-8"></script> <!--SIGNATURE PAD-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/moment.min.js" type="text/javascript" charset="UTF-8"></script> <!--Moment Date-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/summernote/summernote-bs4.min.js" type="text/javascript" charset="UTF-8"></script> <!--WebEditor Summbernote-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap-table/bootstrap-table.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 Table JS-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap-table/locale/bootstrap-table-ko-KR.min.js" type="text/javascript" charset="UTF-8"></script> <!--BT4 Table JS Lang-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/lib/codemirror.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR1-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/mode/sql/sql.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR2-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/addon/selection/active-line.js" type="text/javascript" charset="UTF-8"></script> <!--CODE MIRROR3-->

<!--CSS 불러오기-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.css" type="text/css" charset="UTF-8"><!--JQUERY DROPDOWN CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/dhtmlxSuite/codebase/dhtmlx.css" type="text/css" charset="UTF-8"><!--DHTMLX CORE-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-ui.min.css" type="text/css" charset="UTF-8"><!--JQUERY UI-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap4/css/bootstrap.min.css" type="text/css" charset="UTF-8"><!--BOOTSTRAP V4-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/summernote/summernote-bs4.min.css" type="text/css" charset="UTF-8"><!--WebEditor Summbernote-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/bootstrap-table/bootstrap-table.min.css" type="text/css" charset="UTF-8"><!--BT4 Table CSS-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/codemirror/lib/codemirror.css" type="text/css" charset="UTF-8"><!--CODE MIRROR CSS-->
<!--공통 js/css-->
<script>
var CFG_CGWEB_URL = "<?=$CFG["CFG_CGWEB_URL"]?>";  // 형식 http://url:port/
var CFG_URL_LIBS_ROOT = "<?=$CFG["CFG_URL_LIBS_ROOT"]?>";  // 형식 http://url:port/
var CFG_URL_CODE_API = "<?=$CFG["CFG_URL_CODE_API"]?>"; // /d.s/CG/codeapiController?
</script>
<script src="/common/chartjs_util.js"></script>
<script src="/common/common.js?<?=getRndVal(10)?>"></script>
<link rel="stylesheet" href="/common/common.css?<?=getRndVal(10)?>" type="text/css" charset="UTF-8">

<script src="iconmng2.js?<?=getRndVal(10)?>"></script>
<script>
	//팝업창인 경우 오프너에게서 파라미터 받기
    var grpId = "<?=getFilter(reqPostString("GRPID",20),"SAFEECHO","")?>";
    var rowId = "<?=getFilter(reqPostString("ROWID",30),"SAFEECHO","")?>";
    var colId = "<?=getFilter(reqPostString("COLID",30),"SAFEECHO","")?>";
    var btnNm = "<?=getFilter(reqPostString("BTNNM",30),"SAFEECHO","")?>";
</script>
</head>
<body onload="initBody();">

<div id="BODY_BOX" class="BODY_BOX"><!--그룹별 IO출력-->
	<!--
	#####################################################
	## 컨디션  - START G.GRPID : G1-
	#####################################################
	-->
 	<div class="GRP_OBJECT" style="width:100%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:74px;">	
		
	  		<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* 아이콘관리(폼서치)</b>	
				<!--popup--><a href="?" target="_blank"><img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_USERDEF" value="사용자정의" onclick="G1_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SEARCHALL" value="조회(전체)" onclick="G1_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SAVE" value="저장" onclick="G1_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_RESET" value="입력 초기화" onclick="G1_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:32px;border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
			</div><!-- is_br_tag end -->
		</div>
		<div style="width:0px;height:0px;overflow: hidden"></form></div>    
		</div></div>
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
  			<div id="div_gridG2_GRID_LABEL"class="GRID_LABEL" >
	  				*       
			</div>
			<div id="div_gridG2_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG2Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_USERDEF" value="사용자정의" onclick="G2_USERDEF(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_SAVE" value="저장" onclick="G2_SAVE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_RELOAD" value="새로고침" onclick="G2_RELOAD(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT"  style="">
			<div id="gridG2"  style="background-color:white;overflow:hidden;height:455px;width:100%;"></div>
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
	## 폼뷰  - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:50%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:494px;">
				
			<div sty_le="width:0px;height:0px;overflow: hidden">
				<form id="formviewG3" name="formviewG3" method="post" enctype="multipart/form-data"  onsubmit="return false;">
				<input type="hidden" name="G3-CTLCUD"  id="G3-CTLCUD" value="">
			</div>	
		<div class="FORMVIEW_LABELGRP">
			<div class="FORMVIEW_LABEL"  style="">
				* 
			</div>
			<div class="FORMVIEW_LABELBTN"  style="">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_SAVE" value="저장" onclick="G3_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_RELOAD" value="새로고침" onclick="G3_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_NEW" value="신규" onclick="G3_NEW(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_MODIFY" value="수정" onclick="G3_MODIFY(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_DELETE" value="삭제" onclick="G3_DELETE(uuidv4());">
			</div>
		</div>
		<div style="height:452px;" class="FORMVIEW_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
			<!--OBJECT LIST PRINT.-->
				<!--I.COLID : ICONSEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						seq
					</div>
					<!-- style="width:170px;"-->
					<div class="CON_OBJECT">
						<!--ICONSEQ오브젝트출력-->
						<input type="text" name="G3-ICONSEQ" value="" id="G3-ICONSEQ" style="width:170px;" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : IMGNM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGNM
					</div>
					<!-- style="width:170px;"-->
					<div class="CON_OBJECT">
						<!--IMGNM오브젝트출력-->
						<input type="text" name="G3-IMGNM" value="" id="G3-IMGNM" style="width:170px;" class="">
					</div>
				</div>
				<!--I.COLID : IMGSIZE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGSIZE
					</div>
					<!-- style="width:170px;"-->
					<div class="CON_OBJECT">
						<!--IMGSIZE오브젝트출력-->
						<input type="text" name="G3-IMGSIZE" value="" id="G3-IMGSIZE" style="width:170px;" class="">
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : IMGSVRNM-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGSVRNM
					</div>
					<!-- style="width:170px;"-->
					<div class="CON_OBJECT">
						<!--IMGSVRNM오브젝트출력-->
						<input type="text" name="G3-IMGSVRNM" value="" id="G3-IMGSVRNM" style="width:170px;" class="">
					</div>
				</div>
				<!--I.COLID : IMGHASH-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGHASH
					</div>
					<!-- style="width:180px;"-->
					<div class="CON_OBJECT">
						<!--IMGHASH오브젝트출력-->
						<input type="text" name="G3-IMGHASH" value="" id="G3-IMGHASH" style="width:180px;" class="">
					</div>
				</div>
			</DIV>
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--IMGTYPE, IMGTYPE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGTYPE
					</div>
					<div class="CON_OBJECT" style="width:180px;">
						<select id="G3-IMGTYPE" name="G3-IMGTYPE" style="width:180px"></select>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : IMGTYPE2-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
 						IMGTYPE2
 					</div>
 					<!-- style="width:400px;"-->
					<div class="CON_OBJECT">
 						<!--IMGTYPE2오브젝트출력 radio-->
						<div name="G3-IMGTYPE2-HOLDER" id="G3-IMGTYPE2-HOLDER"  style="width:400px;"></div>
					</div>
 				</div>
 			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : IMGTYPE3-->
				<div class="CON_OBJGRP" style="">
				<div class="CON_LABEL" style="width:100px;text-align:left;">
 						IMGTYPE3
 					</div>
 					<!-- style="width:400px;"-->
					<div class="CON_OBJECT">
 						<!--IMGTYPE3오브젝트출력 checkbox-->
						<div name="G3-IMGTYPE3-HOLDER" id="G3-IMGTYPE3-HOLDER"  style="width:400px;"></div>
					</div>
 				</div>
 			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : CODEMIRROR-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						CODEMIRROR
					</div>
					<!-- style="width:200px;height:100px;"-->
					<div class="CON_OBJECT">
						<!--CODEMIRROR오브젝트출력-->
						<div style="height:24px;overflow:hidden;">
							<button class="fnc_button" id="zoomin_G3-CODEMIRROR" onclick="changeCodemirrorFontSizeG3Codemirror('+')"><i style=""  width="22" height="22" data-feather="zoom-in"></i></button>
							<button class="fnc_button" id="zoomout_G3-CODEMIRROR" onclick="changeCodemirrorFontSizeG3Codemirror('-')"><i style=""  width="22" height="22" data-feather="zoom-out"></i></button>
						</div>
						<textarea id="codeMirror_G3-CODEMIRROR"
							name="codeMirror_G3-CODEMIRROR" ></textarea>
					</div>
				</div>

				<!--TXTAREA, TXTAREA-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						TXTAREA
					</div>
					<!--width:80;height:40-->
					<div class="CON_OBJECT" style="">
						<textarea  name="G3-TXTAREA"  id="G3-TXTAREA" style="width:80px;height:40px"></textarea>
					</div>
				</div>
				<!--I.COLID : TXTVIEW-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">	
					TXTVIEW	
					</div>
					<!-- style="width:80;"-->
					<div class="CON_OBJECT">
						<div name="G3-TXTVIEW" id="G3-TXTVIEW" style="background-color:white; width:80px;"></div>
					</div>
				</div>
				<!--I.COLID : HTMLVIEW-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
 						HTMLVIEW
 					</div>
 					<!-- style="width:200px;"-->
					<div class="CON_OBJECT">
 						<!--HTMLVIEW오브젝트출력 checkbox-->
						<textarea id="G3-HTMLVIEW" name="G3-HTMLVIEW"></textarea>
					</div>
 				</div>
 				<!--I.COLID : SIGNPAD-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						SIGNPAD
					</div>
					<!-- style="width:200px;"-->
					<div class="CON_OBJECT">
						<!--SIGNPAD 오브젝트출력-->
						<div class="signpad_div" id="signpad_div_G3_SIGNPAD"
							style="width:200px;height:100px">
							<canvas id="signpad_canvas_G3_SIGNPAD"
							class="signpad_canvas" width=198 height=98></canvas>
						</div>
					</div>
				</div>
					<!--I.COLID : ICONFILE-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						ICONFILE
					</div>
					<!-- style="width:200;"-->	
					<div class="CON_OBJECT">
						<input type="file" name="G3-ICONFILE" value="" id="G3-ICONFILE" style="width:200px;">
						<div  id="DIV-G3-ICONFILE" style="display:none">
							<a href="" target="_blank" name="G3-ICONFILE-LINK" id="G3-ICONFILE-LINK"><span id="G3-ICONFILE-NM" name="G3-ICONFILE-NM"></span></a><input type="checkbox" name="G3-ICONFILE-DEL" id="G3-ICONFILE-DEL">삭제
						</div>
					</div>
				</div>
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : CODESEARCH-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						CODESEARCH
					</div>
					<!-- style="width:100px;"-->
					<div class="CON_OBJECT">
						<!--CODESEARCH오브젝트출력-->						<input type="text" name="G3-CODESEARCH"  style="width:78px;" value="" id="G3-CODESEARCH">
						<input type="image" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/search.png" height=20 style="vertical-align:top;" onclick="goFormPopOpen('G3','G3-CODESEARCH','G3-CODESEARCH-NM')">
						<span name="G3-CODESEARCH-NM" id="G3-CODESEARCH-NM"></span>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag  style="overflow:visible;z-index:100;">
				<!--I.COLID : IMGTYPE4-->
				<div class="CON_OBJGRP" style="overflow:visible;z-index:110;">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						IMGTYPE4
					</div>
					<!-- style="width:400px;"-->
					<div class="CON_OBJECT" style="overflow:visible;z-index:120;height:32.5px;">
						<!-- multiselect 특성상 position:absolute 로 해야 안깨짐-->
						<div style="width:400px;height:32.5px;z-index:130;">
						  <select id="G3-IMGTYPE4" name="G3-IMGTYPE4" multiple style="width:100%;"></select>
						</div>
					</div>
				</div>
				<!--I.COLID : ADDDT2-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						생성일2
					</div>
					<div class="CON_OBJECT">
						<input type="text" name="G3-ADDDT2" value="" id="G3-ADDDT2" style="width:100px;" class="">
					</div>
				</div>
				<!--I.COLID : ADDDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100px;text-align:left;">
						생성일
					</div>
					<!-- style="width:100px;"-->
					<div class="CON_OBJECT">
						<!--ADDDT오브젝트출력-->
						<input type="text" name="G3-ADDDT" value="" id="G3-ADDDT" style="width:100px;" class="">
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
</div>



</body>
</html>
