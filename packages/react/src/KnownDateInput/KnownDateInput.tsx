/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { KnownDateInputField } from './KnownDateInputField'

export type KnownDateInputProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

const KnownDateInputRoot = forwardRef(
  ({ children, className, ...restProps }: KnownDateInputProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-known-date-input', className)} ref={ref}>
      {children}
    </div>
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
  Field: KnownDateInputField,
})
