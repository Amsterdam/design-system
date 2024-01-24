/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { CardHeadingGroup } from './CardHeadingGroup'
import { CardLink } from './CardLink'

export interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export interface CardComponent extends ForwardRefExoticComponent<CardProps & RefAttributes<HTMLElement>> {
  HeadingGroup: typeof CardHeadingGroup
  Link: typeof CardLink
}

export const Card = forwardRef(({ children, className, ...restProps }: CardProps, ref: ForwardedRef<HTMLElement>) => (
  <article {...restProps} ref={ref} className={clsx('amsterdam-card', className)}>
    {children}
  </article>
)) as CardComponent

Card.HeadingGroup = CardHeadingGroup
Card.Link = CardLink
Card.displayName = 'Card'
Card.HeadingGroup.displayName = 'Card.HeadingGroup'
Card.Link.displayName = 'Card.Link'
