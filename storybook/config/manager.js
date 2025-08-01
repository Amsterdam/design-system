import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'
import Logo from '../../packages-proprietary/assets/logo/amsterdam.svg'

import '@amsterdam/design-system-assets/font/index.css'

addons.setConfig({
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
    inputTextColor: '#181818',
    textColor: '#181818',
    textInverseColor: '#ffffff',
  }),
})
