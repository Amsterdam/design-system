import * as mdx from 'eslint-plugin-mdx'

/* Imported and spread by the root `eslint.config.mjs`.
 * Every `.mdx` file in the repo is a Storybook doc — the plugin's default globs determine the
 * effective scope. JavaScript/TypeScript and Storybook rules live in oxlint (see `.oxlintrc.json`).
 */
export default [
  // MDX
  {
    ...mdx.flat,
    name: 'amsterdam-design-system/mdx',

    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    name: 'amsterdam-design-system/mdx-flat-code-block',
  },
]
