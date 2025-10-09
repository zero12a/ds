var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "1"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //1
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "마스터"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PCD", "COLNM" : "PCD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PNM", "COLNM" : "PNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PCDDESC", "COLNM" : "PCDDESC", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "UITOOL", "COLNM" : "UITOOL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //마스터
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "상세"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "CODED_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "CD", "COLNM" : "CD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "NM", "COLNM" : "NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDDESC", "COLNM" : "CDDESC", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "PCD", "COLNM" : "PCD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDVAL", "COLNM" : "CDVAL", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "CDVAL2", "COLNM" : "CDVAL2", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "CDMIN", "COLNM" : "CDMIN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CDMAX", "COLNM" : "CDMAX", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DATATYPE", "COLNM" : "데이터타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "EDITYN", "COLNM" : "EDITYN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FORMATYN", "COLNM" : "FORMATYN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USEYN", "COLNM" : "사용", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "codemngController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "codemngController?CTLGRP=G1&CTLFNC=RESET";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "codemngController?CTLGRP=G1&CTLFNC=SEARCHALL";
//1 변수 선언	
var obj_G1_ADD_DT; // ADD 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "codemngController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "codemngController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "codemngController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWBULKADD = "codemngController?CTLGRP=G2&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G2_ROWADD = "codemngController?CTLGRP=G2&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G2_RELOAD = "codemngController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "codemngController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "codemngController?CTLGRP=G2&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G2_CHKSAVE = "codemngController?CTLGRP=G2&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G3_SEARCH = "codemngController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "codemngController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "codemngController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWBULKADD = "codemngController?CTLGRP=G3&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G3_ROWADD = "codemngController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "codemngController?CTLGRP=G3&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G3_HIDDENCOL = "codemngController?CTLGRP=G3&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G3_EXCEL = "codemngController?CTLGRP=G3&CTLFNC=EXCEL";
//컨트롤러 경로
var url_G3_CHKSAVE = "codemngController?CTLGRP=G3&CTLFNC=CHKSAVE";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 1
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 마스터
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 상세
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	
	mygridG3.setSizes();

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
	//ADD_DT, ADD 초기화	
  alog("G1_INIT()-------------------------end");
}

	//마스터 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 마스터"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("PCD,PNM,PCDDESC,ORD,UITOOL,사용,삭제YN,ADDDT,MODDT");
	mygridG2.setColumnIds("PCD,PNM,PCDDESC,ORD,UITOOL,USEYN,DELYN,ADDDT,MODDT");
	mygridG2.setInitWidths("60,60,60,30,30,50,40,80,80");
	mygridG2.setColTypes("ed,ed,ed,ed,ed,ed,ed,ed,ed");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("str,str,str,int,str,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_PCD,G2_PNM,G2_PCDDESC,G2_ORD,G2_UITOOL,G2_USEYN,G2_DELYN,G2_ADDDT,G2_MODDT");
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
		 // IO : PCD초기화	
		 // IO : PNM초기화	
		 // IO : PCDDESC초기화	
		 // IO : ORD초기화	
		 // IO : UITOOL초기화	
		 // IO : 사용초기화	
		 // IO : 삭제YN초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
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
			', "G2-PCD" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("PCD")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 상세
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-PCD", mygridG2.cells(rowID,mygridG2.getColIndexById("PCD")).getValue().replace(/&amp;/g, "&")); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 상세
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
	//상세 그리드 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");

	//그리드 초기화
	mygridG3 = new dhtmlXGridObject('gridG3');
	mygridG3.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG3.setUserData("","gridTitle","G3 : 상세"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG3.setHeader("SEQ,CD,NM,CDDESC,PCD,ORD,CDVAL,CDVAL2,CDMIN,CDMAX,데이터타입,EDITYN,FORMATYN,사용,삭제YN,ADDDT,MODDT");
	mygridG3.setColumnIds("CODED_SEQ,CD,NM,CDDESC,PCD,ORD,CDVAL,CDVAL2,CDMIN,CDMAX,DATATYPE,EDITYN,FORMATYN,USEYN,DELYN,ADDDT,MODDT");
	mygridG3.setInitWidths("30,60,60,60,60,60,60,60,60,60,200,60,60,50,40,80,80");
	mygridG3.setColTypes("ro,ed,ed,txttxt,ed,ed,txttxt,txttxt,ed,ed,ed,ed,ed,ed,ed,ed,ed");
	//가로 정렬	
	mygridG3.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG3.setColSorting("int,str,str,str,str,int,str,str,str,str,str,str,str,str,str,str,str");	//렌더링	
	mygridG3.enableSmartRendering(true);
	mygridG3.enableMultiselect(true);
	//mygridG3.setColValidators("G3_CODED_SEQ,G3_CD,G3_NM,G3_CDDESC,G3_PCD,G3_ORD,G3_CDVAL,G3_CDVAL2,G3_CDMIN,G3_CDMAX,G3_DATATYPE,G3_EDITYN,G3_FORMATYN,G3_USEYN,G3_DELYN,G3_ADDDT,G3_MODDT");
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
		 // IO : CD초기화	
		 // IO : NM초기화	
		 // IO : CDDESC초기화	
		 // IO : PCD초기화	
		 // IO : ORD초기화	
		 // IO : CDVAL초기화	
		 // IO : CDVAL2초기화	
		 // IO : CDMIN초기화	
		 // IO : CDMAX초기화	
		 // IO : 데이터타입초기화	
		 // IO : EDITYN초기화	
		 // IO : FORMATYN초기화	
		 // IO : 사용초기화	
		 // IO : 삭제YN초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
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
//D146 그룹별 기능 함수 출력		
//1, 저장	
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
			lastinputG2 = new HashMap(); //마스터
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
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
	//마스터
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
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//행추가3 (마스터)	
//그리드 행추가 : 마스터
	function G2_ROWADD(){
		if( !(lastinputG2)|| lastinputG2.get("G2-MYRADIO") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","","","","","",""];//초기값
			addRow(mygridG2,tCols);
		}
	}//마스터
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








//그리드 조회(마스터)	
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
					msgNotice("[마스터] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[마스터] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[마스터] Ajax http 500 error ( " + error + " )",3);
                alog("[마스터] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
    }

//그리드 행추가 : 마스터
	function G2_ROWBULKADD(){
		if( !(lastinputG2json)|| !(lastinputG2json.MYRADIO) ){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["","","","","","","","",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG2,tCols);  
		}
	}
			}
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
	$("#DATA_HEADERS").val("PCD,PNM,PCDDESC,ORD,UITOOL,USEYN,DELYN,ADDDT,MODDT");
	$("#DATA_WIDTHS").val("60,60,60,30,30,50,40,80,80");
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
	//상세
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
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}








