/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FigureProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Figure = forwardRef(
  ({ children, className, ...restProps }: FigureProps, ref: ForwardedRef<HTMLElement>) => (
    <figure {...restProps} ref={ref} className={clsx('ams-figure', className)}>
      {children}
    </figure>
  ),
)

Figure.displayName = 'Figure'
