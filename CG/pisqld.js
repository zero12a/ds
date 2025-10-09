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
				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "HIDDENGET" }
,				{ "COLID": "SQLSEQ", "COLNM" : "SQLSEQ", "OBJTYPE" : "HIDDENGET" }
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
				{ "COLID": "SQLSEQ", "COLNM" : "SQLSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLSEQ", "COLNM" : "COLSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SQLGBN", "COLNM" : "SQLGBN", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "DDCOLID", "COLNM" : "DDCOLID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "REQUIREYN", "COLNM" : "필수", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "TEXTVIEW" }
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
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "SQLSEQ", "COLNM" : "SQLSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "COLSEQ", "COLNM" : "COLSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "SQLGBN", "COLNM" : "SQLGBN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DDCOLID", "COLNM" : "DDCOLID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "REQUIREYN", "COLNM" : "필수", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "pisqldController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "pisqldController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "pisqldController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "pisqldController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_PGMSEQ; // PGMSEQ 변수선언
var obj_G1_COLID; // 컬럼ID 변수선언
var obj_G1_PJTSEQ; // PJTSEQ 변수선언
var obj_G1_SQLSEQ; // SQLSEQ 변수선언
var $btG2 = null; //
	//컨트롤러 경로 s
	var url_G2_USERDEF = "pisqldController?CTLGRP=G2&CTLFNC=USERDEF";
	//컨트롤러 경로 s
	var url_G2_SEARCH = "pisqldController?CTLGRP=G2&CTLFNC=SEARCH";
	//컨트롤러 경로 s
	var url_G2_RELOAD = "pisqldController?CTLGRP=G2&CTLFNC=RELOAD";
	//컨트롤러 경로 s
	var url_G2_EXCEL = "pisqldController?CTLGRP=G2&CTLFNC=EXCEL";
	//컨트롤러 경로 s
	var url_G2_CHKSAVE = "pisqldController?CTLGRP=G2&CTLFNC=CHKSAVE";
//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_USERDEF = "pisqldController?CTLGRP=G3&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "pisqldController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "pisqldController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "pisqldController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "pisqldController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "pisqldController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "pisqldController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_SQLSEQ;   // SQLSEQ 글로벌 변수 선언
var obj_G3_COLSEQ;   // COLSEQ 글로벌 변수 선언
var obj_G3_PJTSEQ;   // PJTSEQ 글로벌 변수 선언
var obj_G3_PGMSEQ;   // PGMSEQ 글로벌 변수 선언
var obj_G3_SQLGBN;   // SQLGBN 글로벌 변수 선언
var obj_G3_COLID;   // 컬럼ID 글로벌 변수 선언
var obj_G3_DDCOLID;   // DDCOLID 글로벌 변수 선언
var obj_G3_REQUIREYN;   // 필수 글로벌 변수 선언
var obj_G3_ORD;   // ORD 글로벌 변수 선언
var obj_G3_MODDT;   // MODDT 글로벌 변수 선언
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
	//COLID, 컬럼ID 초기화	
	//PGMSEQ, PGMSEQ 초기화	
	//PJTSEQ, PJTSEQ 초기화	
	//SQLSEQ, SQLSEQ 초기화	
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
			field: 'SQLSEQ',
			title: 'SQLSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'COLSEQ',
			title: 'COLSEQ',
			sortable: true,
			align: 'left',
			valign: 'middle'
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
			field: 'SQLGBN',
			title: 'SQLGBN',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'COLID',
			title: '컬럼ID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'DDCOLID',
			title: 'DDCOLID',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'REQUIREYN',
			title: '필수',
			sortable: true,
			align: 'left',
			valign: 'middle'
			}
			,{
			field: 'ORD',
			title: 'ORD',
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
		lastinputG3.set("G2-SQLSEQ", row.SQLSEQ); // 
		lastinputG3.set("G2-COLSEQ", row.COLSEQ); // 
		lastinputG3.set("G2-PJTSEQ", row.PJTSEQ); // 
		lastinputG3.set("G2-PGMSEQ", row.PGMSEQ); // 
		G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 
		//    //alog(field);
		});
}
//디테일 초기화	
// 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//SQLSEQ, SQLSEQ 초기화
	//COLSEQ, COLSEQ 초기화
	//PJTSEQ, PJTSEQ 초기화
	//PGMSEQ, PGMSEQ 초기화
	//SQLGBN, SQLGBN 초기화	
	//COLID, 컬럼ID 초기화	
	//DDCOLID, DDCOLID 초기화	
	//REQUIREYN, 필수 초기화	
	//ORD, ORD 초기화	
	//MODDT, MODDT 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
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
function G1_USERDEF(token){
	alog("G1_USERDEF-----------------start");

	alog("G1_USERDEF-----------------end");
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


		strSelectedRowsIds += jsonSelectedRows[i].COLSEQ;
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
	$("#G3-SQLSEQ").text(data.RTN_DATA.SQLSEQ);//SQLSEQ 변수세팅
	$("#G3-COLSEQ").text(data.RTN_DATA.COLSEQ);//COLSEQ 변수세팅
	$("#G3-PJTSEQ").text(data.RTN_DATA.PJTSEQ);//PJTSEQ 변수세팅
	$("#G3-PGMSEQ").text(data.RTN_DATA.PGMSEQ);//PGMSEQ 변수세팅
			$("#G3-SQLGBN").val(data.RTN_DATA.SQLGBN);//SQLGBN 변수세팅
			$("#G3-COLID").val(data.RTN_DATA.COLID);//컬럼ID 변수세팅
			$("#G3-DDCOLID").val(data.RTN_DATA.DDCOLID);//DDCOLID 변수세팅
			$("#G3-REQUIREYN").val(data.RTN_DATA.REQUIREYN);//필수 변수세팅
			$("#G3-ORD").val(data.RTN_DATA.ORD);//ORD 변수세팅
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
	$("#G3-SQLSEQ").text("");//SQLSEQ 신규초기화
	$("#G3-COLSEQ").text("");//COLSEQ 신규초기화
	$("#G3-PJTSEQ").text("");//PJTSEQ 신규초기화
	$("#G3-PGMSEQ").text("");//PGMSEQ 신규초기화
	$("#G3-SQLGBN").val("");//SQLGBN 신규초기화	
	$("#G3-COLID").val("");//컬럼ID 신규초기화	
	$("#G3-DDCOLID").val("");//DDCOLID 신규초기화	
	$("#G3-REQUIREYN").val("");//필수 신규초기화	
	$("#G3-ORD").val("");//ORD 신규초기화	
	$("#G3-MODDT").text("");//MODDT 신규초기화
	alog("DETAILNew30---------------end");
}
//사용자정의함수 : 사용자정의
function G3_USERDEF(token){
	alog("G3_USERDEF-----------------start");

	alog("G3_USERDEF-----------------end");
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
