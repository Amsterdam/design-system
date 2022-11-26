/**
 * @license EUPL-1.2
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  styleLevel: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = forwardRef(
  (
    { level = 1, styleLevel, children, className, ...restProps }: PropsWithChildren<HeadingProps>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    switch (level) {
      case 2:
        return (
          <h2
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h2>
        )
      case 3:
        return (
          <h3
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h3>
        )
      case 4:
        return (
          <h4
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h4>
        )
      case 5:
        return (
          <h5
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h5>
        )
      case 6:
        return (
          <h6
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h6>
        )
      case 1:
      default:
        return (
          <h1
            ref={ref}
            className={clsx('amsterdam-heading', `amsterdam-heading-${styleLevel || level}`, className)}
            {...restProps}
          >
            {children}
          </h1>
        )
    }
  },
)

Heading.displayName = 'Heading'
