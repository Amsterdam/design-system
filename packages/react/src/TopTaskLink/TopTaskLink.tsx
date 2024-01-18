/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

export interface TopTaskLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  description: string
}

export const TopTaskLink = forwardRef(
  ({ className, label, description, ...restProps }: TopTaskLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-top-task-link', className)}
      // The comma makes screen readers add a slight pause between the label and the description.
      aria-label={`${label}, ${description}`}
    >
      <span className="amsterdam-top-task-link__label">{label}</span>
      <span className="amsterdam-top-task-link__description">{description}</span>
    </a>
  ),
)

TopTaskLink.displayName = 'TopTaskLink'
