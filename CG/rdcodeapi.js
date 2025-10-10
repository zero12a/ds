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
				{ "COLID": "PCD", "COLNM" : "PCD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CD", "COLNM" : "CD", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "조회결과"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CD", "COLNM" : "CD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "NM", "COLNM" : "NM", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //조회결과
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "CDD"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CODED_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CD", "COLNM" : "CD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "NM", "COLNM" : "NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDDESC", "COLNM" : "CDDESC", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PCD", "COLNM" : "PCD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDVAL", "COLNM" : "CDVAL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDVAL2", "COLNM" : "CDVAL2", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDMIN", "COLNM" : "CDMIN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDMAX", "COLNM" : "CDMAX", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DATATYPE", "COLNM" : "데이터타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "EDITYN", "COLNM" : "EDITYN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FORMATYN", "COLNM" : "FORMATYN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "생성일", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //CDD
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_sCodeD = "rdcodeapiController?CTLGRP=G1&CTLFNC=sCodeD";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "rdcodeapiController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_PCD; // PCD 변수선언
var obj_G1_CD; // CD 변수선언
//컨트롤러 경로
var url_G2_SEARCH = "rdcodeapiController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "rdcodeapiController?CTLGRP=G2&CTLFNC=RELOAD";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "rdcodeapiController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "rdcodeapiController?CTLGRP=G3&CTLFNC=RELOAD";
var obj_G3_CODED_SEQ;   // SEQ 글로벌 변수 선언
var obj_G3_CD;   // CD 글로벌 변수 선언
var obj_G3_NM;   // NM 글로벌 변수 선언
var obj_G3_CDDESC;   // CDDESC 글로벌 변수 선언
var obj_G3_PCD;   // PCD 글로벌 변수 선언
var obj_G3_ORD;   // ORD 글로벌 변수 선언
var obj_G3_CDVAL;   // CDVAL 글로벌 변수 선언
var obj_G3_CDVAL2;   // CDVAL2 글로벌 변수 선언
var obj_G3_CDMIN;   // CDMIN 글로벌 변수 선언
var obj_G3_CDMAX;   // CDMAX 글로벌 변수 선언
var obj_G3_DATATYPE;   // 데이터타입 글로벌 변수 선언
var obj_G3_EDITYN;   // EDITYN 글로벌 변수 선언
var obj_G3_FORMATYN;   // FORMATYN 글로벌 변수 선언
var obj_G3_USEYN;   // 사용 글로벌 변수 선언
var obj_G3_DELYN;   // 삭제YN 글로벌 변수 선언
var obj_G3_ADDDT;   // 생성일 글로벌 변수 선언
var obj_G3_MODDT;   // MODDT 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 조회결과
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : CDD
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
	//PCD, PCD 초기화	
	$("#G1-PCD").attr( "placeholder", "CDD, sCodeD" );
	//CD, CD 초기화	
  alog("G1_INIT()-------------------------end");
}

//조회결과 그리드 초기화
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
					id:"CD", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:40
					, header:"CD"
				},
				{
					id:"NM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"NM"
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
//디테일 초기화	
//CDD 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//CODED_SEQ, SEQ 초기화	
	//CD, CD 초기화	
	//NM, NM 초기화	
	//CDDESC, CDDESC 초기화	
	//PCD, PCD 초기화	
	//ORD, ORD 초기화	
	//CDVAL, CDVAL 초기화	
	//CDVAL2, CDVAL2 초기화	
	//CDMIN, CDMIN 초기화	
	//CDMAX, CDMAX 초기화	
	//DATATYPE, 데이터타입 초기화	
	//EDITYN, EDITYN 초기화	
	//FORMATYN, FORMATYN 초기화	
	//USEYN, 사용 초기화	
	//DELYN, 삭제YN 초기화	
	//ADDDT, 생성일 초기화
	//MODDT, MODDT 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G1_sCodeD(token){
	alog("G1_sCodeD--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //조회결과
				lastinputG3 = new HashMap(); //CDD
		//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G3_SEARCH(lastinputG3,token);
	alog("G1_SEARCHALL--------------------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 조회(조회결과)	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");

	if(G2_REQUEST_ON == true){
		alert("이전 요청을 서버에서 처리 중입니다. 잠시 기다려 주세요.");
		return;
	}
	G2_REQUEST_ON = true;


    $$("wixdtG2").clearAll();
	wixdtG2.markSorting("",""); //정렬 arrow 클리어
	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
			msgNotice("[조회결과] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[조회결과] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[조회결과] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[조회결과] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[조회결과] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[조회결과] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//디테일 검색	
function G3_SEARCH(tinput,token){
       alog("(FORMVIEW) G3_SEARCH---------------start");

	//get 만들기
	sendFormData = new FormData();//빈 formdata만들기
	var conAllData = $( "#condition" ).serialize();
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
			$("#G3-CODED_SEQ").val(data.RTN_DATA.CODED_SEQ);//SEQ 변수세팅
			$("#G3-CD").val(data.RTN_DATA.CD);//CD 변수세팅
			$("#G3-NM").val(data.RTN_DATA.NM);//NM 변수세팅
			$("#G3-CDDESC").val(data.RTN_DATA.CDDESC);//CDDESC 변수세팅
			$("#G3-PCD").val(data.RTN_DATA.PCD);//PCD 변수세팅
			$("#G3-ORD").val(data.RTN_DATA.ORD);//ORD 변수세팅
			$("#G3-CDVAL").val(data.RTN_DATA.CDVAL);//CDVAL 변수세팅
			$("#G3-CDVAL2").val(data.RTN_DATA.CDVAL2);//CDVAL2 변수세팅
			$("#G3-CDMIN").val(data.RTN_DATA.CDMIN);//CDMIN 변수세팅
			$("#G3-CDMAX").val(data.RTN_DATA.CDMAX);//CDMAX 변수세팅
			$("#G3-DATATYPE").val(data.RTN_DATA.DATATYPE);//데이터타입 변수세팅
			$("#G3-EDITYN").val(data.RTN_DATA.EDITYN);//EDITYN 변수세팅
			$("#G3-FORMATYN").val(data.RTN_DATA.FORMATYN);//FORMATYN 변수세팅
			$("#G3-USEYN").val(data.RTN_DATA.USEYN);//사용 변수세팅
			$("#G3-DELYN").val(data.RTN_DATA.DELYN);//삭제YN 변수세팅
	$("#G3-ADDDT").text(data.RTN_DATA.ADDDT);//생성일 변수세팅
	$("#G3-MODDT").text(data.RTN_DATA.MODDT);//MODDT 변수세팅
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