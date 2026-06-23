/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactNode } from 'react'

import { Children } from 'react'

import './inline-list.css'

type InlineListProps = {
  /** A set of `InlineList.Item` elements. */
  readonly children: ReactNode
}

// Put a space between items so a line can break (and balance) between them, while each item stays whole.
// `role` restores the list semantics that `list-style: none` and `display: inline` strip in some browsers.
const InlineListRoot = ({ children }: InlineListProps) => (
  <ul className="_ams-inline-list sb-unstyled" role="list">
    {Children.toArray(children).flatMap((item, index) => (index > 0 ? [' ', item] : item))}
  </ul>
)

InlineListRoot.displayName = 'InlineList'

type InlineListItemProps = {
  /** The content of a single item. */
  readonly children: ReactNode
}

const InlineListItem = ({ children }: InlineListItemProps) => (
  <li className="_ams-inline-list__item" role="listitem">
    {children}
  </li>
)

InlineListItem.displayName = 'InlineList.Item'

/** Displays its items on centred lines of balanced length, keeping each item whole. */
export const InlineList = Object.assign(InlineListRoot, { Item: InlineListItem })
