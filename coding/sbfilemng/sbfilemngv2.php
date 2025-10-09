<?php

require_once "/data/www/lib/php/vendor/autoload.php";

require_once "../../../common/include/incUtil.php";
require_once "../../../common/include/incDB.php";
require_once "../../../common/include/incUser.php";
require_once "../../../common/include/incRequest.php";

require_once "sbfileclass.php";

//////////////////////////////////////////////////////////////////////
//환경 변수
//////////////////////////////////////////////////////////////////////
$sandboxRoot = "/data/www/sb";
$readExt = array("txt", "php", "css", "js", "java");

$cmd            = isset($_POST["CMD"])? $_POST["CMD"] : $_GET["CMD"];
$path           = isset($_POST["PATH"])? $_POST["PATH"] : $_GET["PATH"];
$oldPath        = isset($_POST["OLDPATH"])? $_POST["OLDPATH"] : $_GET["OLDPATH"];
$fileNm         = isset($_POST["FILENM"])? $_POST["FILENM"] : $_GET["FILENM"];
$oldFileNm      = isset($_POST["OLDFILENM"])? $_POST["OLDFILENM"] : $_GET["OLDFILENM"];

//DB처리필요시
$degreeSeq      = isset($_POST["DEGREE_SEQ"])? $_POST["DEGREE_SEQ"] : $_GET["DEGREE_SEQ"];
$sandboxSeq      = isset($_POST["SANDBOX_SEQ"])? $_POST["SANDBOX_SEQ"] : $_GET["SANDBOX_SEQ"];
$sfileSeq      = isset($_POST["SFILE_SEQ"])? $_POST["SFILE_SEQ"] : $_GET["SFILE_SEQ"];

//로거
$reqToken = reqGetString("TOKEN",37);
$resToken = uniqid();
/*
$log = getLoggerStdout(
	array(
	"LIST_NM"=>"log_CG"
	, "PGM_ID"=>"RDMYMSGBOX"
	, "UID"=>getUserId()
	, "REQTOKEN" => $reqToken
	, "RESTOKEN" => $resToken
	, "LOG_LEVEL" => Monolog\Logger::ERROR
	)
);
*/

