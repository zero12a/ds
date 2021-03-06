<?php
//PGMID : 
//PGMNM : 
header("Content-Type: text/html; charset="); //HTML

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
<title></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="Context-Type" context="text/html;charset=" />
<!--CSS/JS 불러오기-->
<!--JS 불러오기-->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->
<script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/javascript" charset=""></script> <!---->

<!--CSS 불러오기-->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
<link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>" type="text/css" charset=""><!---->
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
<link rel="stylesheet" href="/common/common.css?<?=getRndVal(10)?>" type="text/css" charset="">

<script src=".js?<?=getRndVal(10)?>"></script>
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
				<!-- layout = split vertical -->
	<!--
	#####################################################
	## 컨디션 조건1 - START G.GRPID : C1-
	#####################################################
	-->
 	<div class="GRP_OBJECT" style="width:100%;" id="layout_C1">
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
            <div class="GRP_INNER" style="height:74px;">	
		
	  		<div style="width:0px;height:0px;overflow: hidden"><form id="condition" onsubmit="return false;"></div>
		<div class="CONDITION_LABELGRP">
			<div class="CONDITION_LABEL"  style="">
				<b>* </b>	
				<!--popup--><a href="?" target="_blank"><img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/popup.png" height=10 align=absmiddle border=0></a>
				<!--reload--><a href="javascript:location.reload();"><img src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>img/reload.png" width=11 height=10 align=absmiddle border=0></a>
			</div>	
			<div class="CONDITION_LABELBTN">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C1_SEARCHALL" value="조회(전체)" onclick="C1_SEARCHALL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C1_SAVE" value="저장" onclick="C1_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm"  name="BTN_C1_RESET" value="입력 초기화" onclick="C1_RESET(uuidv4());">
			</div>
		</div>
		<div style="height:32px;border-radius:3px;-moz-border-radius: 3px;" class="CONDITION_OBJECT">
			<DIV class="CON_LINE" is_br_tag>
		<!--컨디션 IO리스트-->
				<!--I.COLID : -->
				<div class="CON_OBJGRP" style="">
					<!-- style="width:px;"-->
					<div class="CON_OBJECT">
						<!--오브젝트출력-->
						<input type="text" name="C1-" value="<?=getFilter(reqPostString("",),"SAFEECHO","")?>" id="C1-" style="width:px;" class="">
					</div>
				</div>
			</div><!-- is_br_tag end -->
		</div>
		<div style="width:0px;height:0px;overflow: hidden"></form></div>    
		</div></div>
	</div>
				<!-- layout = split horizontal -->
				<!--layout horizontal start-->
				<div id="L2">
	<!--
	#####################################################
	## 그리드 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:35%;" id="layout_G2"> 
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG2_GRID_LABEL"class="GRID_LABEL" >
				* 사용자1      
			</div>
			<div id="div_gridG2_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG2Cnt" name="그리드 ROW 갯수">N</span>
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_USERDEF" value="비번변경" onclick="G2_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_SAVE" value="S" onclick="G2_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWDELETE" value="-" onclick="G2_ROWDELETE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_ROWADD" value="+" onclick="G2_ROWADD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_RELOAD" value="R" onclick="G2_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_HIDDENCOL" value="V" onclick="G2_HIDDENCOL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_EXCEL" value="E" onclick="G2_EXCEL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G2_CHKSAVE" value="선택저장" onclick="G2_CHKSAVE(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT"  style="">
			<div id="wixdtG2"  style="background-color:white;overflow:hidden;height:457px;width:100%;"></div>
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
	## 그리드 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:25%;" id="layout_G3"> 
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG3_GRID_LABEL"class="GRID_LABEL" >
				* FILE저장소      
			</div>
			<div id="div_gridG3_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG3Cnt" name="그리드 ROW 갯수">N</span>
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_SAVE" value="S" onclick="G3_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_ROWDELETE" value="-" onclick="G3_ROWDELETE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_ROWADD" value="+" onclick="G3_ROWADD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_RELOAD" value="R" onclick="G3_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_HIDDENCOL" value="V" onclick="G3_HIDDENCOL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_EXCEL" value="E" onclick="G3_EXCEL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_CHKSAVE" value="선택저장" onclick="G3_CHKSAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G3_PUBSUB" value="FS캐쉬반영" onclick="G3_PUBSUB(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT"  style="">
			<div id="wixdtG3"  style="background-color:white;overflow:hidden;height:457px;width:100%;"></div>
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
	## 그리드 - START
	#####################################################
	-->
    <div class="GRP_OBJECT" style="width:40%;" id="layout_G4"> 
        <div class="GRP_GAP"><!--흰색 바깥 여백-->
		<div  class="GRID_LABELGRP">
			<div class="GRID_LABELGRP_GAP">	<!--그리드만 필요-->
  			<div id="div_gridG4_GRID_LABEL"class="GRID_LABEL" >
				* DB저장소      
			</div>
			<div id="div_gridG4_GRID_LABELBTN" class="GRID_LABELBTN"  style="">
				<span id="spanG4Cnt" name="그리드 ROW 갯수">N</span>
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_USERDEF" value="사용자정의" onclick="G4_USERDEF(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_SAVE" value="S" onclick="G4_SAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_ROWDELETE" value="-" onclick="G4_ROWDELETE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_ROWADD" value="+" onclick="G4_ROWADD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_RELOAD" value="R" onclick="G4_RELOAD(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_HIDDENCOL" value="V" onclick="G4_HIDDENCOL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_EXCEL" value="E" onclick="G4_EXCEL(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_CHKSAVE" value="선택저장" onclick="G4_CHKSAVE(uuidv4());">
				<input type="button" class="btn btn-secondary  btn-sm" name="BTN_G4_PUBSUB" value="DS캐쉬반영" onclick="G4_PUBSUB(uuidv4());">
			</div>
			</div><!--GAP-->
		</div>
		<div  class="GRID_OBJECT"  style="">
			<div id="wixdtG4"  style="background-color:white;overflow:hidden;height:457px;width:100%;"></div>
		</div>
		</div>
	</div>
	<!--
	#####################################################
	## 그리드 - END
	#####################################################
	-->
				</div>
				<!--layout horizontal end-->
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
