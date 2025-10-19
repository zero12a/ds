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
			,"GRPNM": "rst3"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "RSTSEQ", "COLNM" : "RSTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "LINK" }
,				{ "COLID": "FILETYPE", "COLNM" : "FILETYPE", "OBJTYPE" : "CODESEARCH" }
,				{ "COLID": "VERSEQ", "COLNM" : "VERSEQ", "OBJTYPE" : "TEXT" }
,				{ "COLID": "SRCORD", "COLNM" : "ORD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SRCTXT", "COLNM" : "TXT", "OBJTYPE" : "POPUP" }
,				{ "COLID": "ADDDT", "COLNM" : "생성일", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //rst3
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "perfwixdtController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "perfwixdtController?CTLGRP=G1&CTLFNC=RESET";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVEA = "perfwixdtController?CTLGRP=G1&CTLFNC=SAVEA";
// 변수 선언	
var obj_G2_FILETYPE_POPUP = null;// FILETYPE 글로벌 변수 선언 - 팝업
//컨트롤러 경로
var url_G2_ELOAD = "perfwixdtController?CTLGRP=G2&CTLFNC=ELOAD";
//컨트롤러 경로
var url_G2_SEARCH = "perfwixdtController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "perfwixdtController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_SV = "perfwixdtController?CTLGRP=G2&CTLFNC=SV";
//컨트롤러 경로
var url_G2_UDEF = "perfwixdtController?CTLGRP=G2&CTLFNC=UDEF";
//컨트롤러 경로
var url_G2_DOWN = "perfwixdtController?CTLGRP=G2&CTLFNC=DOWN";
//컨트롤러 경로
var url_G2_EDOWN = "perfwixdtController?CTLGRP=G2&CTLFNC=EDOWN";
//컨트롤러 경로
var url_G2_HDNCOL = "perfwixdtController?CTLGRP=G2&CTLFNC=HDNCOL";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : rst3
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();

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
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
	tColId = tColIndex;
	//G2, rst3, FILETYPE, FILETYPE
	if( tGrpId == "G2" && tColId == "FILETYPE" ){
		obj_G2_FILETYPE_POPUP = window.open("about:blank","codeSearch_G2_FILETYPE_Pop","width=800px,height=500px,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='FILETYPE' id='FILETYPE' value='" + tValue + "'>");//이 컬럼이 동적으로 FILETYPE 변경되어야 함.	
		frm1.append("<input type=text name='FILETYPE-NM' id='FILETYPE-NM' value='" + tText + "'>");//이 컬럼이 동적으로 FILETYPE 변경되어야 함.	
		
		$("#GRPID").val(tGrpId);
		$("#ROWID").val(tRowId);		
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "pgmsearchwixView.php";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G2_FILETYPE_Pop";
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
	if(tGrpId == "G2" && tColId =="FILETYPE"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		var rowItem = $$("wixdtG2").getItem(tRowId);

		rowItem.FILETYPE = tJsonObj.CD + "^" + tJsonObj.NM;
		//rowItem.changeState = true; // fncDataUpdate 호출되기 때문에 불필요
		//rowItem.changeCud = "updated";

		$$("wixdtG2").updateItem(tRowId, rowItem);

		//$$("wixdtG2").addRowCss(tRowId, "fontStateUpdate");// fncDataUpdate 호출되기 때문에 불필요

		//팝업창 닫기
		if(obj_G2_FILETYPE_POPUP != null)obj_G2_FILETYPE_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
  alog("G1_INIT()-------------------------end");
}

//rst3 그리드 초기화
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

	$("#FILE_G2-ELOAD").on("change", function(e){
		alog("FILE_G2-ELOAD.change().................start");
		var files = e.target.files; //input file 객체를 가져온다.
		var i,f;
		for (i = 0; i != files.length; ++i) {
			f = files[i];
 
			var reader = new FileReader(); //FileReader를 생성한다.    

			if(f.type == "text/csv"){
				//성공적으로 읽기 동작이 완료된 경우 실행되는 이벤트 핸들러를 설정한다.
				reader.onload = function(e) {

					var data = e.target.result; //FileReader 결과 데이터(컨텐츠)를 가져온다.
					
					if (data.charCodeAt(0) != 239) { //BOM check
						alog(data.charCodeAt(0));
						msgNotice("한글이 깨지는 경우 텍스트편집기에서 BOM파일 형식으로 변환바랍니다.",1);
					}
					//바이너리 형태로 엑셀파일을 읽는다.
					var workbook = XLSX.read(data, {type: 'binary',charset:'utf8'});
					//alog(workbook);
					var firstSheetNm = workbook.SheetNames[0];
					var EXCEL_JSON = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetNm]);
					alog(EXCEL_JSON);
					$$("wixdtG2").parse(EXCEL_JSON, "json");
					$("#spanG2Cnt").text($$("wixdtG2").count());
				}; //end onload
	
			}else{
				//성공적으로 읽기 동작이 완료된 경우 실행되는 이벤트 핸들러를 설정한다.
				reader.onload = function(e) {

				   var data = e.target.result; //FileReader 결과 데이터(컨텐츠)를 가져온다.

				   //바이너리 형태로 엑셀파일을 읽는다.
				   var workbook = XLSX.read(data, {type: 'binary'});

				   //엑셀파일의 시트 정보를 읽어서 JSON 형태로 변환한다.
				   workbook.SheetNames.forEach(function(item, index, array) {
					   EXCEL_JSON = XLSX.utils.sheet_to_json(workbook.Sheets[item]);
					   alog(EXCEL_JSON);
					   $$("wixdtG2").parse(EXCEL_JSON, "json");

						$("#spanG2Cnt").text($$("wixdtG2").count());

					});//end. forEach

				}; //end onload

			}

			reader.onloadend = function(e) {
				alog("onloadend");
				alog(e);
			};
			reader.onerror = function(e) {
				alert("onerror");
				alog(e);
			};
			//파일객체를 읽는다. 완료되면 원시 이진 데이터가 문자열로 포함됨.
			reader.readAsBinaryString(f);	


		}//end. for
	
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
					id:"RSTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"RSTSEQ"
				},
				{
					id:"PJTSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
				, hidden: true
					, width:50
					, header:"PJTSEQ"
				},
				{
					id:"PGMSEQ", sort:"string"
					, css:{"text-align":"RIGHT"}
					, width:50
					, header:"PGMSEQ"
					, template: fncTemplateLink
				},
				{
					id:"FILETYPE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"FILETYPE"
					, __GRPID: "G2"
					, template: fncTemplateCodesearch
				},
				{
					id:"VERSEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"VERSEQ"
					, editor:"text"
				},
				{
					id:"SRCORD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"ORD"
				},
				{
					id:"SRCTXT", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:["TXT", {content:"textFilter"}]
					, editor:"popup"
					, template:function(obj){
						return _.replace(_.replace(obj.SRCTXT,/</g,"&lt;"),/>/g,"&gt;");
					}
				},
				{
					id:"ADDDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:200
					, header:"생성일"
				},
				{
					id:"MODDT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
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
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//, S	
function G1_SAVEA(token){
 alog("G1_SAVEA-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G1 getparams	
	allData = $$("wixdtG2").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G2-JSON",myJsonString);
	$.ajax({
		type : "POST",
		url : url_G1_SAVEA+"&TOKEN=" + token ,
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
	alog("G1_SAVEA-------------------end");	
}
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //rst3
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//엑셀 다운받기 - 렌더링 전값인 CD (rst3)
function G2_EDOWN(tinput,token){
	alog("G2_EDOWN()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"RSTSEQ": {header: "RSTSEQ", template: function(o){return o.RSTSEQ} }
,			"PJTSEQ": {header: "PJTSEQ", template: function(o){return o.PJTSEQ} }
,			"PGMSEQ": {header: "PGMSEQ", template: function(o){return o.PGMSEQ} }
,			"FILETYPE": {header: "FILETYPE", template: function(o){return o.FILETYPE} }
,			"VERSEQ": {header: "VERSEQ", template: function(o){return o.VERSEQ} }
,			"SRCORD": {header: "SRCORD", template: function(o){return o.SRCORD} }
,			"SRCTXT": {header: "SRCTXT", template: function(o){return o.SRCTXT} }
,			"ADDDT": {header: "ADDDT", template: function(o){return o.ADDDT} }
,			"MODDT": {header: "MODDT", template: function(o){return o.MODDT} }
			}
		}   
	);


	alog("G2_EDOWN()------------end");
}//사용자정의함수 : H
function G2_HDNCOL(token){
	alog("G2_HDNCOL-----------------start");

	if(isToggleHiddenColG2){
		$$("wixdtG2").hideColumn("PJTSEQ");
		isToggleHiddenColG2 = false;
	}else{
		$$("wixdtG2").showColumn("PJTSEQ");
			isToggleHiddenColG2 = true;
		}

		alog("G2_HDNCOL-----------------end");
	}
//그리드 조회(rst3)	
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
			msgNotice("[rst3] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[rst3] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//엑셀 다운받기 - 렌더링 후값인 NM (rst3)
function G2_DOWN(tinput,token){
	alog("G2_DOWN()------------start");

	webix.toExcel($$("wixdtG2"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"RSTSEQ": {header: "RSTSEQ"}
,			"PJTSEQ": {header: "PJTSEQ"}
,			"PGMSEQ": {header: "PGMSEQ"}
,			"FILETYPE": {header: "FILETYPE"}
,			"VERSEQ": {header: "VERSEQ"}
,			"SRCORD": {header: "ORD"}
,			"SRCTXT": {header: "TXT"}
,			"ADDDT": {header: "생성일"}
,			"MODDT": {header: "MODDT"}
			}
		}   
	);


	alog("G2_DOWN()------------end");
}//사용자정의함수 : 경고
function G2_UDEF(token){
	alog("G2_UDEF-----------------start");
alert('userdef');


	alog("G2_UDEF-----------------end");
}
//rst3
function G2_SV(token){
	alog("G2_SV()------------start");

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
		url : url_G2_SV+"&TOKEN=" + token + "&" + conAllData ,
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
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[rst3] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
				alog(error); //Server don't response
			}

		},
		complete : function() {
			G2_REQUEST_ON = false;
		}

	});
	
	alog("G2_SV()------------end");
}
