/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'
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
