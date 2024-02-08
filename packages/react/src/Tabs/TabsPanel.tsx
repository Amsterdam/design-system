/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import TabsContext from './TabsContext'

export type TabsPanelProps = {
  tab: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsPanel = forwardRef(
  ({ tab, children, className, ...restProps }: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeTab } = useContext(TabsContext)

    if (tab !== activeTab) {
      return null
    }

    return (
      <div
        {...restProps}
        role="tabpanel"
        id={`panel-${tab}`}
        tabIndex={0}
        ref={ref}
        className={clsx('amsterdam-tabs__panel', className)}
      >
        {children}
      </div>
    )
  },
)

TabsPanel.displayName = 'Tabs.Panel'
