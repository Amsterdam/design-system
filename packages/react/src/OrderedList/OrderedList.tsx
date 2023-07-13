/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import React, {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
  PropsWithChildren,
} from 'react'

interface OrderedListComponent
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLElement>> & React.RefAttributes<HTMLElement>
  > {
  Item: typeof OrderedListItem
}

export const OrderedList = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>,
    ref: ForwardedRef<HTMLOListElement>,
  ) => {
    return (
      <ol ref={ref} className={clsx('amsterdam-ordered-list', className)} {...restProps}>
        {children}
      </ol>
    )
  },
) as OrderedListComponent

OrderedList.displayName = 'OrderedList'

export type OrderedListItemProps = LiHTMLAttributes<HTMLLIElement>

export const OrderedListItem = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<OrderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li ref={ref} className={clsx('amsterdam-ordered-list__item', className)} {...restProps}>
        {children}
      </li>
    )
  },
)

OrderedListItem.displayName = 'OrderedListItem'
OrderedList.Item = OrderedListItem
