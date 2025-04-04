/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CheckmarkIcon, InfoIcon, WarningIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Heading } from '../Heading'
import type { HeadingProps } from '../Heading'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'
import { Row } from '../Row'

type Severity = 'error' | 'success' | 'warning'

export type AlertProps = {
  /** Whether the user can dismiss the Alert. Adds a button to its top right. */
  closeable?: boolean
  /** The label for the button that dismisses the Alert. */
  closeButtonLabel?: string
  /** The text for the Heading. */
  heading: string
  /**
   * The hierarchical level of the Alert’s Heading within the document.
   * There is no default value; determine the correct level for each instance.
   * Note: this intentionally does not change the font size.
   **/
  headingLevel: HeadingProps['level']
  /** A function to run when dismissing. */
  onClose?: () => void
  /** The significance of the message conveyed. */
  severity?: Severity
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const iconSvgBySeverity: Record<Severity, Function> = {
  error: WarningIcon,
  success: CheckmarkIcon,
  warning: WarningIcon,
}

export const Alert = forwardRef(
  (
    {
      children,
      className,
      closeable,
      closeButtonLabel = 'Sluiten',
      heading,
      headingLevel,
      onClose,
      severity,
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const SeverityIcon = severity ? iconSvgBySeverity[severity] : InfoIcon

    return (
      <section {...restProps} className={clsx('ams-alert', severity && `ams-alert--${severity}`, className)} ref={ref}>
        <div className="ams-alert__severity-indicator">
          <Icon color="inverse" size="heading-4" svg={SeverityIcon} />
        </div>
        <div className="ams-alert__content">
          <Row align="between" alignVertical="start">
            <Heading level={headingLevel} size="level-4">
              {heading}
            </Heading>
            {closeable && <IconButton label={closeButtonLabel} onClick={onClose} size="heading-4" />}
          </Row>
          {children}
        </div>
      </section>
    )
  },
)

Alert.displayName = 'Alert'
