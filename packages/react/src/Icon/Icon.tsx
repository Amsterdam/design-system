/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'

export type IconProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** The size of the icon. Corresponds with the text levels. */
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  /** Whether the icon container should be made square. */
  square?: boolean
  /** The component rendering the icon’s markup. */
  svg: Function | ReactNode
} & HTMLAttributes<HTMLSpanElement>

export const Icon = forwardRef(
  ({ className, color, size = 'level-3', square, svg, ...restProps }: IconProps, ref: ForwardedRef<HTMLElement>) => (
    <span
      className={clsx(
        'ams-icon',
        color && `ams-icon--color-${color}`,
        size === 'level-3' && 'ams-icon--size-3',
        size === 'level-4' && 'ams-icon--size-4',
        size === 'level-5' && 'ams-icon--size-5',
        size === 'level-6' && 'ams-icon--size-6',
        square && 'ams-icon--square',
        className,
      )}
      ref={ref}
      {...restProps}
    >
      {typeof svg === 'function' ? svg() : svg}
    </span>
  ),
)

Icon.displayName = 'Icon'
