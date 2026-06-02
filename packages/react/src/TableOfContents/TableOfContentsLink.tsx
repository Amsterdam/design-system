/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ForwardedRef, ReactElement, ReactNode } from 'react'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { Children, cloneElement, forwardRef, isValidElement, useContext, useId, useRef, useState } from 'react'

import { IconButton } from '../IconButton'
import { TableOfContentsContext } from './TableOfContentsContext'
import { TableOfContentsList } from './TableOfContentsList'

export type TableOfContentsLinkProps = {
  /**
   * Whether the nested list is initially expanded.
   * Ignored when the parent `TableOfContents` is not `collapsible` or when there is no nested list.
   */
  readonly defaultExpanded?: boolean
  /** The text for the link. */
  readonly label: string
  /**
   * Callback fired when the nested list is expanded or collapsed. Receives the new expanded state.
   * Ignored when the parent `TableOfContents` is not `collapsible` or when there is no nested list.
   */
  readonly onToggle?: (expanded: boolean) => void
} & Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>

// A Link is expandable when it has a `TableOfContents.List` as a direct child.
const findListChild = (children: ReactNode): ReactElement | undefined => {
  for (const child of Children.toArray(children)) {
    if (isValidElement(child) && child.type === TableOfContentsList) {
      return child
    }
  }
  return undefined
}

export const TableOfContentsLink = forwardRef(
  (
    { children, className, defaultExpanded, label, onToggle, ...restProps }: TableOfContentsLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const { collapsible, hideAccessibleLabel, showAccessibleLabel } = useContext(TableOfContentsContext)
    const [isExpanded, setIsExpanded] = useState(defaultExpanded ?? false)

    const panelId = useId()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const itemRef = useRef<HTMLLIElement>(null)

    const listChild = findListChild(children)
    const isExpandable = collapsible && !!listChild

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
    const handleClick = () => {
      const nextIsExpanded = !isExpanded
      moveFocusToToggleButton(nextIsExpanded)
      setIsExpanded(nextIsExpanded)
      onToggle?.(nextIsExpanded)
    }

    // When expandable, clone the nested list so it receives the id referenced by aria-controls.
    const renderedChildren = isExpandable
      ? Children.map(children, (child) => {
          if (isValidElement(child) && child.type === TableOfContentsList) {
            return cloneElement(child as ReactElement<{ id?: string }>, { id: panelId })
          }
          return child
        })
      : children

    return (
      <li
        className={clsx(
          'ams-table-of-contents__item',
          isExpandable && 'ams-table-of-contents__item--expandable',
          isExpandable && !isExpanded && 'ams-table-of-contents__item--collapsed',
        )}
        ref={itemRef}
      >
        {isExpandable && (
          <IconButton
            aria-controls={panelId}
            aria-expanded={isExpanded}
            className="ams-table-of-contents__toggle"
            label={`${isExpanded ? hideAccessibleLabel : showAccessibleLabel} ${label}`}
            onClick={handleClick}
            ref={buttonRef}
            svg={ChevronDownIcon}
          />
        )}
        <a {...restProps} className={clsx('ams-table-of-contents__link', className)} ref={ref}>
          {label}
        </a>
        {renderedChildren}
      </li>
    )
  },
)

TableOfContentsLink.displayName = 'TableOfContents.Link'
