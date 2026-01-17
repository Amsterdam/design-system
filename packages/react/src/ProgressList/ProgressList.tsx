/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HeadingProps } from '../Heading'

import ProgressListContext from './ProgressListContext'
import { ProgressListStep } from './ProgressListStep'
import { ProgressListSubstep } from './ProgressListSubstep'
import { ProgressListSubsteps } from './ProgressListSubsteps'

export type ProgressListProps = {
  /**
   * The hierarchical level of this Progress List’s Headings within the document.
   * There is no default value; determine the correct level for this instance.
   */
  headingLevel: Exclude<HeadingProps['level'], 1>
} & PropsWithChildren<HTMLAttributes<HTMLOListElement>>

const ProgressListRoot = forwardRef(
  ({ children, className, headingLevel, ...restProps }: ProgressListProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ProgressListContext.Provider value={{ headingLevel: headingLevel }}>
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
