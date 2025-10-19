var grpInfo = new HashMap();
		//
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": "입력폼"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USR_PWD", "COLNM" : "USR_PWD", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //입력폼
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "FORMVIEW"
			,"GRPNM": "조회결과"
			,"KEYCOLID": ""
			,"SEQYN": "N"
			,"COLS": [
				{ "COLID": "USR_ID", "COLNM" : "USR_ID", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USR_SEQ", "COLNM" : "USE_SEQ", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USR_NM", "COLNM" : "USR_NM", "OBJTYPE" : "INPUTBOX" }
,				{ "COLID": "USR_PWD", "COLNM" : "USR_PWD", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //조회결과
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "loginController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SAVE = "loginController?CTLGRP=G1&CTLFNC=SAVE";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "loginController?CTLGRP=G1&CTLFNC=RESET";
//입력폼 변수 선언	
var obj_G1_USR_ID; // USR_ID 변수선언
var obj_G1_USR_PWD; // USR_PWD 변수선언
//디테일 변수 초기화	

var isBindEvent_G2 = false; //바인드폼 구성시 이벤트 부여여부
//폼뷰 컨트롤러 경로
var url_G2_SEARCH = "loginController?CTLGRP=G2&CTLFNC=SEARCH";
//폼뷰 컨트롤러 경로
var url_G2_SAVE = "loginController?CTLGRP=G2&CTLFNC=SAVE";
//폼뷰 컨트롤러 경로
var url_G2_EDIT = "loginController?CTLGRP=G2&CTLFNC=EDIT";
var obj_G2_USR_ID;   // USR_ID 글로벌 변수 선언
var obj_G2_USR_SEQ;   // USE_SEQ 글로벌 변수 선언
var obj_G2_USR_NM;   // USR_NM 글로벌 변수 선언
var obj_G2_USR_PWD;   // USR_PWD 글로벌 변수 선언
//GRP 개별 사이즈리셋
//사이즈 리셋 : 입력폼
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 조회결과
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//전체 GRP 사이즈 리셋
function resizeGrpAll(){
	alog("resizeGrpAll()______________start");
	G1_RESIZE();
	G2_RESIZE();

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
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	//PGMGRP ,  	
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
	//USR_PWD, USR_PWD 초기화	
  alog("G1_INIT()-------------------------end");
}

//디테일 초기화	
//조회결과 폼뷰 초기화
function G2_INIT(){
  alog("G2_INIT()-------------------------start");
	//컬럼 초기화
	//USR_ID, USR_ID 초기화	
	//USR_SEQ, USE_SEQ 초기화	
	//USR_NM, USR_NM 초기화	
	//USR_PWD, USR_PWD 초기화	
  alog("G2_INIT()-------------------------end");
}
//D146 그룹별 기능 함수 출력		
//검색조건 초기화
function G1_RESET(){
	alog("G1_RESET--------------------------start");
	$('#condition')[0].reset();
}
//입력폼, 저장	
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
			lastinputG2 = new HashMap(); //조회결과
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//디테일 검색	
function G2_SEARCH(tinput,token){
       alog("(FORMVIEW) G2_SEARCH---------------start");

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
        url : url_G2_SEARCH+"&TOKEN=" + token + "&" + conAllData ,
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
            $("#G2-CTLCUD").val("R");
			//SETVAL  가져와서 세팅
			$("#G2-USR_ID").val(data.RTN_DATA.USR_ID);//USR_ID 변수세팅
			$("#G2-USR_SEQ").val(data.RTN_DATA.USR_SEQ);//USE_SEQ 변수세팅
			$("#G2-USR_NM").val(data.RTN_DATA.USR_NM);//USR_NM 변수세팅
			$("#G2-USR_PWD").val(data.RTN_DATA.USR_PWD);//USR_PWD 변수세팅
        },
        error: function(error){
            alog("Error:");
            alog(error);
        }
    });
    alog("(FORMVIEW) G2_SEARCH---------------end");

}
function G2_EDIT(){
       alog("[FromView] G2_EDIT---------------start");
	if( $("#G2-CTLCUD").val() == "C" ){
		alert("조회 후 수정 가능합니다. 신규 모드에서는 수정할 수 없습니다.")
		return;
	}
	if( $("#G2-CTLCUD").val() == "D" ){
		alert("조회 후 수정 가능합니다. 삭제 모드에서는 수정할 수 없습니다.")
		return;
	}

	$("#G2-CTLCUD").val("U");
       alog("[FromView] G2_EDIT---------------end");
}
//G2_SAVE
//IO_FILE_YN = V/, G/N	
//IO_FILE_YN = N	
function G2_SAVE(token){	
	alog("G2_SAVE---------------start");

	if( !( $("#G2-CTLCUD").val() == "C" || $("#G2-CTLCUD").val() == "U") ){
		alert("신규 또는 수정 모드 진입 후 저장할 수 있습니다.")
		return;
	}



	//post 만들기
	sendFormData = new FormData($("#condition")[0]);
	var conAllData = "";
	//상속받은거 전달할수 있게 합치기
	if(typeof lastinputG2 != "undefined"  && lastinputG2 != null){
		var tKeys = lastinputG2.keys();
		for(i=0;i<tKeys.length;i++) {
			sendFormData.append(tKeys[i],lastinputG2.get(tKeys[i]));
			//console.log(tKeys[i]+ '='+ lastinputG2.get(tKeys[i])); 
		}
	}
	//컨디션 radio, checkbox 만 재지정
	//GRP SVC LOOP
//폼뷰 G2는 params 객체에 직접 입력	
	//폼에 파일 유무 : N
	sendFormData.append("G2-CTLCUD",$("#G2-CTLCUD").val());
	sendFormData.append("G2-USR_ID",$("#G2-USR_ID").val());	//USR_ID 전송객체에 넣기
	sendFormData.append("G2-USR_SEQ",$("#G2-USR_SEQ").val());	//USE_SEQ 전송객체에 넣기
	sendFormData.append("G2-USR_NM",$("#G2-USR_NM").val());	//USR_NM 전송객체에 넣기
	sendFormData.append("G2-USR_PWD",$("#G2-USR_PWD").val());	//USR_PWD 전송객체에 넣기

	$.ajax({
		type : "POST",
		url : url_G2_SAVE + "&TOKEN=" + token + "&" + conAllData,
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
