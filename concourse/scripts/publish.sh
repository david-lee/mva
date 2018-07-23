#!/bin/bash
set -o errexit
set -o xtrace

TARGET_DIR=$PWD/target
mkdir -p $TARGET_DIR

ls
VERSION=`cat version/number`
VERSION=$VERSION'-SNAPSHOT'

cd gitfolder

# push to artifactory
#mvn versions:set -DnewVersion=$VERSION
#mvn deploy -Dmaven.test.skip=true

gradle artifactoryPublish