/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { BreakoutCell } from './BreakoutCell'

export type BreakoutColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type BreakoutRowNumber = 1 | 2 | 3 | 4
export type BreakoutPaddingSize = 'small' | 'medium' | 'large'

type BreakoutPaddingVerticalProp = {
  paddingBottom?: never
  paddingTop?: never
  /** The amount of space above and below. */
  paddingVertical?: BreakoutPaddingSize
}

type BreakoutPaddingTopAndBottomProps = {
  /** The amount of space below. */
  paddingBottom?: BreakoutPaddingSize
  /** The amount of space above. */
  paddingTop?: BreakoutPaddingSize
  paddingVertical?: never
}

export type BreakoutProps = {
  /** The amount of space between rows. */
  gapVertical?: 'none' | 'small' | 'large'
} & (BreakoutPaddingVerticalProp | BreakoutPaddingTopAndBottomProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const paddingClasses = (
  paddingBottom?: BreakoutPaddingSize,
  paddingTop?: BreakoutPaddingSize,
  paddingVertical?: BreakoutPaddingSize,
): string[] => {
  const classes = [] as string[]

  if (paddingVertical) {
    return [`ams-breakout--padding-vertical--${paddingVertical}`]
  }

  if (paddingBottom) {
    classes.push(`ams-breakout--padding-bottom--${paddingBottom}`)
  }

  if (paddingTop) {
    classes.push(`ams-breakout--padding-top--${paddingTop}`)
  }

  return classes
}

const BreakoutRoot = forwardRef(
  (
    { children, className, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }: BreakoutProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-breakout',
        gapVertical && `ams-breakout--gap-vertical--${gapVertical}`,
        paddingClasses(paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
)

BreakoutRoot.displayName = 'Breakout'

export const Breakout = Object.assign(BreakoutRoot, { Cell: BreakoutCell })
