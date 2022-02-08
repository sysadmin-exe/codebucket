# About
This is a bash script that can be used to deploy a java artifact file in a Linux box. It ensures that there is a logging file for the application. This script can be used in CICD pipelines. It has the ability to check if the application is currently running or not and start a new one, restart and stop the existing application when passed as arguments like so
```bash
./deploy-java-artifact.sh start|stop|restart
```
It has entries for ELK APM java app but can be removed if it is not needed.