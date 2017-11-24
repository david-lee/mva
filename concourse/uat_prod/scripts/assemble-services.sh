#!/bin/bash
set -o errexit
set -o xtrace

set +x
cf login -a $PCF_API -u $PCF_USER -p $PCF_PASSWORD -o $PCF_ORG -s $PCF_SPACE --skip-ssl-validation
set -x