import { ButtonProps } from '@amsterdam/design-system-react/src'
import clsx from 'clsx'

export const HTMLButton = ({ children, disabled, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'amsterdam-button',
        variant === 'primary' && 'amsterdam-button--primary',
        variant === 'secondary' && 'amsterdam-button--secondary',
        variant === 'tertiary' && 'amsterdam-button--tertiary',
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
