/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AlertIcon, CheckmarkIcon, CloseIcon, InfoIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { Heading } from '../Heading'
import type { HeadingProps } from '../Heading'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  headingLevel?: HeadingProps['level']
  title?: string
  severity?: 'error' | 'info' | 'success' | 'warning'
  closeable?: boolean
  icon?: boolean
  onClose?: () => void
}

interface AlertCloseProps extends HTMLAttributes<HTMLButtonElement> {
  size?: 'level-4' | 'level-5'
}

const AlertClose = forwardRef(
  ({ className, size, ...restProps }: AlertCloseProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button {...restProps} ref={ref} className={clsx('amsterdam-alert__close', className)}>
      <VisuallyHidden>Sluiten</VisuallyHidden>
      <Icon svg={CloseIcon} size={size} />
    </button>
  ),
)

const iconSvgBySeverity = {
  error: AlertIcon,
  info: InfoIcon,
  success: CheckmarkIcon,
  warning: AlertIcon,
}

export const Alert = forwardRef(
  (
    {
      children,
      className,
      headingLevel = 4,
      title,
      severity = 'info',
      closeable,
      icon,
      onClose,
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertSize = title ? 'level-4' : 'level-5'

    const alertIcon = useMemo(() => {
      if (!icon || !severity) {
        return null
      }

      return <Icon size={alertSize} svg={iconSvgBySeverity[severity]} />
    }, [icon, severity, alertSize])

    return (
      <section
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-alert', severity && `amsterdam-alert--${severity}`, className)}
      >
        {alertIcon && <div className="amsterdam-alert__icon">{alertIcon}</div>}
        <div className="amsterdam-alert__content">
          {title && (
            <Heading level={headingLevel} size="level-4">
              {title}
            </Heading>
          )}
          {children}
        </div>
        {closeable && <AlertClose size={alertSize} onClick={onClose} />}
      </section>
    )
  },
)

Alert.displayName = 'Alert'
AlertClose.displayName = 'AlertClose'
