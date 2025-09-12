/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { WarningIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type ErrorMessageProps = {
  /**
   * An icon to display instead of the default icon.
   * @default WarningIcon
   */
  icon?: IconProps['svg']
  /** An accessible phrase that screen readers announce before the error message. Should translate to something like ‘input error’. */
  prefix?: string
} & PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-error-message--docs Error Message docs at Amsterdam Design System}
 */
export const ErrorMessage = forwardRef(
  (
    { children, className, icon = WarningIcon, prefix = 'Invoerfout', ...restProps }: ErrorMessageProps,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} className={clsx('ams-error-message', className)} ref={ref}>
      <Icon svg={icon} />
      <span className="ams-visually-hidden">{`${prefix}: `}</span>
      {children}
    </p>
  ),
)

ErrorMessage.displayName = 'ErrorMessage'
