/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SpinnerProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * The spinner is a component that is used when a page or a part of the page is loading
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-spinner--docs Spinner docs at Amsterdam Design System}
 */
export const Spinner = forwardRef<HTMLElement, SpinnerProps>(({ children, className, ...restProps }, ref) => (
  <span {...restProps} className={clsx('ams-spinner', className)} ref={ref}>
    {children}
  </span>
))

Spinner.displayName = 'Spinner'
