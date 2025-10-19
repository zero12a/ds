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
				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "INPUTBOX" }
			]
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDJQX"
			,"GRPNM": "그리드JQX1"
			,"KEYCOLID": "PGMSEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTBOX" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTBOX" }
,				{ "COLID": "PGMID", "COLNM" : "프로그램ID", "OBJTYPE" : "TEXTBOX" }
,				{ "COLID": "PGMNM", "COLNM" : "프로그램이름", "OBJTYPE" : "TEXTBOX" }
			]
		}
); //그리드JQX1
grpInfo.set(
	"G3", 
		{
			"GRPTYPE": "GRIDJQX"
			,"GRPNM": "그리드JQX2"
			,"KEYCOLID": "GRPSEQ"
			,"SEQYN": "Y"
			,"COLS": [
				{ "COLID": "PJTSEQ", "COLNM" : "PJTSEQ", "OBJTYPE" : "TEXTBOX" }
,				{ "COLID": "PGMSEQ", "COLNM" : "PGMSEQ", "OBJTYPE" : "TEXTBOX" }
,				{ "COLID": "GRPSEQ", "COLNM" : "GRPSEQ", "OBJTYPE" : "CHECKBOX" }
,				{ "COLID": "GRPNM", "COLNM" : "GRPNM", "OBJTYPE" : "CHECKBOX" }
			]
		}
); //그리드JQX2
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "jqxgridController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "jqxgridController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G1_PGMID; // 프로그램ID 변수선언
var obj_G2__POPUP = null;//  글로벌 변수 선언 - 팝업
//컨트롤러 경로
var url_G2_EDITMODE = "jqxgridController?CTLGRP=G2&CTLFNC=EDITMODE";
//컨트롤러 경로
var url_G2_RELOAD = "jqxgridController?CTLGRP=G2&CTLFNC=RELOAD";
//컨트롤러 경로
var url_G2_SEARCH = "jqxgridController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_SAVE = "jqxgridController?CTLGRP=G2&CTLFNC=SAVE";
//컨트롤러 경로
var url_G2_ROWDELETE = "jqxgridController?CTLGRP=G2&CTLFNC=ROWDELETE";
//컨트롤러 경로
var url_G2_ROWADD = "jqxgridController?CTLGRP=G2&CTLFNC=ROWADD";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json, dataAdapterG2;
var obj_G3__POPUP = null;//  글로벌 변수 선언 - 팝업
//컨트롤러 경로
var url_G3_SEARCH = "jqxgridController?CTLGRP=G3&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G3_SAVE = "jqxgridController?CTLGRP=G3&CTLFNC=SAVE";
//컨트롤러 경로
var url_G3_RELOAD = "jqxgridController?CTLGRP=G3&CTLFNC=RELOAD";
//그리드 객체
var mygridG3,isToggleHiddenColG3,lastinputG3,lastinputG3json,lastrowidG3;
var lastselectG3json, dataAdapterG3;
//GRP 개별 사이즈리셋
//사이즈 리셋 : 
function G1_RESIZE(){
	alog("G1_RESIZE-----------------start");
	//null
	alog("G1_RESIZE-----------------end");
}
//사이즈 리셋 : 그리드JQX1
function G2_RESIZE(){
	alog("G2_RESIZE-----------------start");
	//null
	alog("G2_RESIZE-----------------end");
}
//사이즈 리셋 : 그리드JQX2
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
}
function goFormPopOpen(tGrpId, tColId, tColId_Nm){
	alog("goFormviewPopOpen()............. tGrpId = " + tGrpId + ", tColId = " + tColId + ", tColId_Nm = " +tColId_Nm );
	
	tColId_Val = $("#" + tColId).val();
	tColId_Nm_Text = $("#" + tColId_Nm).text();
	//PGMGRP ,  	
	//G1, , PGMID, 프로그램ID
	if( tGrpId == "G1" && tColId == "G1-PGMID" ){
		obj_G1_PGMID_POPUP = window.open("about:blank","codeSearch_G1_PGMID_Pop","width=,height=,resizable=yes,scrollbars=yes");
		
		//값세팅하고
		var frm1 = $('form[name="popupForm"]');

		frm1.append("<input type=text name='PGMID' id='PGMID' value='" + tColId_Val + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.	
		frm1.append("<input type=text name='PGMID-NM' id='PGMID-NM' value='" + tColId_Nm_Text + "'>");//이 컬럼이 동적으로 PGMID 변경되어야 함.		

		$("#GRPID").val(tGrpId);
		$("#COLID").val(tColId);

		//폼실행
		var frm =document.popupForm;
		frm.action = "";//호출할 팝업 프로그램 URL
		frm.target = "codeSearch_G1_PGMID_Pop";
		frm.method = "post";
		//frm.submit();

		alog("delay end and go.");

		//딜레이 폼실행
		var timer;
		var delay = 500; // 0.6 seconds delay after last input
		window.clearTimeout(timer);
		timer = window.setTimeout(function(){
			alog("delay end and go1.");
			frm.submit();
			alog("delay end and go2.");
		}, delay);
	}

}// goFormviewPopOpen
//부모창 리턴용//팝업창에서 받을 내용
function popReturn(tGrpId,tRowId,tColId,tBtnNm,tJsonObj){
	//alert("popReturn");
	//, 
	//FORM
	if(tGrpId == "G1" && tColId =="G1-PGMID"){
		$("#G1-PGMID").val(tJsonObj.CD);
		$("#G1-PGMID-NM").text(tJsonObj.NM);

		//팝업창 닫기
		if(obj_G1_PGMID_POPUP != null) obj_G1_PGMID_POPUP.close();
	}

}//popReturn
//그룹별 초기화 함수	
// CONDITIONInit	//컨디션 초기화
function G1_INIT(){
  alog("G1_INIT()-------------------------start	");
	//각 폼 오브젝트들 초기화
	//PGMID, 프로그램ID 초기화	
  alog("G1_INIT()-------------------------end");
}

//그리드JQX1 그리드 초기화
function G2_INIT(){
	alog("G2_INIT()-------------------------start");

	jqx.credits = '75CE8878-FCD1-4EC7-9249-BA0F153A5DE8';
//##################################################################
//##    커스텀 렌더러(콤보, 다랍다운)
//##################################################################
//##################################################################
//##    필터 데이터 로드(이건 화면 렌더링 시에 필요하기 때문에 렌더링전에 데이터가 준비되어야해서, 동기식으로 데이터 로딩필요)
//##################################################################
//##################################################################
//##    컬럼 데이터 및 오브젝트
//##################################################################
//##################################################################
//##   필터 정의
//##################################################################
//그리드JQX1
var gridFilterG2 = function(cellValue, rowData, dataField, filterGroup, defaultFilterResult){
//alog("gridFilter().....................................start : dataField=" + dataField + ", cellValue="+cellValue);
}//그리드JQX1 filter end
        //filter type
        //   'textbox' - basic text field.
         //    'input' - input field with dropdownlist for choosing the filter condition. *Only when "showfilterrow" is true.
        //     'checkedlist' - dropdownlist with checkboxes that specify which records should be visible and hidden.
        //     'list' - dropdownlist which specifies the visible records depending on the selection.
        //     'number' - numeric input field. *Only when "showfilterrow" is true.
        //     'bool' - filter for boolean data. *Only when "showfilterrow" is true.
         //    'date' - filter for dates.

		$(window).resize(function() {
			//alert($("#divGrpG2").width());
			$('#jqxgridG2').jqxGrid({ width: (Math.round($("#divGrpG2").width()) - 8) });
		});

        // initialize jqxGrid
        $("#jqxgridG2").jqxGrid(
        {
            ready: function(){},
            filter: gridFilterG2,
            width: (Math.round($("#divGrpG2").width()) - 8),     //default width : 600
            localization: getLocalization(),
            //autoshowloadelement: true,
            //source: dataAdapterGrid,    
            columnsheight: 26, //헤더 높이 default 32
            filterrowheight: 37, //필터 높이 default 37 (jqxgrid.filter.js 에 input필드 인라인으로 margin 4px가 하드코딩 됨.ㅠㅠ)
            rowsheight: 26, //데이터의행 높이
            height: parseInt('255px'),  //default height : 400          
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
            showfilterrow: false,
            filterable: false,
            editmode: 'dblclick', //click, dblclick, selectedcell, selectedrow
            columnsresize: true,
            selectionmode: 'checkbox', //'none', 'singlerow', 'multiplerows', 'multiplerowsextended', 
			handlekeyboardnavigation: function (event) {
				alog("handlekeyboardnavigation()..........................start");
				var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;

				if (key == 13) {
					if(event.target.localName == "textarea"){
						if(event.shiftKey){
							throw 'throw error is new line ok';
						}
					}
				}  
			},
			columns: [
				{ cellclassname: cellclass, text: 'PJTSEQ'
				, datafield: 'PJTSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
				{ cellclassname: cellclass, text: 'PGMSEQ'
				, datafield: 'PGMSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
				{ cellclassname: cellclass, text: '프로그램ID'
				, datafield: 'PGMID', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
				{ cellclassname: cellclass, text: '프로그램이름'
				, datafield: 'PGMNM', width: 200
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
            ]
        });
	//textarea 팝업오픈시 텍스트영역 또는 스크롤영역 클릭시 숨김처리되는거 방지
	$("#jqxgridG2").on('mousedown', function (event) {
		alog("jwxgridG2 mousedown()......................start");
		alog(event);
		//alog(event.target.className.indexOf("scrollbar-thumb-state-normal"));
		if(event.target.localName == "textarea" ||
			(
				event.target.localName == "div" 
				&& event.target.className.indexOf("scrollbar-thumb-state-normal") > 0
			)
		){
			//return;
			throw 'mousedown textarea no hide.';
		}

	});
	$('#jqxgridG2').on('rowclick', function (event) {
		alog("jwxgridG2 rowclick()......................start");
		alog(event);
		//체크박스일때랑 
		var args = event.args;
		// row's bound index.
		var boundIndex = args.rowindex;
		// row's visible index.
		var visibleIndex = args.visibleindex;
		// right click.
		var rightclick = args.rightclick; 
		// original event.
		var ev = args.originalEvent;       

		rowData = event.args.row.bounddata;
		if(rowData.changeCud == "inserted")return;
		//편집모드 일때는 하위 새로고침 안하게 하기
		if($("#G2-EDITMODE_EDIT_MODE") && $("#G2-EDITMODE_EDIT_MODE").is(":checked"))return false;
		lastinputG3json = jQuery.parseJSON('{ "__NAME":"lastinputG3json"' +
			', "G2-PGMSEQ" : "' + rowData.PGMSEQ + '"' +
			', "G2-PJTSEQ" : "' + rowData.PJTSEQ + '"' +
		'}');
		lastinputG3 = new HashMap(); // 그리드JQX2
		lastinputG3.set("__ROWID",rowData.uid);
		lastinputG3.set("G2-PGMSEQ",rowData.PGMSEQ); // 
		lastinputG3.set("G2-PJTSEQ",rowData.PJTSEQ); // 
		G3_SEARCH(lastinputG3,uuidv4()); //자식그룹 호출 : 그리드JQX2

	});
	//데이터 바인딩 완료
	$("#jqxgridG2").on("bindingcomplete", function (event) {
		alog("jqxgridG2 bindingcomplete()......................start");       
		//alog(event.args.owner.rows.records.length);
		//row_cnt = event.args.owner.rows.records.length;

		//$("#spanG2Cnt").text(row_cnt);
	});  
  alog("G2_INIT()-------------------------end");
}//그리드JQX2 그리드 초기화
function G3_INIT(){
	alog("G3_INIT()-------------------------start");

	jqx.credits = '75CE8878-FCD1-4EC7-9249-BA0F153A5DE8';
//##################################################################
//##    커스텀 렌더러(콤보, 다랍다운)
//##################################################################
//##################################################################
//##    필터 데이터 로드(이건 화면 렌더링 시에 필요하기 때문에 렌더링전에 데이터가 준비되어야해서, 동기식으로 데이터 로딩필요)
//##################################################################
//##################################################################
//##    컬럼 데이터 및 오브젝트
//##################################################################
//##################################################################
//##   필터 정의
//##################################################################
//그리드JQX2
var gridFilterG3 = function(cellValue, rowData, dataField, filterGroup, defaultFilterResult){
//alog("gridFilter().....................................start : dataField=" + dataField + ", cellValue="+cellValue);
}//그리드JQX2 filter end
        //filter type
        //   'textbox' - basic text field.
         //    'input' - input field with dropdownlist for choosing the filter condition. *Only when "showfilterrow" is true.
        //     'checkedlist' - dropdownlist with checkboxes that specify which records should be visible and hidden.
        //     'list' - dropdownlist which specifies the visible records depending on the selection.
        //     'number' - numeric input field. *Only when "showfilterrow" is true.
        //     'bool' - filter for boolean data. *Only when "showfilterrow" is true.
         //    'date' - filter for dates.

		$(window).resize(function() {
			//alert($("#divGrpG2").width());
			$('#jqxgridG3').jqxGrid({ width: (Math.round($("#divGrpG3").width()) - 8) });
		});

        // initialize jqxGrid
        $("#jqxgridG3").jqxGrid(
        {
            ready: function(){},
            filter: gridFilterG3,
            width: (Math.round($("#divGrpG3").width()) - 8),     //default width : 600
            localization: getLocalization(),
            //autoshowloadelement: true,
            //source: dataAdapterGrid,    
            columnsheight: 26, //헤더 높이 default 32
            filterrowheight: 37, //필터 높이 default 37 (jqxgrid.filter.js 에 input필드 인라인으로 margin 4px가 하드코딩 됨.ㅠㅠ)
            rowsheight: 26, //데이터의행 높이
            height: parseInt('255px'),  //default height : 400          
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
            showfilterrow: false,
            filterable: false,
            editmode: 'dblclick', //click, dblclick, selectedcell, selectedrow
            columnsresize: true,
            selectionmode: 'checkbox', //'none', 'singlerow', 'multiplerows', 'multiplerowsextended', 
			handlekeyboardnavigation: function (event) {
				alog("handlekeyboardnavigation()..........................start");
				var key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;

				if (key == 13) {
					if(event.target.localName == "textarea"){
						if(event.shiftKey){
							throw 'throw error is new line ok';
						}
					}
				}  
			},
			columns: [
				{ cellclassname: cellclass, text: 'PJTSEQ'
				, datafield: 'PJTSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
				{ cellclassname: cellclass, text: 'PGMSEQ'
				, datafield: 'PGMSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'textbox'
				},
				{ cellclassname: cellclass, text: 'GRPSEQ'
				, datafield: 'GRPSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'checkbox'
				},
				{ cellclassname: cellclass, text: 'GRPNM'
				, datafield: 'GRPNM', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'checkbox'
				},
            ]
        });
	//textarea 팝업오픈시 텍스트영역 또는 스크롤영역 클릭시 숨김처리되는거 방지
	$("#jqxgridG3").on('mousedown', function (event) {
		alog("jwxgridG2 mousedown()......................start");
		alog(event);
		//alog(event.target.className.indexOf("scrollbar-thumb-state-normal"));
		if(event.target.localName == "textarea" ||
			(
				event.target.localName == "div" 
				&& event.target.className.indexOf("scrollbar-thumb-state-normal") > 0
			)
		){
			//return;
			throw 'mousedown textarea no hide.';
		}

	});
	$('#jqxgridG3').on('rowclick', function (event) {
		alog("jwxgridG3 rowclick()......................start");
		alog(event);
		//체크박스일때랑 
		var args = event.args;
		// row's bound index.
		var boundIndex = args.rowindex;
		// row's visible index.
		var visibleIndex = args.visibleindex;
		// right click.
		var rightclick = args.rightclick; 
		// original event.
		var ev = args.originalEvent;       

		rowData = event.args.row.bounddata;
		if(rowData.changeCud == "inserted")return;

	});
	//데이터 바인딩 완료
	$("#jqxgridG3").on("bindingcomplete", function (event) {
		alog("jqxgridG3 bindingcomplete()......................start");       
		//alog(event.args.owner.rows.records.length);
		//row_cnt = event.args.owner.rows.records.length;

		//$("#spanG3Cnt").text(row_cnt);
	});  
  alog("G3_INIT()-------------------------end");
}//D146 그룹별 기능 함수 출력		
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
			lastinputG2 = new HashMap(); //그리드JQX1
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 행추가 : 그리드JQX1
function G2_ROWADD(){
	if( !(lastinputG2)	){
		msgError("조회 후에 행추가 가능합니다. 또는 상속값이 없습니다.",3);
	}else{

		var rowData = {
				"PJTSEQ" : "",
				"PGMSEQ" : "",
				"PGMID" : "",
				"PGMNM" : "",
		};

		var value = $('#jqxgridG2').jqxGrid('addrow', null, rowData, "first");
	}
}
//그리드JQX1
function G2_SAVE(token){
	alog("G2_SAVE()------------start");


	var rows = $('#jqxgridG2').jqxGrid('getrows');
	var myJsonString = JSON.stringify(_.filter(rows,['changeState',true])); //loadash.js  (find는 1개만 찾고, filter를 모두 찾아줌)
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
	sendFormData.append("G2-JSON" , myJsonString);

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
        alog("G2_ROWDELETE().............................start");
        //alog(JSON.stringify(dataAdapterGrid.records));
        //var rowIndex = $('#jqxgridG2').jqxGrid('getselectedrowindex');
        var rowindexes = $('#jqxgridG2').jqxGrid('getselectedrowindexes');
        alog(rowindexes);
        //alert(rowindexes.length);

        if(rowindexes.length == 0){
            alert("선택된 행이 없습니다.");
            return;
        }
        //$('#grid').jqxGrid('deleterow', rowId);

        //rowindexes가 삭제하고 나면 변경되기 때문에 삭제하기 전에 먼저,rowId를 구매 놓음. 
        var rowIds = [];
        var rowRemoveIds = [];
        var rowDeleteIds = [];
        var rowDeleteDatas = [];
        for(i=0;i<rowindexes.length;i++){
            rowIndex = rowindexes[i];
            alog("  i=" + i + ", rowIndex=" + rowIndex);

            var rowId = $('#jqxgridG2').jqxGrid('getrowid', rowIndex);
            if(dataAdapterG2.records[rowIndex].changeState == true
                && dataAdapterG2.records[rowIndex].changeCud == "inserted"
                ){
                //('#jqxgridG2').jqxGrid('deleterow', rowId);
                rowRemoveIds[rowRemoveIds.length] = rowId;//신규 추가건은 화면에서 완전 삭제 대상으로 저장
            }else{
                rowDeleteIds[rowDeleteIds.length] = rowId;

                dataAdapterG2.records[rowIndex].changeState = true;
                dataAdapterG2.records[rowIndex].changeCud = "deleted";     
                rowDeleteDatas[rowDeleteDatas.length] = $('#jqxgridG2').jqxGrid('getrowdatabyid', rowId);;
            }            
 
        }

        //alog( JSON.stringify( _.filter(dataAdapterGrid.records,{'changeState':true, 'changeCud': 'deleted'}) ) );
        //alog( JSON.stringify( _.filter(dataAdapterGrid.records,{'changeState':true, 'changeCud': 'add_deleted'}) ) );
        if(rowindexes.length > 0){
            $('#jqxgridG2').jqxGrid('clearselection'); //선택한 체크 없애기
        }
        if(rowDeleteIds.length > 0){
            $('#jqxgridG2').jqxGrid('updaterow', rowDeleteIds, rowDeleteDatas); //일괄 배열 삭제
        }
        if(rowRemoveIds.length > 0){
            $('#jqxgridG2').jqxGrid('deleterow', rowRemoveIds); //행추가 하고 서버 저장 아직 안한 행은 화면에서 완전 삭제
        }

        //$('#jqxgridG2').jqxGrid('render'); //이거 했더니, 첫번째 행으로 스크롤위치가 변경됨. refreshdata를 해야 정렬했을때도 반영됨.
        //$('#jqxgridG2').jqxGrid('refreshdata'); //이거 했더니, 첫번째 행으로 스크롤위치가 변경됨. refreshdata를 해야 정렬했을때도 반영됨.
            
        //alog(dataAdapterGrid.records);
		alog("G2_ROWDELETE....................end");
    }
//그리드 조회(그리드JQX1)	
function G2_SEARCH(tinput,token){
	alog("G2_SEARCH()------------start");
//##################################################################
//##    그리드 데이터 로드
//##################################################################
        var sourceG2 =
        {
            datatype: "json",
			type: "POST",
			data: lastinputG2json,
            async: true,
            datafields: [
                { name: 'PJTSEQ', type: 'NUMBER', format: '' },
                { name: 'PGMSEQ', type: 'NUMBER', format: '' },
                { name: 'PGMID', type: 'STRING', format: '' },
                { name: 'PGMNM', type: 'STRING', format: '' },
            ],
            root: "RTN_DATA>rows",
            //record: "JQXGRID",
            id: 'PGMSEQ',
            url: "JQXGRIDController?CTLGRP=G2&CTLFNC=SEARCH"
        };

        dataAdapterG2 = new $.jqx.dataAdapter(sourceG2, {
            autobind: false,
            downloadComplete: function (data, status, xhr) { 
				var row_cnt = data.RTN_DATA.rows.length;
				$("#spanG2Cnt").text(row_cnt);
			},
            loadComplete: function (data) { },
            loadError: function (xhr, status, error) { },
            updaterow: function (rowIndex, rowdata, commit) {
                alog("dataAdapterGrid updaterow()...................start");
                //alog("  rowIndex=" + rowIndex);

                //기본이 변경
                rowdata.changeState = true;

                //변경과 삭제가 동일하게 updaterow이벤트 사용하기 때문에 주의 요망
                if(typeof rowdata.changeCud == "undefined" || rowdata.changeCud == ""){
                    rowdata.changeCud = "updated";
                }

                commit(true);
                                
            },
            addrow: function (rowIndex, rowdata, position, commit) {
                alog("dataAdapterGrid addrow()...................start");                    
                //alog("  rowIndex = " + rowIndex);

				rowdata.changeState = true;
                rowdata.changeCud = "inserted";
                //alog(this);

                commit(true);
            },
            deleterow: function (rowIndex, commit) {
                alog("dataAdapterGrid deleterow()...................start");      
                alog("  rowIndex = " + rowIndex);    
       
                commit(true);
            }                
        });
	var beforeDate = new Date();

	$("#jqxgridG2").jqxGrid({
		source: dataAdapterG2
	});

	var afterDate = new Date();
	alog("	parse render time(ms) = " + (afterDate - beforeDate));
	alog("G2_SEARCH()------------end");
}
//그리드 조회(그리드JQX2)	
function G3_SEARCH(tinput,token){
	alog("G3_SEARCH()------------start");
//##################################################################
//##    그리드 데이터 로드
//##################################################################
        var sourceG3 =
        {
            datatype: "json",
			type: "POST",
			data: lastinputG3json,
            async: true,
            datafields: [
                { name: 'PJTSEQ', type: 'NUMBER', format: '' },
                { name: 'PGMSEQ', type: 'NUMBER', format: '' },
                { name: 'GRPSEQ', type: 'NUMBER', format: '' },
                { name: 'GRPNM', type: 'STRING', format: '' },
            ],
            root: "RTN_DATA>rows",
            //record: "JQXGRID",
            id: 'GRPSEQ',
            url: "JQXGRIDController?CTLGRP=G3&CTLFNC=SEARCH"
        };

        dataAdapterG3 = new $.jqx.dataAdapter(sourceG3, {
            autobind: false,
            downloadComplete: function (data, status, xhr) { 
				var row_cnt = data.RTN_DATA.rows.length;
				$("#spanG3Cnt").text(row_cnt);
			},
            loadComplete: function (data) { },
            loadError: function (xhr, status, error) { },
            updaterow: function (rowIndex, rowdata, commit) {
                alog("dataAdapterGrid updaterow()...................start");
                //alog("  rowIndex=" + rowIndex);

                //기본이 변경
                rowdata.changeState = true;

                //변경과 삭제가 동일하게 updaterow이벤트 사용하기 때문에 주의 요망
                if(typeof rowdata.changeCud == "undefined" || rowdata.changeCud == ""){
                    rowdata.changeCud = "updated";
                }

                commit(true);
                                
            },
            addrow: function (rowIndex, rowdata, position, commit) {
                alog("dataAdapterGrid addrow()...................start");                    
                //alog("  rowIndex = " + rowIndex);

				rowdata.changeState = true;
                rowdata.changeCud = "inserted";
                //alog(this);

                commit(true);
            },
            deleterow: function (rowIndex, commit) {
                alog("dataAdapterGrid deleterow()...................start");      
                alog("  rowIndex = " + rowIndex);    
       
                commit(true);
            }                
        });
	var beforeDate = new Date();

	$("#jqxgridG3").jqxGrid({
		source: dataAdapterG3
	});

	var afterDate = new Date();
	alog("	parse render time(ms) = " + (afterDate - beforeDate));
	alog("G3_SEARCH()------------end");
}
//새로고침	
function G3_RELOAD(token){
  alog("G3_RELOAD-----------------start");
  G3_SEARCH(lastinputG3,token);
}
//그리드JQX2
function G3_SAVE(token){
	alog("G3_SAVE()------------start");


	var rows = $('#jqxgridG3').jqxGrid('getrows');
	var myJsonString = JSON.stringify(_.filter(rows,['changeState',true])); //loadash.js  (find는 1개만 찾고, filter를 모두 찾아줌)
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
	sendFormData.append("G3-JSON" , myJsonString);

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
