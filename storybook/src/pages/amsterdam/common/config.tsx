/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Page } from '@amsterdam/design-system-react'
import type { Meta } from '@storybook/react'
import { Layout } from './Layout'

export const commonMeta = {
  decorators: [
    (Story) => (
      <Page>
        <Layout>
          <Story />
        </Layout>
      </Page>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta
