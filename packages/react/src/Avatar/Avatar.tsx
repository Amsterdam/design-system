/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PersonalLoginIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
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

type ContentProps = { imageSrc?: string; initials: string }

const Content = ({ imageSrc, initials }: ContentProps) => {
  if (imageSrc) {
    return <Image src={imageSrc} alt="" />
  }

  if (initials.length) {
    return <span aria-hidden={true}>{initials}</span>
  }

  return <Icon svg={PersonalLoginIcon} size="level-6" />
}

export const Avatar = forwardRef(
  (
    { label, imageSrc, className, color = 'dark-blue', ...restProps }: AvatarProps,
    ref: ForwardedRef<HTMLSpanElement>,
  ) => {
    const initials = label.slice(0, 2).toUpperCase()

    const a11yLabel = initials.length === 0 ? 'Gebruiker' : `Initialen gebruiker: ${initials}`

    return (
      <span
        {...restProps}
        ref={ref}
        className={clsx('ams-avatar', `ams-avatar--${color}`, imageSrc && 'ams-avatar--has-image', className)}
      >
        <VisuallyHidden>{a11yLabel}</VisuallyHidden>
        <Content imageSrc={imageSrc} initials={initials} />
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
