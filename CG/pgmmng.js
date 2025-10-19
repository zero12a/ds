var grpInfo = new HashMap();
		//
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "2"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTID", "COLNM" : "프로젝트ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "생성일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "MYRADIO", "COLNM" : "나의라디오", "OBJTYPE" : "INPUTRADIO" }
			]
		}
); //2
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "PJT"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTID", "COLNM" : "프로젝트ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTNM", "COLNM" : "프로젝트명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILECHARSET", "COLNM" : "파일 CHARSET", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "UITOOL", "COLNM" : "UITOOL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SVRLANG", "COLNM" : "서버언어", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DEPLOYKEY", "COLNM" : "DEPLOYKEY", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PKGROOT", "COLNM" : "패키지ROOT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "STARTDT", "COLNM" : "시작일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "ENDDT", "COLNM" : "종료일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "PJTORD", "COLNM" : "정렬", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DSNM", "COLNM" : "DB소스", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //PJT
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "PGM"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMSEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "VIEWURL", "COLNM" : "VIEWURL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMTYPE", "COLNM" : "PGMTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "POPWIDTH", "COLNM" : "POPWIDTH", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "POPHEIGHT", "COLNM" : "POPHEIGHT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SECTYPE", "COLNM" : "SECTYPE", "OBJTYPE" : "COMBO" }
,				{ "COLID": "PKGGRP", "COLNM" : "PKGGRP", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOGINYN", "COLNM" : "로그인필요", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DFTCTLGRPID", "COLNM" : "DFTCTLGRPID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DFTCTLFNCID", "COLNM" : "DFTCTLFNCID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PGMORD", "COLNM" : "ORD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //PGM
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "DD"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "DDSEQ", "COLNM" : "DDSEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "COLID", "COLNM" : "컬럼ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLNM", "COLNM" : "컬럼명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "COLSNM", "COLNM" : "단축명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DATATYPE", "COLNM" : "데이터타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DATASIZE", "COLNM" : "데이터사이즈", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJTYPE", "COLNM" : "오브젝트타입", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJTYPE_FORMVIEW", "COLNM" : "OBJ폼뷰", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJTYPE_GRID", "COLNM" : "OBJ그리드", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLWIDTH", "COLNM" : "라벨가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLHEIGHT", "COLNM" : "라벨세로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLALIGN", "COLNM" : "LBLALIGN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJWIDTH", "COLNM" : "오브젝트가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJHEIGHT", "COLNM" : "오브젝트세로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJALIGN", "COLNM" : "가로정렬", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CRYPTCD", "COLNM" : "CRYPTCD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "VALIDSEQ", "COLNM" : "VALIDSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PIYN", "COLNM" : "PIYN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "STOREID", "COLNM" : "STOREID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DSNM", "COLNM" : "DB소스", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "등록일", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //DD
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "DDOBJ"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "DDSEQ", "COLNM" : "DDSEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "DDOBJSEQ", "COLNM" : "DDOBJSEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "GRPTYPE", "COLNM" : "GRPTYPE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJTYPE", "COLNM" : "OBJTYPE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLALIGN", "COLNM" : "LBLALIGN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LBLWIDTH", "COLNM" : "라벨가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJALIGN", "COLNM" : "가로정렬", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJHEIGHT", "COLNM" : "오브젝트세로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "OBJWIDTH", "COLNM" : "오브젝트가로", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FNINIT", "COLNM" : "FNINIT", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "수정일", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //DDOBJ
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G2_SEARCHALL = "pgmmngController?CTLGRP=G2&CTLFNC=SEARCHALL";
//2 변수 선언	
var obj_G2_PJTID; // 프로젝트ID 변수선언
var obj_G2_ADDDT; // 생성일 변수선언
var obj_G2_MYRADIO; // 나의라디오 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G3_EDITMODE = "pgmmngController?CTLGRP=G3&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G3_SEARCH = "pgmmngController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "pgmmngController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_ROWDELETE = "pgmmngController?CTLGRP=G3&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G3_ROWADD = "pgmmngController?CTLGRP=G3&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G3_RELOAD = "pgmmngController?CTLGRP=G3&CTLFNC=RELOAD";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G4_SEARCH = "pgmmngController?CTLGRP=G4&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G4_SAVE = "pgmmngController?CTLGRP=G4&CTLFNC=SAVE";
//컨트롤러 경로
var url_G4_ROWDELETE = "pgmmngController?CTLGRP=G4&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G4_ROWADD = "pgmmngController?CTLGRP=G4&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G4_RELOAD = "pgmmngController?CTLGRP=G4&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G4_EXCEL = "pgmmngController?CTLGRP=G4&CTLFNC=EXCEL";
//그리드 객체
var mygridG4,isToggleHiddenColG4,lastinputG4,lastinputG4json,lastrowidG4;
var lastselectG4json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G5_SEARCH = "pgmmngController?CTLGRP=G5&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G5_SAVE = "pgmmngController?CTLGRP=G5&CTLFNC=SAVE";
//컨트롤러 경로
var url_G5_ROWDELETE = "pgmmngController?CTLGRP=G5&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G5_ROWADD = "pgmmngController?CTLGRP=G5&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G5_RELOAD = "pgmmngController?CTLGRP=G5&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G5_EXCEL = "pgmmngController?CTLGRP=G5&CTLFNC=EXCEL";
//그리드 객체
var mygridG5,isToggleHiddenColG5,lastinputG5,lastinputG5json,lastrowidG5;
var lastselectG5json;//그리드 변수 초기화	
//컨트롤러 경로
var url_G6_SEARCH = "pgmmngController?CTLGRP=G6&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G6_SAVE = "pgmmngController?CTLGRP=G6&CTLFNC=SAVE";
//컨트롤러 경로
var url_G6_ROWDELETE = "pgmmngController?CTLGRP=G6&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G6_ROWADD = "pgmmngController?CTLGRP=G6&CTLFNC=ROWADD";
//컨트롤러 경로
var url_G6_RELOAD = "pgmmngController?CTLGRP=G6&CTLFNC=RELOAD";
//그리드 객체
var mygridG6,isToggleHiddenColG6,lastinputG6,lastinputG6json,lastrowidG6;
var lastselectG6json;//GRP 개별 사이즈리셋
//사이즈 리셋 : 2
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : PJT
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	
	mygridG3.setSizes();

	alog("G3_RESIZE-----------------end");
}
//사이즈 리셋 : PGM
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	
	mygridG4.setSizes();

	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : DD
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	
	mygridG5.setSizes();

	alog("G5_RESIZE-----------------end");
}
//사이즈 리셋 : DDOBJ
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");
	
	mygridG6.setSizes();

	alog("G6_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
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
function G2_INIT(){
  alog("G2_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//PJTID, 프로젝트ID 초기화	
	$("#G2-PJTID").attr("readonly",true);
	$("#G2-PJTID").attr("disabled",true);
	//달력 ADDDT, 생성일
	$( "#G2-ADDDT" ).datepicker(dateFormatJson);
	//G2-생성일
	var cleave = new Cleave('.formatDate', {
        date: true,
        delimiter: '-',
        datePattern: ['Y', 'm', 'd']
    });
	//MYRADIO, 나의라디오 초기화	
setCodeRadio("CONDITION", "G2-MYRADIO", "CRUD");

	$("input:radio[id='G2-MYRADIO']").attr('disabled', true); //나의라디오
  alog("G2_INIT()-------------------------end");
}

	//PJT 그리드 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");

	//그리드 초기화
	mygridG3 = new dhtmlXGridObject('gridG3');
	mygridG3.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG3.setUserData("","gridTitle","G3 : PJT"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG3.setHeader("SEQ,프로젝트ID,프로젝트명,파일 CHARSET,UITOOL,서버언어,DEPLOYKEY,패키지ROOT,시작일,종료일,정렬,DB소스,삭제YN,ADDDT,수정일");
	mygridG3.setColumnIds("PJTSEQ,PJTID,PJTNM,FILECHARSET,UITOOL,SVRLANG,DEPLOYKEY,PKGROOT,STARTDT,ENDDT,PJTORD,DSNM,DELYN,ADDDT,MODDT");
	mygridG3.setInitWidths("60,60,60,60,60,40,50,60,40,40,40,40,40,40,40");
	mygridG3.setColTypes("ed,ed,ed,ed,ed,ed,ed,ed,dhxCalendar,dhxCalendar,ed,ed,ed,ed,ed");
	//가로 정렬	
	mygridG3.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG3.setColSorting("int,str,str,str,str,str,str,str,str,str,int,str,str,str,str");	//렌더링	
	mygridG3.enableSmartRendering(true);
	mygridG3.enableMultiselect(true);
	//mygridG3.setColValidators("G3_PJTSEQ,G3_PJTID,G3_PJTNM,G3_FILECHARSET,G3_UITOOL,G3_SVRLANG,G3_DEPLOYKEY,G3_PKGROOT,G3_STARTDT,G3_ENDDT,G3_PJTORD,G3_DSNM,G3_DELYN,G3_ADDDT,G3_MODDT");
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
		 // IO : 프로젝트ID초기화	
		 // IO : 프로젝트명초기화	
		 // IO : 파일 CHARSET초기화	
		 // IO : UITOOL초기화	
		 // IO : 서버언어초기화	
		 // IO : DEPLOYKEY초기화	
		 // IO : 패키지ROOT초기화	
		 // IO : 시작일초기화	
		 // IO : 종료일초기화	
		 // IO : 정렬초기화	
		 // IO : DB소스초기화	
		 // IO : 삭제YN초기화	
		 // IO : ADDDT초기화	
		 // IO : 수정일초기화	
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
		// ROW선택 이벤트 (자식 그룹이 있을때만 호출)
		mygridG3.attachEvent("onRowSelect",function(rowID,celInd){
			RowEditStatus = mygridG3.getUserData(rowID,"!nativeeditor_status");
			if(RowEditStatus == "inserted"){return false;}
			//GRIDRowSelect30(rowID,celInd);
            //편집모드 일때는 하위 새로고침 안하게 하기
            if($("#G3-EDITMODE_EDIT_MODE") && $("#G3-EDITMODE_EDIT_MODE").is(":checked"))return false;
		//A124
		lastinputG4json = jQuery.parseJSON('{ "__NAME":"lastinputG4json"' +
			', "G3-PJTSEQ" : "' + q(mygridG3.cells(rowID,mygridG3.getColIndexById("PJTSEQ")).getValue()) + '"' +
			', "G3-DSNM" : "' + q(mygridG3.cells(rowID,mygridG3.getColIndexById("DSNM")).getValue()) + '"' +
		'}');
		lastinputG4 = new HashMap(); // PGM
		lastinputG4.set("__ROWID",rowID);
		lastinputG4.set("G3-PJTSEQ", mygridG3.cells(rowID,mygridG3.getColIndexById("PJTSEQ")).getValue().replace(/&amp;/g, "&")); // 
		lastinputG4.set("G3-DSNM", mygridG3.cells(rowID,mygridG3.getColIndexById("DSNM")).getValue().replace(/&amp;/g, "&")); // 
		lastinputG5json = jQuery.parseJSON('{ "__NAME":"lastinputG5json"' +
			', "G3-PJTSEQ" : "' + q(mygridG3.cells(rowID,mygridG3.getColIndexById("PJTSEQ")).getValue()) + '"' +
			', "G3-DSNM" : "' + q(mygridG3.cells(rowID,mygridG3.getColIndexById("DSNM")).getValue()) + '"' +
		'}');
		lastinputG5 = new HashMap(); // DD
		lastinputG5.set("__ROWID",rowID);
		lastinputG5.set("G3-PJTSEQ", mygridG3.cells(rowID,mygridG3.getColIndexById("PJTSEQ")).getValue().replace(/&amp;/g, "&")); // 
		lastinputG5.set("G3-DSNM", mygridG3.cells(rowID,mygridG3.getColIndexById("DSNM")).getValue().replace(/&amp;/g, "&")); // 
			G4_SEARCH(lastinputG4,uuidv4()); //자식그룹 호출 : PGM
			G5_SEARCH(lastinputG5,uuidv4()); //자식그룹 호출 : DD
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
	//PGM 그리드 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");

	//그리드 초기화
	mygridG4 = new dhtmlXGridObject('gridG4');
	mygridG4.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG4.setUserData("","gridTitle","G4 : PGM"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG4.setHeader("PJTSEQ,SEQ,프로그램ID,프로그램이름,VIEWURL,PGMTYPE,POPWIDTH,POPHEIGHT,SECTYPE,PKGGRP,로그인필요,DFTCTLGRPID,DFTCTLFNCID,ORD,ADDDT,MODDT");
	mygridG4.setColumnIds("PJTSEQ,PGMSEQ,PGMID,PGMNM,VIEWURL,PGMTYPE,POPWIDTH,POPHEIGHT,SECTYPE,PKGGRP,LOGINYN,DFTCTLGRPID,DFTCTLFNCID,PGMORD,ADDDT,MODDT");
	mygridG4.setInitWidths("40,50,100,100,100,60,60,60,60,40,70,40,40,,60,60");
	mygridG4.setColTypes("ed,ed,ed,ed,ed,co,ed,ed,co,ed,ed,ed,ed,ed,ed,ed");
	//가로 정렬	
	mygridG4.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG4.setColSorting("int,int,str,str,str,str,str,str,str,str,str,str,str,int,str,str");	//렌더링	
	mygridG4.enableSmartRendering(true);
	mygridG4.enableMultiselect(true);
	//mygridG4.setColValidators("G4_PJTSEQ,G4_PGMSEQ,G4_PGMID,G4_PGMNM,G4_VIEWURL,G4_PGMTYPE,G4_POPWIDTH,G4_POPHEIGHT,G4_SECTYPE,G4_PKGGRP,G4_LOGINYN,G4_DFTCTLGRPID,G4_DFTCTLFNCID,G4_PGMORD,G4_ADDDT,G4_MODDT");
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
		 // IO : PJTSEQ초기화	
		 // IO : SEQ초기화	
		 // IO : 프로그램ID초기화	
		 // IO : 프로그램이름초기화	
		 // IO : VIEWURL초기화	
		apiCodeCombo("G4","PGMTYPE",{"G1-PCD":"PGMTYPE"},""); // IO : PGMTYPE초기화	
		 // IO : POPWIDTH초기화	
		 // IO : POPHEIGHT초기화	
		apiCodeCombo("G4","SECTYPE",{"G1-PCD":"SECTYPE"},""); // IO : SECTYPE초기화	
		 // IO : PKGGRP초기화	
		 // IO : 로그인필요초기화	
		 // IO : DFTCTLGRPID초기화	
		 // IO : DFTCTLFNCID초기화	
		 // IO : ORD초기화	
		 // IO : ADDDT초기화	
		 // IO : MODDT초기화	
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
	//DD 그리드 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");

	//그리드 초기화
	mygridG5 = new dhtmlXGridObject('gridG5');
	mygridG5.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG5.setUserData("","gridTitle","G5 : DD"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG5.setHeader("PJTSEQ,DDSEQ,컬럼ID,컬럼명,단축명,데이터타입,데이터사이즈,오브젝트타입,OBJ폼뷰,OBJ그리드,라벨가로,라벨세로,LBLALIGN,오브젝트가로,오브젝트세로,가로정렬,CRYPTCD,VALIDSEQ,PIYN,STOREID,DB소스,등록일,수정일");
	//헤더 필터추가
	mygridG5.attachHeader(",,#text_filter,,,,,,,,,,,,,,,,,,,,");
	mygridG5.setColumnIds("PJTSEQ,DDSEQ,COLID,COLNM,COLSNM,DATATYPE,DATASIZE,OBJTYPE,OBJTYPE_FORMVIEW,OBJTYPE_GRID,LBLWIDTH,LBLHEIGHT,LBLALIGN,OBJWIDTH,OBJHEIGHT,OBJALIGN,CRYPTCD,VALIDSEQ,PIYN,STOREID,DSNM,ADDDT,MODDT");
	mygridG5.setInitWidths("30,30,100,100,100,100,100,100,60,60,100,100,100,100,100,100,40,60,40,50,40,100,100");
	mygridG5.setColTypes("ro,ro,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed,ed");
	//가로 정렬	
	mygridG5.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG5.setColSorting("int,int,str,str,str,str,int,str,str,str,str,str,str,str,str,str,str,int,str,str,str,str,str");	//렌더링	
	mygridG5.enableSmartRendering(true);
	mygridG5.enableMultiselect(true);
	//mygridG5.setColValidators("G5_PJTSEQ,G5_DDSEQ,G5_COLID,G5_COLNM,G5_COLSNM,G5_DATATYPE,G5_DATASIZE,G5_OBJTYPE,G5_OBJTYPE_FORMVIEW,G5_OBJTYPE_GRID,G5_LBLWIDTH,G5_LBLHEIGHT,G5_LBLALIGN,G5_OBJWIDTH,G5_OBJHEIGHT,G5_OBJALIGN,G5_CRYPTCD,G5_VALIDSEQ,G5_PIYN,G5_STOREID,G5_DSNM,G5_ADDDT,G5_MODDT");
	mygridG5.splitAt(3);//'freezes' 3 columns 
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
		 // IO : PJTSEQ초기화	
		 // IO : DDSEQ초기화	
		 // IO : 컬럼ID초기화	
		 // IO : 컬럼명초기화	
		 // IO : 단축명초기화	
		 // IO : 데이터타입초기화	
		 // IO : 데이터사이즈초기화	
		 // IO : 오브젝트타입초기화	
		 // IO : OBJ폼뷰초기화	
		 // IO : OBJ그리드초기화	
		 // IO : 라벨가로초기화	
		 // IO : 라벨세로초기화	
		 // IO : LBLALIGN초기화	
		 // IO : 오브젝트가로초기화	
		 // IO : 오브젝트세로초기화	
		 // IO : 가로정렬초기화	
		 // IO : CRYPTCD초기화	
		 // IO : VALIDSEQ초기화	
		 // IO : PIYN초기화	
		 // IO : STOREID초기화	
		 // IO : DB소스초기화	
		 // IO : 등록일초기화	
		 // IO : 수정일초기화	
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
		//A124
		lastinputG6json = jQuery.parseJSON('{ "__NAME":"lastinputG6json"' +
			', "G5-DDSEQ" : "' + q(mygridG5.cells(rowID,mygridG5.getColIndexById("DDSEQ")).getValue()) + '"' +
			', "G5-DSNM" : "' + q(mygridG5.cells(rowID,mygridG5.getColIndexById("DSNM")).getValue()) + '"' +
		'}');
		lastinputG6 = new HashMap(); // DDOBJ
		lastinputG6.set("__ROWID",rowID);
		lastinputG6.set("G5-DDSEQ", mygridG5.cells(rowID,mygridG5.getColIndexById("DDSEQ")).getValue().replace(/&amp;/g, "&")); // 
		lastinputG6.set("G5-DSNM", mygridG5.cells(rowID,mygridG5.getColIndexById("DSNM")).getValue().replace(/&amp;/g, "&")); // 
			G6_SEARCH(lastinputG6,uuidv4()); //자식그룹 호출 : DDOBJ
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
	mygridG5.setColumnHidden(mygridG5.getColIndexById("COLSNM"),true); //단축명
	alog("G5_INIT()-------------------------end");
}
	//DDOBJ 그리드 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");

	//그리드 초기화
	mygridG6 = new dhtmlXGridObject('gridG6');
	mygridG6.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG6.setUserData("","gridTitle","G6 : DDOBJ"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG6.setHeader("DDSEQ,DDOBJSEQ,GRPTYPE,OBJTYPE,LBLALIGN,라벨가로,가로정렬,오브젝트세로,오브젝트가로,FNINIT,ADDDT,수정일");
	mygridG6.setColumnIds("DDSEQ,DDOBJSEQ,GRPTYPE,OBJTYPE,LBLALIGN,LBLWIDTH,OBJALIGN,OBJHEIGHT,OBJWIDTH,FNINIT,ADDDT,MODDT");
	mygridG6.setInitWidths("30,50,120,100,100,100,100,100,100,300,40,40");
	mygridG6.setColTypes("ro,ro,ed,ed,ed,ed,ed,ed,ed,txttxt,ro,ro");
	//가로 정렬	
	mygridG6.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG6.setColSorting("int,int,str,str,str,str,str,str,str,str,str,str");	//렌더링	
	mygridG6.enableSmartRendering(true);
	mygridG6.enableMultiselect(true);
	//mygridG6.setColValidators("G6_DDSEQ,G6_DDOBJSEQ,G6_GRPTYPE,G6_OBJTYPE,G6_LBLALIGN,G6_LBLWIDTH,G6_OBJALIGN,G6_OBJHEIGHT,G6_OBJWIDTH,G6_FNINIT,G6_ADDDT,G6_MODDT");
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
		 // IO : DDSEQ초기화	
		 // IO : DDOBJSEQ초기화	
		 // IO : GRPTYPE초기화	
		 // IO : OBJTYPE초기화	
		 // IO : LBLALIGN초기화	
		 // IO : 라벨가로초기화	
		 // IO : 가로정렬초기화	
		 // IO : 오브젝트세로초기화	
		 // IO : 오브젝트가로초기화	
		 // IO : FNINIT초기화	
		 // IO : ADDDT초기화	
		 // IO : 수정일초기화	
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
//D146 그룹별 기능 함수 출력		
// CONDITIONSearch	
function G2_SEARCHALL(token){
	alog("G2_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G2
			lastinputG3 = new HashMap(); //PJT
		//  호출
	G3_SEARCH(lastinputG3,token);
	alog("G2_SEARCHALL--------------------------end");
}
//행추가3 (PJT)	
//그리드 행추가 : PJT
	function G3_ROWADD(){
		if( !(lastinputG3)){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","","","","","","","","","","","",""];//초기값
			addRow(mygridG3,tCols);
		}
	}    function G3_ROWDELETE(){	
        alog("G3_ROWDELETE()------------start");
        delRow(mygridG3);
        alog("G3_ROWDELETE()------------start");
    }
	//PJT
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








//그리드 조회(PJT)	
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

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
					msgNotice("[PJT] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[PJT] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[PJT] Ajax http 500 error ( " + error + " )",3);
                alog("[PJT] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G3_SEARCH()------------end");
    }

//새로고침	
function G4_RELOAD(token){
  alog("G4_RELOAD-----------------start");
  G4_SEARCH(lastinputG4,token);
}








//그리드 조회(PGM)	
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

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
					msgNotice("[PGM] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[PGM] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[PGM] Ajax http 500 error ( " + error + " )",3);
                alog("[PGM] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G4_SEARCH()------------end");
    }

//행추가3 (PGM)	
//그리드 행추가 : PGM
	function G4_ROWADD(){
		if( !(lastinputG4)|| lastinputG4.get("G4-DSNM") == ""|| lastinputG4.get("G4-PJTSEQ") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = [lastinputG4.get("G3-PJTSEQ"),"","","","","","","","","","","","","","",""];//초기값
			addRow(mygridG4,tCols);
		}
	}    function G4_ROWDELETE(){	
        alog("G4_ROWDELETE()------------start");
        delRow(mygridG4);
        alog("G4_ROWDELETE()------------start");
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
	$("#DATA_HEADERS").val("PJTSEQ,PGMSEQ,PGMID,PGMNM,VIEWURL,PGMTYPE,POPWIDTH,POPHEIGHT,SECTYPE,PKGGRP,LOGINYN,DFTCTLGRPID,DFTCTLFNCID,PGMORD,ADDDT,MODDT");
	$("#DATA_WIDTHS").val("40,50,100,100,100,60,60,60,60,40,70,40,40,,60,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
	//PGM
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
	//그리드G4 가져오기	
    mygridG4.setSerializationLevel(true,false,false,false,true,false);
    var paramsG4 = mygridG4.serialize();
	sendFormData.append("G4-XML",paramsG4);

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
	$("#DATA_HEADERS").val("PJTSEQ,DDSEQ,COLID,COLNM,COLSNM,DATATYPE,DATASIZE,OBJTYPE,OBJTYPE_FORMVIEW,OBJTYPE_GRID,LBLWIDTH,LBLHEIGHT,LBLALIGN,OBJWIDTH,OBJHEIGHT,OBJALIGN,CRYPTCD,VALIDSEQ,PIYN,STOREID,DSNM,ADDDT,MODDT");
	$("#DATA_WIDTHS").val("30,30,100,100,100,100,100,100,60,60,100,100,100,100,100,100,40,60,40,50,40,100,100");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
	//DD
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
	//그리드G5 가져오기	
    mygridG5.setSerializationLevel(true,false,false,false,true,false);
    var paramsG5 = mygridG5.serialize();
	sendFormData.append("G5-XML",paramsG5);

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
//새로고침	
function G5_RELOAD(token){
  alog("G5_RELOAD-----------------start");
  G5_SEARCH(lastinputG5,token);
}








//그리드 조회(DD)	
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

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
					msgNotice("[DD] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[DD] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[DD] Ajax http 500 error ( " + error + " )",3);
                alog("[DD] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G5_SEARCH()------------end");
    }

//행추가3 (DD)	
//그리드 행추가 : DD
	function G5_ROWADD(){
		if( !(lastinputG5)|| lastinputG5.get("G5-DSNM") == ""|| lastinputG5.get("G5-PJTSEQ") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = [lastinputG5.get("G3-PJTSEQ"),"","","","","","","","","","","","","","","","","","","",lastinputG5.get("G3-DSNM"),"",""];//초기값
			addRow(mygridG5,tCols);
		}
	}    function G5_ROWDELETE(){	
        alog("G5_ROWDELETE()------------start");
        delRow(mygridG5);
        alog("G5_ROWDELETE()------------start");
    }
//행추가3 (DDOBJ)	
//그리드 행추가 : DDOBJ
	function G6_ROWADD(){
		if( !(lastinputG6)|| lastinputG6.get("G6-PJTSEQ") == ""|| lastinputG6.get("G6-DDSEQ") == ""|| lastinputG6.get("G6-DSNM") == ""){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = [lastinputG6.get("G5-DDSEQ"),"","","","","","","","","","",""];//초기값
			addRow(mygridG6,tCols);
		}
	}    function G6_ROWDELETE(){	
        alog("G6_ROWDELETE()------------start");
        delRow(mygridG6);
        alog("G6_ROWDELETE()------------start");
    }
	//DDOBJ
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
	//그리드G6 가져오기	
    mygridG6.setSerializationLevel(true,false,false,false,true,false);
    var paramsG6 = mygridG6.serialize();
	sendFormData.append("G6-XML",paramsG6);

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
//새로고침	
function G6_RELOAD(token){
  alog("G6_RELOAD-----------------start");
  G6_SEARCH(lastinputG6,token);
}








//그리드 조회(DDOBJ)	
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
	sendFormData.append("G2-MYRADIO",$('input[name="G2-MYRADIO"]:checked').val());//radio 선택값 가져오기.

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
					msgNotice("[DDOBJ] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[DDOBJ] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[DDOBJ] Ajax http 500 error ( " + error + " )",3);
                alog("[DDOBJ] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G6_SEARCH()------------end");
    }

