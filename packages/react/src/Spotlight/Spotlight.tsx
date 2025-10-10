/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const spotlightTags = ['article', 'aside', 'div', 'footer', 'section'] as const
type SpotlightTag = (typeof spotlightTags)[number]

export const spotlightColors = ['azure', 'green', 'lime', 'magenta', 'orange', 'yellow'] as const
type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** The HTML element to use. */
  as?: SpotlightTag
  /** The background colour. */
  color?: SpotlightColor
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-spotlight--docs Spotlight docs at Amsterdam Design System}
 */
export const Spotlight = forwardRef(
  ({ as: Tag = 'div', children, className, color, ...restProps }: SpotlightProps, ref: ForwardedRef<any>) => (
    <Tag {...restProps} className={clsx('ams-spotlight', color && `ams-spotlight--${color}`, className)} ref={ref}>
      {children}
    </Tag>
  ),
)

Spotlight.displayName = 'Spotlight'
