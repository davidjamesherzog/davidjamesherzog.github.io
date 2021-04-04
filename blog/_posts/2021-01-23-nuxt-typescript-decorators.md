---
title: Nuxt.js with Typescript and Decorators
date: 2021-01-23
tags: 
  - nuxt.js
  - typescript
  - decorators
author: Dave
featuredimg: /assets/img/nuxt.png
summary: Creating a Nuxt.js project with Typescript and Decorators
meta:
  - name: description
    content: Creating a Nuxt.js project with Typescript and Decorators
  - name: keywords
    content: nuxt.js typescript decorators
  - name: og:title
    content: Nuxt.js with Typescript and Decorators
  - name: og:description
    content: Creating a Nuxt.js project with Typescript and Decorators
  - name: og:site_name
    content: davidjamesherzog.github.io
  - name: og:image
    content: https://davidjamesherzog.github.io/assets/img/nuxt.png
  - name: og:type
    content: website
  - name: twitter:title
    content: Nuxt.js with Typescript and Decorators
  - name: twitter:description
    content: Creating a Nuxt.js project with Typescript and Decorators
  - name: twitter:card
    content: summary_large_image
  - name: twitter:image
    content: https://davidjamesherzog.github.io/assets/img/nuxt.png
  - name: twitter:site
    content: '@evadgozreh'
  - name: ttwitter:creator
    content: '@evadgozreh'
---

