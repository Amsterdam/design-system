/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'

export const avatarColors = [
  'blue',
  'dark-blue',
  'dark-green',
  'green',
  'magenta',
  'orange',
  'purple',
  'red',
  'yellow',
] as const

type AvatarColor = (typeof avatarColors)[number]

export type AvatarProps = {
  color?: AvatarColor
  label: string
} & HTMLAttributes<HTMLElement>

export const Avatar = forwardRef(
  ({ label, className, color = 'dark-blue', ...restProps }: AvatarProps, ref: ForwardedRef<HTMLElement>) => {
    if (label.length !== 2) {
      // TODO: should we log this somewhere or throw an error to the consumer?
      console.warn(`Avatar label should be no more and no less than two characters. Got: "${label}".`)
    }

    const initials = useMemo(() => {
      if (label.length === 0) {
        return 'n.b.'
      } else if (label.length > 2) {
        return label.slice(0, 2).toUpperCase()
      } else {
        return label.toUpperCase()
      }
    }, [label])

    const initialsDotted = useMemo(() => `${initials.split('').join('.')}.`, [initials])

    return (
      <span
        {...restProps}
        ref={ref}
        className={clsx('ams-avatar', `ams-avatar--${color}`, className)}
        aria-label={`Initialen gebruiker: ${initialsDotted}`}
      >
        {initials}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
