/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useContext, useTransition } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsButtonProps = {
  label: string
  tab: number
  isDisabled?: boolean
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  ({ label, tab = 0, className, isDisabled, ...restProps }: TabsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeTab, updateTab, tabsId } = useContext(TabsContext)
    const [isPending, startTransition] = useTransition()

    return (
      <button
        {...restProps}
        role="tab"
        aria-controls={`${tabsId}-panel-${tab}`}
        aria-selected={activeTab === tab}
        tabIndex={activeTab === tab ? 0 : -1}
        ref={ref}
        onClick={() => {
          startTransition(() => {
            updateTab(tab)
          })
        }}
        className={clsx(
          'amsterdam-tabs__button',
          activeTab === tab && 'amsterdam-tabs__button--selected',
          isPending && 'amsterdam-tabs__button--pending',
          isDisabled && 'amsterdam-tabs__button--disabled',
          className,
        )}
      >
        {label}
      </button>
    )
  },
)

TabsButton.displayName = 'Tabs.Button'
