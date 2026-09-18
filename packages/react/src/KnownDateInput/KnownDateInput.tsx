/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { KnownDateInputContext } from './KnownDateInputContext'
import { KnownDateInputDay } from './KnownDateInputDay'
import { KnownDateInputMonth } from './KnownDateInputMonth'
import { KnownDateInputYear } from './KnownDateInputYear'

export type KnownDateInputProps = {
  /**
   * Lets browsers and password managers that support it fill in the date.
   * Use `birth-date` for a date of birth, and `credit-card-expiry-date` for the expiry date of a payment card.
   */
  readonly autoComplete?: 'birth-date' | 'credit-card-expiry-date'
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

const KnownDateInputRoot = forwardRef(
  ({ autoComplete, children, className, ...restProps }: KnownDateInputProps, ref: ForwardedRef<HTMLDivElement>) => (
    <KnownDateInputContext.Provider value={{ autoComplete }}>
      <div {...restProps} className={clsx('ams-known-date-input', className)} ref={ref}>
        {children}
      </div>
    </KnownDateInputContext.Provider>
  ),
)

KnownDateInputRoot.displayName = 'KnownDateInput'

/**
 * Separate text inputs for the parts of a date, such as the day, month and year.
 * Typing these separately is easier for known dates than browsing through a date control.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInput = Object.assign(KnownDateInputRoot, {
  Day: KnownDateInputDay,
  Month: KnownDateInputMonth,
  Year: KnownDateInputYear,
})
