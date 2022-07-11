# Find

This is the public monorepo for Find, a privacy-first, open-source, ad-free search service.

## Content

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `findwebsite`: a [Next.js](https://nextjs.org) website accessible at https://findlabs.org.
- `webapp`: a [Next.js](https://nextjs.org) app accessible at https://find.new.
- `ui`: a stub React component library
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command once you've read the [Running Supabase](#running-supabase) section:

```
cd find
yarn run dev
```

### Running Supabase

The Supabase CLI is used to run Supabase locally.

**Pre-reqs include:**

- run `yarn install` in the root of the monorepo
- make sure you have the Supabase CLI installed on your macheine
- make sure you have docker installed and the daemon running

At that point, when you run `yarn run dev`, Turborepo will run the `dev` command in the /apps/supabase directory, which will then run the `supabase` command in the /apps directory. This is important, because the Supabase CLI expects to run above the `supabase` directory.

It is recommended that you open a terminal specifically for running supabase cli commands, as you will need to `cd apps` in order to use the supabase cli.


