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
  /** Changes the text color for readability on a dark background. */
  inverseColor?: boolean
  /** The size of the ordered list */
  size?: 'small'
} & PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>

const OrderedListRoot = forwardRef(
  (
    { children, className, inverseColor, size, markers = true, ...restProps }: OrderedListProps,
    ref: ForwardedRef<HTMLOListElement>,
  ) => (
    <ol
      ref={ref}
      className={clsx(
        'ams-ordered-list',
        inverseColor && 'ams-ordered-list--inverse-color',
        !markers && 'ams-ordered-list--no-markers',
        size && `ams-ordered-list--${size}`,
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
