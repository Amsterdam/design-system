/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const iconSizes = [
  'small',
  'large',
  'heading-0', // Deprecated
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6', // Deprecated
] as const
type IconSize = (typeof iconSizes)[number]

export type IconProps = {
  /** Changes the icon colour for readability on a dark background. */
  color?: 'inverse'
  /**
   * The size of the icon. Choose the size of the corresponding body text or heading.
   * The values ‘heading-0’ and ‘heading-6’ are deprecated.
   */
  size?: IconSize
  /** Whether the icon container should be made square. */
  square?: boolean
  /** The component rendering the icon’s markup. */
  svg: Function | ReactNode
} & HTMLAttributes<HTMLSpanElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-icon--docs Icon docs at Amsterdam Design System}
 * @see {@link https://designsystem.amsterdam/?path=/docs/brand-assets-icons--docs Icons overview at Amsterdam Design System}
 */
export const Icon = forwardRef(
  ({ className, color, size, square, svg, ...restProps }: IconProps, ref: ForwardedRef<HTMLElement>) => (
    <span
      className={clsx(
        'ams-icon',
        color && `ams-icon--${color}`,
        size && `ams-icon--${size}`,
        square && 'ams-icon--square',
        className,
      )}
      hidden // The icon is only shown when the CSS loads, so we hide it by default.
      ref={ref}
      {...restProps}
    >
      {typeof svg === 'function' ? svg() : svg}
    </span>
  ),
)

Icon.displayName = 'Icon'
