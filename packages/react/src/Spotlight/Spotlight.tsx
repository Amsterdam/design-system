/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const spotlightTags = ['article', 'aside', 'div', 'footer', 'section'] as const
type SpotlightTag = (typeof spotlightTags)[number]

export const spotlightColors = ['azure', 'green', 'lime', 'magenta', 'orange', 'yellow'] as const
type SpotlightColor = (typeof spotlightColors)[number]

export type SpotlightProps = {
  /** The HTML element to use. */
  readonly as?: SpotlightTag
  /** The background colour. */
  readonly color?: SpotlightColor
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * Emphasizes a section on a page through a distinctive background colour.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-spotlight--docs Spotlight docs at Amsterdam Design System}
 */
export const Spotlight = forwardRef<HTMLElement, SpotlightProps>(
  ({ as, children, className, color, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag {...restProps} className={clsx('ams-spotlight', color && `ams-spotlight--${color}`, className)} ref={ref}>
        {children}
      </Tag>
    )
  },
)

Spotlight.displayName = 'Spotlight'
