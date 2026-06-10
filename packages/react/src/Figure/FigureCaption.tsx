/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type FigureCaptionProps = {
  /** Changes the text colour for readability on a dark background. */
  readonly color?: 'inverse'
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * A caption that describes or credits the media content of a Figure.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-figure--docs Figure docs at Amsterdam Design System}
 */
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
