var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "PGM"
			,"KEYCOLID": "PGMSEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LOGINYN", "COLNM" : "LOGINYN", "OBJTYPE" : "CHECKBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "DATE" }
			]
		}
); //PGM
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "GRP"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPID", "COLNM" : "GRPID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPNM", "COLNM" : "GRPNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPTYPE", "COLNM" : "GRPTYPE", "OBJTYPE" : "TEXT" }
			]
		}
); //GRP
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "PGM"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "CAL", "COLNM" : "달력", "OBJTYPE" : "CALENDAR" }
			]
		}
); //PGM
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "webixdtController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "webixdtController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "webixdtController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "webixdtController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
//컨트롤러 경로
var url_G2_EDITMODE = "webixdtController?CTLGRP=G2&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G2_CHKSAVE = "webixdtController?CTLGRP=G2&CTLFNC=CHKSAVE";
//컨트롤러 경로
var url_G2_SEARCH = "webixdtController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "webixdtController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_RELOAD = "webixdtController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_EXCEL1 = "webixdtController?CTLGRP=G2&CTLFNC=EXCEL1";
//컨트롤러 경로
var url_G2_ROWADD = "webixdtController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_ROWDELETE = "webixdtController?CTLGRP=G2&CTLFNC=ROWDELETE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//컨트롤러 경로
var url_G3_SEARCH = "webixdtController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "webixdtController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_RELOAD = "webixdtController?CTLGRP=G3&CTLFNC=RELOAD";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G4 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G4_USERDEF = "webixdtController?CTLGRP=G4&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G4_SEARCH = "webixdtController?CTLGRP=G4&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G4_SAVE = "webixdtController?CTLGRP=G4&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G4_RELOAD = "webixdtController?CTLGRP=G4&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G4_NEW = "webixdtController?CTLGRP=G4&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G4_MODIFY = "webixdtController?CTLGRP=G4&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G4_DELETE = "webixdtController?CTLGRP=G4&CTLFNC=DELETE";
//폼뷰 컨트롤러 경로
var url_G4_BIND = "webixdtController?CTLGRP=G4&CTLFNC=BIND";
var obj_G4_PJTSEQ;   // PJTSEQ 글로벌 변수 선언
var obj_G4_PGMSEQ;   // PGMSEQ 글로벌 변수 선언
var obj_G4_PGMID;   // 프로그램ID 글로벌 변수 선언
var obj_G4_PGMNM;   // 프로그램이름 글로벌 변수 선언
var obj_G4_PGMTYPE;   // PGMTYPE 글로벌 변수 선언
var obj_G4_CAL;   // 달력 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : PGM
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : GRP
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : PGM
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	//null
	alog("G4_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G4_RESIZE();

	alog("resizeGrpAll()______________end");
}
//화면 초기화	
function initBody(){
     alog("initBody()-----------------------start");

	//dhtmlx 메시지 박스 초기화
	//dhtmlx.message.position="bottom";

	//메시지 박스2
	toastr.options.closeButton = true;
	toastr.options.positionClass = 'toast-bottom-right';
	G1_INIT();
	G2_INIT();
	G3_INIT();
	G4_INIT();
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
	tColId = tColIndex;
	//G2, PGM, PGMID, 프로그램ID
	if( tGrpId == "G2" && tColId == "PGMID" ){
		obj_G2_PGMID_POPUP = window.open("about:blank","codeSearch_G2_PGMID_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='PGMID' id='PGMID' value='" + tValue + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.	
		frm1.append("<input type=text name='PGMID-NM' id='PGMID-NM' value='" + tText + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.	
		
		$("#GRPID").val(tGrpId);
		$("#ROWID").val(tRowId);		
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G2_PGMID_Pop";
		frm.method = "post";
		//frm.submit();

		alog("delay end and go.");

		//딜레이 폼실행
		var timer;
		var delay = 500; // 0.6 seconds delay after last input
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			alog("delay end and go1.");
			frm.submit();
			alog("delay end and go2.");
		}, delay);
	}
	//G2, PGM, PGMNM, 프로그램이름
	if( tGrpId == "G2" && tColId == "PGMNM" ){
		obj_G2_PGMNM_POPUP = window.open("about:blank","codeSearch_G2_PGMNM_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='PGMNM' id='PGMNM' value='" + tValue + "'>");//이 컬럼이 동적으로 PGMNM 변경되어야 함.	
		frm1.append("<input type=text name='PGMNM-NM' id='PGMNM-NM' value='" + tText + "'>");//이 컬럼이 동적으로 PGMNM 변경되어야 함.	
		
		$("#GRPID").val(tGrpId);
		$("#ROWID").val(tRowId);		
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G2_PGMNM_Pop";
		frm.method = "post";
		//frm.submit();

		alog("delay end and go.");

		//딜레이 폼실행
		var timer;
		var delay = 500; // 0.6 seconds delay after last input
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			alog("delay end and go1.");
			frm.submit();
			alog("delay end and go2.");
		}, delay);
	}
	tColId = tColIndex;
}
function goFormPopOpen(tGrpId, tColId, tColId_Nm){
	alog("goFormviewPopOpen()............. tGrpId = " + tGrpId + ", tColId = " + tColId + ", tColId_Nm = " +tColId_Nm );
	
	tColId_Val = $("#" + tColId).val();
	tColId_Nm_Text = $("#" + tColId_Nm).text();
	//PGMGRP ,  	
	//G4, PGM, PGMID, 프로그램ID
	if( tGrpId == "G4" && tColId == "G4-PGMID" ){
		obj_G4_PGMID_POPUP = window.open("about:blank","codeSearch_G4_PGMID_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='PGMID' id='PGMID' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.	
		frm1.append("<input type=text name='PGMID-NM' id='PGMID-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G4_PGMID_Pop";
		frm.method = "post";
		//frm.submit();

		alog("delay end and go.");

		//딜레이 폼실행
		var timer;
		var delay = 500; // 0.6 seconds delay after last input
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			alog("delay end and go1.");
			frm.submit();
			alog("delay end and go2.");
		}, delay);
	}

	//G4, PGM, PGMNM, 프로그램이름
	if( tGrpId == "G4" && tColId == "G4-PGMNM" ){
		obj_G4_PGMNM_POPUP = window.open("about:blank","codeSearch_G4_PGMNM_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='PGMNM' id='PGMNM' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 PGMNM 변경되어야 함.	
		frm1.append("<input type=text name='PGMNM-NM' id='PGMNM-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 PGMNM 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G4_PGMNM_Pop";
		frm.method = "post";
		//frm.submit();

		alog("delay end and go.");

		//딜레이 폼실행
		var timer;
		var delay = 500; // 0.6 seconds delay after last input
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			alog("delay end and go1.");
			frm.submit();
			alog("delay end and go2.");
		}, delay);
	}

}// goFormviewPopOpen
//부모창 리턴용//팝업창에서 받을 내용
function popReturn(tGrpId,tRowId,tColId,tBtnNm,tJsonObj){
	//alert("popReturn");
	//, 
	//GRID
	if(tGrpId == "G2" && tColId =="PGMID"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG2").getItem(tRowId);

		rowItem.PGMID = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG2").updateItem(tRowId, rowItem);

		//$$("wixdtG2").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G2_PGMID_POPUP != null)obj_G2_PGMID_POPUP.close();
	}
	//GRID
	if(tGrpId == "G2" && tColId =="PGMNM"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG2").getItem(tRowId);

		rowItem.PGMNM = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG2").updateItem(tRowId, rowItem);

		//$$("wixdtG2").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G2_PGMNM_POPUP != null)obj_G2_PGMNM_POPUP.close();
	}
	//FORM
	if(tGrpId == "G4" && tColId =="G4-PGMID"){
		$("#G4-PGMID").val(tJsonObj.CD);
		$("#G4-PGMID-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G4_PGMID_POPUP != null) obj_G4_PGMID_POPUP.close();
	}
	//FORM
	if(tGrpId == "G4" && tColId =="G4-PGMNM"){
		$("#G4-PGMNM").val(tJsonObj.CD);
		$("#G4-PGMNM-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G4_PGMNM_POPUP != null) obj_G4_PGMNM_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
  alog("G1_INIT()-------------------------end");
}

//PGM 그리드 초기화
function G2_INIT(){
	alog("G2_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G2 window resize.....................start");
		$$("wixdtG2").resize();
	});
	$("#G2-EDITMODE_EDIT_MODE").change(function(){
        if($("#G2-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG2").config.editaction = "click";
        }else{
            $$("wixdtG2").config.editaction = "dblclick";
        }
	});


	webix.ready(function(){

		webix.i18n.calendar = webixConfig.calendar;
		webix.i18n.dateFormat = webixConfig.dateFormat;
		webix.i18n.setLocale();
		webix.editors.$popup.text = webixConfig.popup_text;//팝업 가로/세로 커스텀

		// filter
		// 기본 : textFilter selectFilter numberFilter dateFilter 
		// 프로 : richSelectFilter multiSelectFilter multiComboFilter datepickerFilter dateRangeFilter excelFilter
		// datepickerFilter, dateRangeFilter : json은 리털밸류가 문자, 숫자만 있기 때문에 날짜인식을 위해서는 map을 이용해 (date)타입으로 변환필요
		//  기본 map 형식은 map: "(date)#colid1#"이나 id와 동일컬럼인 경우 "(date)" 날짜타입 변환만 표기 
		// multiSelectFilter : 선택전에는 콤보오브젝트 표시되고 선택후, 라벨에 선택된 아이템목록 모두 출력
		// multiComboFilter : 선택전에는 텍스트입력 오브젝트 표시되고 선택후, 라벨에 선택된 아이템수만 출력

		wixdtG2 = webix.ui({
			container: "wixdtG2",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG2",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"CHK", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:{ content:"masterCheckbox", contentId:"mcG2_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:["PJTSEQ", {content:"numberFilter"}]
					, editor:"text"
				},
				{
					id:"PGMTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:["PGMTYPE", {content:"multiSelectFilter"}]
					, editor:"combo", options:null
				},
				{
					id:"PGMSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:["PGMSEQ", {content:"numberFilter"}]
					, editor:"text"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:["프로그램ID", {content:"richSelectFilter"}]
					, editor:"text"
				},
				{
					id:"PGMNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:["프로그램이름", {content:"selectFilter"}]
					, editor:"text"
				},
				{
					id:"LOGINYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:["LOGINYN", {content:"selectFilter"}]
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"ADDDT", sort:"date"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:["ADDDT", {content:"datepickerFilter"}]
					, editor:"date"
					, format:webix.Date.dateToStr("%Y-%m-%d")
					, map: "(date)"
				},
			]
			, on:{
				onSelectChange:function(){
					var text = "Selected: "+$$("wixdtG2").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		apiCodeCombo("G2","PGMTYPE",{"G1-PCD":"PGMTYPE"},""); // IO : PGMTYPE초기화
		wixdtG2.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG2.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG2").data.getItem(rowId);
			//편집모드 일때는 하위 새로고침 안하게 하기
			if($("#G2-EDITMODE_EDIT_MODE") && $("#G2-EDITMODE_EDIT_MODE").is(":checked"))return false;
			lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
				', "G2-PJTSEQ" : "' + rowData.PJTSEQ + '"' +
				', "G2-PGMSEQ" : "' + rowData.PGMSEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // GRP
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-PJTSEQ",rowData.PJTSEQ); // 
			lastinputG3.set("G2-PGMSEQ",rowData.PGMSEQ); // 
			lastinputG4json = jQuery.parseJSON('{ "__NAME":"lastinputG4json"' +
				', "G2-PJTSEQ" : "' + rowData.PJTSEQ + '"' +
				', "G2-PGMSEQ" : "' + rowData.PGMSEQ + '"' +
			'}');
			lastinputG4 = new HashMap(); // PGM
			lastinputG4.set("__ROWID",rowData.uid);
			lastinputG4.set("G2-PJTSEQ",rowData.PJTSEQ); // 
			lastinputG4.set("G2-PGMSEQ",rowData.PGMSEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : GRP
			G4_SEARCH(lastinputG4,uuidv4()); //자식그룹 호출 : PGM
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG2.onItemClick()............................end");
		});
		wixdtG2.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG2.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG2.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G2_INIT()-------------------------end");
}
//GRP 그리드 초기화
function G3_INIT(){
	alog("G3_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G3 window resize.....................start");
		$$("wixdtG3").resize();
	});
	$("#G3-EDITMODE_EDIT_MODE").change(function(){
        if($("#G3-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG3").config.editaction = "click";
        }else{
            $$("wixdtG3").config.editaction = "dblclick";
        }
	});


	webix.ready(function(){

		webix.i18n.calendar = webixConfig.calendar;
		webix.i18n.dateFormat = webixConfig.dateFormat;
		webix.i18n.setLocale();
		webix.editors.$popup.text = webixConfig.popup_text;//팝업 가로/세로 커스텀

		// filter
		// 기본 : textFilter selectFilter numberFilter dateFilter 
		// 프로 : richSelectFilter multiSelectFilter multiComboFilter datepickerFilter dateRangeFilter excelFilter
		// datepickerFilter, dateRangeFilter : json은 리털밸류가 문자, 숫자만 있기 때문에 날짜인식을 위해서는 map을 이용해 (date)타입으로 변환필요
		//  기본 map 형식은 map: "(date)#colid1#"이나 id와 동일컬럼인 경우 "(date)" 날짜타입 변환만 표기 
		// multiSelectFilter : 선택전에는 콤보오브젝트 표시되고 선택후, 라벨에 선택된 아이템목록 모두 출력
		// multiComboFilter : 선택전에는 텍스트입력 오브젝트 표시되고 선택후, 라벨에 선택된 아이템수만 출력

		wixdtG3 = webix.ui({
			container: "wixdtG3",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG3",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
				, hidden: true
					, width:100
					, header:"PJTSEQ"
					, editor:"text"
				},
				{
					id:"PGMSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
				, hidden: true
					, width:100
					, header:"PGMSEQ"
					, editor:"text"
				},
				{
					id:"GRPSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"GRPSEQ"
					, editor:"text"
				},
				{
					id:"GRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"GRPID"
					, editor:"text"
				},
				{
					id:"GRPNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:"GRPNM"
					, editor:"text"
				},
				{
					id:"GRPTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"GRPTYPE"
					, editor:"text"
				},
			]
			, on:{
				onSelectChange:function(){
					var text = "Selected: "+$$("wixdtG3").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		wixdtG3.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG3.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG3").data.getItem(rowId);
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG3.onItemClick()............................end");
		});
		wixdtG3.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG3.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG3.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G3_INIT()-------------------------end");
}
//디테일 초기화	
//PGM 폼뷰 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");
	//컬럼 초기화
	//PJTSEQ, PJTSEQ 초기화
	//PGMSEQ, PGMSEQ 초기화	
	//PGMID, 프로그램ID 초기화	
	//PGMNM, 프로그램이름 초기화
	//달력 CAL, 달력
	$( "#G4-CAL" ).datepicker(dateFormatJson);
  alog("G4_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//, 저장	
function G1_SAVE(token){
 alog("G1_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G1 getparams	
	allData = $$("wixdtG2").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G2-JSON",myJsonString);
	allData = $$("wixdtG3").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G3-JSON",myJsonString);
	$.ajax({
		type : "POST",
		url : url_G1_SAVE+"&TOKEN=" + token ,
		data : sendFormData,
		processData: false,
		contentType: false,
		async: false,
		dataType: "json",
		success: function(data){
			alog("   json return----------------------");
			alog(data);
			//data = jQuery.parseJSON(tdata);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			saveToGroup(data);

		},
		error: function(error){
			msgError("[G1] Ajax http 500 error ( " + error + " )");
			alog("[G1] Ajax http 500 error ( " + error + " )");
		}
	});
	alog("G1_SAVE-------------------end");	
}
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //PGM
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//사용자정의함수 : 사용자정의
function G1_USERDEF(token){
	alog("G1_USERDEF-----------------start");

	alog("G1_USERDEF-----------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//PGM
function G2_SAVE(token){
	alog("G2_SAVE()------------start");

	if(G2_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G2_REQUEST_ON = true;

    allData = $$("wixdtG2").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG2 != "undefined" && lastinputG2 != null){
		var tKeys = lastinputG2.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG2.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG2.get(tKeys[i])); 
		}
	}
	sendFormData.append("G2-JSON" , myJsonString);
	allData = $$("wixdtG2").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G2-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G2_SAVE+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: false,
		success: function(data){
			alog("   json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			saveToGroup(data);

		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G2_REQUEST_ON = false;
		}

	});
	
	alog("G2_SAVE()------------end");
}
//-
function G2_ROWDELETE(tinput,token){
	alog("G2_ROWDELETE()------------start");

    rowId = $$("wixdtG2").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG2").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG2").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//PGM
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE()------------start");


	var allData = $$("wixdtG2").serialize(true);
    alog(allData);


    var chkData = _.filter(allData,['CHK','1']);
    for(i=0;i<chkData.length;i++){
        chkData[i].changeState = true;
        chkData[i].changeCud = "updated";
    }
    alog(chkData);
    var myJsonString = JSON.stringify(chkData);
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG2 != "undefined" && lastinputG2 != null){
		var tKeys = lastinputG2.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG2.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG2.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	allData = $$("wixdtG2").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G2-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G2_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: false,
		success: function(data){
			alog("   json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			saveToGroup(data);

		},
		error: function(error){
			msgError("Ajax http 500 error ( " + error + " )");
			alog("Ajax http 500 error ( " + error + " )");
		},
		complete : function() {
			G2_REQUEST_ON = false;
		}

	});
	
	alog("G2_CHKSAVE()------------end");
}
//그리드 조회(PGM)	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");

	if(G2_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G2_REQUEST_ON = true;


    $$("wixdtG2").clearAll();
	wixdtG2.markSorting("",""); //정렬 arrow 클리어
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
		//tinput 넣어주기
		if(typeof tinput != "undefined" && tinput != null){
			var tKeys = tinput.keys();
			for(i=0;i<tKeys.length;i++) {
				sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
				//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
			}
		}

	//불러오기
	$.ajax({
		type : "POST",
		url : url_G2_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG2 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG2Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG2").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG2Cnt").text("-");
			}
			msgNotice("[PGM] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[PGM] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[PGM] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G2_REQUEST_ON = false;
		}
	});
        alog("G2_SEARCH()------------end");
    }

//
//+
function G2_ROWADD(tinput,token){
	alog("G2_ROWADD()------------start");

	if( !(lastinputG2)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"CHK" : ""
		,"PJTSEQ" : ""
		,"PGMTYPE" : ""
		,"PGMSEQ" : ""
		,"PGMID" : ""
		,"PGMNM" : ""
		,"LOGINYN" : ""
		,"ADDDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//엑셀 다운받기 - 렌더링 후값인 NM (PGM)
function G2_EXCEL1(tinput,token){
	alog("G2_EXCEL1()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CHK": {header: "CHK"}
,			"PJTSEQ": {header: "PJTSEQ"}
,			"PGMTYPE": {header: "PGMTYPE"}
,			"PGMSEQ": {header: "PGMSEQ"}
,			"PGMID": {header: "프로그램ID"}
,			"PGMNM": {header: "프로그램이름"}
,			"LOGINYN": {header: "LOGINYN"}
,			"ADDDT": {header: "ADDDT"}
			}
		}   
	);


	alog("G2_EXCEL1()------------end");
}//GRP
function G3_SAVE(token){
	alog("G3_SAVE()------------start");

	if(G3_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G3_REQUEST_ON = true;

    allData = $$("wixdtG3").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG3 != "undefined" && lastinputG3 != null){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}
	sendFormData.append("G3-JSON" , myJsonString);
	allData = $$("wixdtG3").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G3-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G3_SAVE+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: false,
		success: function(data){
			alog("   json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			saveToGroup(data);

		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_SAVE()------------end");
}
//그리드 조회(GRP)	
function G3_SEARCH(tinput,token){
	alog("G3_SEARCH()------------start");

	if(G3_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G3_REQUEST_ON = true;


    $$("wixdtG3").clearAll();
	wixdtG3.markSorting("",""); //정렬 arrow 클리어
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
		//tinput 넣어주기
		if(typeof tinput != "undefined" && tinput != null){
			var tKeys = tinput.keys();
			for(i=0;i<tKeys.length;i++) {
				sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
				//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
			}
		}

	//불러오기
	$.ajax({
		type : "POST",
		url : url_G3_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG3 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG3Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG3").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG3Cnt").text("-");
			}
			msgNotice("[GRP] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[GRP] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[GRP] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G3_REQUEST_ON = false;
		}
	});
        alog("G3_SEARCH()------------end");
    }

//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//사용자정의함수 : 사용자정의
function G4_USERDEF(token){
	alog("G4_USERDEF-----------------start");

	alog("G4_USERDEF-----------------end");
}
function G4_BIND(data,token){
	alog("(FORMVIEW) G4_BIND---------------start");

	$( "#G4-PGMSEQ" ).unbind(); //이벤트 제거 : PGMSEQ
	$( "#G4-PGMID" ).unbind(); //이벤트 제거 : 프로그램ID
	$( "#G4-PGMNM" ).unbind(); //이벤트 제거 : 프로그램이름
	$( "#G4-PGMTYPE" ).unbind(); //이벤트 제거 : PGMTYPE
	$("#G4-PJTSEQ").text(data.get("G2-PJTSEQ"));//PJTSEQ 변수세팅
	$("#G4-PGMSEQ").val(data.get("G2-PGMSEQ"));//PGMSEQ 변수세팅
	$("#G4-PGMID").val(data.get("G2-PGMID"));//프로그램ID 변수세팅
	$("#G4-PGMNM").val(data.get("G2-PGMNM"));//프로그램이름 오브젝트 값세팅
	$("#G4-PGMTYPE").val(data.get("G2-PGMTYPE"));//PGMTYPE 변수세팅
	$("#G4-CAL").val(data.get("G2-CAL"));//달력 오브젝트 값 세팅
	//첫호출 이면 오브젝트에 이벤트 붙이기
	if(!isBindEvent_G4){

		//PGMSEQ
		$( "#G4-PGMSEQ" ).keyup(function() {
			alog("G4-PGMSEQ change event.");
			rid = lastinputG4.get("__ROWID");
			cidx = mygridG2.getColIndexById("PGMSEQ");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});
		//프로그램ID
		$( "#G4-PGMID" ).keyup(function() {
			alog("G4-PGMID change event.");
			rid = lastinputG4.get("__ROWID");
			cidx = mygridG2.getColIndexById("PGMID");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});
		//프로그램이름
		$( "#G4-PGMNM" ).keyup(function() {
			alog("G4-PGMNM change event.");
			rid = lastinputG4.get("__ROWID");
			cidx = mygridG2.getColIndexById("PGMNM");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});
		//PGMTYPE
		$( "#G4-PGMTYPE" ).change(function() {
			alog("G4-PGMTYPE change event.");
			rid = lastinputG4.get("__ROWID");
			cidx = mygridG2.getColIndexById("PGMTYPE");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});
		//달력
		$( "#G4-CAL" ).change(function() {
			alog("G4-CAL change event.");
			rid = lastinputG4.get("__ROWID");
			cidx = mygridG2.getColIndexById("CAL");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});

		//isBindEvent_G4 = true;
	}
	alog("(FORMVIEW) G4_BIND---------------end");

}
//새로고침	
function G4_RELOAD(token){
	alog("G4_RELOAD-----------------start");
	G4_SEARCH(lastinputG4,token);
}//FORMVIEW DELETE
function G4_DELETE(token){
	alog("G4_DELETE---------------start");

	//조회했는지 확인하기
	if( $("#G4-CTLCUD").val() != "R" ){
		alert("조회된 것만 삭제 가능합니다.");
		return;
	}
	//확인
	if(!confirm("정말로 삭제하시겠습니까?")){
		return;
	}
	
	//삭제처리 명령어
	$("#G4-CTLCUD").val("D");
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG4 != "undefined" && lastinputG4 != null ){
		var tKeys = lastinputG4.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG4.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG4.get(tKeys[i])); 
		}
	}

	$.ajax({
		type : "POST",
		url : url_G4_DELETE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		success: function(tdata){
			alog(tdata);
			data = jQuery.parseJSON(tdata);
			//alert(data);
			if(data && data.RTN_CD == "200"){
				if(typeof(data.GRP_DATA) == "undefined" || data.GRP_DATA[0] == null || typeof(data.GRP_DATA[0].RTN_DATA) == "undefined"){
					msgNotice("오류를 발생하지 않았으나, 처리 내역이 없습니다.(GRP_DATA is null, SQL미등록)",1);
				}else{
					affectedRows = data.GRP_DATA[0].RTN_DATA;
					msgNotice("정상적으로 삭제되었습니다. [영향받은건수:" + affectedRows + "]",1);
				}
			}else{
				msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
			}
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
}
//G4_SAVE
//IO_FILE_YN = V/, G/N	
//IO_FILE_YN = N	
function G4_SAVE(token){	
	alog("G4_SAVE---------------start");

	if( !( $("#G4-CTLCUD").val() == "C" || $("#G4-CTLCUD").val() == "U") ){
		alert("신규 또는 수정 모드 진입 후 저장할 수 있습니다.")
		return;
	}



	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG4 != "undefined"  && lastinputG4 != null){
		var tKeys = lastinputG4.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG4.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG4.get(tKeys[i])); 
		}
	}
	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP

	$.ajax({
		type : "POST",
		url : url_G4_SAVE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			//alog(tdata);
			//data = jQuery.parseJSON(tdata);

			saveToGroup(tdata);
			//alert(data);
			//if(data && data.RTN_CD == "200"){

				//if(typeof(data.GRP_DATA) == "undefined" || data.GRP_DATA[0] == null || typeof(data.GRP_DATA[0].RTN_DATA) == "undefined"){
					//msgNotice("오류를 발생하지 않았으나, 처리 내역이 없습니다.(GRP_DATA is null, SQL미등록)",1);
				//}else{
					//affectedRows = data.GRP_DATA[0].RTN_DATA;
					//msgNotice("정상적으로 저장되었습니다. [영향받은건수:" + affectedRows + "]",1);
				//}

			//}else{
				//msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
			//}
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
}
function G4_MODIFY(){
       alog("[FromView] G4_MODIFY---------------start");
	if( $("#G4-CTLCUD").val() == "C" ){
		alert("조회 후 수정 가능합니다. 신규 모드에서는 수정할 수 없습니다.")
		return;
	}
	if( $("#G4-CTLCUD").val() == "D" ){
		alert("조회 후 수정 가능합니다. 삭제 모드에서는 수정할 수 없습니다.")
		return;
	}

	$("#G4-CTLCUD").val("U");
       alog("[FromView] G4_MODIFY---------------end");
}
//디테일 검색	
function G4_SEARCH(tinput,token){
       alog("(FORMVIEW) G4_SEARCH---------------start");

	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	if(typeof tinput != "undefined" && tinput != null){
		var tKeys = tinput.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
		}
	}

	$.ajax({
        type : "POST",
        url : url_G4_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}

            //모드 변경하기
            $("#G4-CTLCUD").val("R");
			//SETVAL  가져와서 세팅
	$("#G4-PJTSEQ").text(data.RTN_DATA.PJTSEQ);//PJTSEQ 변수세팅
			$("#G4-PGMSEQ").val(data.RTN_DATA.PGMSEQ);//PGMSEQ 변수세팅
			$("#G4-PGMID").val(data.RTN_DATA.PGMID);//프로그램ID 변수세팅
		$("#G4-PGMNM").val(data.RTN_DATA.PGMNM);//프로그램이름 오브젝트 값세팅
			$("#G4-PGMTYPE").val(data.RTN_DATA.PGMTYPE);//PGMTYPE 변수세팅
	$("#G4-CAL").val(data.RTN_DATA.CAL);//달력 오브젝트 값 세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G4_SEARCH---------------end");

}
//	
function G4_NEW(){
	alog("[FromView] G4_NEW---------------start");
	$("#G4-CTLCUD").val("C");
	//PMGIO 로직
	$("#G4-PJTSEQ").text("");//PJTSEQ 신규초기화
	$("#G4-PGMSEQ").val("");//PGMSEQ 신규초기화	
	$("#G4-PGMID").val("");//프로그램ID 신규초기화	
	$("#G4-PGMNM").val("");//프로그램이름 신규초기화
	alog("DETAILNew40---------------end");
}
