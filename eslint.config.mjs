import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import baselineJs from 'eslint-plugin-baseline-js'
import importPlugin from 'eslint-plugin-import-x'
import vitest from '@vitest/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import globals from 'globals'

import { baselineRules, coreRules, importRules, perfectionistRules, tsRules } from './eslint.rules.mjs'
import reactIconsConfig from './packages-proprietary/react-icons/eslint.config.mjs'
import reactConfig from './packages/react/eslint.config.mjs'
import storybookConfig from './storybook/eslint.config.mjs'

const jsAndTsFiles = ['**/*.{js,jsx,ts,tsx}']
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
    files: jsAndTsFiles,
    extends: [eslint.configs.recommended, perfectionist.configs['recommended-natural']],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'baseline-js': baselineJs,
      'import-x': importPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: { extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'] },
      },
    },
    rules: {
      ...tsRules,
      ...coreRules,
      ...baselineRules,
      ...importRules,
      ...perfectionistRules,
    },
  },

  // Tests
  {
    name: 'amsterdam-design-system/tests',
    files: testFiles,
    extends: [vitest.configs.recommended],
    languageOptions: {
      globals: { ...vitest.environments.env.globals },
    },
  },

  // React (owned by packages/react/eslint.config.mjs)
  ...reactConfig,

  // React-icons (owned by packages-proprietary/react-icons/eslint.config.mjs)
  ...reactIconsConfig,

  // JSON
  {
    ...json.configs.recommended,
    name: 'amsterdam-design-system/json',
    files: ['**/*.json'],
    ignores: ['**/pnpm-lock.yaml'],
    language: 'json/json',
  },

  // Markdown
  {
    name: 'amsterdam-design-system/markdown',
    files: ['**/*.md'],
    plugins: { markdown },
    ignores: ['CHANGELOG.md'],
    processor: 'markdown/markdown',
    rules: {
      ...markdown.configs.recommended.rules,
      'markdown/line-length': 'off',
      'markdown/no-inline-html': 'off',
    },
  },

  // MDX and Storybook (owned by storybook/eslint.config.mjs)
  ...storybookConfig,

  // Prettier — must be last so it can override stylistic rules from earlier presets
  {
    name: 'amsterdam-design-system/prettier',
    ...eslintConfigPrettier,
  },
])
