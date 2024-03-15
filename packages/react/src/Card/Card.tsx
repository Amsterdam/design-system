/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { CardHeadingGroup } from './CardHeadingGroup'
import { CardLink } from './CardLink'

export type CardProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const CardRoot = forwardRef(({ children, className, ...restProps }: CardProps, ref: ForwardedRef<HTMLElement>) => (
  <article {...restProps} ref={ref} className={clsx('ams-card', className)}>
    {children}
  </article>
))

CardRoot.displayName = 'Card'

export const Card = Object.assign(CardRoot, { HeadingGroup: CardHeadingGroup, Link: CardLink })
