/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react'

import { Layout } from './Layout'

export const commonMeta = {
  decorators: [
    (Story, { parameters }) => (
      <Page>
        <Layout skipLinkLabel={parameters['skipLinkLabel']} skipLinkTargetId={parameters['skipLinkTargetId']}>
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
