<?php

$pg_db_host = '172.17.0.1';
$pg_db_port = '6432';

$pg_db_name = 'testdb'; // 자신이 만든 DB 이름, postgres는 기본 DB이름
$pg_db_username = 'test1'; // 자신이 설정한 DB 유저(role)이름. postgres는 기본 이름
$pg_db_password = 'qwer1234'; // 자신이 설정한 비밀번호 입력

$pdo = new PDO("pgsql:host=$pg_db_host;port=$pg_db_port;dbname=$pg_db_name", $pg_db_username, $pg_db_password); // PDO 객체 생성.


$response = array();

$stmt = $pdo->prepare("SELECT txt1, txt2 FROM test1");

$stmt->execute();
$response = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($response,JSON_UNESCAPED_UNICODE);


?>