import { Column, Paragraph } from '@amsterdam/design-system-react'
import { menu } from './config'

export const Sidebar = () => (
  <div className="ams-application-sidebar">
    <Column gap="large">
      {menu.level1.map(({ Icon, label }, index) => (
        <Column key={index} className="ams-application-column--halign-center" gap="extra-small">
          {Icon && <Icon fill="white" width={24} />}
          <Paragraph inverseColor size="small">
            {label}
          </Paragraph>
        </Column>
      ))}
    </Column>
  </div>
)
