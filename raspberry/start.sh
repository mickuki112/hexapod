#!/bin/bash
ifconfig wlan0 192.168.1.100
cd hexapod
serve -s build & npm run:server