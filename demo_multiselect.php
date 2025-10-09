<?php
//PGMID : ICONMNG
//PGMNM : 아이콘관리
header("Content-Type: text/html; charset=UTF-8"); //HTML

//설정 함수 읽기
$CFG = require_once '../common/include/incConfig.php';
?>
<html>
  <head>
    <title>multiselect</title>
    <style>
.OBJ_BR {position: relative;width:100%;overflow:auto;z-index:20;height:3px}

.CON_LINE {overflow:auto; position: relative;width:100%;z-index:20;}
.CON_OBJGRP {overflow:auto; position: relative;float:left;background-color: #eeeeee;vertical-align:middle ;z-index:25;}
.CON_OBJECT {overflow:auto; position: relative;float:left;background-color: #eeeeee;vertical-align:middle;z-index:30;}

    </style>
    <script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-3.4.1.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY CORE-->
    <script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY CORE-->
    <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js"></script>

    <link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery.multiselect.css?22" type="text/css" charset="UTF-8">

  </head>
  <body>
1
<DIV class="CON_LINE" is_br_tag style="overflow:visible;">
<!--D101: STARTTXT, TAG-->
<!--I.COLID : IMGTYPE4-->
  <div class="CON_OBJGRP"  style="overflow:visible;">

    <!-- style="width:400px;"-->
    <div class="CON_OBJECT" style="overflow:visible;">

      <div style="position:relative;width:150px;left:100px;">
        <select id="tSelect" multiple style="width:100%;"></select>
      </div>
  </div>
</div>
<DIV class="OBJ_BR"></DIV>
<DIV class="CON_LINE" is_br_tag>
  <input type="button" onclick="bindChangeEvent();" value="bindChangeEvent">
  <input type="button" onclick="unBindChangeEvent();" value="unBindChangeEvent">
  <input type="button" onclick="loadData();" value="loadData">
  <input type="button" onclick="getVal();" value="getVal">
  <input type="button" onclick="setVal('cd1,cd2');" value="setVal('cd1,cd2')">
  2<hr><hr><hr><hr><hr><hr><hr>
</DIV>
</body>
<script>
  function getVal(){
    alert($("#tSelect").val());
  }


  function loadData(){

      tarr = [
      {value:"cd1",name:"nm1"},
      {value:"cd2",name:"nm2"},
      {value:"cd3",name:"nm3"},
      {value:"cd4",name:"nm4"},
      {value:"cd5",name:"nm5"},
      {value:"cd6",name:"nm6"},
      {value:"cd7",name:"nm7"},
      {value:"cd8",name:"nm8"},
      {value:"cd9",name:"nm9"},
      {value:"cd10",name:"nm10"},
    ];

    $('#tSelect').multiselect( 'loadOptions', tarr);
  }

  function bindChangeEvent(){
    $( "#tSelect" ).on("change",function() {
      alert( "Handler for .change() called." );
    });
  }

  function unBindChangeEvent(){
    $( "#tSelect" ).off("change");
  }

  function setVal(tCds){
    tArrCds = tCds.split(",");
    $("#tSelect > option").each(function(index,item){
      alog(item);
      item.selected = false; //전체 선택 해제
    });

    for(i=0;i<tArrCds.length;i++){
      //alog(i + " = " + tArrCds[i]);
      alog($("#tSelect > option[value=" + tArrCds[i] + "]"));
      //$("#tSelect > option[value=" + tArrCds[i] + "]").attr("selected",true);
      $("#tSelect > option[value=" + tArrCds[i] + "]").prop("selected",true);
      //$("#tSelect").val(tArrCds[i]).prop("selected",true);
    }
    $('#tSelect').multiselect( 'reload' );
  }

    $('#tSelect').multiselect({
        columns: 1,     // how many columns should be use to show options
        search : false, // include option search box   
        // search filter options
        searchOptions : {
            delay        : 250,                  // time (in ms) between keystrokes until search happens
            showOptGroups: false,                // show option group titles if no options remaining
            searchText   : true,                 // search within the text
            searchValue  : false,                // search within the value
            onSearch     : function( element ){} // fires on keyup before search on options happens
        },

        // plugin texts
        texts: {
            placeholder    : 'Select options', // text to use in dummy input
            search         : 'Search',         // search input placeholder text
            selectedOptions: ' selected',      // selected suffix text
            selectAll      : 'Select all',     // select all text
            unselectAll    : 'Unselect all',   // unselect all text
            noneSelected   : 'None Selected'   // None selected text
        },

        // general options
        selectAll          : true, // add select all option
        selectGroup        : false, // select entire optgroup
        minHeight          : 300,   // minimum height of option overlay
        maxHeight          : null,  // maximum height of option overlay
        maxWidth           : null,  // maximum width of option overlay (or selector)
        maxPlaceholderWidth: null, // maximum width of placeholder button
        maxPlaceholderOpts : 10, // maximum number of placeholder options to show until "# selected" shown instead
        showCheckbox       : true,  // display the checkbox to the user
        optionAttributes   : [],  // attributes to copy to the checkbox from the option element

        // Callbacks
        onLoad        : function( element ){},           // fires at end of list initialization
        onOptionClick : function( element, option ){},   // fires when an option is clicked
        onControlClose: function( element ){},           // fires when the options list is closed
        onSelectAll   : function( element, selected ){}, // fires when (un)select all is clicked
        onPlaceholder : function( element, placeholder, selectedOpts ){}, // fires when the placeholder txt is up<a href="https://www.jqueryscript.net/time-clock/">date</a>d

        // @NOTE: these are for future development
        minSelect: false, // minimum number of items that can be selected
        maxSelect: false, // maximum number of items that can be selected

        });


function alog(tLog){
  if(typeof console == "object")console.log(tLog);
}
</script>

</html>