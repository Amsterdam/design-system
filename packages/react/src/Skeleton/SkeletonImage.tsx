/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { AspectRatioProps } from '../common/types'

import { generateAspectRatioClass } from '../Image/generateAspectRatioClass'

export type SkeletonImageProps = Readonly<AspectRatioProps> & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * A block that stands in for an image while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const SkeletonImage = forwardRef(
  ({ aspectRatio, className, ...restProps }: SkeletonImageProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      className={clsx('ams-skeleton__image', generateAspectRatioClass(aspectRatio), className)}
      ref={ref}
    />
  ),
)

SkeletonImage.displayName = 'Skeleton.Image'
