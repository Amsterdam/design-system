/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { UnorderedListItem } from './UnorderedListItem'

export type UnorderedListProps = {
  markers?: boolean
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

type UnorderedListComponent = {
  Item: typeof UnorderedListItem
} & ForwardRefExoticComponent<UnorderedListProps & RefAttributes<HTMLUListElement>>

export const UnorderedList = forwardRef(
  (
    { children, markers = true, inverseColor, className, ...restProps }: UnorderedListProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          'amsterdam-unordered-list',
          !markers && 'amsterdam-unordered-list--no-markers',
          inverseColor && 'amsterdam-unordered-list--inverse-color',
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
