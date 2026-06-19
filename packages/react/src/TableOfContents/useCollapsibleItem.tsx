/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactElement, ReactNode } from 'react'

import { Children, cloneElement, isValidElement, useContext, useId, useRef, useState } from 'react'

import { TableOfContentsContext } from './TableOfContentsContext'
import { TableOfContentsList } from './TableOfContentsList'

// A Link is expandable when it has a `TableOfContents.List` as a direct child.
const findListChild = (children: ReactNode): ReactElement | undefined => {
  for (const child of Children.toArray(children)) {
    if (isValidElement(child) && child.type === TableOfContentsList) {
      return child
    }
  }
  return undefined
}

type UseCollapsibleItemProps = {
  children: ReactNode
  defaultExpanded?: boolean
  onToggle?: (expanded: boolean) => void
}

/**
 * Drives the collapsible behaviour of a `TableOfContents.Link` that wraps a nested list: it tracks the
 * expanded state, links the toggle button to the nested list through a stable `aria-controls` id, and
 * restores focus to the toggle when collapsing a subtree that holds focus.
 *
 * Returns the refs, state, and rendered children the link needs; it deliberately leaves the markup and
 * the accessible label text to the component.
 */
export const useCollapsibleItem = ({ children, defaultExpanded, onToggle }: UseCollapsibleItemProps) => {
  const { collapsible } = useContext(TableOfContentsContext)
  const [isExpanded, setIsExpanded] = useState(defaultExpanded ?? false)

  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRef = useRef<HTMLLIElement>(null)

  const listChild = findListChild(children)
  const isExpandable = collapsible && !!listChild
  // Reuse a provided nested list id to keep aria-controls references stable, but ignore a blank
  // id so aria-controls never points at an empty string.
  const providedListId = (listChild?.props as { id?: string } | undefined)?.id
  const nestedListId = providedListId?.trim() ? providedListId : panelId

  // When collapsing, if focus is inside the subtree that's about to be hidden, move it to the toggle button.
  const moveFocusToToggleButton = (nextIsExpanded: boolean) => {
    if (!nextIsExpanded && itemRef.current && document.activeElement instanceof HTMLElement) {
      const list = itemRef.current.querySelector('.ams-table-of-contents__list')

      if (list?.contains(document.activeElement)) {
        buttonRef.current?.focus()
      }
    }
  }

  // Toggles the local expanded state and emits the new expanded state
  const handleToggle = () => {
    const nextIsExpanded = !isExpanded
    moveFocusToToggleButton(nextIsExpanded)
    setIsExpanded(nextIsExpanded)
    onToggle?.(nextIsExpanded)
  }

  // When expandable, clone the nested list so it receives the id referenced by aria-controls.
  const renderedChildren = isExpandable
    ? Children.map(children, (child) => {
        if (isValidElement(child) && child.type === TableOfContentsList) {
          return cloneElement(child as ReactElement<{ id?: string }>, { id: nestedListId })
        }
        return child
      })
    : children

  return { buttonRef, handleToggle, isExpandable, isExpanded, itemRef, nestedListId, renderedChildren }
}
