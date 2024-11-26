/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DescriptionListGroupProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const DescriptionListGroup = forwardRef(
  ({ children, className, ...restProps }: DescriptionListGroupProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-description-list__group', className)}>
      {children}
    </div>
  ),
)

DescriptionListGroup.displayName = 'DescriptionList.Group'
