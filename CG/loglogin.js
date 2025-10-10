var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "조건"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "REMOTE_ADDR", "COLNM" : "IP", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "FROM_DT", "COLNM" : "FROM_DT", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "TO_DT", "COLNM" : "~", "OBJTYPE" : "CALENDAR" }
			]
		}
); //조건
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "목록"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "LOGIN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SESSION_ID", "COLNM" : "SESSION_ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SUCCESS_YN", "COLNM" : "SUCCESS_YN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USR_SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SERVER_NAME", "COLNM" : "SVR_NM", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "REMOTE_ADDR", "COLNM" : "IP", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USER_AGENT", "COLNM" : "BROWSER", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADD_DT", "COLNM" : "ADD", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //목록
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "상세"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOGIN_SEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "SESSION_ID", "COLNM" : "SESSION_ID", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "USER_AGENT", "COLNM" : "BROWSER", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "AUTH_JSON", "COLNM" : "AUTH", "OBJTYPE" : "TEXTAREA" }
			]
		}
); //상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "logloginController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "logloginController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "logloginController?CTLGRP=G1&CTLFNC=RESET";
//조건 변수 선언	
var obj_G1_USR_ID; // USR_ID 변수선언
var obj_G1_REMOTE_ADDR; // IP 변수선언
var obj_G1_FROM_DT; // FROM_DT 변수선언
var obj_G1_TO_DT; // ~ 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "logloginController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "logloginController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_HIDDENCOL = "logloginController?CTLGRP=G2&CTLFNC=HIDDENCOL";
//컨트롤러 경로
var url_G2_EXCEL = "logloginController?CTLGRP=G2&CTLFNC=EXCEL";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "logloginController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "logloginController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "logloginController?CTLGRP=G3&CTLFNC=RELOAD";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "logloginController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_MODIFY = "logloginController?CTLGRP=G3&CTLFNC=MODIFY";
//폼뷰 컨트롤러 경로
var url_G3_DELETE = "logloginController?CTLGRP=G3&CTLFNC=DELETE";
var obj_G3_LOGIN_SEQ;   // SEQ 글로벌 변수 선언
var obj_G3_SESSION_ID;   // SESSION_ID 글로벌 변수 선언
var obj_G3_USER_AGENT;   // BROWSER 글로벌 변수 선언
var obj_G3_AUTH_JSON;   // AUTH 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 조건
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 목록
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	
	mygridG2.setSizes();

	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 상세
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
	//USR_ID, USR_ID 초기화	
	//REMOTE_ADDR, IP 초기화	
	//달력 FROM_DT, FROM_DT
	$( "#G1-FROM_DT" ).datepicker(dateFormatJson);
	//달력 TO_DT, ~
	$( "#G1-TO_DT" ).datepicker(dateFormatJson);
  alog("G1_INIT()-------------------------end");
}

	//목록 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 목록"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("SEQ,USR_ID,SESSION_ID,SUCCESS_YN,USR_SEQ,SVR_NM,IP,BROWSER,ADD");
	mygridG2.setColumnIds("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,USR_SEQ,SERVER_NAME,REMOTE_ADDR,USER_AGENT,ADD_DT");
	mygridG2.setInitWidths("60,60,60,60,60,60,60,120,60");
	mygridG2.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("int,str,str,str,int,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_LOGIN_SEQ,G2_USR_ID,G2_SESSION_ID,G2_SUCCESS_YN,G2_USR_SEQ,G2_SERVER_NAME,G2_REMOTE_ADDR,G2_USER_AGENT,G2_ADD_DT");
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
		// ROW선택 이벤트 (자식 그룹이 있을때만 호출)
		mygridG2.attachEvent("onRowSelect",function(rowID,celInd){
			RowEditStatus = mygridG2.getUserData(rowID,"!nativeeditor_status");
			if(RowEditStatus == "inserted"){return false;}
			//GRIDRowSelect20(rowID,celInd);
		//A124
		lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
			', "G2-LOGIN_SEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("LOGIN_SEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 상세
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-LOGIN_SEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("LOGIN_SEQ")).getValue().replace(/&amp;/g, "&")); // 
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
//디테일 초기화	
//상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//LOGIN_SEQ, SEQ 초기화	
	$("#G3-LOGIN_SEQ").attr("readonly",true);
	$("#G3-LOGIN_SEQ").attr("disabled",true);
	//SESSION_ID, SESSION_ID 초기화
	//USER_AGENT, BROWSER 초기화
	//AUTH_JSON, AUTH 초기화
  alog("G3_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//조건, 저장	
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
			lastinputG2 = new HashMap(); //목록
		//  호출
	G2_SEARCH(lastinputG2,token);
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








//그리드 조회(목록)	
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
					msgNotice("[목록] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[목록] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[목록] Ajax http 500 error ( " + error + " )",3);
                alog("[목록] Ajax http 500 error ( " + data.RTN_MSG + " )");
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
	$("#DATA_HEADERS").val("LOGIN_SEQ,USR_ID,SESSION_ID,SUCCESS_YN,USR_SEQ,SERVER_NAME,REMOTE_ADDR,USER_AGENT,ADD_DT");
	$("#DATA_WIDTHS").val("60,60,60,60,60,60,60,120,60");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-LOGIN_SEQ").val("");//SEQ 신규초기화	
	$("#G3-SESSION_ID").text("");//SESSION_ID 신규초기화
	$("#G3-USER_AGENT").text("");//BROWSER 신규초기화
	$("#G3-AUTH_JSON").val("");//AUTH 신규초기화
	alog("DETAILNew30---------------end");
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
//새로고침	
function G3_RELOAD(token){
	alog("G3_RELOAD-----------------start");
	G3_SEARCH(lastinputG3,token);
}//디테일 검색	
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
			$("#G3-LOGIN_SEQ").val(data.RTN_DATA.LOGIN_SEQ);//SEQ 변수세팅
	$("#G3-SESSION_ID").text(data.RTN_DATA.SESSION_ID);//SESSION_ID 변수세팅
	$("#G3-USER_AGENT").text(data.RTN_DATA.USER_AGENT);//BROWSER 변수세팅
		$("#G3-AUTH_JSON").val(data.RTN_DATA.AUTH_JSON);//AUTH 오브젝트 값세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

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
