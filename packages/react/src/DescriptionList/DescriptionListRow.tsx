/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DescriptionListRowProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const DescriptionListRow = forwardRef(
  ({ children, className, ...restProps }: DescriptionListRowProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-description-list__row', className)}>
      {children}
    </div>
  ),
)

DescriptionListRow.displayName = 'DescriptionList.Row'
