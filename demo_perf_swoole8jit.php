<?php 
//테스트 버전 : swoole 4.6.4
// pecl install swoole && docker-php-ext-enable swoole 
require_once "/data/www/lib/php/vendor/autoload.php";

use Swoole\Http\Server;
use Swoole\Http\Request;
use Swoole\Http\Response;

$server = new Swoole\HTTP\Server("0.0.0.0", 82);
$server->set([
    'worker_num' => 16
    //,'max_conn' => 300
    //,'max_request' => 100
]);

function init()
{
    global $world, $fortune, $update;
    $pdo = new PDO(
        'mysql:host=172.17.0.1;dbname=RD_COMMON',
        'cg',
        'cg1234qwer',
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES    => false
        ]
    );
    $world   = $pdo->prepare('SELECT * FROM CMN_AUTH WHERE 0 < ?');

}

function getData()
{
    global $world;

    $world->execute([mt_rand(1, 10000)]);

    return $world->fetchAll();
}





$server->on("start", function (Server $server) use($wd_constants){
    echo "Swoole http server is started at http://0.0.0.0:82\n";
});

$server->on('WorkerStart', function($serv, $workerId) {
    //echo "WorkerStart()...........................................start" . PHP_EOL;
    //var_dump(get_included_files());
    //echo PHP_EOL . "WorkerStart()...........................................end" . PHP_EOL;

    init();
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



$server->on("request", function (Request $request, Response $response){
    //global $table;
    session_start();
    
    $old = $_SESSION["some"];
    $_SESSION["some"] = rand() * 10000;
    $new = $_SESSION["some"];
    echo "OLD session = " . $old . PHP_EOL;
    echo "NEW session = " . $new . PHP_EOL;

    //print_r($request);
    echo $table['req']["cnt"] . "[" . $request->get["t"]. "] = ["  . $request->server["path_info"] . "]" . PHP_EOL;
    if($request->server["path_info"] == "/"){
        $response->end(file_get_contents('./demo_perf_swoole.html', true));
    }else{
        $response->header("Content-Type", "text/plain");

        $response->end(json_encode(getData()));
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