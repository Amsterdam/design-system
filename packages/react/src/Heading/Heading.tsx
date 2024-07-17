/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { getHeadingElement } from './getHeadingElement'

export type HeadingLevel = 1 | 2 | 3 | 4

export type HeadingProps = {
  /** Changes the text colour for readability on a dark background. */
  inverseColor?: boolean
  /** The hierarchical level within the document. */
  level?: HeadingLevel
  /** Uses larger or smaller text without changing its position in the heading hierarchy. */
  size?: 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export const Heading = forwardRef(
  (
    { children, className, inverseColor, level = 1, size, ...restProps }: HeadingProps,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const HeadingX = getHeadingElement(level)
    const sizeOrLevel = size ?? `level-${level}`

    return (
      <HeadingX
        ref={ref}
        className={clsx(
          'ams-heading',
          `ams-heading--${sizeOrLevel}`,
          inverseColor && 'ams-heading--inverse-color',
          className,
        )}
        {...restProps}
      >
        {children}
      </HeadingX>
    )
  },
)

Heading.displayName = 'Heading'
