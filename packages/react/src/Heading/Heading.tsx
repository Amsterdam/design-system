/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type Levels = 1 | 2 | 3 | 4

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: Levels
  styleLevel?: Levels
}

export function getElement(level: Levels) {
  switch (level) {
    case 2:
      return 'h2'
    case 3:
      return 'h3'
    case 4:
      return 'h4'
    default:
      return 'h1'
  }
}

export const Heading = forwardRef(
  (
    { level = 1, styleLevel, children, className, ...restProps }: PropsWithChildren<HeadingProps>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const HeadingX = getElement(level)

    return (
      <HeadingX
        ref={ref}
        className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
        {...restProps}
      >
        {children}
      </HeadingX>
    )
  },
)

Heading.displayName = 'Heading'
