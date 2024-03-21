/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { Children, forwardRef, isValidElement } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { DescriptionListDetails } from './DescriptionListDetails'
import { DescriptionListRow } from './DescriptionListRow'
import { DescriptionListTerm } from './DescriptionListTerm'

export type DescriptionListProps = PropsWithChildren<HTMLAttributes<HTMLDListElement>> & {
  inverseColor?: boolean
}

type DescriptionListComponent = {
  Term: typeof DescriptionListTerm
  Details: typeof DescriptionListDetails
  Row: typeof DescriptionListRow
} & ForwardRefExoticComponent<DescriptionListProps & RefAttributes<HTMLDListElement>>

export const DescriptionList = forwardRef(
  ({ children, className, inverseColor, ...restProps }: DescriptionListProps, ref: ForwardedRef<HTMLDListElement>) => {
    const hasDescriptionListRow = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === DescriptionListRow,
    )

    console.log('DescriptionList', hasDescriptionListRow)

    return (
      <dl
        {...restProps}
        ref={ref}
        className={clsx(
          'ams-description-list',
          hasDescriptionListRow && 'ams-description-list--rows',
          inverseColor && 'ams-description-list--inverse-color',
          className,
        )}
      >
        {children}
      </dl>
    )
  },
) as DescriptionListComponent

DescriptionList.displayName = 'DescriptionList'

DescriptionList.Term = DescriptionListTerm
DescriptionList.Term.displayName = 'DescriptionList.Term'

DescriptionList.Details = DescriptionListDetails
DescriptionList.Details.displayName = 'DescriptionList.Details'

DescriptionList.Row = DescriptionListRow
DescriptionList.Row.displayName = 'DescriptionList.Row'
