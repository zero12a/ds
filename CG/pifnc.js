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
				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "FNCID", "COLNM" : "FNCID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCNM", "COLNM" : "FNCNM", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDBT"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCSEQ", "COLNM" : "FNCSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCID", "COLNM" : "FNCID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCCD", "COLNM" : "FNCCD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCNM", "COLNM" : "FNCNM", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCTYPE", "COLNM" : "FNCTYPE", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "FNCORD", "COLNM" : "FNCORD", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USERDEFJS", "COLNM" : "USERDEFJS", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "LINK", "COLNM" : "LINK", "OBJTYPE" : "LINK" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
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
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCSEQ", "COLNM" : "FNCSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCID", "COLNM" : "FNCID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCCD", "COLNM" : "FNCCD", "OBJTYPE" : "COMBO" }
,				{ "COLID": "FNCNM", "COLNM" : "FNCNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCTYPE", "COLNM" : "FNCTYPE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNCORD", "COLNM" : "FNCORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTRADIO" }
,				{ "COLID": "USERDEFJS", "COLNM" : "USERDEFJS", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "pifncController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "pifncController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "pifncController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "pifncController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_GRPSEQ; // GRPSEQ 변수선언
var obj_G1_PJTSEQ; // PJTSEQ 변수선언
var obj_G1_PGMSEQ; // PGMSEQ 변수선언
var obj_G1_FNCID; // FNCID 변수선언
var obj_G1_FNCNM; // FNCNM 변수선언
var $btG2 = null; //
	//컨트롤러 경로 s
	var url_G2_USERDEF = "pifncController?CTLGRP=G2&CTLFNC=USERDEF";
	//컨트롤러 경로 s
	var url_G2_SEARCH = "pifncController?CTLGRP=G2&CTLFNC=SEARCH";
	//컨트롤러 경로 s
	var url_G2_RELOAD = "pifncController?CTLGRP=G2&CTLFNC=RELOAD";
	//컨트롤러 경로 s
	var url_G2_EXCEL = "pifncController?CTLGRP=G2&CTLFNC=EXCEL";
	//컨트롤러 경로 s
	var url_G2_CHKSAVE = "pifncController?CTLGRP=G2&CTLFNC=CHKSAVE";
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_USERDEF = "pifncController?CTLGRP=G3&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "pifncController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "pifncController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "pifncController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "pifncController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "pifncController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "pifncController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_PJTSEQ;   // PJTSEQ 글로벌 변수 선언
var obj_G3_PGMSEQ;   // PGMSEQ 글로벌 변수 선언
var obj_G3_GRPSEQ;   // GRPSEQ 글로벌 변수 선언
var obj_G3_FNCSEQ;   // FNCSEQ 글로벌 변수 선언
var obj_G3_FNCID;   // FNCID 글로벌 변수 선언
var obj_G3_FNCCD;   // FNCCD 글로벌 변수 선언
var obj_G3_FNCNM;   // FNCNM 글로벌 변수 선언
var obj_G3_FNCTYPE;   // FNCTYPE 글로벌 변수 선언
var obj_G3_FNCORD;   // FNCORD 글로벌 변수 선언
var obj_G3_USEYN;   // 사용 글로벌 변수 선언
var obj_G3_USERDEFJS;   // USERDEFJS 글로벌 변수 선언
var obj_G3_ADDDT;   // ADDDT 글로벌 변수 선언
var obj_G3_MODDT;   // MODDT 글로벌 변수 선언
var codeMirrorFontSizeG3Userdefjs = 11; // USERDEFJS
//USERDEFJS
function changeCodemirrorFontSizeG3Userdefjs(sizeCmd){
	alog("changeCodemirrorFontSizeG3Userdefjs..........start " + sizeCmd);

	if(sizeCmd == "+"){
		codeMirrorFontSizeG3Userdefjs  = codeMirrorFontSizeG3Userdefjs  + 2;
	}else{
		codeMirrorFontSizeG3Userdefjs  = codeMirrorFontSizeG3Userdefjs  - 2;
	}

	$(".CodeMirror").css('font-size',codeMirrorFontSizeG3Userdefjs  + "px");

	obj_G3_USERDEFJS.refresh();
	alog("changeCodemirrorFontSizeG3Userdefjs..........end");   
}
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
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
	//FNCID, FNCID 초기화	
	//GRPSEQ, GRPSEQ 초기화	
	//PGMSEQ, PGMSEQ 초기화	
	//PJTSEQ, PJTSEQ 초기화	
	//FNCNM, FNCNM 초기화	
  alog("G1_INIT()-------------------------end");
}

