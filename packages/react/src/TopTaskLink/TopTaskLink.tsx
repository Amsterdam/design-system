/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { AnchorHTMLAttributes, ForwardedRef, forwardRef } from 'react'

export interface TopTaskLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  description?: string
}

export const TopTaskLink = forwardRef(
  ({ className, label, description, ...restProps }: TopTaskLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} ref={ref} className={clsx('amsterdam-top-task-link', className)}>
      <span className="amsterdam-top-task-link__label">{label}</span>
      {description && <span className="amsterdam-top-task-link__description">{description}</span>}
    </a>
  ),
)

TopTaskLink.displayName = 'TopTaskLink'
