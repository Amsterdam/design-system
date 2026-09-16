/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type ProgressBarProps = {
  /**
   * The value that represents 100% progress.
   */
  readonly max: number
  /**
   * A description of the progress, such as '4 van de 10 stappen'.
   * This is not calculated from `value` and `max` and must be provided separately.
   */
  readonly text: string
  /**
   * The current progress value.
   */
  readonly value: number
} & Readonly<Omit<HTMLAttributes<HTMLDivElement>, 'children'>>

/**
 * A bar that shows how far a user has progressed through a process, such as a form.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-progress-bar--docs ProgressBar docs at Amsterdam Design System}
 */
export const ProgressBar = forwardRef(
  ({ className, max, text, value, ...restProps }: ProgressBarProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-progress-bar', className)} ref={ref}>
      <p aria-hidden className="ams-progress-bar-text">
        {text}
      </p>
      <progress aria-label={text} className="ams-progress-bar-progress" max={max} value={value}>
        {text}
      </progress>
    </div>
  ),
)

ProgressBar.displayName = 'ProgressBar'
