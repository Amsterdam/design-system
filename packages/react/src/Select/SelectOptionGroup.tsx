/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, OptgroupHTMLAttributes, PropsWithChildren } from 'react'

export type SelectOptionGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement>

export const SelectOptionGroup = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<SelectOptionGroupProps>,
    ref: ForwardedRef<HTMLOptGroupElement>,
  ) => (
    <optgroup {...restProps} className={clsx('ams-select__group', className)} ref={ref}>
      {children}
    </optgroup>
  ),
)

SelectOptionGroup.displayName = 'Select.Group'
