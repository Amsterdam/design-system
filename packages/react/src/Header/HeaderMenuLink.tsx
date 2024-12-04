import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

type HeaderMenuLinkProps = {
  secondary?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const HeaderMenuLink = forwardRef(
  ({ children, secondary, ...restProps }: HeaderMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx(secondary && 'ams-header__menu-item--secondary')}>
      <a {...restProps} className="ams-header__menu-link" ref={ref}>
        {children}
      </a>
    </li>
  ),
)

HeaderMenuLink.displayName = 'Header.MenuLink'
