/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FormFieldDescriptionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const FormFieldDescription = forwardRef(
  ({ children, className, ...restProps }: FormFieldDescriptionProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-form-field-description', className)}>
      {children}
    </span>
  ),
)

FormFieldDescription.displayName = 'FormFieldDescription'
