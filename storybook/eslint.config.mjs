import * as mdx from 'eslint-plugin-mdx'
import storybook from 'eslint-plugin-storybook'

/* Imported and spread by the root `eslint.config.mjs`.
 * MDX lives here because every `.mdx` file in the repo is a Storybook doc — the plugin's
 * default globs determine the effective scope.
 */
export default [
  // MDX
  {
    name: 'amsterdam-design-system/mdx',
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    name: 'amsterdam-design-system/mdx-flat-code-block',
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'react/jsx-no-undef': 'off',
      'react/prop-types': 'off',
    },
  },

  // Storybook
  storybook.configs['flat/recommended'],
]
