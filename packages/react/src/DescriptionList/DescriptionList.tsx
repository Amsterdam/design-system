/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { DescriptionListDetails } from './DescriptionListDetails'
import { DescriptionListTerm } from './DescriptionListTerm'

export type DescriptionListProps = PropsWithChildren<HTMLAttributes<HTMLDListElement>>

type DescriptionListComponent = {
  Term: typeof DescriptionListTerm
  Details: typeof DescriptionListDetails
} & ForwardRefExoticComponent<DescriptionListProps & RefAttributes<HTMLDListElement>>

export const DescriptionList = forwardRef(
  ({ children, className, ...restProps }: DescriptionListProps, ref: ForwardedRef<HTMLDListElement>) => (
    <dl {...restProps} ref={ref} className={clsx('ams-description-list', className)}>
      {children}
    </dl>
  ),
) as DescriptionListComponent

DescriptionList.displayName = 'DescriptionList'

DescriptionList.Term = DescriptionListTerm
DescriptionList.Term.displayName = 'DescriptionList.Term'

DescriptionList.Details = DescriptionListDetails
DescriptionList.Details.displayName = 'DescriptionList.Details'
