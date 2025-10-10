var grpInfo = new HashMap();
		//
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "FROM_ADD_DT", "COLNM" : "로그 날짜", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "TO_ADD_DT", "COLNM" : "~", "OBJTYPE" : "CALENDAR" }
			]
		}
); //
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "배치"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BATCH_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "BATCH_NM", "COLNM" : "NM", "OBJTYPE" : "TEXT" }
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
); //배치
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "로그"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOG_SEQ", "COLNM" : "LOG_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "BATCH_SEQ", "COLNM" : "BATCH_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //로그
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SEARCHALL = "rdbatchlogController?CTLGRP=G2&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SAVE = "rdbatchlogController?CTLGRP=G2&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_RESET = "rdbatchlogController?CTLGRP=G2&CTLFNC=RESET";
// 변수 선언	
var obj_G2_FROM_ADD_DT; // 로그 날짜 변수선언
var obj_G2_TO_ADD_DT; // ~ 변수선언
//컨트롤러 경로
var url_G4_SEARCH = "rdbatchlogController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_RELOAD = "rdbatchlogController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_EXCEL = "rdbatchlogController?CTLGRP=G4&CTLFNC=EXCEL";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
var G4_REQUEST_ON = false;
//컨트롤러 경로
var url_G5_SEARCH = "rdbatchlogController?CTLGRP=G5&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G5_RELOAD = "rdbatchlogController?CTLGRP=G5&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G5_EDITMODE = "rdbatchlogController?CTLGRP=G5&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G5_CHKSAVE = "rdbatchlogController?CTLGRP=G5&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG5,isToggleHiddenColG5,lastinputG5,lastinputG5json,lastrowidG5;
var lastselectG5json;
var G5_REQUEST_ON = false;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 배치
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");

	$$("wixdtG4").resize();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : 로그
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");

	$$("wixdtG5").resize();

	alog("G5_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G2_RESIZE();
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
	G2_INIT();
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
	//G5, 로그, MSG, MSG
	if( tGrpId == "G5" && tColId == "MSG" ){
		obj_G5_MSG_POPUP = window.open("about:blank","codeSearch_G5_MSG_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
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
		frm.target = "codeSearch_G5_MSG_Pop";
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
	if(tGrpId == "G5" && tColId =="MSG"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG5").getItem(tRowId);

		rowItem.MSG = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG5").updateItem(tRowId, rowItem);

		//$$("wixdtG5").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G5_MSG_POPUP != null)obj_G5_MSG_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//달력 FROM_ADD_DT, 로그 날짜
	$( "#G2-FROM_ADD_DT" ).datepicker(dateFormatJson);
$("#G2-FROM_ADD_DT").val(moment().add(-7,"days").format("YYYY-MM-DD"));
	//달력 TO_ADD_DT, ~
	$( "#G2-TO_ADD_DT" ).datepicker(dateFormatJson);
$("#G2-TO_ADD_DT").val(moment().format("YYYY-MM-DD"));
  alog("G2_INIT()-------------------------end");
}

//배치 그리드 초기화
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
					id:"BATCH_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
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
			lastinputG5json = jQuery.parseJSON('{ "__NAME":"lastinputG5json"' +
				', "G4-BATCH_SEQ" : "' + rowData.BATCH_SEQ + '"' +
			'}');
			lastinputG5 = new HashMap(); // 로그
			lastinputG5.set("__ROWID",rowData.uid);
			lastinputG5.set("G4-BATCH_SEQ",rowData.BATCH_SEQ); // 
			G5_SEARCH(lastinputG5,uuidv4()); //자식그룹 호출 : 로그
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
//로그 그리드 초기화
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
					id:"LOG_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"LOG_SEQ"
				},
				{
					id:"BATCH_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
				, hidden: true
					, width:100
					, header:"BATCH_SEQ"
				},
				{
					id:"MSG", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:"MSG"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ADD"
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
			//편집모드 일때는 하위 새로고침 안하게 하기
			if($("#G5-EDITMODE_EDIT_MODE") && $("#G5-EDITMODE_EDIT_MODE").is(":checked"))return false;
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
function G2_RESET(){
	alog("G2_RESET--------------------------start");
	$('#condition')[0].reset();
}
//, 저장	
function G2_SAVE(token){
 alog("G2_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G2 getparams	
	$.ajax({
		type : "POST",
		url : url_G2_SAVE+"&TOKEN=" + token ,
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
			msgError("[G2] Ajax http 500 error ( " + error + " )");
			alog("[G2] Ajax http 500 error ( " + error + " )");
		}
	});
	alog("G2_SAVE-------------------end");	
}
// CONDITIONSearch	
function G2_SEARCHALL(token){
	alog("G2_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G2
			lastinputG4 = new HashMap(); //배치
		//  호출
	G4_SEARCH(lastinputG4,token);
	alog("G2_SEARCHALL--------------------------end");
}
//엑셀 다운받기 - 렌더링 후값인 NM (배치)
function G4_EXCEL(tinput,token){
	alog("G4_EXCEL()------------start");

	webix.toExcel($$("wixdtG4"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"BATCH_SEQ": {header: "SEQ"}
,			"BATCH_NM": {header: "NM"}
,			"CRON": {header: "CRON"}
,			"START_DT": {header: "START_DT"}
,			"END_DT": {header: "END_DT"}
,			"USE_YN": {header: "USE_YN"}
,			"STATUS": {header: "STATUS"}
,			"LAST_RUN": {header: "LAST_RUN"}
,			"ADD_DT": {header: "ADD"}
,			"MOD_DT": {header: "MOD"}
			}
		}   
	);


	alog("G4_EXCEL()------------end");
}//그리드 조회(배치)	
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
			msgNotice("[배치] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[배치] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[배치] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[배치] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[배치] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[배치] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
//그리드 조회(로그)	
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
			msgNotice("[로그] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[로그] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[로그] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[로그] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[로그] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[로그] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//새로고침	
function G5_RELOAD(token){
  alog("G5_RELOAD-----------------start");
  G5_SEARCH(lastinputG5,token);
}
//로그
function G5_CHKSAVE(token){
	alog("G5_CHKSAVE()------------start");


	var allData = $$("wixdtG5").serialize(true);
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
	if(typeof lastinputG5 != "undefined" && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기

	$.ajax({
		type : "POST",
		url : url_G5_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G5_CHKSAVE()------------end");
}
