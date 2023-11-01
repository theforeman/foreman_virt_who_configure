#!/bin/bash
export PATH=~/bin:${GEM_HOME}/bin:${PATH}

cd $WORKDIR
exec "$@"
