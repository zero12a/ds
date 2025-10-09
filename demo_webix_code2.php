<?php

$rtnArr = array();

$j=0;
for($i=1;$i<100;$i++){
    $rtnArr[$j]["id"] = $i;
    $rtnArr[$j]["value"] = $i . "등";  

    $j++;
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
