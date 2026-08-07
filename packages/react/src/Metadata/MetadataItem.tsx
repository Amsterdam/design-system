/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type MetadataItemProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLSpanElement>>>

/**
 * One kind of metadata, separated from the next by a separator.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-metadata--docs Metadata docs at Amsterdam Design System}
 */
export const MetadataItem = forwardRef(
  ({ children, className, ...restProps }: MetadataItemProps, ref: ForwardedRef<HTMLSpanElement>) => (
    <span {...restProps} className={clsx('ams-metadata__item', className)} ref={ref}>
      {children}
    </span>
  ),
)

MetadataItem.displayName = 'Metadata.Item'
