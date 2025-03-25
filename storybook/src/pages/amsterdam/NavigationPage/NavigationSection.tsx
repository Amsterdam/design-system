import { Column, Heading, LinkList } from '@amsterdam/design-system-react'
import type { LinkGroup } from './links'

type NavigationSectionProps = LinkGroup

export const NavigationSection = ({ heading, links }: NavigationSectionProps) => (
  <Column gap="extra-small" key={heading}>
    <Heading className="ams-mb--sm" level={2} size="level-3">
      {heading}
    </Heading>
    <LinkList>
      {links.map((link) => (
        <LinkList.Link href="#" key={link}>
          {link}
        </LinkList.Link>
      ))}
    </LinkList>
  </Column>
)
