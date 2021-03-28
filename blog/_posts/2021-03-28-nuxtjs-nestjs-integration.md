---
title: Nuxt.js with Nest.js backend
date: 2021-03-28
tags: 
  - nuxt.js
  - nest.js
  - typescript
author: Dave
featuredimg: /assets/img/nuxt-nest.png
summary: Creating a Nuxt.js project with Nest.js backend
---

I really enjoy working with both Nuxt.js and Nest.js.  I wanted to see if I could get the two working together in one application.  I spent a lot of time trying different ways of getting this to work.  I will go over the solution I came up with and walk you through step by step on how to put the two in one project.  The solution is not perfect, but should work well enough.  I would only recommend this for smaller applications.  If you are working on a larger application, I would recommend that you keep the two separate.

## Create app

First we want to start off by creating a new nuxt.js project using `npx`.

```bash
$ npx create-nuxt-app nuxtjs-nestjs-integration
```

You will be prompted with a series of questions on how to create your project.  You can choose what you want to include in the project but just make sure to select `Typescript`, `Axios`, `ESLint`, `Prettier` and `Jest`.  Here are the settings I chose.

```bash
create-nuxt-app v3.6.0
✨  Generating Nuxt.js project in nuxtjs-nestjs-integration
? Project name: nuxtjs-nestjs-integration
? Programming language: TypeScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

When I created the project, I chose to include eslint and prettier, so I am going to update the `.prettierrc` file to expect semicolons at the end of lines and turn off trailing commas.  Just my own personal preference.

```json
// .prettierrc
{
  "trailingComma": "none",
  "semi": true,
  "arrowParens": "always",
  "singleQuote": true
}
```

I ran the lint command and fixed all the issues from my changes for prettier.

```bash
$ npm run lint
```

## Move app to client directory
We need to separate the nuxt and nest code so we will create a `client` directory and move the following directories inside of it.
- assets
- components 
- layouts
- middleware
- pages
- plugins
- static
- store

Move the `Logo.spec.js` file to `client/components` and remove the `test` directory.  Make sure to update the import inside `Logo.spec.js`.
```js
// client/components/Logo.spec.js
import Logo from './Logo.vue';
```

Next, we will configure the nuxt app to know that all the nuxt directories are in 'client'.  Add the following to `nuxt.config.js`

```js
// nuxt.config.js
srcDir: 'client/'
```

## Nuxt Decorators
Before we start adding in next.js, we need to install the libraries that add decorator support to our nuxt.js project.  Here is a list of libraries we will be adding:

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator) - used to define vue components, props, watches, etc.

If we look at the `index.vue` page, we will import `nuxt-property-decorator` which uses the `Component` decorator to define a Vue component.  Inside the `@Component` decorator, I added the `name` attribute and called this view `Index`.  Also notice how you define a class called `Index` as the default export and extend from `Vue` from the `nuxt-property-decorator` library.

```bash
$ npm install nuxt-property-decorator --save
```

Update `index.vue` as follows:
```vue
// pages/index.vue
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Index'
})
export default class Index extends Vue {}
</script>
```

## Adding Nest.js
To add nest.js, we will first create a shell project that we can copy the base structure from.  Run the following commands to create a bare bones nest.js project.
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

Looking at the generated `package.json`, there are some dependencies that we can install into our project.

```bash
$ npm i --save @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata rxjs
```

Lets do the same for the development dependencies.

```bash
npm i --save-dev @nestjs/cli @nestjs/schematics @nestjs/testing @types/jest @types/supertest supertest
```

Now we need to create a `server` directory and copy over files from nest project in `src` and `test` directories.  
```
server
  --src
    --app.controller.spec.ts
    --app.controller.ts
    --app.module.ts
    --app.service.ts
    --main.ts
  --test
    --app.e2e-spec.ts
    --jest-e2e.json
