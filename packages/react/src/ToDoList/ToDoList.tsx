/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ToDoListProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-to-do-list--docs ToDoList docs at Amsterdam Design System}
 */
export const ToDoList = forwardRef(
  ({ children, className, ...restProps }: ToDoListProps, ref: ForwardedRef<HTMLElement>) => (
    <section {...restProps} className={clsx('ams-to-do-list', className)} ref={ref} role="list">
      {children}
    </section>
  ),
)

ToDoList.displayName = 'ToDoList'
