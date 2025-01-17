import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export type FooterBottomLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const FooterBottomLink = forwardRef(
  ({ children, className, ...restProps }: FooterBottomLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <li className="ams-footer__bottom-link">
      <a {...restProps} className={clsx('ams-footer__bottom-link', className)} ref={ref}>
        {children}
      </a>
    </li>
  ),
)

FooterBottomLink.displayName = 'Footer.BottomLink'
