/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsButton } from './TabsButton'
import { TabsContext } from './TabsContext'
import { TabsList } from './TabsList'
import { TabsPanel } from './TabsPanel'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsProps = {
  /** The initial active tab. */
  activeTab?: number
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TabsRoot = forwardRef(
  ({ activeTab, children, className, ...restProps }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const tabsId = useId()
    const [_activeTab, setActiveTab] = useState(activeTab ?? 0)
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
      <TabsContext.Provider value={{ activeTab: _activeTab, updateTab, tabsId }}>
        <div {...restProps} role="tabs" ref={innerRef} onKeyDown={keyDown} className={clsx('ams-tabs', className)}>
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
