/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { UnorderedListItem } from './UnorderedListItem'

export type UnorderedListProps = {
  /** Changes the text color for readability on a dark background. */
  inverseColor?: boolean
  /** Whether the list items show a marker. */
  markers?: boolean
  /** The size of the unordered list. */
  size?: 'small'
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

const UnorderedListRoot = forwardRef(
  (
    { children, className, inverseColor, markers = true, size, ...restProps }: UnorderedListProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          'ams-unordered-list',
          inverseColor && 'ams-unordered-list--inverse-color',
          !markers && 'ams-unordered-list--no-markers',
          size && `ams-unordered-list--${size}`,
          className,
        )}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
)

UnorderedListRoot.displayName = 'UnorderedList'

export const UnorderedList = Object.assign(UnorderedListRoot, { Item: UnorderedListItem })
