<?php 
//테스트 버전 : swoole 4.6.4
// pecl install swoole && docker-php-ext-enable swoole 
require_once "/data/www/lib/php/vendor/autoload.php";
require_once "./demo_perf_swoole_class.php";

use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

$server = new Swoole\HTTP\Server("0.0.0.0", 82);
$server->set([
    'worker_num' => 4
    //,'max_conn' => 300
    //,'max_request' => 100
]);


//(프로세스간 메모리공유) 글로별 변수 저장하기
$table = new Swoole\Table(1024); //The number of rows of the table.
$table->column('cnt', Swoole\Table::TYPE_INT);
$table->column('name', Swoole\Table::TYPE_STRING, 64);
$table->column('num', Swoole\Table::TYPE_FLOAT);
$table->create();

$table['req'] = array('cnt' => 0, 'name' => '', 'num' => 3.1415);


$server->on("start", function (Server $server) use($wd_constants){
    echo "Swoole http server is started at http://0.0.0.0:82\n";
});

$server->on('WorkerStart', function($serv, $workerId) {
    //echo "WorkerStart()...........................................start" . PHP_EOL;
    //var_dump(get_included_files());
    //echo PHP_EOL . "WorkerStart()...........................................end" . PHP_EOL;
});
$server->on('BeforeReload', function($serv) {
    //echo "BeforeReload()...........................................start" . PHP_EOL;
    //var_dump(get_included_files());
    //echo PHP_EOL . "BeforeReload()...........................................end" . PHP_EOL;
});
$server->on('AfterReload', function($serv) {
    //echo "AfterReload()...........................................start" . PHP_EOL;
    //var_dump(get_included_files());
    //echo PHP_EOL . "AfterReload()...........................................end" . PHP_EOL;    
});

$reqCnt = 0;//서브 프로세스가 각각 독립적으로 동작하기 때문에 상호간 메모리 공유가 안됨

$server->on("request", function (Request $request, Response $response)use(&$reqCnt,&$table){
    //global $table;

    $reqCnt++;
    //echo "reqCnt = " . $reqCnt . PHP_EOL;
    $table['req']["cnt"] = $table['req']["cnt"] + 1;

    $dbObj = new dbClass();
    //print_r($request);
    echo $table['req']["cnt"] . "[" . $request->get["t"]. "] = ["  . $request->server["path_info"] . "]" . PHP_EOL;
    if($request->server["path_info"] == "/"){
        $response->end(file_get_contents('./demo_perf_swoole.html', true));
    }else{
        $response->header("Content-Type", "text/plain");

        $tarr = $dbObj->getSingleQuery();
        $response->end(json_encode($tarr));
    }

});

/*
$kit = new Swoole\ToolKit\AutoReload(2914);
$kit->watch(__DIR__);
$kit->addFileType('.php');
$kit->run();
*/
echo "000";

$server->start();

?>