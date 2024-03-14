/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type AvatarProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Avatar = forwardRef(
  ({ children, className, ...restProps }: AvatarProps, ref: ForwardedRef<HTMLElement>) => (
    <span {...restProps} ref={ref} className={clsx('ams-avatar', className)}>
      {children}
    </span>
  ),
)

Avatar.displayName = 'Avatar'
