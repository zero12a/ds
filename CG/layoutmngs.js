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
				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "LAYOUT"
			,"KEYCOLID": "LAYOUTID"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPCNT", "COLNM" : "GRPCNT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADDID", "COLNM" : "ADDID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODID", "COLNM" : "MODID", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //LAYOUT
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "LAYOUTD"
			,"KEYCOLID": "LAYOUTDSEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "LAYOUTDSEQ", "COLNM" : "LAYOUTDSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPID", "COLNM" : "GRPID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "REFGRPID", "COLNM" : "REFGRPID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPTYPE", "COLNM" : "GRPTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "GRPWIDTH", "COLNM" : "GRPWIDTH", "OBJTYPE" : "TEXT" }
,				{ "COLID": "GRPHEIGHT", "COLNM" : "GRPHEIGHT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "VBOX", "COLNM" : "VBOX", "OBJTYPE" : "COMBO" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //LAYOUTD
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "LAYOUTS"
			,"KEYCOLID": "LAYOUTSSEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "LAYOUTSSEQ", "COLNM" : "LAYOUTSSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GRPID", "COLNM" : "GRPID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "REFGRPID", "COLNM" : "REFGRPID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GRPTYPE", "COLNM" : "GRPTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "GRPWIDTH", "COLNM" : "GRPWIDTH", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GRPHEIGHT", "COLNM" : "GRPHEIGHT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGRPID", "COLNM" : "PGRPID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SPLITGUTTERSIZE", "COLNM" : "GUTTERSIZE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SPLITDIRECTION", "COLNM" : "DIRECTION", "OBJTYPE" : "COMBO" }
,				{ "COLID": "SPLITMINSIZE", "COLNM" : "MINSIZE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADDID", "COLNM" : "ADDID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODID", "COLNM" : "MODID", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //LAYOUTS
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "layoutmngsController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "layoutmngsController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "layoutmngsController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_LAYOUTID; // LAYOUTID 변수선언
//컨트롤러 경로
var url_G2_SEARCH = "layoutmngsController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "layoutmngsController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "layoutmngsController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWBULKADD = "layoutmngsController?CTLGRP=G2&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G2_ROWADD = "layoutmngsController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "layoutmngsController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "layoutmngsController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "layoutmngsController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_CHKSAVE = "layoutmngsController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
//컨트롤러 경로
var url_G3_SEARCH = "layoutmngsController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "layoutmngsController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "layoutmngsController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWBULKADD = "layoutmngsController?CTLGRP=G3&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G3_ROWADD = "layoutmngsController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "layoutmngsController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "layoutmngsController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_EXCEL = "layoutmngsController?CTLGRP=G3&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G3_CHKSAVE = "layoutmngsController?CTLGRP=G3&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
//컨트롤러 경로
var url_G4_USERDEF = "layoutmngsController?CTLGRP=G4&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G4_SEARCH = "layoutmngsController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_SAVE = "layoutmngsController?CTLGRP=G4&CTLFNC=SAVE";
//컨트롤러 경로
var url_G4_ROWDELETE = "layoutmngsController?CTLGRP=G4&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G4_ROWADD = "layoutmngsController?CTLGRP=G4&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G4_RELOAD = "layoutmngsController?CTLGRP=G4&CTLFNC=RELOAD";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
//오브젝트 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : LAYOUT
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	$$("wixdtG2").resize();
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : LAYOUTD
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	$$("wixdtG3").resize();
	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : LAYOUTS
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	$$("wixdtG4").resize();
	alog("G4_RESIZE-----------------end");
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
	//LAYOUTID, LAYOUTID 초기화	
  alog("G1_INIT()-------------------------end");
}

