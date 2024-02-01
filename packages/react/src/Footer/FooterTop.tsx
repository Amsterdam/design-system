/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Spotlight } from '../Spotlight/Spotlight'

export type FooterTopProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const FooterTop = forwardRef(
  ({ children, className, ...restProps }: FooterTopProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Spotlight {...restProps} color="dark-blue" ref={ref} className={clsx('amsterdam-footer__top', className)}>
      {children}
    </Spotlight>
  ),
)

FooterTop.displayName = 'FooterTop'
