/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import {
  LogoAmsterdam,
  LogoGgdAmsterdam,
  LogoMuseumWeesp,
  LogoStadsarchief,
  LogoStadsbankVanLening,
  LogoVgaVerzekeringen,
} from './brand'

export type LogoBrand =
  | 'amsterdam'
  | 'ggd-amsterdam'
  | 'museum-weesp'
  | 'stadsarchief'
  | 'stadsbank-van-lening'
  | 'vga-verzekeringen'

export type LogoProps = {
  /** The name of the brand for which to display the logo, or configuration for a custom logo. */
  brand?: LogoBrand | LogoBrandConfig
} & SVGProps<SVGSVGElement>

export type LogoBrandConfig = {
  label: string
  svg: ForwardRefExoticComponent<RefAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>>
}

const logoConfig: Record<LogoBrand, LogoBrandConfig> = {
  amsterdam: {
    label: 'Gemeente Amsterdam logo',
    svg: LogoAmsterdam,
  },
  'ggd-amsterdam': {
    label: 'GGD Amsterdam logo',
    svg: LogoGgdAmsterdam,
  },
  'museum-weesp': {
    label: 'Gemeente Amsterdam Museum Weesp logo',
    svg: LogoMuseumWeesp,
  },
  stadsarchief: {
    label: 'Gemeente Amsterdam Stadsarchief logo',
    svg: LogoStadsarchief,
  },
  'stadsbank-van-lening': {
    label: 'Gemeente Amsterdam Stadsbank van Lening logo',
    svg: LogoStadsbankVanLening,
  },
  'vga-verzekeringen': {
    label: 'Gemeente Amsterdam VGA Verzekeringen logo',
    svg: LogoVgaVerzekeringen,
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
