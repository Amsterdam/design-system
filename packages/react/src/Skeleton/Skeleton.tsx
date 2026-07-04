/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { SkeletonHeading } from './SkeletonHeading'
import { SkeletonImage } from './SkeletonImage'
import { SkeletonList } from './SkeletonList'
import { SkeletonParagraph } from './SkeletonParagraph'
import { SkeletonTable } from './SkeletonTable'

export type SkeletonProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

const SkeletonRoot = forwardRef(
  ({ children, className, ...restProps }: SkeletonProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div aria-hidden {...restProps} className={clsx('ams-skeleton', className)} ref={ref}>
      {children}
    </div>
  ),
)

SkeletonRoot.displayName = 'Skeleton'

/**
 * Grey shapes that stand in for content while it loads.
 * Compose its parts to mirror the content to come, so the layout barely shifts once it arrives.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const Skeleton = Object.assign(SkeletonRoot, {
  Heading: SkeletonHeading,
  Image: SkeletonImage,
  List: SkeletonList,
  Paragraph: SkeletonParagraph,
  Table: SkeletonTable,
})
