/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react/src'
import type { AspectRatioProps } from '@amsterdam/design-system-react/src/common/types'
import type { HTMLAttributes } from 'react'

import { PersonIcon } from '@amsterdam/design-system-react-icons'
import { generateAspectRatioClass, Icon } from '@amsterdam/design-system-react/src'
import { clsx } from 'clsx'

import './photo-placeholder.css'

type PhotoPlaceholderProps = {
  /** The icon in the centre. Defaults to a single person; pass `PersonsIcon` for a photo of a group. */
  readonly icon?: IconProps['svg']
} & Readonly<AspectRatioProps> &
  Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Stands in for a photograph in page examples, so that no one recognisable appears in the Storybook.
 * Hidden from assistive technologies, like a decorative image. Not for reuse.
 */
export const PhotoPlaceholder = ({
  aspectRatio,
  className,
  icon = PersonIcon,
  ...restProps
}: PhotoPlaceholderProps) => (
  <div
    {...restProps}
    aria-hidden
    className={clsx('_ams-photo-placeholder', generateAspectRatioClass(aspectRatio), className)}
  >
    <Icon size="heading-1" svg={icon} />
  </div>
)
