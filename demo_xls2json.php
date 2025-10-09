<?php
header("Content-Type: text/html; charset=UTF-8");

//redis에 모두 넣기
//require_once "/data/www/lib/php/vendor/autoload.php";
$CFG = require_once("../common/include/incConfig.php");

?><!DOCTYPE html>
<html lang="en">
<head>
    <title id='Description'>elx2json</title>
    <meta name="description" content="JavaScript Grid with rich support for Data Filtering, Paging, Editing, Sorting and Grouping" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
    
</head>
<body>
excel to json
<input type=file id="my_file_input">
<script>
$("#my_file_input").on("change", function(e){
    alog("my_file_input.change().................start");
    var files = e.target.files; //input file 객체를 가져온다.
    var i,f;
    for (i = 0; i != files.length; ++i) {
        f = files[i];
        var reader = new FileReader(); //FileReader를 생성한다.         
        
        //성공적으로 읽기 동작이 완료된 경우 실행되는 이벤트 핸들러를 설정한다.
        reader.onload = function(e) {
        
           var data = e.target.result; //FileReader 결과 데이터(컨텐츠)를 가져온다.
 
           //바이너리 형태로 엑셀파일을 읽는다.
           var workbook = XLSX.read(data, {type: 'binary'});
           
           //엑셀파일의 시트 정보를 읽어서 JSON 형태로 변환한다.
           workbook.SheetNames.forEach(function(item, index, array) {
               EXCEL_JSON = XLSX.utils.sheet_to_json(workbook.Sheets[item]);
               alog(EXCEL_JSON);
           });//end. forEach
           
        }; //end onload
        
        //파일객체를 읽는다. 완료되면 원시 이진 데이터가 문자열로 포함됨.
        reader.readAsBinaryString(f);
       
    }//end. for
	
});

function alog(tmp){
    if(console)console.log(tmp);
}
    </script>

</body>
</html>