/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FooterBottom } from './FooterBottom'
import { FooterMenu } from './FooterMenu'
import { FooterMenuLink } from './FooterMenuLink'
import { FooterTop } from './FooterTop'

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const FooterRoot = forwardRef(({ children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
  <footer {...restProps} className={clsx('ams-footer', className)} ref={ref}>
    {children}
  </footer>
))

FooterRoot.displayName = 'Footer'

export const Footer = Object.assign(FooterRoot, {
  Bottom: FooterBottom,
  Menu: FooterMenu,
  MenuLink: FooterMenuLink,
  Top: FooterTop,
})
