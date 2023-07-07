import { ForwardedRef, forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react'

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Switch = forwardRef((props: PropsWithChildren<SwitchProps>, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <label className="amsterdam-switch">
      <input {...props} className="amsterdam-switch-input" ref={ref} type="checkbox" />

      <span className="amsterdam-switch-toggle" aria-hidden="true">
        <span className="amsterdam-switch-toggle-inner"></span>
      </span>
    </label>
  )
})

Switch.displayName = 'Switch'
