import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import baselineJs from 'eslint-plugin-baseline-js'
import importPlugin from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import * as mdx from 'eslint-plugin-mdx'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import tseslint from 'typescript-eslint'

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

export default tseslint.config(
  // Global
  {
    name: 'amsterdam-design-system/global-ignores',
    ignores: ['**/vendor/', '**/build/', '**/coverage/', '**/dist/', '**/tmp/'],
  },
  {
    name: 'amsterdam-design-system/language-options',
    languageOptions: {
      globals: { ...globals.browser, ...globals.es6, ...globals.jest },
    },
  },
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },

  // JavaScript, TypeScript and React
  {
    name: 'amsterdam-design-system/javascript-typescript-react',
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'baseline-js': baselineJs,
      import: importPlugin,
      jest,
      perfectionist,
      react,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
        },
      },
      react: { version: 'detect' },
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      ...perfectionist.configs['recommended-natural'].rules,
      ...react.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,

      // TypeScript
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',

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
      'no-invalid-this': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': 'off', // This is handled by @typescript-eslint/no-unused-vars
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
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/newline-after-import': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-cycle': 'warn',

      // Perfectionist
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

      // React
      'react/react-in-jsx-scope': 'off',
    },
  },

  // JSON
  {
    name: 'amsterdam-design-system/json',
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    ...json.configs.recommended,
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
  storybook.configs['flat/recommended'],
)
