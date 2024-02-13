/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { UnorderedListItem } from './UnorderedListItem'

export type UnorderedListProps = {
  inverseColor?: boolean
  markers?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

type UnorderedListComponent = {
  Item: typeof UnorderedListItem
} & ForwardRefExoticComponent<UnorderedListProps & RefAttributes<HTMLUListElement>>

export const UnorderedList = forwardRef(
  (
    { children, className, inverseColor, markers = true, ...restProps }: UnorderedListProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          'amsterdam-unordered-list',
          inverseColor && 'amsterdam-unordered-list--inverse-color',
          !markers && 'amsterdam-unordered-list--no-markers',
          className,
        )}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
) as UnorderedListComponent

UnorderedList.displayName = 'UnorderedList'
UnorderedList.Item = UnorderedListItem
