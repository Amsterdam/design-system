/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FooterMenuProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const FooterMenu = forwardRef(
  ({ children, className, ...restProps }: FooterMenuProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-footer__menu', className)} ref={ref}>
      {children}
    </ul>
  ),
)

FooterMenu.displayName = 'Footer.Menu'
