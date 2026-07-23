/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { PageLayout } from './PageLayout'

export const commonMeta = {
  decorators: [
    // Every internal template renders inside the same Page Layout, so each story supplies the page body only.
    (Story) => (
      <PageLayout>
        <Story />
      </PageLayout>
    ),
  ],
  parameters: {
    // Snapshot at the maximum Page width with a menu (`ams.page.with-menu.max-inline-size`, 120rem)
    // instead of Chromatic’s 1200px default, so the visual test covers the widest layout we design for.
    chromatic: { modes: { '1920px': { viewport: 1920 } } },
    layout: 'fullscreen',
    // Internal websites use Compact Mode, and the Menu may only be used with it. The override applies it to
    // every story here, whichever mode the toolbar selects.
    themes: { themeOverride: 'Compact' },
  },
} satisfies Meta
