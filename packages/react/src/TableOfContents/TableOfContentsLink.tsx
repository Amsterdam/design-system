/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef } from 'react'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { IconButton } from '../IconButton'
import { TableOfContentsContext } from './TableOfContentsContext'
import { useCollapsibleItem } from './useCollapsibleItem'

export type TableOfContentsLinkProps = {
  /**
   * Whether the nested list is initially expanded.
   * Ignored when the parent `TableOfContents` is not `collapsible` or when there is no nested list.
   */
  readonly defaultExpanded?: boolean
  /** The text for the link. */
  readonly label: string
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
  /**
   * Callback fired when the nested list is expanded or collapsed. Receives the new expanded state.
   * Ignored when the parent `TableOfContents` is not `collapsible` or when there is no nested list.
   */
  readonly onToggle?: (expanded: boolean) => void
} & Readonly<AnchorHTMLAttributes<HTMLAnchorElement>>

/**
 * A link to a section of the current page within a Table of Contents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table of Contents docs at Amsterdam Design System}
 */
export const TableOfContentsLink = forwardRef(
  (
    { children, className, defaultExpanded, label, linkComponent, onToggle, ...restProps }: TableOfContentsLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const { hideAccessibleLabel, showAccessibleLabel } = useContext(TableOfContentsContext)
    const { buttonRef, handleToggle, isExpandable, isExpanded, itemRef, nestedListId, renderedChildren } =
      useCollapsibleItem({ children, defaultExpanded, onToggle })

    const Tag = linkComponent || 'a'

    return (
      <li
        className={clsx(
          'ams-table-of-contents__item',
          isExpandable && !isExpanded && 'ams-table-of-contents__item--collapsed',
        )}
        ref={itemRef}
      >
        {isExpandable && (
          <IconButton
            aria-controls={nestedListId}
            aria-expanded={isExpanded}
            className="ams-table-of-contents__button"
            label={`${isExpanded ? hideAccessibleLabel : showAccessibleLabel} ${label}`}
            onClick={handleToggle}
            ref={buttonRef}
            svg={ChevronDownIcon}
          />
        )}
        <Tag
          {...restProps}
          className={clsx('ams-table-of-contents__link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {label}
        </Tag>
        {renderedChildren}
      </li>
    )
  },
)

TableOfContentsLink.displayName = 'TableOfContents.Link'
