/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef, useEffect, useMemo, useState } from 'react'

import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'

export type TabsProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /** The identifier of the initially active Tab. Corresponds to its Panel `id` value. */
  activeTab?: string
  /* Provides the id of the activated Panel. */
  onTabChange?: (panelId: string) => void
}

const TabsRoot = forwardRef(
  ({ activeTab, children, className, onTabChange, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeTabId, setActiveTabId] = useState<string>()

    // Get all tab ids from TabsButtons on first render
    const allTabIds = useMemo(() => {
      if (!Array.isArray(children)) return []

      // The first child of Tabs should be TabsList
      const tabsList = children[0]
      // Get children of TabsList
      const tabsListChildren = tabsList.props.children

      // TabsList can have 0, 1, or more children
      // If there is only 1 child, it will be an object
      if (tabsListChildren.props) {
        return [tabsListChildren.props['aria-controls']]
      }

      // If there is more than 1 child, it will be an array
      if (Array.isArray(tabsListChildren)) {
        return tabsListChildren.map((child) => child.props['aria-controls'])
      }

      // If there are no children, return an empty array
      return []
    }, [])

    useEffect(() => {
      if (!activeTab) {
        setActiveTabId(allTabIds[0])
      } else if (!allTabIds.includes(activeTab)) {
        console.warn(`The active tab "${activeTab}" does not exist. Falling back to the first tab.`)
        setActiveTabId(allTabIds[0])
      } else {
        setActiveTabId(activeTab)
      }
    }, [activeTab, allTabIds])

    const updateTab = (tab: string) => {
      setActiveTabId(tab)
      onTabChange?.(tab)
    }

    return (
      <TabsContext.Provider value={{ activeTabId, updateTab }}>
        <div {...restProps} className={clsx('ams-tabs', className)} ref={ref}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)

TabsRoot.displayName = 'Tabs'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-tabs--docs Tabs docs at Amsterdam Design System}
 */
export const Tabs = Object.assign(TabsRoot, {
  Button: TabsButton,
  List: TabsList,
  Panel: TabsPanel,
})
