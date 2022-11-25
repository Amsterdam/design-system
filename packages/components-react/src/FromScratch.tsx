import clsx from 'clsx'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'

export interface FromScratchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean
  pressed?: boolean
  small?: boolean
  variant?: string
}

export const FromScratch = forwardRef(
  (
    {
      busy,
      disabled,
      children,
      className,
      pressed,
      small,
      type,
      variant,
      ...restProps
    }: PropsWithChildren<FromScratchProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          'amsterdam-button',
          disabled && 'amsterdam-button--disabled',
          variant === 'primary' && 'amsterdam-button--primary',
          variant === 'secondary' && 'amsterdam-button--secondary',
          variant === 'tertiary' && 'amsterdam-button--tertiary',
          small && 'amsterdam-button--small',
          className,
        )}
        aria-busy={busy || undefined}
        aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
        disabled={disabled}
        type={type || 'button'}
      >
        {children}
      </button>
    )
  },
)

FromScratch.displayName = 'FromScratch'
