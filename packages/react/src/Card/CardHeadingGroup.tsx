/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import { Paragraph } from '../Paragraph'

export type CardHeadingGroupProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** A short phrase of text, e.g. to categorise the card. Displayed above the card heading. */
  tagline: string
}

export const CardHeadingGroup = forwardRef(
  ({ children, className, tagline, ...restProps }: CardHeadingGroupProps, ref: ForwardedRef<HTMLElement>) => (
    <hgroup {...restProps} className={clsx('ams-card__heading-group', className)} ref={ref}>
      {children}
      <Paragraph size="small">{tagline}</Paragraph>
    </hgroup>
  ),
)

CardHeadingGroup.displayName = 'Card.HeadingGroup'
