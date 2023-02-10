/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'intro' | 'small'
}

export const Paragraph = forwardRef(
  (
    { children, variant, className, ...otherProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p
      ref={ref}
      className={clsx(
        'amsterdam-paragraph',
        variant === 'intro' && 'amsterdam-paragraph-intro',
        variant === 'small' && 'amsterdam-paragraph-small',
        className,
      )}
      {...otherProps}
    >
      {children}
    </p>
  ),
)

Paragraph.displayName = 'Paragraph'
