/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, OptionHTMLAttributes, PropsWithChildren } from 'react'

export type SelectOptionProps = {
  value?: string
} & OptionHTMLAttributes<HTMLOptionElement>

export const SelectOption = forwardRef(
  (
    { children, className, value, ...restProps }: PropsWithChildren<SelectOptionProps>,
    ref: ForwardedRef<HTMLOptionElement>,
  ) => (
    <option {...restProps} ref={ref} value={value} className={clsx('ams-select__option', className)}>
      {children}
    </option>
  ),
)

SelectOption.displayName = 'Select.Option'
