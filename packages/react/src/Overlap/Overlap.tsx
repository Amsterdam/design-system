/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react'

export const Overlap = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-overlap', className)}>
      {children}
    </div>
  ),
)

Overlap.displayName = 'Overlap'
