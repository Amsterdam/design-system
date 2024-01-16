/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { BlockquoteHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export interface BlockquoteProps extends PropsWithChildren<BlockquoteHTMLAttributes<HTMLQuoteElement>> {
  /**
   * De kleur van het citaat.
   * Gebruik deze property om het citaat in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
}

export const Blockquote = forwardRef(
  ({ children, className, inverseColor, ...restProps }: BlockquoteProps, ref: ForwardedRef<HTMLQuoteElement>) => (
    <blockquote
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-blockquote', inverseColor && 'amsterdam-blockquote--inverse-color', className)}
    >
      {children}
    </blockquote>
  ),
)

Blockquote.displayName = 'Blockquote'
