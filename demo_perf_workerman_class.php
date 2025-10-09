<?php

class dbClass{

	function __construct(){
	}

	//파괴자
	function __destruct(){
    }

    //데이터 조회
    /*

wrk -t 10 -c 10 -d 10s -s workerman.lua http://localhost:9081/
Running 10s test @ http://localhost:9081/
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    30.37ms   17.67ms 235.37ms   91.83%
    Req/Sec    33.81     12.77    60.00     55.64%
  1341 requests in 10.10s, 22.96MB read
  Socket errors: connect 6, read 0, write 0, timeout 0
Requests/sec:    132.79
Transfer/sec:      2.27MB
Response count: 0


    */
    function getSingleQuery(){
        global $CFG;

        $servername = "172.17.0.1";
        $username = "cg";
        $password = "cg1234qwer";
        $dbname = "RD_COMMON";
        
        // Create connection
        //$conn = new mysqli($servername, $username, $password, $dbname);

        $db = new Workerman\MySQL\Connection($servername, 3306, $username, $password, $dbname);
        $row = $db->query("SELECT * FROM CMN_AUTH WHERE 1 = :A", array("A"=>"1") );

        return $row;

    }

    

}

?>