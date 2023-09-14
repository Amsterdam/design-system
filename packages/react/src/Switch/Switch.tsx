import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren, useId } from 'react'

export const Switch = forwardRef(
  ({ ...restProps }: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId()

    return (
      <div className="amsterdam-switch">
        <input {...restProps} id={id} className="amsterdam-switch__input" ref={ref} type="checkbox" role="switch" />

        <label className="amsterdam-switch__label" htmlFor={id} aria-hidden="true">
          <span className="amsterdam-switch__toggle">
            <span className="amsterdam-switch__toggle-inner"></span>
          </span>
        </label>
      </div>
    )
  },
)

Switch.displayName = 'Switch'
