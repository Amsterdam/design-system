/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface SiteProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Site = forwardRef(({ children, className, ...restProps }: SiteProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-site', className)}>
    {children}
  </span>
))

Site.displayName = 'Site'
