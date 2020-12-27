(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{468:function(t,a,e){"use strict";e.r(a);var s=e(8),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("There may be times in your development process where you might want to run your code locally just like you would run it in production. Most of us run different operating systems for development than where we run our production code. Docker makes it easy for you to spin up an enviroment that mimics your production enviroment locally.")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("We'll start off by creating a new project. This is easy to do by using the npm init command.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -f\n")])])]),e("p",[t._v("Lets go ahead and create a source directory and create a simple index.html file.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" src\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" index.html\n")])])]),e("p",[t._v("Once you have created the index.html file, add the following html code for a very simple example.")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Node-Docker-nginx"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello Node Docker nginx example"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"create-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-dockerfile"}},[t._v("#")]),t._v(" Create Dockerfile")]),t._v(" "),e("p",[t._v("Now you will create your Dockerfile.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" Dockerfile\n")])])]),e("p",[t._v("We'll leverage the existing nginx docker container from "),e("a",{attrs:{href:"https://hub.docker.com/_/nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Builds a Docker to deliver src/\nFROM nginx:latest\nCOPY src/ /usr/share/nginx/html\n")])])]),e("h2",{attrs:{id:"create-image-and-container"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-image-and-container"}},[t._v("#")]),t._v(" Create Image and Container")]),t._v(" "),e("p",[t._v("We'll use your Dockerfile to create the nginx docker image.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker build -t node-docker-nginx:latest "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),e("p",[t._v("Now the docker image should be created. To verify, run the following docker command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker images\n")])])]),e("p",[t._v("You should see your newly created docker image like this.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nnode-docker-nginx        latest              4a3eea93df52        5 seconds ago       181.5 MB\n")])])]),e("p",[t._v("Next, you'll create the docker container by running the following docker command. This will run nginx on port 8080 instead of the default port of 80.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker run --name node-docker-nginx -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":80 node-docker-nginx\n")])])]),e("p",[t._v("List the containers that you have created.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -a\n")])])]),e("p",[t._v("You should see your new docker container like this.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('CONTAINER ID    IMAGE                COMMAND                  ...   PORTS                           NAMES\n38be8f13dcd9    node-docker-nginx    "nginx -g \'daemon off"   ...   443/tcp, 0.0.0.0:8080->80/tcp   node-docker-nginx\n')])])]),e("h2",{attrs:{id:"test-it-out"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-it-out"}},[t._v("#")]),t._v(" Test It Out")]),t._v(" "),e("p",[t._v("Now all you have to do is start your container.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker start node-docker-nginx\n")])])]),e("p",[t._v("Go to your "),e("code",[t._v("index.html")]),t._v(" page by going "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);