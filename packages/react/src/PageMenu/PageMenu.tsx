/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageMenuLink } from './PageMenuLink'

export type PageMenuProps = {
  /**
   * Whether the page menu’s items align to its end.
   * If the menu itself aligns to the end of its container, you should set this to `true`.
   */
  alignEnd?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const PageMenuRoot = forwardRef(
  ({ alignEnd, children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-page-menu', alignEnd && `ams-page-menu--align-end`, className)} ref={ref}>
      {children}
    </ul>
  ),
)

PageMenuRoot.displayName = 'PageMenu'

export const OrderedList = Object.assign(PageMenuRoot, { Link: PageMenuLink })
