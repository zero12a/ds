var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "컨디션"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //컨디션
grpInfo.set(
	"G4", 
		{
			"GRPTYPE": "BIVIEW"
			,"GRPNM": "a"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BIVAL1A", "COLNM" : "BIVAL1A", "OBJTYPE" : "BIVAL1A" }
			]
		}
); //a
grpInfo.set(
	"G5", 
		{
			"GRPTYPE": "BIVIEW"
			,"GRPNM": "b"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BIVAL1A", "COLNM" : "BIVAL1A", "OBJTYPE" : "BIVAL1B" }
			]
		}
); //b
grpInfo.set(
	"G6", 
		{
			"GRPTYPE": "BIVIEW"
			,"GRPNM": "c"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BIVAL1A", "COLNM" : "BIVAL1A", "OBJTYPE" : "BIVAL2C" }
			]
		}
); //c
grpInfo.set(
	"G7", 
		{
			"GRPTYPE": "BIVIEW"
			,"GRPNM": "d"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "BIVAL1A", "COLNM" : "BIVAL1A", "OBJTYPE" : "BIVAL2D" }
			]
		}
); //d
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "그리드"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FILESEQ", "COLNM" : "FILESEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILESVRNM", "COLNM" : "FILESVRNM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILENM", "COLNM" : "FILENM", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "FILETYPE", "COLNM" : "FILETYPE", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILESIZE", "COLNM" : "FILESIZE", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //그리드
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "폼뷰"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "FILESEQ", "COLNM" : "FILESEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILE1", "COLNM" : "파일1", "OBJTYPE" : "FILE" }
,				{ "COLID": "LINKVIEW", "COLNM" : "링크뷰", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "HIDDENLINK", "COLNM" : "히든링크", "OBJTYPE" : "HIDDENLINK" }
			]
		}
); //폼뷰
grpInfo.set(
	"G8", 
		{
			"GRPTYPE": "BTTABLE"
			,"GRPNM": "BT그리드"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "ADD_ID", "COLNM" : "ADD_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MOD_DT", "COLNM" : "MOD", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "MOD_ID", "COLNM" : "MOD_ID", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //BT그리드
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_USERDEF = "filetestController?CTLGRP=G1&CTLFNC=USERDEF";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "filetestController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "filetestController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "filetestController?CTLGRP=G1&CTLFNC=RESET";
//컨디션 변수 선언	
var obj_G1_ADDDT; // ADDDT 변수선언
var obj_G1_MODDT; // MODDT 변수선언
	//a 글로벌 변수 초기화
//BI뷰 컨트롤러 경로
var url_G4_SEARCH = "filetestController?CTLGRP=G4&CTLFNC=SEARCH";
	//b 글로벌 변수 초기화
//BI뷰 컨트롤러 경로
var url_G5_SEARCH = "filetestController?CTLGRP=G5&CTLFNC=SEARCH";
	//c 글로벌 변수 초기화
//BI뷰 컨트롤러 경로
var url_G6_SEARCH = "filetestController?CTLGRP=G6&CTLFNC=SEARCH";
	//d 글로벌 변수 초기화
//BI뷰 컨트롤러 경로
var url_G7_SEARCH = "filetestController?CTLGRP=G7&CTLFNC=SEARCH";
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_USERDEF = "filetestController?CTLGRP=G2&CTLFNC=USERDEF";
//컨트롤러 경로
var url_G2_SEARCH = "filetestController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "filetestController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "filetestController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWBULKADD = "filetestController?CTLGRP=G2&CTLFNC=ROWBULKADD";
//컨트롤러 경로
var url_G2_ROWADD = "filetestController?CTLGRP=G2&CTLFNC=ROWADD";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_USERDEF = "filetestController?CTLGRP=G3&CTLFNC=USERDEF";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "filetestController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "filetestController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_NEW2 = "filetestController?CTLGRP=G3&CTLFNC=NEW2";
var obj_G3_FILESEQ;   // FILESEQ 글로벌 변수 선언
var obj_G3_FILE1;   // 파일1 글로벌 변수 선언
var obj_G3_LINKVIEW;   // 링크뷰 글로벌 변수 선언
var obj_G3_HIDDENLINK;   // 히든링크 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 컨디션
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : a
function G4_RESIZE(){
	alog("G4_RESIZE-----------------start");
	//null
	alog("G4_RESIZE-----------------end");
}
//사이즈 리셋 : b
function G5_RESIZE(){
	alog("G5_RESIZE-----------------start");
	//null
	alog("G5_RESIZE-----------------end");
}
//사이즈 리셋 : c
function G6_RESIZE(){
	alog("G6_RESIZE-----------------start");
	//null
	alog("G6_RESIZE-----------------end");
}
//사이즈 리셋 : d
function G7_RESIZE(){
	alog("G7_RESIZE-----------------start");
	//null
	alog("G7_RESIZE-----------------end");
}
//사이즈 리셋 : 그리드
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 폼뷰
function G3_RESIZE(){
	alog("G3_RESIZE-----------------start");
	//null
	alog("G3_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G4_RESIZE();
	G5_RESIZE();
	G6_RESIZE();
	G7_RESIZE();
	G2_RESIZE();
	G3_RESIZE();
	G8_RESIZE();

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
	G4_INIT();
	G5_INIT();
	G6_INIT();
	G7_INIT();
	G2_INIT();
	G3_INIT();
	G8_INIT();
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
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
	//ADDDT, ADDDT 초기화	
	//MODDT, MODDT 초기화	
  alog("G1_INIT()-------------------------end");
}

//a BI뷰 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");
}
//a BI뷰 초기화
function G4_INIT(){
  alog("G4_INIT()-------------------------start");
		
		$("#G4-BIVAL1A-VALUE").text("-");//BIVAL1A 변수세팅
  alog("G4_INIT()-------------------------end");
}
//b BI뷰 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");
}
//b BI뷰 초기화
function G5_INIT(){
  alog("G5_INIT()-------------------------start");
		
		$("#G5-BIVAL1A-VALUE").text("-");//BIVAL1A 변수세팅
  alog("G5_INIT()-------------------------end");
}
//c BI뷰 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");
}
//c BI뷰 초기화
function G6_INIT(){
  alog("G6_INIT()-------------------------start");
		
			$("#G6-BIVAL1A-VALUE1").text("-");//BIVAL1A NEW
			$("#G6-BIVAL1A-VALUE2").text("-");//BIVAL1A NEW
  alog("G6_INIT()-------------------------end");
}
//d BI뷰 초기화
function G7_INIT(){
  alog("G7_INIT()-------------------------start");
}
//d BI뷰 초기화
function G7_INIT(){
  alog("G7_INIT()-------------------------start");
		
			$("#G7-BIVAL1A-VALUE1").text("-");//BIVAL1A NEW
			$("#G7-BIVAL1A-VALUE2").text("-");//BIVAL1A NEW
  alog("G7_INIT()-------------------------end");
}
	//그리드 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 그리드"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("FILESEQ,FILESVRNM,FILENM,FILETYPE,FILESIZE");
	mygridG2.setColumnIds("FILESEQ,FILESVRNM,FILENM,FILETYPE,FILESIZE");
	mygridG2.setInitWidths("50,60,60,60,50");
	mygridG2.setColTypes("ed,ed,ro,ed,ed");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left");
	mygridG2.setColSorting("str,str,str,str,int");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_FILESEQ,G2_FILESVRNM,G2_FILENM,G2_FILETYPE,G2_FILESIZE");
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
		 // IO : FILESEQ초기화	
		 // IO : FILESVRNM초기화	
		 // IO : FILENM초기화	
		 // IO : FILETYPE초기화	
		 // IO : FILESIZE초기화	
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
			', "G2-FILESEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("FILESEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 폼뷰
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-FILESEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("FILESEQ")).getValue().replace(/&amp;/g, "&")); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 폼뷰
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
//폼뷰 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//FILESEQ, FILESEQ 초기화	
	//FILE1, 파일1 초기화	
	//LINKVIEW, 링크뷰 초기화	
	//HIDDENLINK, 히든링크 초기화	
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
//컨디션, 저장	
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
			lastinputG4 = new HashMap(); //a
				lastinputG5 = new HashMap(); //b
				lastinputG6 = new HashMap(); //c
				lastinputG7 = new HashMap(); //d
				lastinputG2 = new HashMap(); //그리드
				lastinputG8 = new HashMap(); //BT그리드
		//  호출
	G4_SEARCH(lastinputG4,token);
	//  호출
	G5_SEARCH(lastinputG5,token);
	//  호출
	G6_SEARCH(lastinputG6,token);
	//  호출
	G7_SEARCH(lastinputG7,token);
	//  호출
	G2_SEARCH(lastinputG2,token);
	//  호출
	G8_SEARCH(lastinputG8,token);
	alog("G1_SEARCHALL--------------------------end");
}
function G4_SEARCH(tinput,token){
       alog("(BIVIEW) G4_SEARCH---------------start");

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



    $.ajax({
        type : "POST",
        url : url_G4_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("[a] 정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("[a] 정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("[a] 오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}
			//SETVAL  가져와서 세팅
			if(data.RTN_DATA.BIVAL1A){
				$("#G4-BIVAL1A-VALUE").text(data.RTN_DATA.BIVAL1A);//BIVAL1A 세팅
			}else{
				alert("BIVAL1A 값이 없습니다.");
			}
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(BIVIEW) G4_SEARCH---------------end");

}
function G5_SEARCH(tinput,token){
       alog("(BIVIEW) G5_SEARCH---------------start");

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



    $.ajax({
        type : "POST",
        url : url_G5_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("[b] 정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("[b] 정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("[b] 오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}
			//SETVAL  가져와서 세팅
			if(data.RTN_DATA.BIVAL1A){
				$("#G5-BIVAL1A-VALUE").text(data.RTN_DATA.BIVAL1A);//BIVAL1A 세팅
			}else{
				alert("BIVAL1A 값이 없습니다.");
			}
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(BIVIEW) G5_SEARCH---------------end");

}
function G6_SEARCH(tinput,token){
       alog("(BIVIEW) G6_SEARCH---------------start");

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



    $.ajax({
        type : "POST",
        url : url_G6_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("[c] 정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("[c] 정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("[c] 오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}
			//SETVAL  가져와서 세팅
		var tArr = data.RTN_DATA.BIVAL1A.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G6-BIVAL1A-VALUE1").text(tArr[0]);//BIVAL1A 변수세팅
				$("#G6-BIVAL1A-VALUE2").text(tArr[1]);//BIVAL1A 변수세팅
			}else{
				alog("BIVAL1A의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("BIVAL1A 컬럼이 없습니다.");
		}
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(BIVIEW) G6_SEARCH---------------end");

}
function G7_SEARCH(tinput,token){
       alog("(BIVIEW) G7_SEARCH---------------start");

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



    $.ajax({
        type : "POST",
        url : url_G7_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
        data : sendFormData,
		processData: false,
		contentType: false,
        dataType: "json",
        success: function(data){
            alog(data);

			if(data && data.RTN_CD == "200"){
				if(data.RTN_DATA){
					msgNotice("[d] 정상적으로 조회되었습니다.",1);
				}else{
					msgNotice("[d] 정상적으로 조회되었으나 데이터가 없습니다.",2);
					return;
				}
			}else{
				msgError("[d] 오류가 발생했습니다("+ data.ERR_CD + ")." + data.RTN_MSG,3);
				return;
			}
			//SETVAL  가져와서 세팅
		var tArr = data.RTN_DATA.BIVAL1A.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G7-BIVAL1A-VALUE1").text(tArr[0]);//BIVAL1A 변수세팅
				$("#G7-BIVAL1A-VALUE2").text(tArr[1]);//BIVAL1A 변수세팅
			}else{
				alog("BIVAL1A의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("BIVAL1A 컬럼이 없습니다.");
		}
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(BIVIEW) G7_SEARCH---------------end");

}








//그리드 조회(그리드)	
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
					msgNotice("[그리드] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[그리드] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[그리드] Ajax http 500 error ( " + error + " )",3);
                alog("[그리드] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
    }

//그리드 행추가 : 그리드
	function G2_ROWBULKADD(){
		if( !(lastinputG2json)){
			msgError("조회 후에 행추가 가능합니다",3);
		}else{
			var tCols = ["","","","",""];//초기값

	var rowcnt = prompt("Please enter row's count", "input number");
	if($.isNumeric(rowcnt)){
		for(k=0;k<rowcnt;k++){
			addRow(mygridG2,tCols);  
		}
	}
			}
	}
//사용자정의함수 : 사용자정의
function G2_USERDEF(token){
	alog("G2_USERDEF-----------------start");

	alog("G2_USERDEF-----------------end");
}
//행추가3 (그리드)	
//그리드 행추가 : 그리드
	function G2_ROWADD(){
		if( !(lastinputG2)){
			msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
		}else{
			var tCols = ["","","","",""];//초기값
			addRow(mygridG2,tCols);
		}
	}	//그리드
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
    function G2_ROWDELETE(){	
        alog("G2_ROWDELETE()------------start");
        delRow(mygridG2);
        alog("G2_ROWDELETE()------------start");
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
			$("#G3-FILESEQ").val(data.RTN_DATA.FILESEQ);//FILESEQ 변수세팅
		if(data.RTN_DATA.FILE1){
			var tarr = data.RTN_DATA.FILE1.split("^");//CD^NM
			if(tarr.length == 2){
				var fileNm = tarr[1] ;
				if(fileNm != ""){
					$("#G3-FILE1-LINK").attr("href",tarr[0]);//파일1 링크세팅
					$("#G3-FILE1-NM").text(fileNm);//파일1 파일이름세팅
					$("#DIV-G3-FILE1").css("display", ""); //영역보이기
				}else{
					alog("FILE1 파일1 파일 이름이 없습니다.");
				}
			}else{
				alert("G3-FILE1 값이 멀티값이 아닙니다.");
			}
		}else{
			$("#G3-FILE1").val("");//값 비우기
			$("#G3-FILE1-LINK").attr("href","");//파일1 링크세팅
			$("#G3-FILE1-NM").text("");//파일1 파일이름세팅

			$("#DIV-G3-FILE1").css("display", "none"); //영역숨기기
			alog("G3-FILE1 값이 없습니다..");
		}
		var tArr = data.RTN_DATA.LINKVIEW.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-LINKVIEW-LINK").attr("href",tArr[0]);//링크뷰 변수세팅
				$("#G3-LINKVIEW-NM").text(tArr[1]);//링크뷰 변수세팅
			}else{
				alog("LINKVIEW의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("LINKVIEW 컬럼이 없습니다.");
		}
		var tArr = data.RTN_DATA.HIDDENLINK.split("^");
		if(tArr){
			if(tArr.length == 2){
				if(tArr[1] != ""){
					$("#DIV_G3-HIDDENLINK").css("display", ""); //영역보이게
					$("#G3-HIDDENLINK-LINK").attr("href",tArr[0]);//히든링크 변수세팅
					$("#G3-HIDDENLINK-NM").text(tArr[1]);//히든링크 변수세팅
				}else{
					$("#DIV_G3-HIDDENLINK").css("display", "none"); //영역숨기기
				}
			}else{
				alog("HIDDENLINK의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("HIDDENLINK 컬럼이 없습니다.");
		}
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
	sendFormData.append("G3-FILESEQ",$("#G3-FILESEQ").val());	//FILESEQ 전송객체에 넣기
	if($("#G3_FILE1").val() != ""){
		sendFormData.append("G3-FILE1",$("input[name=G3-FILE1]")[0].files[0]);
	}

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
function G3_NEW2(){
	alog("[FromView] G3_NEW2---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-FILESEQ").val("");//FILESEQ 신규초기화	
	$("#G3-FILE1-LINK").attr("href","");//파일1 NEW
	$("#G3-FILE1-NM").text("");//파일1 NEW
			$("#G3-LINKVIEW-LINK").attr("href","");//링크뷰 신규
			$("#G3-LINKVIEW-NM").text("");//링크뷰 신규
			$("#DIV_G3-LINKVIEW").css("display", "none");
			$("#G3-HIDDENLINK-LINK").attr("href","");//히든링크 신규
			$("#G3-HIDDENLINK-NM").text("");//히든링크 신규
			$("#DIV_G3-HIDDENLINK").css("display", "none");

	alog("DETAILNew30---------------end");
}
