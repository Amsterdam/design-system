import * as mdx from 'eslint-plugin-mdx'
import perfectionist from 'eslint-plugin-perfectionist'
import storybook from 'eslint-plugin-storybook'

import { reactPreset } from '../packages/react/eslint.config-partial.mjs'

/* Imported and spread by the root `eslint.config.mjs`.
 * MDX lives here because every `.mdx` file in the repo is a Storybook doc — the plugin's
 * default globs determine the effective scope.
 */
export default [
  // React (Storybook is React code)
  {
    name: 'amsterdam-design-system/storybook-react',

    extends: [reactPreset],
    files: ['storybook/**/*.{js,jsx,ts,tsx}'],
  },

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

    rules: {
      ...mdx.flatCodeBlocks.rules,
      'react/jsx-no-undef': 'off',
      'react/prop-types': 'off',
    },
  },

  // MDX — import sorting (MDX stays in ESLint even after the oxlint migration)
  {
    name: 'amsterdam-design-system/mdx-imports',

    files: ['**/*.mdx'],
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'unknown',
          ],
          newlinesBetween: 1,
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },

  // Storybook (preset is an array of three configs, each with its own `storybook:recommended:*` name)
  ...storybook.configs['flat/recommended'],
]
