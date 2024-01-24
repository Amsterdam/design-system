/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, PropsWithChildren } from 'react'

export interface CardLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {}

export const CardLink = forwardRef(
  ({ children, className, ...otherProps }: CardLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...otherProps} ref={ref} className={clsx('amsterdam-card__link', className)}>
      {children}
    </a>
  ),
)

CardLink.displayName = 'CardLink'
