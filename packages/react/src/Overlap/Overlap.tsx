/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type OverlapProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Overlap = forwardRef(
  ({ children, className, ...restProps }: OverlapProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-overlap', className)}>
      {children}
    </div>
  ),
)

Overlap.displayName = 'Overlap'
