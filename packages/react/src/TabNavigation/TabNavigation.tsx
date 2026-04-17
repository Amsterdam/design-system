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
  accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  accessibleNameId?: string
  /** The direction in which the links are laid out. */
  orientation?: 'horizontal' | 'vertical'
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

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
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-tab-navigation--docs Tab Navigation docs at Amsterdam Design System}
 */
export const TabNavigation = Object.assign(TabNavigationRoot, {
  Link: TabNavigationLink,
  List: TabNavigationList,
})
