import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

/* `reactPreset` is the un-scoped React rule set. Other packages that ship React code
 * (Storybook, the React-icons package) import it and apply it to their own globs.
 */
export const reactPreset = {
  plugins: { react, 'react-hooks': reactHooks },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
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
