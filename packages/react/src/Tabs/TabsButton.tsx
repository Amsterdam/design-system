/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, startTransition, useContext } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef, MouseEvent, PropsWithChildren } from 'react'
import { TabsContext } from './TabsContext'

export type TabsButtonProps = {
  /** The identifier of the corresponding tab panel. */
  'aria-controls': string
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const TabsButton = forwardRef(
  (
    { 'aria-controls': ariaControls, children, className, onClick, ...restProps }: TabsButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { activeTabId, updateTab } = useContext(TabsContext)

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event)

      // Allow preventDefault to stop the tab from updating
      if (event.defaultPrevented) return

      startTransition(() => {
        updateTab(ariaControls)
      })
    }

    return (
      <button
        {...restProps}
        aria-controls={ariaControls}
        aria-selected={activeTabId === ariaControls}
        className={clsx('ams-tabs__button', className)}
        id={`button-${ariaControls}`}
        onClick={handleClick}
        ref={ref}
        role="tab"
        tabIndex={activeTabId === ariaControls ? 0 : -1}
        type="button"
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
