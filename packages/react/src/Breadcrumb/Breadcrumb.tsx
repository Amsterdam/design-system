/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { BreadcrumbLink } from './BreadcrumbLink'

export type BreadcrumbProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const BreadcrumbRoot = forwardRef(
  ({ children, className, ...restProps }: BreadcrumbProps, ref: ForwardedRef<HTMLElement>) => (
    <nav {...restProps} className={clsx('ams-breadcrumb', className)} ref={ref}>
      <ol className="ams-breadcrumb__list">{children}</ol>
    </nav>
  ),
)

BreadcrumbRoot.displayName = 'Breadcrumb'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-breadcrumb--docs Breadcrumb docs at Amsterdam Design System}
 */
export const Breadcrumb = Object.assign(BreadcrumbRoot, { Link: BreadcrumbLink })
