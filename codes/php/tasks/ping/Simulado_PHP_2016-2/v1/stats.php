<?php

$info = $_GET['info'] ?? 'overview';

switch($info)
{
	case 'overview':
		$result = shell_exec('./overview.sh');
	break;
	case 'cpuName':
		$result = shell_exec('./cpuName.sh');
	break;
	case 'cpuStatus':
		$result = shell_exec('./cpuStatus.sh');
	break;
	case 'memory':
		$result = shell_exec('./memory.sh');
	break;
}
header('Content-Type: apllication/json');
header('Access-Control-Allow-Origin: *');
echo $result;

?>
