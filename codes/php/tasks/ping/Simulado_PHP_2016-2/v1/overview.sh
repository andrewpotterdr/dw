#!/bin/bash

OS=`lsb_release -d| cut -f2`
hostname=`hostname`
username=`whoami`
uptime=`uptime -p | cut -f2- -d" "`

result="{\n\t\"operatingSystem\": \"$OS\",\n\t\"hostname\": \"$hostname\",\n\t\"username\": \"$username\",\n\t\"uptime\": \"$uptime\"\n}"
echo -e $result
