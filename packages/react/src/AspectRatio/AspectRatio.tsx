/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface AspectRatioProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  ratio: '1:1' | '4:5' | '5:4' | '16:9'
}

export const AspectRatio = forwardRef(
  ({ children, className, ratio = '1:1', ...restProps }: AspectRatioProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-aspect-ratio', `amsterdam-aspect-ratio-${ratio.replace(':', '-')}`, className)}
    >
      {children}
    </div>
  ),
)

AspectRatio.displayName = 'AspectRatio'
