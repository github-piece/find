# Find

This is the public monorepo for Find, a privacy-first, open-source, ad-free search service.

## What's inside?

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

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
