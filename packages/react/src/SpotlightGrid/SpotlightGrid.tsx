/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef } from 'react'
import { SpotlightGridCell } from './SpotlightGridCell'
import type { GridProps } from '../Grid'
import { paddingClasses } from '../Grid/paddingClasses'

export type SpotlightGridRowNumber = 1 | 2 | 3 | 4
export type SpotlightGridRowNumbers = {
  narrow: SpotlightGridRowNumber
  medium: SpotlightGridRowNumber
  wide: SpotlightGridRowNumber
}

export type SpotlightGridProps = GridProps

const SpotlightGridRoot = forwardRef(
  (
    { children, className, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }: SpotlightGridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-spotlight-grid',
        gapVertical && `ams-spotlight-grid--gap-vertical--${gapVertical}`,
        paddingClasses('spotlight-grid', paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
)

SpotlightGridRoot.displayName = 'SpotlightGrid'

export const SpotlightGrid = Object.assign(SpotlightGridRoot, { Cell: SpotlightGridCell })
