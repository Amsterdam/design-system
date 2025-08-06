import { Page } from '@amsterdam/design-system-react'
import type { Meta } from '@storybook/react'
import { Layout } from './Layout'

export const pageMeta = {
  decorators: [
    (Story) => (
      <Page lang="nl">
        <Layout>
          <Story />
        </Layout>
      </Page>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta
