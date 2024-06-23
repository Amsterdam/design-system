/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { DetailsPage } from './DetailsPage'
import { Layout } from '../common/Layout'

const meta = {
  title: 'Pages/Amopis/Details Page',
  component: DetailsPage,
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} satisfies Meta<typeof DetailsPage>

export default meta

export const Default: StoryObj = {}
