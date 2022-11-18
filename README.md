<!-- @license CC0-1.0 -->

# Example Design System

This design system is based on the NL Design System architecture.

For more info about the NL Design System and learn about things happening in our open source community, join the `#nl-design-system` Slack via [praatmee.codefor.nl](https://praatmee.codefor.nl)!

---

✂ In your own repository: **remove the "Getting started" section below!**

---

## Getting started with the NL Design System template

This template contains all relevant linting rules used by the NL Design System repository.
It also contains the Storybook setup with two example components and two example general documentation page.
Feel free to add or modify those documentation pages and use the example components as an initial template to create your own storybook components.

### Customize organization settings

1. Choose a prefix for your organisation. For example: the main NL Design System uses `nl-`, The Hague uses `denhaag-`, and you can choose something unique for you to use.
2. Modify `.stylelintrc.json` by replacing the prefix `example` with the prefix you have chosen, in the following rules: `custom-property-pattern`, `selector-class-pattern` and `keyframes-name-pattern`.
3. Choose and register an npm organisation on [npmjs.com](https://www.npmjs.com/org/create), if you haven't already. This is very important to keep your project secure. The core NL Design System uses `@nl-design-system/`, and you can choose something for yourself. This prevents others from adding their code to your teams codebase.
4. Modify the `package.json` and `package-lock.json` files to use your npm organisation scope.
5. Modify `.npmpackagejsonlintrc.json` to require your organisation scope in package names, by configuring the `valid-values-name-scope` property.

### Change the theme of your storybook to match your brand

In `.storybook/customTheme.js` the theme used by NL Design System can be found. By changing those properties one can style the storybook to match ones brand. Checkout [https://storybook.js.org/docs/react/configure/theming](https://storybook.js.org/docs/react/configure/theming) to learn more about all the possible configurations to brand this storybook.

### Adding UX and other documentation without a component implementation

1. In `src/demo-empty-component` an example story of a documentation first (or documentation only) component can be found.
2. Copy this folder
3. Rename to match your component
   - The folder
   - The `x.stories.mdx` to `component-name.stories.mdx`
   - The title of the `Meta` component in `component-name.stories.mdx`
4. Add the UX guidelines in`README.md`
5. Optionally add the component specific accessibility or content guidelines in `docs/accessibility-guidelines` or `docs/content-guidelines`.
6. Optionally add the Figma component in `component-name.stories.mdx` by adding part of the Figma url to the Figma component `<Figma title="Link" url="file/..." />`

### Adding design tokens

Add global tokens to `/brand.css`. Add tags to make them appear in the Storybook Design token addon. For example `@tokens Colors` and `@presenter Color`. See [https://storybook.js.org/addons/@tommyem/storybook-design-token](https://storybook.js.org/addons/@tommyem/storybook-design-token) for more details.

### Adding the component implementation to storybook

In `src/demo-link-component` an example story and web-component can be found. All steps below are represented in this `demo-link.stories.mdx` example.
To add a component implementation to storybook, we use the `<component-name>-stories.mdx` which already contains the documentation pages or create one with placeholder documentation by following step 1-3 from the `Adding UX and other documentation without a component implementation` chapter.

- Create a component template function that takes variable arguments. If an argument might contain childnodes, use the `sanatize` package to prevent unsafe content and injections. Place this `Template` function above the `Meta` component
- Declare a story for each component variation and bind the template
- Declare the possible inputs, with types and a description in the `argTypes` property of the `Meta` component in `stories.mdx`.
- Add an `Argstable` component in your `stories.mdx`
- Optionally add a different `status` to the `Meta` parameters. The options and colors can be found in `.storybook/preview.js`

---

✂ In your own repository: **remove the "Getting started" section above!**

---

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md). Documentation is licensed as [Creative Commons Zero 1.0 Universal (`CC0-1.0`)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
