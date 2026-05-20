import react from 'eslint-plugin-react'

/* Imported and spread by the root `eslint.config.mjs`.
 * Globs stay root-relative because ESLint resolves them relative to the importing config.
 */
export default [
  {
    name: 'amsterdam-design-system/react',
    files: [
      'packages/react/**/*.{js,jsx,ts,tsx}',
      'packages-proprietary/react-icons/**/*.{js,jsx,ts,tsx}',
      'storybook/**/*.{js,jsx,ts,tsx}',
    ],
    plugins: { react },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    name: 'amsterdam-design-system/generated-logos',
    files: ['packages/react/src/Logo/brands/*Logo.tsx'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'const', next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: 'export' },
      ],
    },
  },
]
