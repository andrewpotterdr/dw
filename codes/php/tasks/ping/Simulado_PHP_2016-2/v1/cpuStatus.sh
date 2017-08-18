#!/bin/bash

last1=`uptime | tr -s " " | cut -f9 -d" " | cut -f1-2 -d","`
last10=`uptime | tr -s " " | cut -f10 -d" " | cut -f1-2 -d","`
last15=`uptime | tr -s " " | cut -f11 -d" "`

result="{\n\t\"cpuLast\": {\n\t\t\"last1\": $last1\n\t\t\"last10\": $last10\n\t\t\"last15\": $last15\n\t}\n}"
echo -e $result
