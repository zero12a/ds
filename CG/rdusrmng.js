var grpInfo = new HashMap();
		//
grpInfo.set(
	"C1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "조건1"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USR_NM", "COLNM" : "USR_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TEAMNM", "COLNM" : "TEAMNM", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //조건1
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "사용자1"
			,"KEYCOLID": "USR_SEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USR_NM", "COLNM" : "USR_NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PHONE", "COLNM" : "PHONE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USR_PWD", "COLNM" : "USR_PWD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PW_ERR_CNT", "COLNM" : "PW_ERR_CNT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LAST_STATUS", "COLNM" : "LAST_STATUS", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LOCK_LIMIT_DT", "COLNM" : "LOCK_LIMIT_DT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LOCK_LAST_DT", "COLNM" : "LOCK_LAST_DT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "EXPIRE_DT", "COLNM" : "EXPIRE_DT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PW_CHG_DT", "COLNM" : "PW_CHG_DT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PW_CHG_ID", "COLNM" : "PW_CHG_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LDAP_LOGIN_YN", "COLNM" : "LDAP_LOGIN_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "TEAMCD", "COLNM" : "TEAMCD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "TEAMNM", "COLNM" : "TEAMNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //사용자1
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "소속 그룹"
			,"KEYCOLID": "GRP_SEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "GRP_SEQ", "COLNM" : "GRP_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "GRP_NM", "COLNM" : "GRP_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //소속 그룹
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "소속 팀"
			,"KEYCOLID": "TEAM_SEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "TEAM_SEQ", "COLNM" : "TEAM_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "TEAMCD", "COLNM" : "TEAMCD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "TEAMNM", "COLNM" : "TEAMNM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //소속 팀
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_SEARCHALL = "rdusrmngController?CTLGRP=C1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_SAVE = "rdusrmngController?CTLGRP=C1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_RESET = "rdusrmngController?CTLGRP=C1&CTLFNC=RESET";
//조건1 변수 선언	
var obj_C1_USR_ID; // USR_ID 변수선언
var obj_C1_USR_NM; // USR_NM 변수선언
var obj_C1_TEAMNM; // TEAMNM 변수선언
//컨트롤러 경로
var url_G2_USERDEF = "rdusrmngController?CTLGRP=G2&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G2_SEARCH = "rdusrmngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "rdusrmngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "rdusrmngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "rdusrmngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "rdusrmngController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "rdusrmngController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "rdusrmngController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_CHKSAVE = "rdusrmngController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//컨트롤러 경로
var url_G3_SEARCH = "rdusrmngController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_RELOAD = "rdusrmngController?CTLGRP=G3&CTLFNC=RELOAD";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//컨트롤러 경로
var url_G4_SEARCH = "rdusrmngController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_SAVE = "rdusrmngController?CTLGRP=G4&CTLFNC=SAVE";
//컨트롤러 경로
var url_G4_ROWDELETE = "rdusrmngController?CTLGRP=G4&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G4_ROWADD = "rdusrmngController?CTLGRP=G4&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G4_RELOAD = "rdusrmngController?CTLGRP=G4&CTLFNC=RELOAD";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
var G4_REQUEST_ON = false;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 조건1
function C1_RESIZE(){
	alog("C1_RESIZE-----------------start");
	//null
	alog("C1_RESIZE-----------------end");
}
//사이즈 리셋 : 사용자1
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 소속 그룹
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 소속 팀
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");

	$$("wixdtG4").resize();

	alog("G4_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	C1_RESIZE();
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
	C1_INIT();
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
function C1_INIT(){
  alog("C1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//USR_ID, USR_ID 초기화	
	//USR_NM, USR_NM 초기화	
	//TEAMNM, TEAMNM 초기화	
  alog("C1_INIT()-------------------------end");
}

//사용자1 그리드 초기화
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
					id:"CHK", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG2_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"USR_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:200
					, header:"USR_SEQ"
				},
				{
					id:"USR_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"USR_ID"
					, editor:"text"
				},
				{
					id:"USR_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USR_NM"
					, editor:"text"
				},
				{
					id:"PHONE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"PHONE"
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
					id:"USR_PWD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"<img src='" + CFG_URL_LIBS_ROOT + "img/crypt_lock.png' align='absmiddle'>USR_PWD"
					, editor:"text"
				},
				{
					id:"PW_ERR_CNT", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"PW_ERR_CNT"
					, editor:"text"
				},
				{
					id:"LAST_STATUS", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:200
					, header:"LAST_STATUS"
					, editor:"text"
				},
				{
					id:"LOCK_LIMIT_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LOCK_LIMIT_DT"
					, editor:"text"
				},
				{
					id:"LOCK_LAST_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LOCK_LAST_DT"
					, editor:"text"
				},
				{
					id:"EXPIRE_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"EXPIRE_DT"
					, editor:"text"
				},
				{
					id:"PW_CHG_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"PW_CHG_DT"
				},
				{
					id:"PW_CHG_ID", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"PW_CHG_ID"
				},
				{
					id:"LDAP_LOGIN_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LDAP_LOGIN_YN"
					, editor:"text"
				},
				{
					id:"TEAMCD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"TEAMCD"
					, editor:"text"
				},
				{
					id:"TEAMNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"TEAMNM"
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
					, css:{"text-align":""}
					, width:60
					, header:"MOD"
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
				', "G2-USR_SEQ" : "' + rowData.USR_SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // 소속 그룹
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-USR_SEQ",rowData.USR_SEQ); // 
			lastinputG4json = jQuery.parseJSON('{ "__NAME":"lastinputG4json"' +
				', "G2-USR_SEQ" : "' + rowData.USR_SEQ + '"' +
			'}');
			lastinputG4 = new HashMap(); // 소속 팀
			lastinputG4.set("__ROWID",rowData.uid);
			lastinputG4.set("G2-USR_SEQ",rowData.USR_SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 소속 그룹
			G4_SEARCH(lastinputG4,uuidv4()); //자식그룹 호출 : 소속 팀
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
//소속 그룹 그리드 초기화
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
					id:"USR_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:200
					, header:"USR_SEQ"
				},
				{
					id:"GRP_SEQ", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"GRP_SEQ"
				},
				{
					id:"GRP_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"GRP_NM"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USE_YN"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD"
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
//소속 팀 그리드 초기화
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
					id:"USR_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:200
					, header:"USR_SEQ"
				},
				{
					id:"TEAM_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"TEAM_SEQ"
				},
				{
					id:"TEAMCD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"TEAMCD"
				},
				{
					id:"TEAMNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"TEAMNM"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USE_YN"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD"
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
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function C1_RESET(){
	alog("C1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//조건1, 저장	
function C1_SAVE(token){
 alog("C1_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//C1 getparams	
	$.ajax({
		type : "POST",
		url : url_C1_SAVE+"&TOKEN=" + token ,
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
			msgError("[C1] Ajax http 500 error ( " + error + " )");
			alog("[C1] Ajax http 500 error ( " + error + " )");
		}
	});
	alog("C1_SAVE-------------------end");	
}
// CONDITIONSearch	
function C1_SEARCHALL(token){
	alog("C1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : C1
			lastinputG2 = new HashMap(); //사용자1
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("C1_SEARCHALL--------------------------end");
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
		,"USR_SEQ" : ""
		,"USR_ID" : ""
		,"USR_NM" : ""
		,"PHONE" : ""
		,"USE_YN" : ""
		,"USR_PWD" : ""
		,"PW_ERR_CNT" : ""
		,"LAST_STATUS" : ""
		,"LOCK_LIMIT_DT" : ""
		,"LOCK_LAST_DT" : ""
		,"EXPIRE_DT" : ""
		,"PW_CHG_DT" : ""
		,"PW_CHG_ID" : ""
		,"LDAP_LOGIN_YN" : ""
		,"TEAMCD" : ""
		,"TEAMNM" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : V
function G2_HIDDENCOL(token){
	alog("G2_HIDDENCOL-----------------start");

	if(isToggleHiddenColG2){
		isToggleHiddenColG2 = false;
	}else{
			isToggleHiddenColG2 = true;
		}

		alog("G2_HIDDENCOL-----------------end");
	}
//사용자1
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
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G2_REQUEST_ON = false;
		}

	});
	
	alog("G2_SAVE()------------end");
}
//그리드 조회(사용자1)	
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
			msgNotice("[사용자1] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[사용자1] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//사용자1
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
//사용자1
function G2_USERDEF(token){
	alog("G2_USERDEF()------------start");

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
		url : url_G2_USERDEF+"&TOKEN=" + token + "&" + conAllData ,
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
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[사용자1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G2_REQUEST_ON = false;
		}

	});
	
	alog("G2_USERDEF()------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
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
//엑셀 다운받기 - 렌더링 후값인 NM (사용자1)
function G2_EXCEL(tinput,token){
	alog("G2_EXCEL()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CHK": {header: "CHK"}
,			"USR_SEQ": {header: "USR_SEQ"}
,			"USR_ID": {header: "USR_ID"}
,			"USR_NM": {header: "USR_NM"}
,			"PHONE": {header: "PHONE"}
,			"USE_YN": {header: "USE_YN"}
,			"USR_PWD": {header: "USR_PWD"}
,			"PW_ERR_CNT": {header: "PW_ERR_CNT"}
,			"LAST_STATUS": {header: "LAST_STATUS"}
,			"LOCK_LIMIT_DT": {header: "LOCK_LIMIT_DT"}
,			"LOCK_LAST_DT": {header: "LOCK_LAST_DT"}
,			"EXPIRE_DT": {header: "EXPIRE_DT"}
,			"PW_CHG_DT": {header: "PW_CHG_DT"}
,			"PW_CHG_ID": {header: "PW_CHG_ID"}
,			"LDAP_LOGIN_YN": {header: "LDAP_LOGIN_YN"}
,			"TEAMCD": {header: "TEAMCD"}
,			"TEAMNM": {header: "TEAMNM"}
,			"ADD_DT": {header: "ADD"}
,			"MOD_DT": {header: "MOD"}
			}
		}   
	);


	alog("G2_EXCEL()------------end");
}//그리드 조회(소속 그룹)	
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
			msgNotice("[소속 그룹] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[소속 그룹] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[소속 그룹] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[소속 그룹] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[소속 그룹] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[소속 그룹] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
//그리드 조회(소속 팀)	
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
			msgNotice("[소속 팀] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[소속 팀] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//
//행추가
function G4_ROWADD(tinput,token){
	alog("G4_ROWADD()------------start");

	if( !(lastinputG4)		|| lastinputG4.get("G4-USR_SEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"USR_SEQ" : lastinputG4.get("G2-USR_SEQ")
		,"TEAM_SEQ" : ""
		,"TEAMCD" : ""
		,"TEAMNM" : ""
		,"USE_YN" : ""
		,"ADD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG4").add(rowData,0);
    $$("wixdtG4").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//소속 팀
function G4_SAVE(token){
	alog("G4_SAVE()------------start");

	if(G4_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G4_REQUEST_ON = true;

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

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[소속 팀] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G4_REQUEST_ON = false;
		}

	});
	
	alog("G4_SAVE()------------end");
}
//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
