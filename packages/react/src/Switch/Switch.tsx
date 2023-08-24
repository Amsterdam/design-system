import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react'

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Switch = forwardRef(
  ({ label, ...restProps }: PropsWithChildren<SwitchProps>, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <label className="amsterdam-switch">
        {label && <span className="amsterdam-switch__label">{label}</span>}
        <input {...restProps} className="amsterdam-switch__input" ref={ref} type="checkbox" role="switch" />

        <span className="amsterdam-switch__toggle" aria-hidden="true">
          <span className="amsterdam-switch__toggle-inner"></span>
        </span>
      </label>
    )
  },
)
Switch.displayName = 'Switch'
