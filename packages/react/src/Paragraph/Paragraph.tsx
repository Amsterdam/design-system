/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ParagraphProps = {
  /** The size of the paragraph. */
  size?: 'small' | 'large'
  /** Changes the text color for readability on a dark background. */
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
        'ams-paragraph',
        size && `ams-paragraph--${size}`,
        inverseColor && 'ams-paragraph--inverse-color',
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