$fileSvc = new sbFileService();



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
if($cmd == "init"){
    //현재 DEGREE차수의 선생이 생성한 마스터파일에서 파일 정보 동기화 하기
    //100 기존 db 지우기
    //200 db 복제하기
    //300 기존 file 지우기
    //400 복제된db에서 파일 생성하기


    //DB에 파일 처리
    $REQ["DEGREE_SEQ"] = $degreeSeq;
    $REQ["SANDBOX_SEQ"] = $sandboxSeq;
    if(!is_numeric($REQ["DEGREE_SEQ"]))JsonMsg("500","510","DEGREE_SEQ를 입력해 주세요.(Input DEGREE_SEQ)");
    if(!is_numeric($REQ["SANDBOX_SEQ"]))JsonMsg("500","520","SANDBOX_SEQ를 입력해 주세요.(Input SANDBOX_SEQ)");
    //echo "<pre>";
    //echo 111;



    JsonMsg("200","200","파일 초기화에 성공했습니다.(Success for file init)");

}else if($cmd == "list"){


    //db에서 가져오기
    $REQ["PATH"] = $path;
    $REQ["DEGREE_SEQ"] = $degreeSeq;
    $REQ["SANDBOX_SEQ"] = $sandboxSeq;



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
        }else if(!mkdir($fullPath, 0777)) {
            //echo "폴더 생성에 실패했습니다.";
            JsonMsg("500","540","폴더 생성에 실패했습니다.");
        }else{

            //DB에 파일 처리
            $REQ["PATH"] = $path;
            $REQ["NM"] = $fileNm;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;
                        
            //echo "폴더 생성에 성공했습니다.";
            JsonMsg("200","200", $fileNm. " 폴더 생성 성공");
        }
    }
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

            //DB에 파일 처리
            $REQ["NM"] = $fileNm;
            $REQ["PATH"] = $path . $fileNm;
            $REQ["OLDPATH"] = $path . $oldFileNm;
            $REQ["SFILE_SEQ"] = $sfileSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            //echo "폴더 이동에 성공했습니다.";
            JsonMsg("200","200","폴더 이동에 성공했습니다.");
        }
    }
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

            //DB에 파일 처리 (nm이 선택된 포더 이므로 path+nm 이하를 삭제해야함)
            $REQ["PATH"] = $path;
            $REQ["NM"] = $fileNm;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            JsonMsg("200","510","삭제할 경로에 해당 폴더가 존재하지 않아 DB에서 삭제처리했습니다.($fullPath)");
        }else{
            $fileSvc->rrmdir($fullPath);//하위경로까지 일괄 삭제
            //echo "폴더를 일괄 삭제했습니다.";


            //DB에 파일 처리 (nm이 선택된 포더 이므로 path+nm 이하를 삭제해야함)
            $REQ["PATH"] = $path;
            $REQ["NM"] = $fileNm;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;
            
            JsonMsg("200","510","폴더를 일괄 삭제했습니다.");
        }
    }
}else if($cmd == "create"){
    if($fileNm == ""){
        //echo "파일 이름이 입력되지 않았습니다.";
        JsonMsg("500","510","파일 이름이 입력되지 않았습니다.");
    }else if($path == ""){
        //echo "파일 경로가 입력되지 않았습니다.";
        JsonMsg("500","510","파일 경로가 입력되지 않았습니다.");
    }else if(file_exists($fullPath)){
        //echo "같은 이름의 파일이 존재($fullPath)";
        JsonMsg("500","510","같은 이름의 파일이 존재($fullPath)");
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

            //DB에 파일 처리
            $REQ["PATH"] = $path;
            $REQ["NM"] = $fileNm;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            //echo "파일 생성 성공했습니다.";
            JsonMsg("200","200",$lastSfileSeq);
        }
    }
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

                //DB에 파일 처리
                $REQ["PATH"] = $path;
                $REQ["FILE_DATA"] = $data;
                $REQ["NM"] = $arrayFiles[$i]["name"];
                $REQ["DEGREE_SEQ"] = $degreeSeq;
                $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            }

        }
    }
    if(count($arrayFiles) > 0){
        JsonMsg("200","200","파일 저장에 성공했습니다.");
    }else{
        JsonMsg("200","200","파일이 없어 저장내역이 없습니다.");
    }
    

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

            //DB에 파일 처리
            $REQ["FILE_DATA"] = $data;
            $REQ["SFILE_SEQ"] = $sfileSeq;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            //echo "파일 업데이트 성공했습니다.";
            JsonMsg("500","510","파일 업데이트 성공했습니다.(" . $fullPath . ")");
        }
    }
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
}else if($cmd == "delete"){
    if(!file_exists($fullPath)){
        //echo "삭제할 파일이 존재하지 않습니다.";

        //파일이 존재하지 않는건 내부적으로 꼬인것이므로 db에서 파일 정보 삭제
        $REQ["SFILE_SEQ"] = $sfileSeq;
        $REQ["DEGREE_SEQ"] = $degreeSeq;
        $REQ["SANDBOX_SEQ"] = $sandboxSeq;

        JsonMsg("200","510","삭제할 파일이 존재하지 않아, DB에서 삭제처리했습니다.($fullPath)");
    }else{
        if(!unlink($fullPath)){
            //echo "해당 파일을 삭제에 실패했습니다.";
            JsonMsg("500","520","해당 파일을 삭제에 실패했습니다.");
        }else{
            //DB에 파일 처리
            $REQ["SFILE_SEQ"] = $sfileSeq;
            $REQ["DEGREE_SEQ"] = $degreeSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            //echo "파일 삭제 성공했습니다.";
            JsonMsg("200","200","파일 삭제 성공했습니다.");
        }
    }
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

            //DB에 파일 처리
            $REQ["NM"] = $fileNm;
            $REQ["PATH"] = $path;
            $REQ["OLDPATH"] = $oldPath;
            $REQ["SFILE_SEQ"] = $sfileSeq;
            $REQ["SANDBOX_SEQ"] = $sandboxSeq;

            JsonMsg("200","200", "파일 이름변경을 성공했습니다.");
        }
    }
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
}else{
    echo "처리할 명령어가 없습니다.(cmd is empty)";
}


?>