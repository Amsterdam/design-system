/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ComponentType, ForwardedRef, SVGProps } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import {
  AmsterdamEnglishLogo,
  AmsterdamLogo,
  GgdAmsterdamInspectieLogo,
  GgdAmsterdamLogo,
  MuseumWeespLogo,
  StadsarchiefLogo,
  StadsbankVanLeningLogo,
  VgaVerzekeringenLogo,
} from './brands'

export const logoBrands = [
  'amsterdam',
  'amsterdam-english',
  'ggd-amsterdam-inspectie',
  'ggd-amsterdam',
  'museum-weesp',
  'stadsarchief',
  'stadsbank-van-lening',
  'vga-verzekeringen',
] as const

export type LogoBrand = (typeof logoBrands)[number]

export type LogoProps = {
  /** The name of the brand for which to display the logo, or configuration for a custom logo. */
  brand?: LogoBrand | LogoBrandConfig
} & SVGProps<SVGSVGElement>

export type LogoBrandConfig = {
  label: string
  svg: ComponentType<SVGProps<SVGSVGElement>>
}

const logoConfig: Record<LogoBrand, LogoBrandConfig> = {
  amsterdam: {
    label: 'Gemeente Amsterdam logo',
    svg: AmsterdamLogo,
  },
  'amsterdam-english': {
    label: 'City of Amsterdam logo',
    svg: AmsterdamEnglishLogo,
  },
  'ggd-amsterdam': {
    label: 'GGD Amsterdam logo',
    svg: GgdAmsterdamLogo,
  },
  'ggd-amsterdam-inspectie': {
    label: 'GGD Amsterdam Inspectie logo',
    svg: GgdAmsterdamInspectieLogo,
  },
  'museum-weesp': {
    label: 'Gemeente Amsterdam Museum Weesp logo',
    svg: MuseumWeespLogo,
  },
  stadsarchief: {
    label: 'Gemeente Amsterdam Stadsarchief logo',
    svg: StadsarchiefLogo,
  },
  'stadsbank-van-lening': {
    label: 'Gemeente Amsterdam Stadsbank van Lening logo',
    svg: StadsbankVanLeningLogo,
  },
  'vga-verzekeringen': {
    label: 'Gemeente Amsterdam VGA Verzekeringen logo',
    svg: VgaVerzekeringenLogo,
  },
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-media-logo--docs Logo docs at Amsterdam Design System}
 */
export const Logo = forwardRef(
  (
    { 'aria-label': ariaLabel, brand = 'amsterdam', className, ...restProps }: LogoProps,
    ref: ForwardedRef<SVGSVGElement>,
  ) => {
    const config: LogoBrandConfig = typeof brand === 'string' ? logoConfig[brand] : brand

    const { label, svg: LogoComponent } = config

    return (
      <LogoComponent {...restProps} aria-label={ariaLabel || label} className={clsx('ams-logo', className)} ref={ref} />
    )
  },
)

Logo.displayName = 'Logo'
