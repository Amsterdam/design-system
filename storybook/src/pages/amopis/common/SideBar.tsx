import { Column, Paragraph } from '@amsterdam/design-system-react'
import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'

export function Sidebar() {
  return (
    <div className="ams-docs-amopis-sidebar">
      <Column gap="large">
        <Column className="ams-docs-amopis-column--halign-center" gap="extra-small">
          <HousingIcon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            Dashboard
          </Paragraph>
        </Column>
        <Column className="ams-docs-amopis-column--halign-center" gap="extra-small">
          <SuitcaseIcon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            Projecten
          </Paragraph>
        </Column>
        <Column className="ams-docs-amopis-column--halign-center" gap="extra-small">
          <DocumentTextIcon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            Rapportages
          </Paragraph>
        </Column>
        <Column className="ams-docs-amopis-column--halign-center" gap="extra-small">
          <ExternalLinkIcon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            Analyses
          </Paragraph>
        </Column>
        <Column className="ams-docs-amopis-column--halign-center" gap="extra-small">
          <StopIcon fill="white" width={24} />
          <Paragraph inverseColor size="small">
            Instellingen
          </Paragraph>
        </Column>
      </Column>
    </div>
  )
}
