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
				{ "COLID": "REDIS_HOST", "COLNM" : "REDIS_HOST", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "REDIS_PORT", "COLNM" : "REDIS_PORT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "REDIS_PASSWORD", "COLNM" : "REDIS_PASSWORD", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDWIX"
			,"GRPNM": "키목록"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "KEY", "COLNM" : "KEY", "OBJTYPE" : "TEXT" }
,				{ "COLID": "VALUE", "COLNM" : "VALUE", "OBJTYPE" : "POPUP" }
			]
		}
); //키목록
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "키상세"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "KEY", "COLNM" : "KEY", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "VALUE", "COLNM" : "VALUE", "OBJTYPE" : "TEXTAREA" }
			]
		}
); //키상세
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "로그"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOG", "COLNM" : "LOG", "OBJTYPE" : "TEXTAREA" }
			]
		}
); //로그
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_Login = "redismngController?CTLGRP=G1&CTLFNC=Login";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SearchMaps = "redismngController?CTLGRP=G1&CTLFNC=SearchMaps";
// 변수 선언	
var obj_G1_REDIS_HOST; // REDIS_HOST 변수선언
var obj_G1_REDIS_PORT; // REDIS_PORT 변수선언
var obj_G1_REDIS_PASSWORD; // REDIS_PASSWORD 변수선언
//컨트롤러 경로
var url_G2_CHKSAVE = "redismngController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "redismngController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "redismngController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "redismngController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "redismngController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "redismngController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_KEY;   // KEY 글로벌 변수 선언
var obj_G3_VALUE;   // VALUE 글로벌 변수 선언
//디테일 변수 초기화	

var isBindEvent_G4 = false; //바인드폼 구성시 이벤트 부여여부
var obj_G4_LOG;   // LOG 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 키목록
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 키상세
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	//null
	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 로그
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	//null
	alog("G4_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
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
	G1_INIT();
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
	//REDIS_HOST, REDIS_HOST 초기화	
	//REDIS_PORT, REDIS_PORT 초기화	
	//REDIS_PASSWORD, REDIS_PASSWORD 초기화	
  alog("G1_INIT()-------------------------end");
}

//키목록 그리드 초기화
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
					id:"CHK", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:{ content:"masterCheckbox", contentId:"mcG2_CHK" }
					, checkValue:'1', uncheckValue:'0', template:"{common.checkbox()}"
				},
				{
					id:"KEY", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:["KEY", {content:"textFilter"}]
					, editor:"text"
				},
				{
					id:"VALUE", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:["VALUE", {content:"textFilter"}]
					, editor:"popup"
					, template:function(obj){
						return _.replace(_.replace(obj.VALUE,/</g,"&lt;"),/>/g,"&gt;");
					}
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
		//아이템클릭정의
		wixdtG2.attachEvent("onItemClick", function(cellData, e, htmlObj){
			alog("wixdtG2.onItemClick()............................start");
			//alog(cellData);
			//alog(e);
			//alog(htmlObj);

			//alert("item click");

			var rowId = cellData.row;
			var rowData = $$("wixdtG2").data.getItem(rowId);

			$("#G3-KEY").val(rowData.KEY);
			$("#G3-VALUE").val();

var sendFormData = new FormData();
sendFormData.append("KEY",rowData.KEY);

	$.ajax({
		type : "POST",
		url : "../cg_configmng_api.php?CTL=getMapOne",
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			alog(tdata);
			$("#G3-VALUE").val(tdata.RTN_DATA);
			$("#G3-CTLCUD").val("R");//수정, 삭제를 위함
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});


			alog("wixdtG2.onItemClick()............................end");
		});

	});//webix.ready end
	alog("G2_INIT()-------------------------end");
}
//디테일 초기화	
//키상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//KEY, KEY 초기화	
	//VALUE, VALUE 초기화
  alog("G3_INIT()-------------------------end");
}
//디테일 초기화	
//로그 폼뷰 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");
	//컬럼 초기화
	//LOG, LOG 초기화
  alog("G4_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//사용자정의함수 : 키목록 조회
function G1_SearchMaps(token){
	alog("G1_SearchMaps-----------------start");
	//post 만들기
	sendFormData = new FormData();

	$$('wixdtG2').clearAll();

	$.ajax({
		type : "POST",
		url : "../cg_configmng_api.php?CTL=getMapList&TOKEN=" + token,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			alog(tdata);
			$("#G4-LOG").val(tdata.RTN_MSG + "\n" + $("#G4-LOG").val());
			$$("wixdtG2").parse(tdata.RTN_DATA,"json");
			$("#spanG2Cnt").text(tdata.RTN_DATA.length);
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
	alog("G1_SearchMaps-----------------end");
}
//사용자정의함수 : 로그인
function G1_Login(token){
	alog("G1_Login-----------------start");
	//post 만들기
	sendFormData = new FormData();

	sendFormData.append("REDIS_HOST",$("#G1-REDIS_HOST").val());
	sendFormData.append("REDIS_PORT",$("#G1-REDIS_PORT").val());
	sendFormData.append("REDIS_PASSWORD",$("#G1-REDIS_PASSWORD").val());

	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP

	$.ajax({
		type : "POST",
		url : "../cg_configmng_api.php?CTL=loginRedis&TOKEN=" + token,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			alog(tdata);
			$("#G4-LOG").val( tdata.RTN_MSG + "\n" + $("#G4-LOG").val() );
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});
	alog("G1_Login-----------------end");
}
//사용자정의함수 : 선택저장
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE-----------------start");

	alog("G2_CHKSAVE-----------------end");
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
			$("#G3-KEY").val(data.RTN_DATA.KEY);//KEY 변수세팅
		$("#G3-VALUE").val(data.RTN_DATA.VALUE);//VALUE 오브젝트 값세팅
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
	$("#G3-KEY").val("");//KEY 신규초기화	
	$("#G3-VALUE").val("");//VALUE 신규초기화
	alog("DETAILNew30---------------end");
}
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}//사용자정의함수 : 저장
function G3_SAVE(token){
	alog("G3_SAVE-----------------start");
	if(!confirm("정말로 저장하시겠습니까?"))return;

	sendFormData = new FormData();
	sendFormData.append("KEY", $("#G3-KEY").val() );
	sendFormData.append("VAL", $("#G3-VALUE").val() );

	$.ajax({
		type : "POST",
		url : "../cg_configmng_api.php?CTL=setMapOne&TOKEN=" + token,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			alog(tdata);
			$("#G4-LOG").val( tdata.RTN_MSG + "\n" + $("#G4-LOG").val() );
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});

	alog("G3_SAVE-----------------end");
}
//사용자정의함수 : 삭제
function G3_DELETE(token){
	alog("G3_DELETE-----------------start");
	if(!confirm("정말로 삭제하시겠습니까?"))return;

	sendFormData = new FormData();
	sendFormData.append("KEY", $("#G3-KEY").val() );

	$.ajax({
		type : "POST",
		url : "../cg_configmng_api.php?CTL=delMapOne&TOKEN=" + token,
		data : sendFormData,
		processData: false,
		contentType: false,
		dataType: "json",
		success: function(tdata){
			alog(tdata);
			$("#G4-LOG").val( tdata.RTN_MSG + "\n" + $("#G4-LOG").val() );
		},
		error: function(error){
			alog("Error:");
			alog(error);
		}
	});

	alog("G3_DELETE-----------------end");
}
