var grpInfo = new HashMap();
grpInfo.set(
	"G1", 
		{
			"GRPTYPE": "CONDITION"
			,"GRPNM": ""
			,"KEYCOLID": ""
			,"SEQYN": ""
		}
); //
grpInfo.set(
	"G2", 
		{
			"GRPTYPE": "GRIDJQX"
			,"GRPNM": "rst"
			,"KEYCOLID": ""
			,"SEQYN": ""
		}
); //rst
//글로벌 변수 선언
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_SEARCHALL = "perfjqxgridController?CTLGRP=G1&CTLFNC=SEARCHALL";
//버틀 그룹쪽에서 컨틀롤러 호출
var url_G1_RESET = "perfjqxgridController?CTLGRP=G1&CTLFNC=RESET";
// 변수 선언	
var obj_G2__POPUP = null;//  글로벌 변수 선언 - 팝업
//컨트롤러 경로
var url_G2_SEARCH = "perfjqxgridController?CTLGRP=G2&CTLFNC=SEARCH";
//컨트롤러 경로
var url_G2_RELOAD = "perfjqxgridController?CTLGRP=G2&CTLFNC=RELOAD";
//그리드 객체
var mygridG2,isToggleHiddenColG2,lastinputG2,lastinputG2json,lastrowidG2;
var lastselectG2json, dataAdapterG2;
//화면 초기화	
function initBody(){
     alog("initBody()-----------------------start");
	
   //dhtmlx 메시지 박스 초기화
   dhtmlx.message.position="bottom";
	G1_INIT();	
	G2_INIT();	
      feather.replace();
	alog("initBody()-----------------------end");
} //initBody()	
//팝업띄우기		
	//팝업창 오픈요청
function goGridPopOpen(tGrpId,tRowId,tColIndex,tValue,tText){
	alog("goGridPopOpen()............. tGrpId = " + tGrpId + ", tRowId = " + tRowId + ", tColIndex = " + tColIndex + ", tValue = " + tValue + ", tText = " + tText);
	
	tColId = mygridG2.getColumnId(tColIndex);
	
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
  alog("G1_INIT()-------------------------end");
}

//rst 그리드 초기화
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
//rst
var gridFilterG2 = function(cellValue, rowData, dataField, filterGroup, defaultFilterResult){
//alog("gridFilter().....................................start : dataField=" + dataField + ", cellValue="+cellValue);
}//rst filter end
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
            height: parseInt('655px'),  //default height : 400          
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
            columns: [
				{ cellclassname: cellclass, text: 'RSTSEQ'
				, datafield: 'RSTSEQ', width: 50
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'PJTSEQ'
				, datafield: 'PJTSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'PGMSEQ'
				, datafield: 'PGMSEQ', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'FILETYPE'
				, datafield: 'FILETYPE', width: 60
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'VERSEQ'
				, datafield: 'VERSEQ', width: 60
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'ORD'
				, datafield: 'SRCORD', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'TXT'
				, datafield: 'SRCTXT', width: 100
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: '생성일'
				, datafield: 'ADDDT', width: 200
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
				{ cellclassname: cellclass, text: 'MODDT'
				, datafield: 'MODDT', width: 60
				, cellsalign: 'LEFT', align: 'LEFT'
				, columntype: 'TEXTBOX'
				},
            ]
        });

		//가로사이즈 초기화
		//$('#jqxgridG2').jqxGrid({ width: (Math.round($("#divGrpG2").width()) - 8) });
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

	});
	//데이터 바인딩 완료
	$("#jqxgridG2").on("bindingcomplete", function (event) {
		alog("jqxgridG2 bindingcomplete()......................start");       
		//alog(event.args.owner.rows.records.length);
		//row_cnt = event.args.owner.rows.records.length;

		//$("#spanG2Cnt").text(row_cnt);
	});  
  alog("G2_INIT()-------------------------end");
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
			lastinputG2 = new HashMap(); //rst
		//  호출
	G2_SEARCH(lastinputG2,token);
	alog("G1_SEARCHALL--------------------------end");
}
//새로고침	
function G2_RELOAD(token){
  alog("G2_RELOAD-----------------start");
  G2_SEARCH(lastinputG2,token);
}
//그리드 조회(rst)	
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
                { name: 'RSTSEQ', type: 'NUMBER', format: '' },
                { name: 'PJTSEQ', type: 'NUMBER', format: '' },
                { name: 'PGMSEQ', type: 'NUMBER', format: '' },
                { name: 'FILETYPE', type: 'STRING', format: '' },
                { name: 'VERSEQ', type: 'NUMBER', format: '' },
                { name: 'SRCORD', type: 'STRING', format: '' },
                { name: 'SRCTXT', type: 'STRING', format: '' },
                { name: 'ADDDT', type: 'STRING', format: '' },
                { name: 'MODDT', type: 'STRING', format: '' },
            ],
            root: "RTN_DATA>rows",
            //record: "PERFJQXGRID",
            id: '',
            url: "PERFJQXGRIDController?CTLGRP=G2&CTLFNC=SEARCH"
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
