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
				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "CALENDAR" }
,				{ "COLID": "LISTNM", "COLNM" : "LIST", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOGLEVEL", "COLNM" : "LEVEL", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOGMSG", "COLNM" : "MSG", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "CHANNEL", "COLNM" : "PGMID", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRID"
			,"GRPNM": "로그"
			,"KEYCOLID": ""
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "LOGSEQ", "COLNM" : "SEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "URL", "COLNM" : "URL", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "SESSIONID", "COLNM" : "SESSION", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "REQTOKEN", "COLNM" : "REQTOKEN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "RESTOKEN", "COLNM" : "RESTOKEN", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USERID", "COLNM" : "ID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "USERSEQ", "COLNM" : "USERSEQ", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LISTNM", "COLNM" : "LIST", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOGLEVEL", "COLNM" : "LEVEL", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOGDT", "COLNM" : "DT", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "LOGMSG", "COLNM" : "MSG", "OBJTYPE" : "TEXTAREA" }
,				{ "COLID": "CHANNEL", "COLNM" : "PGMID", "OBJTYPE" : "INPUTBOXRO" }
,				{ "COLID": "ADDDT", "COLNM" : "ADDDT", "OBJTYPE" : "INPUTBOXRO" }
			]
		}
); //로그
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "상세"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "LOGSEQ", "COLNM" : "SEQ", "OBJTYPE" : "TEXTVIEW" }
,				{ "COLID": "DATEHM", "COLNM" : "DATEHM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "LOGMSG", "COLNM" : "MSG", "OBJTYPE" : "CODEMIRROR" }
,				{ "COLID": "LOGWE", "COLNM" : "LOGWE", "OBJTYPE" : "WEJODIT" }
			]
		}
); //상세
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "monologController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "monologController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_ADDDT; // ADDDT 변수선언
var obj_G1_LISTNM; // LIST 변수선언
var obj_G1_LOGLEVEL; // LEVEL 변수선언
var obj_G1_LOGMSG; // MSG 변수선언
var obj_G1_CHANNEL; // PGMID 변수선언
//그리드 변수 초기화	
//컨트롤러 경로
var url_G2_SEARCH = "monologController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_EXCEL = "monologController?CTLGRP=G2&CTLFNC=EXCEL";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json;//디테일 변수 초기화	

var isBindEvent_G3 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G3_SAVE = "monologController?CTLGRP=G3&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G3_NEW = "monologController?CTLGRP=G3&CTLFNC=NEW";
//폼뷰 컨트롤러 경로
var url_G3_SEARCH = "monologController?CTLGRP=G3&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G3_RELOAD = "monologController?CTLGRP=G3&CTLFNC=RELOAD";
var obj_G3_LOGSEQ;   // SEQ 글로벌 변수 선언
var obj_G3_DATEHM;   // DATEHM 글로벌 변수 선언
var obj_G3_LOGMSG;   // MSG 글로벌 변수 선언
var obj_G3_LOGWE;   // LOGWE 글로벌 변수 선언
var codeMirrorFontSizeG3Logmsg = 11; // MSG
//MSG
function changeCodemirrorFontSizeG3Logmsg(sizeCmd){
	alog("changeCodemirrorFontSizeG3Logmsg..........start " + sizeCmd);

	if(sizeCmd == "+"){
		codeMirrorFontSizeG3Logmsg  = codeMirrorFontSizeG3Logmsg  + 2;
	}else{
		codeMirrorFontSizeG3Logmsg  = codeMirrorFontSizeG3Logmsg  - 2;
	}

	$(".CodeMirror").css('font-size',codeMirrorFontSizeG3Logmsg  + "px");

	obj_G3_LOGMSG.refresh();
	alog("changeCodemirrorFontSizeG3Logmsg..........end");   
}
	var jodit_G3_LOGWE;//{G.GRPID-LOGWE initval
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 로그
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
	//달력 ADDDT, ADDDT
	$( "#G1-ADDDT" ).datepicker(dateFormatJson);
