#!/bin/bash

git submodule update --recursive --remote

git add .

git commit -m "Update Submodules"
