/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'

export type TabsProps = {
  /** The identifier of the initially active Tab. Corresponds to its Panel `id` value. */
  activeTab?: string
  /* Provides the id of the activated Panel. */
  onTabChange?: (panelId: string) => void
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TabsRoot = forwardRef(
  ({ activeTab, children, className, onTabChange, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)
    const [activeTabId, setActiveTabId] = useState<string>()

    // Use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    useEffect(() => {
      if (innerRef.current) {
        const allTabButtons = innerRef.current.querySelectorAll('.ams-tabs__list .ams-tabs__button:not([disabled])')
        const allTabIds = Array.from(allTabButtons).map((button) => button.getAttribute('aria-controls') || '')

        if (!activeTab) {
          updateTab(allTabIds[0])
        } else if (!allTabIds.includes(activeTab)) {
          console.warn(`The active tab "${activeTab}" does not exist. Falling back to the first tab.`)
          updateTab(allTabIds[0])
        } else {
          updateTab(activeTab)
        }
      }
    }, [activeTab, innerRef])

    const updateTab = (tab: string) => {
      setActiveTabId(tab)
      onTabChange?.(tab)
    }

    return (
      <TabsContext.Provider value={{ activeTabId, updateTab }}>
        <div {...restProps} className={clsx('ams-tabs', className)} ref={innerRef}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)

TabsRoot.displayName = 'Tabs'

export const Tabs = Object.assign(TabsRoot, {
  Button: TabsButton,
  List: TabsList,
  Panel: TabsPanel,
})
