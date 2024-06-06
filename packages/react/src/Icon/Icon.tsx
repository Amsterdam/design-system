/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export type IconProps = {
  /** The size of the icon. Corresponds with the text levels. */
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  /** Whether the icon container should be made square. */
  square?: boolean
  /** The component rendering the icon’s markup. */
  svg: Function
} & HTMLAttributes<HTMLSpanElement>

export const Icon = forwardRef(
  ({ className, size = 'level-3', square, svg, ...otherProps }: IconProps, ref: ForwardedRef<HTMLElement>) => (
    <span
      ref={ref}
      className={clsx(
        'ams-icon',
        size === 'level-3' && 'ams-icon--size-3',
        size === 'level-4' && 'ams-icon--size-4',
        size === 'level-5' && 'ams-icon--size-5',
        size === 'level-6' && 'ams-icon--size-6',
        square && 'ams-icon--square',
        className,
      )}
      {...otherProps}
    >
      {svg()}
    </span>
  ),
)

Icon.displayName = 'Icon'
