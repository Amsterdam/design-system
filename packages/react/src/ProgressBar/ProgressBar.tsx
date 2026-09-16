/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ProgressBarProps = Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

/**
 * A bar that shows how far a user has progressed through a process, such as a form.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-progress-bar--docs ProgressBar docs at Amsterdam Design System}
 */
export const ProgressBar = forwardRef<HTMLElement, ProgressBarProps>(({ children, className, ...restProps }, ref) => (
  <span {...restProps} className={clsx('ams-progress-bar', className)} ref={ref}>
    {children}
  </span>
))

ProgressBar.displayName = 'ProgressBar'
