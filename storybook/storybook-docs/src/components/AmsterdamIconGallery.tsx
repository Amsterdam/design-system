import { Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { IconGallery, IconItem } from '@storybook/blocks'
import '@amsterdam/design-system-css/src/icon/icon.scss'

export const AmsterdamIconGallery = () => (
  <IconGallery>
    {Object.keys(Icons).map((key) => {
      // @ts-ignore-line
      const CurrentComponent = Icons[key]
      const name = key.substring(0, key.length - 4)

      return (
        <IconItem key={key} name={name}>
          <Icon svg={CurrentComponent} />
        </IconItem>
      )
    })}
  </IconGallery>
)
