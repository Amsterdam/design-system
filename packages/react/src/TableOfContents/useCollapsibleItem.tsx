/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactElement, ReactNode } from 'react'

import { Children, cloneElement, isValidElement, useContext, useId, useRef } from 'react'

import { useCollapsible } from '../common/useCollapsible'
import { TableOfContentsContext } from './TableOfContentsContext'
import { TableOfContentsList } from './TableOfContentsList'
import { TableOfContentsListContext } from './TableOfContentsListContext'

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
  expanded?: boolean
  onToggle?: (expanded: boolean) => void
}

/**
 * Drives the collapsible behaviour of a `TableOfContents.Link` that wraps a nested list: it tracks the
 * expanded state (controlled via `expanded` or uncontrolled via `defaultExpanded`), links the toggle
 * button to the nested list through a stable `aria-controls` id, and restores focus to the toggle when
 * collapsing a subtree that holds focus.
 *
 * When uncontrolled, the initial expanded state follows the nested list's `defaultCollapsed` prop,
 * falling back to the default inherited from the surrounding list; an explicit `defaultExpanded` on the
 * Link overrides both. This resolved default seeds the shared `useCollapsible` state once, on mount.
 *
 * Returns the refs, state, and rendered children the link needs; it deliberately leaves the markup and
 * the accessible label text to the component.
 */
export const useCollapsibleItem = ({ children, defaultExpanded, expanded, onToggle }: UseCollapsibleItemProps) => {
  const { collapsible } = useContext(TableOfContentsContext)
  const collapsedByDefault = useContext(TableOfContentsListContext)

  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRef = useRef<HTMLLIElement>(null)

  const listChild = findListChild(children)
  const childListProps = listChild?.props as { defaultCollapsed?: boolean; id?: string } | undefined
  const isExpandable = collapsible && !!listChild

  // A Link follows its direct nested list's `defaultCollapsed` prop, falling back to the default
  // inherited from the surrounding list; an explicit `defaultExpanded` on the Link overrides both.
  const collapsedForThisLink = childListProps?.defaultCollapsed ?? collapsedByDefault
  const expandedByDefault = defaultExpanded ?? !collapsedForThisLink

  const [isExpanded, toggle] = useCollapsible({
    defaultValue: expandedByDefault,
    gate: isExpandable,
    onToggle,
    value: expanded,
  })

  // Reuse a provided nested list id to keep aria-controls references stable, but ignore a blank
  // id so aria-controls never points at an empty string.
  const providedListId = childListProps?.id
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

  // Restore focus before the toggle hides the subtree, then toggle the (controlled or internal) state.
  const handleToggle = () => {
    moveFocusToToggleButton(!isExpanded)
    toggle()
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
