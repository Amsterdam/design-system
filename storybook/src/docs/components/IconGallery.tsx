import { Icon, Paragraph } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons/src'

import './icon-gallery.css'

const deprecatedIcons = [
  'WarningIcon',
  'BallIcon',
  'CardIcon',
  'ChargingPointIcon',
  'ChatBubbleIcon',
  'ChattingIcon',
  'CloseIcon',
  'CollaborateIcon',
  'DocumentCheckmarkIcon',
  'DocumentEuroSignIcon',
  'DocumentTextIcon',
  'EclipseIcon',
  'EditDocumentIcon',
  'EllipsisIcon',
  'EnergyIcon',
  'EnlargeIcon',
  'FacebookPaddedIcon',
  'FavouriteIcon',
  'FontEnlargeIcon',
  'HandicapIcon',
  'HousingIcon',
  'IndeterminateIcon',
  'LampIcon',
  'LocationFieldsIcon',
  'MapLayersIcon',
  'OpeningHoursIcon',
  'PersonalLoginIcon',
  'PictureIcon',
  'PublicParksIcon',
  'PurseIcon',
  'QuoteIcon',
  'SearchIcon',
  'StopIcon',
  'SwimmingIcon',
  'TableIcon',
  'ThumbnailResultsIcon',
  'TwitterIcon',
  'UmbrellaChairsIcon',
  'VolumeIcon',
]

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
  const filteredIcons = icons.filter((icon) => !deprecatedIcons.includes(icon))
  const groupedIcons = groupIcons(filteredIcons)

  return (
    <div className="ams-storybook-icon-gallery">
      {Object.keys(groupedIcons).map((baseName) => (
        <div className="ams-storybook-icon-gallery__item" key={baseName}>
          <div>
            {groupedIcons[baseName].outline && <Icon size="large" svg={Icons[groupedIcons[baseName].outline!]} />}
            {groupedIcons[baseName].filled && <Icon size="large" svg={Icons[groupedIcons[baseName].filled!]} />}
          </div>
          <Paragraph size="small">{baseName.substring(0, baseName.length - 4)}</Paragraph>
        </div>
      ))}
    </div>
  )
}
