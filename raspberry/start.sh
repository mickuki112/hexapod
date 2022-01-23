#!/bin/bash
sudo ifconfig wlan0 192.168.1.100
pwd
serve -s build & npm run run:server