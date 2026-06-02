import { reactPreset } from '../../packages/react/eslint.config-partial.mjs'

/* Imported and spread by the root `eslint.config.mjs`. */
export default [
  {
    name: 'amsterdam-design-system/react-icons',

    extends: [reactPreset],
    files: ['packages-proprietary/react-icons/**/*.{js,jsx,ts,tsx}'],
  },
]
