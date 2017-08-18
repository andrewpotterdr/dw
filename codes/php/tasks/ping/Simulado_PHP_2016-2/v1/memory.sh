#!/bin/bash

memoryTotal=`free --mega | tr -s " " | grep Mem: | cut -f2 -d" "`
memoryUsageUsed=`free --mega | tr -s " " | grep Mem: | cut -f3 -d" "`
memoryUsageUnused=$(($memoryTotal - $memoryUsageUsed))

result="{\n\t\"memoryUsageUsed\": $memoryUsageUsed,\n\t\"memoryUsageUnused\": $memoryUsageUnused\n}"
echo -e $result
