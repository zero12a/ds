<?php
header("Content-Type: text/html; charset=UTF-8");
header("Cache-Control:no-cache");
header("Pragma:no-cache");

require_once("incLdap.php");






$ldap = new ldapClass();
$conObj = $ldap->connect("");

echo "<BR>ldap_error : " . ldap_error($conObj);

if($conObj){
    echo "<BR>연결 성공";
}else{
    echo "<BR>연결 실패";
}

if( $ldap->login("", "","") ){
    echo "<BR>로그인 성공";
}else{
    echo "<BR>로그인 실패";
}

var_dump($ldap->getUserInfo(""));

$ldap->close();
?>