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
			,"GRPNM": "MNU1"
			,"KEYCOLID": "MNU1_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "MNU1_SEQ", "COLNM" : "MNU1_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FOLDER_YN", "COLNM" : "FOLDER_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "FOLDER_NM", "COLNM" : "FOLDER_NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_ICON", "COLNM" : "MNU_ICON", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //MNU1
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "MNU2"
			,"KEYCOLID": "MNU2_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "MNU2_SEQ", "COLNM" : "MNU2_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU1_SEQ", "COLNM" : "MNU1_SEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //MNU2
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "미지정PGM"
			,"KEYCOLID": "MNU_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "MNU_SEQ", "COLNM" : "MNU_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_NM", "COLNM" : "메뉴 이름", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "URL", "COLNM" : "URL", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //미지정PGM
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "MNU1에 추가"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU_ICON", "COLNM" : "MNU_ICON", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //MNU1에 추가
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "MNU2에 추가"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU1_SEQ", "COLNM" : "MNU1_SEQ", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //MNU2에 추가
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rdmnutreemngController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rdmnutreemngController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
//컨트롤러 경로
var url_G2_SEARCH = "rdmnutreemngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "rdmnutreemngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "rdmnutreemngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "rdmnutreemngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "rdmnutreemngController?CTLGRP=G2&CTLFNC=RELOAD";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//컨트롤러 경로
var url_G3_SEARCH = "rdmnutreemngController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "rdmnutreemngController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "rdmnutreemngController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWADD = "rdmnutreemngController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "rdmnutreemngController?CTLGRP=G3&CTLFNC=RELOAD";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//컨트롤러 경로
var url_G4_SEARCH = "rdmnutreemngController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_ROWADD = "rdmnutreemngController?CTLGRP=G4&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G4_CHKSAVE1 = "rdmnutreemngController?CTLGRP=G4&CTLFNC=CHKSAVE1";
//컨트롤러 경로
var url_G4_CHKSAVE2 = "rdmnutreemngController?CTLGRP=G4&CTLFNC=CHKSAVE2";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
var G4_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G5 = false; //바인드폼 구성시 이벤트 부여여부
var obj_G5_MNU_ORD;   // MNU_ORD 글로벌 변수 선언
var obj_G5_MNU_ICON;   // MNU_ICON 글로벌 변수 선언
//디테일 변수 초기화	

