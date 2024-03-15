/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PersonalLoginIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useMemo } from 'react'
import type { ForwardedRef, HTMLAttributes } from 'react'
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
} & HTMLAttributes<HTMLElement>

export const Avatar = forwardRef(
  ({ label, imageSrc, className, color = 'dark-blue', ...restProps }: AvatarProps, ref: ForwardedRef<HTMLElement>) => {
    const initials = (label.length > 2 ? label.slice(0, 2) : label).toUpperCase()

    const a11yLabel = useMemo(
      () => (initials.length === 0 ? 'Gebruiker' : `Initialen gebruiker: ${initials}.`),
      [initials],
    )

    const content = useMemo(() => {
      if (imageSrc) {
        return <Image src={imageSrc} />
      } else if (label.length) {
        return initials
      } else {
        return <PersonalLoginIcon />
      }
    }, [imageSrc, label, initials])

    return (
      <span {...restProps} ref={ref} className={clsx('ams-avatar', `ams-avatar--${color}`, className)}>
        {content}
        <VisuallyHidden>{a11yLabel}</VisuallyHidden>
      </span>
    )
  },
)

Avatar.displayName = 'Avatar'
