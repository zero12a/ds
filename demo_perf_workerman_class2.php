<?php

class dbClass{
    private $db;


	function __construct(){
        echo 111;
        $loop  = Workerman\Worker::getEventLoop();  //require pcntl_signal

        //$loop = React\EventLoop\Factory::create();

        $factory = new React\MySQL\Factory($loop);

        $uri = 'cg:cg1234qwer@172.17.0.1/RD_COMMON';
        $this->db = $factory->createLazyConnection($uri);

	}

	//파괴자
	function __destruct(){
        $this->db->quit();
    }

    //데이터 조회
    function getSingleQuery($res){
        echo 222;
        //$res->send('end');
        $this->db->query('SELECT * FROM CMN_AUTH')->then(
            function (QueryResult $command) use($res){
                //print_r($command->resultFields);
                //print_r($command->resultRows);
                echo 444;
                $res->send(json_encode($command->resultRows));
            },
            function (Exception $error) {
                echo 'Error: ' . $error->getMessage() . PHP_EOL;
            }
        );
        echo 333;
    }
}

?>