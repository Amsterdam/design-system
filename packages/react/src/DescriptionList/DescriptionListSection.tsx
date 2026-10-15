/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect } from 'react'

/** @deprecated Use `DescriptionListItemProps` instead. Will be removed on or after 2027-04-16. */
export type DescriptionListSectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Groups a term and its descriptions together within a Description List.
 *
 * @deprecated Use `DescriptionList.Item` instead. Will be removed on or after 2027-04-16.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-description-list--docs Description List docs at Amsterdam Design System}
 */
export const DescriptionListSection = forwardRef(
  ({ children, className, ...restProps }: DescriptionListSectionProps, ref: ForwardedRef<HTMLDivElement>) => {
    useEffect(() => {
      console.warn('@deprecated Description List Section has been renamed. Use `DescriptionList.Item` instead.')
    }, [])

    return (
      <div {...restProps} className={clsx('ams-description-list__section', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

DescriptionListSection.displayName = 'DescriptionList.Section'
