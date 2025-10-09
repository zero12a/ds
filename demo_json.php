<?php
header("Content-Type: text/html; charset=UTF-8");

require_once('../common/include/incUtil.php');

$colIds = array("cd","nm");
$rowCnt = 20;

$rows = array();
for($i=0;$i<$rowCnt;$i++){
    $cols = array();
    for($t=0;$t<count($colIds);$t++){
        $cols[$colIds[$t]] = $colIds[$t] . "_" . $i;
    }
    $rows[$i] = $cols;
}

echo jsonView($rows);
?>