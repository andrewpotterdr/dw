#!/bin/bash

cpu=`lscpu | grep "Model name" | cut -f2 | cut -f2- -d" "`

result="{\n\t\"cpu\": \"$cpu\"\n}"
echo -e $result
