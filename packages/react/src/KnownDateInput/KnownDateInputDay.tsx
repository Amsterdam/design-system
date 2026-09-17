/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'

import type { KnownDateInputPartProps } from './KnownDateInputPart'

import { KnownDateInputPart } from './KnownDateInputPart'

export type KnownDateInputDayProps = {
  /**
   * The text of the label.
   * @default Dag
   */
  readonly label?: string
} & KnownDateInputPartProps

/**
 * The day of a date, in a field for one or two digits.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInputDay = forwardRef(
  ({ label = 'Dag', ...restProps }: KnownDateInputDayProps, ref: ForwardedRef<HTMLInputElement>) => (
    <KnownDateInputPart {...restProps} label={label} part="day" ref={ref} />
  ),
)

KnownDateInputDay.displayName = 'KnownDateInput.Day'
