<?php
header("Content-Type: text/html; charset=UTF-8");
session_start();

$CFG = include_once("../common/include/incConfig.php");

if(!require_once("../common/include/incUtil.php"))die("require incUtil load fail.");
if(!require_once("/data/www/lib/php/vendor/autoload.php"))die("require predis load fail.");

$CTL = $_GET["CTL"];

$REDIS_HOST = $_POST["REDIS_HOST"];
$REDIS_PORT = $_POST["REDIS_PORT"];
$REDIS_PASSWORD = $_POST["REDIS_PASSWORD"];

$KEY = $_POST["KEY"] . "";
$VAL = $_POST["VAL"] . "";


//var_dump($CFG);

function setSession($host,$port,$password){
    global $_SESSION;
    $_SESSION["__REDIS_HOST"] = $host;
    $_SESSION["__REDIS_PORT"] = $port;
    $_SESSION["__REDIS_PASSWORD"] = $password;

    //var_dump($_SESSION);
}

function getRedis(){
    global $_SESSION;
    //var_dump($_SESSION);
    $REDIS_HOST = $_SESSION["__REDIS_HOST"];
    $REDIS_PORT = $_SESSION["__REDIS_PORT"];
    $REDIS_PASSWORD = $_SESSION["__REDIS_PASSWORD"];

    if($REDIS_HOST == "")JsonMsg("500","100","REDIS_HOST is empty.");
    if($REDIS_PORT == "")JsonMsg("500","110","REDIS_PORT is empty.");

    if($REDIS_PASSWORD != ""){
        $redisClient = new Predis\Client(
            array(
                'scheme' => 'tcp',
                'host'   => $REDIS_HOST,
                'port'   => $REDIS_PORT,
                'password' => $REDIS_PASSWORD,
                'timeout' => 1
            )
        );
    }else{
        $redisClient = new Predis\Client(
            array(
                'scheme' => 'tcp',
                'host'   => $REDIS_HOST,
                'port'   => $REDIS_PORT,
                'timeout' => 1
            )
        );
    }

    try {
        $redisClient->connect();
    }catch(Predis\Connection\ConnectionException $e) {
        //echo "<br>ConnectionException ...................................start()<br>";
        JsonMsg("500","510","ConnectionException : " . $e->getMessage());
        //echo $e->getMessage();
        exit;
    }catch (Exception $e) {
        //echo "<br>Exception ...................................start()<br>";
        JsonMsg("500","520","Exception : " . $e->getMessage());
        //echo $e->getMessage();
        //var_dump($e);
        exit;
    }

    return $redisClient;
}

//echo "aaa";
alog("CTL = " . $CTL);
if($CTL == "loginRedis"){

    if($REDIS_PASSWORD != ""){
        $redisClient = new Predis\Client(
            array(
                'scheme' => 'tcp',
                'host'   => $REDIS_HOST,
                'port'   => $REDIS_PORT,
                'password' => $REDIS_PASSWORD,
                'timeout' => 1
            )
        );
    }else{
        $redisClient = new Predis\Client(
            array(
                'scheme' => 'tcp',
                'host'   => $REDIS_HOST,
                'port'   => $REDIS_PORT,
                'timeout' => 1
            )
        );
    }
    
    try {
        $redisClient->connect();
    }catch(Predis\Connection\ConnectionException $e) {
        //echo "<br>ConnectionException ...................................start()<br>";
        //echo $e->getMessage();
        JsonMsg("500","530","ConnectionException : " . $e->getMessage());
        exit;
    }catch (Exception $e) {
        //echo "<br>Exception ...................................start()<br>";
        //echo $e->getMessage();
        JsonMsg("500","540","Exception : " . $e->getMessage());
        //var_dump($e);
        exit;
    }
    
    setSession($REDIS_HOST,$REDIS_PORT,$REDIS_PASSWORD);

    $redisClient->quit();    
    JsonMsg("200","200","Login success");
    
}else if($CTL == "getMapList"){
    $redisClient = getRedis();

    $it = new Predis\Collection\Iterator\Keyspace($redisClient);

    $rtnVal = array();

    foreach ($it as $key) {
        //alog($key . " [value type] = " . $redisClient->TYPE($key));

        ///alog(888);
        if($redisClient->TYPE($key) == "string"){
            $val = $redisClient->get($key);
        }else{
            $val = "not string(key type is " . $redisClient->TYPE($key) . ")";
        }     
        array_push($rtnVal , array("KEY" => $key, "VALUE" => $val));

        //alog(999);
        //alog($key . " [value type] = " . $redisClient->TYPE($key));
        //alog($key . "=" . $redisClient->get($key));
    }

    $redisClient->quit();
    JsonData("200","220","",$rtnVal);
}else if($CTL == "getHashList"){
    $redisClient = getRedis();
    
    $it = new Predis\Collection\Iterator\HashKey($redisClient, 'hkey');

    foreach ($it as $key => $value) {
      alog($key . "=" . $value);
    }

    $redisClient->quit();
    JsonData("200","230","",$it);

}else if($CTL == "getMapOne"){
    $redisClient = getRedis();

    if($KEY != ""){
        alog("get : " . $KEY );
        
        $jsonStr = $redisClient->get($KEY);
        if(substr($jsonStr,0,1) == "{" && substr($jsonStr,-1,1) == "}" ){
            $rtnVal = json_encode(json_decode($jsonStr),JSON_UNESCAPED_SLASHES|JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);
        }else{
            $rtnVal = $jsonStr;
        }


        JsonData("200","240","",$rtnVal);
        //echo "처리결과=" . $redisClient->set($KEY,$VAL);
        //성공시 : OK
    }else{
        JsonMsg("500","250","세팅할 KEY가 없습니다.(not found SET KEY)","");
    }
}else if($CTL == "setMapOne"){
    $redisClient = getRedis();

    if($KEY != ""){
        alog("add : " . $KEY . "=" . $VAL);


        if(substr($VAL,0,1) == "{" && substr($VAL,-1,1) == "}" ){
            //json
            $tmpArray = json_decode($VAL,true);

            if(json_last_error() != JSON_ERROR_NONE){
                $redisClient->quit();
                JsonMsg("500","500","JSON 문법 에러 발생 : " . json_last_error_msg());
            }            

            $rtnVal = "(json)" . $redisClient->set($KEY,json_encode($tmpArray));
            

        }else{

            $rtnVal = "(no json)" . $redisClient->set($KEY,$VAL);
        }

        JsonMsg("200","240","Set effect count result:" . $rtnVal);
        //echo "처리결과=" . $redisClient->set($KEY,$VAL);
        //성공시 : OK
    }else{
        JsonMsg("500","250","세팅할 KEY가 없습니다.(not found SET KEY)","");
    }
}else if($CTL == "delMapOne"){
    $redisClient = getRedis();

    if($KEY != ""){
        $rtnVal = $redisClient->del(array($KEY));
        $redisClient->quit();
        JsonMsg("200","260","Del effect count result:" . $rtnVal);
        //echo "처리결과=" . $redisClient->del(array($KEY));
        //성공시 : 1, 삭제한게없을때 : 0
    }else{
        JsonMsg("500","270","세팅할 KEY가 없습니다.(not found DEL KEY)","");
    }
}else{
    JsonMsg("500","999","CTL 이 없습니다.(not found CTL)","");    
}



?>
