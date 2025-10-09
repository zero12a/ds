<?php
echo "111";


require "/data/www/lib/php/vendor/autoload.php";


//error_log("error_log msg");

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\ErrorLogHandler;
use Monolog\Formatter\LineFormatter;


//저장 결과 :  NOTICE: PHP message: error_log msg#015


//로그 한번 출력하면 불필요하게 아래와 같이 2줄이 출력됨.
//NOTICE: PHP message: 
//ERROR : monolog ErrorLogHandler error {"file":"/data/www/d.s/demo_log.php","line":25,"function":""} []

/*
$log1 = new Logger("log1");
$stream1 = new ErrorLogHandler(ErrorLogHandler::OPERATING_SYSTEM, Logger::WARNING);
$stream1->setFormatter(new LineFormatter("\n%level_name% : %message% %context% %extra%"));
$log1->pushHandler($stream1);

$log1->error("monolog ErrorLogHandler error",["file" => __FILE__,"line" => __LINE__,"function" => __FUNCTION__  ]);
$log1->warn("monolog ErrorLogHandler warn");
$log1->info("monolog ErrorLogHandler info");
$log1->debug("monolog ErrorLogHandler debug");
*/

$log2 = new Logger("log2");
$stream2 = new StreamHandler('php://stdout', Logger::WARNING);
$stream2->setFormatter(new LineFormatter("\n%channel%.%level_name% : %message% %context% %extra%"));
$log2->pushHandler($stream2);
$uid = "zero12a";

$log2->pushProcessor(function ($record)use($uid){
    $record['extra']['user'] = $uid;
    return $record;
});



$log2->error("monolog StreamHandler error",["file" => __FILE__,"line" => __LINE__,"function" => __FUNCTION__  ]);
$log2->warn("monolog StreamHandler warn");
$log2->info("monolog StreamHandler info");
$log2->debug("monolog StreamHandler debug");

//$stdout = fopen('php://stdout', 'w');

//$stderr = fopen('php://stderr', 'w');

//fwrite($stdout, "fwrite stderr\n");

//fwrite($stdout, "fwrite stdout\n");

echo "222";
?>