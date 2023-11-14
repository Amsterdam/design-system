/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type Ratio = 'x-tall' | 'tall' | 'square' | 'wide' | 'x-wide'

export interface AspectRatioProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  ratio?: Ratio
}

export const AspectRatio = forwardRef(
  ({ children, className, ratio = 'square', ...restProps }: AspectRatioProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-aspect-ratio', `amsterdam-aspect-ratio--${ratio}`, className)}
    >
      {children}
    </div>
  ),
)

AspectRatio.displayName = 'AspectRatio'
