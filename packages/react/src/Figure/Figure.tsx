/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AspectRatioProps } from '../AspectRatio'

export type FigureProps = AspectRatioProps & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Figure = forwardRef(
  ({ children, className, ratio = 'square', ...restProps }: FigureProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-figure', `ams-aspect-ratio--${ratio}`, className)}>
      {children}
    </div>
  ),
)

Figure.displayName = 'Figure'
