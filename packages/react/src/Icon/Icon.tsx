/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, ReactElement, SVGProps } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const iconSizes = ['small', 'large', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5'] as const
type IconSize = (typeof iconSizes)[number]

/** All valid props for an `<svg>` element in React. */
type SvgProps = SVGProps<SVGSVGElement>

/** A React element representing an `<svg>` element. */
type SvgElement = ReactElement<SvgProps>

/**
 * A valid value for the `svg` prop of the `Icon` component. Can be:
 * - A rendered SVG element, e.g. `<WarningIcon />`
 * - An SVG component reference, e.g. `WarningIcon`
 * - A zero-argument function returning an SVG element, e.g. `() => <WarningIcon size="large" />`
 * - A function accepting SVG props and returning an SVG element, e.g. `(props) => <WarningIcon {...props} />`
 */
type IconSvg = SvgElement | ((props: SvgProps) => SvgElement)

export type IconProps = {
  /** Changes the icon colour for readability on a dark background. */
  readonly color?: 'inverse'
  /** The size of the icon. Choose the size of the corresponding body text or heading. */
  readonly size?: IconSize
  /** Whether the icon container should be made square. */
  readonly square?: boolean
  /** The component rendering the icon’s markup. */
  readonly svg: IconSvg
} & Readonly<HTMLAttributes<HTMLSpanElement>>

/**
 * A visual symbol that represents an idea, theme, or action.
 * Icons communicate a message at a glance and draw attention to important – often interactive – information.
 *
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
      {typeof svg === 'function' ? svg({}) : svg}
    </span>
  ),
)

Icon.displayName = 'Icon'
