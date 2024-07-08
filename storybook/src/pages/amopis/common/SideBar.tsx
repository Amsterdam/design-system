import { Column, Paragraph } from '@amsterdam/design-system-react'
import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'
import type { ElementType } from 'react'

type MenuItem = {
  Icon: ElementType
  text: string
}

const menuItems: MenuItem[] = [
  { Icon: HousingIcon, text: 'Dashboard' },
  { Icon: SuitcaseIcon, text: 'Projecten' },
  { Icon: DocumentTextIcon, text: 'Rapportages' },
  { Icon: ExternalLinkIcon, text: 'Analyses' },
  { Icon: StopIcon, text: 'Instellingen' },
]

export const Sidebar = () => (
  <div className="ams-application-sidebar">
    <Column gap="large">
      {menuItems.map(({ Icon, text }, index) => (
        <Column key={index} className="ams-application-column--halign-center" gap="extra-small">
          <Icon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            {text}
          </Paragraph>
        </Column>
      ))}
    </Column>
  </div>
)
