/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  LiHTMLAttributes,
  OlHTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'

export interface OrderedListProps extends PropsWithChildren<OlHTMLAttributes<HTMLOListElement>> {
  markers?: boolean
}

interface OrderedListComponent extends ForwardRefExoticComponent<OrderedListProps & RefAttributes<HTMLOListElement>> {
  Item: typeof OrderedListItem
}

export const OrderedList = forwardRef(
  ({ children, markers = true, className, ...restProps }: OrderedListProps, ref: ForwardedRef<HTMLOListElement>) => {
    return (
      <ol
        ref={ref}
        className={clsx('amsterdam-ordered-list', !markers && 'amsterdam-ordered-list--no-markers', className)}
        {...restProps}
      >
        {children}
      </ol>
    )
  },
) as OrderedListComponent

OrderedList.displayName = 'OrderedList'

export type OrderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const OrderedListItem = forwardRef(
  ({ children, className, ...restProps }: OrderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li ref={ref} className={clsx('amsterdam-ordered-list__item', className)} {...restProps}>
        {children}
      </li>
    )
  },
)

OrderedListItem.displayName = 'OrderedListItem'
OrderedList.Item = OrderedListItem
