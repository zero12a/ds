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
				{ "COLID": "CAMPAIGN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CAMPAIGN_NM", "COLNM" : "CAMPAIGN_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTENT_SVRID", "COLNM" : "CONTENT_SVRID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTENT_NM", "COLNM" : "CONTENT_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CAHNNEL", "COLNM" : "CAHNNEL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TITLE", "COLNM" : "TITLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "BODY", "COLNM" : "BODY", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "CALENDAR" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "캠페인목록"
			,"KEYCOLID": "CAMPAIGN_SEQ"
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CAMPAIGN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "CAMPAIGN_NM", "COLNM" : "NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CONTENT_SVRID", "COLNM" : "CONTENT_SVRID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CONTENT_NM", "COLNM" : "CONTENT_NM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CAHNNEL", "COLNM" : "CAHNNEL", "OBJTYPE" : "TEXT" }
,				{ "COLID": "TITLE", "COLNM" : "TITLE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //캠페인목록
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "상세"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CAMPAIGN_SEQ", "COLNM" : "CAMPAIGN_SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CAMPAIGN_NM", "COLNM" : "CAMPAIGN_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTENT_SVRID", "COLNM" : "CONTENT_SVRID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTENT_IN_COLTYPES", "COLNM" : "CONTENT_IN_COLTYPES", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTENT_SQL", "COLNM" : "CONTENT_SQL", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "CONTENT_NM", "COLNM" : "CONTENT_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CAHNNEL", "COLNM" : "CAHNNEL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TITLE", "COLNM" : "TITLE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "BODY", "COLNM" : "BODY", "OBJTYPE" : "WEJODIT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "rdcampaignmngController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rdcampaignmngController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "rdcampaignmngController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rdcampaignmngController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_CAMPAIGN_SEQ; // SEQ 변수선언
var obj_G1_CAMPAIGN_NM; // CAMPAIGN_NM 변수선언
var obj_G1_CONTENT_SVRID; // CONTENT_SVRID 변수선언
var obj_G1_CONTENT_NM; // CONTENT_NM 변수선언
var obj_G1_CAHNNEL; // CAHNNEL 변수선언
var obj_G1_TITLE; // TITLE 변수선언
var obj_G1_BODY; // BODY 변수선언
var obj_G1_ADD_DT; // ADD 변수선언
var obj_G1_MOD_DT; // MOD 변수선언
//컨트롤러 경로
var url_G2_SEARCH = "rdcampaignmngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "rdcampaignmngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "rdcampaignmngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "rdcampaignmngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "rdcampaignmngController?CTLGRP=G2&CTLFNC=RELOAD";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "rdcampaignmngController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "rdcampaignmngController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "rdcampaignmngController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "rdcampaignmngController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "rdcampaignmngController?CTLGRP=G3&CTLFNC=MODIFY";
var obj_G3_CAMPAIGN_SEQ;   // CAMPAIGN_SEQ 글로벌 변수 선언
var obj_G3_CAMPAIGN_NM;   // CAMPAIGN_NM 글로벌 변수 선언
var obj_G3_CONTENT_SVRID;   // CONTENT_SVRID 글로벌 변수 선언
var obj_G3_CONTENT_IN_COLTYPES;   // CONTENT_IN_COLTYPES 글로벌 변수 선언
var obj_G3_CONTENT_SQL;   // CONTENT_SQL 글로벌 변수 선언
var obj_G3_CONTENT_NM;   // CONTENT_NM 글로벌 변수 선언
var obj_G3_CAHNNEL;   // CAHNNEL 글로벌 변수 선언
var obj_G3_TITLE;   // TITLE 글로벌 변수 선언
var obj_G3_BODY;   // BODY 글로벌 변수 선언
var obj_G3_ADD_DT;   // ADD 글로벌 변수 선언
var obj_G3_MOD_DT;   // MOD 글로벌 변수 선언
var codeMirrorFontSizeG3Content_sql = 11; // CONTENT_SQL
	var jodit_G3_BODY;//{G.GRPID-BODY initval
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 캠페인목록
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 상세
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
	//CAMPAIGN_SEQ, SEQ 초기화	
	//CAMPAIGN_NM, CAMPAIGN_NM 초기화	
	//CONTENT_SVRID, CONTENT_SVRID 초기화	
	//CONTENT_NM, CONTENT_NM 초기화	
	//CAHNNEL, CAHNNEL 초기화	
	//TITLE, TITLE 초기화	
	//BODY, BODY 초기화	
	//달력 ADD_DT, ADD
	$( "#G1-ADD_DT" ).datepicker(dateFormatJson);
	//달력 MOD_DT, MOD
	$( "#G1-MOD_DT" ).datepicker(dateFormatJson);
  alog("G1_INIT()-------------------------end");
}

