/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type TabsComponent = {
  /** Always use a TabList to hold the Tab Buttons */
  List: typeof TabsList
  /** Use a TabButton for each tab */
  Button: typeof TabsButton
  /** A TabsPanel will only return its contents when the corresponding TabsButton is activated */
  Panel: typeof TabsPanel
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>

export const Tabs = forwardRef(
  ({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const tabsId = useId()
    const [activeTab, setActiveTab] = useState(0)
    const innerRef = useRef<HTMLDivElement>(null)

    const updateTab = (tab: number) => {
      setActiveTab(tab)
    }

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      rotating: true,
      horizontally: true,
    })

    return (
      <TabsContext.Provider value={{ activeTab, updateTab, tabsId }}>
        <div {...restProps} role="tabs" ref={innerRef} onKeyDown={keyDown} className={clsx('ams-tabs', className)}>
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
