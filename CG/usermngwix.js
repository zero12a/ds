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
				{ "COLID": "EMAIL", "COLNM" : "이메일", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //조건1
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "사용자1"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "USERSEQ", "COLNM" : "USERSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "EMAIL", "COLNM" : "이메일", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PASSWD", "COLNM" : "PASSWD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "EMAILVALIDYN", "COLNM" : "이메일인증", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LASTPWCHGDT", "COLNM" : "비번변경일", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PWFAILCNT", "COLNM" : "로그인실패횟수", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LOCKYN", "COLNM" : "잠금유무", "OBJTYPE" : "TEXT" }
,				{ "COLID": "FREEZEDT", "COLNM" : "잠금대기시간", "OBJTYPE" : "TEXT" }
,				{ "COLID": "LOCKDT", "COLNM" : "잠긴시간", "OBJTYPE" : "TEXT" }
,				{ "COLID": "SERVERSEQ", "COLNM" : "SERVERSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "TEXT" }
			]
		}
); //사용자1
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "FILE저장소"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FILESTORESEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USERSEQ", "COLNM" : "USERSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "STOREID", "COLNM" : "STOREID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "STORENM", "COLNM" : "STORENM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "STORETYPE", "COLNM" : "STORETYPE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "UPLOADDIR", "COLNM" : "UPLOADDIR", "OBJTYPE" : "TEXT" }
,				{ "COLID": "READURL", "COLNM" : "READURL", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CREKEY", "COLNM" : "CREKEY", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CRESECRET", "COLNM" : "CRESECRET", "OBJTYPE" : "TEXT" }
,				{ "COLID": "REGION", "COLNM" : "REGION", "OBJTYPE" : "TEXT" }
,				{ "COLID": "BUCKET", "COLNM" : "BUCKET", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ACL", "COLNM" : "ACL", "OBJTYPE" : "COMBO" }
,				{ "COLID": "USEYN", "COLNM" : "사용유무", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //FILE저장소
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "DB저장소"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "SVRSEQ", "COLNM" : "SERVERSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SVRID", "COLNM" : "SVRID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "SVRNM", "COLNM" : "SVRNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USERSEQ", "COLNM" : "USERSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "DBDRIVER", "COLNM" : "DBDRIVER", "OBJTYPE" : "COMBO" }
,				{ "COLID": "DBHOST", "COLNM" : "DBHOST", "OBJTYPE" : "TEXT" }
,				{ "COLID": "DBPORT", "COLNM" : "DBPORT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "DBNAME", "COLNM" : "DBNAME", "OBJTYPE" : "TEXT" }
,				{ "COLID": "DBUSRID", "COLNM" : "DBUSERID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "DBUSRPW", "COLNM" : "DBUSERPW", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USEYN", "COLNM" : "사용유무", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //DB저장소
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_SEARCHALL = "usermngwixController?CTLGRP=C1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_SAVE = "usermngwixController?CTLGRP=C1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_C1_RESET = "usermngwixController?CTLGRP=C1&CTLFNC=RESET";
//조건1 변수 선언	
var obj_C1_EMAIL; // 이메일 변수선언
//컨트롤러 경로
var url_G2_USERDEF = "usermngwixController?CTLGRP=G2&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G2_SEARCH = "usermngwixController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "usermngwixController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "usermngwixController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "usermngwixController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "usermngwixController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "usermngwixController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "usermngwixController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_CHKSAVE = "usermngwixController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//컨트롤러 경로
var url_G3_SEARCH = "usermngwixController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "usermngwixController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "usermngwixController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWADD = "usermngwixController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "usermngwixController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "usermngwixController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_EXCEL = "usermngwixController?CTLGRP=G3&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G3_CHKSAVE = "usermngwixController?CTLGRP=G3&CTLFNC=CHKSAVE";
//컨트롤러 경로
var url_G3_PUBSUB = "usermngwixController?CTLGRP=G3&CTLFNC=PUBSUB";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//컨트롤러 경로
var url_G4_USERDEF = "usermngwixController?CTLGRP=G4&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G4_SEARCH = "usermngwixController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_SAVE = "usermngwixController?CTLGRP=G4&CTLFNC=SAVE";
//컨트롤러 경로
var url_G4_ROWDELETE = "usermngwixController?CTLGRP=G4&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G4_ROWADD = "usermngwixController?CTLGRP=G4&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G4_RELOAD = "usermngwixController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_HIDDENCOL = "usermngwixController?CTLGRP=G4&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G4_EXCEL = "usermngwixController?CTLGRP=G4&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G4_CHKSAVE = "usermngwixController?CTLGRP=G4&CTLFNC=CHKSAVE";
//컨트롤러 경로
var url_G4_PUBSUB = "usermngwixController?CTLGRP=G4&CTLFNC=PUBSUB";
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
//사이즈 리셋 : FILE저장소
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : DB저장소
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
	//EMAIL, 이메일 초기화	
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
					id:"USERSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
				, hidden: true
					, width:60
					, header:"USERSEQ"
					, editor:"text"
				},
				{
					id:"EMAIL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"이메일"
					, editor:"text"
				},
				{
					id:"PASSWD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"<img src='" + CFG_URL_LIBS_ROOT + "img/crypt_lock.png' align='absmiddle'>PASSWD"
					, editor:"text"
				},
				{
					id:"EMAILVALIDYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"이메일인증"
					, editor:"text"
				},
				{
					id:"LASTPWCHGDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"비번변경일"
					, editor:"text"
				},
				{
					id:"PWFAILCNT", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"로그인실패횟수"
					, editor:"text"
				},
				{
					id:"LOCKYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"잠금유무"
					, editor:"text"
				},
				{
					id:"FREEZEDT", sort:"string"
					, css:{"text-align":"RIGHT"}
					, width:60
					, header:"잠금대기시간"
					, editor:"text"
				},
				{
					id:"LOCKDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"잠긴시간"
					, editor:"text"
				},
				{
					id:"SERVERSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SERVERSEQ"
					, editor:"text"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"ADDDT"
					, editor:"text"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"수정일"
					, editor:"text"
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
				', "G2-USERSEQ" : "' + rowData.USERSEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // FILE저장소
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-USERSEQ",rowData.USERSEQ); // 
			lastinputG4json = jQuery.parseJSON('{ "__NAME":"lastinputG4json"' +
				', "G2-USERSEQ" : "' + rowData.USERSEQ + '"' +
			'}');
			lastinputG4 = new HashMap(); // DB저장소
			lastinputG4.set("__ROWID",rowData.uid);
			lastinputG4.set("G2-USERSEQ",rowData.USERSEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : FILE저장소
			G4_SEARCH(lastinputG4,uuidv4()); //자식그룹 호출 : DB저장소
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
//FILE저장소 그리드 초기화
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
					id:"FILESTORESEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SEQ"
					, editor:"text"
				},
				{
					id:"USERSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USERSEQ"
				},
				{
					id:"STOREID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"STOREID"
					, editor:"text"
				},
				{
					id:"STORENM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"STORENM"
					, editor:"text"
				},
				{
					id:"STORETYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"STORETYPE"
					, editor:"text"
				},
				{
					id:"UPLOADDIR", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"UPLOADDIR"
					, editor:"text"
				},
				{
					id:"READURL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"READURL"
					, editor:"text"
				},
				{
					id:"CREKEY", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"<img src='" + CFG_URL_LIBS_ROOT + "img/crypt_shield.png' align='absmiddle'>CREKEY"
					, editor:"text"
				},
				{
					id:"CRESECRET", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"<img src='" + CFG_URL_LIBS_ROOT + "img/crypt_shield.png' align='absmiddle'>CRESECRET"
					, editor:"text"
				},
				{
					id:"REGION", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"REGION"
					, editor:"text"
				},
				{
					id:"BUCKET", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"BUCKET"
					, editor:"text"
				},
				{
					id:"ACL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ACL"
					, editor:"combo", options:null
				},
				{
					id:"USEYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"사용유무"
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
					, header:"수정일"
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
		apiCodeCombo("G3","ACL",{"G1-PCD":"FILESTORE_ACL"},""); // IO : ACL초기화
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
//DB저장소 그리드 초기화
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
					id:"SVRSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SERVERSEQ"
				},
				{
					id:"SVRID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SVRID"
					, editor:"text"
				},
				{
					id:"SVRNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SVRNM"
					, editor:"text"
				},
				{
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"PJTSEQ"
					, editor:"text"
				},
				{
					id:"USERSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USERSEQ"
					, editor:"text"
				},
				{
					id:"DBDRIVER", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"DBDRIVER"
					, editor:"combo", options:null
				},
				{
					id:"DBHOST", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"DBHOST"
					, editor:"text"
				},
				{
					id:"DBPORT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"DBPORT"
					, editor:"text"
				},
				{
					id:"DBNAME", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"DBNAME"
					, editor:"text"
				},
				{
					id:"DBUSRID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"DBUSERID"
					, editor:"text"
				},
				{
					id:"DBUSRPW", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"<img src='" + CFG_URL_LIBS_ROOT + "img/crypt_shield.png' align='absmiddle'>DBUSERPW"
					, editor:"text"
				},
				{
					id:"USEYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"사용유무"
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
					, header:"수정일"
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
		apiCodeCombo("G4","DBDRIVER",{"G1-PCD":"DBDRIVER"},""); // IO : DBDRIVER초기화
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
//검색조건 초기화
function C1_RESET(){
	alog("C1_RESET--------------------------start");
	$('#condition')[0].reset();
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
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
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
		,"USERSEQ" : ""
		,"EMAIL" : ""
		,"PASSWD" : ""
		,"EMAILVALIDYN" : ""
		,"LASTPWCHGDT" : ""
		,"PWFAILCNT" : ""
		,"LOCKYN" : ""
		,"FREEZEDT" : ""
		,"LOCKDT" : ""
		,"SERVERSEQ" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
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
//엑셀 다운받기 - 렌더링 후값인 NM (사용자1)
function G2_EXCEL(tinput,token){
	alog("G2_EXCEL()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"USERSEQ": {header: "USERSEQ"}
,			"EMAIL": {header: "이메일"}
,			"PASSWD": {header: "PASSWD"}
,			"EMAILVALIDYN": {header: "이메일인증"}
,			"LASTPWCHGDT": {header: "비번변경일"}
,			"PWFAILCNT": {header: "로그인실패횟수"}
,			"LOCKYN": {header: "잠금유무"}
,			"FREEZEDT": {header: "잠금대기시간"}
,			"LOCKDT": {header: "잠긴시간"}
,			"SERVERSEQ": {header: "SERVERSEQ"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "수정일"}
			}
		}   
	);


	alog("G2_EXCEL()------------end");
}//-
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
//사용자정의함수 : V
function G2_HIDDENCOL(token){
	alog("G2_HIDDENCOL-----------------start");

	if(isToggleHiddenColG2){
		$$("wixdtG2").hideColumn("USERSEQ");
		isToggleHiddenColG2 = false;
	}else{
		$$("wixdtG2").showColumn("USERSEQ");
			isToggleHiddenColG2 = true;
		}

		alog("G2_HIDDENCOL-----------------end");
	}
//사용자정의함수 : FS캐쉬반영
function G3_PUBSUB(token){
	alog("G3_PUBSUB-----------------start");
if(!confirm('정말로 반영할까요?'))return;
   
$.ajax({
	type : "GET",
	url : "/common/cg_cdeploy_pubsub.php?PUBSUB=config.FILESTORE_CG&MSG=1" ,
	dataType: "json",
	async: false,
	success: function(data){
		alog("   gridG2 json return----------------------");

		//alog("   json RTN_MSG length : " + data.RTN_MSG.length);
		if(data.RTN_CD =="200"){
			msgNotice(data.RTN_MSG);
		}else{
			msgError(data.RTN_MSG + "(" + data.ERR_CD + ")",3);
		}

		//alert("응답오케이:" + tableNm + ", " + colIndex);

	},
	error: function(error){
		msgError("[PUBSUB] Ajax http 500 error ( " + error + " )",3);
		//alog("[테이블목록] Ajax http 500 error ( " + data.RTN_MSG + " )");
	}
});
	alog("G3_PUBSUB-----------------end");
}
//엑셀 다운받기 - 렌더링 후값인 NM (FILE저장소)
function G3_EXCEL(tinput,token){
	alog("G3_EXCEL()------------start");

	webix.toExcel($$("wixdtG3"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"FILESTORESEQ": {header: "SEQ"}
,			"USERSEQ": {header: "USERSEQ"}
,			"STOREID": {header: "STOREID"}
,			"STORENM": {header: "STORENM"}
,			"STORETYPE": {header: "STORETYPE"}
,			"UPLOADDIR": {header: "UPLOADDIR"}
,			"READURL": {header: "READURL"}
,			"CREKEY": {header: "CREKEY"}
,			"CRESECRET": {header: "CRESECRET"}
,			"REGION": {header: "REGION"}
,			"BUCKET": {header: "BUCKET"}
,			"ACL": {header: "ACL"}
,			"USEYN": {header: "사용유무"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "수정일"}
			}
		}   
	);


	alog("G3_EXCEL()------------end");
}//-
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
//사용자정의함수 : V
function G3_HIDDENCOL(token){
	alog("G3_HIDDENCOL-----------------start");

	if(isToggleHiddenColG3){
		isToggleHiddenColG3 = false;
	}else{
			isToggleHiddenColG3 = true;
		}

		alog("G3_HIDDENCOL-----------------end");
	}
//FILE저장소
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
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_SAVE()------------end");
}
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//그리드 조회(FILE저장소)	
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
			msgNotice("[FILE저장소] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[FILE저장소] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[FILE저장소] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//FILE저장소
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
		},
		complete : function() {
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_CHKSAVE()------------end");
}
//
//+
function G3_ROWADD(tinput,token){
	alog("G3_ROWADD()------------start");

	if( !(lastinputG3)		|| lastinputG3.get("G3-USERSEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"FILESTORESEQ" : ""
		,"USERSEQ" : lastinputG3.get("G2-USERSEQ")
		,"STOREID" : ""
		,"STORENM" : ""
		,"STORETYPE" : ""
		,"UPLOADDIR" : ""
		,"READURL" : ""
		,"CREKEY" : ""
		,"CRESECRET" : ""
		,"REGION" : ""
		,"BUCKET" : ""
		,"ACL" : ""
		,"USEYN" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG3").add(rowData,0);
    $$("wixdtG3").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
//그리드 조회(DB저장소)	
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
			msgNotice("[DB저장소] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[DB저장소] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//DB저장소
function G4_CHKSAVE(token){
	alog("G4_CHKSAVE()------------start");


	var allData = $$("wixdtG4").serialize(true);
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
	if(typeof lastinputG4 != "undefined" && lastinputG4 != null){
		var tKeys = lastinputG4.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG4.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG4.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기

	$.ajax({
		type : "POST",
		url : url_G4_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G4_CHKSAVE()------------end");
}
//
//+
function G4_ROWADD(tinput,token){
	alog("G4_ROWADD()------------start");

	if( !(lastinputG4)		|| lastinputG4.get("G4-USERSEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"SVRSEQ" : ""
		,"SVRID" : ""
		,"SVRNM" : ""
		,"PJTSEQ" : ""
		,"USERSEQ" : lastinputG4.get("G2-USERSEQ")
		,"DBDRIVER" : ""
		,"DBHOST" : ""
		,"DBPORT" : ""
		,"DBNAME" : ""
		,"DBUSRID" : ""
		,"DBUSRPW" : ""
		,"USEYN" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG4").add(rowData,0);
    $$("wixdtG4").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : 사용자정의
function G4_USERDEF(token){
	alog("G4_USERDEF-----------------start");

	alog("G4_USERDEF-----------------end");
}
//엑셀 다운받기 - 렌더링 후값인 NM (DB저장소)
function G4_EXCEL(tinput,token){
	alog("G4_EXCEL()------------start");

	webix.toExcel($$("wixdtG4"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"SVRSEQ": {header: "SERVERSEQ"}
,			"SVRID": {header: "SVRID"}
,			"SVRNM": {header: "SVRNM"}
,			"PJTSEQ": {header: "PJTSEQ"}
,			"USERSEQ": {header: "USERSEQ"}
,			"DBDRIVER": {header: "DBDRIVER"}
,			"DBHOST": {header: "DBHOST"}
,			"DBPORT": {header: "DBPORT"}
,			"DBNAME": {header: "DBNAME"}
,			"DBUSRID": {header: "DBUSERID"}
,			"DBUSRPW": {header: "DBUSERPW"}
,			"USEYN": {header: "사용유무"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "수정일"}
			}
		}   
	);


	alog("G4_EXCEL()------------end");
}//-
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
//사용자정의함수 : V
function G4_HIDDENCOL(token){
	alog("G4_HIDDENCOL-----------------start");

	if(isToggleHiddenColG4){
		isToggleHiddenColG4 = false;
	}else{
			isToggleHiddenColG4 = true;
		}

		alog("G4_HIDDENCOL-----------------end");
	}
//DB저장소
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

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[DB저장소] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G4_REQUEST_ON = false;
		}

	});
	
	alog("G4_SAVE()------------end");
}
//사용자정의함수 : DS캐쉬반영
function G4_PUBSUB(token){
	alog("G4_PUBSUB-----------------start");
alert("go");
$.ajax({
	type : "GET",
	url : "/common/cg_cdeploy_pubsub.php?PUBSUB=config.DATASOURCE_CG&MSG=1" ,
	dataType: "json",
	async: false,
	success: function(data){
		alog("   gridG2 json return----------------------");

		//alog("   json RTN_MSG length : " + data.RTN_MSG.length);
		if(data.RTN_CD =="200"){
			msgNotice(data.RTN_MSG);
		}else{
			msgError(data.RTN_MSG + "(" + data.ERR_CD + ")",3);
		}

		//alert("응답오케이:" + tableNm + ", " + colIndex);

	},
	error: function(error){
		msgError("[PUBSUB] Ajax http 500 error ( " + error + " )",3);
		//alog("[테이블목록] Ajax http 500 error ( " + data.RTN_MSG + " )");
	}
});
	alog("G4_PUBSUB-----------------end");
}