var isBindEvent_G6 = false; //바인드폼 구성시 이벤트 부여여부
var obj_G6_MNU_ORD;   // MNU_ORD 글로벌 변수 선언
var obj_G6_MNU1_SEQ;   // MNU1_SEQ 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : MNU1
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : MNU2
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 미지정PGM
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");

	$$("wixdtG4").resize();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : MNU1에 추가
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	//null
	alog("G5_RESIZE-----------------end");
}
//사이즈 리셋 : MNU2에 추가
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");
	//null
	alog("G6_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G4_RESIZE();
	G5_RESIZE();
	G6_RESIZE();

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
	G6_INIT();
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
	tColId = tColIndex;
	//G2, MNU1, PGMID, 프로그램ID
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
	tColId = tColIndex;
	//G3, MNU2, PGMID, 프로그램ID
	if( tGrpId == "G3" && tColId == "PGMID" ){
		obj_G3_PGMID_POPUP = window.open("about:blank","codeSearch_G3_PGMID_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
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
		frm.target = "codeSearch_G3_PGMID_Pop";
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
	//G4, 미지정PGM, PGMID, 프로그램ID
	if( tGrpId == "G4" && tColId == "PGMID" ){
		obj_G4_PGMID_POPUP = window.open("about:blank","codeSearch_G4_PGMID_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
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
	if(tGrpId == "G3" && tColId =="PGMID"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG3").getItem(tRowId);

		rowItem.PGMID = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG3").updateItem(tRowId, rowItem);

		//$$("wixdtG3").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G3_PGMID_POPUP != null)obj_G3_PGMID_POPUP.close();
	}
	//GRID
	if(tGrpId == "G4" && tColId =="PGMID"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG4").getItem(tRowId);

		rowItem.PGMID = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG4").updateItem(tRowId, rowItem);

		//$$("wixdtG4").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G4_PGMID_POPUP != null)obj_G4_PGMID_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
  alog("G1_INIT()-------------------------end");
}

//MNU1 그리드 초기화
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
					id:"MNU1_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU1_SEQ"
				},
				{
					id:"FOLDER_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"FOLDER_YN"
					, editor:"text"
				},
				{
					id:"FOLDER_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"FOLDER_NM"
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
					id:"MNU_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_NM"
				},
				{
					id:"MNU_ICON", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_ICON"
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
				', "G2-MNU1_SEQ" : "' + rowData.MNU1_SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // MNU2
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-MNU1_SEQ",rowData.MNU1_SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : MNU2
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
//MNU2 그리드 초기화
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
					id:"MNU2_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU2_SEQ"
				},
				{
					id:"MNU1_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU1_SEQ"
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
					id:"MNU_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_NM"
				},
				{
					id:"MNU_ORD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_ORD"
					, editor:"text"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:"ADD"
				},
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:"MOD"
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
//미지정PGM 그리드 초기화
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
					id:"CHK", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:{ content:"masterCheckbox", contentId:"mcG4_CHK" }
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
					, width:120
					, header:"메뉴 이름"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"프로그램ID"
				},
				{
					id:"URL", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"URL"
				},
				{
					id:"PGMTYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"PGMTYPE"
				},
				{
					id:"MNU_ORD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_ORD"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"USE_YN"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:"ADD"
				},
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:"MOD"
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
//디테일 초기화	
//MNU1에 추가 폼뷰 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");
	//컬럼 초기화
	//MNU_ORD, MNU_ORD 초기화	
	//MNU_ICON, MNU_ICON 초기화	
  alog("G5_INIT()-------------------------end");
}
//디테일 초기화	
//MNU2에 추가 폼뷰 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");
	//컬럼 초기화
	//MNU_ORD, MNU_ORD 초기화	
	//MNU1_SEQ, MNU1_SEQ 초기화	
  alog("G6_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //MNU1
				lastinputG4 = new HashMap(); //미지정PGM
		//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G4_SEARCH(lastinputG4,token);
	alog("G1_SEARCHALL--------------------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//그리드 조회(MNU1)	
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
			msgNotice("[MNU1] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[MNU1] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
		,"MNU1_SEQ" : ""
		,"FOLDER_YN" : ""
		,"FOLDER_NM" : ""
		,"PGMID" : ""
		,"MNU_NM" : ""
		,"MNU_ICON" : ""
		,"MNU_ORD" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//MNU1
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
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[MNU1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
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
//그리드 조회(MNU2)	
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
			msgNotice("[MNU2] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[MNU2] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//
//행추가
function G3_ROWADD(tinput,token){
	alog("G3_ROWADD()------------start");

	if( !(lastinputG3)		|| lastinputG3.get("G3-MNU1_SEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"MNU2_SEQ" : ""
		,"MNU1_SEQ" : lastinputG3.get("G2-MNU1_SEQ")
		,"PGMID" : ""
		,"MNU_NM" : ""
		,"MNU_ORD" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG3").add(rowData,0);
    $$("wixdtG3").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//MNU2
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
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[MNU2] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G3_REQUEST_ON = false;
		}

	});
	
	alog("G3_SAVE()------------end");
}
//미지정PGM
function G4_CHKSAVE2(token){
	alog("G4_CHKSAVE2()------------start");


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
//폼뷰 G6는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G6-CTLCUD",$("#G6-CTLCUD").val());
	sendFormData.append("G6-MNU_ORD",$("#G6-MNU_ORD").val());	//MNU_ORD 전송객체에 넣기
	sendFormData.append("G6-MNU1_SEQ",$("#G6-MNU1_SEQ").val());	//MNU1_SEQ 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G4_CHKSAVE2 + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G4_CHKSAVE2()------------end");
}
//그리드 조회(미지정PGM)	
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
			msgNotice("[미지정PGM] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[미지정PGM] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[미지정PGM] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[미지정PGM] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[미지정PGM] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[미지정PGM] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

	if( !(lastinputG4)	){
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
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG4").add(rowData,0);
    $$("wixdtG4").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//미지정PGM
function G4_CHKSAVE1(token){
	alog("G4_CHKSAVE1()------------start");


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
//폼뷰 G5는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G5-CTLCUD",$("#G5-CTLCUD").val());
	sendFormData.append("G5-MNU_ORD",$("#G5-MNU_ORD").val());	//MNU_ORD 전송객체에 넣기
	sendFormData.append("G5-MNU_ICON",$("#G5-MNU_ICON").val());	//MNU_ICON 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G4_CHKSAVE1 + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G4_CHKSAVE1()------------end");
}
