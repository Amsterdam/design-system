/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Highlight } from '../Highlight/Highlight'

export const FooterTop = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Highlight {...restProps} color="blue" ref={ref} className={clsx('amsterdam-footer__top', className)}>
      {children}
    </Highlight>
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

interface FooterComponent
  extends ForwardRefExoticComponent<PropsWithChildren<HTMLAttributes<HTMLElement>> & RefAttributes<HTMLElement>> {
  Top: typeof FooterTop
  Bottom: typeof FooterBottom
}

export const Footer = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
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
