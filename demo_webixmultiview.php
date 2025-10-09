<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?><!DOCTYPE html>
<html lang="en">
<head>
    <title id='Description'>webix multiview</title>
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

    var tabbar = {
        view:"tabbar", multiview:true, keepViews:true, type:"bottom", options: [
            { value: 'List', id: 'iframe1'},
            { value: 'Form', id: 'formView'},
            { value: 'About', id: 'aboutView'}
        ]
    };
    var data = {
        cells:[
            {
                view:"iframe", 
                id:"iframe1", 
                src:"demo_webix.php"
            },
            {
                id:"formView",
                template:"Place for the form control"
            },
            {
                id:"aboutView",
                template:"About the app"
            }
        ]
    };

    webix.ui({
        container: "areaA",
        keepViews:true,
        rows:[
            data,
            tabbar
        ]
    });


});


function alog(t){
    if(console)console.log(t);
}
</script>
</html>
