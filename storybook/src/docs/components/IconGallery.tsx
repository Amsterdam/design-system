import { Heading } from '@amsterdam/design-system-react'
import { Icon } from '@amsterdam/design-system-react/src'
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

export const IconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>
  const groupedIcons = groupIcons(icons)

  return (
    <>
      <Heading className="ams-mb--sm" level={2}>
        Icons
      </Heading>
      <div className="ams-storybook-icon-gallery">
        {Object.keys(groupedIcons).map((baseName) => (
          <div className="ams-storybook-icon-gallery__item" key={baseName}>
            <div>
              {groupedIcons[baseName].outline && <Icon size="heading-3" svg={Icons[groupedIcons[baseName].outline!]} />}
              {groupedIcons[baseName].filled && <Icon size="heading-3" svg={Icons[groupedIcons[baseName].filled!]} />}
            </div>
            <p className="ams-paragraph ams-paragraph--small">{baseName.substring(0, baseName.length - 4)}</p>
          </div>
        ))}
      </div>
    </>
  )
}