$("#G1-ADDDT").val(moment().format("YYYY-MM-DD"));
	//LISTNM, LIST 초기화	
	//LOGLEVEL, LEVEL 초기화	
	//LOGMSG, MSG 초기화	
	//CHANNEL, PGMID 초기화	
  alog("G1_INIT()-------------------------end");
}

	//로그 그리드 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");

	//그리드 초기화
	mygridG2 = new dhtmlXGridObject('gridG2');
	mygridG2.setImagePath(CFG_URL_LIBS_ROOT + "lib/dhtmlxSuite/codebase/imgs/"); //DHTMLX IMG
	mygridG2.setUserData("","gridTitle","G2 : 로그"); //글로별 변수에 그리드 타이블 넣기
	//헤더초기화
	mygridG2.setHeader("SEQ,URL,SESSION,REQTOKEN,RESTOKEN,ID,USERSEQ,LIST,LEVEL,DT,MSG,PGMID,ADDDT");
	mygridG2.setColumnIds("LOGSEQ,URL,SESSIONID,REQTOKEN,RESTOKEN,USERID,USERSEQ,LISTNM,LOGLEVEL,LOGDT,LOGMSG,CHANNEL,ADDDT");
	mygridG2.setInitWidths("70,60,50,50,50,50,50,50,40,120,150,120,100");
	mygridG2.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,txttxt,ro,ro");
	//가로 정렬	
	mygridG2.setColAlign("left,left,left,left,left,left,left,left,left,left,left,left,left");
	mygridG2.setColSorting("int,str,str,str,str,str,int,str,str,str,str,str,str");	//렌더링	
	mygridG2.enableSmartRendering(true);
	mygridG2.enableMultiselect(true);
	//mygridG2.setColValidators("G2_LOGSEQ,G2_URL,G2_SESSIONID,G2_REQTOKEN,G2_RESTOKEN,G2_USERID,G2_USERSEQ,G2_LISTNM,G2_LOGLEVEL,G2_LOGDT,G2_LOGMSG,G2_CHANNEL,G2_ADDDT");
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
		 // IO : URL초기화	
		 // IO : SESSION초기화	
		 // IO : REQTOKEN초기화	
		 // IO : RESTOKEN초기화	
		 // IO : ID초기화	
		 // IO : USERSEQ초기화	
		 // IO : LIST초기화	
		 // IO : LEVEL초기화	
		 // IO : DT초기화	
		 // IO : MSG초기화	
		 // IO : PGMID초기화	
		 // IO : ADDDT초기화	
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
			', "G2-LOGSEQ" : "' + q(mygridG2.cells(rowID,mygridG2.getColIndexById("LOGSEQ")).getValue()) + '"' +
		'}');
		lastinputG3 = new HashMap(); // 상세
		lastinputG3.set("__ROWID",rowID);
		lastinputG3.set("G2-LOGSEQ", mygridG2.cells(rowID,mygridG2.getColIndexById("LOGSEQ")).getValue().replace(/&amp;/g, "&")); // 
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
		//1
		mygridG2.attachEvent("onRowSelect",function(rowID,celInd){
			alog("mygridG2. - onRowSelect ----------start");
			alog("   rowID = " + rowID);
			alog("   celInd = " + celInd);

2

			alog("mygridG2. - onRowSelect ----------end");
		});
	alog("G2_INIT()-------------------------end");
}
//디테일 초기화	
//상세 폼뷰 초기화
function G3_INIT(){
  alog("G3_INIT()-------------------------start");
	//컬럼 초기화
	//LOGSEQ, SEQ 초기화
	//DATEHM, DATEHM 초기화	
	//G3-DATEHM
	var cleave = new Cleave('.formatTime', {
        time: true,
        timePattern: ['h', 'm']
    });
	//Codemirror mode : SQL
	//코드 미러 초기화
	obj_G3_LOGMSG = CodeMirror.fromTextArea(document.getElementById('codeMirror_G3-LOGMSG'), {
		mode: "text/x-sql",
		styleActiveLine: true,
		indentWithTabs: true,
		smartIndent: true,
		lineWrapping: true,
		lineNumbers: true,
		matchBrackets : true,
		tabSize: 4,
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: {"Ctrl-Space": "autocomplete"},
		hintOptions: {tables: {
			users: {name: null, score: null, birthDate: null},
			countries: {name: null, population: null, size: null}
		}}
	});
	obj_G3_LOGMSG.setSize("400","");
		//jodit init
        jodit_G3_LOGWE = new Jodit('#G3-LOGWE',{
            enableDragAndDropFileToEditor: true,
			showPlaceholder: false,
        	placeholder: '',
			width: "400",
            height: "200", 
            buttons: [ 'undo', 'redo', '|','bold', 'italic', '|', 'ul', 'ol', '|', 'font', 'fontsize', 'brush', 'paragraph', '|','image', 'video', 'table', 'link', '|', 'left', 'center', 'right', 'justify', '|',  'hr', 'eraser', 'fullsize','source'],
            uploader: {
                url: '/common/cg_upload_jodit.php?action=fileUpload&storeid=LOCAL_1',
                format: 'json',
                imagesExtensions: ["jpg", "png", "jpeg", "gif"],
                method: "POST",
                error: function(e){
                    alog("error...............start");
                    alog(e);
                    this.j.e.fire("errorMessage",e.message,"error",4e3);
                }
            },
            events: {
                afterInit: function (editorT) {
                    alog("jodit afterInit........................start");
                }
                ,createEditor: function (editorT){
                    alog("jodit createEditor........................start");
                }
                ,ready: function (editorT){
                    alog("jodit ready........................start");
                }
                ,init: function (editorT){
                    alog("jodit init........................start");
                }
            }        
        });

		jodit_G3_LOGWE.value = "<p></p>";
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
			lastinputG2 = new HashMap(); //로그
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
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
	$("#DATA_HEADERS").val("LOGSEQ,URL,SESSIONID,REQTOKEN,RESTOKEN,USERID,USERSEQ,LISTNM,LOGLEVEL,LOGDT,LOGMSG,CHANNEL,ADDDT");
	$("#DATA_WIDTHS").val("70,60,50,50,50,50,50,50,40,120,150,120,100");
	$("#DATA_ROWS").val(myXmlString);
	myForm.submit();
}








