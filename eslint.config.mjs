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

import reactIconsConfig from './packages-proprietary/react-icons/eslint.config.mjs'
import reactConfig from './packages/react/eslint.config.mjs'
import storybookConfig from './storybook/eslint.config.mjs'

const jsAndTsFiles = ['**/*.{js,jsx,ts,tsx}']
const testFiles = ['**/*.{test,spec}.{js,jsx,ts,tsx}']

const perfectionistCustomSizesGroups = {
  customGroups: [
    {
      groupName: 'x-small',
      selector: 'property',
      elementNamePattern: '^(x-small|xs)$',
    },
    {
      groupName: 'small',
      selector: 'property',
      elementNamePattern: '^(small|s|narrow|phone|min|start)$',
    },
    {
      groupName: 'medium',
      selector: 'property',
      elementNamePattern: '^(medium|m|tablet)$',
    },
    {
      groupName: 'large',
      selector: 'property',
      elementNamePattern: '^(large|l|wide|desktop|max|end)$',
    },
    {
      groupName: 'x-large',
      selector: 'property',
      elementNamePattern: '^(x-large|xl)$',
    },
    {
      groupName: '2x-large',
      selector: 'property',
      elementNamePattern: '^(2x-large|2xl)$',
    },
  ],
  groups: ['x-small', 'small', 'medium', 'large', 'x-large', '2x-large'],
  useConfigurationIf: {
    allNamesMatchPattern:
      '^(x-small|xs|small|s|narrow|phone|min|start|medium|m|tablet|large|l|wide|desktop|max|x-large|xl|2x-large|2xl|end)$',
  },
}

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
      ...tsPlugin.configs.recommended.rules, // Spread (not extended) because the preset itself uses `extends`

      // TypeScript
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': 'error',

      // ESLint — core rules disabled in favour of the TS-aware variants above
      'no-invalid-this': 'off',
      'no-loop-func': 'off',
      'no-unused-expressions': 'off',

      // ESLint
      'array-callback-return': [
        'error',
        {
          checkForEach: false,
        },
      ],
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      eqeqeq: 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-eval': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inner-declarations': 'error',
      'no-lone-blocks': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'prefer-regex-literals': 'error',
      radix: 'error',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      yoda: 'error',

      // Baseline JS
      'baseline-js/use-baseline': [
        'error',
        { available: 'widely', includeWebApis: { preset: 'type-aware' }, includeJsBuiltins: { preset: 'type-aware' } },
      ],

      // Import
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/newline-after-import': 'error',
      'import-x/no-named-as-default': 'warn',
      'import-x/no-cycle': 'warn',

      // Perfectionist
      'perfectionist/sort-intersection-types': [
        'error',
        {
          /* Storybook uses the first type definition it finds to generate controls.
           * For example, if it finds the native HTML attribute `color` before a custom `color` prop, it will use that.
           * This results in incorrect controls.
           * Because we usually define our props in a type object, this rule will often prevent that issue. */
          groups: ['object', 'named'],
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-object-types': ['error', perfectionistCustomSizesGroups],
      'perfectionist/sort-objects': [
        'error',
        perfectionistCustomSizesGroups,
        {
          customGroups: [
            {
              groupName: 'title',
              selector: 'property',
              elementNamePattern: '^title$',
            },
            {
              groupName: 'component',
              selector: 'property',
              elementNamePattern: '^component$',
            },
          ],
          groups: ['title', 'component'],
        },
      ],
      'perfectionist/sort-modules': 'off', // This impacts readability in a negative way. We want to decide the order of modules ourselves.
      'perfectionist/sort-union-types': 'off', // This causes more issues than it solves
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
