/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardedRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Paragraph } from '../Paragraph'

export interface CardHeadingProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  tagline: string
}

export const CardHeadingGroup = forwardRef(
  ({ children, className, tagline, ...restProps }: CardHeadingProps, ref: ForwardedRef<HTMLElement>) => (
    <hgroup {...restProps} ref={ref} className={clsx('amsterdam-card__heading-group', className)}>
      {children}
      <Paragraph size="small">{tagline}</Paragraph>
    </hgroup>
  ),
)

CardHeadingGroup.displayName = 'CardHeadingGroup'

export const CardLink = forwardRef(
  (
    { children, className, ...otherProps }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a {...otherProps} ref={ref} className={clsx('amsterdam-card__link', className)}>
      {children}
    </a>
  ),
)

CardLink.displayName = 'CardLink'

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