//LAYOUT 그리드 초기화
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
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"PJTSEQ"
					, editor:"text"
				},
				{
					id:"LAYOUTID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAYOUTID"
					, editor:"text"
				},
				{
					id:"GRPCNT", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPCNT"
					, editor:"text"
				},
				{
					id:"USEYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"사용"
					, editor:"text"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"ADDDT"
				},
				{
					id:"ADDID", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ADDID"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"MODDT"
				},
				{
					id:"MODID", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MODID"
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
			lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
				', "G2-PJTSEQ" : "' + rowData.PJTSEQ + '"' +
				', "G2-LAYOUTID" : "' + rowData.LAYOUTID + '"' +
			'}');
			lastinputG3 = new HashMap(); // LAYOUTD
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-PJTSEQ",rowData.PJTSEQ); // 
			lastinputG3.set("G2-LAYOUTID",rowData.LAYOUTID); // 
			lastinputG4json = jQuery.parseJSON('{ "__NAME":"lastinputG4json"' +
				', "G2-LAYOUTID" : "' + rowData.LAYOUTID + '"' +
			'}');
			lastinputG4 = new HashMap(); // LAYOUTS
			lastinputG4.set("__ROWID",rowData.uid);
			lastinputG4.set("G2-LAYOUTID",rowData.LAYOUTID); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : LAYOUTD
			G4_SEARCH(lastinputG4,uuidv4()); //자식그룹 호출 : LAYOUTS
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
//LAYOUTD 그리드 초기화
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
					id:"LAYOUTDSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAYOUTDSEQ"
				},
				{
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"PJTSEQ"
					, editor:"text"
				},
				{
					id:"LAYOUTID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAYOUTID"
					, editor:"text"
				},
				{
					id:"GRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPID"
					, editor:"text"
				},
				{
					id:"REFGRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"REFGRPID"
					, editor:"text"
				},
				{
					id:"ORD", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:30
					, header:"ORD"
					, editor:"text"
				},
				{
					id:"GRPTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"GRPTYPE"
					, editor:"combo", options:null
				},
				{
					id:"GRPWIDTH", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPWIDTH"
					, editor:"text"
				},
				{
					id:"GRPHEIGHT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPHEIGHT"
					, editor:"text"
				},
				{
					id:"VBOX", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"VBOX"
					, editor:"combo", options:null
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"ADDDT"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":""}
					, width:80
					, header:"MODDT"
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
		apiCodeCombo("G3","GRPTYPE",{"G1-PCD":"GRPTYPE"},""); // IO : GRPTYPE초기화
		apiCodeCombo("G3","GRPTYPE",{"G1-PCD":"VBOX"},""); // IO : VBOX초기화
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
//LAYOUTS 그리드 초기화
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
					id:"LAYOUTSSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAYOUTSSEQ"
				},
				{
					id:"LAYOUTID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAYOUTID"
				},
				{
					id:"GRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"GRPID"
				},
				{
					id:"REFGRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"REFGRPID"
				},
				{
					id:"ORD", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"ORD"
				},
				{
					id:"GRPTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:80
					, header:"GRPTYPE"
					, editor:"combo", options:null
				},
				{
					id:"GRPWIDTH", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPWIDTH"
				},
				{
					id:"GRPHEIGHT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRPHEIGHT"
				},
				{
					id:"PGRPID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"PGRPID"
				},
				{
					id:"SPLITGUTTERSIZE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GUTTERSIZE"
				},
				{
					id:"SPLITDIRECTION", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"DIRECTION"
					, editor:"combo", options:null
				},
				{
					id:"SPLITMINSIZE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MINSIZE"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"ADDDT"
				},
				{
					id:"ADDID", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ADDID"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"수정일"
				},
				{
					id:"MODID", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"MODID"
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
		apiCodeCombo("G4","GRPTYPE",{"G1-PCD":"GRPTYPE"},""); // IO : GRPTYPE초기화
		apiCodeCombo("G4","SPLITDIRECTION",{"G1-PCD":"SPLITDIRECTION"},""); // IO : DIRECTION초기화
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
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //LAYOUT
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
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
//그리드 조회(LAYOUT)	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");

    $$("wixdtG2").clearAll();
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
			msgNotice("[LAYOUT] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[LAYOUT] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){
			msgError("[LAYOUT] Ajax http 500 error ( " + error + " )",3);
			alog("[LAYOUT] Ajax http 500 error ( " + data.RTN_MSG + " )");
		}
	});
        alog("G2_SEARCH()------------end");
    }

//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//
//행추가
function G2_ROWADD(tinput,token){
	alog("G2_ROWADD()------------start");

	if( !(lastinputG2)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"PJTSEQ" : ""
		,"LAYOUTID" : ""
		,"GRPCNT" : ""
		,"USEYN" : ""
		,"ADDDT" : ""
		,"ADDID" : ""
		,"MODDT" : ""
		,"MODID" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//엑셀 다운받기 - 렌더링 후값인 NM (LAYOUT)
function G2_EXCEL(tinput,token){
	alog("G2_EXCEL()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"PJTSEQ": {header: "PJTSEQ"}
,			"LAYOUTID": {header: "LAYOUTID"}
,			"GRPCNT": {header: "GRPCNT"}
,			"USEYN": {header: "사용"}
,			"ADDDT": {header: "ADDDT"}
,			"ADDID": {header: "ADDID"}
,			"MODDT": {header: "MODDT"}
,			"MODID": {header: "MODID"}
			}
		}   
	);


	alog("G2_EXCEL()------------end");
}//LAYOUT
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE()------------start");


	var allData = $$("wixdtG2").serialize(true);
    alog(allData);


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
	sendFormData.append("G2-JSON" , myJsonString);

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
		}
	});
	
	alog("G2_CHKSAVE()------------end");
}
//행삭제
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
//LAYOUT
function G2_SAVE(token){
	alog("G2_SAVE()------------start");

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
			msgError("Ajax http 500 error ( " + error + " )");
			alog("Ajax http 500 error ( " + error + " )");
		}
	});
	
	alog("G2_SAVE()------------end");
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
//LAYOUTD
function G3_SAVE(token){
	alog("G3_SAVE()------------start");

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
			msgError("Ajax http 500 error ( " + error + " )");
			alog("Ajax http 500 error ( " + error + " )");
		}
	});
	
	alog("G3_SAVE()------------end");
}
//사용자정의함수 : 숨김필드보기
function G3_HIDDENCOL(token){
	alog("G3_HIDDENCOL-----------------start");

	if(isToggleHiddenColG3){
		isToggleHiddenColG3 = false;
	}else{
			isToggleHiddenColG3 = true;
		}

		alog("G3_HIDDENCOL-----------------end");
	}
