/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsPanelProps = {
  tab: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsPanel = forwardRef(
  ({ tab, children, className, ...restProps }: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeTab, tabsId } = useContext(TabsContext)

    if (tab !== activeTab) {
      return null
    }

    return (
      <div
        {...restProps}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${tab}`}
        id={`${tabsId}-panel-${tab}`}
        tabIndex={0}
        ref={ref}
        className={clsx('ams-tabs__panel', className)}
      >
        {children}
      </div>
    )
  },
)

TabsPanel.displayName = 'Tabs.Panel'
