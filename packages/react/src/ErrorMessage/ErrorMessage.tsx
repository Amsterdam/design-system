/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AlertIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export type ErrorMessageProps = {
  /** An icon to display instead of the default icon. */
  icon?: Function
  /** An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’. */
  prefix?: string
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

export const ErrorMessage = forwardRef(
  (
    { children, className, icon, prefix = 'Invoerfout', ...restProps }: ErrorMessageProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('ams-error-message', className)}>
      <Icon svg={icon ? icon : AlertIcon} size="level-6" />
      <span className="ams-visually-hidden">
        {prefix}
        {': '}
      </span>
      {children}
    </p>
  ),
)

ErrorMessage.displayName = 'ErrorMessage'
