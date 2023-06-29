/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

export const FormLabel = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => (
    <label {...restProps} ref={ref} className={clsx('amsterdam-form-label', className)}>
      {children}
    </label>
  ),
)

FormLabel.displayName = 'FormLabel'
