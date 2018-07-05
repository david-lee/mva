#!/bin/bash

#fly --target manulife-ci login --concourse-url https://concourse.platform.manulife.io --insecure --team-name VITALITY

fly -t manulife-ci set-pipeline -c pipeline.yml -p MVA-webui-dev-ci -n -l ../concourse-credentials-dev.yml

fly -t manulife-ci unpause-pipeline -p MVA-webui-dev-ci
