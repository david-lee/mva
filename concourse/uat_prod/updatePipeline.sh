#!/bin/bash

#fly --target manulife-ci login --team-name illustrations --concourse-url https://concourse.sys.use.cf.manulife.com --insecure

fly -t manulife-ci set-pipeline -c pipeline.yml -p mvawebui-prod-ci -n -l ../concourse-credentials-dev.yml

fly -t manulife-ci unpause-pipeline -p mvawebui-prod-ci
