/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FigureCaption } from './FigureCaption'

export type FigureProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const FigureRoot = forwardRef(({ children, className, ...restProps }: FigureProps, ref: ForwardedRef<HTMLElement>) => (
  <figure {...restProps} ref={ref} className={clsx('ams-figure', className)}>
    {children}
  </figure>
))

FigureRoot.displayName = 'Figure'

export const Figure = Object.assign(FigureRoot, { Caption: FigureCaption })
