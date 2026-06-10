/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

export type SwitchProps = PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>

/**
 * Toggles a binary setting immediately, without requiring form submission.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-switch--docs Switch docs at Amsterdam Design System}
 */
export const Switch = forwardRef(
  ({ className, id, ...restProps }: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    const generatedId = useId()
    const inputId = id || generatedId

    return (
      <div className={clsx('ams-switch', className)}>
        <input {...restProps} className="ams-switch__input" id={inputId} ref={ref} role="switch" type="checkbox" />
        <label className="ams-switch__label" htmlFor={inputId}></label>
      </div>
    )
  },
)

Switch.displayName = 'Switch'
