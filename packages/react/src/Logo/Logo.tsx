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
      return { logo: LogoAmsterdam, alt: 'Gemeente Amsterdam' }
    case 'ggd-amsterdam':
      return { logo: LogoGGD, alt: 'GGD Amsterdam' }
    case 'stadsarchief':
      return { logo: LogoStadsarchief, alt: 'Stadsarchief Amsterdam' }
    case 'stadsbank-lening':
      return { logo: LogoStadsbankLening, alt: 'Stadsbank van Lening' }
    case 'vga-verzekeringen':
      return { logo: LogoVGA, alt: 'VGA Verzekeringen' }
    default:
      return { logo: LogoAmsterdam, alt: 'Gemeente Amsterdam' }
  }
}

export const Logo = forwardRef(({ variant, className, ...restProps }: LogoProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-logo', className)}>
    <img src={getLogoVariant(variant).logo} alt={`Logo ${getLogoVariant(variant).alt}`} />
  </span>
))

Logo.displayName = 'Logo'
