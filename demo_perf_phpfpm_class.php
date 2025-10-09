<?php

class dbClass{

	function __construct(){
	}

	//파괴자
	function __destruct(){
    }

    //데이터 조회
    /*
wrk -t 10 -c 10 -d 10s -s swoole.lua http://localhost:9082/
Running 10s test @ http://localhost:9082/
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    32.71ms   19.54ms 232.74ms   94.62%
    Req/Sec    31.75      8.99    50.00     79.39%
  1581 requests in 10.09s, 27.11MB read
  Socket errors: connect 5, read 0, write 0, timeout 0
Requests/sec:    156.74
Transfer/sec:      2.69MB
Response count: 0


    */
    function getSingleQuery(){
        $servername = "172.17.0.1";
        $username = "cg";
        $password = "cg1234qwer";
        $dbname = "RD_COMMON";
        
        // Create connection
        //$conn = new mysqli($servername, $username, $password, $dbname);


        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM CMN_AUTH";
        $result = $conn->query($sql);

        $row = $result->fetch_all(MYSQLI_ASSOC);

        $conn->close();

        return $row;

    }

    

}

?>