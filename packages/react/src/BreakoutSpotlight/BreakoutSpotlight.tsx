/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { BreakoutSpotlightCell } from './BreakoutSpotlightCell'
import type { GridProps } from '../Grid'
import { paddingClasses } from '../Grid/paddingClasses'

export type BreakoutSpotlightRowNumber = 1 | 2 | 3 | 4
export type BreakoutSpotlightRowNumbers = {
  narrow: BreakoutSpotlightRowNumber
  medium: BreakoutSpotlightRowNumber
  wide: BreakoutSpotlightRowNumber
}

export type BreakoutSpotlightProps = GridProps

const BreakoutSpotlightRoot = forwardRef(
  (
    {
      children,
      className,
      gapVertical,
      paddingBottom,
      paddingTop,
      paddingVertical,
      ...restProps
    }: BreakoutSpotlightProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-breakout-spotlight',
        gapVertical && `ams-breakout-spotlight--gap-vertical--${gapVertical}`,
        paddingClasses('breakout-spotlight', paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
)

BreakoutSpotlightRoot.displayName = 'BreakoutSpotlight'

export const BreakoutSpotlight = Object.assign(BreakoutSpotlightRoot, { Cell: BreakoutSpotlightCell })
