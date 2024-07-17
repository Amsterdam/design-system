/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ParagraphProps = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  /** The size of the text. */
  size?: 'small' | 'large'
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const Paragraph = forwardRef(
  (
    { children, className, inverseColor, size, ...restProps }: ParagraphProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'ams-paragraph',
        size && `ams-paragraph--${size}`,
        inverseColor && 'ams-paragraph--inverse-color',
        className,
      )}
      {...restProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
