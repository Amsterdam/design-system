/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, startTransition, useContext } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'
import { TabsContext } from './Tabs'
// import TabsContext from './TabsContext'

export type TabsButtonProps = {
  label: string
  tab: number
  isDisabled?: boolean
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  ({ label, tab = 0, className, isDisabled, ...restProps }: TabsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeTab, updateTab } = useContext(TabsContext)

    return (
      <button
        {...restProps}
        ref={ref}
        onClick={() => {
          startTransition(() => {
            updateTab(tab)
          })
        }}
        className={clsx(
          'amsterdam-tabs__button',
          activeTab === tab && 'amsterdam-tabs__button--selected',
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
