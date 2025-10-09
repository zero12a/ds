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
			"GRPTYPE": "GRID"
			,"GRPNM": "로그인"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOGIN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SESSION_ID", "COLNM" : "SESSION_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SUCCESS_YN", "COLNM" : "SUCCESS_YN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "RESPONSE_MSG", "COLNM" : "RESPONSE_MSG", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PW_ERR_CNT", "COLNM" : "PW_ERR_CNT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOCKCD", "COLNM" : "LOCKCD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SERVER_NAME", "COLNM" : "SVR_NM", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "REMOTE_ADDR", "COLNM" : "IP", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USER_AGENT", "COLNM" : "BROWSER", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //로그인
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "잠금"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOGIN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SESSION_ID", "COLNM" : "SESSION_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SUCCESS_YN", "COLNM" : "SUCCESS_YN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOCKCD", "COLNM" : "LOCKCD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PW_ERR_CNT", "COLNM" : "PW_ERR_CNT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOCK_LIMIT_DT", "COLNM" : "LOCK_LIMIT_DT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //잠금
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "메뉴이력"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LAUTH_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "REQ_TOKEN", "COLNM" : "REQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "RES_TOKEN", "COLNM" : "RES", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "AUTH_ID", "COLNM" : "AUTH_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SUCCESS_YN", "COLNM" : "SUCCESS_YN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //메뉴이력
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "intronormalController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "intronormalController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "intronormalController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "intronormalController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "intronormalController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "intronormalController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "intronormalController?CTLGRP=G2&CTLFNC=EXCEL";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G3_SEARCH = "intronormalController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_RELOAD = "intronormalController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "intronormalController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_EXCEL = "intronormalController?CTLGRP=G3&CTLFNC=EXCEL";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G4_SEARCH = "intronormalController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_RELOAD = "intronormalController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_HIDDENCOL = "intronormalController?CTLGRP=G4&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G4_EXCEL = "intronormalController?CTLGRP=G4&CTLFNC=EXCEL";
//그리드 객체
var mygridG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 로그인
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 잠금
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	
	mygridG3.setSizes();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 메뉴이력
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	
	mygridG4.setSizes();

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
	tColId = mygridG2.getColumnId(tColIndex);
	tColId = mygridG2.getColumnId(tColIndex);
	tColId = mygridG2.getColumnId(tColIndex);
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

	//로그인 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 로그인"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("SEQ,USR_ID,SESSION_ID,SUCCESS_YN,RESPONSE_MSG,PW_ERR_CNT,LOCKCD,USR_SEQ,SVR_NM,IP,BROWSER,ADD");
	mygridG2.setColumnIds("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,RESPONSE_MSG,PW_ERR_CNT,LOCKCD,USR_SEQ,SERVER_NAME,REMOTE_ADDR,USER_AGENT,ADD_DT");
	mygridG2.setInitWidths("40,50,60,40,60,40,60,60,60,60,60,60");
	mygridG2.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("int,str,str,str,str,int,str,int,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_LOGIN_SEQ,G2_USR_ID,G2_SESSION_ID,G2_SUCCESS_YN,G2_RESPONSE_MSG,G2_PW_ERR_CNT,G2_LOCKCD,G2_USR_SEQ,G2_SERVER_NAME,G2_REMOTE_ADDR,G2_USER_AGENT,G2_ADD_DT");
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
		 // IO : SEQ초기화	
		 // IO : USR_ID초기화	
		 // IO : SESSION_ID초기화	
		 // IO : SUCCESS_YN초기화	
		 // IO : RESPONSE_MSG초기화	
		 // IO : PW_ERR_CNT초기화	
		 // IO : LOCKCD초기화	
		 // IO : USR_SEQ초기화	
		 // IO : SVR_NM초기화	
		 // IO : IP초기화	
		 // IO : BROWSER초기화	
		 // IO : ADD초기화	
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
	//잠금 그리드 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");

	//그리드 초기화
	mygridG3 = new dhtmlXGridObject('gridG3');
	mygridG3.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG3.setUserData("","gridTitle","G3 : 잠금"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG3.setHeader("SEQ,USR_ID,SESSION_ID,SUCCESS_YN,LOCKCD,PW_ERR_CNT,LOCK_LIMIT_DT,USR_SEQ,ADD");
	mygridG3.setColumnIds("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,LOCKCD,PW_ERR_CNT,LOCK_LIMIT_DT,USR_SEQ,ADD_DT");
	mygridG3.setInitWidths("120,100,200,60,60,40,60,60,60");
	mygridG3.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro");
	//가로 정렬	
	mygridG3.setColAlign("left,left,left,left,left,left,left,left,left");
	mygridG3.setColSorting("int,str,str,str,str,int,str,int,str");	//렌더링	
	mygridG3.enableSmartRendering(true);
	mygridG3.enableMultiselect(true);
	//mygridG3.setColValidators("G3_LOGIN_SEQ,G3_USR_ID,G3_SESSION_ID,G3_SUCCESS_YN,G3_LOCKCD,G3_PW_ERR_CNT,G3_LOCK_LIMIT_DT,G3_USR_SEQ,G3_ADD_DT");
	mygridG3.splitAt(0);//'freezes' 0 columns 
	mygridG3.init();
	mygridG3.setDateFormat("%Y-%m-%d");

	mygridG3.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG3.enableBlockSelection(true);
		mygridG3.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG3.editor){
				mygridG3.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG3.copyBlockToClipboard();

					var top_row_idx = mygridG3.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG3.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG3.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG3.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG3.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG3.getRowId(j);
						RowEditStatus = mygridG3.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG3.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG3.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : SEQ초기화	
		 // IO : USR_ID초기화	
		 // IO : SESSION_ID초기화	
		 // IO : SUCCESS_YN초기화	
		 // IO : LOCKCD초기화	
		 // IO : PW_ERR_CNT초기화	
		 // IO : LOCK_LIMIT_DT초기화	
		 // IO : USR_SEQ초기화	
		 // IO : ADD초기화	
	//onCheck
		mygridG3.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG3  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG3.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG3.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG3.setRowTextBold(rowId);
					mygridG3.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
	//onEditCell 이벤트
	mygridG3.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG3  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG3.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG3.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG3.setRowTextBold(rId);
                }
                mygridG3.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G3_INIT()-------------------------end");
}
	//메뉴이력 그리드 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");

	//그리드 초기화
	mygridG4 = new dhtmlXGridObject('gridG4');
	mygridG4.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG4.setUserData("","gridTitle","G4 : 메뉴이력"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG4.setHeader("SEQ,REQ,RES,USR_SEQ,USR_ID,프로그램ID,AUTH_ID,SUCCESS_YN,ADD");
	mygridG4.setColumnIds("LAUTH_SEQ,REQ_TOKEN,RES_TOKEN,USR_SEQ,USR_ID,PGMID,AUTH_ID,SUCCESS_YN,ADD_DT");
	mygridG4.setInitWidths("60,60,60,60,100,200,120,60,60");
	mygridG4.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro");
	//가로 정렬	
	mygridG4.setColAlign("left,left,left,left,left,left,left,left,left");
	mygridG4.setColSorting("int,str,str,int,str,str,str,str,str");	//렌더링	
	mygridG4.enableSmartRendering(true);
	mygridG4.enableMultiselect(true);
	//mygridG4.setColValidators("G4_LAUTH_SEQ,G4_REQ_TOKEN,G4_RES_TOKEN,G4_USR_SEQ,G4_USR_ID,G4_PGMID,G4_AUTH_ID,G4_SUCCESS_YN,G4_ADD_DT");
	mygridG4.splitAt(0);//'freezes' 0 columns 
	mygridG4.init();
	mygridG4.setDateFormat("%Y-%m-%d");

	mygridG4.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG4.enableBlockSelection(true);
		mygridG4.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG4.editor){
				mygridG4.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG4.copyBlockToClipboard();

					var top_row_idx = mygridG4.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG4.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG4.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG4.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG4.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG4.getRowId(j);
						RowEditStatus = mygridG4.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG4.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG4.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : SEQ초기화	
		 // IO : REQ초기화	
		 // IO : RES초기화	
		 // IO : USR_SEQ초기화	
		 // IO : USR_ID초기화	
		 // IO : 프로그램ID초기화	
		 // IO : AUTH_ID초기화	
		 // IO : SUCCESS_YN초기화	
		 // IO : ADD초기화	
	//onCheck
		mygridG4.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG4  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG4.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG4.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG4.setRowTextBold(rowId);
					mygridG4.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
	//onEditCell 이벤트
	mygridG4.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG4  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG4.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG4.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG4.setRowTextBold(rId);
                }
                mygridG4.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G4_INIT()-------------------------end");
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
			lastinputG2 = new HashMap(); //로그인
				lastinputG3 = new HashMap(); //잠금
				lastinputG4 = new HashMap(); //메뉴이력
		//  호출
	G2_SEARCH(lastinputG2,token);
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
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}








