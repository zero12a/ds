var grpInfo = new HashMap();
		//
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "2"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTID", "COLNM" : "프로젝트ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "생성일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "MYRADIO", "COLNM" : "나의라디오", "OBJTYPE" : "INPUTRADIO" }
			]
		}
); //2
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "CONFIG"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CFGSEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CFGID", "COLNM" : "CFGID", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CFGNM", "COLNM" : "CFGNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MVCGBN", "COLNM" : "MVCGBN", "OBJTYPE" : "COMBO" }
,				{ "COLID": "PATH", "COLNM" : "PATH", "OBJTYPE" : "TEXT" }
,				{ "COLID": "CFGORD", "COLNM" : "ORD", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //CONFIG
grpInfo.set(
	"G7", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "FILE"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FILESEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MKFILETYPE", "COLNM" : "파일타입", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MKFILETYPENM", "COLNM" : "타입명", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MKFILEFORMAT", "COLNM" : "포멧", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MKFILEEXT", "COLNM" : "확장자", "OBJTYPE" : "TEXT" }
,				{ "COLID": "TEMPLATE", "COLNM" : "템플릿", "OBJTYPE" : "TEXT" }
,				{ "COLID": "FILEORD", "COLNM" : "순번", "OBJTYPE" : "TEXT" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "TEXT" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //FILE
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SEARCHALL = "pjtenvController?CTLGRP=G2&CTLFNC=SEARCHALL";
//2 변수 선언	
var obj_G2_PJTID; // 프로젝트ID 변수선언
var obj_G2_ADDDT; // 생성일 변수선언
var obj_G2_MYRADIO; // 나의라디오 변수선언
//컨트롤러 경로
var url_G6_USERDEF = "pjtenvController?CTLGRP=G6&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G6_SEARCH = "pjtenvController?CTLGRP=G6&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G6_SAVE = "pjtenvController?CTLGRP=G6&CTLFNC=SAVE";
//컨트롤러 경로
var url_G6_ROWDELETE = "pjtenvController?CTLGRP=G6&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G6_ROWADD = "pjtenvController?CTLGRP=G6&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G6_RELOAD = "pjtenvController?CTLGRP=G6&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G6_EXCEL = "pjtenvController?CTLGRP=G6&CTLFNC=EXCEL";
//그리드 객체
var wixdtG6,isToggleHiddenColG6,lastinputG6,lastinputG6json,lastrowidG6;
var lastselectG6json;
var G6_REQUEST_ON = false;
//컨트롤러 경로
var url_G7_USERDEF = "pjtenvController?CTLGRP=G7&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G7_SEARCH = "pjtenvController?CTLGRP=G7&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G7_SAVE = "pjtenvController?CTLGRP=G7&CTLFNC=SAVE";
//컨트롤러 경로
var url_G7_ROWDELETE = "pjtenvController?CTLGRP=G7&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G7_ROWADD = "pjtenvController?CTLGRP=G7&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G7_RELOAD = "pjtenvController?CTLGRP=G7&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G7_EXCEL = "pjtenvController?CTLGRP=G7&CTLFNC=EXCEL";
//그리드 객체
var wixdtG7,isToggleHiddenColG7,lastinputG7,lastinputG7json,lastrowidG7;
var lastselectG7json;
var G7_REQUEST_ON = false;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 2
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : CONFIG
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");

	$$("wixdtG6").resize();

	alog("G6_RESIZE-----------------end");
}
//사이즈 리셋 : FILE
function G7_RESIZE(){
	alog("G7_RESIZE-----------------start");

	$$("wixdtG7").resize();

	alog("G7_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G2_RESIZE();
	G6_RESIZE();
	G7_RESIZE();

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
	G6_INIT();
	G7_INIT();
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
function G2_INIT(){
  alog("G2_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//PJTID, 프로젝트ID 초기화	
	$("#G2-PJTID").attr("readonly",true);
	$("#G2-PJTID").attr("disabled",true);
	//달력 ADDDT, 생성일
	$( "#G2-ADDDT" ).datepicker(dateFormatJson);
	//G2-생성일
	var cleave = new Cleave('.formatDate', {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
    });
	//MYRADIO, 나의라디오 초기화	
setCodeRadio("CONDITION", "G2-MYRADIO", "CRUD");

	$("input:radio[id='G2-MYRADIO']").attr('disabled', true); //나의라디오
  alog("G2_INIT()-------------------------end");
}

//CONFIG 그리드 초기화
function G6_INIT(){
	alog("G6_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G6 window resize.....................start");
		$$("wixdtG6").resize();
	});
	$("#G6-EDITMODE_EDIT_MODE").change(function(){
        if($("#G6-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG6").config.editaction = "click";
        }else{
            $$("wixdtG6").config.editaction = "dblclick";
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

		wixdtG6 = webix.ui({
			container: "wixdtG6",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG6",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"CFGSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"SEQ"
					, editor:"text"
				},
				{
					id:"USEYN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:70
					, header:["사용", {content:"textFilter"}]
					, editor:"text"
				},
				{
					id:"CFGID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:["CFGID", {content:"textFilter"}]
					, editor:"text"
				},
				{
					id:"CFGNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:["CFGNM", {content:"textFilter"}]
					, editor:"text"
				},
				{
					id:"MVCGBN", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:["MVCGBN", {content:"selectFilter"}]
					, editor:"combo", options:null
				},
				{
					id:"PATH", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:300
					, header:["PATH", {content:"textFilter"}]
					, editor:"text"
				},
				{
					id:"CFGORD", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:30
					, header:["ORD", {content:"numberFilter"}]
					, editor:"text"
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:80
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
					var text = "Selected: "+$$("wixdtG6").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		apiCodeCombo('G6','MVCGBN',{'G1-PCD':'MVCGBN'},''); // IO : MVCGBN초기화
		wixdtG6.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG6.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG6").data.getItem(rowId);
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG6.onItemClick()............................end");
		});
		wixdtG6.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG6.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG6.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G6_INIT()-------------------------end");
}
//FILE 그리드 초기화
function G7_INIT(){
	alog("G7_INIT()-------------------------start");

	$( window ).resize( function() {
		alog("G7 window resize.....................start");
		$$("wixdtG7").resize();
	});
	$("#G7-EDITMODE_EDIT_MODE").change(function(){
        if($("#G7-EDITMODE_EDIT_MODE").is(":checked")){
            $$("wixdtG7").config.editaction = "click";
        }else{
            $$("wixdtG7").config.editaction = "dblclick";
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

		wixdtG7 = webix.ui({
			container: "wixdtG7",
			view: "datatable",
			//height:520, 
			//width:750,
			autowidth: true,
			scroll: true,
			editable: true,
			editaction: "dblclick",
			id: "wixdtG7",
			leftSplit: 0,
			select: "row", //cell, row, column, true, false
			hover: "myhover",
			resizeColumn:true,
			autoheight:false,
			autowidth:false,
			css: "webix_data_border webix_header_border webix_footer_border",
			columns:[
				{
					id:"FILESEQ", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"SEQ"
				},
				{
					id:"MKFILETYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"파일타입"
					, editor:"text"
				},
				{
					id:"MKFILETYPENM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"타입명"
					, editor:"text"
				},
				{
					id:"MKFILEFORMAT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"포멧"
					, editor:"text"
				},
				{
					id:"MKFILEEXT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"확장자"
					, editor:"text"
				},
				{
					id:"TEMPLATE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"템플릿"
					, editor:"text"
				},
				{
					id:"FILEORD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"순번"
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
					, width:80
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
					var text = "Selected: "+$$("wixdtG7").getSelectedId(true).join();
					console.log(text);
				},
				onAfterSelect:function(){  logEvent("select:after","Cell selected",arguments);  },
				//onCheck:function(){  logEvent("check","Checkbox",arguments);  },
				onAfterEditStart:function(){  logEvent("edit:afterStart","Editing started",arguments);  },
				onAfterEditStop: fncAfterEditStop,
			}
			//url:"demo_webix_data.php"
		}); //datetable create end
		wixdtG7.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG7.onItemClick()............................start");
			alog(cellData);
			//alog(e);
			//alog(htmlObj);

			var rowId = cellData.row;
			var rowData = $$("wixdtG7").data.getItem(rowId);
			//alert($$("webix_dt").getFilter("start").value);
			alog("wixdtG7.onItemClick()............................end");
		});
		wixdtG7.attachEvent("onBeforeFilter", fncBeforeFilter);
		wixdtG7.data.attachEvent("onDataUpdate", fncDataUpdate);
		wixdtG7.data.attachEvent("onIdChange", fncIdChange);
		//사용자 정의 이벤트

	});//webix.ready end
	alog("G7_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G2_SEARCHALL(token){
	alog("G2_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G2
			lastinputG6 = new HashMap(); //CONFIG
				lastinputG7 = new HashMap(); //FILE
		//  호출
	G6_SEARCH(lastinputG6,token);
	//  호출
	G7_SEARCH(lastinputG7,token);
	alog("G2_SEARCHALL--------------------------end");
}
//CONFIG
function G6_SAVE(token){
	alog("G6_SAVE()------------start");

	if(G6_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G6_REQUEST_ON = true;

    allData = $$("wixdtG6").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG6 != "undefined" && lastinputG6 != null){
		var tKeys = lastinputG6.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG6.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG6.get(tKeys[i])); 
		}
	}
	sendFormData.append("G6-JSON" , myJsonString);
	allData = $$("wixdtG6").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G6-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G6_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G6_REQUEST_ON = false;
		}

	});
	
	alog("G6_SAVE()------------end");
}
//새로고침	
function G6_RELOAD(token){
  alog("G6_RELOAD-----------------start");
  G6_SEARCH(lastinputG6,token);
}
//그리드 조회(CONFIG)	
function G6_SEARCH(tinput,token){
	alog("G6_SEARCH()------------start");

	if(G6_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G6_REQUEST_ON = true;


    $$("wixdtG6").clearAll();
	wixdtG6.markSorting("",""); //정렬 arrow 클리어
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

	//불러오기
	$.ajax({
		type : "POST",
		url : url_G6_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG6 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG6Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG6").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG6Cnt").text("-");
			}
			msgNotice("[CONFIG] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[CONFIG] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[CONFIG] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G6_REQUEST_ON = false;
		}
	});
        alog("G6_SEARCH()------------end");
    }

