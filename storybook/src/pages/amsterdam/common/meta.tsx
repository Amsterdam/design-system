/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta } from '@storybook/react'
import { Layout } from './Layout'

export const commonMeta = {
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} satisfies Meta
