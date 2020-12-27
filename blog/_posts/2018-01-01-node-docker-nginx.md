---
title: Docker, Node and Nginx
date: 2018-01-01
tags: 
  - docker
  - node
  - nginx
author: Dave
featuredimg: /assets/img/docker.png
summary: Creating a docker container with node.js and nginx
---

There may be times in your development process where you might want to run your code locally just like you would run it in production. Most of us run different operating systems for development than where we run our production code. Docker makes it easy for you to spin up an enviroment that mimics your production enviroment locally.

## Getting Started
We'll start off by creating a new project. This is easy to do by using the npm init command.

```bash
$ npm init -f
```

Lets go ahead and create a source directory and create a simple index.html file.

```bash
$ mkdir src
$ cd src
$ touch index.html
```

Once you have created the index.html file, add the following html code for a very simple example.

```html
<html>
  <head>
    <title>Node-Docker-nginx</title>
  </head>
  
  <body>
    <p>Hello Node Docker nginx example</p>
  <body>
</html>
```

## Create Dockerfile
Now you will create your Dockerfile.

```bash
$ touch Dockerfile
```

We'll leverage the existing nginx docker container from [here](https://hub.docker.com/_/nginx/).

```
# Builds a Docker to deliver src/
FROM nginx:latest
COPY src/ /usr/share/nginx/html
```

## Create Image and Container
We'll use your Dockerfile to create the nginx docker image.

```bash
$ docker build -t node-docker-nginx:latest .
```

Now the docker image should be created. To verify, run the following docker command:

```bash
$ docker images
```

You should see your newly created docker image like this.

```
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
node-docker-nginx        latest              4a3eea93df52        5 seconds ago       181.5 MB
```

Next, you'll create the docker container by running the following docker command. This will run nginx on port 8080 instead of the default port of 80.

```bash
$ docker run --name node-docker-nginx -d -p 8080:80 node-docker-nginx
```

List the containers that you have created.

```bash
$ docker ps -a
```

You should see your new docker container like this.

```
CONTAINER ID    IMAGE                COMMAND                  ...   PORTS                           NAMES
38be8f13dcd9    node-docker-nginx    "nginx -g 'daemon off"   ...   443/tcp, 0.0.0.0:8080->80/tcp   node-docker-nginx
```

## Test It Out
Now all you have to do is start your container.

```bash
$ docker start node-docker-nginx
```

Go to your `index.html` page by going [here](http://localhost:8080/).