/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DescriptionListItemProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Groups a term and its descriptions together within a Description List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-description-list--docs Description List docs at Amsterdam Design System}
 */
export const DescriptionListItem = forwardRef(
  ({ children, className, ...restProps }: DescriptionListItemProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-description-list__item', className)} ref={ref}>
      {children}
    </div>
  ),
)

DescriptionListItem.displayName = 'DescriptionList.Item'
