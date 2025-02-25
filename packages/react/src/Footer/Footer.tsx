/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FooterMenu } from './FooterMenu'
import { FooterMenuLink } from './FooterMenuLink'
import { FooterSpotlight } from './FooterSpotlight'

export type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const FooterRoot = forwardRef(({ children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
  <footer {...restProps} className={clsx('ams-footer', className)} ref={ref}>
    {children}
  </footer>
))

FooterRoot.displayName = 'Footer'

export const Footer = Object.assign(FooterRoot, {
  Menu: FooterMenu,
  MenuLink: FooterMenuLink,
  Spotlight: FooterSpotlight,
})