I recently created a post on creating a Vue.js project with Typescript and decorators.  I decided to follow it up with a similar post using Nuxt.js.  You can find my original post [here](https://davidjamesherzog.github.io/2020/12/30/vue-typescript-decorators/).  Using Typescript and decorators has allowed me to use a class syntax for my components and store files which I feel is easier to read than the normal vue.js javascript syntax.  I'll be going through a step by step process on how to achieve this.  We will be building a counter component that will allow you to increment/decrement a counter.

First we want to start off by creating a new nuxt.js project using `npx`.

```bash
$ npx create-nuxt-app nuxt-typescript-decorators
```

You will be prompted with a series of questions on how to create your project.  You can choose want you want to include in the project but just make sure to select `Typescript`.  Here are the settings I chose.

```bash
create-nuxt-app v3.5.0
✨  Generating Nuxt.js project in nuxt-typescript-decorators
? Project name: nuxt-typescript-decorators
? Programming language: TypeScript
? Package manager: Npm
? UI framework: None
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

Before we start coding, we need to install the libraries that add decorator support to our project.  Here is a list of libraries we will be adding:

- [nuxt-property-decorator](https://github.com/nuxt-community/nuxt-property-decorator) - used to define vue components, props, watches, etc.
- [vuex-class](https://github.com/ktsn/vuex-class) - used to import state, getters, mutations and actions in components
- [vuex-class-component](https://github.com/michaelolof/vuex-class-component) - used to define state, getters, mutations and actions

**Note - In my vue.js example I used `vuex-class-modules` which does not work in the Nuxt.js SSR world.  `vuex-class-component` is the recommended library for Nuxt.js.

```bash
$ npm install nuxt-property-decorator vuex-class vuex-class-component -P
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

If we look at the `index.vue` page, we will import `nuxt-property-decorator` which uses the `Component` decorator to define a Vue component.  Inside the `@Component` decorator, I added the `name` attribute and called this view `Index`.  Also notice how you define a class called `Index` as the default export and extend from `Vue` from the `nuxt-property-decorator` library.

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

Next we are going to setup the Vuex store.  I will create a vuex module so you can see what that looks like using the `vuex-class-component` libary.  This counter example doesn't require a module since it is so simple but most projects increase in complexity pretty quickly where splitting out your stores into modules becomes important.

We will go ahead and create a new store called `counter.ts` under `store`.  You will notice that we just need to export a default class that extends `VueModule` from `vuex-class-modules`.  Inside the class we will create examples of state, getters, mutations and actions. 
- State - Inside the class we will add a private level variable called `_count`.  All state will be defined as class level variables.  
- Getters - I created a getter method called `count` to return the value of the class level variable.  All vuex getters will be defined as javascript getters in the class.  This getter was not necessary for this simple example but I threw it in there so that you can see examples of a getter.
- Mutations - Two mutations are added, one to add to the counter and one to subtract from the counter.  These are just standard methods in the class but need to be decorated with `@mutation`.
- Actions - Two actions are added, one to add to the counter and one to subtract from the counter.  Each method has been defined with `async` since actions are asynchronous functions.  These are just standard methods in the class but need to be decorated with `@action`.

```typescript
// store/counter.ts
import { createModule, mutation, action } from 'vuex-class-component';

const VuexModule = createModule({
  namespaced: 'counter',
  strict: false,
  target: 'nuxt'
});

export default class Counter extends VuexModule {
  // state
  private _count = 0;

  // getters
  get count(): number {
    return this._count;
  }

  // mutations
  @mutation
  public addToCount() {
    this._count++;
  }

  @mutation
  public subtractFromCount() {
    if (this._count > 0) {
      this._count--;
    }
  }

  // actions
  @action
  public async add(): Promise<void> {
    this.addToCount();
  }

  @action
  public async subtract(): Promise<void> {
    this.subtractFromCount();
  }
}
```

We now need to register `counter.ts` as a module using Vuex.  We will create a store and proxy as required by the `vuex-class-component` library using `index.ts` to define the counter module and any subsequent modules we create.

```typescript
// store/index.ts
import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import Counter from './counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(Counter)
  }
});

const createStore = () => {
  return store;
};

const vxm = {
  counter: createProxy(store, Counter)
};

export default createStore;
```

We are now going to create the counter component.  Create a file called `Counter.vue` under `components`.  We'll start by exporting a class level component.  We will use the `@Component` annotation to define the name of the component as `Counter`.  Last, we will create a constant that makes a reference to the `counter` Vuex module using the `vuex-class` library.

```vue
// components/counter.ts
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';

const counterModule = namespace('counter');

@Component({
  name: 'Counter'
})
export default class Counter extends Vue {
  ....
}
</script>
```

We'll add a property to the `Counter` component just as an example of how to use the `@Prop` decorator from the `nuxt-property-decorator` library.  This property serves no real purpose in this example but just gives you an idea on how to use it.  
```typescript
  @Prop({ type: String })
  private msg!: string;
```

To reference the count in the Vuex state, we can use the namespaced decorator from `vuex-class` to create a private level variable in the component.  We can also do the same thing for the getters in Vuex.  In both cases, I specified the name of the property in the Vuex store inside the decorator.  This is only necessary if the name of the Vuex property differs from private level variable you are creating.
```typescript
  @counterModule.State('_count')
  private counter!: number;

  @counterModule.Getter('count')
  private getCounter!: () => number;
```

To reference the actions in the Vuex store, we will use the namespaced decorator again to create private level variables in the component to reference the Vuex actions.
```typescript
  @counterModule.Action
  private add!: () => Promise<void>;

  @counterModule.Action
  private subtract!: () => Promise<void>;
```

Last thing to do in the component is to create the template.  This is pretty straight forward.  We will create an `h1` that displays the passed property, two buttons for adding and subtracting from the counter and two divs to display the counter from the Vuex state and getters.
```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
    </div>
    <div>State: {{ counter }}</div>
    <div>Getter: {{ getCounter }}</div>
  </div>
</template>
```

The final version of `Counter.vue` should look like this.
```vue
// components/Counter.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="add">+</button>
      <button @click="subtract">-</button>
    </div>
    <div>State: {{ counter }}</div>
    <div>Getter: {{ getCounter }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { namespace } from 'vuex-class';

const counterModule = namespace('counter');

@Component({
  name: 'Counter'
})
export default class Counter extends Vue {
  @Prop({ type: String })
  private msg!: string;

  @counterModule.State('_count')
  private counter!: number;

  @counterModule.Getter('count')
  private getCounter!: () => number;

  @counterModule.Action
  private add!: () => Promise<void>;

  @counterModule.Action
  private subtract!: () => Promise<void>;
}
</script>
```

Lastly, we are going to drop in the `Counter` component onto the home page.  We will pass the message of `Counter` to the component.
```vue
// pages/index.vue
<<template>
  <div class="container">
    <div>
      <Counter msg="Counter" />
      <Logo />
      ...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'Index'
})
export default class Index extends Vue {}
</script>
```

All you need to do now is run the project.
```bash
$ npm run dev
```

Now just go to [http://localhost:3000/](http://localhost:3000/).  You can find the example source code [here](https://github.com/davidjamesherzog/nuxt-typescript-decorators).

