/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export const EmptyStateIcon = forwardRef(({ className, ...restProps }: IconProps) => (
  <span className="ams-empty-state__icon-wrapper">
    <Icon {...restProps} className={className} />
  </span>
))

EmptyStateIcon.displayName = 'EmptyState.Icon'
