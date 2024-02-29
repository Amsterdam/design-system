/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ParagraphProps = {
  size?: 'small' | 'large'
  /**
   * De kleur van de paragraaf
   * Gebruik deze property om de paragraaf in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const Paragraph = forwardRef(
  (
    { children, className, inverseColor, size, ...otherProps }: ParagraphProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'amsterdam-paragraph',
        size && `amsterdam-paragraph--${size}`,
        inverseColor && 'amsterdam-paragraph--inverse-color',
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
