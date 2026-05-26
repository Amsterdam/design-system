import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

/* The unscoped React ruleset. Other packages that ship React code apply it to their own globs. */
export const reactPreset = {
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    'react/prefer-read-only-props': 'warn',
    'react/prop-types': 'off', // TypeScript types replace prop-types
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
}

export default [
  // React
  {
    name: 'amsterdam-design-system/react',

    extends: [reactPreset],
    files: ['packages/react/**/*.{js,jsx,ts,tsx}'],
  },

  // Logos in React
  {
    name: 'amsterdam-design-system/generated-logos',

    files: ['packages/react/src/Logo/brands/*Logo.tsx'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'expression', prev: 'const' },
        { blankLine: 'always', next: 'export', prev: 'expression' },
      ],
    },
  },
]
