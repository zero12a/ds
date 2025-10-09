<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?><!DOCTYPE html>
<html lang="en">
<head>
    <title id='Description'>jqxGrid</title>
    <meta name="description" content="JavaScript Grid with rich support for Data Filtering, Paging, Editing, Sorting and Grouping" />
    <link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jqwidgets/styles/jqx.base.min.css" type="text/css" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1 minimum-scale=1" />
    <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-1.12.4.min.js"></script>

    <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jqwidgets/jqx-all.js"></script>

    <script type="text/javascript" src="/common/common_jqwidgets.js"></script>
    <link rel="stylesheet" href="/common/common_jqwidgets.css">
    <!--
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqx-all.js"></script>


    styles/images : 
        check_black.png                
        icon-calendar.png  
        icon-left.png        
        icon-right.png     
        icon-sort-desc.png    
        icon-up.png
        check_indeterminate_black.png  
        icon-down.png      
        icon-menu-small.png  
        icon-sort-asc.png  
        icon-sort-remove.png  
        loader.gif

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxcore.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxdata.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxbuttons.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxscrollbar.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxmenu.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxcheckbox.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxlistbox.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxcombobox.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxdropdownlist.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxcalendar.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxdatetimeinput.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.sort.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.pager.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.selection.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.edit.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.columnsresize.js"></script> 
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jqwidgets-scripts@9.1.4/jqwidgets/jqxgrid.filter.js"></script> 
    -->

    
    <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js"></script>

    

    <style type="text/css">

        /*헤더 색깔*/
        .jqx-widget-header {
            /*background-color: #e2efff;*/
        }
        /*짝수행 색깔*/
        .jqx-grid-cell-alt {
            /*background: #ebf3ff;*/
        }

    </style>
    <script type="text/javascript">
    var dataAdapterGrid;

    $(document).ready(function () {
        jqx.credits = '75CE8878-FCD1-4EC7-9249-BA0F153A5DE8';

        //로더
        $("#jqxLoader").jqxLoader({ width: 100, height: 60, imagePosition: 'top', autoOpen: false });


        //오브젝트 생성 및 통신 상태 순서
        //10.필터 생성, 같은 데이터어댑터를 쓰는 2개 컬럼 일지라도 필터 갯수만큼 서버 통신함
        //20.렌더링 함
        //30.데이터 바인딩 컴플리트
        //40.컬럼의 콤보박스 데이터는 컬럼 클릭시 실시간으로 서버에서 정보를 가져옴

        //https://www.jqwidgets.com/community/topic/refreshdata-refresh-and-render-methods/
        //refreshdata – refreshes the data. (데이터 어뎁터의 records는 다시불러오기함 -> 스크롤이 맨위로 감)
        //refresh – updates the grid’s size and layout.
        //render – re-renders the grid.
        //updatebounddata – refreshes the data and re-renders the grid. (소스데이터 변경하고 새로고침하기, 화면 변경사항은 모두 취소됨)

        var addFilter = function () {
            alog("addFilter()...............................start");
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filter = filtergroup.createfilter('stringfilter', "c01", 'equal');
            filtergroup.addfilter(filter_or_operator, filter);

            //$("#grid").jqxGrid('addfilter', 'UnitsInStock', filtergroup, true);
            //$("#grid").jqxGrid('applyfilters');
        }




        //##################################################################
        //##    커스텀 렌더러(콤보, 다랍다운)
        //##################################################################
        var cellRendererComboBox = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            //alog("cellRendererComboBox().............................start : value=" + value);
            /*
            alog(row);
            alog(columnfield);
            alog(value);
            alog(defaulthtml);
            alog(columnproperties);
            alog(rowdata);
            */
            //alog(dataAdapterCds.records);
            tmpObj = _.find(dataAdapterCds.records, ['cd', value]);
            //tmpObj = _.find(listJson, ['cd', value]);
            rtnStr = "";            
            //alog(tmpObj);
            if(tmpObj){
                rtnStr = rtnStr + tmpObj.nm;
            }                

            if(rtnStr==""){
                rtnStr=value;
                return '<span style="margin: 4px; margin-top:5px; float: ' + columnproperties.cellsalign + ';color:red;">' + rtnStr + "</span>";
            }else{
                return '<span style="margin: 4px; margin-top:5px; float: ' + columnproperties.cellsalign + ';">' + rtnStr + "</span>";
            }
        }
        
        var cellRendererDropDownListCheck = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            //alog("cellRendererDropDownListCheck().............................start");
            /*
            alog(row);
            alog(columnfield);
            alog(value);
            alog(defaulthtml);
            alog(columnproperties);
            alog(rowdata);
            */
            //alog(rowdata);
            tmpArr = value.split(",");
            rtnStr = "";
            for(i=0;i<tmpArr.length;i++){
                tmpObj = _.find(dataAdapterCds.records, ['cd', tmpArr[i]]);
                //alog(tmpObj);
                if(tmpObj){
                    if(rtnStr == ""){
                        rtnStr = rtnStr + tmpObj.nm;
                    }else{
                        rtnStr = rtnStr +  "," + tmpObj.nm;
                    }
                }                
            }
            if(rtnStr==""){
                rtnStr=value;
                return '<span style="margin: 4px; margin-top:5px; float: ' + columnproperties.cellsalign + ';color:red;">' + rtnStr + "</span>";
            }else{
                return '<span style="margin: 4px; margin-top:5px; float: ' + columnproperties.cellsalign + ';">' + rtnStr + "</span>";
            }
        }


        //##################################################################
        //##    그리드 데이터 로드
        //##################################################################
        var sourceGrid =
        {
            datatype: "xml",
            async: true,
            datafields: [
                { name: 'ProductName', type: 'string' },
                { name: 'QuantityPerUnit', type: 'int' },
                { name: 'UnitPrice', type: 'string' },
                { name: 'UnitsInStock', type: 'string' },
                { name: 'Discontinued', type: 'bool' },
                { name: 'BirthDate', type: 'date', format: 'yyyy-MM-dd' },
                { name: 'changeState', type: 'bool'},
                { name: 'changeCud', type: 'string'}
            ],
            root: "Products",
            record: "Product",
            id: 'ProductID',
            url: "demo_data.xml"
        };

        dataAdapterGrid = new $.jqx.dataAdapter(sourceGrid, {
            autobind: false,
            downloadComplete: function (data, status, xhr) { },
            loadComplete: function (data) { },
            loadError: function (xhr, status, error) { },
            updaterow: function (rowIndex, rowdata, commit) {
                alog("dataAdapterGrid updaterow()...................start");
                //alog("  rowIndex=" + rowIndex);

                //기본이 변경
                rowdata.changeState = true; //데이터 변경이 commit뒤로 가면 렌더링이 잘 안될수 있음

                //변경과 삭제가 동일하게 updaterow이벤트 사용하기 때문에 주의 요망
                if(typeof rowdata.changeCud == "undefined" || rowdata.changeCud == ""){
                    rowdata.changeCud = "updated";
                }

                commit(true);
                                
            },
            addrow: function (rowIndex, rowdata, position, commit) {
                alog("dataAdapterGrid addrow()...................start");                    
                //alog(rowdata);
                rowdata.changeState = true;
                rowdata.changeCud = "inserted"; //데이터 변경이 commit뒤로 가면 렌더링이 잘 안될수 있음
                //alog(this);

                commit(true);


            },
            deleterow: function (rowIndex, commit) {
                alog("dataAdapterGrid deleterow()...................start");      
                alog("  rowIndex = " + rowIndex);    
       
                commit(true);
            }                
        });

        var list = ['1', '2', '3'];
        var listJson = [
            { "nm" : "하이1", "cd" : "cd_1" },
            { "nm" : "하이2", "cd" : "cd_2" },
            { "nm" : "하이3", "cd" : "cd_3" },
            { "nm" : "하이4", "cd" : "cd_4" }
        ];


        //##################################################################
        //##    필터 데이터 로드(이건 화면 렌더링 시에 필요하기 때문에 렌더링전에 데이터가 준비되어야해서, 동기식으로 데이터 로딩필요)
        //##################################################################
        var sourceCdsFilter =
        {
            async: true, //필더 렌더링은 그리드 화면 그릴때 가장 먼저 실행되므로 관련 데이터는 미리 서버에서 가져와 있어야 함.
            datatype: "json",
            datafields: [
                { name: 'nm' },
                { name: 'cd' }
            ],
            id: 'id',
            url: "demo_json.php?filter"
        };
        dataAdapterCdsFilter = new $.jqx.dataAdapter(sourceCdsFilter, {
            autobind: false,
            downloadComplete: function (data, status, xhr) { alog(" dataAdapterCdsFilter downloadComplete.")},
            loadComplete: function (data) { alog(" dataAdapterCdsFilter loadComplete.") },
            loadError: function (xhr, status, error) {  
                alog("     dataAdapterCdsFilter loadError.");
                alog(error); 
            }, 
        });
        dataAdapterCdsFilter.dataBind();//그리드에 렌더링할 코드 데이터 먼저 불러오기


        //##################################################################
        //##    에디터 데이터 로드(이건 화면 렌더링 후에 채워쟈도 됨. 그 이유는 에디터 클릭시 데이터가 필요한 시점이기 때문에 )
        //##################################################################
        var sourceCds =
        {
            async: true, //그리드 렌더링할때 코드데이터의 대한 코드이름을 표시해줘야해서 데이터 동기식으로 미리 가져와야함.
            datatype: "json",
            datafields: [
                { name: 'nm' },
                { name: 'cd' }
            ],
            id: 'id',
            url: "demo_json.php?cds"
        };

        dataAdapterCds = new $.jqx.dataAdapter(sourceCds, {
            autobind: true,
            downloadComplete: function (data, status, xhr) { alog(" dataAdapterCds downloadComplete.")},
            loadComplete: function (data) { alog(" dataAdapterCds loadComplete.") },
            loadError: function (xhr, status, error) {  
                alog("     dataAdapterCds loadError.");
                alog(error); 
            }, 
        });
        dataAdapterCds.dataBind();//그리드에 렌더링할 코드 데이터 먼저 불러오기(에디팅 모드 진입시 데이터 가져오면 서버요청 3번 동시에 하는 문제가 있어서, 미리 데이터 가져다 놓음)

        //##################################################################
        //##   필터 정의
        //##################################################################
        var gridFilter = function(cellValue, rowData, dataField, filterGroup, defaultFilterResult){
            //alog("gridFilter().....................................start : dataField=" + dataField + ", cellValue="+cellValue);

            //DropDownList(AND)
            if (dataField === "UnitPrice") {
                arrCellValue = [];
                if(cellValue.indexOf(",") > 0){
                    arrCellValue = cellValue.split(",");
                }else{
                    arrCellValue[0] =cellValue;
                }

                var filters = filterGroup.getfilters();
                //alog(filters);
                var equalCnt = 0;
                for (var i = 0; i < filters.length; i++) {
                    var filter = filters[i];
                    var filterValue = filter.value;
                    var filterId = filter.id;
                    var filterCondition = filter.condition;
                    var filterType = filter.type;

                    for(var t=0;t<arrCellValue.length;t++){
                        if(arrCellValue[t] == filterId){
                            equalCnt++;
                            break;
                        }
                    }
                }
                //모두 일치 하면 true
                if(filters.length > 0 && filters.length == arrCellValue.length && filters.length == equalCnt) return true;

                return false;
            }

            //DropDownList(OR)
            if (dataField === "UnitPrice2") {
                arrCellValue = [];
                if(cellValue.indexOf(",") > 0){
                    arrCellValue = cellValue.split(",");
                }else{
                    arrCellValue[0] =cellValue;
                }

                var filters = filterGroup.getfilters();
                //alog(filters);
                for (var i = 0; i < filters.length; i++) {
                    var filter = filters[i];
                    var filterValue = filter.value;
                    var filterId = filter.id;
                    var filterCondition = filter.condition;
                    var filterType = filter.type;

                    for(var t=0;t<arrCellValue.length;t++){
                        if(arrCellValue[t] == filterId)return true;
                    }
                }
                return false;
            }

            //ComboBox
            if (dataField === "UnitsInStock") {
                var filters = filterGroup.getfilters();
                //alog("  [UnitsInStock] filters.length=" + filters.length);
                for (var i = 0; i < filters.length; i++) {
                    var filter = filters[i];
                    var filterValue = filter.value;
                    var filterId = filter.id;
                    var filterCondition = filter.condition;
                    var filterType = filter.type;
                    //alog("  [UnitsInStock] cellValue=" + cellValue + ", filterId=" + filterId);
                    if (cellValue == filterId) {
                        return true;
                    }
                }
                return false;
            }
        }


        //filter type
        //   'textbox' - basic text field.
         //    'input' - input field with dropdownlist for choosing the filter condition. *Only when "showfilterrow" is true.
        //     'checkedlist' - dropdownlist with checkboxes that specify which records should be visible and hidden.
        //     'list' - dropdownlist which specifies the visible records depending on the selection.
        //     'number' - numeric input field. *Only when "showfilterrow" is true.
        //     'bool' - filter for boolean data. *Only when "showfilterrow" is true.
         //    'date' - filter for dates.

        // initialize jqxGrid
        $("#grid").jqxGrid(
        {
            ready: addFilter,
            filter: gridFilter,
            width: ((document.body.offsetWidth - 13)/2),
            localization: getLocalization(),
            //autoshowloadelement: true,
            //source: dataAdapterGrid,    
            columnsheight: 26, //헤더 높이 default 32
            filterrowheight: 37, //필터 높이 default 37 (jqxgrid.filter.js 에 input필드 인라인으로 margin 4px가 하드코딩 됨.ㅠㅠ)
            rowsheight: 26, //데이터의행 높이
            height: 800,            
            pageable: false,
            autoheight: false,
            sortable: true,
            altrows: true,
            enabletooltips: true,
            editable: true,
            showfilterrow: true,
            filterable: true,
            editmode: 'dblclick', //click, dblclick, selectedcell, selectedrow
            columnsresize: true,
            selectionmode: 'checkbox', //'none', 'singlerow', 'multiplerows', 'multiplerowsextended', 
            //'multiplerowsadvanced', 'singlecell', multilpecells', 'multiplecellsextended', 'multiplecellsadvanced' and 'checkbox' 
            columns: [
                { cellclassname: cellclass, text: 'Product Name'
                    , filtertype: 'textbox'
                    , datafield: 'ProductName', width: 100, pinned: true 
                    , hidden: false
                },
                { cellclassname: cellclass, text: 'Quantity per Unit'
                    , filtertype: 'number'
                    , datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 50 
                },
                { cellclassname: cellclass, text: 'Unit Price'
                    , cellsrenderer: cellRendererDropDownListCheck
                    , filtertype: 'checkedlist'
                    //, filteritems: dataAdapterCdsFilter.records //데이터소스를 직접 줄수 있으나, 변경시 마다 필터적용된 컬럼 갯수만큼 코드데이터 서버에 매번 재호출함.
                    , columntype: 'dropdownlist'
                    , datafield: 'UnitPrice'
                    , align: 'right'
                    , cellsalign: 'right'
                    , width: 80
                    , geteditorvalue: fnDropdownGeteditorvalue
                    , cellvaluechanging: fnDropdownCellvaluechanging
                    , initeditor: fnDropdownIniteditor
                    , createeditor: fnDropdownCreateeditor
                    , createfilterwidget: fnDropdownCreatefilterwidget
                },
                { cellclassname: cellclass, text: 'Units In Stock'
                    , cellsrenderer: cellRendererComboBox
                    , datafield: 'UnitsInStock'
                    , cellsalign: 'right'
                    , columntype: 'combobox'
                    , filtertype: 'list'
                    //, filteritems: listJson
                    //, filteritems: dataAdapterCdsFilter.records //데이터소스를 직접 줄수 있으나, 변경시 마다 필터적용된 컬럼 갯수만큼 코드데이터 서버에 매번 재호출함.
                    , filterable: true
                    , width: 70 
                    , geteditorvalue: fnComboGeteditorvalue
                    , cellvaluechanging: fnComboCellvaluechanging
                    , initeditor: fnComboIniteditor
                    , createeditor: fnComboCreateeditor
                    , createfilterwidget: fnComboCreatefilterwidget
                },
                { cellclassname: cellclass, text: 'Discontinued'
                    , filtertype: 'bool'
                    , columntype: 'checkbox', datafield: 'Discontinued' 
                },
                { cellclassname: cellclass, text: 'BirthDate', columntype: 'datetimeinput', datafield: 'BirthDate'
                    , cellsformat:'yyyy-MM-dd'
                    , filtertype: 'date'
                    , cellvaluechanging: fnDateCellvaluechanging
                }
            ]
        });

        //코드 데이터 세팅하기
        listJson = [
            { "nm" : "하이1", "cd" : "c01" },
            { "nm" : "하이2", "cd" : "c02" },
            { "nm" : "하이3", "cd" : "c03" },
            { "nm" : "하이4", "cd" : "c04" }
        ];

        //데이터 바인딩 완료
        $("#grid").on("bindingcomplete", function (event) {
            alog("bindingcomplete()......................start");       
            alog(event.args.owner.rows.records.length);
            //$('#grid').jqxGrid('hideloadelement');     
            $('#jqxLoader').jqxLoader('close');
            //alog(dataAdapterGrid);

            //$("#span{G.GRPID}Cnt").text(row_cnt) event.args.owner.rows.records.length
        });  



        $('#grid').on('rowclick', function (event) {
            alog("rowclick()......................start");
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
            
            $("#txtArea").val("rowindex : " + event.args.rowindex + "\n\n" + JSON.stringify(event.args.row.bounddata,null,"\t"));
        }); 

        $("#grid").on('rowselect', function (event) {
            alog("rowselect()......................start");
            //alog(event);
            //alog(event.args.row);
            //alert(event.args.rowindex);

            //alog(dataAdapterGrid);
            $("#txtArea").val("rowindex : " + event.args.rowindex + "\n\n" + JSON.stringify(event.args.row,null,"\t"));
            //$("#txtArea").val(JSON.stringify(dataAdapterGrid,null,"\t"));
            // /alog(dataAdapterGrid.records[0].QuantityPerUnit);
        });

        // events
        $('#grid').jqxGrid({ rendered: function(){
            alog("rendered.");
        }}); 

        $("#grid").on('cellbeginedit', function (event) {
            alog("cellbeginedit()......................start");
            //alog(dataAdapterGrid);
            //alog(event);                    
            var args = event.args;
            var rowindex = args.rowindex;            
        });            


        $("#grid").on('cellendedit', function (event) {
            alog("cellendedit()......................start");
            //alog(event);                
            var args = event.args;
            var rowindex = args.rowindex;


        });


        $("#grid").on('filter', function (event) {
            alog("grid.on(filter).......................start()");

            // get filter information.
            var filterInformation = $("#grid").jqxGrid('getfilterinformation');
            alog(filterInformation);
            var filterdata = {};
            var filterslength = 0;
            var data = {};
            for (var x = 0; x < filterInformation.length; x++) {
                // column's data field.
                var filterdatafield = filterInformation[x].datafield;
                // column's filter group.
                var filterGroup = filterInformation[x].filter;
                // column's filters.
                var filters = filterGroup.getfilters();
                // filter group's operator.
                data[filterdatafield + "operator"] = filterGroup.operator;
                for (var m = 0; m < filters.length; m++) {
                    filters[m].datafield = filterdatafield;
                    // filter's value.
                    var filtervalue = filters[m].value;
                    data["filtervalue" + filterslength] = filtervalue.toString();
                    // filter's id.
                    if (filters[m].id) {
                        data["filterid" + filterslength] = filters[m].id.toString();
                    }
                    // filter's condition.
                    data["filtercondition" + filterslength] = filters[m].condition;
                    // filter's operator.
                    data["filteroperator" + filterslength] = filters[m].operator;
                    // filter's data field.
                    data["filterdatafield" + filterslength] = filterdatafield;
                    filterslength++;
                }
            }
            $("#txtArea").val(JSON.stringify(data));
        });


    });

    function searchData(){
        alog("searchData().........................start()");
        //$('#grid').jqxGrid('clear'); //지우면 렌더링을 새로 하기 때문에, Loading을 띄워주는게 유리
        //$('#grid').jqxGrid('showloadelement');
        $('#jqxLoader').jqxLoader('open');

        $("#grid").jqxGrid({
            source: dataAdapterGrid
        });
        alog("searchData().........................end()");
    }
    function getCheckedRows(){
        alog("getCheckedRows()..........................start");
        var rowindexes = $('#grid').jqxGrid('getselectedrowindexes');

        //alog(rowindexes);
        //var allRows = $('#grid').jqxGrid('getrows');//sorting하면 바뀜 화면에 보이는순번이랑 dataadaptor랑 다름
        var allRows = $('#grid').jqxGrid('getboundrows');
        //alog(allRows);
        var checkedRows = [];
        for(i=0;i<rowindexes.length;i++){
            checkedRows[i] = allRows[rowindexes[i]];
        }


        alog(checkedRows);
    }

    function getChangedRows(){
        alog("getChangedRows()..........................start");
        var rows = $('#grid').jqxGrid('getrows');
        //alog(rows);
        //var filterRows = _.filter(rows,['changeState',true]);
        var filterRows = _.filter(rows,['changeState',true]); //loadash.js  (find는 1개만 찾고, filter를 모두 찾아줌)
        alog(filterRows);
    }

    function addFilter2(){
        alog("addFilter()..........................start");
        var filtergroup = new $.jqx.filter();
        var filtervalue = 'Chai'; // Each cell value is compared with the filter's value.
        // filtertype - numericfilter, stringfilter, datefilter or booleanfilter. 
        // condition
        // possible conditions for string filter: 'EMPTY', 'NOT_EMPTY', 'CONTAINS', 'CONTAINS_CASE_SENSITIVE',
        // 'DOES_NOT_CONTAIN', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'STARTS_WITH', 'STARTS_WITH_CASE_SENSITIVE',
        // 'ENDS_WITH', 'ENDS_WITH_CASE_SENSITIVE', 'EQUAL', 'EQUAL_CASE_SENSITIVE', 'NULL', 'NOT_NULL'
        // possible conditions for numeric filter: 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'
        // possible conditions for date filter: 'EQUAL', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'NULL', 'NOT_NULL'                         
        var filter = filtergroup.createfilter('stringfilter', filtervalue, 'EQUAL');
        // To create a custom filter, you need to call the createfilter function and pass a custom callback function as a fourth parameter.
        // If the callback's name is 'customfilter', the Grid will pass 3 params to this function - filter's value, current cell value to evaluate and the condition.                        
        // operator - 0 for "and" and 1 for "or"
        filtergroup.addfilter(0, filter);
        // datafield is the bound field.
        // adds a filter to the grid.
        $('#grid').jqxGrid('addfilter', "ProductName", filtergroup);
        $("#grid").jqxGrid('applyfilters');

        var rows = $('#grid').jqxGrid('getrows');
        alog(rows);

        alog("addFilter2()..........................end");

    }

    function deleteRow(){
        alog("deleteRow().............................start");
        //alog(JSON.stringify(dataAdapterGrid.records));
        //var rowIndex = $('#grid').jqxGrid('getselectedrowindex');
        var rowindexes = $('#grid').jqxGrid('getselectedrowindexes');
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

            var rowId = $('#grid').jqxGrid('getrowid', rowIndex);
            if(dataAdapterGrid.records[rowIndex].changeState == true
                && dataAdapterGrid.records[rowIndex].changeCud == "inserted"
                ){
                //('#grid').jqxGrid('deleterow', rowId);
                rowRemoveIds[rowRemoveIds.length] = rowId;
            }else{
                rowDeleteIds[rowDeleteIds.length] = rowId;

                dataAdapterGrid.records[rowIndex].changeState = true;
                dataAdapterGrid.records[rowIndex].changeCud = "deleted";     
                rowDeleteDatas[rowDeleteDatas.length] = $('#grid').jqxGrid('getrowdatabyid', rowId);;
            }            
 
        }

        //alog( JSON.stringify( _.filter(dataAdapterGrid.records,{'changeState':true, 'changeCud': 'deleted'}) ) );
        //alog( JSON.stringify( _.filter(dataAdapterGrid.records,{'changeState':true, 'changeCud': 'add_deleted'}) ) );
        if(rowindexes.length > 0){
            $('#grid').jqxGrid('clearselection'); //선택한 체크 없애기
        }
        if(rowDeleteIds.length > 0){
            $('#grid').jqxGrid('updaterow', rowDeleteIds, rowDeleteDatas); //일괄 배열 삭제
        }
        if(rowRemoveIds.length > 0){
            $('#grid').jqxGrid('deleterow', rowRemoveIds); //행추가 하고 서버 저장 아직 안한 행은 화면에서 완전 삭제
        }

        //$('#grid').jqxGrid('render'); //이거 했더니, 첫번째 행으로 스크롤위치가 변경됨. refreshdata를 해야 정렬했을때도 반영됨.
        //$('#grid').jqxGrid('refreshdata'); //이거 했더니, 첫번째 행으로 스크롤위치가 변경됨. refreshdata를 해야 정렬했을때도 반영됨.
            
        //alog(dataAdapterGrid.records);
    }

    function daUpdate(){
        toUpdateObj = _.filter(dataAdapterGrid.records,{'changeState':false, 'changeCud': 'deleted'});
        toUpdateObj.forEach(function(e){
            alog("변경 row id : " +  e.uid)
            newData = $('#grid').jqxGrid('getrowdatabyid', e.uid);

            $('#grid').jqxGrid('updaterow', e.uid, newData);
        });

        toDeleteObj = _.filter(dataAdapterGrid.records,{'changeState':false, 'changeCud': 'add_deleted'});
        toDeleteObj.forEach(function(e){
            alog("삭제 row id : " +  e.uid)

        });
    }

    function reload(tmp){
        $('#grid').jqxGrid(tmp); //이걸로 해야 스크롤위치가 안바뀜.
    }

    function addRow(){
        alog("addRow().............................start");

        $('#grid').jqxGrid('clearselection'); //체크가 다른행으로 밀리기 때문에 선택한 체크 없애기

        var rowData = {
            "ProductName" : "111",
            "QuantityPerUnit": 222,
            "UnitPrice": '11',
            "UnitsInStock": '22',
            "Discontinued": true,
            "changeState": true,
            "changeCud": "inserted"
        };

        var value = $('#grid').jqxGrid('addrow', null, rowData, "first");

        //$('#grid').jqxGrid('refresh'); //이걸로 해야 스크롤위치가 안바뀜.
        //$('#grid').jqxGrid('render'); //이거 했더니, 첫번째 행으로 스크롤위치가 변경됨.
    }
    function alog(tmp){
        if(console)console.log(tmp);
    }
    </script>
</head>
<body class='default'>

<input type="button" onclick="getCheckedRows()" value="getCheckedRows">
<input type="button" onclick="getChangedRows()" value="getChangedRows">
<input type="button" onclick="addFilter2()" value="addFilter2">
<input type="button" onclick="deleteRow()" value="deleteRow">
<input type="button" onclick="reload('refreshdata')" value="freshdata">
<input type="button" onclick="reload('refresh')" value="refresh">
<input type="button" onclick="reload('render')" value="render">
<input type="button" onclick="reload('updatebounddata')" value="updatebounddata">
<input type="button" onclick="addRow()" value="addRow">
<input type="button" onclick="searchData()" value="searchData()">
<br>
<div style="height:3px;width:100%"></div>
    <div style="float:left;width:50%;">
        <div id="grid"></div>
    </div>
    <div style="float:left;width:50%;">
        <textarea id="txtArea" style="width:100%;height:800px;"></textarea>
    </div>


<div id="jqxLoader"></div>
</body>
</html>