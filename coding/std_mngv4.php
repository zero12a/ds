<?php

require_once "/data/www/lib/php/vendor/autoload.php";



//////////////////////////////////////////////////////////////////////
//환경 변수
//////////////////////////////////////////////////////////////////////
$sandboxRoot = "/data/www/sb";
$readExt = array("txt", "php", "css", "js", "java", "json", "java", "vue");
$stompWebSocketPort = "15674"; //for javascript server port

$cmd            = isset($_POST["CMD"])? $_POST["CMD"] : $_GET["CMD"];
$path           = isset($_POST["PATH"])? $_POST["PATH"] : $_GET["PATH"];
$oldPath        = isset($_POST["OLDPATH"])? $_POST["OLDPATH"] : $_GET["OLDPATH"];
$fileNm         = isset($_POST["FILENM"])? $_POST["FILENM"] : $_GET["FILENM"];
$oldFileNm      = isset($_POST["OLDFILENM"])? $_POST["OLDFILENM"] : $_GET["OLDFILENM"];


//공통 함수
function rrmdir($src) {
    //alog($src . "\n");
    $dir = opendir($src);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            $full = $src . '/' . $file;
            if ( is_dir($full) ) {
                rrmdir($full);
            }
            else {
                unlink($full);
            }
        }
    }
    closedir($dir);
    rmdir($src);
}

function JsonMsg($rtn_cd, $err_cd,  $rtn_msg)
{
	$json_array = array( "RTN_CD"=>$rtn_cd, "ERR_CD"=>$err_cd, "RTN_MSG" => $rtn_msg);
	
	echo json_encode($json_array);
	exit;
}




if($path == "")$path = "/";
if(substr($path,-1,1) != "/") $path .=  "/";

$fullPath       = $sandboxRoot . $path . $fileNm;
if($oldPath =="")$oldPath = $path;
if($oldFileNm =="")$oldFileNm = $fileNm;
$oldFullPath    = $sandboxRoot . $oldPath . $oldFileNm;
$data           = isset($_POST["DATA"])? $_POST["DATA"] : $_GET["DATA"];
$oldData        = isset($_POST["OLDDATA"])? $_POST["OLDDATA"] : $_GET["OLDDATA"];



