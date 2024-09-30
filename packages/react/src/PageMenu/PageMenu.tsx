/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageMenuButton } from './PageMenuButton'
import { PageMenuLink } from './PageMenuLink'

export type PageMenuProps = {
  /** Whether the items align to the end margin. Set to `true` if the Page Menu itself does so. */
  alignEnd?: boolean
  /** Whether menu items should wrap if they don’t fit on a single row. */
  wrap?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export type PageMenuItemProps = {
  /** Secondary items only appear in the Page Menu if there is enough space for them. */
  rank?: 'secondary'
}

const PageMenuRoot = forwardRef(
  (
    { alignEnd, children, className, wrap = true, ...restProps }: PageMenuProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul
      {...restProps}
      className={clsx(
        'ams-page-menu',
        alignEnd && `ams-page-menu--align-end`,
        !wrap && `ams-page-menu--no-wrap`,
        className,
      )}
      ref={ref}
    >
      {children}
    </ul>
  ),
)

PageMenuRoot.displayName = 'PageMenu'

export const PageMenu = Object.assign(PageMenuRoot, { Button: PageMenuButton, Link: PageMenuLink })
