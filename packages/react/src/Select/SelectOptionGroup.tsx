/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, OptgroupHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SelectOptionGroupProps = Readonly<PropsWithChildren<OptgroupHTMLAttributes<HTMLOptGroupElement>>>

/**
 * A labelled group of related options within a Select.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-select--docs Select docs at Amsterdam Design System}
 */
export const SelectOptionGroup = forwardRef(
  ({ children, className, ...restProps }: SelectOptionGroupProps, ref: ForwardedRef<HTMLOptGroupElement>) => (
    <optgroup {...restProps} className={clsx('ams-select__group', className)} ref={ref}>
      {children}
    </optgroup>
  ),
)

SelectOptionGroup.displayName = 'Select.Group'
