/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type UnorderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

/**
 * A single item within an Unordered List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-unordered-list--docs Unordered List docs at Amsterdam Design System}
 */
export const UnorderedListItem = forwardRef(
  ({ children, className, ...restProps }: UnorderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li className={clsx('ams-unordered-list__item', className)} ref={ref} {...restProps}>
      {children}
    </li>
  ),
)

UnorderedListItem.displayName = 'UnorderedList.Item'
