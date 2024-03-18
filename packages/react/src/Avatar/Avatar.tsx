/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PersonalLoginIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { VisuallyHidden } from '../VisuallyHidden'

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
  imageSrc?: string
  label: string
} & HTMLAttributes<HTMLSpanElement>

export const Avatar = forwardRef(
  (
    { label, imageSrc, className, color = 'dark-blue', ...restProps }: AvatarProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => {
    const initials = label.slice(0, 2).toUpperCase()

    const a11yLabel = initials.length === 0 ? 'Gebruiker' : `Initialen gebruiker: ${initials}.`

    const content = useMemo(() => {
      if (imageSrc) {
        return <Image src={imageSrc} />
      }

      if (label.length) {
        return initials
      }

      return <Icon svg={PersonalLoginIcon} size="level-6" />
    }, [imageSrc, label, initials])

    return (
      <span
        {...restProps}
        ref={ref}
        className={clsx('ams-avatar', `ams-avatar--${color}`, imageSrc && 'ams-avatar--has-image', className)}
      >
        {content}
        <VisuallyHidden>{a11yLabel}</VisuallyHidden>
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
