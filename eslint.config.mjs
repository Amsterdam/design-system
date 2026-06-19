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

    ignores: ['**/vendor/', '**/build/', '**/coverage/', '**/dist/', '**/tmp/', '**/AGENTS.md', '**/CHANGELOG.md'],
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

  // Markdown — content linting with the GFM language and the recommended rules.
  ...markdown.configs.recommended.map((config) => ({
    ...config,
    name: 'amsterdam-design-system/markdown',

    language: 'markdown/gfm',
    rules: {
      ...config.rules,
      // Off: false-positives on literal brackets (quote elisions, `[…]`); our docs use inline links.
      'markdown/no-missing-label-refs': 'off',
    },
  })),

  // MDX (owned by storybook/eslint.config-partial.mjs)
  ...storybookConfig,
])
