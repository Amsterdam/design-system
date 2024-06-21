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

export const avatarColors = [
  'black',
  'blue',
  'dark-green',
  'green',
  'grey-1',
  'grey-2',
  'grey-3',
  'light-blue',
  'magenta',
  'orange',
  'purple',
  'red',
  'white',
  'yellow',
] as const

type AvatarColor = (typeof avatarColors)[number]

type AvatarContentProps = {
  imageSrc?: string
  initials: string
}

const AvatarContent = ({ imageSrc, initials }: AvatarContentProps) => {
  if (imageSrc) {
    return <Image src={imageSrc} alt="" />
  }

  if (initials.length) {
    return <span aria-hidden={true}>{initials}</span>
  }

  return <Icon svg={PersonalLoginIcon} size="level-6" />
}

export type AvatarProps = {
  /** The background colour. */
  color?: AvatarColor
  /** The url for the user’s image. Its center will be displayed. Should be square and scaled down. */
  imageSrc?: string
  /** The text content. Should be the user’s initials. The first two characters will be displayed. */
  label: string
} & HTMLAttributes<HTMLSpanElement>

export const Avatar = forwardRef(
  ({ label, imageSrc, className, color = 'blue', ...restProps }: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const initials = label.slice(0, 2).toUpperCase()

    const a11yLabel = initials.length === 0 ? 'Gebruiker' : `Initialen gebruiker: ${initials}`

    return (
      <span
        {...restProps}
        ref={ref}
        className={clsx('ams-avatar', `ams-avatar--${color}`, imageSrc && 'ams-avatar--has-image', className)}
      >
        <span className="ams-visually-hidden">{a11yLabel}</span>
        <AvatarContent imageSrc={imageSrc} initials={initials} />
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
