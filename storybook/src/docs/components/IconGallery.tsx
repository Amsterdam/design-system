import { Icon } from '@aram-limpens/design-system-react'
import * as Icons from '@aram-limpens/design-system-react-icons/src'

import './icon-gallery.css'

const groupIcons = (icons: Array<keyof typeof Icons>) => {
  const groupedIcons: { [key: string]: { filled?: keyof typeof Icons; outline?: keyof typeof Icons } } = {}

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
  excludeIcons?: string[]
  icons?: string[]
}

export const IconGallery = ({ excludeIcons, icons }: IconGalleryProps) => {
  const allIcons = Object.keys(Icons) as Array<keyof typeof Icons>

  // If 'icons' is provided, start with only those; otherwise, use all
  let filteredIcons = icons ? allIcons.filter((icon) => icons.includes(icon)) : allIcons

  // If 'excludeIcons' is provided, remove those from the list
  if (excludeIcons) {
    filteredIcons = filteredIcons.filter((icon) => !excludeIcons.includes(icon))
  }

  const groupedIcons = groupIcons(filteredIcons)

  // Sort baseNames alphabetically for consistent order
  const sortedBaseNames = Object.keys(groupedIcons).sort((a, b) => a.localeCompare(b))

  return (
    <div className="sb-unstyled ams-storybook-icon-gallery">
      {sortedBaseNames.map((baseName) => (
        <div className="ams-storybook-icon-gallery__item" key={baseName}>
          <div className="ams-storybook-icon-gallery__icons">
            {groupedIcons[baseName].outline && <Icon size="heading-3" svg={Icons[groupedIcons[baseName].outline!]} />}
            {groupedIcons[baseName].filled && <Icon size="heading-3" svg={Icons[groupedIcons[baseName].filled!]} />}
          </div>
          <p className="ams-storybook-icon-gallery__name">{baseName.substring(0, baseName.length - 4)}</p>
        </div>
      ))}
    </div>
  )
}
