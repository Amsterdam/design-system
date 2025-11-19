/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'

import './tile-button.css'

import type { ButtonHTMLAttributes, ForwardedRef } from 'react'

import { Icon } from '@amsterdam/design-system-react'
import { forwardRef } from 'react'

type TileButtonProps = {
  icon: IconProps['svg']
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const TileButton = forwardRef(
  ({ icon, label, ...restProps }: TileButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button className="ams-tile-button" ref={ref} type="button" {...restProps}>
      <Icon size="heading-2" svg={icon} />
      <span>{label}</span>
    </button>
  ),
)

TileButton.displayName = 'TileButton'
