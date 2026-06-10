/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type OrderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

/**
 * A single item within an Ordered List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-ordered-list--docs Ordered List docs at Amsterdam Design System}
 */
export const OrderedListItem = forwardRef(
  ({ children, className, ...restProps }: OrderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li className={clsx('ams-ordered-list__item', className)} ref={ref} {...restProps}>
      {children}
    </li>
  ),
)

OrderedListItem.displayName = 'OrderedList.Item'
