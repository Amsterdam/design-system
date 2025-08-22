/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'
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

export type LogoProps = SVGProps<SVGSVGElement> & {
  /** The name of the brand for which to display the logo. */
  brand?: LogoBrand
}

type LogoConfigItem = {
  label: string
  logo: ForwardRefExoticComponent<RefAttributes<SVGSVGElement> & SVGProps<SVGSVGElement>>
}

const logoConfig: Record<LogoBrand, LogoConfigItem> = {
  amsterdam: {
    label: 'Gemeente Amsterdam logo',
    logo: LogoAmsterdam,
  },
  'ggd-amsterdam': {
    label: 'GGD Amsterdam logo',
    logo: LogoGgdAmsterdam,
  },
  'museum-weesp': {
    label: 'Gemeente Amsterdam Museum Weesp logo',
    logo: LogoMuseumWeesp,
  },
  stadsarchief: {
    label: 'Gemeente Amsterdam Stadsarchief logo',
    logo: LogoStadsarchief,
  },
  'stadsbank-van-lening': {
    label: 'Gemeente Amsterdam Stadsbank van Lening logo',
    logo: LogoStadsbankVanLening,
  },
  'vga-verzekeringen': {
    label: 'Gemeente Amsterdam VGA Verzekeringen logo',
    logo: LogoVgaVerzekeringen,
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
    const LogoComponent = logoConfig[brand].logo
    const logoLabel = logoConfig[brand].label

    return (
      <LogoComponent
        {...restProps}
        aria-label={ariaLabel || logoLabel}
        className={clsx('ams-logo', className)}
        ref={ref}
      />
    )
  },
)

Logo.displayName = 'Logo'
