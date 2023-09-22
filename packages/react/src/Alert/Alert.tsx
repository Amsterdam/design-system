/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert as AlertSvg, Checkmark } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  title?: string
  text: string
  type?: undefined | 'error' | 'success'
  closeable?: boolean
  icon?: boolean
}

export const Alert = forwardRef(
  (
    { children, className, title, text, type, closeable, icon, ...restProps }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertIcon = () => {
      if (icon && type === 'error') return <Icon svg={AlertSvg} size="level-5" />
      else if (icon && type === 'success') return <Icon svg={Checkmark} size="level-6" />
      else return null
    }

    return (
      <div
        {...restProps}
        ref={ref}
        className={clsx(
          'amsterdam-alert',
          type === 'error' && 'amsterdam-alert--error',
          type === 'success' && 'amsterdam-alert--success',
          className,
        )}
      >
        {alertIcon() && <div className="amsterdam-alert__icon">{alertIcon()}</div>}
        <div className="amsterdam-alert__content">
          {title && <span className="amsterdam-alert__title">{title}</span>}
          <div className="amsterdam-alert__text">{text}</div>
          {children}
        </div>
        {closeable && <button className="amsterdam-alert__close">X</button>}
      </div>
    )
  },
)

Alert.displayName = 'Alert'
