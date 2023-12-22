/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AlertIcon, CheckmarkIcon, CloseIcon, InfoIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Heading } from '../Heading'
import type { HeadingProps } from '../Heading'
import { Icon } from '../Icon'
import { VisuallyHidden } from '../VisuallyHidden'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  /** Whether the alert can be dismissed by the user. Adds a button to the top right. */
  closeable?: boolean
  /**
   * The hierarchical level of the alert title within the document.
   * @default 4
   */
  headingLevel?: HeadingProps['level']
  /** Allows a callback when dismissing the alert. */
  onClose?: () => void
  /** Highlights the meaning or tone of the message. */
  severity?: 'error' | 'info' | 'success' | 'warning'
  /** The title for the alert. */
  title?: string
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
      severity = 'warning',
      closeable,
      onClose,
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertSize = title ? 'level-4' : 'level-5'

    return (
      <section
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-alert', severity && `amsterdam-alert--${severity}`, className)}
      >
        <div className="amsterdam-alert__icon">
          <Icon size={alertSize} svg={iconSvgBySeverity[severity]} />
        </div>
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
