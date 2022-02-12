#!/bin/bash

# Using SAM CLI to build 

function installsamcli () {
  if
    [ `which sam` ];then echo "INFO: SAMCLI INSTALLED - $(sam --version)"
  else
    echo "INFO: INSTALLING SAMCLI"
    # brew tap aws/tap
    # brew install aws-sam-cli
    # sam --version
  fi
}

function samdeploy () {
  sam build
  sam deploy --profile 
}

installsamcli
samdeploy
