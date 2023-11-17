/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import {
  LogoAmsterdam,
  LogoGgdAmsterdam,
  LogoStadsarchief,
  LogoStadsbankVanLening,
  LogoVgaVerzekeringen,
} from './brand'

type LogoBrand = 'amsterdam' | 'ggd-amsterdam' | 'stadsarchief' | 'stadsbank-van-lening' | 'vga-verzekeringen'

export interface LogoProps extends HTMLAttributes<HTMLElement> {
  brand?: LogoBrand
}

const logoConfig: Record<LogoBrand, Function> = {
  amsterdam: LogoAmsterdam,
  'ggd-amsterdam': LogoGgdAmsterdam,
  stadsarchief: LogoStadsarchief,
  'stadsbank-van-lening': LogoStadsbankVanLening,
  'vga-verzekeringen': LogoVgaVerzekeringen,
}

export const Logo = forwardRef(
  ({ brand = 'amsterdam', className, ...restProps }: LogoProps, ref: ForwardedRef<HTMLElement>) => {
    const LogoComponent = logoConfig[brand]

    return (
      <span {...restProps} ref={ref} className={clsx('amsterdam-logo', className)}>
        {LogoComponent()}
      </span>
    )
  },
)

Logo.displayName = 'Logo'
