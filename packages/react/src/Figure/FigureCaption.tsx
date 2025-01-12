/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FigureCaptionProps = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const FigureCaption = forwardRef(
  ({ children, className, inverseColor, ...restProps }: FigureCaptionProps, ref: ForwardedRef<HTMLElement>) => (
    <figcaption
      {...restProps}
      ref={ref}
      className={clsx('ams-figure__caption', inverseColor && 'ams-figure__caption--inverse-color', className)}
    >
      {children}
    </figcaption>
  ),
)

FigureCaption.displayName = 'Figure.Caption'
