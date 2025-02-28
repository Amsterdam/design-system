/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column } from '@amsterdam/design-system-react'
import { NavigationSection } from './NavigationSection'
import type { LinkGroup } from './links'

type LinksSectionsProps = {
  sections: LinkGroup[]
}

export const NavigationColumn = ({ sections }: LinksSectionsProps) => (
  <Column gap="extra-large">
    {sections.map(({ heading, links }) => (
      <NavigationSection heading={heading} links={links} />
    ))}
  </Column>
)
