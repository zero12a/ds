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
				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "TEST(mariadb)"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "MYSEQ", "COLNM" : "MYSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //TEST(mariadb)
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "MYSEQ", "COLNM" : "MYSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MSG", "COLNM" : "MSG", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "seqtestController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "seqtestController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "seqtestController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "seqtestController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_MSG; // MSG 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "seqtestController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "seqtestController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWADD = "seqtestController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "seqtestController?CTLGRP=G2&CTLFNC=RELOAD";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_USERDEF = "seqtestController?CTLGRP=G3&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "seqtestController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "seqtestController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "seqtestController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "seqtestController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "seqtestController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "seqtestController?CTLGRP=G3&CTLFNC=DELETE";
//폼뷰 컨트롤러 경로
var url_G3_BIND = "seqtestController?CTLGRP=G3&CTLFNC=BIND";
var obj_G3_MYSEQ;   // MYSEQ 글로벌 변수 선언
var obj_G3_MSG;   // MSG 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : TEST(mariadb)
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

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
	tColId = mygridG2.getColumnId(tColIndex);
	//G2, TEST(mariadb), MYSEQ, MYSEQ
	if( tGrpId == "G2" && tColId == "MYSEQ" ){
		obj_G2_MYSEQ_POPUP = window.open("about:blank","codeSearch_G2_MYSEQ_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='MYSEQ' id='MYSEQ' value='" + tValue + "'>");//이 컬럼이 동적으로 MYSEQ 변경되어야 함.	
		frm1.append("<input type=text name='MYSEQ-NM' id='MYSEQ-NM' value='" + tText + "'>");//이 컬럼이 동적으로 MYSEQ 변경되어야 함.	
		
		$("#GRPID").val(tGrpId);
		$("#ROWID").val(tRowId);		
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G2_MYSEQ_Pop";
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
	//G2, TEST(mariadb), MSG, MSG
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
	//G1, , MSG, MSG
	if( tGrpId == "G1" && tColId == "G1-MSG" ){
		obj_G1_MSG_POPUP = window.open("about:blank","codeSearch_G1_MSG_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='MSG' id='MSG' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.	
		frm1.append("<input type=text name='MSG-NM' id='MSG-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 MSG 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G1_MSG_Pop";
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

	//G3, , MYSEQ, MYSEQ
	if( tGrpId == "G3" && tColId == "G3-MYSEQ" ){
		obj_G3_MYSEQ_POPUP = window.open("about:blank","codeSearch_G3_MYSEQ_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='MYSEQ' id='MYSEQ' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 MYSEQ 변경되어야 함.	
		frm1.append("<input type=text name='MYSEQ-NM' id='MYSEQ-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 MYSEQ 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G3_MYSEQ_Pop";
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
	//FORM
	if(tGrpId == "G1" && tColId =="G1-MSG"){
		$("#G1-MSG").val(tJsonObj.CD);
		$("#G1-MSG-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G1_MSG_POPUP != null) obj_G1_MSG_POPUP.close();
	}
	//GRID
	if(tGrpId == "G2" && tColId =="MYSEQ"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		//전체 값중에 TEXT, VALUE만 변경
		var origin = mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).getValue();
		alog("before = " + origin);
		var tArr = origin.split("^"); ////CD^NM^GRPID
		tArr[0] = tJsonObj.CD;
		tArr[1] = tJsonObj.NM;	
		tArr[2] = "G2";//GRPID
		alog("after = " + tArr[0] + "^" + tArr[1] + "^" + tArr[2]);

		mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).setValue(tArr[0] + "^" + tArr[1] + "^" + tArr[2] );

		//변경 상태 업데이트
		RowEditStatus = mygridG2.getUserData(tRowId,"!nativeeditor_status");
		alog("	RowEditStatus=" + RowEditStatus);
		if(RowEditStatus == ""){
			mygridG2.setUserData(tRowId,"!nativeeditor_status","updated");
			mygridG2.setRowTextBold(tRowId);
		}
		mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).cell.wasChanged = true;

		//팝업창 닫기
		if(obj_G2_MYSEQ_POPUP != null)obj_G2_MYSEQ_POPUP.close();
	}
		//GRID
	if(tGrpId == "G2" && tColId =="MSG"){
		alog("LAST_ROWID = " + tRowId);
		//그리드 일때
		//전체 값중에 TEXT, VALUE만 변경
		var origin = mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).getValue();
		alog("before = " + origin);
		var tArr = origin.split("^"); ////CD^NM^GRPID
		tArr[0] = tJsonObj.CD;
		tArr[1] = tJsonObj.NM;	
		tArr[2] = "G2";//GRPID
		alog("after = " + tArr[0] + "^" + tArr[1] + "^" + tArr[2]);

		mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).setValue(tArr[0] + "^" + tArr[1] + "^" + tArr[2] );

		//변경 상태 업데이트
		RowEditStatus = mygridG2.getUserData(tRowId,"!nativeeditor_status");
		alog("	RowEditStatus=" + RowEditStatus);
		if(RowEditStatus == ""){
			mygridG2.setUserData(tRowId,"!nativeeditor_status","updated");
			mygridG2.setRowTextBold(tRowId);
		}
		mygridG2.cells(tRowId,mygridG2.getColIndexById(tColId)).cell.wasChanged = true;

		//팝업창 닫기
		if(obj_G2_MSG_POPUP != null)obj_G2_MSG_POPUP.close();
	}
		//FORM
	if(tGrpId == "G3" && tColId =="G3-MYSEQ"){
		$("#G3-MYSEQ").val(tJsonObj.CD);
		$("#G3-MYSEQ-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G3_MYSEQ_POPUP != null) obj_G3_MYSEQ_POPUP.close();
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
	//MSG, MSG 초기화	
  alog("G1_INIT()-------------------------end");
}

	//TEST(mariadb) 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : TEST(mariadb)"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("MYSEQ,MSG");
	mygridG2.setColumnIds("MYSEQ,MSG");
	mygridG2.setInitWidths("100,100");
	mygridG2.setColTypes("ed,ed");
	//가로 정렬	
	mygridG2.setColAlign("left,left");
	mygridG2.setColSorting("int,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_MYSEQ,G2_MSG");
	mygridG2.splitAt(0);//'freezes' 0 columns 
	mygridG2.init();
	mygridG2.setDateFormat("%Y-%m-%d");

	mygridG2.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG2.enableBlockSelection(true);
		mygridG2.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG2.editor){
				mygridG2.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG2.copyBlockToClipboard();

					var top_row_idx = mygridG2.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG2.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG2.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG2.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG2.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG2.getRowId(j);
						RowEditStatus = mygridG2.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG2.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG2.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : MYSEQ초기화	
		 // IO : MSG초기화	
	//onCheck
		mygridG2.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG2  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG2.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG2.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG2.setRowTextBold(rowId);
					mygridG2.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
		// ROW선택 이벤트 (자식 그룹이 있을때만 호출)
		mygridG2.attachEvent("onRowSelect",function(rowID,celInd){
			RowEditStatus = mygridG2.getUserData(rowID,"!nativeeditor_status");
			if(RowEditStatus == "inserted"){return false;}
			//GRIDRowSelect20(rowID,celInd);
		//A124
		lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
			', "G2-MYSEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("MYSEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-MYSEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("MYSEQ")).getValue().replace(/&amp;/g, "&")); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 
		});
	//onEditCell 이벤트
	mygridG2.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG2  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG2.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG2.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG2.setRowTextBold(rId);
                }
                mygridG2.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G2_INIT()-------------------------end");
}
//디테일 초기화	
// 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//MYSEQ, MYSEQ 초기화	
	//MSG, MSG 초기화	
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
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
			lastinputG2 = new HashMap(); //TEST(mariadb)
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//사용자정의함수 : 사용자정의
function G1_USERDEF(token){
	alog("G1_USERDEF-----------------start");

	alog("G1_USERDEF-----------------end");
}
//행추가3 (TEST(mariadb))	
//그리드 행추가 : TEST(mariadb)
	function G2_ROWADD(){
		if( !(lastinputG2)){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["",""];//초기값
			addRow(mygridG2,tCols);
		}
	}	//TEST(mariadb)
function G2_SAVE(token){
	alog("G2_SAVE()------------start");
	tgrid = mygridG2;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
        //post 만들기
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
	//sendFormData.append("G2-XML" , myXmlString);
	//그리드G2 가져오기	
    mygridG2.setSerializationLevel(true,false,false,false,true,false);
    var paramsG2 = mygridG2.serialize();
	sendFormData.append("G2-XML",paramsG2);

	$.ajax({
		type : "POST",
		url : url_G2_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
		}
	});
	
	alog("G2_SAVE()------------end");
}








//그리드 조회(TEST(mariadb))	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");

	var tGrid = mygridG2;

	//그리드 초기화
	tGrid.clearAll();
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
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG2Cnt").text("-");
					}
					msgNotice("[TEST(mariadb)] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[TEST(mariadb)] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[TEST(mariadb)] Ajax http 500 error ( " + error + " )",3);
                alog("[TEST(mariadb)] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
    }

