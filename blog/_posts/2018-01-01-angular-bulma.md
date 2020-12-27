---
title: Angular and Bulma
date: 2018-01-02
tags: 
  - angular
  - bulma
author: Dave
featuredimg: /assets/img/angular.png
summary: Adding Bulma to an Angular project
---

I recently wanted to include the Bulma CSS library into my Angular project. I didn't just want to include the library in my project, I wanted to be able to include just pieces of the library and maybe override a thing or two. This post will explain how to include Bulma into your Angular projects using SASS.

## Getting Started
You'll need to install `angular-cli` first so that you can create an Angular project.

```bash
$ npm install -g angular-cli
```

Creating a new anuglar project is easy with `angular-cli`. Let'g go ahead and use the `ng new` command to create a new angular project. We will specify that we want to use `SASS` for our CSS.

```bash
$ ng new angular-bulma --style=scss
```

## Configuring SASS
I really don't like keeping my sass files at the root of my `src` directory. So we'll create a sass directory to hold our `sass` files and then move our `styles.scss` into it.

```bash
$ cd src
$ mkdir sass
$ mv styles.scss sass
```

Now that we have moved the location of our main sass file, we'll have to update our `angular-cli.json` configuration file to reflect that change. Search for `styles` and replace it with the following:

```json
"styles": [
  "sass/styles.scss"
],
```

## Setting Up Bulma
Now the fun begins. Lets go ahead and install Bulma

```bash
$ npm install bulma --save
```

You will be able to find Bulma sass files under `/node_modules/bulma/sass`. We'll first import the `initial-variables` sass file. After that we will import the main Bulma sass file.

```scss
@import "~bulma/sass/utilities/initial-variables";

@import "~bulma/bulma";
```

We'll add a button to our page. Find the `app.component.html` file and add a button.

```html
<a class="button is-link">Success</a>
```

## Test It Out
Let's test it out. Start your app.

```bash
$ npm start
```

Go to your page by going [here](http://localhost:4200/). You should see Bulma working now with a nice stylized button.

## Override Styles
Lastly, we are going to override one of Bulma's color variables. Let's go ahead and add to our `styles.scss` file. Before the Bulma import, lets add a color override and set the primary color to red.

```scss
// Customization
$blue:  hsl(217, 10%, 53%);
$primary: $red;
```

Refresh the page and now you should see more of a grey color for the button than the default blue color.