var grpInfo = new HashMap();
		//
grpInfo.set(
	"L1", 
		{
			"GRPTYPE": "LAYOUT"
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
			"GRPTYPE": "CONDITION"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"L3", 
		{
			"GRPTYPE": "LAYOUT"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
			]
		}
); //
grpInfo.set(
	"L4", 
		{
			"GRPTYPE": "LAYOUT"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
			]
		}
); //
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "M"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LAYOUTID", "COLNM" : "LAYOUTID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //M
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "D"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LAYOUTDSEQ", "COLNM" : "LAYOUTDSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //D
grpInfo.set(
	"G7", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "S"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LAYOUTSSEQ", "COLNM" : "LAYOUTSSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //S
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_USERDEF = "layout4hController?CTLGRP=G2&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SEARCHALL = "layout4hController?CTLGRP=G2&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SAVE = "layout4hController?CTLGRP=G2&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_RESET = "layout4hController?CTLGRP=G2&CTLFNC=RESET";
// 변수 선언	
var obj_G2_LAYOUTID; // LAYOUTID 변수선언
var obj_G2_ADDDT; // ADDDT 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G5_USERDEF = "layout4hController?CTLGRP=G5&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G5_SEARCH = "layout4hController?CTLGRP=G5&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G5_SAVE = "layout4hController?CTLGRP=G5&CTLFNC=SAVE";
//컨트롤러 경로
var url_G5_ROWDELETE = "layout4hController?CTLGRP=G5&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G5_ROWBULKADD = "layout4hController?CTLGRP=G5&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G5_ROWADD = "layout4hController?CTLGRP=G5&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G5_RELOAD = "layout4hController?CTLGRP=G5&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G5_HIDDENCOL = "layout4hController?CTLGRP=G5&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G5_EXCEL = "layout4hController?CTLGRP=G5&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G5_EDITMODE = "layout4hController?CTLGRP=G5&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G5_CHKSAVE = "layout4hController?CTLGRP=G5&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG5,isToggleHiddenColG5,lastinputG5,lastinputG5json,lastrowidG5;
var lastselectG5json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G6_USERDEF = "layout4hController?CTLGRP=G6&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G6_SEARCH = "layout4hController?CTLGRP=G6&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G6_SAVE = "layout4hController?CTLGRP=G6&CTLFNC=SAVE";
//컨트롤러 경로
var url_G6_ROWDELETE = "layout4hController?CTLGRP=G6&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G6_ROWBULKADD = "layout4hController?CTLGRP=G6&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G6_ROWADD = "layout4hController?CTLGRP=G6&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G6_RELOAD = "layout4hController?CTLGRP=G6&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G6_HIDDENCOL = "layout4hController?CTLGRP=G6&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G6_EXCEL = "layout4hController?CTLGRP=G6&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G6_EDITMODE = "layout4hController?CTLGRP=G6&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G6_CHKSAVE = "layout4hController?CTLGRP=G6&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG6,isToggleHiddenColG6,lastinputG6,lastinputG6json,lastrowidG6;
var lastselectG6json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G7_USERDEF = "layout4hController?CTLGRP=G7&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G7_SEARCH = "layout4hController?CTLGRP=G7&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G7_SAVE = "layout4hController?CTLGRP=G7&CTLFNC=SAVE";
//컨트롤러 경로
var url_G7_ROWDELETE = "layout4hController?CTLGRP=G7&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G7_ROWBULKADD = "layout4hController?CTLGRP=G7&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G7_ROWADD = "layout4hController?CTLGRP=G7&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G7_RELOAD = "layout4hController?CTLGRP=G7&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G7_HIDDENCOL = "layout4hController?CTLGRP=G7&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G7_EXCEL = "layout4hController?CTLGRP=G7&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G7_EDITMODE = "layout4hController?CTLGRP=G7&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G7_CHKSAVE = "layout4hController?CTLGRP=G7&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG7,isToggleHiddenColG7,lastinputG7,lastinputG7json,lastrowidG7;
var lastselectG7json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function L1_RESIZE(){
	alog("L1_RESIZE-----------------start");
	//null
	alog("L1_RESIZE-----------------end");
}
//사이즈 리셋 : 
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 
function L3_RESIZE(){
	alog("L3_RESIZE-----------------start");
	//null
	alog("L3_RESIZE-----------------end");
}
//사이즈 리셋 : 
function L4_RESIZE(){
	alog("L4_RESIZE-----------------start");
	//null
	alog("L4_RESIZE-----------------end");
}
//사이즈 리셋 : M
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	
	mygridG5.setSizes();

	alog("G5_RESIZE-----------------end");
}
//사이즈 리셋 : D
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");
	
	mygridG6.setSizes();

	alog("G6_RESIZE-----------------end");
}
//사이즈 리셋 : S
function G7_RESIZE(){
	alog("G7_RESIZE-----------------start");
	
	mygridG7.setSizes();

	alog("G7_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G2_RESIZE();
	G5_RESIZE();
	G6_RESIZE();
	G7_RESIZE();

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
	L1_INIT();
	G2_INIT();
	L3_INIT();
	L4_INIT();
	G5_INIT();
	G6_INIT();
	G7_INIT();
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
// 그리드 초기화
function L1_INIT(){
	alog("L1_INIT()-------------------------start");

	Split(['#layout_G2','#layout_L3'], {
	direction: 'vertical',
	gutterSize: 6,
	sizes : [0,100],
	minSize : [80,0],
	onDragEnd: function(sizes) {
		//localStorage.setItem('split-sizes', JSON.stringify(sizes))
		//alert(JSON.stringify(sizes));
		resizeGrpAll(); //전체 GRP리사이즈
    }
});

	alog("L1_INIT()-------------------------end");
}// CONDITIONInit	//컨디션 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//LAYOUTID, LAYOUTID 초기화	
	//ADDDT, ADDDT 초기화	
  alog("G2_INIT()-------------------------end");
}

// 그리드 초기화
function L3_INIT(){
	alog("L3_INIT()-------------------------start");

	Split(['#layout_L4','#layout_G7'], {
	direction: 'horizontal',
	gutterSize: 6,
	sizes : [50,50],
	minSize : [0,100],
	onDragEnd: function(sizes) {
		//localStorage.setItem('split-sizes', JSON.stringify(sizes))
		//alert(JSON.stringify(sizes));
		resizeGrpAll(); //전체 GRP리사이즈
    }
});

	alog("L3_INIT()-------------------------end");
}// 그리드 초기화
function L4_INIT(){
	alog("L4_INIT()-------------------------start");

	Split(['#layout_G5','#layout_G6'], {
	direction: 'vertical',
	gutterSize: 6,
	sizes : [50,50],
	minSize : [100,100],
	onDragEnd: function(sizes) {
		//localStorage.setItem('split-sizes', JSON.stringify(sizes))
		//alert(JSON.stringify(sizes));
		resizeGrpAll(); //전체 GRP리사이즈
    }
});

	alog("L4_INIT()-------------------------end");
}	//M 그리드 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");

	//그리드 초기화
	mygridG5 = new dhtmlXGridObject('gridG5');
	mygridG5.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG5.setUserData("","gridTitle","G5 : M"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG5.setHeader("LAYOUTID,ADDDT");
	mygridG5.setColumnIds("LAYOUTID,ADDDT");
	mygridG5.setInitWidths("60px,70px");
	mygridG5.setColTypes("ed,ed");
	//가로 정렬	
	mygridG5.setColAlign("left,left");
	mygridG5.setColSorting("str,str");	//렌더링	
	mygridG5.enableSmartRendering(true);
	mygridG5.enableMultiselect(true);
	//mygridG5.setColValidators("G5_LAYOUTID,G5_ADDDT");
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
		 // IO : LAYOUTID초기화	
		 // IO : ADDDT초기화	
	//onCheck
		mygridG5.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG5  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG5.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
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
		// ROW선택 이벤트 (자식 그룹이 있을때만 호출)
		mygridG5.attachEvent("onRowSelect",function(rowID,celInd){
			RowEditStatus = mygridG5.getUserData(rowID,"!nativeeditor_status");
			if(RowEditStatus == "inserted"){return false;}
			//GRIDRowSelect50(rowID,celInd);
            //편집모드 일때는 하위 새로고침 안하게 하기
            if($("#G5-EDITMODE_EDIT_MODE") && $("#G5-EDITMODE_EDIT_MODE").is(":checked"))return false;
		//A124
		lastinputG6json = jQuery.parseJSON('{ "__NAME":"lastinputG6json"' +
			', "G5-LAYOUTID" : "' + q(mygridG5.cells(rowID,mygridG5.getColIndexById("LAYOUTID")).getValue()) + '"' +
		'}');
		lastinputG6 = new HashMap(); // D
		lastinputG6.set("__ROWID",rowID);
		lastinputG6.set("G5-LAYOUTID", mygridG5.cells(rowID,mygridG5.getColIndexById("LAYOUTID")).getValue().replace(/&amp;/g, "&")); // 
		lastinputG7json = jQuery.parseJSON('{ "__NAME":"lastinputG7json"' +
			', "G5-LAYOUTID" : "' + q(mygridG5.cells(rowID,mygridG5.getColIndexById("LAYOUTID")).getValue()) + '"' +
		'}');
		lastinputG7 = new HashMap(); // S
		lastinputG7.set("__ROWID",rowID);
		lastinputG7.set("G5-LAYOUTID", mygridG5.cells(rowID,mygridG5.getColIndexById("LAYOUTID")).getValue().replace(/&amp;/g, "&")); // 
			G6_SEARCH(lastinputG6,uuidv4()); //자식그룹 호출 : D
			G7_SEARCH(lastinputG7,uuidv4()); //자식그룹 호출 : S
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
	//D 그리드 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");

	//그리드 초기화
	mygridG6 = new dhtmlXGridObject('gridG6');
	mygridG6.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG6.setUserData("","gridTitle","G6 : D"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG6.setHeader("LAYOUTDSEQ,ADDDT");
	mygridG6.setColumnIds("LAYOUTDSEQ,ADDDT");
	mygridG6.setInitWidths("60px,70px");
	mygridG6.setColTypes("ed,ed");
	//가로 정렬	
	mygridG6.setColAlign("left,left");
	mygridG6.setColSorting("str,str");	//렌더링	
	mygridG6.enableSmartRendering(true);
	mygridG6.enableMultiselect(true);
	//mygridG6.setColValidators("G6_LAYOUTDSEQ,G6_ADDDT");
	mygridG6.splitAt(0);//'freezes' 0 columns 
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
		 // IO : LAYOUTDSEQ초기화	
		 // IO : ADDDT초기화	
	//onCheck
		mygridG6.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG6  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG6.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
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
	//S 그리드 초기화
function G7_INIT(){
  alog("G7_INIT()-------------------------start");

	//그리드 초기화
	mygridG7 = new dhtmlXGridObject('gridG7');
	mygridG7.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG7.setUserData("","gridTitle","G7 : S"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG7.setHeader("LAYOUTSSEQ,ADDDT");
	mygridG7.setColumnIds("LAYOUTSSEQ,ADDDT");
	mygridG7.setInitWidths("60px,70px");
	mygridG7.setColTypes("ed,ed");
	//가로 정렬	
	mygridG7.setColAlign("left,left");
	mygridG7.setColSorting("int,str");	//렌더링	
	mygridG7.enableSmartRendering(true);
	mygridG7.enableMultiselect(true);
	//mygridG7.setColValidators("G7_LAYOUTSSEQ,G7_ADDDT");
	mygridG7.splitAt(0);//'freezes' 0 columns 
	mygridG7.init();
	mygridG7.setDateFormat("%Y-%m-%d");

	mygridG7.attachEvent("onDhxCalendarCreated", function(myCal){ myCal.loadUserLanguage( "kr" ); });
		//블럭선택 및 복사
		mygridG7.enableBlockSelection(true);
		mygridG7.attachEvent("onKeyPress",function(code,ctrl,shift){
			alog("onKeyPress.......code=" + code + ", ctrl=" + ctrl + ", shift=" + shift);

			//셀편집모드 아닐때만 블록처리
			if(!mygridG7.editor){
				mygridG7.setCSVDelimiter("	");
				if(code==67&&ctrl){
					mygridG7.copyBlockToClipboard();

					var top_row_idx = mygridG7.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG7.getSelectedBlock().RightBottomRow;
					var copyRowCnt = bottom_row_idx-top_row_idx+1;
					msgNotice( copyRowCnt + "개의 행이 클립보드에 복사되었습니다.",2);

				}
				if(code==86&&ctrl){
					mygridG7.pasteBlockFromClipboard();

					//row상태 변경
					var top_row_idx = mygridG7.getSelectedBlock().LeftTopRow;
					var bottom_row_idx = mygridG7.getSelectedBlock().RightBottomRow;
					for(j=top_row_idx;j<=bottom_row_idx;j++){
						var rowID = mygridG7.getRowId(j);
						RowEditStatus = mygridG7.getUserData(rowID,"!nativeeditor_status");
						if(RowEditStatus == ""){
							mygridG7.setUserData(rowID,"!nativeeditor_status","updated");
							mygridG7.setRowTextBold(rowID);
						}
					}
				}
				return true;
			}else{
				return false;
			}
		});
		 // IO : LAYOUTSSEQ초기화	
		 // IO : ADDDT초기화	
	//onCheck
		mygridG7.attachEvent("onCheck",function(rowId, cellInd, state){
			alog("mygridG7  onCheck ------------------start");
			alog("	rowId=" + rowId + ", cellInd=" + cellInd + ", state=" + state);

			RowEditStatus = mygridG7.getUserData(rowId,"!nativeeditor_status");
			alog("	RowEditStatus=" + RowEditStatus);
			//[일반 체크] 박스는 변경이면 실제 row 변경
			if( 1 == 2 
				){
				if(RowEditStatus == ""){
					mygridG7.setUserData(rowId,"!nativeeditor_status","updated");
					mygridG7.setRowTextBold(rowId);
					mygridG7.cells(rowId,cellInd).cell.wasChanged = true;	
				}
			}
						
		});	
	//onEditCell 이벤트
	mygridG7.attachEvent("onEditCell", function(stage,rId,cInd,nValue,oValue){
		alog("mygridG7  onEditCell ------------------start");
		alog("	stage : " + stage + ", rId : " + rId + ", cInd : " + cInd + ", nValue : " + nValue + ", oValue : " + oValue);

		RowEditStatus = mygridG7.getUserData(rId,"!nativeeditor_status");
		alog("	RowEditStatus = " + RowEditStatus);

		//체크박스 아닌 일반 컬럼
            if(stage == 2
                && RowEditStatus != "inserted"
                && RowEditStatus != "deleted"
                && nValue != oValue
                ){
                if(RowEditStatus == "") {
                    mygridG7.setUserData(rId,"!nativeeditor_status","updated");
                    mygridG7.setRowTextBold(rId);
                }
                mygridG7.cells(rId,cInd).cell.wasChanged = true;
            }

            return true;
	});
	alog("G7_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G2_SEARCHALL(token){
	alog("G2_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G2
			lastinputG5 = new HashMap(); //M
		//  호출
	G5_SEARCH(lastinputG5,token);
	alog("G2_SEARCHALL--------------------------end");
}
//사용자정의함수 : 사용자정의
function G2_USERDEF(token){
	alog("G2_USERDEF-----------------start");

	alog("G2_USERDEF-----------------end");
}
//검색조건 초기화
function G2_RESET(){
	alog("G2_RESET--------------------------start");
	$('#condition')[0].reset();
}
//, 저장	
function G2_SAVE(token){
 alog("G2_SAVE-------------------start");
	//FormData parameter에 담아줌	
	sendFormData = new FormData($("#condition")[0]);	//G2 getparams	
	$.ajax({
		type : "POST",
		url : url_G2_SAVE+"&TOKEN=" + token ,
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
			msgError("[G2] Ajax http 500 error ( " + error + " )");
			alog("[G2] Ajax http 500 error ( " + error + " )");
		}
	});
	alog("G2_SAVE-------------------end");	
}
//그리드 행추가 : M
	function G5_ROWBULKADD(){
		if( !(lastinputG5json)){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG5,tCols);  
		}
	}
			}
	}
//엑셀다운		
function G5_EXCEL(){	
	alog("G5_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG5.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG5.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LAYOUTID,ADDDT");
	$("#DATA_WIDTHS").val("60px,70px");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G5_ROWDELETE(){	
        alog("G5_ROWDELETE()------------start");
        delRow(mygridG5);
        alog("G5_ROWDELETE()------------start");
    }
    function G5_HIDDENCOL(){
		alog("G5_HIDDENCOL()..................start");
        if(isToggleHiddenColG5){
            isToggleHiddenColG5 = false;     }else{
            isToggleHiddenColG5 = true;
        }
		alog("G5_HIDDENCOL()..................end");
    }
//M
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
	sendFormData.append("G5-CHK",arrRows);
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
//사용자정의함수 : 사용자정의
function G5_USERDEF(token){
	alog("G5_USERDEF-----------------start");

	alog("G5_USERDEF-----------------end");
}








//그리드 조회(M)	
function G5_SEARCH(tinput,token){
	alog("G5_SEARCH()------------start");

	var tGrid = mygridG5;

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
					msgNotice("[M] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[M] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[M] Ajax http 500 error ( " + error + " )",3);
                alog("[M] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G5_SEARCH()------------end");
    }

	//M
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
//행추가3 (M)	
//그리드 행추가 : M
	function G5_ROWADD(){
		if( !(lastinputG5)){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["",""];//초기값
			addRow(mygridG5,tCols);
		}
	}//새로고침	
function G5_RELOAD(token){
  alog("G5_RELOAD-----------------start");
  G5_SEARCH(lastinputG5,token);
}
	//D
function G6_SAVE(token){
	alog("G6_SAVE()------------start");
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

	$.ajax({
		type : "POST",
		url : url_G6_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G6_SAVE()------------end");
}
//행추가3 (D)	
//그리드 행추가 : D
	function G6_ROWADD(){
		if( !(lastinputG6)|| lastinputG6.get("G6-LAYOUTID") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["",""];//초기값
			addRow(mygridG6,tCols);
		}
	}//새로고침	
function G6_RELOAD(token){
  alog("G6_RELOAD-----------------start");
  G6_SEARCH(lastinputG6,token);
}
//그리드 행추가 : D
	function G6_ROWBULKADD(){
		if( !(lastinputG6json)|| !(lastinputG6json.LAYOUTID) ){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG6,tCols);  
		}
	}
			}
	}
//엑셀다운		
function G6_EXCEL(){	
	alog("G6_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG6.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG6.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LAYOUTDSEQ,ADDDT");
	$("#DATA_WIDTHS").val("60px,70px");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G6_ROWDELETE(){	
        alog("G6_ROWDELETE()------------start");
        delRow(mygridG6);
        alog("G6_ROWDELETE()------------start");
    }
    function G6_HIDDENCOL(){
		alog("G6_HIDDENCOL()..................start");
        if(isToggleHiddenColG6){
            isToggleHiddenColG6 = false;     }else{
            isToggleHiddenColG6 = true;
        }
		alog("G6_HIDDENCOL()..................end");
    }
//D
function G6_CHKSAVE(token){
	alog("G6_CHKSAVE()------------start");
	tgrid = mygridG6;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

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
	//CHK 배열 합치기
	sendFormData.append("G6-CHK",arrRows);
	$.ajax({
		type : "POST",
		url : url_G6_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
//사용자정의함수 : 사용자정의
function G6_USERDEF(token){
	alog("G6_USERDEF-----------------start");

	alog("G6_USERDEF-----------------end");
}








//그리드 조회(D)	
function G6_SEARCH(tinput,token){
	alog("G6_SEARCH()------------start");

	var tGrid = mygridG6;

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
					msgNotice("[D] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[D] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[D] Ajax http 500 error ( " + error + " )",3);
                alog("[D] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G6_SEARCH()------------end");
    }

//사용자정의함수 : 사용자정의
function G7_USERDEF(token){
	alog("G7_USERDEF-----------------start");

	alog("G7_USERDEF-----------------end");
}








//그리드 조회(S)	
function G7_SEARCH(tinput,token){
	alog("G7_SEARCH()------------start");

	var tGrid = mygridG7;

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
            url : url_G7_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
            data : sendFormData,
			processData: false,
			contentType: false,
            dataType: "json",
            async: true,
            success: function(data){
                alog("   gridG7 json return----------------------");
                alog("   json data : " + data);
                alog("   json RTN_CD : " + data.RTN_CD);
                alog("   json ERR_CD : " + data.ERR_CD);
                //alog("   json RTN_MSG length : " + data.RTN_MSG.length);

                //그리드에 데이터 반영
                if(data.RTN_CD == "200"){
					var row_cnt = 0;
					if(data.RTN_DATA){
						row_cnt = data.RTN_DATA.rows.length;
						$("#spanG7Cnt").text(row_cnt);
						var beforeDate = new Date();
						tGrid.parse(data.RTN_DATA,function(){
							//푸터 합계 처리	

						},"json");
						var afterDate = new Date();
						alog("	parse render time(ms) = " + (afterDate - beforeDate));
						
					}else{
						$("#spanG7Cnt").text("-");
					}
					msgNotice("[S] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[S] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[S] Ajax http 500 error ( " + error + " )",3);
                alog("[S] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G7_SEARCH()------------end");
    }

	//S
function G7_SAVE(token){
	alog("G7_SAVE()------------start");
	tgrid = mygridG7;

	//tgrid.setSerializationLevel(true,false,false,false,true,true);
	//var myXmlString = tgrid.serialize();
        //post 만들기
		sendFormData = new FormData($("#condition")[0]);
		var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG7 != "undefined" && lastinputG7 != null){
		var tKeys = lastinputG7.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG7.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG7.get(tKeys[i])); 
		}
	}
	//sendFormData.append("G7-XML" , myXmlString);

	$.ajax({
		type : "POST",
		url : url_G7_SAVE+"&TOKEN=" + token + "&" + conAllData ,
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
	
	alog("G7_SAVE()------------end");
}
//행추가3 (S)	
//그리드 행추가 : S
	function G7_ROWADD(){
		if( !(lastinputG7)|| lastinputG7.get("G7-LAYOUTID") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["",""];//초기값
			addRow(mygridG7,tCols);
		}
	}//새로고침	
function G7_RELOAD(token){
  alog("G7_RELOAD-----------------start");
  G7_SEARCH(lastinputG7,token);
}
//그리드 행추가 : S
	function G7_ROWBULKADD(){
		if( !(lastinputG7json)|| !(lastinputG7json.LAYOUTID) ){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG7,tCols);  
		}
	}
			}
	}
//엑셀다운		
function G7_EXCEL(){	
	alog("G7_EXCEL-----------------start");
	var myForm = document.excelDownForm;
	var url = "/common/cg_phpexcel.php";
	window.open("" ,"popForm",
		  "toolbar=no, width=540, height=467, directories=no, status=no,    scrollorbars=no, resizable=no");
	myForm.action =url;
	myForm.method="post";
	myForm.target="popForm";

	mygridG7.setSerializationLevel(true,false,false,false,false,true);
	var myXmlString = mygridG7.serialize();        //컨디션 데이터 모두 말기
	$("#DATA_HEADERS").val("LAYOUTSSEQ,ADDDT");
	$("#DATA_WIDTHS").val("60px,70px");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
    function G7_ROWDELETE(){	
        alog("G7_ROWDELETE()------------start");
        delRow(mygridG7);
        alog("G7_ROWDELETE()------------start");
    }
    function G7_HIDDENCOL(){
		alog("G7_HIDDENCOL()..................start");
        if(isToggleHiddenColG7){
            isToggleHiddenColG7 = false;     }else{
            isToggleHiddenColG7 = true;
        }
		alog("G7_HIDDENCOL()..................end");
    }
//S
function G7_CHKSAVE(token){
	alog("G7_CHKSAVE()------------start");
	tgrid = mygridG7;

	//체크된 ROW의 ID 배열로 불러오기
	var arrRows =  tgrid.getCheckedRows(0); //0번째 CHK 컬럼
	//alert(arrRows.length);

	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG7 != "undefined" && lastinputG7 != null){
		var tKeys = lastinputG7.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG7.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG7.get(tKeys[i])); 
		}
	}
	//CHK 배열 합치기
	sendFormData.append("G7-CHK",arrRows);
	$.ajax({
		type : "POST",
		url : url_G7_CHKSAVE + "&TOKEN=" + token + "&" + conAllData,
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
	
	alog("G7_CHKSAVE()------------end");
}
