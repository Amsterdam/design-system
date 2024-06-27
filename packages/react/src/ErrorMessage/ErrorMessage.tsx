/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type ErrorMessageProps = {
  /** An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’. */
  prefix?: string
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const ErrorMessage = forwardRef(
  (
    { children, className, prefix = 'Invoerfout', ...restProps }: ErrorMessageProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('ams-error-message', className)}>
      <span className="ams-visually-hidden">
        {prefix}
        {': '}
      </span>
      {children}
    </p>
  ),
)

ErrorMessage.displayName = 'ErrorMessage'
