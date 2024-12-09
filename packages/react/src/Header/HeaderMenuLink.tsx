import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export type HeaderMenuLinkProps = {
  fixed?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const HeaderMenuLink = forwardRef(
  ({ children, fixed, ...restProps }: HeaderMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx('ams-header__menu-item', fixed && 'ams-header__menu-item--fixed')}>
      <a {...restProps} className="ams-header__menu-link" ref={ref}>
        {children}
      </a>
    </li>
  ),
)

HeaderMenuLink.displayName = 'Header.MenuLink'
