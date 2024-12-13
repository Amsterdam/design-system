import _import from 'eslint-plugin-import'
import { fileURLToPath } from 'node:url'
import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import globals from 'globals'
import jest from 'eslint-plugin-jest'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import mdx from 'eslint-plugin-mdx'
import path from 'node:path'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
})

export default tseslint.config(
  // Global
  {
    ignores: [
      '**/node_modules/',
      '**/vendor/',
      '**/build/',
      '**/coverage/',
      '**/dist/',
      '**/tmp/',
      'proprietary/react-icons',
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.es6, ...globals.jest },
    },
  },
  ...compat.extends('eslint-config-prettier'),

  // JavaScript, TypeScript & React
  ...compat.extends('plugin:react/recommended').map(() => ({
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: fixupPluginRules(_import),
      jest,
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
      '@typescript-eslint/no-unused-vars': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-escape': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-with': 'error',
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
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    ...json.configs.recommended,
  },

  // Markdown
  {
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
    ...mdx.flat,
    files: ['**/*.mdx'],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'off',
      'react/jsx-no-undef': 'off',
    },
  },
)
