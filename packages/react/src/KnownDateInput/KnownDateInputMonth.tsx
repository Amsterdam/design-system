/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'

import type { KnownDateInputPartProps } from './KnownDateInputPart'

import { KnownDateInputPart } from './KnownDateInputPart'

export type KnownDateInputMonthProps = {
  /**
   * The text of the label.
   * @default Maand
   */
  readonly label?: string
} & KnownDateInputPartProps

/**
 * The month of a date, in a field for one or two digits.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInputMonth = forwardRef(
  ({ label = 'Maand', ...restProps }: KnownDateInputMonthProps, ref: ForwardedRef<HTMLInputElement>) => (
    <KnownDateInputPart {...restProps} label={label} part="month" ref={ref} />
  ),
)

KnownDateInputMonth.displayName = 'KnownDateInput.Month'
