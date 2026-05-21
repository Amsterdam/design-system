import { reactPreset } from '../../packages/react/eslint.config.mjs'

/* Imported and spread by the root `eslint.config.mjs`. */
export default [
  {
    name: 'amsterdam-design-system/react-icons',
    files: ['packages-proprietary/react-icons/**/*.{js,jsx,ts,tsx}'],
    extends: [reactPreset],
  },
]
