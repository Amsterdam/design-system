/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6' | 'level-7'
  svg: Function
}

export const Icon = forwardRef(
  ({ className, size = 'level-3', svg, ...otherProps }: IconProps, ref: ForwardedRef<HTMLElement>) => (
    <span
      ref={ref}
      className={clsx(
        'amsterdam-icon',
        size === 'level-3' && 'amsterdam-icon-size-3',
        size === 'level-4' && 'amsterdam-icon-size-4',
        size === 'level-5' && 'amsterdam-icon-size-5',
        size === 'level-6' && 'amsterdam-icon-size-6',
        size === 'level-7' && 'amsterdam-icon-size-7',
        className,
      )}
      {...otherProps}
    >
      {svg()}
    </span>
  ),
)

Icon.displayName = 'Icon'
