/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { buildPageParameters } from '#storybook/_common/buildPageParameters'

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
    // Internal websites use Compact Mode, and the Menu may only be used with it. These options limit the
    // theme toolbar to Compact Mode and its Lo-fi variant.
    themes: { options: ['Compact', 'Compact Lo-fi'] },
  },
} satisfies Meta

/** Builds an internal page's parameters with its description, preserving the shared parameters. */
export const pageParameters = (description: string, extraParameters?: Meta['parameters']) =>
  buildPageParameters(commonMeta.parameters, description, extraParameters)
