/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const spotlightTags = ['article', 'aside', 'div', 'footer', 'section'] as const
type SpotlightTag = (typeof spotlightTags)[number]

export const spotlightColors = ['azure', 'green', 'lime', 'magenta', 'orange', 'yellow'] as const
type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = {
  /** The HTML element to use. */
  as?: SpotlightTag
  /** The background colour. */
  color?: SpotlightColor
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Spotlight = forwardRef(
  ({ as: Tag = 'div', children, className, color, ...restProps }: SpotlightProps, ref: any) => (
    <Tag {...restProps} className={clsx('ams-spotlight', color && `ams-spotlight--${color}`, className)} ref={ref}>
      {children}
    </Tag>
  ),
)

Spotlight.displayName = 'Spotlight'
