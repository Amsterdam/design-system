/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { FormPage } from './FormPage'

const meta = {
  title: 'Pages/Amsterdam.nl/Form Page',
  component: FormPage,
  argTypes: {
    footer: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta<typeof FormPage>

export default meta

export const Default: StoryObj = {}
