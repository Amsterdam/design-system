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
type HeadingSize = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'

export type HeadingProps = {
  /** The hierarchical level of the title. */
  level?: HeadingLevel
  /** The visual size of the title. Use this to make the title larger or smaller without changing its position in the heading hierarchy. */
  size?: HeadingSize
  /** Property to show the heading in the opposite color. */
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export const Heading = forwardRef(
  (
    { children, className, inverseColor, level = 1, size, ...restProps }: HeadingProps,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const HeadingX = getHeadingElement(level)
    const sizeOrLevel = size ? size.split('-')[1] : level

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
