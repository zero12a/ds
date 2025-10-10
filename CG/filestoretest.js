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
			,"GRPNM": "G1"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "API_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MYFILE", "COLNM" : "MYFILE", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MYFILESVRNM", "COLNM" : "MYFILESVRNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "MYSIGNSVRNM", "COLNM" : "MYSIGNSVRNM", "OBJTYPE" : "TEXT" }
,				{ "COLID": "WEJODIT", "COLNM" : "JODIT", "OBJTYPE" : "POPUP" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //G1
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "G2"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "API_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MYFILE1", "COLNM" : "MYFILE", "OBJTYPE" : "FILE" }
,				{ "COLID": "MYFILE", "COLNM" : "MYFILE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MYFILESVRNM", "COLNM" : "MYFILESVRNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "IMG1", "COLNM" : "이미지1", "OBJTYPE" : "IMGVIEWER" }
,				{ "COLID": "IMG2", "COLNM" : "이미지2", "OBJTYPE" : "IMGVIEWER" }
,				{ "COLID": "MYSIGN2", "COLNM" : "SIGN", "OBJTYPE" : "SIGNPAD" }
,				{ "COLID": "WEJODIT", "COLNM" : "JODIT", "OBJTYPE" : "WEJODIT" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //G2
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "filestoretestController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "filestoretestController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "filestoretestController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "filestoretestController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
//컨트롤러 경로
var url_G2_SEARCH = "filestoretestController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_ROWADD = "filestoretestController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "filestoretestController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_EDITMODE = "filestoretestController?CTLGRP=G2&CTLFNC=EDITMODE";
//그리드 객체
var wixdtG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;
var G2_REQUEST_ON = false;
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "filestoretestController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "filestoretestController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "filestoretestController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "filestoretestController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "filestoretestController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "filestoretestController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_API_SEQ;   // SEQ 글로벌 변수 선언
var obj_G3_MYFILE1;   // MYFILE 글로벌 변수 선언
var obj_G3_MYFILE;   // MYFILE 글로벌 변수 선언
var obj_G3_MYFILESVRNM;   // MYFILESVRNM 글로벌 변수 선언
var obj_G3_IMG1;   // 이미지1 글로벌 변수 선언
var obj_G3_IMG2;   // 이미지2 글로벌 변수 선언
var obj_G3_MYSIGN2;   // SIGN 글로벌 변수 선언
var obj_G3_WEJODIT;   // JODIT 글로벌 변수 선언
var obj_G3_ADD_DT;   // ADD 글로벌 변수 선언
var signaturePad_G3_MYSIGN2;
	var jodit_G3_WEJODIT;//{G.GRPID-WEJODIT initval
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : G1
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");

	$$("wixdtG2").resize();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : G2
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

//G1 그리드 초기화
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
					id:"API_SEQ", sort:"int"
					, css:{"text-align":"LEFT"}
					, width:60
					, header:"SEQ"
				},
				{
					id:"MYFILE", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:120
					, header:"MYFILE"
					, editor:"text"
				},
				{
					id:"MYFILESVRNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, fillspace: true
					, header:"MYFILESVRNM"
					, editor:"text"
				},
				{
					id:"MYSIGNSVRNM", sort:"string"
					, css:{"text-align":"LEFT"}
					, width:100
					, header:"MYSIGNSVRNM"
					, editor:"text"
				},
				{
					id:"WEJODIT", sort:"string"
					, css:{"text-align":"RIGHT"}
					, width:100
					, header:"JODIT"
					, editor:"popup"
					, template:function(obj){
						return _.replace(_.replace(obj.WEJODIT,/</g,"&lt;"),/>/g,"&gt;");
					}
				},
				{
					id:"ADD_DT", sort:"string"
					, css:{"text-align":"CENTER"}
					, width:60
					, header:"ADD"
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
				', "G2-API_SEQ" : "' + rowData.API_SEQ + '"' +
			'}');
			lastinputG3 = new HashMap(); // G2
			lastinputG3.set("__ROWID",rowData.uid);
			lastinputG3.set("G2-API_SEQ",rowData.API_SEQ); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : G2
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
//G2 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//API_SEQ, SEQ 초기화
	//MYFILE1, MYFILE 초기화	
	//MYFILE, MYFILE 초기화	
	//MYFILESVRNM, MYFILESVRNM 초기화	
	//IMG1, 이미지1 초기화	
	//IMG2, 이미지2 초기화	
	canvas_G3_MYSIGN2 = document.getElementById('signpad_canvas_G3_MYSIGN2');

	signaturePad_G3_MYSIGN2 = new SignaturePad(canvas_G3_MYSIGN2, {
        backgroundColor: 'rgb(255, 255, 255)' // necessary for saving image as JPEG; can be removed is only saving as PNG or SVG
    });
	$( "#clear_G3_MYSIGN2" ).click(function() {        
        signaturePad_G3_MYSIGN2.clear();
    });

    $( "#undo_G3_MYSIGN2" ).click(function() {      
        var data = signaturePad_G3_MYSIGN2.toData();

        if (data) {
            data.pop(); // remove the last dot or line
            signaturePad_G3_MYSIGN2.fromData(data);
        }
    });
    zoomStep = 30;

	$( "#zoomout_G3_MYSIGN2" ).click(function() {       
        var data = signaturePad_G3_MYSIGN2.toData();

        oldWidth1 = $("#signpad_div_G3_MYSIGN2").width();
        oldWidth2 = $("#signpad_canvas_G3_MYSIGN2").attr('width');
        if(parseInt(oldWidth1, 10) - zoomStep < 10)return;

        alog("oldWidth1=" + oldWidth1 + ", oldWidth2=" + oldWidth1);
        $("#signpad_div_G3_MYSIGN2").width((parseInt(oldWidth1, 10)-zoomStep) + "px");
        $("#signpad_canvas_G3_MYSIGN2").attr('width',(parseInt(oldWidth2, 10)-zoomStep) + "px");

  		oldHeight1 = $("#signpad_div_G3_MYSIGN2").height();
        oldHeight2 = $("#signpad_canvas_G3_MYSIGN2").attr('height');
        if(parseInt(oldHeight1, 10) - zoomStep < 10)return;

        alog("oldHeight1=" + oldHeight1 + ", oldHeight2=" + oldHeight2);        
        $("#signpad_div_G3_MYSIGN2").height((parseInt(oldHeight1, 10)-zoomStep) + "px");
        $("#signpad_canvas_G3_MYSIGN2").attr('height',(parseInt(oldHeight2, 10)-zoomStep) + "px");

		signaturePad_G3_MYSIGN2.fromData(data);
	});
    $( "#zoomin_G3_MYSIGN2" ).click(function() {    
        var data = signaturePad_G3_MYSIGN2.toData();

        oldWidth1 = $("#signpad_div_G3_MYSIGN2").width();
        oldWidth2 = $("#signpad_canvas_G3_MYSIGN2").attr('width');

        alog("oldWidth1=" + oldWidth1 + ", oldWidth2=" + oldWidth1);        
        $("#signpad_div_G3_MYSIGN2").width((parseInt(oldWidth1, 10)+zoomStep) + "px");
        $("#signpad_canvas_G3_MYSIGN2").attr('width',(parseInt(oldWidth2, 10)+zoomStep) + "px");

        oldHeight1 = $("#signpad_div_G3_MYSIGN2").height();
        oldHeight2 = $("#signpad_canvas_G3_MYSIGN2").attr('height');

        alog("oldHeight1=" + oldHeight1 + ", oldHeight2=" + oldHeight2);         
        $("#signpad_div_G3_MYSIGN2").height((parseInt(oldHeight1, 10)+zoomStep) + "px");
        $("#signpad_canvas_G3_MYSIGN2").attr('height',(parseInt(oldHeight2, 10)+zoomStep) + "px");

		signaturePad_G3_MYSIGN2.fromData(data);
	});
		//jodit init
        jodit_G3_WEJODIT = new Jodit('#G3-WEJODIT',{
            enableDragAndDropFileToEditor: true,
			showPlaceholder: false,
        	placeholder: '',
			width: "300",
            height: "200", 
            buttons: [ 'undo', 'redo', '|','bold', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'brush', 'paragraph', '|','image', 'video', 'table', 'link', '|', 'left', 'center', 'right', 'justify', '|',  'hr', 'eraser', 'fullsize','source'],
            uploader: {
                url: '/common/cg_upload_jodit.php?action=fileUpload&storeid=LOCAL_1',
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

		jodit_G3_WEJODIT.value = "<p></p>";
	//ADD_DT, ADD 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //G1
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
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
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
		,"API_SEQ" : ""
		,"MYFILE" : ""
		,"MYFILESVRNM" : ""
		,"MYSIGNSVRNM" : ""
		,"WEJODIT" : ""
		,"ADD_DT" : ""
		, changeState: true
		, changeCud: "inserted"
	};


	$$("wixdtG2").add(rowData,0);
    $$("wixdtG2").addRowCss(rowId, "fontStateInsert");
    alog("add row rowId : " + rowId);
}
//그리드 조회(G1)	
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
			msgNotice("[G1] 조회 성공했습니다. ("+row_cnt+"건)",1);

			}else{
				msgError("[G1] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
			}
		},
		error: function(error){

			alog("Response ajax error occer.");
			if(error.status == 200){
				msgError("[G1] Ajax http error ( Response status is " + error.status + ", Not json format, Check console log )", 3);
				alog("	responseText" + error.responseText);//not json format
			}else if(error.status == 500){
				msgError("[G1] Ajax http error ( Response status is " + error.status + ", Server error occer, Check console log )", 3);
				alog("	responseText" + error.responseText); //Server don't response
			}else if(error.status == 0){
				msgError("[G1] Ajax http error ( Response status is " + error.status + ", Server don't resonse, Check console log )", 3);
				alog("	responseJSON = " + error.responseJSON); //Server don't response
			}else{
				msgError("[G1] Ajax http error ( Response status is " + error.status + ", Server unknown resonse, Check console log )", 3);
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

//FORMVIEW DELETE
function G3_DELETE(token){
	alog("G3_DELETE---------------start");

	//조회했는지 확인하기
	if( $("#G3-CTLCUD").val() != "R" ){
		alert("조회된 것만 삭제 가능합니다.");
		return;
	}
	//확인
	if(!confirm("정말로 삭제하시겠습니까?")){
		return;
	}
	
	//삭제처리 명령어
	$("#G3-CTLCUD").val("D");
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG3 != "undefined" && lastinputG3 != null ){
		var tKeys = lastinputG3.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG3.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG3.get(tKeys[i])); 
		}
	}

	$.ajax({
		type : "POST",
		url : url_G3_DELETE + "&TOKEN=" + token + "&" + conAllData,
		data : sendFormData,
		processData: false,
		contentType: false,
		success: function(tdata){
			alog(tdata);
			data = jQuery.parseJSON(tdata);
			//alert(data);
			if(data && data.RTN_CD == "200"){
				if(typeof(data.GRP_DATA) == "undefined" || data.GRP_DATA[0] == null || typeof(data.GRP_DATA[0].RTN_DATA) == "undefined"){
					msgNotice("오류를 발생하지 않았으나, 처리 내역이 없습니다.(GRP_DATA is null, SQL미등록)",1);
				}else{
					affectedRows = data.GRP_DATA[0].RTN_DATA;
					msgNotice("정상적으로 삭제되었습니다. [영향받은건수:" + affectedRows + "]",1);
				}
			}else{
				msgError("오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
			}
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
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
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
	$("#G3-API_SEQ").text(data.RTN_DATA.API_SEQ);//SEQ 변수세팅
		if(data.RTN_DATA.MYFILE1){
			var tarr = data.RTN_DATA.MYFILE1.split("^");//CD^NM
			if(tarr.length == 2){
				var fileNm = tarr[1] ;
				if(fileNm != ""){
					$("#G3-MYFILE1-LINK").attr("href",tarr[0]);//MYFILE 링크세팅
					$("#G3-MYFILE1-NM").text(fileNm);//MYFILE 파일이름세팅
					$("#DIV-G3-MYFILE1").css("display", ""); //영역보이기
				}else{
					alog("MYFILE1 MYFILE 파일 이름이 없습니다.");
				}
			}else{
				alert("G3-MYFILE1 값이 멀티값이 아닙니다.");
			}
		}else{
			$("#G3-MYFILE1").val("");//값 비우기
			$("#G3-MYFILE1-LINK").attr("href","");//MYFILE 링크세팅
			$("#G3-MYFILE1-NM").text("");//MYFILE 파일이름세팅

			$("#DIV-G3-MYFILE1").css("display", "none"); //영역숨기기
			alog("G3-MYFILE1 값이 없습니다..");
		}
			$("#G3-MYFILE").val(data.RTN_DATA.MYFILE);//MYFILE 변수세팅
			$("#G3-MYFILESVRNM").val(data.RTN_DATA.MYFILESVRNM);//MYFILESVRNM 변수세팅
			//IMAGE VIEWER ( format : thumb_url:real_url,thumb_url:real_url )
			$("#G3-IMG1-HOLDER").html(""); //기존값 비우기
			if(data.RTN_DATA.IMG1){
				var tArray1 = data.RTN_DATA.IMG1.split(",");
				if(data.RTN_DATA.IMG1 && tArray1.length > 0){
					for(var t=0;t<tArray1.length;t++){
						var tArray2 = tArray1[t].split("^");//0 thumb, 1 real
						$("#G3-IMG1-HOLDER").append("<span><a href='" + tArray2[0] + "' target='_blank'><img class='FORMVIEW_IMGVIEWER_IMG' src='" + tArray2[1] + "' height='50px'></a></span>"); 						
					}
				}
			}
			//IMAGE VIEWER ( format : thumb_url:real_url,thumb_url:real_url )
			$("#G3-IMG2-HOLDER").html(""); //기존값 비우기
			if(data.RTN_DATA.IMG2){
				var tArray1 = data.RTN_DATA.IMG2.split(",");
				if(data.RTN_DATA.IMG2 && tArray1.length > 0){
					for(var t=0;t<tArray1.length;t++){
						var tArray2 = tArray1[t].split("^");//0 thumb, 1 real
						$("#G3-IMG2-HOLDER").append("<span><a href='" + tArray2[0] + "' target='_blank'><img class='FORMVIEW_IMGVIEWER_IMG' src='" + tArray2[1] + "' height='50px'></a></span>"); 						
					}
				}
			}
			//(SetVal) SIGN
			var img = new Image();
			img.crossOrigin = 'Anonymous';
			img.onload = function () {
				signaturePad_G3_MYSIGN2.clear();
				canvas_G3_MYSIGN2.getContext('2d').drawImage(img, 0, 0);
			};
			img.onerror = function() {
				alog("Error occurred while loading image");
				signaturePad_G3_MYSIGN2.clear();

				//this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; //blank image
			};
			alog(data.RTN_DATA.MYSIGN2);
			img.src = data.RTN_DATA.MYSIGN2;
	var val = data.RTN_DATA.WEJODIT; //JODIT
	jodit_G3_WEJODIT.value = val;
	$("#G3-ADD_DT").text(data.RTN_DATA.ADD_DT);//ADD 변수세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
//G3_SAVE
//IO_FILE_YN = V/, G/Y	
//IO_FILE_YN = Y	
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
	//폼에 파일 유무 : Y
	sendFormData.append("G3-CTLCUD",$("#G3-CTLCUD").val());
	if($("#G3_MYFILE1").val() != ""){
		sendFormData.append("G3-MYFILE1",$("input[name=G3-MYFILE1]")[0].files[0]);
	}
	sendFormData.append("G3-MYFILE",$("#G3-MYFILE").val());	//MYFILE 전송객체에 넣기
	sendFormData.append("G3-MYFILESVRNM",$("#G3-MYFILESVRNM").val());	//MYFILESVRNM 전송객체에 넣기
	//SIGN 전송객체에 넣기
	if (signaturePad_G3_MYSIGN2.isEmpty()) {
		tData = "";            
	}else{
		tData =  signaturePad_G3_MYSIGN2.toDataURL('image/png');
	}

	sendFormData.append("G3-MYSIGN2",tData);
	sendFormData.append("G3-WEJODIT",jodit_G3_WEJODIT.value); //JODIT

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
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-API_SEQ").text("");//SEQ 신규초기화
	$("#G3-MYFILE1-LINK").attr("href","");//MYFILE NEW
	$("#G3-MYFILE1-NM").text("");//MYFILE NEW
	$("#G3-MYFILE").val("");//MYFILE 신규초기화	
	$("#G3-MYFILESVRNM").val("");//MYFILESVRNM 신규초기화	
	$("#G3-IMG1").html("");
	$("#G3-IMG2").html("");
	signaturePad_G3_MYSIGN2.clear();
	jodit_G3_WEJODIT.value = "";
	$("#G3-ADD_DT").text("");//ADD 신규초기화
	alog("DETAILNew30---------------end");
}
