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
				{ "COLID": "SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SRC", "COLNM" : "SRC", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTAINERNM", "COLNM" : "컨테이너NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CONTAINERID", "COLNM" : "컨테이너ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOG", "COLNM" : "LOG", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FROM_ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "TO_ADDDT", "COLNM" : "~", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "ROWLIMIT", "COLNM" : "ROWLIMIT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": ""
			,"KEYCOLID": "SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SRC", "COLNM" : "SRC", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "CONTAINERNM", "COLNM" : "컨테이너NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "CONTAINERID", "COLNM" : "컨테이너ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LOG", "COLNM" : "LOG", "OBJTYPE" : "POPUP" }
,				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "POPUP" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOG", "COLNM" : "LOG", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "CODEMIRROR" }
			]
		}
); //
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rdfluentdController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rdfluentdController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_SEQ; // SEQ 변수선언
var obj_G1_SRC; // SRC 변수선언
var obj_G1_CONTAINERNM; // 컨테이너NM 변수선언
var obj_G1_CONTAINERID; // 컨테이너ID 변수선언
var obj_G1_LOG; // LOG 변수선언
var obj_G1_FROM_ADDDT; // ADDDT 변수선언
var obj_G1_TO_ADDDT; // ~ 변수선언
var obj_G1_ROWLIMIT; // ROWLIMIT 변수선언
//컨트롤러 경로
var url_G2_SEARCH = "rdfluentdController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "rdfluentdController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_EXCEL = "rdfluentdController?CTLGRP=G2&CTLFNC=EXCEL";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "rdfluentdController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "rdfluentdController?CTLGRP=G3&CTLFNC=RELOAD";
var obj_G3_SEQ;   // SEQ 글로벌 변수 선언
var obj_G3_LOG;   // LOG 글로벌 변수 선언
var obj_G3_MSG;   // MSG 글로벌 변수 선언
var codeMirrorFontSizeG3Log = 11; // LOG
var codeMirrorFontSizeG3Msg = 11; // MSG
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 
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
	//G2, , MSG, MSG
	if( tGrpId == "G2" && tColId == "MSG" ){
		obj_G2_MSG_POPUP = window.open("about:blank","codeSearch_G2_MSG_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='MSG' id='MSG' value='" + tValue + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.	
		frm1.append("<input type=text name='MSG-NM' id='MSG-NM' value='" + tText + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.	
		
		$("#GRPID").val(tGrpId);
		$("#ROWID").val(tRowId);		
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G2_MSG_Pop";
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
	//G3, , MSG, MSG
	if( tGrpId == "G3" && tColId == "G3-MSG" ){
		obj_G3_MSG_POPUP = window.open("about:blank","codeSearch_G3_MSG_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='MSG' id='MSG' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.	
		frm1.append("<input type=text name='MSG-NM' id='MSG-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G3_MSG_Pop";
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
	if(tGrpId == "G2" && tColId =="MSG"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG2").getItem(tRowId);

		rowItem.MSG = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG2").updateItem(tRowId, rowItem);

		//$$("wixdtG2").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G2_MSG_POPUP != null)obj_G2_MSG_POPUP.close();
	}
	//FORM
	if(tGrpId == "G3" && tColId =="G3-MSG"){
		$("#G3-MSG").val(tJsonObj.CD);
		$("#G3-MSG-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G3_MSG_POPUP != null) obj_G3_MSG_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//SEQ, SEQ 초기화	
	//SRC, SRC 초기화	
	//CONTAINERNM, 컨테이너NM 초기화	
	//CONTAINERID, 컨테이너ID 초기화	
	//LOG, LOG 초기화	
	//달력 FROM_ADDDT, ADDDT
	$( "#G1-FROM_ADDDT" ).datepicker(dateFormatJson);
$("#G1-FROM_ADDDT").val(moment().add(-30,'days').format("YYYY-MM-DD"));
	//달력 TO_ADDDT, ~
	$( "#G1-TO_ADDDT" ).datepicker(dateFormatJson);
$("#G1-TO_ADDDT").val(moment().format("YYYY-MM-DD"));
	//ROWLIMIT, ROWLIMIT 초기화	
$("#G1-ROWLIMIT").val(1000);
	//G1-ROWLIMIT
	var cleave = new Cleave('.formatNumberThousand', {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
    });
  alog("G1_INIT()-------------------------end");
}

// 그리드 초기화
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
					id:"SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"SEQ"
				},
				{
					id:"SRC", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:"SRC"
				},
				{
					id:"CONTAINERNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"컨테이너NM"
				},
				{
					id:"CONTAINERID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"컨테이너ID"
				},
				{
					id:"LOG", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:"LOG"
					, editor:"popup"
					, template:function(obj){
						return _.replace(_.replace(obj.LOG,/</g,"&lt;"),/>/g,"&gt;");
					}
				},
				{
					id:"MSG", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:150
					, header:"MSG"
					, editor:"popup"
					, template:function(obj){
						return _.replace(_.replace(obj.MSG,/</g,"&lt;"),/>/g,"&gt;");
					}
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ADDDT"
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
				', "G2-SEQ" : "' + rowData.SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // 
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-SEQ",rowData.SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 
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
// 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//SEQ, SEQ 초기화	
	$("#G3-SEQ").attr("readonly",true);
	$("#G3-SEQ").attr("disabled",true);
	//Codemirror mode : JSON
	//코드 미러 초기화
	obj_G3_LOG = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-LOG'), {
		mode: "application/ld+json",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		foldGutter: true,
		gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
		foldOptions: {
			widget: (from, to) => {
				var count = undefined;

				// Get open / close token
				var startToken = '{', endToken = '}';        
				var prevLine = obj_G3_LOG.getLine(from.line);
				if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
					startToken = '[', endToken = ']';
				}

				// Get json content
				var internal = obj_G3_LOG.getRange(from, to);
				var toParse = startToken + internal + endToken;

				// Get key count
				try {
					var parsed = JSON.parse(toParse);
					count = Object.keys(parsed).length;
				} catch(e) { }        

				return count ? `\u21A4${count}\u21A6` : '\u2194';
			}
		},
	});
	obj_G3_LOG.setSize("100%","227px");
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_MSG = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-MSG'), {
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
	obj_G3_MSG.setSize("100%","299px");
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 조회()	
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
			msgNotice("[] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//엑셀 다운받기 - 렌더링 후값인 NM ()
function G2_EXCEL(tinput,token){
	alog("G2_EXCEL()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"SEQ": {header: "SEQ"}
,			"SRC": {header: "SRC"}
,			"CONTAINERNM": {header: "컨테이너NM"}
,			"CONTAINERID": {header: "컨테이너ID"}
,			"LOG": {header: "LOG"}
,			"MSG": {header: "MSG"}
,			"ADDDT": {header: "ADDDT"}
			}
		}   
	);


	alog("G2_EXCEL()------------end");
}//디테일 검색	
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
			$("#G3-SEQ").val(data.RTN_DATA.SEQ);//SEQ 변수세팅
		//CodeMirror SetVal
		var strJson = "";
		try{
			objJson = JSON.parse(data.RTN_DATA.LOG);
			strJson = JSON.stringify(objJson, null, "\t");    // stringify with 4 spaces at each level
		}catch(e){
			strJson = data.RTN_DATA.LOG;
		}
		obj_G3_LOG.setValue(strJson); //LOG
		//CodeMirror SetVal
		obj_G3_MSG.setValue(data.RTN_DATA.MSG); //MSG 
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}