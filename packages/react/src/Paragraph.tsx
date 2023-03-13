/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'small' | 'large'
}

export const Paragraph = forwardRef(
  (
    { children, size, className, ...otherProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'amsterdam-paragraph',
        size === 'small' && 'amsterdam-paragraph-small',
        size === 'large' && 'amsterdam-paragraph-large',
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
