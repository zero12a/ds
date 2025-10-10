var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "조회조건"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "AUTH_NM", "COLNM" : "AUTH_NM", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //조회조건
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "디펄트 보유 권한"
			,"KEYCOLID": "DA_SEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "DA_SEQ", "COLNM" : "DA_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_NM", "COLNM" : "AUTH_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //디펄트 보유 권한
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "미보유 권한"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "AUTH_SEQ", "COLNM" : "AUTH_SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_NM", "COLNM" : "AUTH_NM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //미보유 권한
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "rddefaultauthController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "rddefaultauthController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rddefaultauthController?CTLGRP=G1&CTLFNC=RESET";
//조회조건 변수 선언	
var obj_G1_PGMID; // 프로그램ID 변수선언
var obj_G1_MNU_NM; // MNU_NM 변수선언
var obj_G1_AUTH_ID; // AUTH_ID 변수선언
var obj_G1_AUTH_NM; // AUTH_NM 변수선언
//컨트롤러 경로
var url_G3_SEARCH = "rddefaultauthController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_RELOAD = "rddefaultauthController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "rddefaultauthController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_CHKDEL = "rddefaultauthController?CTLGRP=G3&CTLFNC=CHKDEL";
//컨트롤러 경로
var url_G3_EXL = "rddefaultauthController?CTLGRP=G3&CTLFNC=EXL";
//컨트롤러 경로
var url_G3_EXD = "rddefaultauthController?CTLGRP=G3&CTLFNC=EXD";
//그리드 객체
var wixdtG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;
var G3_REQUEST_ON = false;
//컨트롤러 경로
var url_G4_SEARCH = "rddefaultauthController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_RELOAD = "rddefaultauthController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_HIDDENCOL = "rddefaultauthController?CTLGRP=G4&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G4_CHKSAVE = "rddefaultauthController?CTLGRP=G4&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;
var G4_REQUEST_ON = false;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 조회조건
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 디펄트 보유 권한
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");

	$$("wixdtG3").resize();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 미보유 권한
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");

	$$("wixdtG4").resize();

	alog("G4_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
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
	G1_INIT();
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
	//PGMID, 프로그램ID 초기화	
	//MNU_NM, MNU_NM 초기화	
	//AUTH_ID, AUTH_ID 초기화	
	//AUTH_NM, AUTH_NM 초기화	
  alog("G1_INIT()-------------------------end");
}

//디펄트 보유 권한 그리드 초기화
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

	$("#FILE_G3-EXL").on("change", function(e){
		alog("FILE_G3-EXL.change().................start");
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
					$$("wixdtG3").parse(EXCEL_JSON, "json");
					$("#spanG3Cnt").text($$("wixdtG3").count());
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
					   $$("wixdtG3").parse(EXCEL_JSON, "json");

						$("#spanG3Cnt").text($$("wixdtG3").count());

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
					id:"CHK", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG3_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"DA_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:"DA_SEQ"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"프로그램ID"
				},
				{
					id:"MNU_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_NM"
				},
				{
					id:"AUTH_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"AUTH_ID"
				},
				{
					id:"AUTH_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"AUTH_NM"
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD"
				},
				{
					id:"ADD_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"ADD_ID"
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
//미보유 권한 그리드 초기화
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
					id:"CHK", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:50
					, header:{ content:"masterCheckbox", contentId:"mcG4_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"AUTH_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"AUTH_SEQ"
				},
				{
					id:"PGMID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"프로그램ID"
				},
				{
					id:"MNU_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"MNU_NM"
				},
				{
					id:"AUTH_ID", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"AUTH_ID"
				},
				{
					id:"AUTH_NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:90
					, header:"AUTH_NM"
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
				{
					id:"MOD_DT", sort:"string"
					, css:{"text-align":"LEFT"}
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
//D146 그룹별 기능 함수 출력		
//조회조건, 저장	
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
			lastinputG3 = new HashMap(); //디펄트 보유 권한
				lastinputG4 = new HashMap(); //미보유 권한
		//  호출
	G3_SEARCH(lastinputG3,token);
	//  호출
	G4_SEARCH(lastinputG4,token);
	alog("G1_SEARCHALL--------------------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
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
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//디펄트 보유 권한
function G3_CHKDEL(token){
	alog("G3_CHKDEL()------------start");


	var allData = $$("wixdtG3").serialize(true);
    alog(allData);


    var chkData = _.filter(allData,['CHK','1']);
    for(i=0;i<chkData.length;i++){
        chkData[i].changeState = true;
        chkData[i].changeCud = "deleted";
    }
    alog(chkData);
    var myJsonString = JSON.stringify(chkData);
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
	allData = $$("wixdtG3").serialize(true);
	//alog(allData);
	var myJsonString = JSON.stringify(_.filter(allData,['changeState',true]));
	sendFormData.append("G3-JSON",myJsonString);

	$.ajax({
		type : "POST",
		url : url_G3_CHKDEL + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G3_CHKDEL()------------end");
}
//엑셀 다운받기 - 렌더링 후값인 NM (디펄트 보유 권한)
function G3_EXD(tinput,token){
	alog("G3_EXD()------------start");

	webix.toExcel($$("wixdtG3"),{
		filterHTML:true //HTML제거하기 ( 제거안하면 템플릿 html이 모두 출력됨 )
		, columns : {
			"CHK": {header: "CHK"}
,			"DA_SEQ": {header: "DA_SEQ"}
,			"PGMID": {header: "프로그램ID"}
,			"MNU_NM": {header: "MNU_NM"}
,			"AUTH_ID": {header: "AUTH_ID"}
,			"AUTH_NM": {header: "AUTH_NM"}
,			"ADD_DT": {header: "ADD"}
,			"ADD_ID": {header: "ADD_ID"}
			}
		}   
	);


	alog("G3_EXD()------------end");
}//그리드 조회(디펄트 보유 권한)	
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
			msgNotice("[디펄트 보유 권한] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[디펄트 보유 권한] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[디펄트 보유 권한] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[디펄트 보유 권한] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[디펄트 보유 권한] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[디펄트 보유 권한] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//미보유 권한
function G4_CHKSAVE(token){
	alog("G4_CHKSAVE()------------start");


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
//그리드 조회(미보유 권한)	
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
			msgNotice("[미보유 권한] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[미보유 권한] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[미보유 권한] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[미보유 권한] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[미보유 권한] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[미보유 권한] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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
//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
