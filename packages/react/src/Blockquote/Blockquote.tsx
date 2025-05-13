/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { BlockquoteHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type BlockquoteProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
} & PropsWithChildren<BlockquoteHTMLAttributes<HTMLQuoteElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-blockquote--docs Blockquote docs at Amsterdam Design System}
 */
export const Blockquote = forwardRef(
  ({ children, className, color, ...restProps }: BlockquoteProps, ref: ForwardedRef<HTMLQuoteElement>) => (
    <blockquote
      {...restProps}
      className={clsx('ams-blockquote', color && `ams-blockquote--${color}`, className)}
      ref={ref}
    >
      {children}
    </blockquote>
  ),
)

Blockquote.displayName = 'Blockquote'
