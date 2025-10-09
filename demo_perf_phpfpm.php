<?php
require_once "./demo_perf_phpfpm_class.php";

$dbObj = new dbClass();
$tarr = $dbObj->getSingleQuery();

echo json_encode($tarr);
?>