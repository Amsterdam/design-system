/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { PageMenuLink } from './PageMenuLink'

export type PageMenuProps = {
  /**
   * Whether the page menu’s items align to its end.
   * If the menu itself aligns to the end of its container, you should set this to `true`.
   */
  alignEnd?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

type PageMenuComponent = {
  Link: typeof PageMenuLink
} & ForwardRefExoticComponent<PageMenuProps & RefAttributes<HTMLUListElement>>

export const PageMenu = forwardRef(
  ({ alignEnd, children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-page-menu', alignEnd && `ams-page-menu--align-end`, className)} ref={ref}>
      {children}
    </ul>
  ),
) as PageMenuComponent

PageMenu.displayName = 'PageMenu'
PageMenu.Link = PageMenuLink
PageMenu.Link.displayName = 'PageMenu.Link'
