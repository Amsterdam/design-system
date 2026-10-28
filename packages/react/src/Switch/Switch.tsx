/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

export const switchLabelPositions = ['start', 'end'] as const

export type SwitchProps = {
  /**
   * Which side of the switch to put the label on.
   * @default end
   */
  readonly labelPosition?: (typeof switchLabelPositions)[number]
} & Readonly<PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>>>

/**
 * Toggles a binary setting immediately, without requiring form submission.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-switch--docs Switch docs at Amsterdam Design System}
 */
export const Switch = forwardRef(
  ({ children, className, id, labelPosition, ...restProps }: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    const generatedId = useId()
    const inputId = id || generatedId

    return (
      // This div is here because NVDA doesn't match the input to the label
      // without a containing element
      <div className={clsx('ams-switch', className)}>
        <input {...restProps} className="ams-switch__input" id={inputId} ref={ref} role="switch" type="checkbox" />
        <label className="ams-switch__label" htmlFor={inputId}>
          {labelPosition === 'start' && children}
          <span className="ams-switch__track-container">
            <span className="ams-switch__track" />
          </span>
          {labelPosition !== 'start' && children}
        </label>
      </div>
    )
  },
)

Switch.displayName = 'Switch'
