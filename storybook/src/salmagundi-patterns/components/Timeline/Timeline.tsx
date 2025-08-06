/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TimelineStep } from './TimelineStep'
import TimelineContext from './TimelineContext'

import './styles.css'

export type TimelineProps = {
  collapsible?: boolean
  editable?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

const TimelineRoot = forwardRef(
  (
    { children, className, collapsible = false, editable = false, ...restProps }: TimelineProps,
    ref: ForwardedRef<HTMLUListElement>
  ) => {
    return (
      <TimelineContext.Provider value={{ collapsible: collapsible, editable: editable }}>
        <ul
          ref={ref}
          className={clsx('ams-timeline', collapsible && 'ams-timeline--collapsible', className)}
          {...restProps}
        >
          {children}
        </ul>
      </TimelineContext.Provider>
    )
  }
)

TimelineRoot.displayName = 'Timeline'

export const Timeline = Object.assign(TimelineRoot, { Step: TimelineStep })
