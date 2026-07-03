/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkeletonListProps = {
  /**
   * The number of list items.
   * @default 3
   */
  readonly lines?: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Rows with a marker and a line that stand in for a list while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const SkeletonList = forwardRef(
  ({ className, lines = 3, ...restProps }: SkeletonListProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-skeleton__list', className)} ref={ref}>
      {Array.from({ length: lines }, (_, index) => (
        <div className="ams-skeleton__list-item" key={index}>
          <div className="ams-skeleton__marker" />
          <div className="ams-skeleton__line" />
        </div>
      ))}
    </div>
  ),
)

SkeletonList.displayName = 'Skeleton.List'
