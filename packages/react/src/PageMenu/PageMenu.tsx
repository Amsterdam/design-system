/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageMenuButton } from './PageMenuButton'
import { PageMenuItem } from './PageMenuItem'
import { PageMenuLink } from './PageMenuLink'

export type PageMenuProps = {
  /** Whether the items align to the end margin. Set to `true` if the Page Menu itself does so. */
  alignEnd?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

const PageMenuRoot = forwardRef(
  ({ alignEnd, children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={clsx('ams-page-menu', alignEnd && `ams-page-menu--align-end`, className)} ref={ref}>
      {children}
    </ul>
  ),
)

PageMenuRoot.displayName = 'PageMenu'

export const PageMenu = Object.assign(PageMenuRoot, {
  Button: PageMenuButton,
  Item: PageMenuItem,
  Link: PageMenuLink,
})
