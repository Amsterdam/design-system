/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef } from 'react'
import { VisuallyHidden } from '../VisuallyHidden'

export type TopTaskLinkProps = {
  /** The title. */
  label: string
  /** The text content. */
  description: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const TopTaskLink = forwardRef(
  ({ className, label, description, ...restProps }: TopTaskLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a {...restProps} ref={ref} className={clsx('ams-top-task-link', className)}>
      <span className="ams-top-task-link__label">{label}</span>
      {/* This comma makes screen readers add a slight pause between the label and the description. */}
      <VisuallyHidden>,</VisuallyHidden>
      <span className="ams-top-task-link__description">{description}</span>
    </a>
  ),
)

TopTaskLink.displayName = 'TopTaskLink'
