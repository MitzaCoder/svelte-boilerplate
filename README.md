# Svelte boilerplate

This boilerplate comes with configuration for [Typescript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/), IE11 compatibility (with [Babel](https://babeljs.io/)) and lazy loaded modules.

[Here](https://mihaisaru.com/posts/svelte-typescript-tailwindcss-ie11-starter) you can find a step by step tutorial on how to build this boilerplate.

To create a new project based on this boilerplate using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit MitzaCoder/svelte-boilerplate svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).
