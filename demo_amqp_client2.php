<?php

require_once '/data/www/lib/php/vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

echo "<br>000";
$connection = new AMQPStreamConnection('172.17.0.1', 5672, 'test', '1234', "/");
$channel = $connection->channel();
/*
echo "<pre><font color=blue>";
var_dump($channel);
echo "</font></pre>";
*/


echo "<br>111";

$channel->exchange_declare('logs', 'fanout', false, false, false);


echo "<br>222";

$data = implode(' ', array_slice($argv, 1));
if (empty($data)) {
    $data = "info: Hello World!";
}
echo "<br>333";

$msg = new AMQPMessage($data);

echo "<br>444";
$channel->basic_publish($msg, 'logs');

echo "<br>555";
echo ' [x] Sent ', $data, "\n";

$channel->close();
$connection->close();





?>