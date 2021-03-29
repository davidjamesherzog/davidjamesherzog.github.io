(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{472:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("I recently wanted to include the Bulma CSS library into my Angular project. I didn't just want to include the library in my project, I wanted to be able to include just pieces of the library and maybe override a thing or two. This post will explain how to include Bulma into your Angular projects using SASS.")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("p",[t._v("You'll need to install "),s("code",[t._v("angular-cli")]),t._v(" first so that you can create an Angular project.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g angular-cli\n")])])]),s("p",[t._v("Creating a new anuglar project is easy with "),s("code",[t._v("angular-cli")]),t._v(". Let'g go ahead and use the "),s("code",[t._v("ng new")]),t._v(" command to create a new angular project. We will specify that we want to use "),s("code",[t._v("SASS")]),t._v(" for our CSS.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ng new angular-bulma --style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("scss\n")])])]),s("h2",{attrs:{id:"configuring-sass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-sass"}},[t._v("#")]),t._v(" Configuring SASS")]),t._v(" "),s("p",[t._v("I really don't like keeping my sass files at the root of my "),s("code",[t._v("src")]),t._v(" directory. So we'll create a sass directory to hold our "),s("code",[t._v("sass")]),t._v(" files and then move our "),s("code",[t._v("styles.scss")]),t._v(" into it.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" src\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" sass\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" styles.scss sass\n")])])]),s("p",[t._v("Now that we have moved the location of our main sass file, we'll have to update our "),s("code",[t._v("angular-cli.json")]),t._v(" configuration file to reflect that change. Search for "),s("code",[t._v("styles")]),t._v(" and replace it with the following:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"styles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sass/styles.scss"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"setting-up-bulma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-bulma"}},[t._v("#")]),t._v(" Setting Up Bulma")]),t._v(" "),s("p",[t._v("Now the fun begins. Lets go ahead and install Bulma")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bulma --save\n")])])]),s("p",[t._v("You will be able to find Bulma sass files under "),s("code",[t._v("/node_modules/bulma/sass")]),t._v(". We'll first import the "),s("code",[t._v("initial-variables")]),t._v(" sass file. After that we will import the main Bulma sass file.")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~bulma/sass/utilities/initial-variables"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~bulma/bulma"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("We'll add a button to our page. Find the "),s("code",[t._v("app.component.html")]),t._v(" file and add a button.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button is-link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Success"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"test-it-out"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-it-out"}},[t._v("#")]),t._v(" Test It Out")]),t._v(" "),s("p",[t._v("Let's test it out. Start your app.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),s("p",[t._v("Go to your page by going "),s("a",{attrs:{href:"http://localhost:4200/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(". You should see Bulma working now with a nice stylized button.")]),t._v(" "),s("h2",{attrs:{id:"override-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-styles"}},[t._v("#")]),t._v(" Override Styles")]),t._v(" "),s("p",[t._v("Lastly, we are going to override one of Bulma's color variables. Let's go ahead and add to our "),s("code",[t._v("styles.scss")]),t._v(" file. Before the Bulma import, lets add a color override and set the primary color to red.")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Customization")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$blue")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hsl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("217"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 53%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$primary")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$red")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Refresh the page and now you should see more of a grey color for the button than the default blue color.")])])}),[],!1,null,null,null);a.default=n.exports}}]);