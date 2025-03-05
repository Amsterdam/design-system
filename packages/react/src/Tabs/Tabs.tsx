/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsProps = {
  /** The number of the active tab. Corresponds to its `tab` value. */
  activeTab?: number
  /* Provides the id of the activated tab. */
  onTabChange?: (tabId: number) => void
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TabsRoot = forwardRef(
  ({ activeTab, children, className, onTabChange, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const tabsId = useId()
    const innerRef = useRef<HTMLDivElement>(null)
    const [activeTabId, setActiveTabId] = useState(0)

    const allTabs = useMemo(() => {
      if (!Array.isArray(children)) return []
      return children[0].props.children
    }, [children])

    useEffect(() => {
      if (typeof activeTab !== 'number') return
      if (!Number.isInteger(activeTab)) return

      if (activeTab < 0) {
        setActiveTabId(0)
      } else if (activeTab > allTabs.length - 1) {
        setActiveTabId(allTabs.length - 1)
      } else {
        setActiveTabId(activeTab)
      }
    }, [activeTab, allTabs])

    const updateTab = (tab: number) => {
      setActiveTabId(tab)
      onTabChange?.(tab)
    }

    // Use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      horizontally: true,
      rotating: true,
    })

    return (
      <TabsContext.Provider value={{ activeTab: activeTabId, tabsId, updateTab }}>
        <div {...restProps} className={clsx('ams-tabs', className)} onKeyDown={keyDown} ref={innerRef}>
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
