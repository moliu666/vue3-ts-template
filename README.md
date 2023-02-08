# Vite + Vue 3 + Typescript Starter

Simple and basic Vue3 engineering template

+++

## Features:

+ ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [PNPM](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) \- fast and faster !
+ 🗒  TypeScript, of course
+ 🔍 ESLint - scripts linter
+ 🔡 Stylelint - styles linter
+ 🔡 Prettier - formatter
+ ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)
+ ☁️ Husky + lint-staged - pre-commit git hook set up for formatting
+ 📦 [Components auto importing](https://github.com/antfu/vitesse/blob/main/src/components)
+ 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly



## Clone to local

+++

If you prefer to do it manually with the cleaner git history

```shell
git clone https://github.com/moliu666/vue3-ts-template.git
cd vue3-ts-template
pnpm i
```



## Checklist

+++

When you use this template, update the following:

- Remove `.git` directory and run `git init` to clean up the history
- Change the name in `package.json` - it will be the name of the IIFE bundle global variable and bundle files name (`.cjs`, `.mjs`, `.iife.js`, `d.ts`)
- Change the author name in `LICENSE`
- Clean up the `README` and `CHANGELOG` files

End, enjoy :)



## Usage

+++

The starter contains the following scripts:

+ `dev`- start dev server, aliases: `vite dev`, `vite serve`
+ `build`- build for production
+ `preview`- locally preview production build
+ `lint:js`- lint `.ts` and `.js`and`.vue` files with eslint
+ `lint:style`-  lint `.css` and `.postcss` files with stylelint
+ `lint`- run `lint:js` and  `lint:style`
+ `lint:fix`- format all file
+ `test`- starts vitest and runs all tests
+ `coverage` - starts vitest and run all tests with code coverage report

