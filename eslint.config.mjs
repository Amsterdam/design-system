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
    languageOptions: {
      globals: { ...globals.browser, ...globals.es6, ...globals.jest },
    },
  },
  ...compat.extends('eslint-config-prettier'),

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    ...json.configs.recommended,
  },

  // Markdown
  {
    plugins: { markdown },
  },
  {
    files: ['**/*.md'],
    ignores: ['dist/**/*.md', 'CHANGELOG.md'],
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
  ...compat.extends('plugin:mdx/overrides').map((config) => ({
    ...config,
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      'react/jsx-no-undef': 'off',
    },
  })),

  // JavaScript, TypeScript & React
  ...compat.extends('plugin:react/recommended', './.eslintrc.ts.json', './.eslintrc.react.json').map(() => ({
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
      react: { version: '18' },
    },
  })),
)
