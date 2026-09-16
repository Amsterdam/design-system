/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type KnownDateInputFieldProps = {
  /**
   * Whether the input holds a four-digit value, such as a year.
   * @default false
   */
  readonly wide?: boolean
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Pairs the Label and Text Input for one part of a date, and gives the input a width that suits the digits it takes.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInputField = forwardRef(
  ({ children, className, wide, ...restProps }: KnownDateInputFieldProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      className={clsx('ams-known-date-input__field', wide && 'ams-known-date-input__field--wide', className)}
      ref={ref}
    >
      {children}
    </div>
  ),
)

KnownDateInputField.displayName = 'KnownDateInput.Field'
