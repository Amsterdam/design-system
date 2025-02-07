/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FigureCaptionProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const FigureCaption = forwardRef(
  ({ children, className, color, ...restProps }: FigureCaptionProps, ref: ForwardedRef<HTMLElement>) => (
    <figcaption
      {...restProps}
      className={clsx('ams-figure__caption', color && `ams-figure__caption--${color}`, className)}
      ref={ref}
    >
      {children}
    </figcaption>
  ),
)

FigureCaption.displayName = 'Figure.Caption'
