/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

const defaultColor = 'purple'
export const spotlightColors = [
  'blue',
  'dark-blue',
  'dark-green',
  'green',
  'magenta',
  'orange',
  'purple',
  'yellow',
] as const

type SpotlightColor = (typeof spotlightColors)[number] | typeof defaultColor

export type SpotlightProps = {
  /** The HTML element to use. */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  /** The background colour. */
  color?: SpotlightColor
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Spotlight = forwardRef(
  ({ as: Tag = 'div', children, className, color = defaultColor, ...restProps }: SpotlightProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx('ams-spotlight', color !== defaultColor && `ams-spotlight--${color}`, className)}
    >
      {children}
    </Tag>
  ),
)

Spotlight.displayName = 'Spotlight'
