/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { getHeadingTag } from './getHeadingTag'

export type HeadingProps = {
  /** Changes the text colour for readability on a dark background. */
  color?: 'inverse'
  /** The hierarchical level within the document. */
  level: 1 | 2 | 3 | 4
  /** Uses larger or smaller text without changing its position in the heading hierarchy. */
  size?: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

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
