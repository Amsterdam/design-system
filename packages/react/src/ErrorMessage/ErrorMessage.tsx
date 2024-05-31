/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

export type ErrorMessageProps = {
  prefix?: string
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const ErrorMessage = forwardRef(
  (
    { children, className, prefix = 'Invoerfout: ', ...restProps }: ErrorMessageProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('ams-error-message', className)}>
      <VisuallyHidden>{prefix}</VisuallyHidden>
      {children}
    </p>
  ),
)

ErrorMessage.displayName = 'ErrorMessage'
