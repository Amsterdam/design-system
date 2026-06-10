/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, OptionHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SelectOptionProps = Readonly<PropsWithChildren<OptionHTMLAttributes<HTMLOptionElement>>>

/**
 * A single option within a Select.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-select--docs Select docs at Amsterdam Design System}
 */
export const SelectOption = forwardRef(
  ({ children, className, ...restProps }: SelectOptionProps, ref: ForwardedRef<HTMLOptionElement>) => (
    <option {...restProps} className={clsx('ams-select__option', className)} ref={ref}>
      {children}
    </option>
  ),
)

SelectOption.displayName = 'Select.Option'
