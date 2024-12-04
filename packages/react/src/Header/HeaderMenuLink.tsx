import clsx from 'clsx'
import { AnchorHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

type HeaderMenuLinkProps = {
  secondary?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const HeaderMenuLink = forwardRef(({ children, secondary, ...restProps }: HeaderMenuLinkProps) => (
  <li className={clsx(secondary && 'ams-header__menu-item--secondary')}>
    <a {...restProps} className="ams-header__menu-link">
      {children}
    </a>
  </li>
))

HeaderMenuLink.displayName = 'Header.MenuLink'
