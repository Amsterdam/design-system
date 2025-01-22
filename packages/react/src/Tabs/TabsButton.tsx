/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, startTransition, useContext } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsButtonProps = {
  /** An identifier. */
  tab: number
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  ({ children, className, tab = 0, ...restProps }: TabsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeTab, tabsId, updateTab } = useContext(TabsContext)

    return (
      <button
        {...restProps}
        id={`${tabsId}-tab-${tab}`}
        ref={ref}
        aria-controls={`${tabsId}-panel-${tab}`}
        aria-selected={activeTab === tab}
        className={clsx('ams-tabs__button', className)}
        role="tab"
        tabIndex={activeTab === tab ? 0 : -1}
        onClick={() => {
          startTransition(() => {
            updateTab(tab)
          })
        }}
      >
        <span aria-hidden="true" className="ams-tabs__button-label-hidden">
          {children}
        </span>
        <span className="ams-tabs__button-label">{children}</span>
      </button>
    )
  },
)

TabsButton.displayName = 'Tabs.Button'
