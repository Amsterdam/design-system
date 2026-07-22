/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { PageLayout } from './PageLayout'

export const commonMeta = {
  decorators: [
    (Story, { parameters }) => (
      <PageLayout skipLinks={parameters['skipLinks']}>
        <Story />
      </PageLayout>
    ),
  ],
  parameters: {
    // Snapshot at the maximum Page width (`ams.page.max-inline-size`, 90rem) instead of Chromatic’s
    // 1200px default, so the visual test covers the widest layout we design for.
    chromatic: { modes: { '1440px': { viewport: 1440 } } },
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta
