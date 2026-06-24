/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react'

import { Layout } from './Layout'

export const commonMeta = {
  decorators: [
    (Story) => (
      <Page withMenu>
        <Layout>
          <Story />
        </Layout>
      </Page>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
} satisfies Meta
