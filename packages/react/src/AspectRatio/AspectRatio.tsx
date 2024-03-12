/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type Ratio = 'x-tall' | 'tall' | 'square' | 'wide' | 'x-wide' | '2x-wide'

export type AspectRatioProps = {
  ratio?: Ratio
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const AspectRatio = forwardRef(
  ({ children, className, ratio = 'square', ...restProps }: AspectRatioProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-aspect-ratio', `ams-aspect-ratio--${ratio}`, className)}>
      {children}
    </div>
  ),
)

AspectRatio.displayName = 'AspectRatio'
