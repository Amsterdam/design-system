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
import { Row } from '../Row'

export type AlertProps = {
  /** Whether the user can dismiss the Alert. Adds a button to its top right. */
  closeable?: boolean
  /** The label for the button that dismisses the Alert. */
  closeButtonLabel?: string
  /** The text for the Heading. */
  heading: string
  /**
   * The hierarchical level of the Heading within the document.
   * Note: this intentionally does not change the font size.
   */
  headingLevel?: HeadingProps['level']
  /** A function to run when dismissing. */
  onClose?: () => void
  /** The significance of the message conveyed. */
  severity?: 'error' | 'info' | 'success' | 'warning'
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
      closeButtonLabel = 'Sluiten',
      heading,
      headingLevel = 2,
      onClose,
      severity = 'warning',
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <section {...restProps} ref={ref} className={clsx('ams-alert', severity && `ams-alert--${severity}`, className)}>
      <div className="ams-alert__severity">
        <Icon inverseColor size="level-4" svg={iconSvgBySeverity[severity]} />
      </div>
      <div className="ams-alert__content">
        <Row align="between" alignVertical="start">
          <Heading level={headingLevel} size="level-4">
            {heading}
          </Heading>
          {closeable && <IconButton label={closeButtonLabel} onClick={onClose} size="level-4" />}
        </Row>
        {children}
      </div>
    </section>
  ),
)

Alert.displayName = 'Alert'