//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
function G3_BIND(data,token){
	alog("(FORMVIEW) G3_BIND---------------start");

	$( "#G3-MYSEQ" ).unbind(); //이벤트 제거 : MYSEQ
	$( "#G3-MSG" ).unbind(); //이벤트 제거 : MSG
	$("#G3-MYSEQ").val(data.get("G2-MYSEQ"));//MYSEQ 변수세팅
	$("#G3-MSG").val(data.get("G2-MSG"));//MSG 변수세팅
	//첫호출 이면 오브젝트에 이벤트 붙이기
	if(!isBindEvent_G3){

		//MYSEQ
		$( "#G3-MYSEQ" ).keyup(function() {
			alog("G3-MYSEQ change event.");
			rid = lastinputG3.get("__ROWID");
			cidx = mygridG2.getColIndexById("MYSEQ");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});
		//MSG
		$( "#G3-MSG" ).keyup(function() {
			alog("G3-MSG change event.");
			rid = lastinputG3.get("__ROWID");
			cidx = mygridG2.getColIndexById("MSG");
			mygridG2.cells(rid,cidx).setValue($(this).val()); //값변경

			//부모 row 상태변경
			mygridG2.cells(rid,cidx).cell.wasChanged = true;
			RowEditStatus = mygridG2.getUserData(rid,"!nativeeditor_status");
			if( RowEditStatus != "inserted" && RowEditStatus != "deleted"){
				mygridG2.setUserData(rid,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rid);	
			}
		});

		//isBindEvent_G3 = true;
	}
	alog("(FORMVIEW) G3_BIND---------------end");

}
//G3_SAVE
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
	sendFormData.append("G3-MYSEQ",$("#G3-MYSEQ").val());	//MYSEQ 전송객체에 넣기
	sendFormData.append("G3-MSG",$("#G3-MSG").val());	//MSG 전송객체에 넣기

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
			$("#G3-MYSEQ").val(data.RTN_DATA.MYSEQ);//MYSEQ 변수세팅
			$("#G3-MSG").val(data.RTN_DATA.MSG);//MSG 변수세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
//사용자정의함수 : 사용자정의
function G3_USERDEF(token){
	alog("G3_USERDEF-----------------start");

	alog("G3_USERDEF-----------------end");
}
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-MYSEQ").val("");//MYSEQ 신규초기화	
	$("#G3-MSG").val("");//MSG 신규초기화	
	alog("DETAILNew30---------------end");
}
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}