import { Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons/src'

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
  icons?: string[]
}

export const IconGallery = ({ icons }: IconGalleryProps) => {
  const allIcons = Object.keys(Icons) as Array<keyof typeof Icons>
  const filteredIcons = icons ? allIcons.filter((icon) => icons.includes(icon)) : allIcons
  const groupedIcons = groupIcons(filteredIcons)

  return (
    <div className="sb-unstyled ams-storybook-icon-gallery">
      {Object.keys(groupedIcons).map((baseName) => (
        <div className="ams-storybook-icon-gallery__item" key={baseName}>
          <div className="ams-storybook-icon-gallery__icons">
            {groupedIcons[baseName].outline && <Icon size="large" svg={Icons[groupedIcons[baseName].outline!]} />}
            {groupedIcons[baseName].filled && <Icon size="large" svg={Icons[groupedIcons[baseName].filled!]} />}
          </div>
          <p className="ams-storybook-icon-gallery__name">{baseName.substring(0, baseName.length - 4)}</p>
        </div>
      ))}
    </div>
  )
}
