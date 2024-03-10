/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { CardHeadingGroup } from './CardHeadingGroup'
import { CardLink } from './CardLink'

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

type CardComponent = {
  HeadingGroup: typeof CardHeadingGroup
  Link: typeof CardLink
} & ForwardRefExoticComponent<CardProps & RefAttributes<HTMLElement>>

export const Card = forwardRef(({ children, className, ...restProps }: CardProps, ref: ForwardedRef<HTMLElement>) => (
  <article {...restProps} ref={ref} className={clsx('ams-card', className)}>
    {children}
  </article>
)) as CardComponent

Card.HeadingGroup = CardHeadingGroup
Card.Link = CardLink
Card.displayName = 'Card'
Card.HeadingGroup.displayName = 'Card.HeadingGroup'
Card.Link.displayName = 'Card.Link'
