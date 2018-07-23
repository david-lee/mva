#!/bin/bash

#fly --target manulife-ci login --concourse-url https://concourse.sys.use.cf.manulife.com --insecure
#fly --target manulife-ci login --team-name VITALITY --concourse-url https://concourse.platform.manulife.io --insecure

fly -t manulife-ci set-pipeline -c pipeline.yml -p MVA-webui-ci -n -l config.yml

fly -t manulife-ci unpause-pipeline -p MVA-webui-ci
