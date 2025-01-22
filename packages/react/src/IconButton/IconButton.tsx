/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CloseIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ForwardedRef } from 'react'
import { Icon } from '../Icon'

export type IconButtonProps = {
  /** Changes the text colour for readability on a light (but not white) background. */
  contrastColor?: boolean
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  /** The accessible text for the button. Will be announced by screen readers. Should describe the button’s action. */
  label: string
  /** The size of the icon. Corresponds with the text levels. */
  size?: 'level-3' | 'level-4' | 'level-5' | 'level-6'
  /** The component rendering the icon’s markup. */
  svg?: Function
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = forwardRef(
  (
    { className, contrastColor, inverseColor, label, size = 'level-5', svg = CloseIcon, ...restProps }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-icon-button',
        contrastColor && 'ams-icon-button--contrast-color',
        inverseColor && 'ams-icon-button--inverse-color',
        className,
      )}
    >
      <span className="ams-visually-hidden">{label}</span>
      <Icon size={size} square svg={svg} />
    </button>
  ),
)

IconButton.displayName = 'IconButton'