//그리드 조회(로그)	
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
					msgNotice("[로그] 조회 성공했습니다. ("+row_cnt+"건)",1);

                }else{
                    msgError("[로그] 서버 조회중 에러가 발생했습니다.RTN_CD : " + data.RTN_CD + "ERR_CD : " + data.ERR_CD + "RTN_MSG :" + data.RTN_MSG,3);
                }
            },
            error: function(error){
				msgError("[로그] Ajax http 500 error ( " + error + " )",3);
                alog("[로그] Ajax http 500 error ( " + data.RTN_MSG + " )");
            }
        });
        alog("G2_SEARCH()------------end");
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
	$("#G3-LOGSEQ").text(data.RTN_DATA.LOGSEQ);//SEQ 변수세팅
			$("#G3-DATEHM").val(data.RTN_DATA.DATEHM);//DATEHM 변수세팅
		//CodeMirror SetVal
		obj_G3_LOGMSG.setValue(data.RTN_DATA.LOGMSG); //MSG 
	var val = data.RTN_DATA.LOGWE; //LOGWE
	jodit_G3_LOGWE.value = val;
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G3_SEARCH---------------end");

}
//	
function G3_NEW(){
	alog("[FromView] G3_NEW---------------start");
	$("#G3-CTLCUD").val("C");
	//PMGIO 로직
	$("#G3-LOGSEQ").text("");//SEQ 신규초기화
	$("#G3-DATEHM").val("");//DATEHM 신규초기화	
	obj_G3_LOGMSG.setValue(""); // MSG값 비우기
	jodit_G3_LOGWE.value = "";
	alog("DETAILNew30---------------end");
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
	sendFormData.append("G3-DATEHM",$("#G3-DATEHM").val());	//DATEHM 전송객체에 넣기
	sendFormData.append("G3-LOGMSG",obj_G3_LOGMSG.getValue()); //MSG
	sendFormData.append("G3-LOGWE",jodit_G3_LOGWE.value); //LOGWE

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
