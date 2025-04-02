/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { useKeyboardFocus } from '../common/useKeyboardFocus'

export type TabsListProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const TabsList = forwardRef(
  ({ children, className, ...restProps }: TabsListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const innerRef = useRef<HTMLDivElement>(null)

    // Use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const { keyDown } = useKeyboardFocus(innerRef, {
      focusableElements: ['button[role="tab"]'],
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
