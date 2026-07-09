/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkeletonHeadingProps = {
  /**
   * The number of lines the heading spans.
   * @default 1
   */
  readonly lines?: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Lines that stand in for a heading while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const SkeletonHeading = forwardRef(
  ({ className, lines = 1, ...restProps }: SkeletonHeadingProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-skeleton__heading', className)} ref={ref}>
      {Array.from({ length: lines }, (_, index) => (
        <div className="ams-skeleton__line" key={index} />
      ))}
    </div>
  ),
)

SkeletonHeading.displayName = 'Skeleton.Heading'
