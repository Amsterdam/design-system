/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type MetadataSeparatorProps = Readonly<HTMLAttributes<HTMLSpanElement>>

/**
 * Sets one kind of metadata apart from the next.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-metadata--docs Metadata docs at Amsterdam Design System}
 */
export const MetadataSeparator = forwardRef(
  ({ className, ...restProps }: MetadataSeparatorProps, ref: ForwardedRef<HTMLSpanElement>) => (
    <span {...restProps} className={clsx('ams-metadata__separator', className)} ref={ref}>
      {/* CSS hides this dash and draws a square in its place, so it survives where the stylesheet does not. */}
      {' – '}
    </span>
  ),
)

MetadataSeparator.displayName = 'Metadata.Separator'
