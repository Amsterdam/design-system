/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { UnorderedListItem } from './UnorderedListItem'

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
UnorderedList.Item = UnorderedListItem
