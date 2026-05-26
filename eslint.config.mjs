import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vitest from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import baselineJs from 'eslint-plugin-baseline-js'
import importPlugin from 'eslint-plugin-import-x'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

import { baselineRules, coreRules, importRules, perfectionistRules, tsRules } from './eslint.rules.mjs'
import reactIconsConfig from './packages-proprietary/react-icons/eslint.config-partial.mjs'
import reactConfig from './packages/react/eslint.config-partial.mjs'
import storybookConfig from './storybook/eslint.config-partial.mjs'

const jsAndTsFiles = ['**/*.{js,jsx,mjs,ts,tsx}']
const testFiles = ['**/*.{test,spec}.{js,jsx,ts,tsx}']

export default defineConfig([
  // Global
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
  {
    name: 'amsterdam-design-system/language-options',

    files: jsAndTsFiles,
    languageOptions: {
      globals: { ...globals.browser, ...globals.es6, ...globals.node },
    },
  },

  // JavaScript and TypeScript
  {
    name: 'amsterdam-design-system/javascript-typescript',

    extends: [eslint.configs.recommended, perfectionist.configs['recommended-natural']],
    files: jsAndTsFiles,
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'baseline-js': baselineJs,
      'import-x': importPlugin,
    },
    rules: {
      ...tsRules,
      ...coreRules,
      ...baselineRules,
      ...importRules,
      ...perfectionistRules,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
    },
  },

  // Tests
  {
    name: 'amsterdam-design-system/tests',

    extends: [vitest.configs.recommended],
    files: testFiles,
    languageOptions: {
      globals: { ...vitest.environments.env.globals },
    },
  },

  // React (owned by packages/react/eslint.config-partial.mjs)
  ...reactConfig,

  // React-icons (owned by packages-proprietary/react-icons/eslint.config-partial.mjs)
  ...reactIconsConfig,

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

  // MDX and Storybook (owned by storybook/eslint.config-partial.mjs)
  ...storybookConfig,

  // Prettier — must be last so it can override stylistic rules from earlier presets
  {
    name: 'amsterdam-design-system/prettier',
    ...eslintConfigPrettier,
  },
])
