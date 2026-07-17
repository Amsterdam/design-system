import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

import Logo from '../../packages-proprietary/assets/logo/amsterdam.svg'

import '@amsterdam/design-system-assets/font/index.css'
import '../src/_styles/manager.css'

// Storybook labels stories in Title Case, derived from their export names. Show them in
// sentence case to match our heading convention, while keeping component names (the parent
// nodes) in Title Case so they stand out. All-caps acronyms and the Logo stories (Amsterdam
// organisation names) keep their casing.
const toSentenceCase = (label) =>
  label
    .split(' ')
    .map((word, index) => {
      if (word.length > 1 && word === word.toUpperCase()) return word
      return index === 0 ? word : word.toLowerCase()
    })
    .join(' ')

addons.setConfig({
  sidebar: {
    renderLabel: ({ id, name, type }) =>
      type === 'story' && !id.startsWith('components-media-logo--') ? toSentenceCase(name) : name,
  },
  theme: create({
    appBg: '#ffffff',
    appBorderColor: '#e6e6e6',
    appBorderRadius: 0,
    base: 'light',
    brandImage: Logo,
    brandTitle: 'Gemeente Amsterdam',
    colorPrimary: '#004699',
    colorSecondary: '#009dec',
    fontBase: '"Amsterdam Sans", Arial, sans-serif',
    inputBg: '#ffffff',
    inputBorder: '#767676',
    inputBorderRadius: 0,
    inputTextColor: '#202020',
    textColor: '#202020',
    textInverseColor: '#ffffff',
  }),
})
