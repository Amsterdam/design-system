/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'
import type { CSSProperties, ElementType } from 'react'

import { Page } from '@amsterdam/design-system-react'
import { clsx } from 'clsx'

/**
 * Wraps a story in an inline-size query container, for components that use container queries.
 * Use for components like Description List.
 */
export const wrapInInlineSizeQueryContainer = (className?: string, style?: CSSProperties): Decorator => {
  const InlineSizeQueryContainerDecorator: Decorator = (Story) => (
    <div className={clsx('ams-query-container-inline-size', className)} style={style}>
      <Story />
    </div>
  )
  return InlineSizeQueryContainerDecorator
}

/**
 * Wraps a story in a Page inside the body, for its max-width, centring and container context.
 * Use for page-spanning components like Page Header, Grid and Spotlight.
 */
export const wrapInPage: Decorator = (Story) => (
  <Page>
    <Story />
  </Page>
)

type Size = '16rem' | '24rem' | '32rem' | '7-of-12-columns' | 'vi-medium'

const sizes: Partial<Record<Size, string>> = {
  '7-of-12-columns': '44.375rem',
  'vi-medium': '37.5rem',
}

/**
 * Constrains a story to a given maximum inline size.
 * Pass a named key or a rem value; 'vi-medium' and '7-of-12-columns' resolve to their respective sizes.
 */
export const maximiseInlineSize = (size: Size, as: ElementType = 'div'): Decorator => {
  const Tag = as
  const resolvedSize = sizes[size] ?? size

  const MaxInlineSizeDecorator: Decorator = (Story) => (
    <Tag style={{ maxInlineSize: resolvedSize }}>
      <Story />
    </Tag>
  )
  return MaxInlineSizeDecorator
}
