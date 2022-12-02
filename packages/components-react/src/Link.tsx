/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'standalone' | 'inList' | 'inline'
}

export const Link = ({ children, variant, className, ...restProps }: PropsWithChildren<LinkProps>) => (
  <a
    className={clsx(
      'amsterdam-link',
      variant === 'standalone' && 'amsterdam-link-standalone',
      variant === 'inList' && 'amsterdam-link-inlist',
      variant === 'inline' && 'amsterdam-link-inline',
      className,
    )}
    {...restProps}
  >
    {variant === 'inList' && '>'}
    {children}
  </a>
)
