/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { headingSizes } from '../Heading/Heading'
import { ProgressListContext } from './ProgressListContext'
import { ProgressListStep } from './ProgressListStep'
import { ProgressListSubstep } from './ProgressListSubstep'
import { ProgressListSubsteps } from './ProgressListSubsteps'

export const progressListHeadingSizes = headingSizes.filter((size) => size !== 1)
type ProgressListHeadingSize = (typeof progressListHeadingSizes)[number]

export type ProgressListProps = {
  /**
   * An accessible phrase that screen readers announce before a completed step heading.
   * @default Klaar
   */
  completedAccessibleText?: string
  /**
   * An accessible phrase that screen readers announce before a current step heading.
   * @default Bezig
   */
  currentAccessibleText?: string
  /**
   * The hierarchical level of this Progress List’s Headings within the document.
   * There is no default value; determine the correct level for this instance.
   */
  headingLevel: ProgressListHeadingSize
} & PropsWithChildren<HTMLAttributes<HTMLOListElement>>

const ProgressListRoot = forwardRef(
  (
    {
      children,
      className,
      completedAccessibleText,
      currentAccessibleText,
      headingLevel,
      ...restProps
    }: ProgressListProps,
    ref: ForwardedRef<HTMLOListElement>,
  ) => (
    <ProgressListContext.Provider value={{ completedAccessibleText, currentAccessibleText, headingLevel }}>
      <ol
        {...restProps}
        className={clsx('ams-progress-list', `ams-progress-list--heading-${headingLevel}`, className)}
        ref={ref}
      >
        {children}
      </ol>
    </ProgressListContext.Provider>
  ),
)

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-progress-list--docs Progress List docs at Amsterdam Design System}
 */
export const ProgressList = Object.assign(ProgressListRoot, {
  Step: ProgressListStep,
  Substep: ProgressListSubstep,
  Substeps: ProgressListSubsteps,
})

ProgressListRoot.displayName = 'ProgressList'
