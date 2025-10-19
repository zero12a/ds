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
			,"GRPNM": "배치목록"
			,"KEYCOLID": "BATCH_SEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BATCH_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "BATCH_NM", "COLNM" : "NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CONDITION_SVRID", "COLNM" : "CONDITION_SVRID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "SOURCE_SVRID", "COLNM" : "SRC_SVRID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "TARGET_SVRID", "COLNM" : "TARGET_SVRID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CRON", "COLNM" : "CRON", "OBJTYPE" : "TEXT" }
,				{ "COLID": "START_DT", "COLNM" : "START_DT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "END_DT", "COLNM" : "END_DT", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXT" }
,				{ "COLID": "STATUS", "COLNM" : "STATUS", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LAST_RUN", "COLNM" : "LAST_RUN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //배치목록
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "배치상세"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "BATCH_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "BATCH_NM", "COLNM" : "NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONDITION_SVRID", "COLNM" : "CONDITION_SVRID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONDITION_SQL", "COLNM" : "CONDITION_SQL", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "SOURCE_SVRID", "COLNM" : "SRC_SVRID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SOURCE_SQL", "COLNM" : "SRC_SQL", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "SOURCE_IN_COLTYPES", "COLNM" : "SRC_IN_COLTYPES", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TARGET_SVRID", "COLNM" : "TARGET_SVRID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TARGET_SQL", "COLNM" : "TARGET_SQL", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "TARGET_IN_COLTYPES", "COLNM" : "TARGET_IN_COLTYPES", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //배치상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "rdbatchmngController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rdbatchmngController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "rdbatchmngController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rdbatchmngController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
//컨트롤러 경로
var url_G2_SEARCH = "rdbatchmngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "rdbatchmngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "rdbatchmngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "rdbatchmngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "rdbatchmngController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_EDITMODE = "rdbatchmngController?CTLGRP=G2&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G2_CHKSAVE = "rdbatchmngController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "rdbatchmngController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "rdbatchmngController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "rdbatchmngController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "rdbatchmngController?CTLGRP=G3&CTLFNC=MODIFY";
var obj_G3_BATCH_SEQ;   // SEQ 글로벌 변수 선언
var obj_G3_BATCH_NM;   // NM 글로벌 변수 선언
var obj_G3_CONDITION_SVRID;   // CONDITION_SVRID 글로벌 변수 선언
var obj_G3_CONDITION_SQL;   // CONDITION_SQL 글로벌 변수 선언
var obj_G3_SOURCE_SVRID;   // SRC_SVRID 글로벌 변수 선언
var obj_G3_SOURCE_SQL;   // SRC_SQL 글로벌 변수 선언
var obj_G3_SOURCE_IN_COLTYPES;   // SRC_IN_COLTYPES 글로벌 변수 선언
var obj_G3_TARGET_SVRID;   // TARGET_SVRID 글로벌 변수 선언
var obj_G3_TARGET_SQL;   // TARGET_SQL 글로벌 변수 선언
var obj_G3_TARGET_IN_COLTYPES;   // TARGET_IN_COLTYPES 글로벌 변수 선언
var obj_G3_ADD_DT;   // ADD 글로벌 변수 선언
var obj_G3_MOD_DT;   // MOD 글로벌 변수 선언
var codeMirrorFontSizeG3Condition_sql = 11; // CONDITION_SQL
var codeMirrorFontSizeG3Source_sql = 11; // SRC_SQL
var codeMirrorFontSizeG3Target_sql = 11; // TARGET_SQL
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 배치목록
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 배치상세
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	//null
	alog("G3_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();

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
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
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
  alog("G1_INIT()-------------------------end");
}

//배치목록 그리드 초기화
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
					id:"BATCH_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:30
					, header:"SEQ"
				},
				{
					id:"BATCH_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"NM"
					, editor:"text"
				},
				{
					id:"CONDITION_SVRID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"CONDITION_SVRID"
					, editor:"text"
				},
				{
					id:"SOURCE_SVRID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"SRC_SVRID"
					, editor:"text"
				},
				{
					id:"TARGET_SVRID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"TARGET_SVRID"
					, editor:"text"
				},
				{
					id:"CRON", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:"CRON"
					, editor:"text"
				},
				{
					id:"START_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:80
					, header:"START_DT"
					, editor:"text"
				},
				{
					id:"END_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:80
					, header:"END_DT"
					, editor:"text"
				},
				{
					id:"USE_YN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:30
					, header:"USE_YN"
					, editor:"text"
				},
				{
					id:"STATUS", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:30
					, header:"STATUS"
				},
				{
					id:"LAST_RUN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LAST_RUN"
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
			//편집모드 일때는 하위 새로고침 안하게 하기
			if($("#G2-EDITMODE_EDIT_MODE") && $("#G2-EDITMODE_EDIT_MODE").is(":checked"))return false;
			lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
				', "G2-BATCH_SEQ" : "' + rowData.BATCH_SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // 배치상세
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-BATCH_SEQ",rowData.BATCH_SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 배치상세
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
//디테일 초기화	
//배치상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//BATCH_SEQ, SEQ 초기화	
	$("#G3-BATCH_SEQ").attr("readonly",true);
	$("#G3-BATCH_SEQ").attr("disabled",true);
	//BATCH_NM, NM 초기화	
	//CONDITION_SVRID, CONDITION_SVRID 초기화	
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_CONDITION_SQL = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-CONDITION_SQL'), {
		mode: "text/x-sql",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		hintOptions: {tables: {
			users: {name: null, score: null, birthDate: null},
			countries: {name: null, population: null, size: null}
		}}
	});
	obj_G3_CONDITION_SQL.setSize("100%","104px");
	//SOURCE_SVRID, SRC_SVRID 초기화	
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_SOURCE_SQL = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-SOURCE_SQL'), {
		mode: "text/x-sql",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		hintOptions: {tables: {
			users: {name: null, score: null, birthDate: null},
			countries: {name: null, population: null, size: null}
		}}
	});
	obj_G3_SOURCE_SQL.setSize("100%","128px");
	//SOURCE_IN_COLTYPES, SRC_IN_COLTYPES 초기화	
	//TARGET_SVRID, TARGET_SVRID 초기화	
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_TARGET_SQL = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-TARGET_SQL'), {
		mode: "text/x-sql",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		hintOptions: {tables: {
			users: {name: null, score: null, birthDate: null},
			countries: {name: null, population: null, size: null}
		}}
	});
	obj_G3_TARGET_SQL.setSize("100%","128px");
	//TARGET_IN_COLTYPES, TARGET_IN_COLTYPES 초기화	
	//ADD_DT, ADD 초기화
	//MOD_DT, MOD 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
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
			lastinputG2 = new HashMap(); //배치목록
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
//배치목록
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
//배치목록
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
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
//그리드 조회(배치목록)	
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
			msgNotice("[배치목록] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[배치목록] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[배치목록] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
		,"BATCH_SEQ" : ""
		,"BATCH_NM" : ""
		,"CONDITION_SVRID" : ""
		,"SOURCE_SVRID" : ""
		,"TARGET_SVRID" : ""
		,"CRON" : ""
		,"START_DT" : ""
		,"END_DT" : ""
		,"USE_YN" : ""
		,"STATUS" : ""
		,"LAST_RUN" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
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
}//G3_SAVE
//IO_FILE_YN = V/, G/N	
//IO_FILE_YN = N	
function G3_SAVE(token){	
	alog("G3_SAVE---------------start");

	if( !( $("#G3-CTLCUD").val() == "C" || $("#G3-CTLCUD").val() == "U") ){
		alert("신규 또는 수정 모드 진입 후 저장할 수 있습니다.")
		return;
	}



	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG3 != "undefined"  && lastinputG3 != null){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}
	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP
