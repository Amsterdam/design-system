/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { CardHeading } from './CardHeading'
import { CardHeadingGroup } from './CardHeadingGroup'
import { CardImage } from './CardImage'
import { CardLink } from './CardLink'

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const CardRoot = forwardRef(({ children, className, ...restProps }: CardProps, ref: ForwardedRef<HTMLElement>) => (
  <article {...restProps} className={clsx('ams-card', className)} ref={ref}>
    {children}
  </article>
))

CardRoot.displayName = 'Card'

export const Card = Object.assign(CardRoot, {
  Heading: CardHeading,
  HeadingGroup: CardHeadingGroup,
  Image: CardImage,
  Link: CardLink,
})
