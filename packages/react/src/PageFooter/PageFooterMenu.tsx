/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PageFooterMenuProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const PageFooterMenu = forwardRef(
  ({ children, className, ...restProps }: PageFooterMenuProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-page-footer__menu', className)} ref={ref}>
      {children}
    </ul>
  ),
)

PageFooterMenu.displayName = 'PageFooter.Menu'
