/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Paragraph } from '../Paragraph'

export interface CardHeadingGroupProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  tagline: string
}

export const CardHeadingGroup = forwardRef(
  ({ children, className, tagline, ...restProps }: CardHeadingGroupProps, ref: ForwardedRef<HTMLElement>) => (
    <hgroup {...restProps} ref={ref} className={clsx('amsterdam-card__heading-group', className)}>
      {children}
      <Paragraph size="small">{tagline}</Paragraph>
    </hgroup>
  ),
)

CardHeadingGroup.displayName = 'CardHeadingGroup'
