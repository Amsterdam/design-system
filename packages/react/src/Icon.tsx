/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'medium' | 'large'
}

export const Icon = forwardRef(
  (
    { children, className, size = 'small', ...otherProps }: PropsWithChildren<IconProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span
      ref={ref}
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
  ),
)

Icon.displayName = 'Icon'
