/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert as AlertIcon, Checkmark, Close } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title?: string
  severity?: undefined | 'error' | 'success'
  closeable?: boolean
  icon?: boolean
  onClose?: () => void
}

interface AlertCloseProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'level-5' | 'level-6'
}

const AlertClose = forwardRef(
  ({ className, size, ...restProps }: AlertCloseProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('amsterdam-alert__close', className)}>
      <VisuallyHidden>Sluiten</VisuallyHidden>
      <Icon svg={Close} size={size} />
    </button>
  ),
)

const iconSvgBySeverity = {
  error: AlertIcon,
  success: Checkmark,
}

export const Alert = forwardRef(
  (
    { children, className, title, severity, closeable, icon, onClose, ...restProps }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertSize = title ? 'level-5' : 'level-6'

    const alertIcon = React.useMemo(() => {
      if (!icon || !severity) {
        return null
      }

      return <Icon size={alertSize} svg={iconSvgBySeverity[severity]} />
    }, [icon, severity, alertSize])

    return (
      <div
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-alert', severity && `amsterdam-alert--${severity}`, className)}
      >
        {alertIcon && <div className="amsterdam-alert__icon">{alertIcon}</div>}
        <div className="amsterdam-alert__content">
          {title && <span className="amsterdam-alert__title">{title}</span>}
          {children}
        </div>
        {closeable && <AlertClose size={alertSize} onClick={onClose} />}
      </div>
    )
  },
)

Alert.displayName = 'Alert'
AlertClose.displayName = 'AlertClose'
