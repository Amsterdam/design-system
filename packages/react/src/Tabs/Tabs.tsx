/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactElement } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsProps = {
  /** The identifier of the initially active tab. Corresponds to its `tab` value. */
  activeTab?: string
  /* Provides the id of the activated tab. */
  onTabChange?: (tabId: string) => void
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TabsRoot = forwardRef(
  ({ activeTab, children, className, onTabChange, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const tabsId = useId()
    const innerRef = useRef<HTMLDivElement>(null)
    const [activeTabId, setActiveTabId] = useState<string>()

    const allTabIds = useMemo(() => {
      if (!Array.isArray(children)) return []
      return (children[0].props.children as ReactElement[]).map((child) => child.props.tab)
    }, [children])

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

    // Use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      horizontally: true,
      rotating: true,
    })

    return (
      <TabsContext.Provider value={{ activeTabId, tabsId, updateTab }}>
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
