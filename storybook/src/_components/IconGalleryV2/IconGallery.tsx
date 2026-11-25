/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons/src'

import './icon-gallery.css'

type IconName = keyof typeof Icons

type IconGalleryProps = {
  readonly excludeIcons?: Set<IconName> | IconName[]
  readonly icons?: Set<IconName> | IconName[]
}

const toSet = (value?: Set<IconName> | IconName[]): Set<IconName> | undefined => {
  if (!value) return undefined
  return value instanceof Set ? value : new Set(value)
}

export const IconGallery = ({ excludeIcons, icons }: IconGalleryProps) => {
  const allIcons = Object.keys(Icons) as IconName[]

  const iconsSet = toSet(icons)
  const excludeIconsSet = toSet(excludeIcons)

  // If 'icons' is provided, start with only those; otherwise, use all
  let filteredIcons = iconsSet ? allIcons.filter((icon) => iconsSet.has(icon)) : allIcons

  // If 'excludeIcons' is provided, remove those from the list
  if (excludeIconsSet) {
    filteredIcons = filteredIcons.filter((icon) => !excludeIconsSet.has(icon))
  }

  // Sort alphabetically for consistent order
  const sortedIcons = [...filteredIcons].sort((a, b) => a.localeCompare(b))

  return (
    <div className="_ams-icon-gallery-v2 sb-unstyled">
      {sortedIcons.map((iconName) => (
        <div className="_ams-icon-gallery-v2__item" key={iconName}>
          <div className="_ams-icon-gallery-v2__icons">
            <Icon size="heading-2" svg={Icons[iconName]} />
          </div>
          <p className="_ams-icon-gallery-v2__name">{iconName.substring(0, iconName.length - 4)}</p>
        </div>
      ))}
    </div>
  )
}
