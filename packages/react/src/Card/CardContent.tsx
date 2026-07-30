/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type CardContentProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>

/**
 * Groups everything in a Card that is not its image, so the two sit side by side in the horizontal layout.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-card--docs Card docs at Amsterdam Design System}
 */
export const CardContent = forwardRef(
  ({ children, className, ...restProps }: CardContentProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-card__content', className)} ref={ref}>
      {children}
    </div>
  ),
)

CardContent.displayName = 'Card.Content'
