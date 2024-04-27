/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DescriptionListDetailsProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const DescriptionListDetails = forwardRef(
  ({ children, className, ...restProps }: DescriptionListDetailsProps, ref: ForwardedRef<HTMLElement>) => (
    <dd {...restProps} ref={ref} className={clsx('ams-description-list__details', className)}>
      {children}
    </dd>
  ),
)

DescriptionListDetails.displayName = 'DescriptionList.Details'
