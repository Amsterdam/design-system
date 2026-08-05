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
    themes: { options: ['Spacious', 'Spacious Lo-fi'] },
  },
} satisfies Meta

/**
 * Builds a public page's parameters from the shared ones plus its description.
 *
 * A page story renders through `render`, so Storybook has no component to take a
 * description from. `docs.description.component` gives the page its subtitle.
 *
 * Spreading `...commonMeta` into a meta and then setting `parameters` replaces the
 * whole object rather than merging into it, so the shared parameters are spread
 * back in here. Storybook only merges parameters across preview, meta and story;
 * `commonMeta` is a plain object, so this last step is ours to do.
 */
export const pageParameters = (description: string, extraParameters?: Meta['parameters']) => ({
  ...commonMeta.parameters,
  ...extraParameters,
  docs: { description: { component: description } },
})
