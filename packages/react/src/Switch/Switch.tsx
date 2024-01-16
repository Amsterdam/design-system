import clsx from 'clsx'
import { forwardRef, useId } from 'react'
import type { ForwardedRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export const Switch = forwardRef(
  (
    { className, id, ...restProps }: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = id || useId()

    return (
      <div className={clsx('amsterdam-switch', className)}>
        <input
          {...restProps}
          className="amsterdam-switch__input"
          id={inputId}
          ref={ref}
          type="checkbox"
          role="switch"
        />

        <label className="amsterdam-switch__label" htmlFor={inputId}></label>
      </div>
    )
  },
)

Switch.displayName = 'Switch'
