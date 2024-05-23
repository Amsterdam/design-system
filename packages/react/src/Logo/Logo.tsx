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

export type LogoProps = {
  /** The name of the brand for which to display the logo. */
  brand?: LogoBrand
} & SVGProps<SVGSVGElement>

const logoConfig: Record<
  LogoBrand,
  ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>
> = {
  amsterdam: LogoAmsterdam,
  'ggd-amsterdam': LogoGgdAmsterdam,
  'museum-weesp': LogoMuseumWeesp,
  stadsarchief: LogoStadsarchief,
  'stadsbank-van-lening': LogoStadsbankVanLening,
  'vga-verzekeringen': LogoVgaVerzekeringen,
}

export const Logo = forwardRef(
  ({ brand = 'amsterdam', className, ...restProps }: LogoProps, ref: ForwardedRef<SVGSVGElement>) => {
    const LogoComponent = logoConfig[brand]

    return <LogoComponent {...restProps} ref={ref} className={clsx('ams-logo', className)} />
  },
)

Logo.displayName = 'Logo'
