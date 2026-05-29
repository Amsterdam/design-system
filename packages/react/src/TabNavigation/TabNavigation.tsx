/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { TabNavigationLink } from './TabNavigationLink'
import { TabNavigationList } from './TabNavigationList'

export type TabNavigationProps = {
  /** The accessible name for the navigation. */
  readonly accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  readonly accessibleNameId?: string
  /** The direction in which the links are laid out. */
  readonly orientation?: 'horizontal' | 'vertical'
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

const TabNavigationRoot = forwardRef(
  (
    { accessibleName, accessibleNameId, children, className, orientation, ...restProps }: TabNavigationProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const generatedId = useId()
    const labelId = accessibleNameId || generatedId

    return (
      <nav
        {...restProps}
        aria-labelledby={labelId}
        className={clsx('ams-tab-navigation', orientation === 'vertical' && 'ams-tab-navigation--vertical', className)}
        ref={ref}
      >
        <h2 aria-hidden={true} className="ams-visually-hidden" id={labelId}>
          {accessibleName || 'Navigatie'}
        </h2>
        {children}
      </nav>
    )
  },
)

TabNavigationRoot.displayName = 'TabNavigation'

/**
 * A horizontal or vertical list of links, styled as tabs, to navigate between a set of related pages.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-tab-navigation--docs Tab Navigation docs at Amsterdam Design System}
 */
export const TabNavigation = Object.assign(TabNavigationRoot, {
  Link: TabNavigationLink,
  List: TabNavigationList,
})
