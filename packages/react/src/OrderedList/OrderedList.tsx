/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, OlHTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { OrderedListItem } from './OrderedListItem'

export interface OrderedListProps extends PropsWithChildren<OlHTMLAttributes<HTMLOListElement>> {
  markers?: boolean
}

interface OrderedListComponent extends ForwardRefExoticComponent<OrderedListProps & RefAttributes<HTMLOListElement>> {
  Item: typeof OrderedListItem
}

export const OrderedList = forwardRef(
  ({ children, markers = true, className, ...restProps }: OrderedListProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ol
      ref={ref}
      className={clsx('amsterdam-ordered-list', !markers && 'amsterdam-ordered-list--no-markers', className)}
      {...restProps}
    >
      {children}
    </ol>
  ),
) as OrderedListComponent

OrderedList.displayName = 'OrderedList'
OrderedList.Item = OrderedListItem
