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
  <figure {...restProps} className={clsx('ams-figure', className)} ref={ref}>
    {children}
  </figure>
))

FigureRoot.displayName = 'Figure'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-figure--docs Figure docs at Amsterdam Design System}
 */
export const Figure = Object.assign(FigureRoot, { Caption: FigureCaption })
