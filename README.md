![icon (3)](https://user-images.githubusercontent.com/68179593/185813265-fc001e76-f1e8-42a9-aa1b-b88e99d8eb6f.png)

This is the public monorepo for Find, a privacy-first, open-source, ad-free search service.

## Content

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `find-labs-org`: a [Next.js](https://nextjs.org) website accessible at https://find.world.
- `web-app`: a [Next.js](https://nextjs.org) app accessible at https://find.new.
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

To develop all apps and packages, run the following command:

```
cd find
yarn run dev
```
