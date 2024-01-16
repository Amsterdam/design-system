/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { Spotlight } from '../Spotlight/Spotlight'

export const FooterTop = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Spotlight {...restProps} color="blue" ref={ref} className={clsx('amsterdam-footer__top', className)}>
      {children}
    </Spotlight>
  ),
)

FooterTop.displayName = 'FooterTop'

export const FooterBottom = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-footer__bottom', className)}>
      {children}
    </div>
  ),
)

FooterBottom.displayName = 'FooterBottom'

type FooterProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

interface FooterComponent extends ForwardRefExoticComponent<FooterProps & RefAttributes<HTMLElement>> {
  Top: typeof FooterTop
  Bottom: typeof FooterBottom
}

export const Footer = forwardRef(
  ({ children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} ref={ref} className={clsx('amsterdam-footer', className)}>
      {children}
    </footer>
  ),
) as FooterComponent

Footer.Top = FooterTop
Footer.Bottom = FooterBottom

Footer.displayName = 'Footer'
Footer.Top.displayName = 'Footer.Top'
Footer.Bottom.displayName = 'Footer.Bottom'