```

We will also copy `nest-cli.json` over to the root directory of the project.  Update `nest-cli.json` so that it points to the `server` directory.

```json
// nest-cli.json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "server/src",
  "root": "server"
}
```

Nest.js has some extra eslint settings that we need to copy over.  Add the following rules to `.eslintrc.js`.
```js
// .eslintrc.js
rules: {
  'no-useless-constructor': 'off',
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off'
}
```

Trying to create a tsconfig.json that works for both nuxt and nest proves to be to problematic so we are going to create a separate tsconfig for nest.  Create a file named `tsconfig-server.json` in the root directory.  We will set the output directory to be `.nest` which follows the naming convention for the nuxt output directory which is `.nuxt`.
```json
// tsconfig-server.json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./.nest",
    "baseUrl": "./",
    "incremental": true
  }
}
```

Copy over `tsconfig.build.json` and update the path of the server tsconfig file.
```json
// tsconfig.build.json
{
  "extends": "./tsconfig-server.json",
  "exclude": [
    "node_modules",
    ".nuxt",
    ".nest",
    "client",
    "**/*spec.ts"
  ]
}
```

Lastly, we need to update the `tsconfig.json` file which will be used for the client code to include some types and exclude some directories.
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2018",
    "module": "ESNext",
    "moduleResolution": "Node",
    "lib": [
      "ESNext",
      "ESNext.AsyncIterable",
      "DOM"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "experimentalDecorators": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@nuxt/types",
      "@nuxtjs/axios",
      "@types/node",
      "@types/jest",
      "@types/supertest"
    ]
  },
  "exclude": [
    "node_modules",
    ".nuxt",
    ".nest",
    "server"
  ]
}
```

## Testing
Before we worry about getting the app up and running, lets go ahead and get the nuxt unit tests, nest unit tests and nest e2e tests running.  I first tried to get all the unit tests working together and realized it was more trouble than it was worth so I've separated them out.

We will start by adding two coverage directories to our `.gitignore` file.  I will elaborate more on this shortly.  Also include the build directory for nest.js.

```
// .gitignore
coverage-client
coverage-server

# nest.js build output
.nest
```

### Client tests
To get the nuxt tests working, we need to update `rootDir` and `coverageDirectory` in `jest.config.js`.  The `rootDir` needs to point to the `client` directory and the `coverageDirectory` will point to `coverage-client` so we can separate it from the server coverage report.

```js
// jest.config.js
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  rootDir: 'client',
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  coverageDirectory: '../coverage-client',
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
};
```

Update the `test` npm script to `test:client`.
```json
// package.json
"test:client": "jest"
```

Run the client tests to make sure they work.

```bash
$ npm run test:client
```

### Server Tests
For the nest.js tests, we have to do a little more work.  Create a `jest-server.config.js` file to hold the configuration for the nest.js tests.  Just like the nuxt tests, we need to update `rootDir` and `coverageDirectory` in `jest-server.config.js`.  The `rootDir` needs to point to the `server` directory and the `coverageDirectory` will point to `coverage-server` so we can separate it from the client coverage report.  You also need to specify the `globals` property so you can point to the server tsconfig file.

```js
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig-server.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'server',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.(t|j)s', '!**/*.e2e-spec.(t|j)s'],
  coverageDirectory: '../coverage-server',
  testEnvironment: 'node'
};
```

Now lets add a npm command to run the server tests.
```json
// package.json
"test:server": "jest --config ./jest-server.config.js"
```

Run the server tests to make sure they work.
```bash
$ npm run test:server
```

### Server e2e Tests
For the server e2e tests, we need to configure the e2e jest config to point to the correct tsconfig file.
```json
// server/test/jest-e2e.json
{
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig-server.json"
    }
  },
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
```

Now lets add a npm command to run the server e2e tests.
```json
// package.json
"test:e2e": "jest --config ./server/test/jest-e2e.json"
```

Run the server e2e tests to make sure they work.
```bash
$ npm run test:e2e
```

### All tests
Add a npm command to run all the tests.
```json
// package.json
"test": "npm run test:client && npm run test:server && npm run test:e2e"
```

Run all the tests to make sure they work.
```bash
$ npm run test
```

