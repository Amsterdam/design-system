/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { BlockquoteHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export type BlockquoteProps = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
} & PropsWithChildren<BlockquoteHTMLAttributes<HTMLQuoteElement>>

export const Blockquote = forwardRef(
  ({ children, className, inverseColor, ...restProps }: BlockquoteProps, ref: ForwardedRef<HTMLQuoteElement>) => (
    <blockquote
      {...restProps}
      ref={ref}
      className={clsx('ams-blockquote', inverseColor && 'ams-blockquote--inverse-color', className)}
    >
      {children}
    </blockquote>
  ),
)

Blockquote.displayName = 'Blockquote'
