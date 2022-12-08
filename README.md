# TSM-Guardian
![tsmpng](https://user-images.githubusercontent.com/43050319/206471871-aa01ee3b-7132-43c5-936c-b71af9d9d75d.png)

Who doesn't hate incidents where TSM fails and you need to jump in and simply restart TSM_SCHED?

This program uses the child_process module to run external commands, such as ps and tsm, in order to check the status of TSM_SCHED and restart it if necessary. It also uses setInterval to run the checkTSM function every 5 seconds, so it can continuously monitor TSM_SCHED.

This script uses the uncaughtException event to detect if the script has crashed, and if so, it will exit and automatically restart. This ensures that the script will always be running and monitoring TSM_SCHED.
