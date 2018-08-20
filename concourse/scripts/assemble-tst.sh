#!/bin/bash

set -o errexit
set -o   xtrace

TARGET_DIR=$PWD/target
mkdir -p $TARGET_DIR

cd gitfolder

npm config set _auth $NPM_AUTH
npm config set registry $NPM_REGISTRY
npm config set email $NPM_EMAIL
npm config set always-auth true
#npm config set sass_binary_site $NPM_SASS_BINARY_SITE
node -v
npm install -g n
n 6.10.0
node -v

npm install -g @angular/cli@1.6.3
npm install
ng build --aot -e qa


#APP_ENV=CI gradle assemble
#APP_ENV=CI mvn package -Dmaven.test.skip=true

#Uncomment below for Gradle
#cp -R build $TARGET_DIR/

#Uncomment below for mvn
#cp -R target/. $TARGET_DIR/

#cp index.html $TARGET_DIR/

cp -R dist/* $TARGET_DIR/
cp nginx.conf $TARGET_DIR/
cp manifest-dev.yml $TARGET_DIR/
cp manifest-test.yml $TARGET_DIR/
cp manifest-uat.yml $TARGET_DIR/
cp manifest-prod.yml $TARGET_DIR/
