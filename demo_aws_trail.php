<?php 

    header("Content-Type: text/html; charset=UTF-8");
    header("Cache-Control:no-cache");
    header("Pragma:no-cache");

    $CFG = include_once("../common/include/incConfig.php");


    use Aws\CloudTrail\CloudTrailClient;
    use Aws\Exception\AwsException;






    echo "<pre>";
    //print_r($CFG);
    require_once($CFG["CFG_LIBS_VENDOR"]);

    $client = CloudTrailClient::factory(array(
        'credentials' => array('key' => $CFG["CFG_AWS_AID"],'secret' => $CFG["CFG_AWS_KEY"]),
        'region'  => 'us-west-2',
        'version' => '2013-11-01'
    ));

    echo "특정 사용자 lookupEvents 상세<hr>";
    try {
        $result = $client->lookupEvents([
            //'EndTime' => <integer || string || DateTime>,
            //'EventCategory' => 'insight',
            'LookupAttributes' => [
                [
                    'AttributeKey' => 'Username', // REQUIRED
                    'AttributeValue' => 'AuditReadAccess', // REQUIRED
                ],
                // ...
            ],
            'MaxResults' => 10,
            //'NextToken' => '<string>',
            //'StartTime' => <integer || string || DateTime>,
        ]);
    
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }



    echo "특정 사용자 DescribeTrails 상세<hr>";
    try {
        $result = $client->DescribeTrails([
            'Name' => '', // REQUIRED
        ]);
    
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }

    echo "특정 사용자 getTrail 상세<hr>";
    try {
        $result = $client->getTrail([
            'Name' => '', // REQUIRED
        ]);
    
        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }
     


    echo "특정 사용자 listEventDataStores 상세<hr>";
    try {
        $result = $client->listEventDataStores([
            'MaxResults' => 10,
            'NextToken' => ''
        ]);

        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }
     



    

    echo "특정 사용자 listQueries 상세<hr>";
    try {
        $result = $client->listQueries([
            'MaxResults' => 10,
            'EventDataStore' => ''
        ]);

        var_dump($result);
    } catch (AwsException $e) {
        // output error message if fails
        error_log($e->getMessage());
    }
     
    
?>