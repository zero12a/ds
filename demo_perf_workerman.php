<?php
//테스트버전 
//설치 composer require workerman/workerman
use Workerman\Worker;
use Workerman\Redis\Client;

require_once "/data/www/lib/php/vendor/autoload.php";
require_once "./demo_perf_workerman_class.php";

// #### http worker ####
$http_worker = new Worker('http://0.0.0.0:81');

// 4 processes
$http_worker->count = 4;

$CFG = null;

$reqCnt = 0;

$http_worker->onWorkerStart = function() {
    global $redis;
    $redis = new Client('redis://172.17.0.1:1234');
    //$redis->set('req.cnt', 0); 이거로는 불가함.

    $redis->set('req.cnt', 0, function ($result) {
        echo "req.cnt result (1:success) = " . $result . PHP_EOL;
    }); 

};

// Emitted when data received
$http_worker->onMessage = function ($connection, $request)use($CFG,&$reqCnt) {
    global $redis;
    $tmp = $request->get("t");
    //$request->post();
    //$request->header();
    //$request->cookie();
    //$request->session();
    //$request->uri();
    //$request->path();
    //$request->method();
    //$reqCnt++;

    /*
    $redis->get('req.cnt', function($result,$redis)use($tmp,$request){
        //result가 성공이면 1리턴
        //echo "get result = " . $result . " ";
        $newCnt = $result + 1;
        //echo "new cnt = " . $newCnt . " ";
        $redis->set('req.cnt', $newCnt, function($result2)use($tmp,$request,$newCnt){
            //echo "set result = " . $result2 . " ";
            echo $newCnt . "[" . $tmp . "] = [". $request->path() . "]" . PHP_EOL;
        });
        //echo $newCnt . "[" . $tmp . "] = [". $request->path() . "]" . PHP_EOL;
    });
    */

    $redis->incr('req.cnt', function($result)use($tmp,$request) {
        echo $result . "[" . $tmp . "] = [". $request->path() . "]" . PHP_EOL;
    }); 


    $old = $_SESSION["id"];
    $_SESSION["id"] = rand() * 1000;
    $new = $_SESSION["id"];
    echo "old session = " . $old . PHP_EOL;
    echo "new session = " . $new . PHP_EOL;

    if($request->path() == "/"){
        $connection->send(file_get_contents('./demo_perf_workerman.html', true));
    }else{
        $dbObj = new dbClass();
        $tarr = $dbObj->getSingleQuery();

        // Send data to client
        $connection->send($tmp . json_encode($tarr));
    }

};

// Run all workers
Worker::runAll();
?>
