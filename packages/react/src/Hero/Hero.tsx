/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface HeroProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * De kleur van de titel
   * Gebruik deze property om de titel in tegenovergestelde kleur te tonen.
   */
  inverseColor?: boolean
}

export const Hero = forwardRef(
  (
    { children, className, inverseColor, ...restProps }: PropsWithChildren<HeroProps>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => (
    <h1
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-hero', inverseColor && 'amsterdam-hero--inverse-color', className)}
    >
      {children}
    </h1>
  ),
)

Hero.displayName = 'Hero'
