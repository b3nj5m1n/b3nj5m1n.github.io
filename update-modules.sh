#!/usr/bin/env sh

git submodule update --recursive --remote

git add .

git commit -m "Update Submodules"
