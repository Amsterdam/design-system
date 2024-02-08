/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { createContext, forwardRef, useState } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsButton } from './TabsButton'
// import TabsContext from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'

export type TabsProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type TabsComponent = {
  List: typeof TabsList
  Button: typeof TabsButton
  Panel: typeof TabsPanel
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>

// eslint-disable-next-line no-unused-vars
export const TabsContext = createContext({ activeTab: 0, updateTab: (_tab: number) => {} })

export const Tabs = forwardRef(
  ({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    // const [activeTab] = useState(null)
    // const [isPending, startTransition] = useTransition()
    const [activeTab, setActiveTab] = useState(0)
    const updateTab = (tab: number) => {
      setActiveTab(tab)
    }

    return (
      <TabsContext.Provider value={{ activeTab, updateTab }}>
        <div {...restProps} ref={ref} className={clsx('amsterdam-tabs', className)}>
          {/* <TabsList>
          <TabsButton label="Gegevens" onClick={() => onTabClick(0)} selected={activeTab === 0} />
          <TabsButton label="Aanslagen" onClick={() => onTabClick(1)} selected={activeTab === 1} />
          <TabsButton label="Bezwaar" onClick={() => onTabClick(2)} selected={activeTab === 2} />
        </TabsList>
        {activeTab === 0 && <TabsPanel>Gegevens</TabsPanel>}
        {activeTab === 1 && <TabsPanel>Aanslagen</TabsPanel>}
        {activeTab === 2 && <TabsPanel>Bezwaar</TabsPanel>} */}

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
