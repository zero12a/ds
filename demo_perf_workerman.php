<?php
use Workerman\Worker;

require_once "/data/www/lib/php/vendor/autoload.php";
require_once "./demo_perf_workerman_class.php";

// #### http worker ####
$http_worker = new Worker('http://0.0.0.0:81');

// 4 processes
$http_worker->count = 10;

$CFG = null;

$reqCnt = 0;

// Emitted when data received
$http_worker->onMessage = function ($connection, $request)use($CFG,&$reqCnt) {
    //$request->get();
    //$request->post();
    //$request->header();
    //$request->cookie();
    //$request->session();
    //$request->uri();
    //$request->path();
    //$request->method();
    $reqCnt++;
    echo "reqCnt = " . $reqCnt . PHP_EOL;

    $dbObj = new dbClass();
    $tarr = $dbObj->getSingleQuery();

    // Send data to client
    $connection->send(json_encode($tarr));
};

// Run all workers
Worker::runAll();
?>