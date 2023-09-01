import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren, useId } from 'react'

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Switch = forwardRef(
  ({ label, ...restProps }: PropsWithChildren<SwitchProps>, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId()

    return (
      <div className="amsterdam-switch">
        {label && (
          <label className="amsterdam-switch__label" htmlFor={id}>
            {label}
          </label>
        )}
        <input {...restProps} id={id} className="amsterdam-switch__input" ref={ref} type="checkbox" role="switch" />
        <span className="amsterdam-switch__toggle" aria-hidden="true">
          <span className="amsterdam-switch__toggle-inner"></span>
        </span>
      </div>
    )
  },
)
Switch.displayName = 'Switch'
