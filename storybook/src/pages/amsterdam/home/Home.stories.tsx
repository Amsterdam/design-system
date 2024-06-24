/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FooterProps } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { ReactElement } from 'react'
import { Home } from './Home'
import * as FooterStories from '../../../components/Footer/Footer.stories'

const meta = {
  title: 'Pages/Amsterdam.nl/Home',
  component: Home,
  args: {
    footer: FooterStories.Default.args?.children as ReactElement<FooterProps>,
  },
  argTypes: {
    footer: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta<typeof Home>

export default meta

export const Default: StoryObj = {}
