<?php
require_once "/data/www/lib/php/vendor/autoload.php";

/*
### php8 opcache
opcache.enable=1
opcache.enable_cli=1
opcache.validate_timestamps=0
opcache.save_comments=0
opcache.enable_file_override=1
opcache.huge_code_pages=1

mysqlnd.collect_statistics = Off

memory_limit = 512M


### php8 opcache jit
opcache.enable=1
opcache.enable_cli=1
opcache.validate_timestamps=0
opcache.save_comments=0
opcache.enable_file_override=1
opcache.huge_code_pages=1

mysqlnd.collect_statistics = Off

memory_limit = 512M

opcache.jit_buffer_size=128M
opcache.jit=tracing

*/

use Workerman\Worker;
use Workerman\Timer;

use Workerman\Protocols\Http\Response;
use Workerman\Protocols\Http\Request;

use Workerman\Protocols\Http\Session;
use Workerman\Protocols\Http\Session\RedisSessionHandler;


// redis
$config = [
    'host'     => '172.17.0.1', 
    'port'     => 1234,        
    'timeout'  => 2,         
    'auth'     => null,   
    'database' => null,          
    'prefix'   => 'session_'   
];
Session::handlerClass(RedisSessionHandler::class, $config);


function init()
{
    global $world, $fortune, $update;
    $pdo = new PDO(
        'mysql:host=172.17.0.1;dbname=RD_COMMON',
        'cg',
        'cg1234qwer',
        [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES    => false  // false 일때 프리페어시 쿼리 검증을 미리 수행함, true로 하면 실제 쿼리 실행될때 검증함
        ]
    );
    $world   = $pdo->prepare('SELECT * FROM CMN_AUTH WHERE 0 < ?');

}

function db()
{
    global $world;

    $world->execute([mt_rand(1, 10000)]);

    return new Response(200, [
        'Content-Type' => 'text/plain',
        'Cache-Control'         => "no-store, no-cache, must-revalidate"
    ], json_encode($world->fetchAll()));
}

function intro()
{
    return new Response(200, [
        'Content-Type' => 'text/html',
        'Cache-Control'         => "no-store, no-cache, must-revalidate"
    ], file_get_contents('./demo_perf_workerman.html', true));
}

function router(Request $request)
{
    return match($request->path()) {
        '/' => intro(),
        '/data'        => db(),
        // '/info'      => info(),
        default      => new Response(404, [], 'Error 404'),
    };
}


echo "shell_exec('nproc') = " . shell_exec('nproc') . PHP_EOL;
//phpinfo();

$http_worker                = new Worker('http://0.0.0.0:81');
$http_worker->count         = (int) shell_exec('nproc') * 4;
$http_worker->onWorkerStart = function () {
    Header::$date = gmdate('D, d M Y H:i:s').' GMT';
    Timer::add(1, function() {
        Header::$date = gmdate('D, d M Y H:i:s').' GMT';
    });
    init();
};

$http_worker->onMessage = static function ($connection, $request) {

    $session = $request->session();

    $old = $session->get('somekey');
    $session->set('somekey', rand());

    $new = $session->get('somekey');
    //echo "OLD session = " . $old . PHP_EOL;
    //echo "NEW session = " . $new . PHP_EOL;
    


    $connection->send(router($request));
    
};

Worker::runAll();


class Header {
    public static $date = null;
}

?>