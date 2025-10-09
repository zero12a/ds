<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
$CFG = require_once("../common/include/incConfig.php");

require_once("../common/include/incUtil.php");

//$RtnVal = array();
//$RtnVal2 = array();
$RtnVal = array();
/*

{
    "success":true,
    "time":"2020-08-04 13:04:51",
        "data":
        {
            "baseurl":"https:\/\/xdsoft.net\/jodit\/files\/",
            "messages":[],
            "files":["calendar3-200.png"],
            "isImages":[true],
            "code":220
        }
}

*/

//var_dump($_FILES);

$fileNm = $_FILES["file"]["name"];
//$_FILES["files"]["type"];
//$_FILES["files"]["size"];
$tmpPath = $_FILES["file"]["tmp_name"];

$saveFileNm = getFileSvrNm($fileNm,"TINYMCE_");
$savePath = $CFG["CFG_UPLOAD_DIR"] . $saveFileNm;

//$_FILES["files"]["error"];

if(move_uploaded_file($tmpPath, $savePath)){
    //echo "/up/" . $saveFileNm;      
    $RtnVal["location"] = "http://localhost:8040/up/" . $saveFileNm;
    $RtnVal["status"] = "200";

}else{
    $RtnVal["location"] = "";
    $RtnVal["status"] = "500";
    //echo "File dont move to upload folder. tmpPath=" . $tmpPath . ", savepath=" . $savePath;
}

$RtnVal["time"] = date("Y-m-d H:i:s");


echo json_encode($RtnVal);
?>
