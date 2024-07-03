import type { Meta } from '@storybook/react'
import { Layout } from './Layout'

export const commonMeta = {
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta
