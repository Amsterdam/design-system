/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { UnorderedListItem } from './UnorderedListItem'

export type UnorderedListProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** Whether the list items show a marker. */
  markers?: boolean
  /** The size of the text. */
  size?: 'small'
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

const UnorderedListRoot = forwardRef(
  (
    { children, className, color, markers = true, size, ...restProps }: UnorderedListProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        className={clsx(
          'ams-unordered-list',
          color && `ams-unordered-list--${color}`,
          !markers && 'ams-unordered-list--no-markers',
          size && `ams-unordered-list--${size}`,
          className,
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
)

UnorderedListRoot.displayName = 'UnorderedList'

export const UnorderedList = Object.assign(UnorderedListRoot, { Item: UnorderedListItem })
