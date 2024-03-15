/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactElement } from 'react'

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
  imageUrl?: string
  label: string
} & HTMLAttributes<HTMLElement>

export const Avatar = forwardRef(
  ({ label, imageUrl, className, color = 'dark-blue', ...restProps }: AvatarProps, ref: ForwardedRef<HTMLElement>) => {
    const initials: string | ReactElement = useMemo(() => {
      return (label.length > 2 ? label.slice(0, 2) : label).toUpperCase()
    }, [label])

    const title = useMemo(() => {
      return !initials.length ? 'Niet-ingelogde gebruiker' : `Initialen gebruiker: ${initials.split('').join('.')}.`
    }, [initials])

    const backgroundImageValue: string | undefined = useMemo(() => {
      if (imageUrl) {
        return `url(${imageUrl})`
      } else if (label.length) {
        return 'none'
      } else {
        return undefined
      }
    }, [imageUrl, label])

    return (
      <span
        {...restProps}
        ref={ref}
        className={clsx('ams-avatar', `ams-avatar--${color}`, className)}
        style={{ backgroundImage: backgroundImageValue }}
        title={title}
      >
        {backgroundImageValue !== 'none' ? '‏‏‎ ‎' : initials}
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
