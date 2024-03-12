/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type HeadingLevel = 1 | 2 | 3 | 4
type HeadingSize = 'level-1' | 'level-2' | 'level-3' | 'level-4' | 'level-5' | 'level-6'

export type HeadingProps = {
  /**
   * Het hiërarchische niveau van de titel.
   */
  level?: HeadingLevel
  /**
   * De visuele grootte van de titel.
   * Voeg dit toe om de titel groter of kleiner weer te geven zonder de semantische betekenis te veranderen.
   */
  size?: HeadingSize
  /**
   * De kleur van de titel
   * Gebruik deze property om de titel in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

export function getHeadingElement(level: HeadingLevel) {
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
