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
  /** Whether the user can dismiss the Alert. Adds a button to its top right. */
  closeable?: boolean
  /** The hierarchical level of the Alert’s Heading within the document. */
  headingLevel?: HeadingProps['level']
  /** A function to run when dismissing. */
  onClose?: () => void
  /** The significance of the message conveyed. */
  severity?: 'error' | 'info' | 'success' | 'warning'
  /** The text for the Heading. */
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
      headingLevel = 2,
      title,
      severity = 'warning',
      closeable,
      onClose,
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
        {closeable && <IconButton label="Sluiten" size={alertSize} onClick={onClose} />}
      </Tag>
    )
  },
)

Alert.displayName = 'Alert'
