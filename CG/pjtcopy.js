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
				{ "COLID": "FROM_PJTSEQ", "COLNM" : "FROM_PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TO_PJTSEQ", "COLNM" : "TO_PJTSEQ", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "from CFG"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHKEDIT", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGSEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGID", "COLNM" : "CFGID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGNM", "COLNM" : "CFGNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MVCGBN", "COLNM" : "MVCGBN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PATH", "COLNM" : "PATH", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //from CFG
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "from FILE"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHKEDIT", "COLNM" : "CHK", "OBJTYPE" : "ROWCHKUP" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILESEQ", "COLNM" : "FILESEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILETYPE", "COLNM" : "파일타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILETYPENM", "COLNM" : "타입명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILEFORMAT", "COLNM" : "포멧", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILEEXT", "COLNM" : "확장자", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TEMPLATE", "COLNM" : "템플릿", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILEORD", "COLNM" : "순번", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //from FILE
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "to CFG"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHKROLLUP", "COLNM" : "CHK", "OBJTYPE" : "ROWCHECK" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGSEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGID", "COLNM" : "CFGID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGNM", "COLNM" : "CFGNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MVCGBN", "COLNM" : "MVCGBN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PATH", "COLNM" : "PATH", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CFGORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //to CFG
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "to FILE"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CHKROLLUP", "COLNM" : "CHK", "OBJTYPE" : "ROWCHECK" }
,				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILESEQ", "COLNM" : "FILESEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILETYPE", "COLNM" : "파일타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILETYPENM", "COLNM" : "타입명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILEFORMAT", "COLNM" : "포멧", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MKFILEEXT", "COLNM" : "확장자", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "TEMPLATE", "COLNM" : "템플릿", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILEORD", "COLNM" : "순번", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //to FILE
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "pjtcopyController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "pjtcopyController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "pjtcopyController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_FROM_PJTSEQ; // FROM_PJTSEQ 변수선언
var obj_G1_TO_PJTSEQ; // TO_PJTSEQ 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "pjtcopyController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "pjtcopyController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_RELOAD = "pjtcopyController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "pjtcopyController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G3_SEARCH = "pjtcopyController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "pjtcopyController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_RELOAD = "pjtcopyController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "pjtcopyController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G4_SEARCH = "pjtcopyController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_SAVE = "pjtcopyController?CTLGRP=G4&CTLFNC=SAVE";
//컨트롤러 경로
var url_G4_ROWDELETE = "pjtcopyController?CTLGRP=G4&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G4_RELOAD = "pjtcopyController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_HIDDENCOL = "pjtcopyController?CTLGRP=G4&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G4_CHKSAVE = "pjtcopyController?CTLGRP=G4&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G5_SEARCH = "pjtcopyController?CTLGRP=G5&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G5_SAVE = "pjtcopyController?CTLGRP=G5&CTLFNC=SAVE";
//컨트롤러 경로
var url_G5_ROWDELETE = "pjtcopyController?CTLGRP=G5&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G5_RELOAD = "pjtcopyController?CTLGRP=G5&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G5_HIDDENCOL = "pjtcopyController?CTLGRP=G5&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G5_CHKSAVE = "pjtcopyController?CTLGRP=G5&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG5,isToggleHiddenColG5,lastinputG5,lastinputG5json,lastrowidG5;
var lastselectG5json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : from CFG
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : from FILE
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	
	mygridG3.setSizes();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : to CFG
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	
	mygridG4.setSizes();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : to FILE
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	
	mygridG5.setSizes();

	alog("G5_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G4_RESIZE();
	G5_RESIZE();

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
	//FROM_PJTSEQ, FROM_PJTSEQ 초기화	
	//TO_PJTSEQ, TO_PJTSEQ 초기화	
  alog("G1_INIT()-------------------------end");
}

	//from CFG 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : from CFG"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("#master_checkbox,PJTSEQ,SEQ,사용,CFGID,CFGNM,MVCGBN,PATH,ORD,ADDDT,MODDT");
	mygridG2.setColumnIds("CHKEDIT,PJTSEQ,CFGSEQ,USEYN,CFGID,CFGNM,MVCGBN,PATH,CFGORD,ADDDT,MODDT");
	mygridG2.setInitWidths("50,40,50,50,60,120,60,300,30,60,60");
	mygridG2.setColTypes("ch,ed,ed,ed,ed,ed,ed,ed,ed,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("na,int,int,str,str,str,str,str,int,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_CHKEDIT,G2_PJTSEQ,G2_CFGSEQ,G2_USEYN,G2_CFGID,G2_CFGNM,G2_MVCGBN,G2_PATH,G2_CFGORD,G2_ADDDT,G2_MODDT");
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
		 // IO : CHK초기화	
		 // IO : PJTSEQ초기화	
		 // IO : SEQ초기화	
		 // IO : 사용초기화	
		 // IO : CFGID초기화	
		 // IO : CFGNM초기화	
		 // IO : MVCGBN초기화	
		 // IO : PATH초기화	
		 // IO : ORD초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
	//onCheck
		mygridG2.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG2  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG2.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터롤업 체크] row 한개한개 선택시에는 onCheck이벤트에서 동작되고, 마스터 체크시에는 onEditCell이벤트만 동작됨
			if( mygridG2.getColumnId(cellInd) == "CHKEDIT"	){
				if(RowEditStatus == "" && state == true){
					mygridG2.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG2.setRowTextBold(rowId);
					mygridG2.cells(rowId,cellInd).cell.wasChanged = true;	
				}else if(RowEditStatus == "updated" && state == false){
					mygridG2.setUserData(rowId,"!nativeeditor_status","");
					mygridG2.setRowTextNormal(rowId);
					mygridG2.cells(rowId,cellInd).cell.wasChanged = false;	
				}				
			}
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

		//마스터체크로 한번에 체크시에는 onCheck이벤트는 동작하지 않고
		//onEditCell이벤트만 동작되며 stage 1 이벤트만 있음
		if(mygridG2.getColumnId(cInd) == "CHKEDIT"
			&& nValue != oValue
			&& stage == 1
		){
			//check roll up
			if( RowEditStatus == "" ){
				mygridG2.setUserData(rId,"!nativeeditor_status","updated");
				mygridG2.setRowTextBold(rId);
				mygridG2.cells(rId,cInd).cell.wasChanged = true;
			}else if( RowEditStatus == "updated" ){
				mygridG2.setUserData(rId,"!nativeeditor_status","");
				mygridG2.setRowTextNormal(rId);
				mygridG2.cells(rId,cInd).cell.wasChanged = false;
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
                    mygridG2.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG2.setRowTextBold(rId);
                }
                mygridG2.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G2_INIT()-------------------------end");
}
	//from FILE 그리드 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");

	//그리드 초기화
	mygridG3 = new dhtmlXGridObject('gridG3');
	mygridG3.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG3.setUserData("","gridTitle","G3 : from FILE"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG3.setHeader("#master_checkbox,PJTSEQ,FILESEQ,파일타입,타입명,포멧,확장자,템플릿,순번,사용,ADDDT,MODDT");
	mygridG3.setColumnIds("CHKEDIT,PJTSEQ,FILESEQ,MKFILETYPE,MKFILETYPENM,MKFILEFORMAT,MKFILEEXT,TEMPLATE,FILEORD,USEYN,ADDDT,MODDT");
	mygridG3.setInitWidths("50,40,50,50,50,50,50,50,50,50,60,60");
	mygridG3.setColTypes("ch,ed,ed,ed,ed,ed,ed,ed,ed,ed,ro,ro");
	//가로 정렬	
	mygridG3.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG3.setColSorting("na,int,str,str,str,str,str,str,str,str,str,str");	//렌더링	
	mygridG3.enableSmartRendering(true);
	mygridG3.enableMultiselect(true);
	//mygridG3.setColValidators("G3_CHKEDIT,G3_PJTSEQ,G3_FILESEQ,G3_MKFILETYPE,G3_MKFILETYPENM,G3_MKFILEFORMAT,G3_MKFILEEXT,G3_TEMPLATE,G3_FILEORD,G3_USEYN,G3_ADDDT,G3_MODDT");
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
		 // IO : PJTSEQ초기화	
		 // IO : FILESEQ초기화	
		 // IO : 파일타입초기화	
		 // IO : 타입명초기화	
		 // IO : 포멧초기화	
		 // IO : 확장자초기화	
		 // IO : 템플릿초기화	
		 // IO : 순번초기화	
		 // IO : 사용초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
	//onCheck
		mygridG3.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG3  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG3.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터롤업 체크] row 한개한개 선택시에는 onCheck이벤트에서 동작되고, 마스터 체크시에는 onEditCell이벤트만 동작됨
			if( mygridG3.getColumnId(cellInd) == "CHKEDIT"	){
				if(RowEditStatus == "" && state == true){
					mygridG3.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG3.setRowTextBold(rowId);
					mygridG3.cells(rowId,cellInd).cell.wasChanged = true;	
				}else if(RowEditStatus == "updated" && state == false){
					mygridG3.setUserData(rowId,"!nativeeditor_status","");
					mygridG3.setRowTextNormal(rowId);
					mygridG3.cells(rowId,cellInd).cell.wasChanged = false;	
				}				
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

		//마스터체크로 한번에 체크시에는 onCheck이벤트는 동작하지 않고
		//onEditCell이벤트만 동작되며 stage 1 이벤트만 있음
		if(mygridG3.getColumnId(cInd) == "CHKEDIT"
			&& nValue != oValue
			&& stage == 1
		){
			//check roll up
			if( RowEditStatus == "" ){
				mygridG3.setUserData(rId,"!nativeeditor_status","updated");
				mygridG3.setRowTextBold(rId);
				mygridG3.cells(rId,cInd).cell.wasChanged = true;
			}else if( RowEditStatus == "updated" ){
				mygridG3.setUserData(rId,"!nativeeditor_status","");
				mygridG3.setRowTextNormal(rId);
				mygridG3.cells(rId,cInd).cell.wasChanged = false;
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
                    mygridG3.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG3.setRowTextBold(rId);
                }
                mygridG3.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G3_INIT()-------------------------end");
}
	//to CFG 그리드 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");

	//그리드 초기화
	mygridG4 = new dhtmlXGridObject('gridG4');
	mygridG4.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG4.setUserData("","gridTitle","G4 : to CFG"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG4.setHeader("#master_checkbox,PJTSEQ,SEQ,사용,CFGID,CFGNM,MVCGBN,PATH,ORD,ADDDT,MODDT");
	mygridG4.setColumnIds("CHKROLLUP,PJTSEQ,CFGSEQ,USEYN,CFGID,CFGNM,MVCGBN,PATH,CFGORD,ADDDT,MODDT");
	mygridG4.setInitWidths("30,40,50,50,60,120,60,300,30,60,60");
	mygridG4.setColTypes("ch,ed,ed,ed,ed,ed,ed,ed,ed,ro,ro");
	//가로 정렬	
	mygridG4.setColAlign("left,left,left,left,left,left,left,left,left,left,left");
	mygridG4.setColSorting("na,int,int,str,str,str,str,str,int,str,str");	//렌더링	
	mygridG4.enableSmartRendering(true);
	mygridG4.enableMultiselect(true);
	//mygridG4.setColValidators("G4_CHKROLLUP,G4_PJTSEQ,G4_CFGSEQ,G4_USEYN,G4_CFGID,G4_CFGNM,G4_MVCGBN,G4_PATH,G4_CFGORD,G4_ADDDT,G4_MODDT");
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
		 // IO : CHK초기화	
		 // IO : PJTSEQ초기화	
		 // IO : SEQ초기화	
		 // IO : 사용초기화	
		 // IO : CFGID초기화	
		 // IO : CFGNM초기화	
		 // IO : MVCGBN초기화	
		 // IO : PATH초기화	
		 // IO : ORD초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
	//onCheck
		mygridG4.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG4  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG4.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터체크] ROW 마스터 체크 박스는 변경이면 실제 row 변경 안함
			if(  mygridG4.getColumnId(cellInd) == "CHKROLLUP" ){
				mygridG4.cells(rowId,cellInd).cell.wasChanged = false;	
			}	
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
	//to FILE 그리드 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");

	//그리드 초기화
	mygridG5 = new dhtmlXGridObject('gridG5');
	mygridG5.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG5.setUserData("","gridTitle","G5 : to FILE"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG5.setHeader("#master_checkbox,PJTSEQ,FILESEQ,파일타입,타입명,포멧,확장자,템플릿,순번,사용,ADDDT,MODDT");
	mygridG5.setColumnIds("CHKROLLUP,PJTSEQ,FILESEQ,MKFILETYPE,MKFILETYPENM,MKFILEFORMAT,MKFILEEXT,TEMPLATE,FILEORD,USEYN,ADDDT,MODDT");
	mygridG5.setInitWidths("30,40,50,50,50,50,50,50,50,50,60,60");
	mygridG5.setColTypes("ch,ed,ed,ed,ed,ed,ed,ed,ed,ed,ro,ro");
	//가로 정렬	
	mygridG5.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG5.setColSorting("na,int,str,str,str,str,str,str,str,str,str,str");	//렌더링	
	mygridG5.enableSmartRendering(true);
	mygridG5.enableMultiselect(true);
	//mygridG5.setColValidators("G5_CHKROLLUP,G5_PJTSEQ,G5_FILESEQ,G5_MKFILETYPE,G5_MKFILETYPENM,G5_MKFILEFORMAT,G5_MKFILEEXT,G5_TEMPLATE,G5_FILEORD,G5_USEYN,G5_ADDDT,G5_MODDT");
	mygridG5.splitAt(0);//'freezes' 0 columns 
	mygridG5.init();
	mygridG5.setDateFormat("%Y-%m-%d");

	mygridG5.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG5.enableBlockSelection(true);
		mygridG5.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG5.editor){
				mygridG5.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG5.copyBlockToClipboard();

					var top_row_idx = mygridG5.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG5.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG5.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG5.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG5.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG5.getRowId(j);
						RowEditStatus = mygridG5.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG5.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG5.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : CHK초기화	
		 // IO : PJTSEQ초기화	
		 // IO : FILESEQ초기화	
		 // IO : 파일타입초기화	
		 // IO : 타입명초기화	
		 // IO : 포멧초기화	
		 // IO : 확장자초기화	
		 // IO : 템플릿초기화	
		 // IO : 순번초기화	
		 // IO : 사용초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
	//onCheck
		mygridG5.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG5  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG5.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[마스터체크] ROW 마스터 체크 박스는 변경이면 실제 row 변경 안함
			if(  mygridG5.getColumnId(cellInd) == "CHKROLLUP" ){
				mygridG5.cells(rowId,cellInd).cell.wasChanged = false;	
			}	
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG5.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG5.setRowTextBold(rowId);
					mygridG5.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
	//onEditCell 이벤트
	mygridG5.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG5  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG5.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG5.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG5.setRowTextBold(rId);
                }
                mygridG5.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G5_INIT()-------------------------end");
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
			lastinputG2 = new HashMap(); //from CFG
				lastinputG3 = new HashMap(); //from FILE
				lastinputG4 = new HashMap(); //to CFG
				lastinputG5 = new HashMap(); //to FILE
		//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G3_SEARCH(lastinputG3,token);
	//  호출
	G4_SEARCH(lastinputG4,token);
	//  호출
	G5_SEARCH(lastinputG5,token);
	alog("G1_SEARCHALL--------------------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
	//from CFG
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








//그리드 조회(from CFG)	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");

	var tGrid = mygridG2;

	//그리드 초기화
	tGrid.clearAll();
	//마스터체크 여부 확인 및 체크해제
	if( $("div[id=gridG2] td div.hdrcell input[type=checkbox]")
		&& $("div[id=gridG2] td div.hdrcell input[type=checkbox]").is(":checked")){
		$("div[id=gridG2] td div.hdrcell input[type=checkbox]").prop("checked", false);
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
					msgNotice("[from CFG] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[from CFG] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[from CFG] Ajax http 500 error ( " + error + " )",3);
                alog("[from CFG] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
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
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}








//그리드 조회(from FILE)	
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
					msgNotice("[from FILE] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[from FILE] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[from FILE] Ajax http 500 error ( " + error + " )",3);
                alog("[from FILE] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G3_SEARCH()------------end");
    }

	//from FILE
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
    function G3_HIDDENCOL(){
		alog("G3_HIDDENCOL()..................start");
        if(isToggleHiddenColG3){
            isToggleHiddenColG3 = false;     }else{
            isToggleHiddenColG3 = true;
        }
		alog("G3_HIDDENCOL()..................end");
    }
    function G4_ROWDELETE(){	
        alog("G4_ROWDELETE()------------start");
        delRow(mygridG4);
        alog("G4_ROWDELETE()------------start");
    }
	//to CFG
function G4_SAVE(token){
	alog("G4_SAVE()------------start");
	tgrid = mygridG4;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
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
	//sendFormData.append("G4-XML" , myXmlString);

	$.ajax({
		type : "POST",
		url : url_G4_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G4_SAVE()------------end");
}
//to CFG
function G4_CHKSAVE(token){
	alog("G4_CHKSAVE()------------start");
	tgrid = mygridG4;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

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
	sendFormData.append("G4-CHK",arrRows);	//그리드G4 가져오기	
    mygridG4.setSerializationLevel(true,false,false,false,true,false);
    var paramsG4 = mygridG4.serialize();
	sendFormData.append("G4-XML",paramsG4);

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
		}
	});
	
	alog("G4_CHKSAVE()------------end");
}








//그리드 조회(to CFG)	
function G4_SEARCH(tinput,token){
	alog("G4_SEARCH()------------start");

	var tGrid = mygridG4;

	//그리드 초기화
	tGrid.clearAll();
	//마스터체크 여부 확인 및 체크해제
	if( $("div[id=gridG4] td div.hdrcell input[type=checkbox]")
		&& $("div[id=gridG4] td div.hdrcell input[type=checkbox]").is(":checked")){
		$("div[id=gridG4] td div.hdrcell input[type=checkbox]").prop("checked", false);
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
					msgNotice("[to CFG] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[to CFG] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[to CFG] Ajax http 500 error ( " + error + " )",3);
                alog("[to CFG] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G4_SEARCH()------------end");
    }

    function G4_HIDDENCOL(){
		alog("G4_HIDDENCOL()..................start");
        if(isToggleHiddenColG4){
            isToggleHiddenColG4 = false;     }else{
            isToggleHiddenColG4 = true;
        }
		alog("G4_HIDDENCOL()..................end");
    }
//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}
//새로고침	
function G5_RELOAD(token){
  alog("G5_RELOAD-----------------start");
  G5_SEARCH(lastinputG5,token);
}
    function G5_ROWDELETE(){	
        alog("G5_ROWDELETE()------------start");
        delRow(mygridG5);
        alog("G5_ROWDELETE()------------start");
    }
//to FILE
function G5_CHKSAVE(token){
	alog("G5_CHKSAVE()------------start");
	tgrid = mygridG5;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG5 != "undefined" && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	sendFormData.append("G5-CHK",arrRows);	//그리드G5 가져오기	
    mygridG5.setSerializationLevel(true,false,false,false,true,false);
    var paramsG5 = mygridG5.serialize();
	sendFormData.append("G5-XML",paramsG5);

	$.ajax({
		type : "POST",
		url : url_G5_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G5_CHKSAVE()------------end");
}
	//to FILE
function G5_SAVE(token){
	alog("G5_SAVE()------------start");
	tgrid = mygridG5;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG5 != "undefined" && lastinputG5 != null){
		var tKeys = lastinputG5.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG5.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG5.get(tKeys[i])); 
		}
	}
	//sendFormData.append("G5-XML" , myXmlString);

	$.ajax({
		type : "POST",
		url : url_G5_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G5_SAVE()------------end");
}








//그리드 조회(to FILE)	
function G5_SEARCH(tinput,token){
	alog("G5_SEARCH()------------start");

	var tGrid = mygridG5;

	//그리드 초기화
	tGrid.clearAll();
	//마스터체크 여부 확인 및 체크해제
	if( $("div[id=gridG5] td div.hdrcell input[type=checkbox]")
		&& $("div[id=gridG5] td div.hdrcell input[type=checkbox]").is(":checked")){
		$("div[id=gridG5] td div.hdrcell input[type=checkbox]").prop("checked", false);
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
            url : url_G5_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
            data : sendFormData,
			processData: false,
			contentType: false,
            dataType: "json",
            async: true,
            success: function(data){
                alog("   gridG5 json return----------------------");
                alog("   json data : " + data);
                alog("   json RTN_CD : " + data.RTN_CD);
                alog("   json ERR_CD : " + data.ERR_CD);
                //alog("   json RTN_MSG length : " + data.RTN_MSG.length);

                //그리드에 데이터 반영
                if(data.RTN_CD == "200"){
					var row_cnt = 0;
					if(data.RTN_DATA){
						row_cnt = data.RTN_DATA.rows.length;
						$("#spanG5Cnt").text(row_cnt);
						var beforeDate = new Date();
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG5Cnt").text("-");
					}
					msgNotice("[to FILE] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[to FILE] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[to FILE] Ajax http 500 error ( " + error + " )",3);
                alog("[to FILE] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G5_SEARCH()------------end");
    }

    function G5_HIDDENCOL(){
		alog("G5_HIDDENCOL()..................start");
        if(isToggleHiddenColG5){
            isToggleHiddenColG5 = false;     }else{
            isToggleHiddenColG5 = true;
        }
		alog("G5_HIDDENCOL()..................end");
    }
