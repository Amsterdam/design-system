/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { TabsButton } from './TabsButton'
import TabsContext from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'
import useFocusWithArrows from './useFocusWithArrows'

export type TabsProps = {} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type TabsComponent = {
  List: typeof TabsList
  Button: typeof TabsButton
  Panel: typeof TabsPanel
} & ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>>

export const Tabs = forwardRef(
  ({ children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [activeTab, setActiveTab] = useState(0)
    const innerRef = useRef<HTMLDivElement>(null)

    const updateTab = (tab: number) => {
      setActiveTab(tab)
    }

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useFocusWithArrows(innerRef, true, false, true)

    return (
      <TabsContext.Provider value={{ activeTab, updateTab }}>
        <div
          {...restProps}
          role="tabs"
          ref={innerRef}
          onKeyDown={keyDown}
          className={clsx('amsterdam-tabs', className)}
        >
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
