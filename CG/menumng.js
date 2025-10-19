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
				{ "COLID": "MNU_NM", "COLNM" : "메뉴 이름", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //조회조건
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "지정 폴더"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FOLDER_SEQ", "COLNM" : "FOLDER_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "FOLDER_NM", "COLNM" : "FOLDER_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FOLDER_ORD", "COLNM" : "FOLDER_ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MOD_ID", "COLNM" : "MOD_ID", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //지정 폴더
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "지정 메뉴"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHECK" }
,				{ "COLID": "MNU_SEQ", "COLNM" : "MNU_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU_NM", "COLNM" : "MNU_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "URL", "COLNM" : "URL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FOLDER_SEQ", "COLNM" : "FOLDER_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MOD_ID", "COLNM" : "MOD_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //지정 메뉴
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "메뉴폴더별건수"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FOLDER_SEQ", "COLNM" : "FOLDER_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "CNT", "COLNM" : "CNT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //메뉴폴더별건수
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "변경할 폴더"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "FOLDER_SEQ", "COLNM" : "FOLDER_SEQ", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //변경할 폴더
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "건수의 폴더"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHK", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "MNU_SEQ", "COLNM" : "MNU_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU_NM", "COLNM" : "메뉴 이름", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "URL", "COLNM" : "URL", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MNU_ORD", "COLNM" : "MNU_ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FOLDER_SEQ", "COLNM" : "FOLDER_SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USE_YN", "COLNM" : "USE_YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MOD_ID", "COLNM" : "MOD_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //건수의 폴더
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "menumngController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "menumngController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "menumngController?CTLGRP=G1&CTLFNC=RESET";
//조회조건 변수 선언	
var obj_G1_MNU_NM; // 메뉴 이름 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "menumngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "menumngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "menumngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "menumngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "menumngController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "menumngController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "menumngController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_CHKSAVE = "menumngController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G3_SEARCH = "menumngController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "menumngController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "menumngController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWADD = "menumngController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "menumngController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "menumngController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_EXCEL = "menumngController?CTLGRP=G3&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G3_CHKSAVE = "menumngController?CTLGRP=G3&CTLFNC=CHKSAVE";
//컨트롤러 경로
var url_G3_ROWBULKADD = "menumngController?CTLGRP=G3&CTLFNC=ROWBULKADD";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G4_SEARCH = "menumngController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_RELOAD = "menumngController?CTLGRP=G4&CTLFNC=RELOAD";
//그리드 객체
var mygridG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;//디테일 변수 초기화	

var isBindEvent_G5 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G5_SAVE = "menumngController?CTLGRP=G5&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G5_NEW = "menumngController?CTLGRP=G5&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G5_MODIFY = "menumngController?CTLGRP=G5&CTLFNC=MODIFY";
var obj_G5_FOLDER_SEQ;   // FOLDER_SEQ 글로벌 변수 선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G6_SEARCH = "menumngController?CTLGRP=G6&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G6_RELOAD = "menumngController?CTLGRP=G6&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G6_CHKSAVE = "menumngController?CTLGRP=G6&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG6,isToggleHiddenColG6,lastinputG6,lastinputG6json,lastrowidG6;
var lastselectG6json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 조회조건
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 지정 폴더
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 지정 메뉴
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	
	mygridG3.setSizes();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : 메뉴폴더별건수
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	
	mygridG4.setSizes();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : 변경할 폴더
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	//null
	alog("G5_RESIZE-----------------end");
}
//사이즈 리셋 : 건수의 폴더
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");
	
	mygridG6.setSizes();

	alog("G6_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G4_RESIZE();
	G5_RESIZE();
	G6_RESIZE();

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
	G5_INIT();
	G6_INIT();
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
	//MNU_NM, 메뉴 이름 초기화	
  alog("G1_INIT()-------------------------end");
}

	//지정 폴더 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 지정 폴더"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("FOLDER_SEQ,FOLDER_NM,USE_YN,FOLDER_ORD,ADD,ADD_ID,MOD,MOD_ID");
	mygridG2.setColumnIds("FOLDER_SEQ,FOLDER_NM,USE_YN,FOLDER_ORD,ADD_DT,ADD_ID,MOD_DT,MOD_ID");
	mygridG2.setInitWidths("60,60,60,60,60,60,60,60");
	mygridG2.setColTypes("ro,ed,ed,ed,ro,ro,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("int,str,str,int,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_FOLDER_SEQ,G2_FOLDER_NM,G2_USE_YN,G2_FOLDER_ORD,G2_ADD_DT,G2_ADD_ID,G2_MOD_DT,G2_MOD_ID");
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
		 // IO : FOLDER_SEQ초기화	
		 // IO : FOLDER_NM초기화	
		 // IO : USE_YN초기화	
		 // IO : FOLDER_ORD초기화	
		 // IO : ADD초기화	
		 // IO : ADD_ID초기화	
		 // IO : MOD초기화	
		 // IO : MOD_ID초기화	
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
			', "G2-FOLDER_SEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("FOLDER_SEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 지정 메뉴
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-FOLDER_SEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("FOLDER_SEQ")).getValue().replace(/&amp;/g, "&")); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 지정 메뉴
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
	//지정 메뉴 그리드 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");

	//그리드 초기화
	mygridG3 = new dhtmlXGridObject('gridG3');
	mygridG3.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG3.setUserData("","gridTitle","G3 : 지정 메뉴"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG3.setHeader("#master_checkbox,MNU_SEQ,프로그램ID,MNU_NM,URL,PGMTYPE,MNU_ORD,FOLDER_SEQ,USE_YN,ADD,ADD_ID,MOD_ID,MOD");
	mygridG3.setColumnIds("CHK,MNU_SEQ,PGMID,MNU_NM,URL,PGMTYPE,MNU_ORD,FOLDER_SEQ,USE_YN,ADD_DT,ADD_ID,MOD_ID,MOD_DT");
	mygridG3.setInitWidths("50,60,100,60,60,60,60,60,60,60,60,60,60");
	mygridG3.setColTypes("ch,ro,ed,ed,ed,co,ed,ro,ed,ro,ro,ro,ro");
	//가로 정렬	
	mygridG3.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG3.setColSorting("na,str,str,str,str,str,str,int,str,str,str,str,str");	//렌더링	
	mygridG3.enableSmartRendering(true);
	mygridG3.enableMultiselect(true);
	//mygridG3.setColValidators("G3_CHK,G3_MNU_SEQ,G3_PGMID,G3_MNU_NM,G3_URL,G3_PGMTYPE,G3_MNU_ORD,G3_FOLDER_SEQ,G3_USE_YN,G3_ADD_DT,G3_ADD_ID,G3_MOD_ID,G3_MOD_DT");
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
		 // IO : CHK초기화	
		 // IO : MNU_SEQ초기화	
		 // IO : 프로그램ID초기화	
		 // IO : MNU_NM초기화	
		 // IO : URL초기화	
		setCodeCombo("GRID",mygridG3.getCombo(mygridG3.getColIndexById("PGMTYPE")),"PGMTYPE"); // IO : PGMTYPE초기화	
		 // IO : MNU_ORD초기화	
		 // IO : FOLDER_SEQ초기화	
		 // IO : USE_YN초기화	
		 // IO : ADD초기화	
		 // IO : ADD_ID초기화	
		 // IO : MOD_ID초기화	
		 // IO : MOD초기화	
	//onCheck
		mygridG3.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG3  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG3.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터체크] ROW 마스터 체크 박스는 변경이면 실제 row 변경 안함
			if(  mygridG3.getColumnId(cellInd) == "CHK" ){
				mygridG3.cells(rowId,cellInd).cell.wasChanged = false;	
			}	
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
	//메뉴폴더별건수 그리드 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");

	//그리드 초기화
	mygridG4 = new dhtmlXGridObject('gridG4');
	mygridG4.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG4.setUserData("","gridTitle","G4 : 메뉴폴더별건수"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG4.setHeader("FOLDER_SEQ,CNT");
	mygridG4.setColumnIds("FOLDER_SEQ,CNT");
	mygridG4.setInitWidths("60,60");
	mygridG4.setColTypes("ro,ro");
	//가로 정렬	
	mygridG4.setColAlign("left,right");
	mygridG4.setColSorting("int,int");	//렌더링	
	mygridG4.enableSmartRendering(true);
	mygridG4.enableMultiselect(true);
	//mygridG4.setColValidators("G4_FOLDER_SEQ,G4_CNT");
	mygridG4.splitAt();//'freezes'  columns 
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
		 // IO : FOLDER_SEQ초기화	
		 // IO : CNT초기화	
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
		// ROW선택 이벤트 (자식 그룹이 있을때만 호출)
		mygridG4.attachEvent("onRowSelect",function(rowID,celInd){
			RowEditStatus = mygridG4.getUserData(rowID,"!nativeeditor_status");
			if(RowEditStatus == "inserted"){return false;}
			//GRIDRowSelect40(rowID,celInd);
		//A124
		lastinputG6json = jQuery.parseJSON('{ "__NAME":"lastinputG6json"' +
			', "G4-FOLDER_SEQ" : "' + q(mygridG4.cells(rowID,mygridG4.getColIndexById("FOLDER_SEQ")).getValue()) + '"' +
		'}');
		lastinputG6 = new HashMap(); // 건수의 폴더
		lastinputG6.set("__ROWID",rowID);
		lastinputG6.set("G4-FOLDER_SEQ", mygridG4.cells(rowID,mygridG4.getColIndexById("FOLDER_SEQ")).getValue().replace(/&amp;/g, "&")); // 
			G6_SEARCH(lastinputG6,uuidv4()); //자식그룹 호출 : 건수의 폴더
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
//디테일 초기화	
//변경할 폴더 폼뷰 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");
	//컬럼 초기화
	//FOLDER_SEQ, FOLDER_SEQ 초기화	
  alog("G5_INIT()-------------------------end");
}
	//건수의 폴더 그리드 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");

	//그리드 초기화
	mygridG6 = new dhtmlXGridObject('gridG6');
	mygridG6.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG6.setUserData("","gridTitle","G6 : 건수의 폴더"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG6.setHeader("#master_checkbox,MNU_SEQ,프로그램ID,메뉴 이름,URL,PGMTYPE,MNU_ORD,FOLDER_SEQ,USE_YN,ADD,ADD_ID,MOD_ID,MOD");
	mygridG6.setColumnIds("CHK,MNU_SEQ,PGMID,MNU_NM,URL,PGMTYPE,MNU_ORD,FOLDER_SEQ,USE_YN,ADD_DT,ADD_ID,MOD_ID,MOD_DT");
	mygridG6.setInitWidths("50,60,200,120,60,60,60,60,60,60,60,60,60");
	mygridG6.setColTypes("ch,ro,ed,ed,ro,ed,ed,ed,ed,ro,ed,ed,ro");
	//가로 정렬	
	mygridG6.setColAlign("left,left,left,left,left,left,left,left,left,center,left,left,center");
	mygridG6.setColSorting("na,str,str,str,str,str,str,int,str,str,str,str,str");	//렌더링	
	mygridG6.enableSmartRendering(true);
	mygridG6.enableMultiselect(true);
	//mygridG6.setColValidators("G6_CHK,G6_MNU_SEQ,G6_PGMID,G6_MNU_NM,G6_URL,G6_PGMTYPE,G6_MNU_ORD,G6_FOLDER_SEQ,G6_USE_YN,G6_ADD_DT,G6_ADD_ID,G6_MOD_ID,G6_MOD_DT");
	mygridG6.splitAt();//'freezes'  columns 
	mygridG6.init();
	mygridG6.setDateFormat("%Y-%m-%d");

	mygridG6.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG6.enableBlockSelection(true);
		mygridG6.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG6.editor){
				mygridG6.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG6.copyBlockToClipboard();

					var top_row_idx = mygridG6.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG6.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG6.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG6.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG6.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG6.getRowId(j);
						RowEditStatus = mygridG6.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG6.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG6.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : CHK초기화	
		 // IO : MNU_SEQ초기화	
		 // IO : 프로그램ID초기화	
		 // IO : 메뉴 이름초기화	
		 // IO : URL초기화	
		 // IO : PGMTYPE초기화	
		 // IO : MNU_ORD초기화	
		 // IO : FOLDER_SEQ초기화	
		 // IO : USE_YN초기화	
		 // IO : ADD초기화	
		 // IO : ADD_ID초기화	
		 // IO : MOD_ID초기화	
		 // IO : MOD초기화	
	//onCheck
		mygridG6.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG6  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG6.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터롤업 체크] row 한개한개 선택시에는 onCheck이벤트에서 동작되고, 마스터 체크시에는 onEditCell이벤트만 동작됨
			if( mygridG6.getColumnId(cellInd) == "CHK"	){
				if(RowEditStatus == "" && state == true){
					mygridG6.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG6.setRowTextBold(rowId);
					mygridG6.cells(rowId,cellInd).cell.wasChanged = true;	
				}else if(RowEditStatus == "updated" && state == false){
					mygridG6.setUserData(rowId,"!nativeeditor_status","");
					mygridG6.setRowTextNormal(rowId);
					mygridG6.cells(rowId,cellInd).cell.wasChanged = false;	
				}				
			}
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG6.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG6.setRowTextBold(rowId);
					mygridG6.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
	//onEditCell 이벤트
	mygridG6.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG6  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG6.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//마스터체크로 한번에 체크시에는 onCheck이벤트는 동작하지 않고
		//onEditCell이벤트만 동작되며 stage 1 이벤트만 있음
		if(mygridG6.getColumnId(cInd) == "CHK"
			&& nValue != oValue
			&& stage == 1
		){
			//check roll up
			if( RowEditStatus == "" ){
				mygridG6.setUserData(rId,"!nativeeditor_status","updated");
				mygridG6.setRowTextBold(rId);
				mygridG6.cells(rId,cInd).cell.wasChanged = true;
			}else if( RowEditStatus == "updated" ){
				mygridG6.setUserData(rId,"!nativeeditor_status","");
				mygridG6.setRowTextNormal(rId);
				mygridG6.cells(rId,cInd).cell.wasChanged = false;
			}
			return true;
		}
		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG6.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG6.setRowTextBold(rId);
                }
                mygridG6.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G6_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//조회조건, 저장	
function G1_SAVE(token){
 alog("G1_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G1 getparams	
	//그리드G3 가져오기	
    mygridG3.setSerializationLevel(true,false,false,false,true,false);
    var paramsG3 = mygridG3.serialize();
	sendFormData.append("G3-XML",paramsG3);
	//그리드G6 가져오기	
    mygridG6.setSerializationLevel(true,false,false,false,true,false);
    var paramsG6 = mygridG6.serialize();
	sendFormData.append("G6-XML",paramsG6);
//폼뷰 G5는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G5-CTLCUD",$("#G5-CTLCUD").val());
	sendFormData.append("G5-FOLDER_SEQ",$("#G5-FOLDER_SEQ").val());	//FOLDER_SEQ 전송객체에 넣기
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
			lastinputG2 = new HashMap(); //지정 폴더
				lastinputG4 = new HashMap(); //메뉴폴더별건수
		//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G4_SEARCH(lastinputG4,token);
	alog("G1_SEARCHALL--------------------------end");
}








//그리드 조회(지정 폴더)	
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
					msgNotice("[지정 폴더] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[지정 폴더] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[지정 폴더] Ajax http 500 error ( " + error + " )",3);
                alog("[지정 폴더] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
    }

//지정 폴더
function G2_CHKSAVE(token){
	alog("G2_CHKSAVE()------------start");
	tgrid = mygridG2;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

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
	//CHK 배열 합치기
	sendFormData.append("G2-CHK",arrRows);
	$.ajax({
		type : "POST",
		url : url_G2_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G2_CHKSAVE()------------end");
}
//행추가3 (지정 폴더)	
//그리드 행추가 : 지정 폴더
	function G2_ROWADD(){
		if( !(lastinputG2)){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","","","","",""];//초기값
			addRow(mygridG2,tCols);
		}
	}//엑셀다운		
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
	$("#DATA_HEADERS").val("FOLDER_SEQ,FOLDER_NM,USE_YN,FOLDER_ORD,ADD_DT,ADD_ID,MOD_DT,MOD_ID");
	$("#DATA_WIDTHS").val("60,60,60,60,60,60,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G2_ROWDELETE(){	
        alog("G2_ROWDELETE()------------start");
        delRow(mygridG2);
        alog("G2_ROWDELETE()------------start");
    }
    function G2_HIDDENCOL(){
		alog("G2_HIDDENCOL()..................start");
        if(isToggleHiddenColG2){
            isToggleHiddenColG2 = false;     }else{
            isToggleHiddenColG2 = true;
        }
		alog("G2_HIDDENCOL()..................end");
    }
	//지정 폴더
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
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
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
	$("#DATA_HEADERS").val("CHK,MNU_SEQ,PGMID,MNU_NM,URL,PGMTYPE,MNU_ORD,FOLDER_SEQ,USE_YN,ADD_DT,ADD_ID,MOD_ID,MOD_DT");
	$("#DATA_WIDTHS").val("50,60,100,60,60,60,60,60,60,60,60,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G3_ROWDELETE(){	
        alog("G3_ROWDELETE()------------start");
        delRow(mygridG3);
        alog("G3_ROWDELETE()------------start");
    }
    function G3_HIDDENCOL(){
		alog("G3_HIDDENCOL()..................start");
        if(isToggleHiddenColG3){
            isToggleHiddenColG3 = false;     }else{
            isToggleHiddenColG3 = true;
        }
		alog("G3_HIDDENCOL()..................end");
    }
	//지정 메뉴
function G3_SAVE(token){
	alog("G3_SAVE()------------start");
	tgrid = mygridG3;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
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
	//sendFormData.append("G3-XML" , myXmlString);
	//그리드G3 가져오기	
    mygridG3.setSerializationLevel(true,false,false,false,true,false);
    var paramsG3 = mygridG3.serialize();
	sendFormData.append("G3-XML",paramsG3);

	$.ajax({
		type : "POST",
		url : url_G3_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G3_SAVE()------------end");
}
//그리드 행추가 : 지정 메뉴
	function G3_ROWBULKADD(){
		if( !(lastinputG3json)|| !(lastinputG3json.FOLDER_SEQ) ){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["","","","","","","",lastinputG3.get("G2-FOLDER_SEQ"),"","","","",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG3,tCols);  
		}
	}
			}
	}
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}








//그리드 조회(지정 메뉴)	
function G3_SEARCH(tinput,token){
	alog("G3_SEARCH()------------start");

	var tGrid = mygridG3;

	//그리드 초기화
	tGrid.clearAll();
	//마스터체크 여부 확인 및 체크해제
	if( $("div[id=gridG3] td div.hdrcell input[type=checkbox]")
		&& $("div[id=gridG3] td div.hdrcell input[type=checkbox]").is(":checked")){
		$("div[id=gridG3] td div.hdrcell input[type=checkbox]").prop("checked", false);
	}
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
					msgNotice("[지정 메뉴] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[지정 메뉴] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[지정 메뉴] Ajax http 500 error ( " + error + " )",3);
                alog("[지정 메뉴] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G3_SEARCH()------------end");
    }

//지정 메뉴
function G3_CHKSAVE(token){
	alog("G3_CHKSAVE()------------start");
	tgrid = mygridG3;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

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
	sendFormData.append("G3-CHK",arrRows);	//그리드G3 가져오기	
    mygridG3.setSerializationLevel(true,false,false,false,true,false);
    var paramsG3 = mygridG3.serialize();
	sendFormData.append("G3-XML",paramsG3);
//폼뷰 G5는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G5-CTLCUD",$("#G5-CTLCUD").val());
	sendFormData.append("G5-FOLDER_SEQ",$("#G5-FOLDER_SEQ").val());	//FOLDER_SEQ 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G3_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G3_CHKSAVE()------------end");
}
//행추가3 (지정 메뉴)	
//그리드 행추가 : 지정 메뉴
	function G3_ROWADD(){
		if( !(lastinputG3)|| lastinputG3.get("G3-FOLDER_SEQ") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","","","","",lastinputG3.get("G2-FOLDER_SEQ"),"","","","",""];//초기값
			addRow(mygridG3,tCols);
		}
	}







//그리드 조회(메뉴폴더별건수)	
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
					msgNotice("[메뉴폴더별건수] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[메뉴폴더별건수] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[메뉴폴더별건수] Ajax http 500 error ( " + error + " )",3);
                alog("[메뉴폴더별건수] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G4_SEARCH()------------end");
    }

//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
function G5_MODIFY(){
       alog("[FromView] G5_MODIFY---------------start");
	if( $("#G5-CTLCUD").val() == "C" ){
		alert("조회 후 수정 가능합니다. 신규 모드에서는 수정할 수 없습니다.")
		return;
	}
	if( $("#G5-CTLCUD").val() == "D" ){
		alert("조회 후 수정 가능합니다. 삭제 모드에서는 수정할 수 없습니다.")
		return;
	}

	$("#G5-CTLCUD").val("U");
       alog("[FromView] G5_MODIFY---------------end");
}
//	
function G5_NEW(){
	alog("[FromView] G5_NEW---------------start");
	$("#G5-CTLCUD").val("C");
	//PMGIO 로직
	$("#G5-FOLDER_SEQ").val("");//FOLDER_SEQ 신규초기화	
	alog("DETAILNew50---------------end");
}
//G5_SAVE
//IO_FILE_YN = V/, G/N	
//IO_FILE_YN = N	
function G5_SAVE(token){	
	alog("G5_SAVE---------------start");

	if( !( $("#G5-CTLCUD").val() == "C" || $("#G5-CTLCUD").val() == "U") ){
		alert("신규 또는 수정 모드 진입 후 저장할 수 있습니다.")
		return;
	}



	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG5 != "undefined"  && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP
	//그리드G6 가져오기	
    mygridG6.setSerializationLevel(true,false,false,false,true,false);
    var paramsG6 = mygridG6.serialize();
	sendFormData.append("G6-XML",paramsG6);
//폼뷰 G5는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G5-CTLCUD",$("#G5-CTLCUD").val());
	sendFormData.append("G5-FOLDER_SEQ",$("#G5-FOLDER_SEQ").val());	//FOLDER_SEQ 전송객체에 넣기
	//그리드G3 가져오기	
    mygridG3.setSerializationLevel(true,false,false,false,true,false);
    var paramsG3 = mygridG3.serialize();
	sendFormData.append("G3-XML",paramsG3);

	$.ajax({
		type : "POST",
		url : url_G5_SAVE + "&TOKEN=" + token + "&" + conAllData,
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
	//건수의 폴더
function G6_CHKSAVE(token){
	alog("G6_CHKSAVE()------------start");
	tgrid = mygridG6;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
        //post 만들기
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
	//sendFormData.append("G6-XML" , myXmlString);
	//그리드G6 가져오기	
    mygridG6.setSerializationLevel(true,false,false,false,true,false);
    var paramsG6 = mygridG6.serialize();
	sendFormData.append("G6-XML",paramsG6);
//폼뷰 G5는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G5-CTLCUD",$("#G5-CTLCUD").val());
	sendFormData.append("G5-FOLDER_SEQ",$("#G5-FOLDER_SEQ").val());	//FOLDER_SEQ 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G6_CHKSAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G6_CHKSAVE()------------end");
}
//새로고침	
function G6_RELOAD(token){
  alog("G6_RELOAD-----------------start");
  G6_SEARCH(lastinputG6,token);
}








//그리드 조회(건수의 폴더)	
function G6_SEARCH(tinput,token){
	alog("G6_SEARCH()------------start");

	var tGrid = mygridG6;

	//그리드 초기화
	tGrid.clearAll();
	//마스터체크 여부 확인 및 체크해제
	if( $("div[id=gridG6] td div.hdrcell input[type=checkbox]")
		&& $("div[id=gridG6] td div.hdrcell input[type=checkbox]").is(":checked")){
		$("div[id=gridG6] td div.hdrcell input[type=checkbox]").prop("checked", false);
	}
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
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG6Cnt").text("-");
					}
					msgNotice("[건수의 폴더] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[건수의 폴더] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[건수의 폴더] Ajax http 500 error ( " + error + " )",3);
                alog("[건수의 폴더] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G6_SEARCH()------------end");
    }

