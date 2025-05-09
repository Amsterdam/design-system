/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, OlHTMLAttributes, PropsWithChildren } from 'react'
import { OrderedListItem } from './OrderedListItem'

export type OrderedListProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** Whether the list items show a marker. */
  markers?: boolean
  /** The size of the text. */
  size?: 'small'
} & PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>

const OrderedListRoot = forwardRef(
  (
    { children, className, color, markers = true, size, ...restProps }: OrderedListProps,
    ref: ForwardedRef<HTMLOListElement>,
  ) => (
    <ol
      className={clsx(
        'ams-ordered-list',
        color && `ams-ordered-list--${color}`,
        !markers && 'ams-ordered-list--no-markers',
        size && `ams-ordered-list--${size}`,
        className,
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </ol>
  ),
)

OrderedListRoot.displayName = 'OrderedList'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-ordered-list--docs|OrderedList docs at Amsterdam Design System}
 */
export const OrderedList = Object.assign(OrderedListRoot, { Item: OrderedListItem })
