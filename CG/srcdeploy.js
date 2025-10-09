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
				{ "COLID": "PJTNM", "COLNM" : "프로젝트명", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "프로젝트목록"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTID", "COLNM" : "프로젝트ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTNM", "COLNM" : "프로젝트명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILECHARSET", "COLNM" : "파일 CHARSET", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "UITOOL", "COLNM" : "UITOOL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SVRLANG", "COLNM" : "서버언어", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DEPLOYKEY", "COLNM" : "DEPLOYKEY", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PKGROOT", "COLNM" : "패키지ROOT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "STARTDT", "COLNM" : "시작일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "ENDDT", "COLNM" : "종료일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //프로젝트목록
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "배포 상세"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTID", "COLNM" : "프로젝트ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PJTNM", "COLNM" : "프로젝트명", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FILECHARSET", "COLNM" : "파일 CHARSET", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "UITOOL", "COLNM" : "UITOOL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SVRLANG", "COLNM" : "서버언어", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "DEPLOYKEY", "COLNM" : "DEPLOYKEY", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "PKGROOT", "COLNM" : "패키지ROOT", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "STARTDT", "COLNM" : "시작일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "ENDDT", "COLNM" : "종료일", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "DELYN", "COLNM" : "삭제YN", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "GITINIT", "COLNM" : "GIT", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "GITCOMMIT", "COLNM" : "GITCOMMIT", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "GITPUSH", "COLNM" : "GITPUSH", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "GITFORCEPUSH", "COLNM" : "GITFORCEPUSH", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "GITVIEWCONFIG", "COLNM" : "GITVIEWCONFIG", "OBJTYPE" : "LINKVIEW" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "MODDT", "COLNM" : "MODDT", "OBJTYPE" : "TEXTVIEW" }
			]
		}
); //배포 상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "srcdeployController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "srcdeployController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_PJTNM; // 프로젝트명 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "srcdeployController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "srcdeployController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_RELOAD = "srcdeployController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_EXCEL = "srcdeployController?CTLGRP=G2&CTLFNC=EXCEL";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "srcdeployController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_EXCEL = "srcdeployController?CTLGRP=G3&CTLFNC=EXCEL";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "srcdeployController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "srcdeployController?CTLGRP=G3&CTLFNC=SAVE";
var obj_G3_PJTSEQ;   // PJTSEQ 글로벌 변수 선언
var obj_G3_PJTID;   // 프로젝트ID 글로벌 변수 선언
var obj_G3_PJTNM;   // 프로젝트명 글로벌 변수 선언
var obj_G3_FILECHARSET;   // 파일 CHARSET 글로벌 변수 선언
var obj_G3_UITOOL;   // UITOOL 글로벌 변수 선언
var obj_G3_SVRLANG;   // 서버언어 글로벌 변수 선언
var obj_G3_DEPLOYKEY;   // DEPLOYKEY 글로벌 변수 선언
var obj_G3_PKGROOT;   // 패키지ROOT 글로벌 변수 선언
var obj_G3_STARTDT;   // 시작일 글로벌 변수 선언
var obj_G3_ENDDT;   // 종료일 글로벌 변수 선언
var obj_G3_DELYN;   // 삭제YN 글로벌 변수 선언
var obj_G3_GITINIT;   // GIT 글로벌 변수 선언
var obj_G3_GITCOMMIT;   // GITCOMMIT 글로벌 변수 선언
var obj_G3_GITPUSH;   // GITPUSH 글로벌 변수 선언
var obj_G3_GITFORCEPUSH;   // GITFORCEPUSH 글로벌 변수 선언
var obj_G3_GITVIEWCONFIG;   // GITVIEWCONFIG 글로벌 변수 선언
var obj_G3_ADDDT;   // ADDDT 글로벌 변수 선언
var obj_G3_MODDT;   // MODDT 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 프로젝트목록
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 배포 상세
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
	//PJTNM, 프로젝트명 초기화	
  alog("G1_INIT()-------------------------end");
}

	//프로젝트목록 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 프로젝트목록"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("PJTSEQ,프로젝트ID,프로젝트명,파일 CHARSET,UITOOL,서버언어,DEPLOYKEY,패키지ROOT,시작일,종료일,삭제YN,ADDDT,MODDT");
	mygridG2.setColumnIds("PJTSEQ,PJTID,PJTNM,FILECHARSET,UITOOL,SVRLANG,DEPLOYKEY,PKGROOT,STARTDT,ENDDT,DELYN,ADDDT,MODDT");
	mygridG2.setInitWidths("100,60,60,60,30,40,50,60,40,40,40,100,100");
	mygridG2.setColTypes("ed,ed,ed,ed,ed,ed,ed,ed,dhxCalendar,dhxCalendar,ed,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("int,str,str,str,str,str,str,str,str,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_PJTSEQ,G2_PJTID,G2_PJTNM,G2_FILECHARSET,G2_UITOOL,G2_SVRLANG,G2_DEPLOYKEY,G2_PKGROOT,G2_STARTDT,G2_ENDDT,G2_DELYN,G2_ADDDT,G2_MODDT");
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
		 // IO : PJTSEQ초기화	
		 // IO : 프로젝트ID초기화	
		 // IO : 프로젝트명초기화	
		 // IO : 파일 CHARSET초기화	
		 // IO : UITOOL초기화	
		 // IO : 서버언어초기화	
		 // IO : DEPLOYKEY초기화	
		 // IO : 패키지ROOT초기화	
		 // IO : 시작일초기화	
		 // IO : 종료일초기화	
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
			', "G2-PJTSEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("PJTSEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 배포 상세
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-PJTSEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("PJTSEQ")).getValue().replace(/&amp;/g, "&")); // 
			G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 배포 상세
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
//배포 상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//PJTSEQ, PJTSEQ 초기화	
	//PJTID, 프로젝트ID 초기화	
	//PJTNM, 프로젝트명 초기화	
	//FILECHARSET, 파일 CHARSET 초기화	
	//UITOOL, UITOOL 초기화	
	//SVRLANG, 서버언어 초기화	
	//DEPLOYKEY, DEPLOYKEY 초기화	
	//PKGROOT, 패키지ROOT 초기화	
	//달력 STARTDT, 시작일
	$( "#G3-STARTDT" ).datepicker(dateFormatJson);
	//달력 ENDDT, 종료일
	$( "#G3-ENDDT" ).datepicker(dateFormatJson);
	//DELYN, 삭제YN 초기화	
	//GITINIT, GIT 초기화	
	//GITCOMMIT, GITCOMMIT 초기화	
	//GITPUSH, GITPUSH 초기화	
	//GITFORCEPUSH, GITFORCEPUSH 초기화	
	//GITVIEWCONFIG, GITVIEWCONFIG 초기화	
	//ADDDT, ADDDT 초기화
	//MODDT, MODDT 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
