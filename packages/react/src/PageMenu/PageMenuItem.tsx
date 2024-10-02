/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, type LiHTMLAttributes } from 'react'
import type { ForwardedRef, PropsWithChildren } from 'react'

export type PageMenuItemProps = {
  /** Secondary items only appear in the Page Menu if there is enough space for them. */
  rank?: 'secondary'
} & PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const PageMenuItem = forwardRef(
  ({ children, className, rank, ...restProps }: PageMenuItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li
      {...restProps}
      className={clsx('ams-page-menu__item', rank && `ams-page-menu__item--${rank}`, className)}
      ref={ref}
    >
      {children}
    </li>
  ),
)

PageMenuItem.displayName = 'PageMenu.Item'
