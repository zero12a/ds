<?php
//PGMID : FILETEST
//PGMNM : 폼뷰테스트
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
<title>폼뷰테스트</title>
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

<script src="filetest.js?<?=getRndVal(10)?>"></script>
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
	## 컨디션 컨디션 - START G.GRPID : G1-
	#####################################################
	-->
 	<div class="GRP_OBJECT" style="width:100%;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <!--<div class="GRP_INNER" style="height:74px;">-->
            <div class="GRP_INNER" style="height:74px;">	  	<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* 폼뷰테스트</b>	
				<!--popup--><a href="?" target="_blank"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img class="common-img-btn" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
				<!--fullscreen--><a><img class="common-img-btn"  style='cursor:pointer;' src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/fullscreen.png" height=10 align=absmiddle border=0 onclick="goFullScreen();"></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_USERDEF" value="사용자정의" onclick="G1_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SEARCHALL" value="조회(전체)" onclick="G1_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_SAVE" value="저장" onclick="G1_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G1_RESET" value="입력 초기화" onclick="G1_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:calc(100% - 36px);border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : ADDDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						ADDDT
					</div>
					<!-- style="width:60;"-->
					<div class="CON_OBJECT">
						<!--ADDDT오브젝트출력-->
						<input type="text" name="G1-ADDDT" value="<?=getFilter(reqPostString("ADDDT",14),"SAFEECHO","")?>" id="G1-ADDDT" style="width:60;text-align:LEFT" class="">
					</div>
				</div>
				<!--I.COLID : MODDT-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						MODDT
					</div>
					<!-- style="width:60;"-->
					<div class="CON_OBJECT">
						<!--MODDT오브젝트출력-->
						<input type="text" name="G1-MODDT" value="<?=getFilter(reqPostString("MODDT",14),"SAFEECHO","")?>" id="G1-MODDT" style="width:60;text-align:LEFT" class="">
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
	## BI뷰  a - START
	#####################################################
	-->
		<div class="GRP_OBJECT" id="DIV-G4-CLICK" style="width:25%;">
			<div class="GRP_GAP"><!--흰색 바깥 여백-->
				<div class="GRP_INNER" style="height:77px;overflow:hidden;">
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : BIVAL1A-->
                <div class="BI_ICON" style="float:left;width:30%;text-align:center;">
                        <i style="padding-top:9px;"
                        width="50"
                        height="50"
                        data-feather="eye"></i>
                </div>
                <div class="BI_VALUE"
                 style="width:70%;">
                    <span id="G4-BIVAL1A-VALUE">Value</span>
                </div>
                <div class="BI_LABEL" style="width:70%;">
                    <span id="G4-BIVAL1A-LABEL">BIVAL1A</span>
                </div>
				</div>
			</div>
		</div>
	<!--
	#####################################################
	## BI뷰  b - START
	#####################################################
	-->
		<div class="GRP_OBJECT" id="DIV-G5-CLICK" style="width:25%;">
			<div class="GRP_GAP"><!--흰색 바깥 여백-->
				<div class="GRP_INNER" style="height:77px;overflow:hidden;">
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : BIVAL1A-->
                <div class="BI_LABEL" style="width:100%;">
                    <span id="G5-BIVAL1A-LABEL">BIVAL1A</span>
                </div>
                <div class="BI_VALUE" style="width:80%;float:left;">
                    <span id="G5-BIVAL1A-VALUE">Value</span>
                </div>            
                <div class="BI_ICON" style="width:20%;text-align:right;">
                        <i style="padding-left:5px;padding-top:0px;"
                        color="silver" 
                        width="30"
                        height="30"
                        data-feather="eye"></i>
                </div>				</div>
			</div>
		</div>
	<!--
	#####################################################
	## BI뷰  c - START
	#####################################################
	-->
		<div class="GRP_OBJECT" id="DIV-G6-CLICK" style="width:25%;">
			<div class="GRP_GAP"><!--흰색 바깥 여백-->
				<div class="GRP_INNER" style="height:77px;overflow:hidden;">
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : BIVAL1A-->
 				<div class="BI_LABEL" style="float:left;width:70%;">
                    <span id="G6-BIVAL1A-LABEL">BIVAL1A</span>
                </div>
                <div class="BI_ICON" style="text-align:right;width:30%;">
                        <i style="padding-right:5px;padding-top:0px;"
                        color="silver" 
                        width="22"
                        height="22"
                        data-feather="eye"></i>
                </div>
                <div class="BI_VALUE" style="float:left;width:70%;">
                    <span id="G6-BIVAL1A-VALUE1">Value1</span>
                </div>
                <div class="BI_VALUE2 BI_VALUE2_TYPE3" style="font-width:bold;">
                    <span id="G6-BIVAL1A-VALUE2">Value2</span>
                </div>				</div>
			</div>
		</div>
	<!--
	#####################################################
	## BI뷰  d - START
	#####################################################
	-->
		<div class="GRP_OBJECT" id="DIV-G7-CLICK" style="width:25%;">
			<div class="GRP_GAP"><!--흰색 바깥 여백-->
				<div class="GRP_INNER" style="height:77px;overflow:hidden;">
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : BIVAL1A-->
                <div class="BI_LABEL" style="width:100%;">
                    <span id="G7-BIVAL1A-LABEL">BIVAL1A</span>
                </div>
                <div style="float:left;width:80%">
                    <div class="BI_VALUE" style="float:left;text-align:left;">
                    	<span id="G7-BIVAL1A-VALUE1">Value1</span>
                    </div>    
                    <div class="BI_VALUE2 BI_VALUE2_TYPE4">
                    	<span id="G7-BIVAL1A-VALUE2">Value2</span>
                    </div>   
                </div>
                <div class="BI_ICON" style="text-align:right;width:20%;">
                        <i style="padding-left:5px;padding-top:0px;"
                        color="silver" 
                        width="30"
                        height="30"
                        data-feather="eye"></i>
                </div>				</div>
			</div>
		</div>
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:50%;height:200px;">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG2_GRID_LABEL"class="GRID_LABEL" >
				* 그리드      
			</div>
			<div id="div_gridG2_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG2Cnt" name="그리드 ROW 갯수">N</span>
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_USERDEF" value="사용자정의" onclick="G2_USERDEF(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_SAVE" value="저장" onclick="G2_SAVE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWDELETE" value="행삭제" onclick="G2_ROWDELETE(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWBULKADD" value="행대량추가" onclick="G2_ROWBULKADD(uuidv4());">
			<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWADD" value="행추가" onclick="G2_ROWADD(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT" style="height:calc(100% - 37px);width:100%;">
			<div id="gridG2"  style="background-color:white;overflow:hidden;height:100%;width:100%;"></div>
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
	## 폼뷰 폼뷰 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:50%;" id="layout_G3">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:194px;">
				
			<div sty_le="width:0px;height:0px;overflow: hidden">
				<form id="formviewG3" name="formviewG3" method="post" enctype="multipart/form-data"  onsubmit="return false;">
				<input type="hidden" name="G3-CTLCUD"  id="G3-CTLCUD" value="">
			</div>	
		<div class="FORMVIEW_LABELGRP">
			<div class="FORMVIEW_LABEL"  style="">
				* 폼뷰
			</div>
			<div class="FORMVIEW_LABELBTN"  style="">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_USERDEF" value="사용자정의" onclick="G3_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_SAVE" value="저장" onclick="G3_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_G3_NEW2" value="신규" onclick="G3_NEW2(uuidv4());">
			</div>
		</div>
		<div style="height:152px;" class="FORMVIEW_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
			<!--OBJECT LIST PRINT.-->
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : FILESEQ-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;overflow:hidden;">
						FILESEQ
					</div>
					<!-- style="width:50;"-->
					<div class="CON_OBJECT">
						<!--FILESEQ오브젝트출력-->
						<input type="text" name="G3-FILESEQ" value="" id="G3-FILESEQ" style="width:50;text-align:LEFT" class="">
					</div>
				</div>
				</DIV>
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
				<!--I.COLID : FILE1-->
				<div class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;">
						파일1
					</div>
					<!-- style="width:100;"-->	
					<div class="CON_OBJECT">
						<input type="file" name="G3-FILE1" value="" id="G3-FILE1" style="width:100px;">
						<div  id="DIV-G3-FILE1" style="display:none">
							<a href="" target="_blank" name="G3-FILE1-LINK" id="G3-FILE1-LINK"><span id="G3-FILE1-NM" name="G3-FILE1-NM"></span></a><input type="checkbox" name="G3-FILE1-DEL" id="G3-FILE1-DEL">삭제
						</div>
					</div>
				</div>
			</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : LINKVIEW-->
				<div  id="DIV_G3-LINKVIEW" class="CON_OBJGRP" style="">
					<div class="CON_LABEL" style="width:100;text-align:left;">
						링크뷰
						</div>
						<!-- style="width:100px;"-->
					<div class="CON_OBJECT" style="width:100px;">
					<a href="" target="_blank" name="G3-LINKVIEW-LINK" id="G3-LINKVIEW-LINK"><span id="G3-LINKVIEW-NM" name="G3-LINKVIEW-NM"></span></a>
					</div>	
			</div>	
					</DIV><!--is_br_tab end-->
			<DIV class="OBJ_BR"></DIV>
			<DIV class="CON_LINE" is_br_tag>
			<!--D101: STARTTXT, TAG-->
			<!--I.COLID : HIDDENLINK-->
				<div  id="DIV_G3-HIDDENLINK" class="CON_OBJGRP" style="display:none">
					<div class="CON_LABEL" style="width:100;text-align:left;">
							히든링크
						</div>
						<!-- style="width:100px;"-->
					<div class="CON_OBJECT">
					<a href="" target="_blank" name="G3-HIDDENLINK-LINK" id="G3-HIDDENLINK-LINK"><span id="G3-HIDDENLINK-NM" name="G3-HIDDENLINK-NM"></span></a>
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
