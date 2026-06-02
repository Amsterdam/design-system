/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'

import type { HeadingProps } from '../Heading'

import { useKeyboardFocus } from '../common/useKeyboardFocus'
import { Heading } from '../Heading'
import { TableOfContentsContext } from './TableOfContentsContext'
import { TableOfContentsLink } from './TableOfContentsLink'
import { TableOfContentsList } from './TableOfContentsList'

export type TableOfContentsProps = {
  /**
   * Whether list items that contain a nested list can be expanded and collapsed.
   * @default false
   */
  readonly collapsible?: boolean
  /** The text for the Heading. */
  readonly heading?: string
  /**
   * The hierarchical level of the Heading within the document.
   * Visually, it always has the size of a level 3 Heading.
   */
  readonly headingLevel?: HeadingProps['level']
  /**
   * An accessible phrase used in the toggle button label when a section is expanded.
   * @default Verberg submenu van
   */
  readonly hideAccessibleLabel?: string
  /**
   * An accessible phrase used in the toggle button label when a section is collapsed.
   * @default Toon submenu van
   */
  readonly showAccessibleLabel?: string
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

const TableOfContentsRoot = forwardRef(
  (
    {
      children,
      className,
      collapsible = false,
      heading,
      headingLevel = 2,
      hideAccessibleLabel,
      showAccessibleLabel,
      ...restProps
    }: TableOfContentsProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const innerRef = useRef<HTMLElement>(null)

    useImperativeHandle(ref, () => innerRef.current as HTMLElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      focusableElements: ['.ams-table-of-contents__toggle:not([disabled])'],
      rotating: true,
    })

    return (
      <TableOfContentsContext.Provider
        value={{
          collapsible,
          hideAccessibleLabel: hideAccessibleLabel ?? 'Verberg submenu van',
          showAccessibleLabel: showAccessibleLabel ?? 'Toon submenu van',
        }}
      >
        <nav
          {...restProps}
          className={clsx('ams-table-of-contents', collapsible && 'ams-table-of-contents--collapsible', className)}
          onKeyDown={collapsible ? keyDown : undefined}
          ref={innerRef}
        >
          {heading && (
            <Heading className="ams-table-of-contents__heading" level={headingLevel} size="level-3">
              {heading}
            </Heading>
          )}
          {children}
        </nav>
      </TableOfContentsContext.Provider>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table Of Contents docs at Amsterdam Design System}
 */
export const TableOfContents = Object.assign(TableOfContentsRoot, {
  Link: TableOfContentsLink,
  List: TableOfContentsList,
})
