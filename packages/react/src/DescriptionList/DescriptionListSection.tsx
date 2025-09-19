/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DescriptionListSectionProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const DescriptionListSection = forwardRef(
  ({ children, className, ...restProps }: DescriptionListSectionProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-description-list__section', className)} ref={ref}>
      {children}
    </div>
  ),
)

DescriptionListSection.displayName = 'DescriptionList.Section'
