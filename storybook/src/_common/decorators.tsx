/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

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

/**
 * Constrains a story to a given maximum width.
 */
export const maxInlineSizeDecorator = (maxInlineSize: CSSProperties['maxInlineSize']): Decorator =>
  function WithMaxInlineSize(Story) {
    return (
      <div style={{ maxInlineSize }}>
        <Story />
      </div>
    )
  }

/**
 * Constrains a story to 37.5rem, the `sizes` breakpoint of the media stories.
 * Use for media components like Image, Figure and Image Slider.
 */
export const wrapNarrow = maxInlineSizeDecorator('37.5rem')