//그리드 조회(로그인)	
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
					msgNotice("[로그인] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[로그인] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[로그인] Ajax http 500 error ( " + error + " )",3);
                alog("[로그인] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
    }

//엑셀다운		
function G2_EXCEL(){	
	alog("G2_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG2.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG2.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,RESPONSE_MSG,PW_ERR_CNT,LOCKCD,USR_SEQ,SERVER_NAME,REMOTE_ADDR,USER_AGENT,ADD_DT");
	$("#DATA_WIDTHS").val("40,50,60,40,60,40,60,60,60,60,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G2_HIDDENCOL(){
		alog("G2_HIDDENCOL()..................start");
        if(isToggleHiddenColG2){
            isToggleHiddenColG2 = false;     }else{
            isToggleHiddenColG2 = true;
        }
		alog("G2_HIDDENCOL()..................end");
    }
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}








//그리드 조회(잠금)	
function G3_SEARCH(tinput,token){
	alog("G3_SEARCH()------------start");

	var tGrid = mygridG3;

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
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG3Cnt").text("-");
					}
					msgNotice("[잠금] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[잠금] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[잠금] Ajax http 500 error ( " + error + " )",3);
                alog("[잠금] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G3_SEARCH()------------end");
    }

//엑셀다운		
function G3_EXCEL(){	
	alog("G3_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG3.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG3.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,LOCKCD,PW_ERR_CNT,LOCK_LIMIT_DT,USR_SEQ,ADD_DT");
	$("#DATA_WIDTHS").val("120,100,200,60,60,40,60,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G3_HIDDENCOL(){
		alog("G3_HIDDENCOL()..................start");
        if(isToggleHiddenColG3){
            isToggleHiddenColG3 = false;     }else{
            isToggleHiddenColG3 = true;
        }
		alog("G3_HIDDENCOL()..................end");
    }
//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}








//그리드 조회(메뉴이력)	
function G4_SEARCH(tinput,token){
	alog("G4_SEARCH()------------start");

	var tGrid = mygridG4;

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
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG4Cnt").text("-");
					}
					msgNotice("[메뉴이력] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[메뉴이력] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[메뉴이력] Ajax http 500 error ( " + error + " )",3);
                alog("[메뉴이력] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G4_SEARCH()------------end");
    }

//엑셀다운		
function G4_EXCEL(){	
	alog("G4_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG4.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG4.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LAUTH_SEQ,REQ_TOKEN,RES_TOKEN,USR_SEQ,USR_ID,PGMID,AUTH_ID,SUCCESS_YN,ADD_DT");
	$("#DATA_WIDTHS").val("60,60,60,60,100,200,120,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G4_HIDDENCOL(){
		alog("G4_HIDDENCOL()..................start");
        if(isToggleHiddenColG4){
            isToggleHiddenColG4 = false;     }else{
            isToggleHiddenColG4 = true;
        }
		alog("G4_HIDDENCOL()..................end");
    }
