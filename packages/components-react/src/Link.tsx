/**
 * @license EUPL-1.2
 */

import { ChevronRight } from '@amsterdam/icons-react/static'
import clsx from 'clsx'
import { AnchorHTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { Icon } from './Icon'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'standalone' | 'inList' | 'inline'
  iconLeft?: ReactElement
  iconRight?: ReactElement
}

export const Link = ({
  children,
  className,
  iconLeft,
  iconRight,
  variant,
  ...restProps
}: PropsWithChildren<LinkProps>) => (
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
    {(variant === 'inList' || iconLeft) && <Icon>{iconLeft ? iconLeft : <ChevronRight />}</Icon>}
    {children}
    {iconRight && <Icon>{iconRight}</Icon>}
  </a>
)
