/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

import { LinkListLink } from './LinkListLink'

export type LinkListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

/** A collection of related links. */
const LinkListRoot = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul className={clsx('ams-link-list', className)} ref={ref} {...restProps}>
        {children}
      </ul>
    )
  },
)

LinkListRoot.displayName = 'LinkList'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-link-list--docs Link List docs at Amsterdam Design System}
 */
export const LinkList = Object.assign(LinkListRoot, { Link: LinkListLink })
