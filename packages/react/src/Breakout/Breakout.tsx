/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridProps } from '../Grid'

import { paddingClasses } from '../Grid/paddingClasses'
import { BreakoutCell } from './BreakoutCell'

export type BreakoutRowNumber = 1 | 2 | 3 | 4
export type BreakoutRowNumbers = { narrow: BreakoutRowNumber; medium: BreakoutRowNumber; wide: BreakoutRowNumber }

export type BreakoutProps = GridProps

const BreakoutRoot = forwardRef<HTMLElement, BreakoutProps>(
  ({ as, children, className, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag
        {...restProps}
        className={clsx(
          'ams-breakout',
          gapVertical && `ams-breakout--gap-vertical--${gapVertical}`,
          paddingClasses('breakout', paddingBottom, paddingTop, paddingVertical),
          className,
        )}
        ref={ref}
      >
        {children}
      </Tag>
    )
  },
)

BreakoutRoot.displayName = 'Breakout'

/**
 * A composition that lets a figure – e.g. an image, video or map – break out of a Spotlight.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-breakout--docs Breakout docs at Amsterdam Design System}
 */
export const Breakout = Object.assign(BreakoutRoot, { Cell: BreakoutCell })
