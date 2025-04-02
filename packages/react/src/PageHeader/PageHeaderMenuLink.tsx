import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export type PageHeaderMenuLinkProps = {
  fixed?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const PageHeaderMenuLink = forwardRef(
  ({ children, className, fixed, ...restProps }: PageHeaderMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className={clsx('ams-header__menu-item', fixed && 'ams-header__menu-item--fixed')}>
      <a {...restProps} className={clsx('ams-header__menu-link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

PageHeaderMenuLink.displayName = 'PageHeader.MenuLink'
