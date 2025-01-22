/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsPanelProps = {
  /** The identifier of the corresponding Tab. */
  tab: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsPanel = forwardRef(
  ({ children, className, tab, ...restProps }: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeTab, tabsId } = useContext(TabsContext)

    if (tab !== activeTab) {
      return null
    }

    return (
      <div
        {...restProps}
        id={`${tabsId}-panel-${tab}`}
        ref={ref}
        aria-labelledby={`${tabsId}-tab-${tab}`}
        className={clsx('ams-tabs__panel', className)}
        role="tabpanel"
        tabIndex={0}
      >
        {children}
      </div>
    )
  },
)

TabsPanel.displayName = 'Tabs.Panel'
