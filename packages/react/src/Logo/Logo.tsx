/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import LogoAsset from '../../../../proprietary/assets/Logo.svg'

export interface LogoProps extends HTMLAttributes<HTMLElement> {}

export const Logo = forwardRef(({ className, ...restProps }: LogoProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-logo', className)}>
    <img src={LogoAsset} />
  </span>
))

Logo.displayName = 'Logo'
