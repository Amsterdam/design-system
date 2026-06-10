/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { TabsContext } from './TabsContext'

export type TabsPanelProps = {
  /** The identifier of the Tab Panel. */
  readonly id: string
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * The content panel shown when its associated tab button is active.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-tabs--docs Tabs docs at Amsterdam Design System}
 */
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
