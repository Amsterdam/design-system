/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'

import { Page } from '@amsterdam/design-system-react'

/**
 * Wraps a story in a Page inside the body, for its max-width, centring and container context.
 * Use for page-spanning components like Page Header, Grid and Spotlight.
 */
export const wrapInPage: Decorator = (Story) => (
  <div className="ams-body">
    <Page>
      <Story />
    </Page>
  </div>
)
