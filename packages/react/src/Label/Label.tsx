/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

export const Label = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => (
    <label {...restProps} ref={ref} className={clsx('ams-label', className)}>
      {children}
    </label>
  ),
)

Label.displayName = 'Label'
