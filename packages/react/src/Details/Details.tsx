/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronDown } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { getElement } from '../Heading/Heading'
import { Icon } from '../Icon/Icon'

export interface DetailsProps extends HTMLAttributes<HTMLDetailsElement> {
  summary: string
  headingLevel?: 1 | 2 | 3 | 4
}

export const Details = forwardRef(
  (
    { children, className, headingLevel, summary, ...restProps }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    const HeadingX = headingLevel && getElement(headingLevel)

    return (
      <details ref={ref} className={clsx('amsterdam-details', className)} {...restProps}>
        <summary className="amsterdam-details__summary">
          {headingLevel ? <HeadingX>{summary}</HeadingX> : summary}
          <Icon svg={ChevronDown} size="level-5" />
        </summary>
        <div className="amsterdam-details__content">{children}</div>
      </details>
    )
  },
)

Details.displayName = 'Details'
