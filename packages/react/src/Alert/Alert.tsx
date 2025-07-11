/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorFillIcon, InfoFillIcon, SuccessFillIcon, WarningFillIcon } from '@amsterdam/design-system-react-icons'
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
   * The id of the Heading element, which is used to label the Alert.
   * Can be set to `null` to explicitly remove the label.
   * Note: must be unique for the page.
   **/
  headingId?: string | null
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
  error: ErrorFillIcon,
  success: SuccessFillIcon,
  warning: WarningFillIcon,
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-alert--docs Alert docs at Amsterdam Design System}
 */
export const Alert = forwardRef(
  (
    {
      children,
      className,
      closeable,
      closeButtonLabel = 'Sluiten',
      heading,
      headingId = 'ams-alert-heading',
      headingLevel,
      onClose,
      severity,
      ...restProps
    }: AlertProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const SeverityIcon = severity ? iconSvgBySeverity[severity] : InfoFillIcon

    return (
      <section
        {...restProps}
        aria-labelledby={headingId || undefined} // NVDA on Chrome does not read the heading when it is not used as the label for the section.
        className={clsx('ams-alert', severity && `ams-alert--${severity}`, className)}
        ref={ref}
      >
        <div className="ams-alert__severity-indicator">
          <Icon color="inverse" size="heading-4" svg={SeverityIcon} />
        </div>
        <div className="ams-alert__content">
          <Row align="between" alignVertical="start">
            <Heading id={headingId || undefined} level={headingLevel} size="level-4">
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
