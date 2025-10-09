<?php
use Mark\App;

require_once "/data/www/lib/php/vendor/autoload.php";
require_once "./demo_perf_workerman_class.php";


$api = new App('http://0.0.0.0:81');

$api->count = 4; // process count

$api->any('/', function ($requst) {

    return file_get_contents('./demo_perf_workerman.html', true);

    //return 'Hello world';
});

$api->any('/data', function ($requst) {
    echo "/data.............................start" . PHP_EOL;
    $dbObj = new dbClass();
    $tarr = $dbObj->getSingleQuery();

    return json_encode($tarr);
    //return 'Hello world';
});

$api->get('/hello/{name}', function ($requst, $name) {
    return "Hello $name";
});

$api->post('/user/create', function ($requst) {
    return json_encode(['code'=>0 ,'message' => 'ok']);
});

$api->start();
?>