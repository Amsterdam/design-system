import _import from 'eslint-plugin-import'
import { fileURLToPath } from 'node:url'
import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import globals from 'globals'
import jest from 'eslint-plugin-jest'
import js from '@eslint/js'
import path from 'node:path'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
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
      globals: {
        ...globals.browser,
        ...Object.fromEntries(Object.entries(globals.node).map(([key]) => [key, 'off'])),
        ...globals.jest,
      },

      ecmaVersion: 2018,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...compat.extends('plugin:json/recommended').map((config) => ({
    ...config,
    files: ['**/*.json'],
  })),
  ...compat
    .extends(
      'plugin:react/recommended',
      'eslint-config-prettier',
      './.eslintrc.ts.json',
      './.eslintrc.react.json',
      'plugin:mdx/overrides',
    )
    .map((config) => ({
      ...config,
      files: ['**/*.mdx'],
    })),
  {
    files: ['**/*.mdx'],

    plugins: {
      import: fixupPluginRules(_import),
    },
  },
  ...compat
    .extends('plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.ts.json', './.eslintrc.react.json')
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx'],
    })),
  {
    files: ['**/*.js', '**/*.jsx'],

    plugins: {
      import: fixupPluginRules(_import),
    },
  },
  ...compat
    .extends('plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.ts.json', './.eslintrc.react.json')
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
      jest,
    },

    languageOptions: {
      parser: tsParser,
    },
  },
  ...compat
    .extends('plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.ts.json', './.eslintrc.react.json')
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
    })),
  {
    files: ['**/*.ts', '**/*.tsx'],

    plugins: {
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.test.json'],
      },
    },
  },
]
