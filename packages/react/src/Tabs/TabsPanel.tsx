/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsPanelProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  /** The identifier of the Tab Panel. */
  id: string
}

export const TabsPanel = forwardRef(
  ({ children, className, id, ...restProps }: TabsPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeTabId } = useContext(TabsContext)

    if (id !== activeTabId) {
      return null
    }

    return (
      <div
        {...restProps}
        aria-labelledby={`button-${id}`}
        className={clsx('ams-tabs__panel', className)}
        id={id}
        ref={ref}
        role="tabpanel"
        tabIndex={0}
      >
        {children}
      </div>
    )
  },
)

TabsPanel.displayName = 'Tabs.Panel'
