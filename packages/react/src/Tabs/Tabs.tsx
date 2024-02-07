/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useState, useTransition } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsLink } from './TabsLink'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'

export type TabsProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type TabsComponent = {
  List: typeof TabsList
  Link: typeof TabsLink
  Panel: typeof TabsPanel
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>

type TabsIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export const Tabs = forwardRef(
  ({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [selectedTab, setSelectedTab] = useState<TabsIndex>(0)
    const [isPending, startTransition] = useTransition()

    const onTabClick = (tab: TabsIndex) => {
      startTransition(() => {
        setSelectedTab(tab)
      })
    }

    return (
      <div
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-tabs', isPending && 'amsterdam-tabs--pending', className)}
      >
        <TabsList>
          <TabsLink label="Gegevens" onClick={() => onTabClick(0)} selected={selectedTab === 0} />
          <TabsLink label="Aanslagen" onClick={() => onTabClick(1)} selected={selectedTab === 1} />
          <TabsLink label="Bezwaar" onClick={() => onTabClick(2)} selected={selectedTab === 2} />
        </TabsList>
        {selectedTab === 0 && <TabsPanel>Gegevens</TabsPanel>}
        {selectedTab === 1 && <TabsPanel>Aanslagen</TabsPanel>}
        {selectedTab === 2 && <TabsPanel>Bezwaar</TabsPanel>}
        {children}
      </div>
    )
  },
) as TabsComponent

Tabs.List = TabsList
Tabs.Link = TabsLink
Tabs.Panel = TabsPanel
Tabs.displayName = 'Tabs'
