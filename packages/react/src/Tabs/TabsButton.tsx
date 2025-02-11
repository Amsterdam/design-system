/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, startTransition, useContext } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, MouseEvent, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsButtonProps = {
  /** An identifier. */
  tab: number
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  ({ children, className, onClick, tab = 0, ...restProps }: TabsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeTab, tabsId, updateTab } = useContext(TabsContext)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      startTransition(() => {
        updateTab(tab)
      })
    }

    return (
      <button
        {...restProps}
        aria-controls={`${tabsId}-panel-${tab}`}
        aria-selected={activeTab === tab}
        className={clsx('ams-tabs__button', className)}
        id={`${tabsId}-tab-${tab}`}
        onClick={handleClick}
        ref={ref}
        role="tab"
        tabIndex={activeTab === tab ? 0 : -1}
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
