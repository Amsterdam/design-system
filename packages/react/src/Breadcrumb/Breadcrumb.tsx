/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { BreadcrumbLink } from './BreadcrumbLink'

export type BreadcrumbProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const BreadcrumbRoot = forwardRef(
  ({ children, className, ...restProps }: BreadcrumbProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} ref={ref} className={clsx('ams-breadcrumb', className)}>
      <ol className="ams-breadcrumb__list">{children}</ol>
    </nav>
  ),
)

BreadcrumbRoot.displayName = 'Breadcrumb'

export const Breadcrumb = Object.assign(BreadcrumbRoot, { Link: BreadcrumbLink })
