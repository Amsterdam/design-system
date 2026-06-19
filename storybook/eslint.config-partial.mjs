import * as mdx from 'eslint-plugin-mdx'
import perfectionist from 'eslint-plugin-perfectionist'

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
            ['type-internal', 'value-internal'],
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'unknown',
          ],
          internalPattern: ['^#storybook/', '^#tokens/'],
          newlinesBetween: 1,
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
]
