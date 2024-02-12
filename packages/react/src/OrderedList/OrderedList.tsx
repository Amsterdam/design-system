/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, OlHTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { OrderedListItem } from './OrderedListItem'

export type OrderedListProps = {
  markers?: boolean
  inverseColor?: boolean
} & PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>

type OrderedListComponent = {
  Item: typeof OrderedListItem
} & ForwardRefExoticComponent<OrderedListProps & RefAttributes<HTMLOListElement>>

export const OrderedList = forwardRef(
  (
    { children, markers = true, inverseColor, className, ...restProps }: OrderedListProps,
    ref: ForwardedRef<HTMLOListElement>,
  ) => (
    <ol
      ref={ref}
      className={clsx(
        'amsterdam-ordered-list',
        !markers && 'amsterdam-ordered-list--no-markers',
        inverseColor && 'amsterdam-ordered-list--inverse-color',
        className,
      )}
      {...restProps}
    >
      {children}
    </ol>
  ),
) as OrderedListComponent

OrderedList.displayName = 'OrderedList'
OrderedList.Item = OrderedListItem