//캠페인목록 그리드 초기화
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
					id:"CAMPAIGN_SEQ", sort:"int"
					, css:{"text-align":""}
					, width:60
					, header:"SEQ"
				},
				{
					id:"CAMPAIGN_NM", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"NM"
					, editor:"text"
				},
				{
					id:"CONTENT_SVRID", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"CONTENT_SVRID"
					, editor:"text"
				},
				{
					id:"CONTENT_NM", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"CONTENT_NM"
					, editor:"text"
				},
				{
					id:"CAHNNEL", sort:"string"
					, css:{"text-align":""}
					, width:60
					, header:"CAHNNEL"
					, editor:"text"
				},
				{
					id:"TITLE", sort:"string"
					, css:{"text-align":""}
					, fillspace: true
					, header:"TITLE"
					, editor:"text"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ADD"
				},
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
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
				', "G2-CAMPAIGN_SEQ" : "' + rowData.CAMPAIGN_SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // 상세
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-CAMPAIGN_SEQ",rowData.CAMPAIGN_SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 상세
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
//상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//CAMPAIGN_SEQ, CAMPAIGN_SEQ 초기화	
	$("#G3-CAMPAIGN_SEQ").attr("readonly",true);
	$("#G3-CAMPAIGN_SEQ").attr("disabled",true);
	//CAMPAIGN_NM, CAMPAIGN_NM 초기화	
	//CONTENT_SVRID, CONTENT_SVRID 초기화	
	//CONTENT_IN_COLTYPES, CONTENT_IN_COLTYPES 초기화	
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_CONTENT_SQL = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-CONTENT_SQL'), {
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
	obj_G3_CONTENT_SQL.setSize("100%","184px");
	//CONTENT_NM, CONTENT_NM 초기화	
	//CAHNNEL, CAHNNEL 초기화	
	//TITLE, TITLE 초기화	
		//jodit init
        jodit_G3_BODY = new Jodit('#G3-BODY',{
            enableDragAndDropFileToEditor: true,
			showPlaceholder: false,
        	placeholder: '',
			width: "100%",
            height: "370px", 
            buttons: [ 'undo', 'redo', '|','bold', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'brush', 'paragraph', '|','image', 'video', 'table', 'link', '|', 'left', 'center', 'right', 'justify', '|',  'hr', 'eraser', 'fullsize','source'],
            uploader: {
                url: '/common/cg_upload_jodit.php?action=fileUpload&storeid=',
                format: 'json',
                imagesExtensions: ["jpg", "png", "jpeg", "gif"],
                method: "POST",
                error: function(e){
                    alog("error...............start");
                    alog(e);
                    this.j.e.fire("errorMessage",e.message,"error",4e3);
                }
            },
            events: {
                afterInit: function (editorT) {
                    alog("jodit afterInit........................start");
                }
                ,createEditor: function (editorT){
                    alog("jodit createEditor........................start");
                }
                ,ready: function (editorT){
                    alog("jodit ready........................start");
                }
                ,init: function (editorT){
                    alog("jodit init........................start");
                }
            }        
        });

		jodit_G3_BODY.value = "<p></p>";
	//ADD_DT, ADD 초기화
	//MOD_DT, MOD 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
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
			lastinputG2 = new HashMap(); //캠페인목록
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
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
//캠페인목록
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
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
//그리드 조회(캠페인목록)	
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
			msgNotice("[캠페인목록] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[캠페인목록] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[캠페인목록] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
		,"CAMPAIGN_SEQ" : ""
		,"CAMPAIGN_NM" : ""
		,"CONTENT_SVRID" : ""
		,"CONTENT_NM" : ""
		,"CAHNNEL" : ""
		,"TITLE" : ""
		,"ADD_DT" : ""
		,"MOD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//G3_SAVE
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
	sendFormData.append("G3-CAMPAIGN_SEQ",$("#G3-CAMPAIGN_SEQ").val());	//CAMPAIGN_SEQ 전송객체에 넣기
	sendFormData.append("G3-CAMPAIGN_NM",$("#G3-CAMPAIGN_NM").val());	//CAMPAIGN_NM 전송객체에 넣기
	sendFormData.append("G3-CONTENT_SVRID",$("#G3-CONTENT_SVRID").val());	//CONTENT_SVRID 전송객체에 넣기
	sendFormData.append("G3-CONTENT_IN_COLTYPES",$("#G3-CONTENT_IN_COLTYPES").val());	//CONTENT_IN_COLTYPES 전송객체에 넣기
	sendFormData.append("G3-CONTENT_SQL",obj_G3_CONTENT_SQL.getValue()); //CONTENT_SQL
	sendFormData.append("G3-CONTENT_NM",$("#G3-CONTENT_NM").val());	//CONTENT_NM 전송객체에 넣기
	sendFormData.append("G3-CAHNNEL",$("#G3-CAHNNEL").val());	//CAHNNEL 전송객체에 넣기
	sendFormData.append("G3-TITLE",$("#G3-TITLE").val());	//TITLE 전송객체에 넣기
	sendFormData.append("G3-BODY",jodit_G3_BODY.value); //BODY

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
			$("#G3-CAMPAIGN_SEQ").val(data.RTN_DATA.CAMPAIGN_SEQ);//CAMPAIGN_SEQ 변수세팅
			$("#G3-CAMPAIGN_NM").val(data.RTN_DATA.CAMPAIGN_NM);//CAMPAIGN_NM 변수세팅
			$("#G3-CONTENT_SVRID").val(data.RTN_DATA.CONTENT_SVRID);//CONTENT_SVRID 변수세팅
			$("#G3-CONTENT_IN_COLTYPES").val(data.RTN_DATA.CONTENT_IN_COLTYPES);//CONTENT_IN_COLTYPES 변수세팅
		//CodeMirror SetVal
		obj_G3_CONTENT_SQL.setValue(data.RTN_DATA.CONTENT_SQL); //CONTENT_SQL 
			$("#G3-CONTENT_NM").val(data.RTN_DATA.CONTENT_NM);//CONTENT_NM 변수세팅
			$("#G3-CAHNNEL").val(data.RTN_DATA.CAHNNEL);//CAHNNEL 변수세팅
			$("#G3-TITLE").val(data.RTN_DATA.TITLE);//TITLE 변수세팅
	var val = data.RTN_DATA.BODY; //BODY
	jodit_G3_BODY.value = val;
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
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-CAMPAIGN_SEQ").val("");//CAMPAIGN_SEQ 신규초기화	
	$("#G3-CAMPAIGN_NM").val("");//CAMPAIGN_NM 신규초기화	
	$("#G3-CONTENT_SVRID").val("");//CONTENT_SVRID 신규초기화	
	$("#G3-CONTENT_IN_COLTYPES").val("");//CONTENT_IN_COLTYPES 신규초기화	
	obj_G3_CONTENT_SQL.setValue(""); // CONTENT_SQL값 비우기
	$("#G3-CONTENT_NM").val("");//CONTENT_NM 신규초기화	
	$("#G3-CAHNNEL").val("");//CAHNNEL 신규초기화	
	$("#G3-TITLE").val("");//TITLE 신규초기화	
	jodit_G3_BODY.value = "";
	$("#G3-ADD_DT").text("");//ADD 신규초기화
	$("#G3-MOD_DT").text("");//MOD 신규초기화
	alog("DETAILNew30---------------end");
}
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}