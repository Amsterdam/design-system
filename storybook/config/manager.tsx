/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// The manager builder compiles JSX with the classic transform, so React must be in scope here.
import React, { useEffect } from 'react'
import { Select } from 'storybook/internal/components'
import { addons, types, useAddonState, useParameter } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

import Logo from '../../packages-proprietary/assets/logo/amsterdam-logo.svg'
import { matchTheme, readStoredTheme, storeTheme, THEME_EVENT, themeNames } from './themes'

import '@amsterdam/design-system-assets/font/index.css'
import '../src/_styles/manager.css'

const THEME_TOOL_ID = 'amsterdam/themes/theme-switcher'

// Offers the themes a story supports: all of them by default, or the list in its `themes.options`
// parameter. If the current selection is not among them, the closest supported theme is rendered
// and selected instead, so the toolbar always shows the theme that is actually on screen.
// The selection is kept in addon state and sent to the preview over the channel, not as a Storybook
// global, so switching applies a CSS class instead of re-rendering every story on the page.
const ThemeSwitcher = () => {
  const [selected, setSelected] = useAddonState(THEME_TOOL_ID, readStoredTheme())
  const options = useParameter<{ options?: string[] }>('themes')?.options ?? themeNames
  const theme = matchTheme(options, selected)

  const apply = (value: string) => {
    setSelected(value)
    storeTheme(value)
    addons.getChannel().emit(THEME_EVENT, value)
  }

  useEffect(() => {
    if (theme !== selected) {
      apply(theme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, theme])

  return (
    <Select
      ariaLabel="Theme"
      defaultOptions={theme}
      key={theme}
      onSelect={(value) => {
        if (typeof value === 'string') {
          apply(value)
        }
      }}
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
  addons.add(THEME_TOOL_ID, {
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
