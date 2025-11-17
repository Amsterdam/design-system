/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { Heading } from '../Heading'
import ProgressListContext from './ProgressListContext'

export type ProgressListItemProps = {
  heading: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const ProgressListItem = forwardRef(
  ({ children, className, heading, ...restProps }: ProgressListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    const { headingLevel } = useContext(ProgressListContext)

    return (
      <li className={clsx('ams-progress-list__item', className)} {...restProps} ref={ref}>
        <span className="ams-progress-list__status-indicator" />
        <div className="ams-progress-list__content">
          <Heading
            className={clsx('ams-progress-list__heading', `ams-progress-list__heading-${headingLevel}`)}
            level={headingLevel}
          >
            {heading}
          </Heading>
          {children}
        </div>
        <span className="ams-progress-list__separator" />
      </li>
    )
  },
)

ProgressListItem.displayName = 'ProgressList.Item'
