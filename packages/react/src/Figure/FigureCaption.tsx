/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

export type FigureCaptionProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
}

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
