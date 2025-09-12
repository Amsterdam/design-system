/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, type HeadingProps } from '@amsterdam/design-system-react'
import { LinkBlock } from './LinkBlock'
import type { LinkGroup } from './links'

type LinkBlockGridCellsProps = {
  headingLevel?: HeadingProps['level']
  linkGroups: LinkGroup[]
}

export const LinkBlockGridCells = ({ headingLevel, linkGroups }: LinkBlockGridCellsProps) =>
  linkGroups.map(({ heading, links }, index) => (
    <Grid.Cell
      key={heading}
      span={{ narrow: 4, medium: 4, wide: 5 }}
      start={{ narrow: 1, medium: index % 2 === 0 ? 1 : 5, wide: index % 2 === 0 ? 2 : 7 }}
    >
      <LinkBlock heading={heading} headingLevel={headingLevel} links={links} />
    </Grid.Cell>
  ))
