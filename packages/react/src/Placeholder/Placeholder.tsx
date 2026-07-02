/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type PlaceholderProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Grey shapes that stand in for content while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-placeholder--docs Placeholder docs at Amsterdam Design System}
 */
export const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ children, className, ...restProps }, ref) => (
    <div {...restProps} className={clsx('ams-placeholder', className)} ref={ref}>
      {children}
    </div>
  ),
)

Placeholder.displayName = 'Placeholder'