// 그리드 초기화
function G2_INIT(){
	alog("G2_INIT()-------------------------start");
	$btG2 = $('#btG2').bootstrapTable();

	/*
	$btG2 = $('#btG2').bootstrapTable({
		columns:[
			{
				field: 'ROWID',
				title: 'ROWID',
				checkbox: false,
				visible: false,
				sortable: false,
				align: 'center',
				valign: 'middle',
			}
			,{
			field: 'PJTSEQ',
			title: 'PJTSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'PGMSEQ',
			title: 'PGMSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'GRPSEQ',
			title: 'GRPSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCSEQ',
			title: 'FNCSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCID',
			title: 'FNCID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCCD',
			title: 'FNCCD',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCNM',
			title: 'FNCNM',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCTYPE',
			title: 'FNCTYPE',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'FNCORD',
			title: 'FNCORD',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'USEYN',
			title: '사용',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'USERDEFJS',
			title: 'USERDEFJS',
			sortable: true,
			align: '',
			valign: 'middle'
			}
			,{
			field: 'LINK',
			title: 'LINK',
			sortable: true,
			align: 'left',
			formatter:'bt4TableLinkFormatter',
			valign: 'middle'
			}
			,{
			field: 'ADDDT',
			title: 'ADDDT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'MODDT',
			title: 'MODDT',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
]
	});
*/	$btG2.on('click-row.bs.table', function (e, row, $element) {
		//    alert(row.myid);
		//alert(JSON.stringify(row))

		lastinputG3 = new HashMap(); // 
		lastinputG3.set("G2-PJTSEQ", row.PJTSEQ); // 
		lastinputG3.set("G2-PGMSEQ", row.PGMSEQ); // 
		lastinputG3.set("G2-GRPSEQ", row.GRPSEQ); // 
		lastinputG3.set("G2-FNCSEQ", row.FNCSEQ); // 
		G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 
		//    //alog(field);
		});
}
//디테일 초기화	
// 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//PJTSEQ, PJTSEQ 초기화	
	$("#G3-PJTSEQ").attr("readonly",true);
	$("#G3-PJTSEQ").attr("disabled",true);
	//PGMSEQ, PGMSEQ 초기화	
	$("#G3-PGMSEQ").attr("readonly",true);
	$("#G3-PGMSEQ").attr("disabled",true);
	//GRPSEQ, GRPSEQ 초기화	
	$("#G3-GRPSEQ").attr("readonly",true);
	$("#G3-GRPSEQ").attr("disabled",true);
	//FNCSEQ, FNCSEQ 초기화	
	$("#G3-FNCSEQ").attr("readonly",true);
	$("#G3-FNCSEQ").attr("disabled",true);
	//FNCID, FNCID 초기화	
setCodeCombo("FORMVIEW",$("#G3-FNCCD"),"FNC");

	//FNCNM, FNCNM 초기화	
	//FNCTYPE, FNCTYPE 초기화	
	//FNCORD, FNCORD 초기화	
	//USEYN, 사용 초기화	
