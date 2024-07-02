/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta } from '@storybook/react'
import { Layout } from '../common/Layout'

export const commonMeta = {
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
} satisfies Meta
