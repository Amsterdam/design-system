/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { ErrorFillIcon, SuccessFillIcon, WarningFillIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

type Severity = 'error' | 'success' | 'warning'

export type AlertDialogHeaderProps = {
  /**
   * The significance of the message.
   * Displays a matching icon and fills the header with the corresponding colour.
   */
  readonly severity?: Severity
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

const iconSvgBySeverity: Record<Severity, IconProps['svg']> = {
  error: ErrorFillIcon,
  success: SuccessFillIcon,
  warning: WarningFillIcon,
}

/**
 * The header of an Alert Dialog. It contains the title and, when a severity is set, a matching icon and fill colour.
 * Unlike a Modal Dialog, it has no close button: an Alert Dialog is dismissed through an action in its Footer.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-alert-dialog--docs Alert Dialog docs at Amsterdam Design System}
 */
export const AlertDialogHeader = forwardRef(
  ({ children, className, severity, ...restProps }: AlertDialogHeaderProps, ref: ForwardedRef<HTMLElement>) => (
    <header
      {...restProps}
      className={clsx(
        'ams-alert-dialog__header',
        severity && ['ams-alert-dialog__header--with-icon', `ams-alert-dialog__header--${severity}`],
        className,
      )}
      ref={ref}
    >
      {severity && <Icon className="ams-alert-dialog__icon" size="heading-3" svg={iconSvgBySeverity[severity]} />}
      {children}
    </header>
  ),
)

AlertDialogHeader.displayName = 'AlertDialog.Header'
