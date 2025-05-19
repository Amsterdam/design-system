import { Icon, Paragraph } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons/src'

import './icon-gallery.css'

// List of deprecated icons, these icons are from the old icon set and are symlinked to there new icons
// in the new icon set. This is to prevent breaking changes in the old icon set
// To remove all symlinks in a dir you can use the following command:
// find . -type l -exec rm {} \;
const deprecatedIcons = [
  'AlertIcon',
  'BallIcon',
  'CardIcon',
  'ChargingPointIcon',
  'ChatBubbleIcon',
  'ChattingIcon',
  'CollaborateIcon',
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
  'StopIcon',
  'SpinnerIcon',
  'TableIcon',
  'ThumbnailResultsIcon',
  'TwitterIcon',
  'UmbrellaChairsIcon',
  'VolumeIcon',
  'PlaneIcon',
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
