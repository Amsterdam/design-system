/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const spotlightColors = ['azure', 'blue', 'green', 'lime', 'magenta', 'orange', 'purple', 'yellow'] as const

type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = {
  /** The HTML element to use. */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'section'
  /** The background colour. */
  color?: SpotlightColor
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Spotlight = forwardRef(
  ({ children, className, as: Tag = 'div', color = 'blue', ...restProps }: SpotlightProps, ref: any) => (
    <Tag {...restProps} ref={ref} className={clsx('ams-spotlight', `ams-spotlight--${color}`, className)}>
      {children}
    </Tag>
  ),
)

Spotlight.displayName = 'Spotlight'
