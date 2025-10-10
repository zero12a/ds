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
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMID", "COLNM" : "PGMID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FROMSVRID", "COLNM" : "FROM SVRID", "OBJTYPE" : "COMBO" }
,				{ "COLID": "TOSVRID", "COLNM" : "TO SVRID", "OBJTYPE" : "COMBO" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "PGM"
			,"KEYCOLID": "PGMSEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "ROWCHKUP", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PKGGRP", "COLNM" : "PKGGRP", "OBJTYPE" : "TEXT" }
,				{ "COLID": "VIEWURL", "COLNM" : "VIEWURL", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "SECTYPE", "COLNM" : "SECTYPE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //PGM
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "SVC MENU"
			,"KEYCOLID": "MNU_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "MNU_SEQ", "COLNM" : "MNU_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "URL", "COLNM" : "URL", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_ID", "COLNM" : "MOD_ID", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //SVC MENU
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "AUTH"
			,"KEYCOLID": "ROWID"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "ROWID", "COLNM" : "ROWID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "AUTH_NM", "COLNM" : "AUTH_NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //AUTH
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "SVC AUTH"
			,"KEYCOLID": "AUTH_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "AUTH_SEQ", "COLNM" : "AUTH_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_NM", "COLNM" : "AUTH_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //SVC AUTH
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rddeployController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "rddeployController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rddeployController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_PJTSEQ; // PJTSEQ 변수선언
var obj_G1_PGMID; // PGMID 변수선언
var obj_G1_PGMNM; // 프로그램이름 변수선언
var obj_G1_AUTH_ID; // AUTH_ID 변수선언
var obj_G1_FROMSVRID; // FROM SVRID 변수선언
var obj_G1_TOSVRID; // TO SVRID 변수선언
//컨트롤러 경로
var url_G2_SEARCH = "rddeployController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "rddeployController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "rddeployController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "rddeployController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_ADDROW = "rddeployController?CTLGRP=G2&CTLFNC=ADDROW";
//컨트롤러 경로
var url_G2_SAVE = "rddeployController?CTLGRP=G2&CTLFNC=SAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//컨트롤러 경로
var url_G3_CHKDEL = "rddeployController?CTLGRP=G3&CTLFNC=CHKDEL";
//컨트롤러 경로
var url_G3_USERDEF = "rddeployController?CTLGRP=G3&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G3_SEARCH = "rddeployController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "rddeployController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "rddeployController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWADD = "rddeployController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "rddeployController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_EXCEL = "rddeployController?CTLGRP=G3&CTLFNC=EXCEL";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//컨트롤러 경로
var url_G4_SEARCH = "rddeployController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_RELOAD = "rddeployController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_HIDDENCOL = "rddeployController?CTLGRP=G4&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G4_EXCEL = "rddeployController?CTLGRP=G4&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G4_ADDROW = "rddeployController?CTLGRP=G4&CTLFNC=ADDROW";
//컨트롤러 경로
var url_G4_SAVE = "rddeployController?CTLGRP=G4&CTLFNC=SAVE";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
var G4_REQUEST_ON = false;
//컨트롤러 경로
var url_G5_CHKDEL = "rddeployController?CTLGRP=G5&CTLFNC=CHKDEL";
//컨트롤러 경로
var url_G5_SEARCH = "rddeployController?CTLGRP=G5&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G5_SAVE = "rddeployController?CTLGRP=G5&CTLFNC=SAVE";
//컨트롤러 경로
var url_G5_ROWDELETE = "rddeployController?CTLGRP=G5&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G5_ROWADD = "rddeployController?CTLGRP=G5&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G5_RELOAD = "rddeployController?CTLGRP=G5&CTLFNC=RELOAD";
//그리드 객체
var wixdtG5,isToggleHiddenColG5,lastinputG5,lastinputG5json,lastrowidG5;
var lastselectG5json;
var G5_REQUEST_ON = false;
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
//사이즈 리셋 : SVC MENU
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : AUTH
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");

	$$("wixdtG4").resize();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : SVC AUTH
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");

	$$("wixdtG5").resize();

	alog("G5_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G4_RESIZE();
	G5_RESIZE();

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
	G5_INIT();
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
	tColId = tColIndex;
	tColId = tColIndex;
	tColId = tColIndex;
	tColId = tColIndex;
}
function goFormPopOpen(tGrpId, tColId, tColId_Nm){
	alog("goFormviewPopOpen()............. tGrpId = " + tGrpId + ", tColId = " + tColId + ", tColId_Nm = " +tColId_Nm );
	
	tColId_Val = $("#" + tColId).val();
	tColId_Nm_Text = $("#" + tColId_Nm).text();
	//PGMGRP ,  	
}// goFormviewPopOpen
//부모창 리턴용//팝업창에서 받을 내용
function popReturn(tGrpId,tRowId,tColId,tBtnNm,tJsonObj){
	//alert("popReturn");
	//, 

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//PJTSEQ, PJTSEQ 초기화	
	//PGMID, PGMID 초기화	
	//PGMNM, 프로그램이름 초기화	
	//AUTH_ID, AUTH_ID 초기화	
apiCodeCombo("G1","FROMSVRID",{"CTLGRP":"G2", "CTLFNC":"SVRID"},"");
apiCodeCombo("G1","TOSVRID",{"CTLGRP":"G2", "CTLFNC":"SVRID"},"");
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
					id:"ROWCHKUP", sort:"int"
					, css:{"text-align":"CENTER"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG2_ROWCHKUP" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"PGMSEQ", sort:"int"
					, css:{"text-align":""}
					, fillspace: true
					, header:"PGMSEQ"
					, editor:"text"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램ID"
					, editor:"text"
				},
				{
					id:"PGMNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램이름"
					, editor:"text"
				},
				{
					id:"PKGGRP", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"PKGGRP"
					, editor:"text"
				},
				{
					id:"VIEWURL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"VIEWURL"
					, editor:"text"
				},
				{
					id:"PGMTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"PGMTYPE"
					, editor:"text"
				},
				{
					id:"SECTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SECTYPE"
					, editor:"text"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"ADDDT"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"MODDT"
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
		wixdtG2.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG2.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG2").data.getItem(rowId);
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
//SVC MENU 그리드 초기화
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
					id:"CHK", sort:"int"
					, css:{"text-align":"CENTER"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG3_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"MNU_SEQ", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_SEQ"
				},
				{
					id:"MNU_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_NM"
					, editor:"text"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램ID"
					, editor:"text"
				},
				{
					id:"URL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"URL"
					, editor:"text"
				},
				{
					id:"PGMTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"PGMTYPE"
					, editor:"text"
				},
				{
					id:"MNU_ORD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_ORD"
					, editor:"text"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USE_YN"
					, editor:"text"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD"
				},
				{
					id:"ADD_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD_ID"
				},
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MOD"
				},
				{
					id:"MOD_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MOD_ID"
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
//AUTH 그리드 초기화
function G4_INIT(){
	alog("G4_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G4 window resize.....................start");
		$$("wixdtG4").resize();
	});
	$("#G4-EDITMODE_EDIT_MODE").change(function(){
        if($("#G4-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG4").config.editaction = "click";
        }else{
            $$("wixdtG4").config.editaction = "dblclick";
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

		wixdtG4 = webix.ui({
			container: "wixdtG4",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG4",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"CHK", sort:"int"
					, css:{"text-align":"CENTER"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG4_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"ROWID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ROWID"
					, editor:"text"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램ID"
					, editor:"text"
				},
				{
					id:"AUTH_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"AUTH_ID"
					, editor:"text"
				},
				{
					id:"AUTH_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"AUTH_NM"
					, editor:"text"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"ADDDT"
				},
			]
			, on:{
				onSelectChange:function(){
					var text = "Selected: "+$$("wixdtG4").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		wixdtG4.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG4.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG4").data.getItem(rowId);
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG4.onItemClick()............................end");
		});
		wixdtG4.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG4.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG4.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G4_INIT()-------------------------end");
}
//SVC AUTH 그리드 초기화
function G5_INIT(){
	alog("G5_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G5 window resize.....................start");
		$$("wixdtG5").resize();
	});
	$("#G5-EDITMODE_EDIT_MODE").change(function(){
        if($("#G5-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG5").config.editaction = "click";
        }else{
            $$("wixdtG5").config.editaction = "dblclick";
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

		wixdtG5 = webix.ui({
			container: "wixdtG5",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG5",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"CHK", sort:"int"
					, css:{"text-align":"CENTER"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG5_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"AUTH_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"AUTH_SEQ"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램ID"
					, editor:"text"
				},
				{
					id:"AUTH_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"AUTH_ID"
				},
				{
					id:"AUTH_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"AUTH_NM"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USE_YN"
					, editor:"text"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD"
				},
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MOD"
				},
			]
			, on:{
				onSelectChange:function(){
					var text = "Selected: "+$$("wixdtG5").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		wixdtG5.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG5.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG5").data.getItem(rowId);
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG5.onItemClick()............................end");
		});
		wixdtG5.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG5.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG5.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G5_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//, 저장	
function G1_SAVE(token){
 alog("G1_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G1 getparams	
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
				lastinputG3 = new HashMap(); //SVC MENU
				lastinputG4 = new HashMap(); //AUTH
				lastinputG5 = new HashMap(); //SVC AUTH
		//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G3_SEARCH(lastinputG3,token);
	//  호출
	G4_SEARCH(lastinputG4,token);
	//  호출
	G5_SEARCH(lastinputG5,token);
	alog("G1_SEARCHALL--------------------------end");
}
//
//+
function G2_ADDROW(tinput,token){
	alog("G2_ADDROW()------------start");

	if( !(lastinputG2)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"ROWCHKUP" : ""
		,"PGMSEQ" : ""
		,"PGMID" : ""
		,"PGMNM" : ""
		,"PKGGRP" : ""
		,"VIEWURL" : ""
		,"PGMTYPE" : ""
		,"SECTYPE" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : 숨김필드보기
function G2_HIDDENCOL(token){
	alog("G2_HIDDENCOL-----------------start");

	if(isToggleHiddenColG2){
		isToggleHiddenColG2 = false;
	}else{
			isToggleHiddenColG2 = true;
		}

		alog("G2_HIDDENCOL-----------------end");
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

//엑셀 다운받기 - 렌더링 후값인 NM (PGM)
function G2_EXCEL(tinput,token){
	alog("G2_EXCEL()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"ROWCHKUP": {header: "CHK"}
,			"PGMSEQ": {header: "PGMSEQ"}
,			"PGMID": {header: "프로그램ID"}
,			"PGMNM": {header: "프로그램이름"}
,			"PKGGRP": {header: "PKGGRP"}
,			"VIEWURL": {header: "VIEWURL"}
,			"PGMTYPE": {header: "PGMTYPE"}
,			"SECTYPE": {header: "SECTYPE"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "MODDT"}
			}
		}   
	);


	alog("G2_EXCEL()------------end");
}//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//PGM
function G2_SAVE(token){
	alog("G2_SAVE()------------start");


	var allData = $$("wixdtG2").serialize(true);
    alog(allData);


    var chkData = _.filter(allData,['ROWCHKUP','1']);
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
		url : url_G2_SAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G2_SAVE()------------end");
}
//SVC MENU
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
	allData = $$("wixdtG5").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G5-JSON",myJsonString);

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
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_SAVE()------------end");
}
//엑셀 다운받기 - 렌더링 후값인 NM (SVC MENU)
function G3_EXCEL(tinput,token){
	alog("G3_EXCEL()------------start");

	webix.toExcel($$("wixdtG3"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CHK": {header: "CHK"}
,			"MNU_SEQ": {header: "MNU_SEQ"}
,			"MNU_NM": {header: "MNU_NM"}
,			"PGMID": {header: "프로그램ID"}
,			"URL": {header: "URL"}
,			"PGMTYPE": {header: "PGMTYPE"}
,			"MNU_ORD": {header: "MNU_ORD"}
,			"USE_YN": {header: "USE_YN"}
,			"ADD_DT": {header: "ADD"}
,			"ADD_ID": {header: "ADD_ID"}
,			"MOD_DT": {header: "MOD"}
,			"MOD_ID": {header: "MOD_ID"}
			}
		}   
	);


	alog("G3_EXCEL()------------end");
}//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//사용자정의함수 : 사용자정의
function G3_USERDEF(token){
	alog("G3_USERDEF-----------------start");

	alog("G3_USERDEF-----------------end");
}
//
//행추가
function G3_ROWADD(tinput,token){
	alog("G3_ROWADD()------------start");

	if( !(lastinputG3)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"CHK" : ""
		,"MNU_SEQ" : ""
		,"MNU_NM" : ""
		,"PGMID" : ""
		,"URL" : ""
		,"PGMTYPE" : ""
		,"MNU_ORD" : ""
		,"USE_YN" : ""
		,"ADD_DT" : ""
		,"ADD_ID" : ""
		,"MOD_DT" : ""
		,"MOD_ID" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG3").add(rowData,0);
    $$("wixdtG3").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//SVC MENU
function G3_CHKDEL(token){
	alog("G3_CHKDEL()------------start");


	var allData = $$("wixdtG3").serialize(true);
    alog(allData);


    var chkData = _.filter(allData,['CHK','1']);
    for(i=0;i<chkData.length;i++){
        chkData[i].changeState = true;
        chkData[i].changeCud = "deleted";
    }
    alog(chkData);
    var myJsonString = JSON.stringify(chkData);
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
	//post 만들기
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
	//CHK 배열 합치기
	allData = $$("wixdtG3").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G3-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G3_CHKDEL + "&TOKEN=" + token + "&" + conAllData,
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
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_CHKDEL()------------end");
}
//행삭제
function G3_ROWDELETE(tinput,token){
	alog("G3_ROWDELETE()------------start");

    rowId = $$("wixdtG3").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG3").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG3").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//그리드 조회(SVC MENU)	
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
			msgNotice("[SVC MENU] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[SVC MENU] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[SVC MENU] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//그리드 조회(AUTH)	
function G4_SEARCH(tinput,token){
	alog("G4_SEARCH()------------start");

	if(G4_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G4_REQUEST_ON = true;


    $$("wixdtG4").clearAll();
	wixdtG4.markSorting("",""); //정렬 arrow 클리어
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
		url : url_G4_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG4 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG4Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG4").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG4Cnt").text("-");
			}
			msgNotice("[AUTH] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[AUTH] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[AUTH] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[AUTH] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[AUTH] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[AUTH] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G4_REQUEST_ON = false;
		}
	});
        alog("G4_SEARCH()------------end");
    }

//엑셀 다운받기 - 렌더링 후값인 NM (AUTH)
function G4_EXCEL(tinput,token){
	alog("G4_EXCEL()------------start");

	webix.toExcel($$("wixdtG4"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CHK": {header: "CHK"}
,			"ROWID": {header: "ROWID"}
,			"PGMID": {header: "프로그램ID"}
,			"AUTH_ID": {header: "AUTH_ID"}
,			"AUTH_NM": {header: "AUTH_NM"}
,			"ADDDT": {header: "ADDDT"}
			}
		}   
	);


	alog("G4_EXCEL()------------end");
}//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
//AUTH
function G4_SAVE(token){
	alog("G4_SAVE()------------start");


	var allData = $$("wixdtG4").serialize(true);
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
	if(typeof lastinputG4 != "undefined" && lastinputG4 != null){
		var tKeys = lastinputG4.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG4.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG4.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	allData = $$("wixdtG4").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G4-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G4_SAVE + "&TOKEN=" + token + "&" + conAllData,
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
			G4_REQUEST_ON = false;
		}

	});
	
	alog("G4_SAVE()------------end");
}
//
//+
function G4_ADDROW(tinput,token){
	alog("G4_ADDROW()------------start");

	if( !(lastinputG4)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"CHK" : ""
		,"ROWID" : ""
		,"PGMID" : ""
		,"AUTH_ID" : ""
		,"AUTH_NM" : ""
		,"ADDDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG4").add(rowData,0);
    $$("wixdtG4").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : 숨김필드보기
function G4_HIDDENCOL(token){
	alog("G4_HIDDENCOL-----------------start");

	if(isToggleHiddenColG4){
		isToggleHiddenColG4 = false;
	}else{
			isToggleHiddenColG4 = true;
		}

		alog("G4_HIDDENCOL-----------------end");
	}
//새로고침	
function G5_RELOAD(token){
  alog("G5_RELOAD-----------------start");
  G5_SEARCH(lastinputG5,token);
}
//
//행추가
function G5_ROWADD(tinput,token){
	alog("G5_ROWADD()------------start");

	if( !(lastinputG5)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"CHK" : ""
		,"AUTH_SEQ" : ""
		,"PGMID" : ""
		,"AUTH_ID" : ""
		,"AUTH_NM" : ""
		,"USE_YN" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG5").add(rowData,0);
    $$("wixdtG5").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//SVC AUTH
function G5_CHKDEL(token){
	alog("G5_CHKDEL()------------start");


	var allData = $$("wixdtG5").serialize(true);
    alog(allData);


    var chkData = _.filter(allData,['CHK','1']);
    for(i=0;i<chkData.length;i++){
        chkData[i].changeState = true;
        chkData[i].changeCud = "deleted";
    }
    alog(chkData);
    var myJsonString = JSON.stringify(chkData);
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG5 != "undefined" && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	allData = $$("wixdtG5").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G5-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G5_CHKDEL + "&TOKEN=" + token + "&" + conAllData,
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
			G5_REQUEST_ON = false;
		}

	});
	
	alog("G5_CHKDEL()------------end");
}
//행삭제
function G5_ROWDELETE(tinput,token){
	alog("G5_ROWDELETE()------------start");

    rowId = $$("wixdtG5").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG5").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG5").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//그리드 조회(SVC AUTH)	
function G5_SEARCH(tinput,token){
	alog("G5_SEARCH()------------start");

	if(G5_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G5_REQUEST_ON = true;


    $$("wixdtG5").clearAll();
	wixdtG5.markSorting("",""); //정렬 arrow 클리어
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
		url : url_G5_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG5 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG5Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG5").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG5Cnt").text("-");
			}
			msgNotice("[SVC AUTH] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[SVC AUTH] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G5_REQUEST_ON = false;
		}
	});
        alog("G5_SEARCH()------------end");
    }

//SVC AUTH
function G5_SAVE(token){
	alog("G5_SAVE()------------start");

	if(G5_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G5_REQUEST_ON = true;

    allData = $$("wixdtG5").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG5 != "undefined" && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	sendFormData.append("G5-JSON" , myJsonString);

	$.ajax({
		type : "POST",
		url : url_G5_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[SVC AUTH] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G5_REQUEST_ON = false;
		}

	});
	
	alog("G5_SAVE()------------end");
}
