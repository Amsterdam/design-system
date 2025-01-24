/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'

export type TopTaskLinkProps = {
  /** The text content. */
  description: string
  /** The title. */
  label: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const TopTaskLink = forwardRef(
  ({ className, description, label, ...restProps }: TopTaskLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} className={clsx('ams-top-task-link', className)} ref={ref}>
      <span className="ams-top-task-link__label">{label}</span>
      {/* This comma makes screen readers add a slight pause between the label and the description. */}
      <span className="ams-visually-hidden">,</span>
      <span className="ams-top-task-link__description">{description}</span>
    </a>
  ),
)

TopTaskLink.displayName = 'TopTaskLink'
