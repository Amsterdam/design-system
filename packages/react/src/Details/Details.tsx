/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { ChevronDown } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { DetailsHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { getElement, Levels } from '../Heading/Heading'
import { Icon } from '../Icon/Icon'

export interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  summary: string
  headingLevel?: Levels
}

function getHeading(summary: string, headingLevel: Levels) {
  const HeadingX = getElement(headingLevel)

  return <HeadingX>{summary}</HeadingX>
}

export const Details = forwardRef(
  (
    { children, className, headingLevel, summary, ...restProps }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    return (
      <details ref={ref} className={clsx('amsterdam-details', className)} {...restProps}>
        <summary className="amsterdam-details__summary">
          {headingLevel ? getHeading(summary, headingLevel) : summary}
          <Icon svg={ChevronDown} size="level-5" />
        </summary>
        <div className="amsterdam-details__content">{children}</div>
      </details>
    )
  },
)

Details.displayName = 'Details'
