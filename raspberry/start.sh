#!/bin/bash
sudo ifconfig wlan0 192.168.1.100
pwd
cd hexapod
serve -s build & npm run run:server