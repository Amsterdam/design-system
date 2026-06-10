/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'

import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsListProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * The list of tab buttons within a Tabs component.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-tabs--docs Tabs docs at Amsterdam Design System}
 */
export const TabsList = forwardRef(
  ({ children, className, ...restProps }: TabsListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // Use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      focusableElements: ['.ams-tabs__button:not([disabled])'],
      horizontally: true,
      rotating: true,
    })

    return (
      <div
        {...restProps}
        className={clsx('ams-tabs__list', className)}
        onKeyDown={keyDown}
        ref={innerRef}
        role="tablist"
      >
        {children}
      </div>
    )
  },
)

TabsList.displayName = 'Tabs.List'
