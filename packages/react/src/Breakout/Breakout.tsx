/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { BreakoutCell } from './BreakoutCell'
import type { GridProps } from '../Grid'
import { paddingClasses } from '../Grid/paddingClasses'

export type BreakoutRowNumber = 1 | 2 | 3 | 4
export type BreakoutRowNumbers = { narrow: BreakoutRowNumber; medium: BreakoutRowNumber; wide: BreakoutRowNumber }

export type BreakoutProps = GridProps

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
        paddingClasses('breakout', paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
)

BreakoutRoot.displayName = 'Breakout'

export const Breakout = Object.assign(BreakoutRoot, { Cell: BreakoutCell })
