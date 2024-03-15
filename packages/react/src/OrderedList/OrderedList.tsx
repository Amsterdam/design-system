/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, OlHTMLAttributes, PropsWithChildren } from 'react'
import { OrderedListItem } from './OrderedListItem'

export type OrderedListProps = {
  markers?: boolean
  inverseColor?: boolean
} & PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>

const OrderedListRoot = forwardRef(
  (
    { children, className, inverseColor, markers = true, ...restProps }: OrderedListProps,
    ref: ForwardedRef<HTMLOListElement>,
  ) => (
    <ol
      ref={ref}
      className={clsx(
        'ams-ordered-list',
        inverseColor && 'ams-ordered-list--inverse-color',
        !markers && 'ams-ordered-list--no-markers',
        className,
      )}
      {...restProps}
    >
      {children}
    </ol>
  ),
)

OrderedListRoot.displayName = 'OrderedList'

export const OrderedList = Object.assign(OrderedListRoot, { Item: OrderedListItem })
