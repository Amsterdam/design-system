import { Heading } from '@amsterdam/design-system-react'
import { Icon } from '@amsterdam/design-system-react/src'
// import * as Icons from '@amsterdam/design-system-react-icons'
import { IconGallery, IconItem } from '@storybook/blocks'
// Temporary workaround for the fact that the new icons are not yet available in the design system
import * as Icons from '../../../../proprietary/react-icons/src/index'

const deprecatedIcons = [
  'AlertIcon',
  'TwitterIcon',
  'TrashBinIcon',
  'CloseIcon',
  'DocumentEuroSignIcon',
  'DocumentTextIcon',
  'EditDocumentIcon',
  'EnlargeIcon',
  'IndeterminateIcon',
  'HousingIcon',
  'PersonalLoginIcon',
  'PictureIcon',
  'ChatBubbleIcon',
]

const newIcons = [
  'AccountIcon',
  'AccountFillIcon',
  'BikeIcon',
  'BinIcon',
  'BinFillIcon',
  'BuildingIcon',
  'BuildingFillIcon',
  'BuildingsIcon',
  'BuildingsFillIcon',
  'CalendarIcon',
  'CalendarFillIcon',
  'CameraIcon',
  'CameraFillIcon',
  'CarIcon',
  'CarFillIcon',
  'CheckmarkIcon',
  'CheckmarkAlertIcon',
  'CheckmarkAlertFillIcon',
  'ChevronDownIcon',
  'ChevronLeftIcon',
  'ChevronRightIcon',
  'ChevronUpIcon',
  'ClockIcon',
  'ClockFillIcon',
  'CogwheelIcon',
  'CogwheelFillIcon',
  'ConstructionIcon',
  'CopyIcon',
  'CopyFillIcon',
  'CrossIcon',
  'CrossAlertIcon',
  'CrossAlertFillIcon',
  'DocumentIcon',
  'DocumentEditIcon',
  'DocumentEditFillIcon',
  'DocumentEuroIcon',
  'DocumentEuroFillIcon',
  'DocumentFillIcon',
  'DocumentsIcon',
  'DocumentsFillIcon',
  'DownloadIcon',
  'DuplicateIcon',
  'DuplicateFillIcon',
  'EditIcon',
  'EditFillIcon',
  'EmailIcon',
  'EmailFillIcon',
  'EuroIcon',
  'ExternalLinkIcon',
  'ExternalLinkFillIcon',
  'EyeIcon',
  'EyeFillIcon',
  'EyeOffIcon',
  'EyeOffFillIcon',
  'FacebookIcon',
  'FolderIcon',
  'FolderFillIcon',
  'HeartIcon',
  'HeartFillIcon',
  'HelpIcon',
  'HelpFillIcon',
  'HouseIcon',
  'HouseFillIcon',
  'ImageIcon',
  'ImageFillIcon',
  'InfoIcon',
  'InfoFillIcon',
  'InstagramIcon',
  'LinkIcon',
  'LinkedInIcon',
  'ListIcon',
  'MagnifyingGlassIcon',
  'MapIcon',
  'MapFillIcon',
  'MastadonIcon',
  'MenuIcon',
  'MinusIcon',
  'NotificationIcon',
  'NotificationFillIcon',
  'PersonIcon',
  'PersonFillIcon',
  'PhoneIcon',
  'PhoneFillIcon',
  'PlaceholderIcon',
  'PlusIcon',
  'SpeechBalloonIcon',
  'SpeechBalloonFillIcon',
  'WarningIcon',
  'WarningFillIcon',
  'WhatsappIcon',
  'Wheelchair1Icon',
  'Wheelchair2Icon',
  'XTwitterIcon',
]

export const AmsterdamIconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>
  const updatedIcons = icons.filter((icon) => newIcons.includes(icon))
  const depIcons = icons.filter((icon) => deprecatedIcons.includes(icon))
  const oldIcons = icons.filter((icon) => !updatedIcons.includes(icon) && !depIcons.includes(icon))

  return (
    <>
      <Heading level={2} className="ams-mb--sm">
        New icons
      </Heading>
      <IconGallery>
        {updatedIcons.map((key) => (
          <IconItem name={key.substring(0, key.length - 4)}>
            <Icon svg={Icons[key]} />
          </IconItem>
        ))}
      </IconGallery>
      <Heading level={2} className="ams-mb--sm">
        Deprecated icons
      </Heading>
      <IconGallery>
        {depIcons.map((key) => (
          <IconItem name={key.substring(0, key.length - 4)}>
            <Icon svg={Icons[key]} />
          </IconItem>
        ))}
      </IconGallery>
      <Heading level={2} className="ams-mb--sm">
        Old icons
      </Heading>
      <IconGallery>
        {oldIcons.map((key) => (
          <IconItem name={key.substring(0, key.length - 4)}>
            <Icon svg={Icons[key]} />
          </IconItem>
        ))}
      </IconGallery>
    </>
  )
}
