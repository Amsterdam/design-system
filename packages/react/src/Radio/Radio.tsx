/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { RadioIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export type RadioProps = {
  /** An icon to display instead of the default icon.  */
  icon?: ReactNode
  /** Whether the value fails a validation rule. */
  invalid?: boolean
} & PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-invalid' | 'type'>>

export const Radio = forwardRef(
  ({ children, className, icon, invalid, ...restProps }: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId()

    return (
      // This div is here because NVDA doesn't match the input to the label
      // without a containing element
      <div className={clsx('ams-radio', className)}>
        <input
          {...restProps}
          aria-invalid={invalid || undefined}
          className="ams-radio__input"
          id={id}
          ref={ref}
          type="radio"
        />
        <label className="ams-radio__label" htmlFor={id}>
          <span className="ams-radio__icon-container">{icon ?? <RadioIcon className="ams-radio__icon" />}</span>
          {children}
        </label>
      </div>
    )
  },
)

Radio.displayName = 'Radio'
