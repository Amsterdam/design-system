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
   * Lets the browser fill in a date it already knows.
   * Use `bday` for a date of birth, and `cc-exp` for the expiry date of a payment card.
   */
  readonly autoComplete?: 'bday' | 'cc-exp'
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
 * Lines up the parts of a date that a user knows by heart, each in a field of its own.
 * Typing a day, month, and year separately asks less of someone than filling in a single date control.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-known-date-input--docs Known Date Input docs at Amsterdam Design System}
 */
export const KnownDateInput = Object.assign(KnownDateInputRoot, {
  Day: KnownDateInputDay,
  Month: KnownDateInputMonth,
  Year: KnownDateInputYear,
})
