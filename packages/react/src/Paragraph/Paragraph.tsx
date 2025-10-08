/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ParagraphProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> & {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** The size of the text. */
  size?: 'small' | 'large'
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-paragraph--docs Paragraph docs at Amsterdam Design System}
 */
export const Paragraph = forwardRef(
  ({ children, className, color, size, ...restProps }: ParagraphProps, ref: ForwardedRef<HTMLParagraphElement>) => (
    <p
      className={clsx('ams-paragraph', color && `ams-paragraph--${color}`, size && `ams-paragraph--${size}`, className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
