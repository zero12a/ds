<?php
//PGMID : ICONMNG
//PGMNM : 아이콘관리
header("Content-Type: text/html; charset=UTF-8"); //HTML

//설정 함수 읽기
$CFG = require_once '../common/include/incConfig.php';
?>
<html>
  <head>
    <title>Popper Tutorial</title>
    <style>

    </style>
    <script src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/jquery/jquery-3.4.1.min.js" type="text/javascript" charset="UTF-8"></script> <!--JQUERY CORE-->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>

    <style>
    .dropDownChkDiv{
        background-color:white;
    }

    .dropDownChkDiv:hover{
        background-color:silver;
    }
    </style>

  </head>
  <body>
    <div class="dropdownCell">
        <div id="button1" class="dropDownList1" 
        style="height:23px;overflow:hidden;border:solid 1px;float:left;width:200px;background-color:gray;">My button1</div>
        <div id="button2" class="dropDownList1" style="height:23px;overflow:hidden;border:solid 1px;float:left;width:150px;background-color:gray;">My button2</div>
        <div id="button3" class="dropDownList1" style="height:23px;overflow:hidden;border:solid 1px;float:left;background-color:gray;">My button3</div>
        <div id="button4" class="dropDownList2" style="height:23px;overflow:hidden;border:solid 1px;float:left;background-color:silver;">My button4</div>
        <div id="button5" class="dropDownList2" style="height:23px;overflow:hidden;border:solid 1px;float:left;background-color:silver;">My button5</div>
        <div id="button6" class="dropDownList2" style="height:23px;overflow:hidden;border:solid 1px;float:left;width:150px;background-color:silver;">My button6</div>
    </div>
    <br>
    <div class="dropdownView" id="dropDownView1"
     style="border:solid 1px gray;vertical-align:top;background-color:white;visibility:hidden;display:none;position:absolute;overflow:hidden;">
        <input type=hidden class="lastRowId" id="lastRowId1" value="">
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Apple" />Apple
        </div> 
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Blackberry" />Blackberry
        </div>
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="HTC" />HTC
        </div>
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Sony Ericson" />Sony Ericson
        </div>
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Motorola" />Motorola
        </div>
        <div class="dropDownChkDiv dropDownChkDiv1" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Nokia" />Nokia
        </div>
    </div>
    <div class="dropdownView" id="dropDownView2"
     style="border:solid 1px gray;vertical-align:top;background-color:white;visibility:hidden;display:none;position:absolute;overflow:hidden;">
        <input type=hidden class="lastRowId"  id="lastRowId2" value="">
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Apple" />Apple2
        </div> 
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Blackberry" />Blackberry2
        </div>
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="HTC" />HTC2
        </div>
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Sony Ericson" />Sony Ericson2
        </div>
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Motorola" />Motorola2
        </div>
        <div class="dropDownChkDiv dropDownChkDiv2" style="height:22px;min-width:120px;">
            <input id="chk" type="checkbox" value="Nokia" />Nokia2
        </div>
    </div>    
    <hr><hr><hr><hr><hr><hr><hr><hr>

    <script>


    $(document).ready(function(){
        //로딩시 값 비우기
        $("#lastRowId1").val("");
        $("#lastRowId2").val("");


        //드랍다운 div영역 클릭시 chk되게 처리
        $( ".dropDownChkDiv1" ).on('click',function() {
            alog("dropDownChkDiv1 click()...........................start");
            alog($(this).parent());
            alog($(this).children( 'div input[id="chk"]' ));
            chkObj = $(this).children( 'div input[id="chk"]' )[0];
            if(!chkObj.checked){
                chkObj.checked = true;
            }else{
                chkObj.checked = false;
            }
            //alert($(this).children( 'div input[id="chk"]' )[0]);

            //선택한 체크를 기반으로 셀값 업데이트하기
            makeDropDownValue("1");
        });

        //드랍다운 div영역 클릭시 chk되게 처리
        $( ".dropDownChkDiv2" ).on('click',function() {
            alog("dropDownChkDiv2 click()...........................start");
            alog($(this).parent());
            alog($(this).children( 'div input[id="chk"]' ));
            chkObj = $(this).children( 'div input[id="chk"]' )[0];
            if(!chkObj.checked){
                chkObj.checked = true;
            }else{
                chkObj.checked = false;
            }
            //alert($(this).children( 'div input[id="chk"]' )[0]);

            //선택한 체크를 기반으로 셀값 업데이트하기
            makeDropDownValue("2");
        });


        //열린 드랍다운에서 체크 박스 선택하기.
        $('div[id="dropDownView1"] input[id="chk"]').on('click', function() {
            alog(" dropDownView1 checkbox click().................................start");
            alog($(this).parent().parent());
            //선택한 체크를 기반으로 셀값 업데이트하기
            makeDropDownValue("1");
        });

        //열린 드랍다운에서 체크 박스 선택하기.
        $('div[id="dropDownView2"] input[id="chk"]').on('click', function() {
            alog(" dropDownView2 checkbox click().................................start");

            //선택한 체크를 기반으로 셀값 업데이트하기
            makeDropDownValue("2");
        });


        //쉘영역 클릭시 드랍다운 보여주기
        $(".dropDownList1").on('click',function(e){
            alog("dropDownList1 click().........................start");
            //alert($(e.target).text());
            clickObjId = $(e.target)[0].id;

            toTop = $(e.target)[0].offsetTop + $(e.target)[0].offsetHeight; //클릭 쉘하고 1칸 뛰기
            toLeft =  $(e.target)[0].offsetLeft ;
            toWidth = $(e.target)[0].offsetWidth - 2 ; //border -2

            alog("clickObjId = " + clickObjId);
            alog("lastRowId1 = " + $("#lastRowId1").val());

            //이미 열어놨는데, 다른셀을 선택한 경우
            if($("#lastRowId1").val() != "" && $("#lastRowId1").val() != clickObjId){
                hide(1);
            }

            //첫 진입시
            if($("#lastRowId1").val() == ""){
                $("#lastRowId1").val(clickObjId);

                create(1, toTop,toLeft,toWidth);

                tarr = $(e.target).text().split(",");
                //alog($(e.target)[0].id);

                $('div[id="dropDownView1"] input[id="chk"]').each(function() {
                    //alog(this.value);
                    //alog(_.indexOf(tarr,this.value));
                    alog(this);
                    if(_.indexOf(tarr,this.value) >= 0){
                        this.checked = true;
                    }else{
                        this.checked = false;
                    }

                });

                show(1);
            }else{

                hide(1);
            }

        });





        //쉘영역 클릭시 드랍다운 보여주기
        $(".dropDownList2").on('click',function(e){
            alog("dropDownList2 click().........................start");
            //alert($(e.target).text());
            clickObjId = $(e.target)[0].id;

            toTop = $(e.target)[0].offsetTop + $(e.target)[0].offsetHeight; //클릭 쉘하고 1칸 뛰기
            toLeft =  $(e.target)[0].offsetLeft ;
            toWidth = $(e.target)[0].offsetWidth - 2 ; //border -2

            alog("clickObjId = " + clickObjId);
            alog("lastRowId2 = " + $("#lastRowId2").val());

            //이미 열어놨는데, 다른셀을 선택한 경우
            if($("#lastRowId2").val() != "" && $("#lastRowId2").val() != clickObjId){
                hide(2);
            }

            //첫 진입시
            if($("#lastRowId2").val() == ""){
                $("#lastRowId2").val(clickObjId);

                create(2, toTop,toLeft,toWidth);

                tarr = $(e.target).text().split(",");
                //alog($(e.target)[0].id);

                $('div[id="dropDownView2"] input[id="chk"]').each(function() {
                    //alog(this.value);
                    //alog(_.indexOf(tarr,this.value));
                    alog(this);
                    if(_.indexOf(tarr,this.value) >= 0){
                        this.checked = true;
                    }else{
                        this.checked = false;
                    }

                });

                show(2);
            }else{

                hide(2);
            }

        });



        //[드랍다운 공통] 체크된 값으로 데이터만들기
        function makeDropDownValue(objId){
            txt = "";
            $('div[id="dropDownView' + objId + '"] input[id="chk"]').each(function() {
                if(this.checked){//checked 처리된 항목의 값
                    if(txt !="" )txt = txt + ",";
                    txt = txt + this.value;
                }
            });

            $("#" + $("#lastRowId" + objId).val()).text(txt);
        }

        //[드랍다운 공통] 드랍다운 영역외 클릭시 드랍다운 숨기기
        $(document).bind('click', function(e) {
            alog("click()....................start");
            var $clicked = $(e.target);
            if (! 
                (
                    $clicked.parents().hasClass("dropdownView") || $clicked.parents().hasClass("dropdownCell")
                )
                ) hideAll();
        });


    });



    function create(toObjId, toTop, toLeft, toWidth){
        alog("create()......................start: toObjId=" + toObjId);
        $("#dropDownView" + toObjId).css("top",toTop);
        $("#dropDownView" + toObjId).css("left",toLeft);
        $("#dropDownView" + toObjId).css("width",toWidth);

    }
    
    function show(toObjId) {
        alog("show()......................start: toObjId=" + toObjId);
        $("#dropDownView" + toObjId).css("visibility","");
        $("#dropDownView" + toObjId).css("display","");
    }

    function hide(toObjId) {
        alog("show()......................start: toObjId=" + toObjId);
        $("#lastRowId" + toObjId).val("");
        $("#dropDownView" + toObjId).css("visibility","hidden");
        $("#dropDownView" + toObjId).css("display","none");
    }

    //[드랍다운 공통]
    function hideAll() {
        alog("hide()......................start");
        $(".lastRowId").val("");
        $(".dropDownView").css("visibility","hidden");
        $(".dropDownView").css("display","none");
    }


    function alog(tLog){
        if(typeof console == "object")console.log(tLog);
    }

    </script>
  </body>
</html>