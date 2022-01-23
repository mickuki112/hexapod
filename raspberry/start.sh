#!/bin/bash
echo "ifconfig wlan0 192.168.1.100"
echo "cd hexapod"
echo "serve -s build & npm run:server"