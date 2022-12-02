/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'intro' | 'small'
}

export const Paragraph = ({ children, variant, className, ...otherProps }: PropsWithChildren<ParagraphProps>) => (
  <p
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
)
