#!/bin/sh

#npm install karma


#!/bin/sh

function build_local {
    karma start --single-run && \
    play test
}

function build_and_push {
    git pull --rebase && \
    build_local && \
    git push origin master
}

function deploy {
    build_local && \
    git push heroku master
}

function main {
  	case $1 in
		d) deploy ;;
		p) build_and_push ;;
		b) build_local ;;
		*) build_local ;;
	esac
}

main $@