//폼뷰 G3는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G3-CTLCUD",$("#G3-CTLCUD").val());
	sendFormData.append("G3-BATCH_SEQ",$("#G3-BATCH_SEQ").val());	//SEQ 전송객체에 넣기
	sendFormData.append("G3-BATCH_NM",$("#G3-BATCH_NM").val());	//NM 전송객체에 넣기
	sendFormData.append("G3-CONDITION_SVRID",$("#G3-CONDITION_SVRID").val());	//CONDITION_SVRID 전송객체에 넣기
	sendFormData.append("G3-CONDITION_SQL",obj_G3_CONDITION_SQL.getValue()); //CONDITION_SQL
	sendFormData.append("G3-SOURCE_SVRID",$("#G3-SOURCE_SVRID").val());	//SRC_SVRID 전송객체에 넣기
	sendFormData.append("G3-SOURCE_SQL",obj_G3_SOURCE_SQL.getValue()); //SRC_SQL
	sendFormData.append("G3-SOURCE_IN_COLTYPES",$("#G3-SOURCE_IN_COLTYPES").val());	//SRC_IN_COLTYPES 전송객체에 넣기
	sendFormData.append("G3-TARGET_SVRID",$("#G3-TARGET_SVRID").val());	//TARGET_SVRID 전송객체에 넣기
	sendFormData.append("G3-TARGET_SQL",obj_G3_TARGET_SQL.getValue()); //TARGET_SQL
	sendFormData.append("G3-TARGET_IN_COLTYPES",$("#G3-TARGET_IN_COLTYPES").val());	//TARGET_IN_COLTYPES 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G3_SAVE + "&TOKEN=" + token + "&" + conAllData,
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
//디테일 검색	
function G3_SEARCH(tinput,token){
       alog("(FORMVIEW) G3_SEARCH---------------start");

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
        url : url_G3_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
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
            $("#G3-CTLCUD").val("R");
			//SETVAL  가져와서 세팅
			$("#G3-BATCH_SEQ").val(data.RTN_DATA.BATCH_SEQ);//SEQ 변수세팅
			$("#G3-BATCH_NM").val(data.RTN_DATA.BATCH_NM);//NM 변수세팅
			$("#G3-CONDITION_SVRID").val(data.RTN_DATA.CONDITION_SVRID);//CONDITION_SVRID 변수세팅
		//CodeMirror SetVal
		obj_G3_CONDITION_SQL.setValue(data.RTN_DATA.CONDITION_SQL); //CONDITION_SQL 
			$("#G3-SOURCE_SVRID").val(data.RTN_DATA.SOURCE_SVRID);//SRC_SVRID 변수세팅
		//CodeMirror SetVal
		obj_G3_SOURCE_SQL.setValue(data.RTN_DATA.SOURCE_SQL); //SRC_SQL 
			$("#G3-SOURCE_IN_COLTYPES").val(data.RTN_DATA.SOURCE_IN_COLTYPES);//SRC_IN_COLTYPES 변수세팅
			$("#G3-TARGET_SVRID").val(data.RTN_DATA.TARGET_SVRID);//TARGET_SVRID 변수세팅
		//CodeMirror SetVal
		obj_G3_TARGET_SQL.setValue(data.RTN_DATA.TARGET_SQL); //TARGET_SQL 
			$("#G3-TARGET_IN_COLTYPES").val(data.RTN_DATA.TARGET_IN_COLTYPES);//TARGET_IN_COLTYPES 변수세팅
	$("#G3-ADD_DT").text(data.RTN_DATA.ADD_DT);//ADD 변수세팅
	$("#G3-MOD_DT").text(data.RTN_DATA.MOD_DT);//MOD 변수세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
function G3_MODIFY(){
       alog("[FromView] G3_MODIFY---------------start");
	if( $("#G3-CTLCUD").val() == "C" ){
		alert("조회 후 수정 가능합니다. 신규 모드에서는 수정할 수 없습니다.")
		return;
	}
	if( $("#G3-CTLCUD").val() == "D" ){
		alert("조회 후 수정 가능합니다. 삭제 모드에서는 수정할 수 없습니다.")
		return;
	}

	$("#G3-CTLCUD").val("U");
       alog("[FromView] G3_MODIFY---------------end");
}