//
//행추가
function G6_ROWADD(tinput,token){
	alog("G6_ROWADD()------------start");

	if( !(lastinputG6)		|| lastinputG6.get("G6-PJTSEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"CFGSEQ" : ""
		,"USEYN" : ""
		,"CFGID" : ""
		,"CFGNM" : ""
		,"MVCGBN" : ""
		,"PATH" : ""
		,"CFGORD" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG6").add(rowData,0);
    $$("wixdtG6").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : 사용자정의
function G6_USERDEF(token){
	alog("G6_USERDEF-----------------start");

	alog("G6_USERDEF-----------------end");
}
//행삭제
function G6_ROWDELETE(tinput,token){
	alog("G6_ROWDELETE()------------start");

    rowId = $$("wixdtG6").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG6").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG6").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//엑셀 다운받기 - 렌더링 후값인 NM (CONFIG)
function G6_EXCEL(tinput,token){
	alog("G6_EXCEL()------------start");

	webix.toExcel($$("wixdtG6"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CFGSEQ": {header: "SEQ"}
,			"USEYN": {header: "사용"}
,			"CFGID": {header: "CFGID"}
,			"CFGNM": {header: "CFGNM"}
,			"MVCGBN": {header: "MVCGBN"}
,			"PATH": {header: "PATH"}
,			"CFGORD": {header: "ORD"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "MODDT"}
			}
		}   
	);


	alog("G6_EXCEL()------------end");
}//FILE
function G7_SAVE(token){
	alog("G7_SAVE()------------start");

	if(G7_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G7_REQUEST_ON = true;

    allData = $$("wixdtG7").serialize(true);
    //alog(allData);
    var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG7 != "undefined" && lastinputG7 != null){
		var tKeys = lastinputG7.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG7.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG7.get(tKeys[i])); 
		}
	}
	sendFormData.append("G7-JSON" , myJsonString);
	allData = $$("wixdtG7").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G7-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G7_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G7_REQUEST_ON = false;
		}

	});
	
	alog("G7_SAVE()------------end");
}
//새로고침	
function G7_RELOAD(token){
  alog("G7_RELOAD-----------------start");
  G7_SEARCH(lastinputG7,token);
}
//그리드 조회(FILE)	
function G7_SEARCH(tinput,token){
	alog("G7_SEARCH()------------start");

	if(G7_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G7_REQUEST_ON = true;


    $$("wixdtG7").clearAll();
	wixdtG7.markSorting("",""); //정렬 arrow 클리어
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

	//불러오기
	$.ajax({
		type : "POST",
		url : url_G7_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		async: true,
		success: function(data){
			alog("   gridG7 json return----------------------");
			alog("   json data : " + data);
			alog("   json RTN_CD : " + data.RTN_CD);
			alog("   json ERR_CD : " + data.ERR_CD);
			//alog("   json RTN_MSG length : " + data.RTN_MSG.length);

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG7Cnt").text(row_cnt);
   					var beforeDate = new Date();
					$$("wixdtG7").parse(data.RTN_DATA.rows,"json");
					var afterDate = new Date();
					alog("	parse render time(ms) = " + (afterDate - beforeDate));

			}else{
				$("#spanG7Cnt").text("-");
			}
			msgNotice("[FILE] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[FILE] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[FILE] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		}

,
		complete : function() {
			G7_REQUEST_ON = false;
		}
	});
        alog("G7_SEARCH()------------end");
    }

//
//행추가
function G7_ROWADD(tinput,token){
	alog("G7_ROWADD()------------start");

	if( !(lastinputG7)		|| lastinputG7.get("G7-PJTSEQ") == ""	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		return;
	}


	var rowId =  webix.uid();

	var rowData = {
        id: rowId
		,"FILESEQ" : ""
		,"MKFILETYPE" : ""
		,"MKFILETYPENM" : ""
		,"MKFILEFORMAT" : ""
		,"MKFILEEXT" : ""
		,"TEMPLATE" : ""
		,"FILEORD" : ""
		,"USEYN" : ""
		,"ADDDT" : ""
		,"MODDT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG7").add(rowData,0);
    $$("wixdtG7").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//사용자정의함수 : 사용자정의
function G7_USERDEF(token){
	alog("G7_USERDEF-----------------start");

	alog("G7_USERDEF-----------------end");
}
//행삭제
function G7_ROWDELETE(tinput,token){
	alog("G7_ROWDELETE()------------start");

    rowId = $$("wixdtG7").getSelectedId(false);
    alog(rowId);
    if(typeof rowId != "undefined"){
        $$("wixdtG7").addRowCss(rowId, "fontStateDelete");

        rowItem = $$("wixdtG7").getItem(rowId);
        rowItem.changeState = true;
        rowItem.changeCud = "deleted";
    }else{
        alert("삭제할 행을 선택하세요.");
    }
}
//엑셀 다운받기 - 렌더링 후값인 NM (FILE)
function G7_EXCEL(tinput,token){
	alog("G7_EXCEL()------------start");

	webix.toExcel($$("wixdtG7"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"FILESEQ": {header: "SEQ"}
,			"MKFILETYPE": {header: "파일타입"}
,			"MKFILETYPENM": {header: "타입명"}
,			"MKFILEFORMAT": {header: "포멧"}
,			"MKFILEEXT": {header: "확장자"}
,			"TEMPLATE": {header: "템플릿"}
,			"FILEORD": {header: "순번"}
,			"USEYN": {header: "사용"}
,			"ADDDT": {header: "ADDDT"}
,			"MODDT": {header: "MODDT"}
			}
		}   
	);


	alog("G7_EXCEL()------------end");
}