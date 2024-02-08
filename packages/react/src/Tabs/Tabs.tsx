/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useState } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsButton } from './TabsButton'
import TabsContext from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'

export type TabsProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type TabsComponent = {
  List: typeof TabsList
  Button: typeof TabsButton
  Panel: typeof TabsPanel
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>

export const Tabs = forwardRef(
  ({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeTab, setActiveTab] = useState(0)
    const updateTab = (tab: number) => {
      setActiveTab(tab)
    }

    return (
      <TabsContext.Provider value={{ activeTab, updateTab }}>
        <div {...restProps} ref={ref} className={clsx('amsterdam-tabs', className)}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
) as TabsComponent

Tabs.List = TabsList
Tabs.Button = TabsButton
Tabs.Panel = TabsPanel
Tabs.displayName = 'Tabs'
