#!/bin/bash
set -o errexit
set -o xtrace

cd gitfolder


#Uncomment below for Gradle

#APP_ENV=CI gradle test

#Uncomment below for mvn

#mvn clean install
#mvn -e sonar:sonar