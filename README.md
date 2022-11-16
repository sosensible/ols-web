# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

---
Notes:
* Make sure vue-vimeo-player works with latest vs 1.1.2 next or later version.

## Adding in Bootstrap

&gt; yarn add bootstrap@5.2.2

? &gt; yarn add @popperjs/core
&gt; yarn add -D sass

setup: [Project Structure + Configure Vite](https://getbootstrap.com/docs/5.2/getting-started/vite/#project-structure)

## CodeSpaces.io Resources

* [Environment](https://codesandbox.io/docs/learn/repositories/env)
* [Environment Variables](https://codesandbox.io/docs/learn/repositories/secrets)
* [Repo Previews](https://codesandbox.io/docs/learn/repositories/preview)
* [Available Dev Tools](https://codesandbox.io/docs/learn/repositories/devtools)
* [CLI and Modules](https://codesandbox.io/docs/tutorial/cli-tool#6-move-it-under-setuptasks)
* [Docker](https://codesandbox.io/docs/tutorial/getting-started-with-docker)
* [Data Migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations)

and 

* [Supabase JS](https://supabase.com/docs/reference/javascript)
* [Pinia ORM ?](https://pinia-orm.codedredd.de/guide/getting-started/quick-start)