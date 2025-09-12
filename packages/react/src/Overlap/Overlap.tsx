/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type OverlapProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-overlap--docs Overlap docs at Amsterdam Design System}
 */
export const Overlap = forwardRef(
  ({ children, className, ...restProps }: OverlapProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-overlap', className)} ref={ref}>
      {children}
    </div>
  ),
)

Overlap.displayName = 'Overlap'
