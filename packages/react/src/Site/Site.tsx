/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

type SiteMaxWidth = 'wide' | 'extra-wide'

export interface SiteProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  maxWidth?: SiteMaxWidth
}

export const Site = forwardRef(
  ({ children, className, maxWidth = 'wide', ...restProps }: SiteProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-site', maxWidth !== 'wide' && `amsterdam-site--${maxWidth}`, className)}
    >
      {children}
    </div>
  ),
)

Site.displayName = 'Site'
