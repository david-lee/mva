#!/bin/bash
set -o errexit
set -o xtrace

cd gitfolder
ls

#Uncomment below for Gradle

#APP_ENV=CI gradle test

#Uncomment below for mvn

#mvn test -Dspring.profiles.active=$environment
