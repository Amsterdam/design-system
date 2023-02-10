import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Icon = ({ children, className, size = 'small', ...otherProps }: PropsWithChildren<IconProps>) => (
  <span
    className={clsx(
      'amsterdam-icon',
      size === 'small' && 'amsterdam-icon-small',
      size === 'medium' && 'amsterdam-icon-medium',
      size === 'large' && 'amsterdam-icon-large',
      className,
    )}
    {...otherProps}
  >
    {children}
  </span>
)
