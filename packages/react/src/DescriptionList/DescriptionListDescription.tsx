/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DescriptionListDescriptionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * The description or value paired with a term in a Description List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-description-list--docs Description List docs at Amsterdam Design System}
 */
export const DescriptionListDescription = forwardRef(
  ({ children, className, ...restProps }: DescriptionListDescriptionProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} className={clsx('ams-description-list__description', className)} ref={ref}>
      {children}
    </dd>
  ),
)

DescriptionListDescription.displayName = 'DescriptionList.Description'
