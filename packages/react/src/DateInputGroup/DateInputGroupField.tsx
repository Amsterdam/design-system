/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DateInputGroupFieldProps = {
  /**
   * Whether the input holds a four-digit value, such as a year.
   * @default false
   */
  readonly wide?: boolean
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Pairs the Label and Text Input for one part of a date, and gives the input a width that suits the digits it takes.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-date-input-group--docs Date Input Group docs at Amsterdam Design System}
 */
export const DateInputGroupField = forwardRef(
  ({ children, className, wide, ...restProps }: DateInputGroupFieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      className={clsx('ams-date-input-group__field', wide && 'ams-date-input-group__field--wide', className)}
      ref={ref}
    >
      {children}
    </div>
  ),
)

DateInputGroupField.displayName = 'DateInputGroup.Field'
