/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { EmptyStateHeading } from './EmptyStateHeading'
import { EmptyStateIcon } from './EmptyStateIcon'

export type EmptyStateProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const EmptyStateRoot = forwardRef(
  ({ children, className, ...restProps }: EmptyStateProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-empty-state', className)} ref={ref}>
      {children}
    </div>
  ),
)

EmptyStateRoot.displayName = 'EmptyState'

export const EmptyState = Object.assign(EmptyStateRoot, {
  Heading: EmptyStateHeading,
  Icon: EmptyStateIcon,
})
