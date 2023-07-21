/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import React, { ForwardedRef, forwardRef, HTMLAttributes, LiHTMLAttributes, PropsWithChildren } from 'react'

interface UnorderedListComponent
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLElement>> & React.RefAttributes<HTMLElement>
  > {
  Item: typeof UnorderedListItem
}

export interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {
  noMarker?: boolean
}

export const UnorderedList = forwardRef(
  (
    { children, noMarker = false, className, ...restProps }: PropsWithChildren<UnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={clsx('amsterdam-unordered-list', noMarker && 'amsterdam-unordered-list--no-marker', className)}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
) as UnorderedListComponent

UnorderedList.displayName = 'UnorderedList'

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>

export const UnorderedListItem = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li ref={ref} className={clsx('amsterdam-unordered-list__item', className)} {...restProps}>
        {children}
      </li>
    )
  },
)

UnorderedListItem.displayName = 'UnorderedListItem'
UnorderedList.Item = UnorderedListItem