// CONDITIONSearch	
function G1_SEARCHALL(token){
	alog("G1_SEARCHALL--------------------------start");
	//폼의 모든값 구하기
	var ConAllData = $( "#condition" ).serialize();
	alog("ConAllData:" + ConAllData);
	//json : G1
			lastinputG2 = new HashMap(); //프로젝트목록
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
	//프로젝트목록
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








//그리드 조회(프로젝트목록)	
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
					msgNotice("[프로젝트목록] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[프로젝트목록] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[프로젝트목록] Ajax http 500 error ( " + error + " )",3);
                alog("[프로젝트목록] Ajax http 500 error ( " + data.RTN_MSG + " )");
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
	$("#DATA_HEADERS").val("PJTSEQ,PJTID,PJTNM,FILECHARSET,UITOOL,SVRLANG,DEPLOYKEY,PKGROOT,STARTDT,ENDDT,DELYN,ADDDT,MODDT");
	$("#DATA_WIDTHS").val("100,60,60,60,30,40,50,60,40,40,40,100,100");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
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
			$("#G3-PJTID").val(data.RTN_DATA.PJTID);//프로젝트ID 변수세팅
			$("#G3-PJTNM").val(data.RTN_DATA.PJTNM);//프로젝트명 변수세팅
			$("#G3-FILECHARSET").val(data.RTN_DATA.FILECHARSET);//파일 CHARSET 변수세팅
			$("#G3-UITOOL").val(data.RTN_DATA.UITOOL);//UITOOL 변수세팅
			$("#G3-SVRLANG").val(data.RTN_DATA.SVRLANG);//서버언어 변수세팅
			$("#G3-DEPLOYKEY").val(data.RTN_DATA.DEPLOYKEY);//DEPLOYKEY 변수세팅
			$("#G3-PKGROOT").val(data.RTN_DATA.PKGROOT);//패키지ROOT 변수세팅
	$("#G3-STARTDT").val(data.RTN_DATA.STARTDT);//시작일 오브젝트 값 세팅
	$("#G3-ENDDT").val(data.RTN_DATA.ENDDT);//종료일 오브젝트 값 세팅
			$("#G3-DELYN").val(data.RTN_DATA.DELYN);//삭제YN 변수세팅
		var tArr = data.RTN_DATA.GITINIT.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-GITINIT-LINK").attr("href",tArr[0]);//GIT 변수세팅
				$("#G3-GITINIT-NM").text(tArr[1]);//GIT 변수세팅
			}else{
				alog("GITINIT의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("GITINIT 컬럼이 없습니다.");
		}
		var tArr = data.RTN_DATA.GITCOMMIT.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-GITCOMMIT-LINK").attr("href",tArr[0]);//GITCOMMIT 변수세팅
				$("#G3-GITCOMMIT-NM").text(tArr[1]);//GITCOMMIT 변수세팅
			}else{
				alog("GITCOMMIT의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("GITCOMMIT 컬럼이 없습니다.");
		}
		var tArr = data.RTN_DATA.GITPUSH.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-GITPUSH-LINK").attr("href",tArr[0]);//GITPUSH 변수세팅
				$("#G3-GITPUSH-NM").text(tArr[1]);//GITPUSH 변수세팅
			}else{
				alog("GITPUSH의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("GITPUSH 컬럼이 없습니다.");
		}
		var tArr = data.RTN_DATA.GITFORCEPUSH.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-GITFORCEPUSH-LINK").attr("href",tArr[0]);//GITFORCEPUSH 변수세팅
				$("#G3-GITFORCEPUSH-NM").text(tArr[1]);//GITFORCEPUSH 변수세팅
			}else{
				alog("GITFORCEPUSH의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("GITFORCEPUSH 컬럼이 없습니다.");
		}
		var tArr = data.RTN_DATA.GITVIEWCONFIG.split("^");
		if(tArr){
			if(tArr.length == 2){
				$("#G3-GITVIEWCONFIG-LINK").attr("href",tArr[0]);//GITVIEWCONFIG 변수세팅
				$("#G3-GITVIEWCONFIG-NM").text(tArr[1]);//GITVIEWCONFIG 변수세팅
			}else{
				alog("GITVIEWCONFIG의 멀티값(" + tArr.length + ")이 잘못되었습니다.");
			}
		}else{
			alert("GITVIEWCONFIG 컬럼이 없습니다.");
		}
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
