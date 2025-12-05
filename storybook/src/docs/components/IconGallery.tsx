/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons/src'

import './icon-gallery.css'

type IconName = keyof typeof Icons

const groupIcons = (icons: IconName[]) => {
  const groupedIcons: {
    [key: string]: { filled?: IconName; outline?: IconName }
  } = {}

  icons.forEach((key) => {
    const baseName = key.replace('Fill', '')
    if (!groupedIcons[baseName]) {
      groupedIcons[baseName] = {}
    }
    if (key.includes('Fill')) {
      groupedIcons[baseName].filled = key
    } else {
      groupedIcons[baseName].outline = key
    }
  })

  return groupedIcons
}

type IconGalleryProps = {
  excludeIcons?: Set<IconName> | IconName[]
  icons?: Set<IconName> | IconName[]
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

  const groupedIcons = groupIcons(filteredIcons)

  // Sort baseNames alphabetically for consistent order
  const sortedBaseNames = Object.keys(groupedIcons).sort((a, b) => a.localeCompare(b))

  return (
    <div className="sb-unstyled ams-storybook-icon-gallery">
      {sortedBaseNames.map((baseName) => (
        <div className="ams-storybook-icon-gallery__item" key={baseName}>
          <div className="ams-storybook-icon-gallery__icons">
            {groupedIcons[baseName].outline && <Icon size="heading-2" svg={Icons[groupedIcons[baseName].outline!]} />}
            {groupedIcons[baseName].filled && <Icon size="heading-2" svg={Icons[groupedIcons[baseName].filled!]} />}
          </div>
          <p className="ams-storybook-icon-gallery__name">{baseName.substring(0, baseName.length - 4)}</p>
        </div>
      ))}
    </div>
  )
}
