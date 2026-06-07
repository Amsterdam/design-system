import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

import storybookConfig from './storybook/eslint.config-partial.mjs'

/* ESLint only lints the languages oxlint cannot: JSON, Markdown and MDX.
 * All JavaScript/TypeScript linting (including perfectionist, baseline-js and Storybook rules) is
 * handled by oxlint via its native plugins and the jsPlugins loader — see `.oxlintrc.json`.
 */
export default defineConfig([
  {
    name: 'amsterdam-design-system/global-ignores',

    ignores: ['**/vendor/', '**/build/', '**/coverage/', '**/dist/', '**/tmp/', '**/AGENTS.md'],
  },
  {
    name: 'amsterdam-design-system/linter-options',

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  // JSON
  {
    ...json.configs.recommended,
    name: 'amsterdam-design-system/json',

    files: ['**/*.json'],
    language: 'json/json',
  },

  // Markdown
  {
    name: 'amsterdam-design-system/markdown',

    files: ['**/*.md'],
    ignores: ['CHANGELOG.md'],
    plugins: { markdown },
    processor: 'markdown/markdown',
    rules: {
      ...markdown.configs.recommended.rules,
      'markdown/line-length': 'off',
      'markdown/no-inline-html': 'off',
    },
  },

  // MDX (owned by storybook/eslint.config-partial.mjs)
  ...storybookConfig,
])
