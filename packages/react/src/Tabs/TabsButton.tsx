/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, startTransition, useContext } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsButtonProps = {
  label: string
  tab: number
  isDisabled?: boolean
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  ({ label, tab = 0, className, ...restProps }: TabsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeTab, updateTab, tabsId } = useContext(TabsContext)

    return (
      <button
        {...restProps}
        role="tab"
        id={`{tabsId}-tab-${tab}`}
        aria-controls={`${tabsId}-panel-${tab}`}
        aria-selected={activeTab === tab}
        tabIndex={activeTab === tab ? 0 : -1}
        ref={ref}
        onClick={() => {
          startTransition(() => {
            updateTab(tab)
          })
        }}
        className={clsx('amsterdam-tabs__button', className)}
      >
        {label}
      </button>
    )
  },
)

TabsButton.displayName = 'Tabs.Button'
