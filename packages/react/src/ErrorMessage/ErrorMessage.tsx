/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ErrorMessageProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const ErrorMessage = forwardRef(
  ({ children, className, ...restProps }: ErrorMessageProps, ref: ForwardedRef<HTMLParagraphElement>) => (
    <p {...restProps} ref={ref} className={clsx('ams-error-message', className)}>
      {children}
    </p>
  ),
)

ErrorMessage.displayName = 'ErrorMessage'
