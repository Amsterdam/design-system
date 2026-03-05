/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkeletonProps = PropsWithChildren<
  {
    animation?: boolean
    count?: number
    height?: number | string
    shape?: 'rect' | 'circle' | 'text'
    width?: number | string
  } & HTMLAttributes<HTMLSpanElement>
>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const Skeleton = forwardRef(
  (
    {
      animation = true,
      className,
      count = 1,
      height = 20,
      shape = 'rect',
      style,
      width = 120,
      ...restProps
    }: SkeletonProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => {
    const skeletons = Array.from({ length: count }, (_, i) => (
      <span
        aria-busy="true"
        aria-label="Loading..."
        className={clsx(
          !animation && 'ams-skeleton--no-animation',
          'ams-skeleton',
          className,
          shape && `ams-skeleton--${shape}`,
        )}
        key={i}
        ref={i === 0 ? ref : undefined}
        style={{
          height,
          width,
          ...style,
        }}
        {...restProps}
      />
    ))
    return <>{skeletons}</>
  },
)

Skeleton.displayName = 'Skeleton'
