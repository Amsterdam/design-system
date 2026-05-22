import react from 'eslint-plugin-react'

/* The unscoped React ruleset. Other packages that ship React code apply it to their own globs. */
export const reactPreset = {
  plugins: { react },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    ...react.configs.recommended.rules,
    'react/prefer-read-only-props': 'warn',
    'react/prop-types': 'off', // TypeScript types replace prop-types
    'react/react-in-jsx-scope': 'off',
  },
}

export default [
  // React
  {
    name: 'amsterdam-design-system/react',
    files: ['packages/react/**/*.{js,jsx,ts,tsx}'],
    extends: [reactPreset],
  },

  // Logos in React
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
