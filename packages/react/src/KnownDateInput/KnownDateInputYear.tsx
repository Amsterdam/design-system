/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'

import type { KnownDateInputFieldProps } from './KnownDateInputField'

import { KnownDateInputField } from './KnownDateInputField'

export type KnownDateInputYearProps = {
  /**
   * The text of the label.
   * @default Jaar
   */
  readonly label?: string
} & KnownDateInputFieldProps

/**
 * The year of a date, in a field for four digits.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInputYear = forwardRef(
  ({ label = 'Jaar', ...restProps }: KnownDateInputYearProps, ref: ForwardedRef<HTMLInputElement>) => (
    <KnownDateInputField {...restProps} label={label} part="year" ref={ref} />
  ),
)

KnownDateInputYear.displayName = 'KnownDateInput.Year'
