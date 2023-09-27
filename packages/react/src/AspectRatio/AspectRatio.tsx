/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface AspectRatioProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const AspectRatio = forwardRef(
  ({ children, className, ...restProps }: AspectRatioProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-aspect-ratio', className)}>
      {children}
    </span>
  ),
)

AspectRatio.displayName = 'AspectRatio'