## Formatting and Linting
This part is pretty trivial.  We need to update the `lint:js` npm script to include the server directory and we need to copy over the `format` npm script from the nest.js application and update it to include the client code.
```json
// package.json
"lint:js": "eslint --ext \".ts,.js,.vue\" --ignore-path .gitignore .",
"lint": "npm run lint:js",
"format": "prettier --write \"server/**/*.ts\" \"client/**/*.(js|ts|vue)\"",
```

Now you can run `lint` and `format` for both the client and server code.
```bash
$ npm run format
$ npm run lint
```

## Development and Production builds
The last thing we have to do is get the application up and running in development and production modes.  This is where it gets a little interesting.  For development mode, we will have to run the client on one port and the server on another port.  I was unable to get the two working together so that the hot code replacement would work with the nest.js code.  During development, I want to be able to make changes to the code and have it redeployed automatically.  For the production build, we will bundle everything up so that everything can run on the same port.

### Development
We will start with updating the nest.js `main.ts` file to define the path (`/api`) and port (`4000`) for development mode.  
```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  await app.listen(4000);
}
bootstrap();
```

Now update the `nuxt.config.js` file to define the default Axios URL for the nest.js API.
```js
// nuxt.config.js
axios: {
  baseURL: 'http://localhost:4000/api'
},
```

Lets go ahead and add the API call to the home page.  We'll add an `asyncData` method call to return the value from the API call and and a `hello` variable to display `Hello World` on the home page.  We use `asyncData` here to make the API call on the server and not the client.  If you chose to use the nuxt application as a SPA, you should use the `mounted` hook here instead.
```js
// client/pages/index.vue
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';

@Component({
  name: 'Index'
})
export default class Index extends Vue {
  private hello!: string;

  async asyncData({ $axios }: Context) {
    let hello;
    try {
      hello = await $axios.$get('/');
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    return {
      hello
    };
  }
}
</script>
```

Output the return value from the API by adding this to the end of the template.
```html
<!-- client/pages/index.vue -->
<div>{{ hello }}</div>
```

Lastly, we will add another npm script to run the nest.js server in development mode.
```json
// package.json
"dev:server": "nest start --debug --watch",
```

Now, for development mode, run the following two npm scripts in two different terminal windows.
```bash
$ npm run dev:server
$ npm run dev
```

Run the app on [http://localhost:3000](http://localhost:3000) and verify that you see `Hello World!` on the home page.

### Production
Now lets get into the production build.  We will need a separate entry point for the nest.js server than the `main.ts` file. Go ahead and create a `nest.ts` file in the `server` directory.  This version is a little different than `main.ts` in that we don't specify the port or global prefix.  That will be configured within the `nuxt.config.js` file.
```js
// server/nest.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default bootstrap;
```

Now lets concentrate on the `nuxt.config.js` file.  We'll use `process.env.NODE_ENV` to determine whether we are building for production or development mode.  We will need to make a few changes here.
- Import the `nest.js` file that will be compiled from the `nest.ts` file we just created.  We'll update the build npm script soon to achieve this.
- In development mode, we will run nest.js on port `4000` and port `3000` in production mode (same as nuxt.js).  Feel free to run on whatever port you want.  
- We will define `serverMiddleware` when we are building in production mode to run the API's.  You can find more about the `serverMiddleware` property [here](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware).
- We'll use async/await to wait for the nest.js API's to be able to bootstrap
```js
// nuxt.config.js
import bootstrap from './.nest/nest.js';

const isDev = process.env.NODE_ENV === 'development';

const config = async () => ({
  srcDir: 'client/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-nestjs-integration',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: isDev ? [] : [{ path: '/api', handler: await bootstrap() }],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: isDev ? 'http://localhost:4000/api' : 'http://localhost:3000/api'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
});

export default config;
```

We just have to update our build npm script to first compile the nest.js code prior to building the nuxt.js code.
```json
// package.json
"build": "nest build && nuxt build"
```

Now, for production mode, run the following npm scripts.
```bash
$ npm run build
$ npm run start
```

Run the app on [http://localhost:3000](http://localhost:3000) and verify that you see `Hello World!` on the home page.

I hope this saves some of you some time trying to figure this out.  You can find the example source code [here](https://github.com/davidjamesherzog/nuxtjs-nestjs-integration).
