#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run docs:build

# copy build output directory to /docs
rm -R docs
mkdir docs
cp -R blog/.vuepress/dist/ docs/

# git init
git add -A
git commit -m 'deploy nuxt-typescript-decorators'

# push to github
git push -u origin master
