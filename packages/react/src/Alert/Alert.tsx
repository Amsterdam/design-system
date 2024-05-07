/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AlertIcon, CheckmarkIcon, InfoIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Heading } from '../Heading'
import type { HeadingProps } from '../Heading'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'

export type AlertProps = {
  /** Whether the alert can be dismissed by the user. Adds a button to the top right. */
  closeable?: boolean
  /** The label for the button that dismisses the Alert. */
  closeLabel?: string
  /**
   * The hierarchical level of the alert title within the document.
   * @default 2
   */
  headingLevel?: HeadingProps['level']
  /** Allows a callback when dismissing the alert. */
  onClose?: () => void
  /** Highlights the meaning or tone of the message. */
  severity?: 'error' | 'info' | 'success' | 'warning'
  /** The title for the alert. */
  title?: string
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

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
      closeable,
      closeLabel = 'Sluiten',
      headingLevel = 2,
      onClose,
      severity = 'warning',
      title,
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const alertSize = title ? 'level-4' : 'level-5'
    const Tag = title ? 'section' : 'div'

    return (
      <Tag {...restProps} ref={ref} className={clsx('ams-alert', severity && `ams-alert--${severity}`, className)}>
        <div className="ams-alert__icon">
          <Icon size={alertSize} svg={iconSvgBySeverity[severity]} />
        </div>
        <div className="ams-alert__content">
          {title && (
            <Heading level={headingLevel} size="level-4">
              {title}
            </Heading>
          )}
          {children}
        </div>
        {closeable && <IconButton label={closeLabel} size={alertSize} onClick={onClose} />}
      </Tag>
    )
  },
)

Alert.displayName = 'Alert'
