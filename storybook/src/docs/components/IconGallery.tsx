import { Heading } from '@amsterdam/design-system-react'
import { Icon } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons/src'

import './icon-gallery.css'

// const deprecatedIcons = [
//   'AlertIcon',
//   'ChatBubbleIcon',
//   'CloseIcon',
//   'DocumentEuroSignIcon',
//   'DocumentTextIcon',
//   'EditDocumentIcon',
//   'EnlargeIcon',
//   'FavouriteIcon',
//   'HandicapIcon',
//   'HousingIcon',
//   'IndeterminateIcon',
//   'PersonalLoginIcon',
//   'PictureIcon',
//   'SearchIcon',
//   'TableIcon',
//   'TrashBinIcon',
//   'TwitterIcon',
// ]

// const newIcons = [
//   'AccountIcon',
//   'BikeIcon',
//   'BinIcon',
//   'BuildingIcon',
//   'BuildingsIcon',
//   'CalendarIcon',
//   'CameraIcon',
//   'CarIcon',
//   'CheckmarkAlertIcon',
//   'CheckmarkIcon',
//   'ChevronDownIcon',
//   'ChevronLeftIcon',
//   'ChevronRightIcon',
//   'ChevronUpIcon',
//   'ClockIcon',
//   'CogwheelIcon',
//   'ConstructionIcon',
//   'CopyIcon',
//   'CrossAlertIcon',
//   'CrossIcon',
//   'DocumentEditIcon',
//   'DocumentEuroIcon',
//   'DocumentIcon',
//   'DocumentsIcon',
//   'DownloadIcon',
//   'DuplicateIcon',
//   'EditIcon',
//   'EmailIcon',
//   'EuroIcon',
//   'ExternalLinkIcon',
//   'EyeIcon',
//   'EyeOffIcon',
//   'FacebookIcon',
//   'FolderIcon',
//   'HeartIcon',
//   'HelpIcon',
//   'HouseIcon',
//   'ImageIcon',
//   'InfoIcon',
//   'InstagramIcon',
//   'LinkedInIcon',
//   'LinkIcon',
//   'ListIcon',
//   'MagnifyingGlassIcon',
//   'MapIcon',
//   'MastadonIcon',
//   'MenuIcon',
//   'MinusIcon',
//   'NotificationIcon',
//   'PersonIcon',
//   'PhoneIcon',
//   'PlaceholderIcon',
//   'PlusIcon',
//   'SpeechBalloonIcon',
//   'WarningIcon',
//   'WhatsappIcon',
//   'Wheelchair1Icon',
//   'Wheelchair2Icon',
//   'XTwitterIcon',
// ]

// const fillIcons = [
//   'AccountFillIcon',
//   'BinFillIcon',
//   'BuildingFillIcon',
//   'BuildingsFillIcon',
//   'CalendarFillIcon',
//   'CameraFillIcon',
//   'CarFillIcon',
//   'CheckmarkAlertFillIcon',
//   'ClockFillIcon',
//   'CogwheelFillIcon',
//   'CopyFillIcon',
//   'CrossAlertFillIcon',
//   'DocumentEditFillIcon',
//   'DocumentEuroFillIcon',
//   'DocumentFillIcon',
//   'DocumentsFillIcon',
//   'DuplicateFillIcon',
//   'EditFillIcon',
//   'EmailFillIcon',
//   'ExternalLinkFillIcon',
//   'EyeFillIcon',
//   'EyeOffFillIcon',
//   'FolderFillIcon',
//   'HeartFillIcon',
//   'HelpFillIcon',
//   'HouseFillIcon',
//   'ImageFillIcon',
//   'InfoFillIcon',
//   'MapFillIcon',
//   'NotificationFillIcon',
//   'PersonFillIcon',
//   'PhoneFillIcon',
//   'SpeechBalloonFillIcon',
//   'WarningFillIcon',
// ]

export const IconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>
  // const updatedIcons = icons.filter((icon) => newIcons.includes(icon))
  // const filledIcons = icons.filter((icon) => fillIcons.includes(icon))
  // const depIcons = icons.filter((icon) => deprecatedIcons.includes(icon))
  // const oldIcons = icons.filter(
  //   (icon) => !updatedIcons.includes(icon) && !depIcons.includes(icon) && !fillIcons.includes(icon),
  // )

  return (
    <>
      <Heading className="ams-mb--sm" level={2}>
        Icons
      </Heading>
      <div className="ams-storybook-icon-gallery">
        {icons.map((key) => (
          <div className="ams-storybook-icon-gallery__item" key={key}>
            <Icon svg={Icons[key]} />
            <span>{key.substring(0, key.length - 4)}</span>
          </div>
        ))}
      </div>
      {/* <Heading className="ams-mb--sm" level={2}>
        Fill icons
      </Heading>
      <div className="ams-storybook-icon-gallery">
        {filledIcons.map((key) => (
          <div className="ams-storybook-icon-gallery__item" key={key}>
            <Icon svg={Icons[key]} />
            <span>{key.substring(0, key.length - 4)}</span>
          </div>
        ))}
      </div>
      <Heading className="ams-mb--sm" level={2}>
        Old icons
      </Heading>
      <div className="ams-storybook-icon-gallery">
        {oldIcons.map((key) => (
          <div className="ams-storybook-icon-gallery__item" key={key}>
            <Icon svg={Icons[key]} />
            <span>{key.substring(0, key.length - 4)}</span>
          </div>
        ))}
      </div>
      <Heading className="ams-mb--sm" level={2}>
        Deprecated icons
      </Heading>
      <div className="ams-storybook-icon-gallery">
        {depIcons.map((key) => (
          <div className="ams-storybook-icon-gallery__item" key={key}>
            <Icon svg={Icons[key]} />
            <span>{key.substring(0, key.length - 4)}</span>
          </div>
        ))}
      </div> */}
    </>
  )
}
