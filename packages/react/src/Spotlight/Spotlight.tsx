/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const spotlightColors = ['blue', 'green', 'lime', 'magenta', 'orange', 'yellow'] as const

type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = {
  /** The HTML element to use. */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
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
