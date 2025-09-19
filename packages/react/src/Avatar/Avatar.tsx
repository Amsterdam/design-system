/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { PersonFillIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { Icon } from '../Icon'

export const avatarColors = ['azure', 'green', 'lime', 'magenta', 'orange', 'yellow'] as const
type AvatarColor = (typeof avatarColors)[number]

type AvatarContentProps = {
  imageSrc?: string
  initials: string
}

const AvatarContent = ({ imageSrc, initials }: AvatarContentProps) => {
  if (imageSrc) {
    return <img alt="" src={imageSrc} />
  }

  if (initials.length) {
    return <span aria-hidden={true}>{initials}</span>
  }

  return <Icon size="small" svg={PersonFillIcon} />
}

export type AvatarProps = {
  /** The background colour. */
  color?: AvatarColor
  /** The url for the user’s image. Its center will be displayed. Should be square and scaled down. */
  imageSrc?: string
  /** The text content. Should be the user’s initials. The first two characters will be displayed. */
  label: string
} & HTMLAttributes<HTMLSpanElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-avatar--docs Avatar docs at Amsterdam Design System}
 */
export const Avatar = forwardRef(
  ({ className, color, imageSrc, label, ...restProps }: AvatarProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const initials = label.slice(0, 2).toUpperCase()

    const a11yLabel = initials.length === 0 ? 'Gebruiker' : `Initialen gebruiker: ${initials}`

    return (
      <span
        {...restProps}
        className={clsx('ams-avatar', color && `ams-avatar--${color}`, imageSrc && 'ams-avatar--has-image', className)}
        ref={ref}
      >
        <span className="ams-visually-hidden">{a11yLabel}</span>
        <AvatarContent imageSrc={imageSrc} initials={initials} />
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