//cmd 
// folder : mkdir, rmdir, mvdir
// file : create, delete, rename, update, move, list, getcode
// init(load from fileStore), sync(sync to fileStore)
// list : full json file/folderlist
if($cmd == "empty"){
    ?>
    <html><body>empty viewer</body></html>
    <?php
    exit;
}else if($cmd == "list"){


    //db에서 가져오기
    $REQ["PATH"] = $path;

    //echo "scandir = " . $sandboxRoot . $path . "<br>";
    $fileArray = scandir($sandboxRoot . $path); //배열 0=. 1=.. 2=여기부터 정상
    //print_r($fileArray);
    //exit;
    //echo "<pre>" . var_dump($fileArray) . "</pre>";
    
    $rtnArray = array();
    for($i=2;$i<count($fileArray);$i++){
        //echo "<br>"  . $sandboxRoot . $path  . $fileArray[$i];
        if(is_dir( $sandboxRoot . $path  . $fileArray[$i] )){
            $rtnArray[$i-2]["nm"] = $fileArray[$i];
            $rtnArray[$i-2]["dir"] = "Y";
            //echo " Y";
        }else{
            $rtnArray[$i-2]["nm"] = $fileArray[$i];
            $rtnArray[$i-2]["dir"] = "N";
            //echo " N";
        }
    }

    array_multisort(array_column($rtnArray, 'dir'), SORT_DESC, $rtnArray);//폴더 먼저 나오고, 그다음에 파일 나오게 하기

    $json_pretty = json_encode($rtnArray, JSON_PRETTY_PRINT);
    echo $json_pretty;
    //echo "<pre>".$json_pretty."<pre/>";

    exit;
}else if($cmd == "mkdir"){
    if($fileNm == ""){
        //echo "폴더 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","폴더 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "폴더 경로가 입력되지 않았습니다.";
        JsonMsg("500","520","폴더 경로가 입력되지 않았습니다.");
    }else{
        if(is_dir($fullPath)){
            //echo "이미 동일이름의 폴더가 존재합니다.";
            JsonMsg("500","530","이미 동일이름의 폴더가 존재합니다.");
        }else if(file_exists($fullPath)){
            //echo "신규 변경할 이름이 이미 존재합니다.";
            JsonMsg("500","540","신규폴더와 동일한 파일이 존재하여 폴더 생성에 실패했습니다.");
        }else if(!mkdir($fullPath, 0777)) {
            //echo "폴더 생성에 실패했습니다.";
            JsonMsg("500","550","폴더 생성에 실패했습니다.");
        }else{

            //DB에 파일 처리
            $REQ["PATH"] = $path;
            $REQ["NM"] = $fileNm;

                        
            //echo "폴더 생성에 성공했습니다.";
            JsonMsg("200","200", $fileNm. " 폴더 생성 성공");
        }
    }
    exit;
}else if($cmd == "mvdir"){
    if($fileNm == ""){
        //echo "이동할 폴더 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","이동할 폴더 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "이동할 폴더 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","이동할 폴더 경로가 입력되지 않았습니다.");
    }else if($oldFileNm == ""){
        //echo "이동시킬 폴더 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","이동시킬 폴더 이름이 입력되지 않았습니다.");
    }else if($oldPath == ""){
        //echo "이동시킬 폴더 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","이동시킬 폴더 경로가 입력되지 않았습니다.");
    }else{
        if(!is_dir($oldFullPath)){
            //echo "이동시킬 기존 폴더가 존재하지 않습니다.($oldFullPath)";
            JsonMsg("500","510","이동시킬 기존 폴더가 존재하지 않습니다.($oldFullPath)");
        }else if($oldFullPath == $fullPath){
            //이전 폴더와 신규폴더가 동일한 경우 별도 처리 없이 종료
            JsonMsg("200","200","기존 폴더명과 신규 폴더명이 동일하지 처리하지 않았습니다.");
        }else if(is_dir($fullPath)){
            //echo "이미할 경로에 동일이름의 폴더가 존재합니다.";
            JsonMsg("500","510","이미할 경로에 동일이름의 폴더가 존재합니다.");
        }else if(!rename($oldFullPath, $fullPath)) {
            //echo "폴더 이동에 실패했습니다.";
            JsonMsg("500","510","폴더 이동에 실패했습니다.");
        }else{

            //echo "폴더 이동에 성공했습니다.";
            JsonMsg("200","200","폴더 이동에 성공했습니다.");
        }
    }
    exit;
}else if($cmd == "rmdir"){
    if($fileNm == ""){
        //echo "삭제할 폴더 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","삭제할 폴더 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "삭제할 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","삭제할 경로가 입력되지 않았습니다.");
    }else{
        if(!is_dir($fullPath)){
            //echo "삭제할 경로에 해당 폴더가 존재하지 않습니다.($fullPath)";

            JsonMsg("200","510","삭제할 경로에 해당 폴더가 존재하지 않아 DB에서 삭제처리했습니다.($fullPath)");
        }else{
            rrmdir($fullPath);//하위경로까지 일괄 삭제
            //echo "폴더를 일괄 삭제했습니다.";
            
            JsonMsg("200","510","폴더를 일괄 삭제했습니다.");
        }
    }
    exit;
}else if($cmd == "create"){
    if($fileNm == ""){
        //echo "파일 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","파일 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "파일 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","파일 경로가 입력되지 않았습니다.");
    }else if(is_dir($fullPath)){
        //echo "같은 이름의 폴더가 존재($fullPath)";
        JsonMsg("500","510","신규파일과 같은 이름의 폴더가 존재하여 파일을 생성하지 않았습니다.($fullPath)");
    }else if(file_exists($fullPath)){
        //echo "같은 이름의 파일이 존재($fullPath)";
        JsonMsg("500","510","같은 이름의 파일이 존재하여 파일을 생성하지 않았습니다.($fullPath)");
    }else{
        $fh = fopen($fullPath, "w");
        if(!$fh){
            //echo "해당 폴더에 파일쓰기 권한이 없습니다";
            fclose($fh);
            alog("[create]해당 폴더에 파일쓰기 권한이 없습니다.[" . $fullPath . "]");
            JsonMsg("500","510","해당 폴더에 파일쓰기 권한이 없습니다.[" . $fullPath . "]");
        }else{
            fwrite($fh, $data);
            fclose($fh);

            //echo "파일 생성 성공했습니다.";
            JsonMsg("200","200",$lastSfileSeq);
        }
    }
    exit;
}else if($cmd == "multiupload"){

    $arrayFiles = array();

    $tmpFiles = $_FILES['filepond'];
    if(is_assoc($tmpFiles)){
        //파일이 1개 일때 해쉬맵 배열
        $arrayFiles[0] = $tmpFiles;
    }else{
        //파일이 여러개 일때 배열, 그리고 해쉬맵
        $arrayFiles = $tmpFiles;
    }

    //var_dump($arrayFiles);

    for($i=0;$i<count($arrayFiles); $i++){

        $tmpFullPath = $arrayFiles[$i]["tmp_name"];
        $toFullPath = $fullPath . $arrayFiles[$i]["name"];

        //cho "\n tmpFullPath = " . $tmpFullPath;
        //echo "\n toFullPath = " . $toFullPath;


        if(!move_uploaded_file($tmpFullPath, $toFullPath)){
            JsonMsg("500","510","파일 저장에 실패했습니다.");
        }else{

            $fh = fopen($toFullPath, "r");
            if(!$fh){
                //echo "해당 폴더에 파일읽기 권한이 없습니다";
                fclose($fh);
                JsonMsg("500","540","해당 폴더에 파일읽기 권한이 없습니다");
            }else{
               $size = filesize($toFullPath);
                if($size != 0){
                    $data = fread($fh, filesize($toFullPath) );
                }else{
                    $data = "";
                }

                fclose($fh);                
            }

        }
    }
    if(count($arrayFiles) > 0){
        JsonMsg("200","200","파일 저장에 성공했습니다.");
    }else{
        JsonMsg("200","200","파일이 없어 저장내역이 없습니다.");
    }
    exit;

}else if($cmd == "update"){
    if($fileNm == ""){
        //echo "파일 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","파일 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "파일 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","파일 경로가 입력되지 않았습니다.");
    }else if(!file_exists($fullPath)){
        //echo "업데이트할 파일이 존재하지 않습니다.";
        JsonMsg("500","510","업데이트할 파일이 존재하지 않습니다.");
    }else{
        $fh = fopen($fullPath, "w");
        if(!$fh){
            //echo "해당 폴더에 파일쓰기 권한이 없습니다";
            fclose($fh);
            JsonMsg("500","510","[update]해당 폴더에 파일쓰기 권한이 없습니다");
        }else{
            fwrite($fh, $data);
            fclose($fh);

            //echo "파일 업데이트 성공했습니다.";
            JsonMsg("200","200","파일 업데이트 성공했습니다.(" . $fullPath . ")");
        }
    }
    exit;
}else if($cmd == "getcode"){

    $fileInfo = pathinfo($fullPath);
    $fileExt = $fileInfo['extension'];

    if($fileNm == ""){
        //echo "파일 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","파일 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "파일 경로가 입력되지 않았습니다.";
        JsonMsg("500","520","파일 경로가 입력되지 않았습니다.");
    }else if(!file_exists($fullPath)){
        //echo "조회할 파일이 존재하지 않습니다.";
        JsonMsg("500","530","조회할 파일이 존재하지 않습니다.");
    }else if(!in_array(strtolower($fileExt),$readExt) ){ 
        //echo "읽기 허용 확장자 리스트 목록이 아닙니다.";
        JsonMsg("200","220", $fileExt . "는 읽기 허용된 확장자가 아닙니다.");
    }else{
        $fh = fopen($fullPath, "r");
        if(!$fh){
            //echo "해당 폴더에 파일읽기 권한이 없습니다";
            fclose($fh);
            JsonMsg("500","540","해당 폴더에 파일읽기 권한이 없습니다");
        }else{

            $size = filesize($fullPath);
            if($size != 0){
                $data = fread($fh, filesize($fullPath) );
            }else{
                $data = "";
            }
     
            fclose($fh);
            JsonMsg("200","200",$data);
        }
    }
    exit;
}else if($cmd == "delete"){
    if(!file_exists($fullPath)){
        //echo "삭제할 파일이 존재하지 않습니다.";

        JsonMsg("200","510","삭제할 파일이 존재하지 않아, DB에서 삭제처리했습니다.($fullPath)");
    }else{
        if(!unlink($fullPath)){
            //echo "해당 파일을 삭제에 실패했습니다.";
            JsonMsg("500","520","해당 파일을 삭제에 실패했습니다.");
        }else{

            //echo "파일 삭제 성공했습니다.";
            JsonMsg("200","200","파일 삭제 성공했습니다.");
        }
    }
    exit;
}else if($cmd == "rename"){
    if($fileNm == ""){
        //echo "신규 파일 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","신규 파일 이름이 입력되지 않았습니다.");
    }else if($oldFileNm == ""){
        //echo "기존 파일 이름이 입력되지 않았습니다.($oldFileNm)";
        JsonMsg("500","520","기존 파일 이름이 입력되지 않았습니다.($oldFileNm)");
    }else if($path == ""){
        //echo "파일 경로가 입력되지 않았습니다.";
        JsonMsg("500","530","파일 경로가 입력되지 않았습니다.");
    }else if(!file_exists($oldFullPath)){
        //echo "이름 변경할 기존 파일이 존재하지 않습니다.($oldFullPath)";
        JsonMsg("500","540","이름 변경할 기존 파일이 존재하지 않습니다.($oldFullPath)");
    }else if($oldFullPath == $fullPath){
        //기존 파일 이름과 신규 파일이 동일한 경우 rename 처리 없이 리턴
        JsonMsg("200","200", "이전 파일이름과 신규 파일이름이 동일합니다.");
    }else if(file_exists($fullPath)){
        //echo "신규 변경할 이름이 이미 존재합니다.";
        JsonMsg("500","550","신규 변경할 이름이 이미 존재합니다.");
    }else{
        if(!rename($oldFullPath, $fullPath)){
            //echo "해당 파일을 이름변경에 실패했습니다.";
            JsonMsg("500","560","해당 파일을 이름변경에 실패했습니다.");
        }else{
            //echo "파일 이름변경을 성공했습니다.";
            JsonMsg("200","200", "파일 이름변경을 성공했습니다.");
        }
    }
    exit;
}else if($cmd == "move"){
    if(!file_exists($oldFullPath)){
        echo "이동할 기존 파일이 존재하지 않습니다.";
    }else if(file_exists($fullPath)){
        echo "이동할 경로에 동일 파일 이름이 이미 존재합니다.";
    }else{
        if(!rename($oldFullPath, $fullPath)){
            echo "해당 파일을 이동에 실패했습니다.";
        }else{
            echo "파일 이동에 성공했습니다.";
        }
    }
    exit;
}

