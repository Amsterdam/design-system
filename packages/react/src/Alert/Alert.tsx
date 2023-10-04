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
  type?: 'error' | 'success'
  closeable?: boolean
  icon?: boolean
  onClose?: () => void
}

interface AlertCloseProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'level-5' | 'level-6'
}

const AlertClose = forwardRef(
  ({ className, size, ...restProps }: AlertCloseProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('amsterdam-alert__close', className)} title="close">
      <VisuallyHidden>Sluiten</VisuallyHidden>
      <Icon svg={Close} size={size} />
    </button>
  ),
)

const iconSvgByType = {
  error: AlertIcon,
  success: Checkmark,
}

export const Alert = forwardRef(
  (
    { children, className, title, type, closeable, icon, onClose, ...restProps }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertSize = title ? 'level-5' : 'level-6'

    const alertIcon = React.useMemo(() => {
      if (!icon || !type) {
        return null
      }

      return <Icon size={alertSize} svg={iconSvgByType[type]} />
    }, [icon, type, alertSize])

    return (
      <div {...restProps} ref={ref} className={clsx('amsterdam-alert', type && `amsterdam-alert--${type}`, className)}>
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
