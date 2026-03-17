/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { BreadcrumbLink } from './BreadcrumbLink'

export type BreadcrumbProps = {
  /** The accessible name for the component. */
  accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  accessibleNameId?: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const BreadcrumbRoot = forwardRef(
  (
    { accessibleName, accessibleNameId, children, className, ...restProps }: BreadcrumbProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <nav
      {...restProps}
      aria-labelledby={accessibleNameId || 'ams-breadcrumb-a11y-label'}
      className={clsx('ams-breadcrumb', className)}
      ref={ref}
    >
      <h2 aria-hidden={true} className="ams-visually-hidden" id={accessibleNameId || 'ams-breadcrumb-a11y-label'}>
        {accessibleName || 'Kruimelpad'}
      </h2>
      <ol className="ams-breadcrumb__list">{children}</ol>
    </nav>
  ),
)

BreadcrumbRoot.displayName = 'Breadcrumb'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-breadcrumb--docs Breadcrumb docs at Amsterdam Design System}
 */
export const Breadcrumb = Object.assign(BreadcrumbRoot, { Link: BreadcrumbLink })
