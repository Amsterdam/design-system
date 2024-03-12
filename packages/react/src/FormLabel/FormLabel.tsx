/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

export const FormLabel = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => (
    <label {...restProps} ref={ref} className={clsx('ams-form-label', className)}>
      {children}
    </label>
  ),
)

FormLabel.displayName = 'FormLabel'
