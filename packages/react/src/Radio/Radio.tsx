/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import clsx from 'clsx'
import { forwardRef, useId } from 'react'

import RadioIcon from './RadioIcon'

export type RadioProps = PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>> & {
  /**
   * An icon to display instead of the default icon.
   * @default RadioIcon
   */
  icon?: Function | ReactNode
  /** Whether the value fails a validation rule. */
  invalid?: boolean
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-radio--docs Radio docs at Amsterdam Design System}
 */
export const Radio = forwardRef(
  (
    { children, className, icon = RadioIcon, id, invalid, ...restProps }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = id || useId()

    return (
      // This div is here because NVDA doesn't match the input to the label
      // without a containing element
      <div className={clsx('ams-radio', className)}>
        <input
          {...restProps}
          aria-invalid={invalid || undefined}
          className="ams-radio__input"
          id={inputId}
          ref={ref}
          type="radio"
        />
        <label className="ams-radio__label" htmlFor={inputId}>
          {/* The icon is only shown when the CSS loads, so we hide it by default. */}
          <span className="ams-radio__icon-container" hidden>
            {typeof icon === 'function' ? icon() : icon}
          </span>
          {children}
        </label>
      </div>
    )
  },
)

Radio.displayName = 'Radio'
