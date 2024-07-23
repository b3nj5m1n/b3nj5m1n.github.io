#!/usr/bin/env sh

/usr/bin/env sh "./update-modules.sh"

path="$PWD"

modules_path="src/modules"

modules_3style_path="3-style-trainer"
bash -c "cd $path/$modules_path/$modules_3style_path && yarn && yarn parcel build src/index.html --public-url ./ && rm -rf ../../projects/3-style-trainer/ && mkdir -p ../../projects/3-style-trainer/ && cp -r dist/* ../../projects/3-style-trainer/"

