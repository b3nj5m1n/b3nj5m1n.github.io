#!/bin/sh

/bin/bash "./update-modules.sh"

path="$PWD"

modules_path="src/modules"

modules_3style_path="3-style-trainer"
bash -c "cd $path/$modules_path/$modules_3style_path && yarn && yarn parcel build src/index.html --public-url ./ && cp -rf * ../../projects/3-style-trainer/"

