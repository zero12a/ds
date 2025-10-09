<?php 

    header("Content-Type: text/html; charset=UTF-8");
    header("Cache-Control:no-cache");
    header("Pragma:no-cache");

    $CFG = require_once("../common/include/incConfig.php");	
    require_once("../common/include/incUtil.php");
    require_once("../common/include/incUser.php");



    if( $_GET["ctl"] == "SAVE" ){
        $region = $_POST["region"];
        $query = $_POST["query"];

        putenv('AWS_DEFAULT_REGION=' . $region);
        putenv('AWS_ACCESS_KEY_ID=' . $CFG["CFG_AWS_AID"]);
        putenv('AWS_SECRET_ACCESS_KEY=' . $CFG["CFG_AWS_KEY"]);


        //echo "query = " . $query  . "\n";

        $rtn = shell_exec($query);
        echo $rtn;
        exit;
    }

?>

<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    
    <script>
    $(function(){

        $("#btnGo").click(function(){
            //alert($("#txtQuery").val());
            //alert($("#region").val());
            $("#txtResult").val("Loading...");

            $.ajax({
                method: "POST",
                url: "?ctl=SAVE",
                data: { query: $("#txtQuery").val(), region: $("#region").val() }
            })
            .done(function( msg ) {
                //alert( "Data Saved: " + msg );
                $("#txtResult").val(msg);
            });


        });

    });
    </script>
    </head>

    <body>
<form>
    <select id="region"> 
        <option value="us-east-1">us-east-1(미국 동부(버지니아 북부))</option>
        <option value="ap-northeast-2">ap-northeast-2(SEOUL)</option>
    </select>
    <textarea style="width:100%;height:100px;font-size:10pt;" id="txtQuery"></textarea>
    <input type=button value="go" id="btnGo">
    <textarea style="width:100%;height:500px;font-size:10pt;" id="txtResult"></textarea>
</form>
#### IAM 유저 정보
aws cloudtrail lookup-events --max-items 30 --lookup-attributes AttributeKey=Username,AttributeValue=root
aws cloudtrail lookup-events --max-items 30 --lookup-attributes [{AttributeKey=EventName,AttributeValue=ConsoleLogin},{AttributeKey=UserName,AttributeValue=root}]
aws cloudtrail lookup-events --max-items 30 --lookup-attributes [{'AttributeKey' : 'EventName','AttributeValue' : 'ConsoleLogin'},{'AttributeKey' : 'UserName','AttributeValue' : 'root'}]
aws iam list-users

### OS 계정 정보
스텝1
1. 명령어 전송
<요청>
aws ssm send-command \
    --document-name "AWS-RunShellScript" \
    --instance-ids "i-04939cd3f87ffbc9f" \
    --parameters commands='ifconfig' \
    --region ap-northeast-2
응답값은 json형식임
<응답>
{
    "Command": {
        "CommandId": "d5f715fa-c559-4fe4-99b3-5f6e17896ff6",
        "DocumentName": "AWS-RunShellScript",
        "Status": "Pending",
        "StatusDetails": "Pending",
    }
}


스텝2(스텝1에서 응답값에 command-ID뽑아와서)
<요청>
aws ssm list-commands \
    --command-id "CommandId"
<응답>
{
"StatusDetails": "Success",
}
# aws ssm list-commands (실행이력 전체 보기)

스텝3
-스텝2가 "Success"이면 실행 결과 Output텍스트 뽑아 오기
<요청>
aws ssm list-command-invocations --command-id "88aa138c-e6e2-4568-8455-036f90bc4407" --details --query "CommandInvocations[*].CommandPlugins[*].Output[]" --output text
<응답>
total 430456
dr-xr-xr-x  2 root root       28672 Aug 23  2022 .
drwxr-xr-x 13 root root         155 Jun 13  2022 ..
-rwxr-xr-x  1 root root       37256 Jan 23  2020 [
-rwxr-xr-x  1 root root      107744 Feb 17  2021 a2p


id만 짤라서 보기
cut -f1 -d: /etc/passwd 

USERADD 를 통해 등록된 계정만 보기
grep /bin/bash /etc/passwd

USERADD 를 통해 등록된 계정 ID만 보기
grep /bin/bash /etc/passwd | cut -f1 -d:


</body>
</html>

