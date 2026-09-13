/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { DateInputGroupField } from './DateInputGroupField'

export type DateInputGroupProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

const DateInputGroupRoot = forwardRef(
  ({ children, className, ...restProps }: DateInputGroupProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-date-input-group', className)} ref={ref}>
      {children}
    </div>
  ),
)

DateInputGroupRoot.displayName = 'DateInputGroup'

/**
 * Lines up the parts of a date that a user knows by heart, each in a field of its own.
 * Typing a day, month, and year separately asks less of someone than filling in a single date control.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-date-input-group--docs Date Input Group docs at Amsterdam Design System}
 */
export const DateInputGroup = Object.assign(DateInputGroupRoot, {
  Field: DateInputGroupField,
})
