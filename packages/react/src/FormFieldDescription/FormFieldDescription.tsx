/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FormFieldDescriptionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FormFieldDescription = forwardRef(
  ({ children, className, ...restProps }: FormFieldDescriptionProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-form-field-description', className)}>
      {children}
    </div>
  ),
)

FormFieldDescription.displayName = 'FormFieldDescription'
