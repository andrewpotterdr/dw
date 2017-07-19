<?php
header("Content-type: application/json");
$network = $_GET['network'];
$mask = $_GET['mask'];
$result = shell_exec("fping -a -q -g {$network}/{$mask}");
$ips = explode("\n", $result, -1);
echo json_encode($ips);
