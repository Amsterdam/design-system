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
    // Snapshot at the maximum Page width with a menu (`ams.page.with-menu.max-inline-size`, 120rem)
    // instead of Chromatic’s 1200px default, so the visual test covers the widest layout we design for.
    chromatic: { modes: { '1920px': { viewport: 1920 } } },
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
} satisfies Meta
