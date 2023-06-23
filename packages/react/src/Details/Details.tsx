/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */
import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface DetailsProps extends HTMLAttributes<HTMLDetailsElement> {
  summary: string
}

export const Details = forwardRef(
  (
    { children, className, summary, ...restProps }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    return (
      <details ref={ref} className={clsx('amsterdam-details', className)} {...restProps}>
        <summary className="amsterdam-details__summary">{summary}</summary>
        <div className="amsterdam-details__content">{children}</div>
      </details>
    )
  },
)

Details.displayName = 'Details'
