/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// The manager builder compiles JSX with the classic transform, so React must be in scope here.
import React, { useEffect } from 'react'
import { Select } from 'storybook/internal/components'
import { addons, types, useGlobals, useParameter } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

import Logo from '../../packages-proprietary/assets/logo/amsterdam.svg'
import { defaultTheme, matchTheme, themeNames } from './themes'

import '@amsterdam/design-system-assets/font/index.css'
import '../src/_styles/manager.css'

// Offers the themes a story supports: all of them by default, or the list in its `themes.options`
// parameter. If the current selection is not among them, the closest supported theme is rendered
// and selected instead, so the toolbar always shows the theme that is actually on screen.
const ThemeSwitcher = () => {
  const [globals, updateGlobals] = useGlobals()
  const options = useParameter<{ options?: string[] }>('themes')?.options ?? themeNames
  const globalTheme = globals['theme']
  const selected = typeof globalTheme === 'string' && globalTheme.length > 0 ? globalTheme : defaultTheme
  const theme = matchTheme(options, selected)

  useEffect(() => {
    if (theme !== selected) {
      updateGlobals({ theme })
    }
  }, [selected, theme, updateGlobals])

  return (
    <Select
      ariaLabel="Theme"
      defaultOptions={theme}
      key={theme}
      onSelect={(value) => updateGlobals({ theme: value })}
      options={themeNames
        .filter((name) => options.includes(name))
        .map((name) => ({
          title: name,
          value: name,
        }))}
    />
  )
}

addons.register('amsterdam/themes', () => {
  addons.add('amsterdam/themes/theme-switcher', {
    title: 'Theme',
    match: ({ tabId, viewMode }) => !!viewMode && /^(story|docs)$/.test(viewMode) && !tabId,
    render: ThemeSwitcher,
    type: types.TOOL,
  })
})

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
    inputTextColor: '#202020',
    textColor: '#202020',
    textInverseColor: '#ffffff',
  }),
})
