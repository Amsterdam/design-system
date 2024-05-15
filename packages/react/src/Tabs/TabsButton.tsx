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
    const { activeTab, updateTab, tabsId } = useContext(TabsContext)

    return (
      <button
        {...restProps}
        role="tab"
        id={`${tabsId}-tab-${tab}`}
        aria-controls={`${tabsId}-panel-${tab}`}
        aria-selected={activeTab === tab}
        tabIndex={activeTab === tab ? 0 : -1}
        ref={ref}
        onClick={() => {
          startTransition(() => {
            updateTab(tab)
          })
        }}
        className={clsx('ams-tabs__button', className)}
      >
        {children}
      </button>
    )
  },
)

TabsButton.displayName = 'Tabs.Button'
