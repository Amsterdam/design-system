/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'

export type UnorderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const UnorderedListItem = forwardRef(
  ({ children, className, ...restProps }: UnorderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li className={clsx('ams-unordered-list__item', className)} ref={ref} {...restProps}>
      {children}
    </li>
  ),
)

UnorderedListItem.displayName = 'UnorderedList.Item'
