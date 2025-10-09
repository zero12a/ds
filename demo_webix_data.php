<?php

$rtnArr = array();

for($i=0;$i<100;$i++){
    $rtnArr[$i]["id"] = strval(10000 + $i);
    
    //$rtnArr[$i]["mastercheck1"] = "off";
    $rtnArr[$i]["chk"] = ($i % 2 == 1)? "on" : "off";
    $rtnArr[$i]["title"] = $i . "good";
    $rtnArr[$i]["year"] = 1970 + $i;
    $rtnArr[$i]["votes"] = 5000 +$i;
    $rtnArr[$i]["rank"] = $i;
    $rtnArr[$i]["start"] = date_format(date_add(date_create("2020-01-01"),date_interval_create_from_date_string($i ." days")),"Y-m-d");
    $rtnArr[$i]["popup"] = $i . "방가워요방가워요방가워요방가워요";
    $rtnArr[$i]["combo1"] = 1970 + $i;    
    //$rtnArr[$i]["codesearch1"] = "nm" . $i;    
    $rtnArr[$i]["codesearch1"] = "nm" . $i . "^cd" . $i;    
    $rtnArr[$i]["link1"] = "nm" . $i . "^http://www.naver.com/?" . $i . "^_blank";    
    
}
/*
[
	{ "id":1, "title":"The Shawshank Redemption", "year":1994, "votes":678790, "rating":9.2, "rank":1, "start":"2013-08-16", "popup":"방가웡요1","combo1":1978}
	,{ "id":2, "title":"2The Godfather", "year":1972, "votes":511495, "rating":9.2, "rank":2, "start":"2020-08-16", "popup":"방가웡요2","combo1":1980}
    ,{ "id":3, "title":"3The Godfather", "year":1982, "votes":511495, "rating":9.2, "rank":3, "start":"2020-08-16", "popup":"방가웡요3","combo1":1980}
    ,{ "id":4, "title":"4The Godfather", "year":1992, "votes":511495, "rating":9.2, "rank":4, "start":"2020-08-16", "popup":"방가웡요4","combo1":1980}
    ,{ "id":5, "title":"5The Godfather", "year":1202, "votes":511495, "rating":9.2, "rank":5, "start":"2020-08-16", "popup":"방가웡요5","combo1":1980}
]
*/
echo json_encode($rtnArr);

?>
