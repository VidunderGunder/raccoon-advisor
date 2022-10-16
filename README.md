# Starter

Install [Node.js](https://nodejs.org/en/download/) (between 16.10.0 and 17.0.0)

Install [Yarn](https://yarnpkg.com/en/docs/install) (v1.22.19 or higher)

Install dependencies and start development:

```bash
yarn
yarn dev
```

## Docs

Before the Storybook is ready for deployment, you can view the docs locally by starting development and visiting http://localhost:6006/ (should happen automagically with the script).

> Why aren't the docs available in the README?

It's very interactive and running everything live locally, so it's quick and easy to get started.

## TODOs

- [ ] Automatically adjust URLs to work in development both locally and in cloud environments (e.g. GitHub Codespaces and CodeSandbox Projects)
- [ ] Support [styled-components](https://styled-components.com/)' `css`-prop when using [SWC](https://swc.rs/) with [StoryBook](https://storybook.js.org/)
  - The `css`-prop is currently the only thing holding us back from using [SWC with StoryBook](https://nextjs.org/docs/advanced-features/compiler#styled-components)
  - StoryBook supports the `css`-prop now, but uses Babel instead of SWC:
    ```js
    module.exports = {
      <!-- ... -->
      babel: {
        plugins: [["babel-plugin-styled-components", styledConfig]],
      }
      <!-- ... -->
    };
    ```
  - Preferably make [Next.js' styled-components support](https://nextjs.org/docs/advanced-features/compiler#styled-components) work with [SWC and StoryBook](https://nextjs.org/docs/advanced-features/compiler#styled-components)
  - We're using a [Next-addon for StoryBook](https://storybook.js.org/addons/storybook-addon-next/), but it's seemingly not supporting SWC
  - Why even use SWC?
    - It's [many times faster than Babel](https://swc.rs/)
    - [Vercel's reasoning for using SWC for Next.js](https://nextjs.org/docs/advanced-features/compiler#why-swc)
    - Same behavior between StoryBook and Next.js
- [ ] Address `yarn dev` warnings
- [ ] Improve [MDX](https://mdxjs.com/) integration
  - Get `css`-prop to work
  - Better type checking
  - Better IntelliSense
  - Markdown tooling feature parity for VSCode
- [ ] More intuitive way of using TypeGraphQL-classes in the client
  - For example: `SomeExampleModel.prototype` will return `undefined`, even though TypeScript promises a result
  - A shim-fix has been implemented (see `prisma/browser-shim.ts` and webpack-configs), but it only stops the build from crashing. The user can still try to get data from the server, but the types are wrong.
