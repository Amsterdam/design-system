/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { BreakoutCell } from './BreakoutCell'
import type { GridColumnNumber, GridPaddingSize, GridProps } from '../Grid/Grid'

export type BreakoutColumnNumber = GridColumnNumber
export type BreakoutPaddingSize = GridPaddingSize
export type BreakoutRowNumber = 1 | 2 | 3 | 4

export type BreakoutProps = GridProps

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
