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

export type ProgressListProps = {
  headingLevel: HeadingProps['level']
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-TODO-ADD-GROUP-progress-list--docs ProgressList docs at Amsterdam Design System}
 */
const ProgressListRoot = forwardRef(
  ({ children, className, headingLevel, ...restProps }: ProgressListProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ProgressListContext.Provider value={{ headingLevel: headingLevel }}>
      <ol
        {...restProps}
        className={clsx(
          'ams-progress-list',

          className,
        )}
        ref={ref}
      >
        {children}
      </ol>
    </ProgressListContext.Provider>
  ),
)

export const ProgressList = Object.assign(ProgressListRoot, { Step: ProgressListStep })
ProgressListRoot.displayName = 'ProgressList'
