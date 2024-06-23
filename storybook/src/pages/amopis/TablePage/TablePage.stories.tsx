/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { TablePage } from './TablePage'
import { Layout } from '../common/Layout'

const meta = {
  title: 'Pages/Amopis/Table Page',
  component: TablePage,
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
} satisfies Meta<typeof TablePage>

export default meta

export const Default: StoryObj = {}