//그리드 조회(LAYOUTD)	
function G3_SEARCH(tinput,token){
	alog("G3_SEARCH()------------start");

    $$("wixdtG3").clearAll();
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
			msgNotice("[LAYOUTD] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[LAYOUTD] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){
			msgError("[LAYOUTD] Ajax http 500 error ( " + error + " )",3);
			alog("[LAYOUTD] Ajax http 500 error ( " + data.RTN_MSG + " )");
		}
	});
        alog("G3_SEARCH()------------end");
    }

//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//
//행추가
function G3_ROWADD(tinput,token){
	alog("G3_ROWADD()------------start");

	if( !(lastinputG3)		|| lastinputG3.get("G3-LAYOUTID") == ""		|| lastinputG3.get("G3-PJTSEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"LAYOUTDSEQ" : ""
		,"PJTSEQ" : lastinputG3.get("G2-PJTSEQ")
		,"LAYOUTID" : lastinputG3.get("G2-LAYOUTID")
		,"GRPID" : ""
		,"REFGRPID" : ""
		,"ORD" : ""
		,"GRPTYPE" : ""
		,"GRPWIDTH" : ""
		,"GRPHEIGHT" : ""
		,"VBOX" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG3").add(rowData,0);
    $$("wixdtG3").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//LAYOUTD
function G3_CHKSAVE(token){
	alog("G3_CHKSAVE()------------start");


	var allData = $$("wixdtG3").serialize(true);
    alog(allData);


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
	if(typeof lastinputG3 != "undefined" && lastinputG3 != null){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	sendFormData.append("G3-JSON" , myJsonString);

	$.ajax({
		type : "POST",
		url : url_G3_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
		}
	});
	
	alog("G3_CHKSAVE()------------end");
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
//엑셀 다운받기 - 렌더링 후값인 NM (LAYOUTD)
function G3_EXCEL(tinput,token){
	alog("G3_EXCEL()------------start");

	webix.toExcel($$("wixdtG3"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"LAYOUTDSEQ": {header: "LAYOUTDSEQ"}
,			"PJTSEQ": {header: "PJTSEQ"}
,			"LAYOUTID": {header: "LAYOUTID"}
,			"GRPID": {header: "GRPID"}
,			"REFGRPID": {header: "REFGRPID"}
,			"ORD": {header: "ORD"}
,			"GRPTYPE": {header: "GRPTYPE"}
,			"GRPWIDTH": {header: "GRPWIDTH"}
,			"GRPHEIGHT": {header: "GRPHEIGHT"}
,			"VBOX": {header: "VBOX"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "MODDT"}
			}
		}   
	);


	alog("G3_EXCEL()------------end");
}//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
//그리드 조회(LAYOUTS)	
function G4_SEARCH(tinput,token){
	alog("G4_SEARCH()------------start");

    $$("wixdtG4").clearAll();
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
			msgNotice("[LAYOUTS] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[LAYOUTS] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){
			msgError("[LAYOUTS] Ajax http 500 error ( " + error + " )",3);
			alog("[LAYOUTS] Ajax http 500 error ( " + data.RTN_MSG + " )");
		}
	});
        alog("G4_SEARCH()------------end");
    }

//사용자정의함수 : 사용자정의
function G4_USERDEF(token){
	alog("G4_USERDEF-----------------start");

	alog("G4_USERDEF-----------------end");
}
//
//행추가
function G4_ROWADD(tinput,token){
	alog("G4_ROWADD()------------start");

	if( !(lastinputG4)		|| lastinputG4.get("G4-LAYOUTID") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"LAYOUTSSEQ" : ""
		,"LAYOUTID" : lastinputG4.get("G2-LAYOUTID")
		,"GRPID" : ""
		,"REFGRPID" : ""
		,"ORD" : ""
		,"GRPTYPE" : ""
		,"GRPWIDTH" : ""
		,"GRPHEIGHT" : ""
		,"PGRPID" : ""
		,"SPLITGUTTERSIZE" : ""
		,"SPLITDIRECTION" : ""
		,"SPLITMINSIZE" : ""
		,"ADDDT" : ""
		,"ADDID" : ""
		,"MODDT" : ""
		,"MODID" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG4").add(rowData,0);
    $$("wixdtG4").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//행삭제
function G4_ROWDELETE(tinput,token){
	alog("G4_ROWDELETE()------------start");

    rowId = $$("wixdtG4").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG4").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG4").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//LAYOUTS
function G4_SAVE(token){
	alog("G4_SAVE()------------start");

    allData = $$("wixdtG4").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
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
	sendFormData.append("G4-JSON" , myJsonString);
	allData = $$("wixdtG4").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G4-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G4_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
		}
	});
	
	alog("G4_SAVE()------------end");
}
