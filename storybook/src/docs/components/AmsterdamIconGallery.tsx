import { Icon } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { IconGallery, IconItem } from '@storybook/blocks'

export const AmsterdamIconGallery = () => {
  const icons = Object.keys(Icons) as Array<keyof typeof Icons>

  return (
    <IconGallery>
      {icons.map((key) => (
        <IconItem key={key} name={key.substring(0, key.length - 4)}>
          <Icon svg={Icons[key]} />
        </IconItem>
      ))}
    </IconGallery>
  )
}