//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
?>
<!DOCTYPE html>
<html>
<head>
    <title>php codemirror</title>

    <meta charset="utf-8" />

    <!-- CodeMirror and its JavaScript mode file -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/codemirror.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/edit/matchbrackets.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/brace-fold.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/foldcode.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/foldgutter.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/xml-fold.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/indent-fold.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/addon/fold/markdown-fold.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/javascript/javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/php/php.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/htmlmixed/htmlmixed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/clike/clike.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/xml/xml.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/css/css.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.18/mode/markdown/markdown.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>


	<script src="https://cdn.jsdelivr.net/npm/vue@3.5.12/dist/vue.global.min.js"></script>
		
	<script src="https://cdn.jsdelivr.net/npm/vuetify@3.7.4/dist/vuetify.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/axios@1.7.7/dist/axios.min.js"></script>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vuetify@3.7.4/dist/vuetify.min.css">
		
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css"><!--이 스타일 쉬트 추가해야, vuetify 라디오/체크박스 디자인이 올바르게 표시됨-->




    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/split.js/1.6.0/split.min.js"></script>

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
        height: 30px;
        padding-top: 8px;
    }
    .optionsecoptions:hover { background-color: #bfe5ff; }  
    .optionsecoptions:active { background-color: #2d546f; color: #ffffff; }

    .selected { background-color: #226fa3; color: #ffffff; }
    .selected:hover { background-color: #4d99cc; }

    /* code mirror */
    .CodeMirror {
        font-size: 10px;
    }
    </style>

<script>
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################


    //global var
    var codeMirror;
    var selectFolder = "/"; //트리노드에서 현재 선택된 폴더경로
    var selectPath = ""; //트리노드에서 현재 선택된 풀 경로(파일명포함)
    var pond; //멀티 파일 업로드
    var colSplit;
    var rowSplit;
    var degreeSeq = "";
    var sandboxSeq = "";
    var svrUrl = "";//자기자신이면 비워두기
    var isBtnSave = false;
    var codeMirrorSqlFontSize = 10;

    var app = null; //vue3 글로벌선언
    
    function init() {
        makeSplit();
        init_editor();
        init_log();
        init_btn();

        init_key();

        //파일 목록 읽기
        reload();

        //파일 멀티 업로드
        multiupload();

        //tab
        initVuetify3();;

        //코드미러 비우기
        //codeMirror.setValue("");
    }
    function init_key(){
        $(document).bind("keyup", function(e){
            if(e.ctrlKey && e.which == 83){
                alog("ctrl+s is save");
                save();
            }else{
                alog("etc key event");
            }
        });
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
        $( "#btnPlus" ).click(function() {
            changeCodemirrorFontSize("+");
        });

        $( "#btnMinus" ).click(function() {
            changeCodemirrorFontSize("-");
        });
        

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

        $( "#btnRunPop" ).click(function() {
            //$('#runView').attr('src', "about:blank");
            //alert(codeMirror.getValue());

            var rootPath = "/sb";

            path = $("#selectPath").text();
            file = $("#selectFileNm").text();

            runFullPath = rootPath + path + file;

            alog(runFullPath);

            window.open(runFullPath);
        });

        $( "#btnSave" ).click(function(){
            save();
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

    function save(){
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
            if(data.RTN_CD == "200"){
                //alert(data.RTN_MSG);
                msgNotice(data.RTN_MSG,2);
            }else{
                msgError(data.RTN_MSG,5);
            }

        })
        .fail(function(xhr, status, errorThrown) { 
            alert(errorThrown);
        });

    }
    

    function init_editor(){
        //// Initialize Firebase.
        alog("init_editor().............................start");
 
      return;
      //// Create CodeMirror (with line numbers and the JavaScript mode).
      codeMirror = CodeMirror(document.getElementById('firepad-container'), {
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        mode: "application/x-httpd-php",
        indentUnit: 4,
        indentWithTabs: true,
        extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
      });
      codeMirror.setSize("100%", "100%");
      //codeMirror.setValue("hi2");


    }
    
    function dateFormat(date) {
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            month = month >= 10 ? month : '0' + month;
            day = day >= 10 ? day : '0' + day;
            hour = hour >= 10 ? hour : '0' + hour;
            minute = minute >= 10 ? minute : '0' + minute;
            second = second >= 10 ? second : '0' + second;

            //return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            return hour + ':' + minute + ':' + second;
    }

    function init_log(){
        alog("init_log().............................start");
        //alert(window.location.hostname);
        var ws = new WebSocket('ws://' + window.location.hostname + ':<?=$stompWebSocketPort?>/ws');
        var client = Stomp.over(ws);

        var on_connect = function() {
            msgNotice('Foooter-Log WebSocket connected',2);
            
            client.subscribe("/exchange/logs", on_message);
            client.send("/exchange/logs",{"content-type":"text/plain"}, navigator.userAgent.toString());

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
            var date_format_str = dateFormat(new Date());
            alog(date_format_str);
            //2015-03-31 13:35:00
        
            if(typeof message.body == "string" && message.body.indexOf("{") >= 0  && message.body.indexOf("}") >= 0  ){
                var jsonObj = JSON.parse(message.body);
                //alert(typeof jsonObj.payload.log);


                
                if(typeof jsonObj.payload.log == "string" && jsonObj.payload.log.indexOf("{") >= 0  && jsonObj.payload.log.indexOf("}") >= 0 ){
                    var logObj = JSON.parse(jsonObj.payload.log);

                    $("#logs").append( date_format_str + " " + logObj.message + "\n" );
                }else{
                    $("#logs").append( date_format_str + " " +  jsonObj.payload.log + "\n" );
                }

            }else{
                $("#logs").append( date_format_str + " " +  message.body + "\n" );
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

//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################

    </script>

</head>
<body onload="init();" id="app"  >
    <component-to-re-render :key="componentKey" />
    <div class="split" style="height:100%">
        <div id="file" class="split split-horizontal">
            

            <div style="text-align:right;width:100%;padding-top:2px;background-color:gray;height:30px;">
                <i class='fa-solid fa-arrow-rotate-right' onclick='reload(event,this);' style="padding:5px"></i>
                <i class='fa-solid fa-file-circle-plus' onclick='addFile(event,this);' style="padding:5px"></i> 
                <i class='fa-solid fa-folder-plus' onclick='addFolder(event,this);' style="padding:5px"></i> 
                <i class='fa-solid fa-trash-can' onclick='remove(event,this);' style="padding:5px"></i> 
                <i class='fa-solid fa-file-pen' onclick='rename(event,this);' style='padding:5px 10px 5px 5px;'></i> 
            </div>
            <div style="height:25px;padding: 5px 0px 0px 3px;">
                <?=$sandboxRoot?>
            </div>
            <ul id="fileRoot"></ul>

            <input type="file" class="filepond">

        </div>

        <div id="one" class="split split-horizontal" st-yle="background-color:yellow;">
            <div class="fill-height">
                <v-card class="fill-height">
                    <v-tabs
                        dark
                        background-color="light-blue darken-2"
                        show-arrows
                        v-on:change="changeTabs"

                        next-icon="mdi-arrow-right-bold-box-outline"
                        prev-icon="mdi-arrow-left-bold-box-outline"
                    >
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                        <v-tabs
                        v-model="activeTab"
                        bg-color="indigo"
                        next-icon="mdi-arrow-right-bold-box-outline"
                        prev-icon="mdi-arrow-left-bold-box-outline"
                        show-arrows
                        >
                        <v-tab v-for="i in myTab" :key="i">

                        {{i.nm}}&nbsp;<v-btn density="compact" @click="closeTab(i.fullpath)" icon="mdi-close"></v-btn>

                        </v-tab>
                        </v-tabs>
                    </v-tabs>

                    <v-tabs-window v-model="activeTab" class="fill-height">
                    <v-tabs-window-item v-for="n in myTab" :key="n.fullpath" :value="n.nm"  class="fill-height">
                        <iframe frameborder="0" marginwidth="0" marginheight="0" 
                        style="border:0px;position:relative;border:none;height:100%;width:100%;border-width:0px;border-color:silver;"
                        scrolling="yes" frameborder="1" id="iframe-{{n.id}}" src="{{n.fullpath}}"></iframe>
                    </v-tabs-window-item>
                    </v-tabs-window>
                </v-card>
            </div>
        </div>
        <div id="two"  class="split split-horizontal" st-yle="background-color:blue;">
            <div id="runview" class="split content" style="background-color:silver;"><iframe id="runView"
                style="border:0px;position:relative;border:none;height:100%;width:100%;border-width:0px;border-color:green;"
                frameborder="0"
                src="?CMD=empty"  
                ></iframe></div>
            <div id="consolelog" class="split content" 
            style="background-color:black;"><textarea id="logs" readonly
             style="border: none;width:100%;height:100%;background-color:black;color:silver;font-size:8pt;margin:0;padding:0;"
            ></textarea></div>
        </div>
    </div>
    
</body>

<script language="javascript">

//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################
//######################################################################################################################################

        function rename(){
            alog("rename().....................start");


            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            var type; //folder, file
            var CMD;
            var nm;
            alog(11);
            if(selectDiv == null){
                alert("이름을 변결할 파일이나 폴더를 선택해 주세요.");
                return;
            }

            //기존 경로
            path = $(selectDiv).attr("path");

            seq =  $(selectDiv).attr("seq");

            //기존 이름
            nm = $(selectDiv).text();

            //기존 타입
            type = $(selectDiv).attr("type");

            //li태그를 편지모드로 변경
            liObj = $(selectDiv).parent()[0];

            if(type == "folder"){
                $(selectDiv).replaceWith("<div class='optionsecoptions'><i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type='text' onkeyup='renameFolderEnd(event,this,\"" + path + "\", " + seq + ");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'></div>");

                //liObj.innerHTML = ;
            }else{
                liObj.innerHTML = "<i class='fa-solid fa-file' style='margin-left:14px;margin-right:5px;'></i><input type='text' onkeyup='renameFileEnd(event,this,\"" + path + "\"," + seq + ");' oldvalue='" + nm + "' value='" + nm + "' style='width: calc(100% - 40px);'>";
            }

        }

        function renameFileEnd(e, t,path, seq){
            alog("renameFileEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=rename&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue"), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq},
                privatePath: path,
                privateNm: $(t).val(),
                privateSeq: seq,
                privateInput: t
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateInput).parent());
                    //$(this.privateSelectDiv).parent()[0].remove();

                    $(this.privateInput).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateNm, this.privateSeq);

                    msgNotice(data.RTN_MSG,3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        }

        function renameFolderEnd(e, t,path, seq){
            alog("renameFolderEnd().....................start");

            if(e.keyCode != 13)return;

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=mvdir&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: { "FILENM" : $(t).val() , "OLDFILENM" : $(t).attr("oldvalue"), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq},
                privatePath: path,
                privateNm: $(t).val(),
                privateSeq: seq,
                privateInput: t
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateInput).parent());
                    //$(this.privateSelectDiv).parent()[0].remove();

                    //하위 객체가 영향을 받기 때문에 div객체만 교체 필요
                    divObj = $(this.privateInput).parent()[0];
                    $(divObj).replaceWith(mkFoldTag(false, this.privatePath, this.privateNm, this.privateSeq));

                    msgNotice(data.RTN_MSG, 3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });

        }

        function remove(){
            alog("remove().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            var type; //folder, file
            var CMD;
            var nm;
            alog(11);
            if(selectDiv == null){
                alert("삭제할 파일이나 폴더를 선택해 주세요.");
                return;
            }else if(!confirm("정말로 삭제하시겠습니까?")){
                return;
            }

            path = $(selectDiv).attr("path"); //쌍따움표 붙어서 넘어옴
            seq = $(selectDiv).attr("seq"); //쌍따움표 붙어서 넘어옴
            //path = path.substring(1,path.length-1);
            //alert(path);
            
            type = $(selectDiv).attr("type"); //쌍따움표 붙어서 넘어옴
            nm = $(selectDiv).text();
            //alert(nm);
            //return;
            if(type == "folder"){
                CMD = "rmdir";
            }else{
                CMD = "delete";
            }

            //경로에서 \\를 \로변경
            path = path.replace(/\\\\/g,"\\");
            nm = nm.replace(/\\\\/g,"\\");

            //alert("enter");
            $.ajax({
                url: svrUrl + "?CMD=" + CMD ,
                dataType: "json",
                type: "POST",
                data: { "PATH" : path, "FILENM" : nm, "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq , "SFILE_SEQ" : seq },
                privatePath: path,
                privateFileNm: nm,
                privateSelectDiv: selectDiv
            })
            .done(function( data ) {
                if(data.RTN_CD == "200"){
                    //input오브젝트를 text를 변경하기
                    //alog($(t).parent()[0]);
                    alog(data.RTN_MSG);
                    //$(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm);

                    //LI 오브젝트를 삭제해야 함.
                    alog($(this.privateSelectDiv).parent());
                    $(this.privateSelectDiv).parent()[0].remove();

                    msgNotice(this.privateFileNm + "파일을 삭제완료하였습니다.(Success to remove " + this.privateFileNm + ")", 3);
                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                }


                //성공하면 해당 오브젝트 div로 변경하기
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });


        }
        function addFolder(){
            alog("addFolder().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            alog(11);
            if(selectDiv != null){
                if($(selectDiv).attr("type") == "folder"){
                    //폴더를 선택하고 폴더를 추가하고자 하는 경우, 선택된 폴더 하위에 폴더를 추가
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                    //ul 보이게 처리
                    ul.show();
                }else{
                    //파일 선택하고 폴더를 추가하고자 하는 경우, 현재 열린 폴더에다가 폴더를 추가
                    path = $(selectDiv).attr("path") + $(selectDiv).text(); //쌍따움표 붙어서 넘어옴

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                    
                    //alert("폴더가 아닌데 폴더를 추가 가능해?");
                    //return;
                }


            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);


            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            //nm2 = nm.replace(/\\/g,"\\\\");
            
            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li style='height:38px;'> <i class='fa-solid fa-folder' style='padding-top:10px;height:20px;color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type=\"text\" onkeyup=\"addFolderEnd(event,this,'" + path2 + "');\" id='addFileNm' value='' style='width:calc(100% - 40px);'></li>");        
            //ul.append("<li> <i class='fa-solid fa-folder' style='color:#D7C908;margin-left:12px;margin-right:3px;'></i><input type='text' onkeyup='addFolderEnd(event,this,\"" + path + "\");' id='addFileNm' value='' style='width:calc(100% - 40px);'></li>");        
            alog(22);
        }

        function addFolderEnd(e, t, path){
            alog("addFolderEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: svrUrl + "?CMD=mkdir&PATH=" + path,
                    dataType: "json",
                    type: "POST",
                    data: { "FILENM" : $(t).val(), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq  },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFoldTag(false, this.privatePath, this.privateFileNm, data.RTN_MSG);
        
                        //alert(data);
                        msgNotice("폴더 생성을 성공했습니다.(Success to make folder)", 3);
                    }else{
                        alert(data.RTN_MSG + "(" + data.RTN_CD + ")");
                    }

                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    msgError(errorThrown, 5);
                });
            }
        }


        function addFile(){
            alog("addFile().....................start");
            //선택한 폴더가 있으면 그 하위 디렉토리에 addInput 추가
            var selectDiv = document.querySelector(".selected");
            var ul;
            var path;
            alog(11);
            if(selectDiv != null){
                if($(selectDiv).attr("type") == "folder"){
                    path = $(selectDiv).attr("path") + $(selectDiv).text();

                    var liObj = $(selectDiv).parent()[0];
                    
                    alog($(selectDiv).parent().children("ul"));
                    ul = $($(selectDiv).parent().children("ul")[0]);

                    //선택된 폴더가 펼쳐지지 않은 경우 펼쳐지게 처리 하기
                    var children = selectDiv.childNodes;
                    if(children.length >= 1){
                        //첫 객체는 div
                        if (children[0].nodeName == "I" && $(children[0]).hasClass("fa-caret-right")) {
                            //폴더가 닫혀 있으면 open으로 변경 
                            if ($(children[0]).hasClass("fa-rotate-90")) {
                                $(children[0]).removeClass("fa-rotate-90");
                            } else {
                                $(children[0]).addClass("fa-rotate-90");
                            }
                        }
                    }

                }else{
                    path = $(selectDiv).attr("path");

                    alog($(selectDiv).parent().parent());
                    ul = $($(selectDiv).parent().parent()[0]);
                }

                //ul 보이게 하기
                ul.show();
            }else{
                ul = $("#fileRoot");
                path = "/";
            }
            alog(path);

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            //nm2 = nm.replace(/\\/g,"\\\\");
            
            //선택한 폴더가 없으면 root ul맨하단에 li를 추가
            ul.append("<li style='height:38px;'> <i class='fa-solid fa-file' style='padding-top:10px; height:20px;margin-left:14px;margin-right:5px;'></i><input type=\"text\" onkeyup=\"addFileEnd(event,this,'" + path2 + "');\" id=\"addFileNm\" value=\"\" style=\"width: calc(100% - 40px);\"></li>");        
            alog(22);

        }

        function addFileEnd(e, t, path){
            alog("addFileEnd()______________________start");
            if(e.keyCode == 13){
                //alert("enter");
                $.ajax({
                    url: svrUrl + "?CMD=create&PATH=" + path,
                    dataType: "json",
                    type: "POST",
                    data: { "FILENM" : $(t).val(), "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq },
                    privatePath: path,
                    privateFileNm: $(t).val() 
                })
                .done(function( data ) {
                    alog("addFileEnd()______________________done");
                    alog(data);
                    if(data.RTN_CD == "200"){
                        //input오브젝트를 text를 변경하기
                        alog($(t).parent()[0]);
                        $(t).parent()[0].innerHTML = mkFileTag(false, this.privatePath, this.privateFileNm, data.RTN_MSG);
                        
                        msgNotice("파일 생성에 성공했습니다.(Success to add new file)", 3);
                    }else{
                        msgError(data.RTN_MSG + "(" + data.RTN_CD + ")", 5);
                    }


                    //성공하면 해당 오브젝트 div로 변경하기
                })
                .fail(function(xhr, status, errorThrown) { 
                    msgError(errorThrown,5);
                });
            }
        }

        function reload(e,t){
            $.ajax({
                url: svrUrl + "?CMD=list&PATH=/",
                type: "POST",
                dataType: "json",
                data: { "DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq },
                privitePath: "/"
            })
            .done(function( data ) {
                alog(data);
                //alert(data);
                ul = $("#fileRoot");
                ul.empty();//비우기
                for(i=0;i<data.length;i++){
                    //var li=document.createElement('li');
                    if(data[i].dir == "Y"){
                        ul.append(mkFoldTag(true, this.privitePath, data[i].nm, data[i].seq)); //ul_list안쪽에 li추가
                        //li.innerHtml = mkFoldTag(this.privitePath, data[i].nm);
                    }else{
                        ul.append(mkFileTag(true, this.privitePath, data[i].nm, data[i].seq));
                        //li.innerHtml = mkFileTag(this.privitePath, data[i].nm);
                    }
                    //ul.appendChild(li);

                    //선택 이벤트 생성하기
                    //makeSelectEvent();
                }

                msgNotice("작업목록(파일/폴더) 가져오기를 성공했습니다.(Success to relaod)",3);
            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });
        }

        function mkFoldTag(isLiTag, path, nm, seq){
            alog("mkFoldTag()__________________________________start");
            alog("  seq = " + seq);
            //alog("  끝이 뭐냐 : = " + path.slice(-1));
            if(path.slice(-1,1) != "/")path = path + "/";
            //alog("  변환함 = " + path);

            if(seq == "" || seq == null)seq = "";
            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            nm2 = nm.replace(/\\/g,"\\\\");

            return sTag + "<div seq=\"" + seq + "\" onclick=\"viewChildList(event, '" + path2 + nm2 + "' ,this);\" type=\"folder\" path=\"" + path2 + "\" class=\"optionsecoptions\" ><i class='fa-solid fa-caret-right'></i><i class='fa-solid fa-folder' style='color:#D7C908;margin:0px 10px 0px 4px;'></i>" + nm + "</div>" + eTag;                    
            //return sTag + "<div seq='" + seq + "' onclick='viewChildList(event, \"" + path + nm + "\" ,this);' type='folder' path='" + path + "' class='optionsecoptions' ><i class='fa-solid fa-caret-right'></i><i class='fa-solid fa-folder' style='color:#D7C908;margin:0px 10px 0px 4px;'></i>" + nm + "</div>" + eTag;                    

        }
        function mkFileTag(isLiTag, path, nm, seq){
            alog("mkFileTag()__________________________________start");
            alog("  seq = " + seq);

            if(path.slice(-1,1) != "/")path = path + "/";
            
            if(seq == "" || seq == null)seq = "";
            var sTag = "";
            var eTag = "";
            if(isLiTag){
                sTag = "<li>";
                eTag = "</li>";
            }

            // 특수문자 \를 \\로 변경
            path2 = path.replace(/\\/g,"\\\\");
            nm2 = nm.replace(/\\/g,"\\\\");

            return sTag + "<div seq=\"" + seq + "\" @click=\"viewFile(event, this, '" + path2 + "', '" + nm2 + "');\" type=\"file\" path=\"" + path2 + "\" class=\"optionsecoptions\"><i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i>" + nm + "</div>" + eTag;
            //return sTag + "<div seq='" + seq + "' onclick='viewFile(event, this, \"" + path + "\", \"" + nm + "\");' type='file' path='" + path + "' class='optionsecoptions'><i class='fa-solid fa-file' style='margin-left:14px;margin-right:13px;'></i>" + nm + "</div>" + eTag;
        }

        function chkFileExt(fileNm){
            var textFiles = ["html", "txt", "json", "php", "css", "js", "xml", "jsp", "asp", "java"];
            alog("viewFile() " + path + file);

            fileExt = file.substring(file.lastIndexOf(".") + 1, file.length).toLowerCase();
            //alert("[" + fileExt + "]");
            if (fileExt.length > 0 && textFiles.indexOf(fileExt) > 0) {

            } else {
                msgError("텍스트문서만 편집가능합니다.", 5);
                //return;
            }
        }

        
        function viewFile(e, divObj, path, file){
            alog("viewFile().................start");
            alog(app);
            app._component.methods.viewFile(e, divObj, path, file); //vue3 내부 methods 함수 호출
            alog("viewFile().................end");
        }


        function viewFile2(e, divObj, path, file){
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;

            seq = $(divObj).attr("seq");

            //리던 올때까지는 저장버튼/에디터 비활성화
            isBtnSave = false;
            codeMirror.setOption("readOnly", true);

            $.ajax({
                url: svrUrl + "?CMD=getcode&PATH=" + path + "&FILENM=" + file,
                dataType: "json",
                type: "POST",
                data: {"DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq, "SFILE_SEQ" : seq},
                privatePath: path,
                privateFileNm: file,
                privateSeq: seq,
                privateDivObj: divObj
            })
            .done(function( data ) {
                alog(data);
                if(data.RTN_CD == "200"){
                    if(data.ERR_CD == "220"){
                        msgNotice(data.RTN_MSG + "(" + data.RTN_CD + "," + data.ERR_CD + ")", 2);
                        if (codeMirror) codeMirror.setValue("");
                    }else{
                        //저장 버튼 활성화 처리
                        isBtnSave = true;
                        msgNotice("File-Load success.(" + this.privateFileNm + ")", 2);
                        if (codeMirror) {
                            codeMirror.setValue(data.RTN_MSG);
                            codeMirror.setOption("readOnly", false);
                        }
                    }

                }else{
                    msgError(data.RTN_MSG + "(" + data.RTN_CD + "," + data.ERR_CD + ")", 5);
                }


                $("#selectPath").text(this.privatePath);
                $("#selectFileNm").text(this.privateFileNm);

                $("#selectFileNm").attr("seq",this.privateSeq);
                alog("isBtnSave = " + isBtnSave);

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });


            liObj  = $(divObj).parent()[0];

            if (liObj.hasChildNodes()){
                //alog(111);
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = liObj.childNodes;
                for (var i = 0; i < children.length; i++){
                    // children[i]로 각 자식에 무언가를 함
                    // 주의: 목록은 유효해(live), 자식 추가나 제거는 목록을 바꿈
                    alog(i + "---------------");
                    alog(children[i])
                    if(children[i].nodeName == "DIV") {
                        selectControl(children[i]);
                    }
                }
            }


        }





        function selectControl(divObj){
            //기존에 선택된거 있으면 선택해제 하기
            var oldSelectDiv = document.querySelector(".selected");

            if(oldSelectDiv && oldSelectDiv !== divObj){
                $(oldSelectDiv).removeClass("selected");
            }

            //caret-right 아이콘 회전
            if(!$(divObj).hasClass("selected")){
                $(divObj).addClass("selected");

                //글로별 변수에 현재 선택된 folder, path 정보 저장하기
                if($(divObj).attr("type") == "folder"){
                    selectFolder =  $(divObj).attr("path") +  $(divObj).text();
                }else{
                    selectFolder =  $(divObj).attr("path");
                }
                
                multiChangePath(selectFolder);

                //alert(selectFolder);

            }
        }

        function viewChildList(e, path, divObj){
            alog("viewChildList()................start");
            //중북 클릭 이벤트방지
            var evt = e ? e:window.event;
            if (evt.stopPropagation)    evt.stopPropagation();
            if (evt.cancelBubble!=null) evt.cancelBubble = true;
        

            var liObj = $(divObj).parent()[0];
            var isFoldOpen = false;

            //liObj.children().remove();
            alog(liObj);

            //caret-right 아이콘 회전
            //if($(iObj).hasClass("fa-rotate-90")){
            //    $(iObj).removeClass("fa-rotate-90");
            //} 

            if (divObj.hasChildNodes()){
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = divObj.childNodes;
                for (var i = 0; i < children.length; i++){
                    // node가 i이고 "fa-caret-right" "fa-rotate-90" class가 있으면 "fa-rotate-90"을 제거
                    if(children[i].nodeName == "I"  && $(children[i]).hasClass("fa-caret-right")){
                        if( $(children[i]).hasClass("fa-rotate-90") ){
                            $(children[i]).removeClass("fa-rotate-90");
                            isFoldOpen = false;
                        }else{
                            $(children[i]).addClass("fa-rotate-90");
                            //alert(99);
                            isFoldOpen = true;
                        }
                    }
                }
            }


            if (liObj.hasChildNodes()){
                // 그래서, 먼저 개체가 찼는 지(자식 노드가 있는 지) 검사
                var isHaveChild = false;
                var children = liObj.childNodes;
                for (var i = 0; i < children.length; i++){

                    // children[i]로 각 자식에 무언가를 함
                    // 주의: 목록은 유효해(live), 자식 추가나 제거는 목록을 바꿈
                    alog(i + "---------------");
                    alog(children[i])
                    if(children[i].nodeName == "UL") {
                        alog("차일드 UL이 있음");

                        //children[i].remove();//삭제 시킴
                        //alert(isFoldOpen);
                        if(isFoldOpen){
                            children[i].style.display = "";
                        }else{
                            children[i].style.display = "none"; 
                        }

                        //document.getElementById("myDIV").style.display = "none";
                        //alert(1);
                        return;
                        //alert(2);
                    }

                    if(children[i].nodeName == "DIV") {
                        alog("차일드 DIV가 있음");
                        selectControl(children[i]);
                    }

                }
            }




            $.ajax({
                url: svrUrl + "?CMD=list&PATH=" + path,
                dataType: "json",
                type: "POST",
                data: {"DEGREE_SEQ" : degreeSeq , "SANDBOX_SEQ" : sandboxSeq},
                privitePath: path,
                privateLiObj: liObj
            })
            .done(function( data ) {
                alog(data);
                //alert(data);
                //ul을 먼저 추가
                //var ul=document.createElement('ul');
                var ul = $("<ul></ul>");
                for(i=0;i<data.length;i++){
                    //var li=document.createElement('li');

                    if(data[i].dir == "Y"){
                        //li.innerHTML = mkFoldTag(this.privitePath, data[i].nm);
                        ul.append( mkFoldTag(true, this.privitePath, data[i].nm, data[i].seq) );
                    }else{
                        //li.innerHTML = mkFileTag(this.privitePath, data[i].nm);
                        ul.append( mkFileTag(true, this.privitePath, data[i].nm, data[i].seq) );
                    }
                    //ul.appendChild(li);
                }
                //this.privateLiObj.appendChild(ul);
                alog(ul);
                //this.privateLiObj.append(ul[0].innerHTML);
                $(this.privateLiObj).append(ul);

            })
            .fail(function(xhr, status, errorThrown) { 
                alert(errorThrown);
            });
        }

    function changeCodemirrorFontSize(sizeCmd){
        alog("changeCodemirrorFontSize..........start " + sizeCmd);

        if(sizeCmd == "+"){
            codeMirrorSqlFontSize = codeMirrorSqlFontSize + 2;
        }else{
            codeMirrorSqlFontSize = codeMirrorSqlFontSize - 2;
        }
    
        $(".CodeMirror").css('font-size',codeMirrorSqlFontSize + "px");

        //cmSql.getWrapperElement().style["font-size"] = size+"px";
        //cmSql.getWrapperElement().style.fontsize = size+"px";
        codeMirror.refresh();
        alog("changeCodemirrorFontSize..........end");   
    }



    function initVuetify3(){


        const { createApp, ref } = Vue
        const { createVuetify } = Vuetify

        
        const vuetify = createVuetify()
        
        app = createApp({        
        //const app = createApp({
            setup() {
                alog('setup()...start');

                /*
                [
                    {"id" : "aaa", "fullpath" : "/data/www/a.php", "nm" : "a.php"}
                    ,{"id" : "bbb", "fullpath" : "/data/www/b.php", "nm" : "b.php"}
                    ,{"id" : "ccc", "fullpath" : "/data/www/c.php", "nm" : "c.php"}
                ]
                    */

                const componentKey = ref(0);
                const myTab = ref([
                    {"id" : "aaa", "fullpath" : "/data/www/a.php", "nm" : "a.php"}
                    ,{"id" : "bbb", "fullpath" : "/data/www/b.php", "nm" : "b.php"}
                    ,{"id" : "ccc", "fullpath" : "/data/www/c.php", "nm" : "c.php"}
                ]);

                const activeTab = ref(null);

                return {
                    myTab, activeTab, componentKey
                }
            },
            data: ()=> ({
            }),
            created(){
                alog("created()...start");
            },
            mounted(){
                alog("mounted()...start");
                this.initSubmit();
            },
            methods: {
                clickSubmit(){
                    alert(this.firstName);
                    //alog(this.data);
                    //return saveForm();
                    const formData = new FormData(); 
                    formData.append('firstName', this.firstName);
                    formData.append('firstFile', this.firstFile);
                    
                    axios.post('vuetify3_svr.php', formData)
                    .then(function (response) {
                        //alert(response.data);
                        alert(response.data.hi);
                        //var tmp = JSON.parse(response.data)
                        //alert(tmp.hi);
                        //alog(tmp);
                    })
                    .catch(function (error) {
                        alog(error);
                    });				
                    
                },
                initSubmit(){
                    alog("initSubmit()...start");
                    //alert("mounted");
                    this.componentKey +=1;
                },
                closeTab(t){
                    alert("close = " + t);
                    this.myTab = this.myTab.filter(function(item){
                        return t.indexOf(item.fullpath) == -1;
                    });
                },
                viewFile(e, divObj, path, file){
                    alert(path + file);
                    alog(this.myTab);
                    this.myTab[this.myTab.length] = {"id": path + file , "fullpath" : path + file, "nm" : file };


                    this.activeTab = path + file;
                }
            }
        })
        app.use(vuetify).mount('#app')

    }
</script>
</html>