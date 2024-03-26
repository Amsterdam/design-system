/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { Children, forwardRef, isValidElement } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { DescriptionListDetails } from './DescriptionListDetails'
import { DescriptionListRow } from './DescriptionListRow'
import { DescriptionListTerm } from './DescriptionListTerm'

export type DescriptionListProps = {
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDListElement>>

const DescriptionListRoot = forwardRef(
  ({ children, className, inverseColor, ...restProps }: DescriptionListProps, ref: ForwardedRef<HTMLDListElement>) => {
    const hasDescriptionListRow = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === DescriptionListRow,
    )

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
)

DescriptionListRoot.displayName = 'DescriptionList'

export const DescriptionList = Object.assign(DescriptionListRoot, {
  Term: DescriptionListTerm,
  Details: DescriptionListDetails,
  Row: DescriptionListRow,
})
