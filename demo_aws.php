<?php 

    header("Content-Type: text/html; charset=UTF-8");
    header("Cache-Control:no-cache");
    header("Pragma:no-cache");

    $CFG = include_once("../common/include/incConfig.php");

    use Aws\Iam\IamClient; 
    use Aws\Exception\AwsException;


    echo "<pre>";
    //print_r($CFG);
    require_once($CFG["CFG_LIBS_VENDOR"]);



    $client = new IamClient([
        'credentials' => array('key' => $CFG["CFG_AWS_AID"],'secret' => $CFG["CFG_AWS_KEY"]),
        'region' => 'us-west-2',
        'version' => '2010-05-08'
    ]);
    
    echo "사용자 목록<hr>";
    try {
        $result = $client->listUsers();
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }

    echo "특정 사용자 zero12ecr 상세<hr>";
    try {
        $result = $client->getUser(array(
            'UserName' => 'zero12ecr',
        ));
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }
     
    
?>