setCodeRadio("FORMVIEW", "G3-USEYN", "YN","");
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_USERDEFJS = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-USERDEFJS'), {
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
	obj_G3_USERDEFJS.setSize("400","274");
	//ADDDT, ADDDT 초기화
	//MODDT, MODDT 초기화
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
			lastinputG2 = new HashMap(); //
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//사용자정의함수 : 사용자정의
function G2_USERDEF(token){
	alog("G2_USERDEF-----------------start");

	alog("G2_USERDEF-----------------end");
}
// 엑셀 내려받기
function G2_EXCEL(){
	alog("G2_EXCEL()-------------------------start");

	$btG2.tableExport({type:'excel'});

	alog("G2_EXCEL()------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 조회()	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");
	$("#spanG2Cnt").text("");
	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	if(typeof tinput != "undefined"){
		var tKeys = tinput.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],tinput.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ tinput.get(tKeys[i])); 
		}
	}
	$btG2.bootstrapTable('showLoading');

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

			$btG2.bootstrapTable('hideLoading');

			//그리드에 데이터 반영
			if(data.RTN_CD == "200"){
				var row_cnt = 0;
				if(data.RTN_DATA){
					row_cnt = data.RTN_DATA.rows.length;
					$("#spanG2Cnt").text(row_cnt);
					$btG2.bootstrapTable('removeAll'); //모두 지우기
					$btG2.bootstrapTable('load', data.RTN_DATA.rows);

					}else{
						$("#spanG2Cnt").text("-");
					}
					msgNotice("[] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[] Ajax http 500 error ( " + error + " )",3);
                alog("[] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
		alog("G2_SEARCH()------------end");
}

//
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE()------------start");

	var jsonSelectedRows = $btG2.bootstrapTable('getSelections');
	var strSelectedRowsIds = "";

	for(i=0;i<jsonSelectedRows.length;i++){
		if(i>0) strSelectedRowsIds += ",";


		strSelectedRowsIds += jsonSelectedRows[i].FNCSEQ;
	}
        //전송용 post 만들기
		sendFormData = new FormData($("#condition")[0]);

		if(typeof lastinputG2 != "undefined"){
			var tKeys = lastinputG2.keys();
			for(i=0;i<tKeys.length;i++) {
				sendFormData.append(tKeys[i],lastinputG2.get(tKeys[i]));
				//console.log(tKeys[i]+ '='+ lastinputG2.get(tKeys[i])); 
			}
		}
	//CHK 배열 합치기
	sendFormData.append("G2-CHK",strSelectedRowsIds);

	$.ajax({
		type : "POST",
		url : url_G2_CHKSAVE + "&TOKEN=" + token ,
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
			if(data && data.RTN_CD == "200"){
				msgNotice("[] 정상 처리되었습니다.");
			}else{
				msgError("처리 결과 실패했습니다. ( " + data.ERR_CD + ":" + data.RTN_MSG + " )",3);
			}

		},
		error: function(error){
			msgError("Ajax http 500 error ( " + error + " )");
			alog("Ajax http 500 error ( " + error + " )");
		}
	});
	
	alog("G2_CHKSAVE()------------end");
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
	sendFormData.append("G3-PJTSEQ",$("#G3-PJTSEQ").val());	//PJTSEQ 전송객체에 넣기
	sendFormData.append("G3-PGMSEQ",$("#G3-PGMSEQ").val());	//PGMSEQ 전송객체에 넣기
	sendFormData.append("G3-GRPSEQ",$("#G3-GRPSEQ").val());	//GRPSEQ 전송객체에 넣기
	sendFormData.append("G3-FNCSEQ",$("#G3-FNCSEQ").val());	//FNCSEQ 전송객체에 넣기
	sendFormData.append("G3-FNCID",$("#G3-FNCID").val());	//FNCID 전송객체에 넣기
	sendFormData.append("G3-FNCCD",$("#G3-FNCCD").val());	//FNCCD 전송객체에 넣기
	sendFormData.append("G3-FNCNM",$("#G3-FNCNM").val());	//FNCNM 전송객체에 넣기
	sendFormData.append("G3-FNCTYPE",$("#G3-FNCTYPE").val());	//FNCTYPE 전송객체에 넣기
	sendFormData.append("G3-FNCORD",$("#G3-FNCORD").val());	//FNCORD 전송객체에 넣기
	tmpRadioVal = $('input[name="G3-USEYN"]:checked').val();

	if( typeof tmpRadioVal == "undefined" ){
		sendFormData.append("G3-USEYN","");//radio 선택값 가져오기.
	}else{
		sendFormData.append("G3-USEYN",tmpRadioVal);//radio 선택값 가져오기.
	}
	sendFormData.append("G3-USERDEFJS",obj_G3_USERDEFJS.getValue()); //USERDEFJS

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
			$("#G3-PJTSEQ").val(data.RTN_DATA.PJTSEQ);//PJTSEQ 변수세팅
			$("#G3-PGMSEQ").val(data.RTN_DATA.PGMSEQ);//PGMSEQ 변수세팅
			$("#G3-GRPSEQ").val(data.RTN_DATA.GRPSEQ);//GRPSEQ 변수세팅
			$("#G3-FNCSEQ").val(data.RTN_DATA.FNCSEQ);//FNCSEQ 변수세팅
			$("#G3-FNCID").val(data.RTN_DATA.FNCID);//FNCID 변수세팅
			$("#G3-FNCCD").val(data.RTN_DATA.FNCCD);//FNCCD 변수세팅
			$("#G3-FNCNM").val(data.RTN_DATA.FNCNM);//FNCNM 변수세팅
			$("#G3-FNCTYPE").val(data.RTN_DATA.FNCTYPE);//FNCTYPE 변수세팅
			$("#G3-FNCORD").val(data.RTN_DATA.FNCORD);//FNCORD 변수세팅
			//사용 값넣기
			$('input:radio[name="G3-USEYN"]').prop('checked', false);//기존 선택사항 모두 초기화
			if(data.RTN_DATA.USEYN != ""){
				$('input:radio[name="G3-USEYN"][value="' + data.RTN_DATA.USEYN + '"]').prop('checked', true);
			}
		//CodeMirror SetVal
		obj_G3_USERDEFJS.setValue(data.RTN_DATA.USERDEFJS); //USERDEFJS 
	$("#G3-ADDDT").text(data.RTN_DATA.ADDDT);//ADDDT 변수세팅
	$("#G3-MODDT").text(data.RTN_DATA.MODDT);//MODDT 변수세팅
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
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-PJTSEQ").val("");//PJTSEQ 신규초기화	
	$("#G3-PGMSEQ").val("");//PGMSEQ 신규초기화	
	$("#G3-GRPSEQ").val("");//GRPSEQ 신규초기화	
	$("#G3-FNCSEQ").val("");//FNCSEQ 신규초기화	
	$("#G3-FNCID").val("");//FNCID 신규초기화	
	$("#G3-FNCNM").val("");//FNCNM 신규초기화	
	$("#G3-FNCTYPE").val("");//FNCTYPE 신규초기화	
	$("#G3-FNCORD").val("");//FNCORD 신규초기화	
	$("#G3-USEYN").val("");//사용 신규초기화	
	obj_G3_USERDEFJS.setValue(""); // USERDEFJS값 비우기
	$("#G3-ADDDT").text("");//ADDDT 신규초기화
	$("#G3-MODDT").text("");//MODDT 신규초기화
	alog("DETAILNew30---------------end");
}
//사용자정의함수 : 사용자정의
function G3_USERDEF(token){
	alog("G3_USERDEF-----------------start");

	alog("G3_USERDEF-----------------end");
}
