/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  LiHTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'

export interface UnorderedListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {
  markers?: boolean
}

interface UnorderedListComponent
  extends ForwardRefExoticComponent<UnorderedListProps & RefAttributes<HTMLUListElement>> {
  Item: typeof UnorderedListItem
}

export const UnorderedList = forwardRef(
  ({ children, markers = true, className, ...restProps }: UnorderedListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul
        ref={ref}
        className={clsx('amsterdam-unordered-list', !markers && 'amsterdam-unordered-list--no-markers', className)}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
) as UnorderedListComponent

UnorderedList.displayName = 'UnorderedList'

export type UnorderedListItemProps = PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

export const UnorderedListItem = forwardRef(
  ({ children, className, ...restProps }: UnorderedListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li ref={ref} className={clsx('amsterdam-unordered-list__item', className)} {...restProps}>
        {children}
      </li>
    )
  },
)

UnorderedListItem.displayName = 'UnorderedListItem'
UnorderedList.Item = UnorderedListItem
