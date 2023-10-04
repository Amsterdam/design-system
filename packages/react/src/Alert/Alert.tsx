/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert as AlertIcon, Checkmark, Close } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title?: string
  type?: 'info' | 'error' | 'success'
  closeable?: boolean
  icon?: boolean
  onClose?: () => void
}

interface AlertCloseProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'level-5' | 'level-6'
}

const AlertClose = forwardRef(
  ({ className, size, ...restProps }: AlertCloseProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button {...restProps} ref={ref} className={clsx('amsterdam-alert__close', className)}>
        <Icon svg={Close} size={size} />
      </button>
    )
  },
)

export const Alert = forwardRef(
  (
    { children, className, title, type, closeable, icon, onClose, ...restProps }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertIcon = (title?: boolean) => {
      if (icon && type === 'error') return <Icon svg={AlertIcon} size={title ? 'level-5' : 'level-6'} />
      else if (icon && type === 'success') return <Icon svg={Checkmark} size={title ? 'level-5' : 'level-6'} />
      else return null
    }

    return (
      <div {...restProps} ref={ref} className={clsx('amsterdam-alert', type && `amsterdam-alert--${type}`, className)}>
        {!!alertIcon && <div className="amsterdam-alert__icon">{alertIcon(!!title)}</div>}
        <div className="amsterdam-alert__content">
          {title && <span className="amsterdam-alert__title">{title}</span>}
          {children}
        </div>
        {closeable && <AlertClose size={title ? 'level-5' : 'level-6'} onClick={onClose} />}
      </div>
    )
  },
)

Alert.displayName = 'Alert'
AlertClose.displayName = 'AlertClose'
