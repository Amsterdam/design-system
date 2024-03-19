/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Paragraph } from '../Paragraph'

export type CardHeadingGroupProps = {
  tagline: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const CardHeadingGroup = forwardRef(
  ({ children, className, tagline, ...restProps }: CardHeadingGroupProps, ref: ForwardedRef<HTMLElement>) => (
    <hgroup {...restProps} ref={ref} className={clsx('ams-card__heading-group', className)}>
      {children}
      <Paragraph size="small">{tagline}</Paragraph>
    </hgroup>
  ),
)

CardHeadingGroup.displayName = 'Card.HeadingGroup'
