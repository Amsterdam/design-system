/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'

export type OrderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const OrderedListItem = forwardRef(
  ({ children, className, ...restProps }: OrderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li ref={ref} className={clsx('amsterdam-ordered-list__item', className)} {...restProps}>
      {children}
    </li>
  ),
)

OrderedListItem.displayName = 'OrderedListItem'
