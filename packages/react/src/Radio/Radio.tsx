/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export type RadioProps = {
  invalid?: boolean
} & PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>

export const Radio = forwardRef(
  ({ children, className, invalid, ...restProps }: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId()

    return (
      // This div is here because NVDA doesn't match the input to the label
      // without a containing element
      <div className={clsx('amsterdam-radio', className)}>
        <input
          {...restProps}
          type="radio"
          className="amsterdam-radio__input"
          ref={ref}
          id={id}
          aria-invalid={invalid || undefined}
        />
        <label className="amsterdam-radio__label" htmlFor={id}>
          <span className="amsterdam-radio__circle" />
          {children}
        </label>
      </div>
    )
  },
)

Radio.displayName = 'Radio'
