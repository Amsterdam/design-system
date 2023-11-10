/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import LogoAmsterdam from '../../../../proprietary/assets/logo/amsterdam.svg'
import LogoGGD from '../../../../proprietary/assets/logo/ggd-amsterdam.svg'
import LogoStadsarchief from '../../../../proprietary/assets/logo/stadsarchief.svg'
import LogoStadsbankLening from '../../../../proprietary/assets/logo/stadsbank-lening.svg'
import LogoVGA from '../../../../proprietary/assets/logo/vga-verzekeringen.svg'

export interface LogoProps extends HTMLAttributes<HTMLElement> {
  variant?: 'amsterdam' | 'ggd-amsterdam' | 'stadsarchief' | 'stadsbank-lening' | 'vga-verzekeringen'
}

function getLogoVariant(variant: LogoProps['variant']) {
  switch (variant) {
    case 'amsterdam':
      return LogoAmsterdam
    case 'ggd-amsterdam':
      return LogoGGD
    case 'stadsarchief':
      return LogoStadsarchief
    case 'stadsbank-lening':
      return LogoStadsbankLening
    case 'vga-verzekeringen':
      return LogoVGA
    default:
      return LogoAmsterdam
  }
}

function getLogoVariantTitle(variant: LogoProps['variant']) {
  switch (variant) {
    case 'amsterdam':
      return 'Gemeente Amsterdam'
    case 'ggd-amsterdam':
      return 'GGD Amsterdam'
    case 'stadsarchief':
      return 'Stadsarchief Amsterdam'
    case 'stadsbank-lening':
      return 'Stadsbank van Lening'
    case 'vga-verzekeringen':
      return 'VGA Verzekeringen'
    default:
      return 'Gemeente Amsterdam'
  }
}

export const Logo = forwardRef(
  ({ variant = 'amsterdam', className, ...restProps }: LogoProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-logo', className)}>
      <img src={getLogoVariant(variant)} alt={`Logo ${getLogoVariantTitle(variant)}`} />
    </span>
  ),
)

Logo.displayName = 'Logo'
