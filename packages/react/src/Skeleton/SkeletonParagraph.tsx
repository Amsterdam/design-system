/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkeletonParagraphProps = {
  /**
   * The number of lines the paragraph spans.
   * @default 3
   */
  readonly lines?: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Lines that stand in for a paragraph while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const SkeletonParagraph = forwardRef(
  ({ className, lines = 3, ...restProps }: SkeletonParagraphProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-skeleton__paragraph', className)} ref={ref}>
      {Array.from({ length: lines }, (_, index) => (
        <div className="ams-skeleton__line" key={index} />
      ))}
    </div>
  ),
)

SkeletonParagraph.displayName = 'Skeleton.Paragraph'