//그리드 조회(상세)	
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
					msgNotice("[상세] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[상세] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[상세] Ajax http 500 error ( " + error + " )",3);
                alog("[상세] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G3_SEARCH()------------end");
    }

//행추가3 (상세)	
//그리드 행추가 : 상세
	function G3_ROWADD(){
		if( !(lastinputG3)|| lastinputG3.get("G3-PCD") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","",lastinputG3.get("G2-PCD"),"","","","","","","","","","","",""];//초기값
			addRow(mygridG3,tCols);
		}
	}//상세
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
	sendFormData.append("G3-CHK",arrRows);
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
	$("#DATA_HEADERS").val("CODED_SEQ,CD,NM,CDDESC,PCD,ORD,CDVAL,CDVAL2,CDMIN,CDMAX,DATATYPE,EDITYN,FORMATYN,USEYN,DELYN,ADDDT,MODDT");
	$("#DATA_WIDTHS").val("30,60,60,60,60,60,60,60,60,60,200,60,60,50,40,80,80");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
//그리드 행추가 : 상세
	function G3_ROWBULKADD(){
		if( !(lastinputG3json)|| !(lastinputG3json.PCD) ){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["","","","",lastinputG3.get("G2-PCD"),"","","","","","","","","","","",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG3,tCols);  
		}
	}
			}
	}
