import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import _import from 'eslint-plugin-import'
import jest from 'eslint-plugin-jest'
import * as mdx from 'eslint-plugin-mdx'
import perfectionist from 'eslint-plugin-perfectionist'
import react from 'eslint-plugin-react'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
})

const perfectionistCommonConfig = {
  customSizesGroups: {
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
  },
  partition: {
    partitionByComment: true,
    partitionByNewLine: true,
  },
}

export default tseslint.config(
  // Global
  {
    name: 'amsterdam-design-system/global-ignores',
    ignores: ['**/vendor/', '**/build/', '**/coverage/', '**/dist/', '**/tmp/', 'packages-proprietary/react-icons'],
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
  ...compat.extends('plugin:react/recommended').map(() => ({
    name: 'amsterdam-design-system/javascript-typescript-react',
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: fixupPluginRules(_import),
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
      ...perfectionist['recommended-natural'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': 'error',
      'array-callback-return': [
        'error',
        {
          checkForEach: false,
        },
      ],
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      'constructor-super': 'error',
      eqeqeq: 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: false,
            order: 'asc',
          },
          groups: [
            ['builtin', 'external'],
            ['internal', 'unknown'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'never',
          warnOnUnassignedImports: false,
        },
      ],
      'no-alert': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-str': 'error',
      'no-new-func': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'perfectionist/sort-enums': [
        'error',
        {
          ...perfectionistCommonConfig.partition,
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          ...perfectionistCommonConfig.partition,
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          ...perfectionistCommonConfig.partition.partitionByNewLine,
        },
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          ...perfectionistCommonConfig.partition,
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          ...perfectionistCommonConfig.customSizesGroups,
          ...perfectionistCommonConfig.partition,
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          ...perfectionistCommonConfig.customSizesGroups,
          ...perfectionistCommonConfig.partition,
        },
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
          ...perfectionistCommonConfig.partition,
        },
      ],
      'prefer-regex-literals': 'error',
      radix: 'error',
      // Start of React rules
      'react/jsx-key': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      // End of React rules
      'require-yield': 'error',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'vars-on-top': 'off',
      yoda: 'error',
    },
  })),

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
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    name: 'amsterdam-design-system/mdx-flat-code-block',
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  storybook.configs['flat/recommended'],
)
