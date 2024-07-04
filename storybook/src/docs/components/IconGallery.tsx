import './icon-gallery.css'
import { Icon } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'

export const IconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>

  return (
    <div className="ams-storybook-icon-gallery">
      {icons
        // TODO Remove this filter before merging
        .filter((name) => name.startsWith('New'))
        .map((key) => (
          <div className="ams-storybook-icon-gallery__item" key={key}>
            <Icon svg={Icons[key]} />
            {/* TODO Replace the 3 with a 0 before merging */}
            <span>{key.substring(3, key.length - 8)}</span>
          </div>
        ))}
    </div>
  )
}
