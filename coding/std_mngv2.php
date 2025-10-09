<?php

//echo $_GET["list_seq"];
require_once __DIR__ . "/../../common/include/incUtil.php";

$REQ = array();
$REQ["DEGREE_SEQ"] = $_GET["DEGREE_SEQ"];
$REQ["SANDBOX_SEQ"] = $_GET["SANDBOX_SEQ"];
?><!DOCTYPE html>
<html>
<head>
    <title>std mng 1</title>

    <meta charset="utf-8" />

    <!-- CodeMirror and its JavaScript mode file -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/codemirror.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/javascript/javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/php/php.min.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/edit/matchbrackets.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/htmlmixed/htmlmixed.min.js"></script>

    <!--CodeMirror css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/codemirror.min.css" />



    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js"></script>

    <script src="./lib/std_mngv2.js?<?=rand(1000000,9999999);?>"></script>

    <!--asesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

    <!--toastr-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>



    <!-- Filepond stylesheet -->
    <link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet">
    <script src="https://unpkg.com/filepond/dist/filepond.js"></script>

    <script src="./lib/std_mng.css?<?=rand(1000000,9999999);?>"></script>
    <style>


        .filepond--credits{
            display:none;
        }

        .filepond--root{
            margin-bottom:0;
        }

    </style>


    <style> 


    html, body {
        height: 100%;
        padding: 0;
        margin: 0;
    }


    body {
        background-color: #F6F6F6;
        box-sizing: border-box;
    }

    .split {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        overflow-y: hidden;
        overflow-x: hidden;
    }
    
    .gutter {
        background-color: black;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    
    .gutter.gutter-horizontal {
        cursor: col-resize;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    }
    
    .gutter.gutter-vertical {
        cursor: row-resize;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    }
    
    .split.split-horizontal,
    .gutter.gutter-horizontal {
        height: 100%;
        float: left;
    }



    .fa-solid:hover{
        color:red
    }


    #firepad-container{
        height: 100%;
    }




    ul {
        list-style-type: none;
        margin-left: 0px ;
        margin-top: 0px ;
        margin-bottom: 0px ;
        padding: 0px;
    }

    ul > li > ul, ul > li > ul > li > ul {
        padding: 0px 0px 0px 24px; 
    }

    ul .ui-selecting { background: #FECA40; }
    ul .ui-selected { background: #F39814; color: white; }

    
    /* mouse over */
    .optionsecoptions {
        background: white;
        cursor: pointer;
    }
    .optionsecoptions:hover { background-color: #bfe5ff; }  
    .optionsecoptions:active { background-color: #2d546f; color: #ffffff; }

    .selected { background-color: #226fa3; color: #ffffff; }
    .selected:hover { background-color: #4d99cc; }

    /* code mirror */
    .CodeMirror {
        font-size: 10t;
    }
    </style>

<script>



    //global var
    var codeMirror;
    var selectFolder = "/"; //트리노드에서 현재 선택된 폴더경로
    var selectPath = ""; //트리노드에서 현재 선택된 풀 경로(파일명포함)
    var pond; //멀티 파일 업로드
    var colSplit;
    var rowSplit;
    var degreeSeq = "<?=$REQ["DEGREE_SEQ"]?>";
    var sandboxSeq = "<?=$REQ["SANDBOX_SEQ"]?>";
    var svrUrl = "sbfilemng/sbfilemngv2.php";
    var isBtnSave = false;

    
    function init() {
        makeSplit();
        init_editor();
        init_log();
        init_btn();

        //파일 목록 읽기
        reload();

        //파일 멀티 업로드
        multiupload();

        //코드미러 비우기
        //codeMirror.setValue("");
    }
    
    function makeSplit(){
        alog(111);
        colSplit = Split(['#file', '#one', '#two'], {
            sizes: [20, 40, 40],
            gutterSize: 8,
            minSize: [0,100,100],
            cursor: 'col-resize',
        });
        rowSplit = Split(['#runview', '#consolelog'], {
            direction: 'vertical',
            sizes: [80, 20],
            gutterSize: 8,
            cursor: 'row-resize'
        });
        alog(222);
    }

    //기존 파일 모두 지우고 master에서 다시 파일 불러오기
    function remakeAll(){
        if(!confirm("작업중이던 기존 파일을 모두지우고 다시 불러오시겠습니까?"))return;

        $.ajax({
                url: svrUrl + "?CMD=init",
                dataType: "json",
                type: "POST",
                data: { "DEGREE_SEQ" : degreeSeq, "SANDBOX_SEQ" : sandboxSeq }
            })
            .done(function( data ) {
                alog(data);
                if(data.RTN_CD != "200"){
                    msgError(data.RTN_MSG, 3);
                }else{
                    msgNotice(data.RTN_MSG, 5);
                    reload();
                    //alert(data.RTN_MSG);
                }
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

    }

    function multiupload(){

        // Get a reference to the file input element
        const inputElement = document.querySelector('input[type="file"]');

        // Create a FilePond instance
        pond = FilePond.create(inputElement);

        multiChangePath(selectFolder);
    }

    function multiChangePath(t){
        pond.setOptions({
            server : {
                url : svrUrl + "?CMD=multiupload&PATH=" + t + "&DEGREE_SEQ=" + degreeSeq + "&SANDBOX_SEQ=" + sandboxSeq,
                process:{
                    method: 'POST',
                    withCredentials: false,
                    headers: {},
                    timeout: 7000,
                    onload: function(res){
                        alog("onload");
                        alog(res);
                    },
                    onerror: function(res){
                        alert("onerror");
                    },
                    ondata: function(res){
                        alog("ondata");
                        alog(res);
                        return res;
                    },
                }
            }
        });
    }


    function init_btn(){
        $( "#btnRun" ).click(function() {
            //$('#runView').attr('src', "about:blank");
            //alert(codeMirror.getValue());

            var rootPath = "/sb";

            path = $("#selectPath").text();
            file = $("#selectFileNm").text();

            runFullPath = rootPath + path + file;

            alog(runFullPath);

            $('#runView').attr('src', runFullPath);
        });

        $( "#btnSave" ).click(function() {
            alog("btnSave()--------------------------start");
            
            if(!isBtnSave){
                alert("현재 상태나 파일은 저장할 수 없습니다.");
                return;
            }
            path = $("#selectPath").text();
            file = $("#selectFileNm").text();
            seq = $("#selectFileNm").attr("seq");

            $.ajax({
                url: svrUrl + "?CMD=update&PATH=" + path  + "&FILENM=" + file,
                dataType: "json",
                type: "POST",
                data: { "DATA": codeMirror.getValue(), "DEGREE_SEQ" : degreeSeq, "SANDBOX_SEQ" : sandboxSeq, "SFILE_SEQ" : seq },
                privatePath: path,
                privateFileNm: file
            })
            .done(function( data ) {
                alog(data);
                if(data.RTN_CD != "200"){
                    //alert(data.RTN_MSG);
                    msgNotice(data.RTN_MSG,2000);
                }else{
                    msgError(data.RTN_MSG,5000);
                }

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        });

        $( "#btnFileView" ).click(function() {
            alog("btnFileView()----------------------start");
            alog("  size = " + colSplit.getSizes()[0]);

            if(colSplit && colSplit.getSizes()[0] < 1){
                colSplit.setSizes([20,40,40]);//첫번째 배열을 minSize로 변경하기
            }else{
                colSplit.collapse(0);//첫번째 배열을 minSize로 변경하기
            }
            

            //colSplit.setSizes([0,50,50]);
        });        
    }

    function init_editor(){
        //// Initialize Firebase.
        alog("init_editor().............................start");
 
      //// Create CodeMirror (with line numbers and the JavaScript mode).
      codeMirror = CodeMirror(document.getElementById('firepad-container'), {
        mode: 'application/javascript', //text/x-php  //application/javascript
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        foldOptions: {
        widget: (from, to) => {
            var count = undefined;

            // Get open / close token
            var startToken = '{', endToken = '}';        
            var prevLine = window.editor_json.getLine(from.line);
            if (prevLine.lastIndexOf('[') > prevLine.lastIndexOf('{')) {
            startToken = '[', endToken = ']';
            }

            // Get json content
            var internal = window.editor_json.getRange(from, to);
            var toParse = startToken + internal + endToken;

            // Get key count
            try {
            var parsed = JSON.parse(toParse);
            count = Object.keys(parsed).length;
            } catch(e) { }        

            return count ? `\u21A4${count}\u21A6` : '\u2194';
        }
        }

      });
      codeMirror.setSize("100%", "100%");
      //codeMirror.setValue("hi2");


    }




    function init_log(){
        alog("init_log().............................start");
        var ws = new WebSocket('ws://localhost:15674/ws');
        var client = Stomp.over(ws);

        var on_connect = function() {
            msgNotice('Foooter-Log WebSocket connected',2);
            
            client.subscribe("/exchange/logs", on_message);
            client.send("/exchange/logs",{"content-type":"text/plain"}, "hi");

        };
        var on_error =  function(x) {
            msgError('init_log().......error',5);
            alog(x);
        };

        var on_message = function(message) {
            // called when the client receives a STOMP message from the server
            alog(message)
            if (message.body) {
                alog("got message with body : " + message.body)
            } else {
                alog("got empty message");
            }
            //$("#logs").append( message.body + "\n" );
            //alert(typeof  message.body);
            if(typeof message.body == "string" && message.body.indexOf("{") >= 0  && message.body.indexOf("}") >= 0  ){
                var jsonObj = JSON.parse(message.body);
                //alert(typeof jsonObj.payload.log);
                if(typeof jsonObj.payload.log == "string" && jsonObj.payload.log.indexOf("{") >= 0  && jsonObj.payload.log.indexOf("}") >= 0 ){
                    var logObj = JSON.parse(jsonObj.payload.log);

                    $("#logs").append( logObj.message + "\n" );
                }else{
                    $("#logs").append( jsonObj.payload.log + "\n" );
                }

            }else{
                $("#logs").append( message.body + "\n" );
            }


            //$("#logs").scrollTop = $("#logs").scrollHeight;

            logTa = document.getElementById("logs")
            logTa.scrollTop = logTa.scrollHeight;

        };

        client.connect('test', '1234', on_connect, on_error, '/');
    }
    
    function alog(a){
        if(console)console.log(a);
    }


    function msgNotice(tMsg,tSecond){
        alog("(common) msgNotice : " + tMsg + ", tSecond=" + tSecond);
        
        //dhtmlx.message({
        //	type: "Notice",
        //	text: tMsg,
        //	expire: tSecond * 1000
        //});

        toastr.info(tMsg,null,{timeOut: tSecond * 1000});
    }
    function msgError(tMsg,tSecond){
        alog("(common) msgError : " + tMsg + ", tSecond=" + tSecond);

        //dhtmlx.message({
        //	type: "Error",
        //	text: tMsg,
        //	expire: tSecond * 1000
        //});
        toastr.error(tMsg,null,{timeOut: tSecond * 1000});
    }

    </script>

</head>
<body onload="init();">
    <div class="split" style="height:100%">
        <div id="file" class="split split-horizontal" st-yle="background-color:yellow;">
            file viewer
            <i class='fa-solid fa-arrow-rotate-right' onclick='reload(event,this);'></i>
            <i class='fa-solid fa-file-circle-plus' onclick='addFile(event,this);'></i> 
            <i class='fa-solid fa-folder-plus' onclick='addFolder(event,this);'></i> 
            <i class='fa-solid fa-trash-can' onclick='remove(event,this);'></i> 
            <i class='fa-solid fa-file-pen' onclick='rename(event,this);'></i> 
            <i class='fa-solid fa-bolt' onclick='remakeAll(event,this);'></i> 
            <ul id="fileRoot"></ul>

            <input type="file" class="filepond">

        </div>

        <div id="one" class="split split-horizontal" st-yle="background-color:yellow;">
            <div id="topnavi" style="height:23px;background-color:silver;width:100%;">
            <i class='fa-solid fa-folder-tree' id="btnFileView" ></i> 
            <span id="selectPath"></span><span id="selectFileNm"></span>
            
            <div style="float:right">
                <i class='fa-solid fa-floppy-disk' id="btnSave" ></i> <i class='fa-solid fa-play' id="btnRun" ></i> 
            </div>
            </div>
            <div id="editor" style="background-color:green;height: calc(100% - 23px);">
                <div id="firepad-container" ></div>
            </div>
        </div>
        <div id="two"  class="split split-horizontal" st-yle="background-color:blue;">
            <div id="runview" class="split content" style="background-color:silver;"><iframe id="runView"
                style="border:0px;position:relative;border:none;height:100%;width:100%;border-width:0px;border-color:green;"
                frameborder="0"
                src="std_empty_runview.php"  
                ></iframe></div>
            <div id="consolelog" class="split content" 
            style="background-color:black;"><textarea id="logs" readonly
             style="border: none;width:100%;height:100%;background-color:black;color:silver;font-size:8pt;margin:0;padding:0;"
            ></textarea></div>
        </div>
    </div>
    
</body>
</html>