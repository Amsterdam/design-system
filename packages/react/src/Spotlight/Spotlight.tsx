/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const spotlightColors = [
  'blue',
  'light-blue',
  'dark-green',
  'green',
  'magenta',
  'orange',
  'purple',
  'yellow',
] as const

type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = {
  /** The HTML element to use. */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  /** The background colour. */
  color?: SpotlightColor
  /** When an aspect ratio element is used you can use this to make the element pop out the top */
  gradient?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Spotlight = forwardRef(
  ({ children, className, as: Tag = 'div', color = 'blue', gradient, ...restProps }: SpotlightProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx('ams-spotlight', `ams-spotlight--${color}`, gradient && 'ams-spotlight--gradient', className)}
    >
      {children}
    </Tag>
  ),
)

Spotlight.displayName = 'Spotlight'
