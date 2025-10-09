<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?><!DOCTYPE html>
<html lang="en">
<head>
    <title id='Description'>webix tab</title>
    <meta name="description" content="JavaScript Grid with rich support for Data Filtering, Paging, Editing, Sorting and Grouping" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <link rel="stylesheet" hr ef="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/webix/codebase/webix.min.css" type="text/css" charset="utf-8">

    <link rel="stylesheet" href="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/webix/codebase/skins/mini.min.css" type="text/css" charset="utf-8">

    <script type="text/javascript" src="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/lodash.min.js"></script>

    <script sr c="<?=$CFG["CFG_URL_LIBS_ROOT"]?>lib/webix/codebase/webix.js" type="text/javascript" charset="utf-8"></script>
    <script src="test_webix_trial.js" type="text/javascript" charset="utf-8"></script>
    

    <!--bt 4-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js"></script>

    <link rel="stylesheet" href="/common/common_webix.css" type="text/css" charset="utf-8">
    <script src="/common/common_webix.js"></script>
    <style type="text/css">
    html, body{
        overflow:hidden;
    }
    </style>
</head>
<body style="height:100%;background-color:silver;">

<div id="areaA" style="position: absolute; top:0; bottom:0; left:0; right:0;"></div>
</body>
<script>
webix.ready(function(){
    
    var tabview1 = webix.ui({
        container: "areaA",
        borderless:true, 
        view:"tabview",
        id:"mytabview",
        //autoheight:true,
        tabbar: {
            close:true
        },
        keepViews:true,
        cells:[
            {
                header:"dt1",
                body:{
                    view:"iframe", 
                    id:"frame-body1", 
                    src:"demo_webix.php",
                    autoheight:true
                }
            },
            {                
                header:"dt2",
                body:{
                    view:"iframe", 
                    id:"frame-body2", 
                    src:"demo_webixtab_t1.php",
                    autoheight:true
                }
            
            }
        ],
        multiview:{
            animate:false,
            fitBiggest:true
        }
    });

    $$("mytabview").attachEvent("onViewShow", function(){
        alog("onViewShow()...........................start");
    });
    $$("mytabview").attachEvent("onDestruct", function(){
        alog("onDestruct()...........................start");
    });

    $$("mytabview").attachEvent("onBlur", function(){
        alog("onBlur()...........................start");
    });
    $$("mytabview").attachEvent("onEnter", function(){
        alog("onEnter()...........................start");
    });
    $$("mytabview").attachEvent("onBeforeLoad", function(){
        alog("onBeforeLoad()...........................start");
    });
    $$("mytabview").attachEvent("onFocus", function(){
        alog("onFocus()...........................start");
    });
    $$("mytabview").attachEvent("onAfterLoad", function(){
        alog("onAfterLoad()...........................start");
    });
    $$("mytabview").attachEvent("onBindRequest", function(){
        alog("onBindRequest()...........................start");
    });        
    
    


    $$("mytabview").addView({
        header:"New Tab",
        body:{
            template:"New content "+webix.uid()
        }
    });
    $$("mytabview").addView({
        header:"New Tab",
        body:{
            template:"New content "+webix.uid()
        }
    });
    $$("mytabview").addView({
        header:"New Tab",
        body:{
            template:"New content "+webix.uid()
        }
    });
    //$$("mytabview").refresh()

    webix.event(window, 'resize', function () { tabview1.adjust(); });

});


function alog(t){
    if(console)console.log(t);
}
</script>
</html>
