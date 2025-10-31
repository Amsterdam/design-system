/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { getHeadingTag } from './getHeadingTag'

export const headingSizes = [1, 2, 3, 4] as const
type HeadingSize = (typeof headingSizes)[number]

export type HeadingProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** The hierarchical level within the document. */
  level: HeadingSize
  /**
   * Uses larger or smaller text without changing its position in the heading hierarchy.
   * The value ‘level-6’ is deprecated. Use level 5 instead.
   */
  size?: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-text-heading--docs Heading docs at Amsterdam Design System}
 */
export const Heading = forwardRef(
  ({ children, className, color, level, size, ...restProps }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    const Tag = getHeadingTag(level)
    const visualLevel = size ? size.slice(-1) : level

    return (
      <Tag
        className={clsx('ams-heading', `ams-heading--${visualLevel}`, color && `ams-heading--${color}`, className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </Tag>
    )
  },
)

Heading.displayName = 'Heading'
