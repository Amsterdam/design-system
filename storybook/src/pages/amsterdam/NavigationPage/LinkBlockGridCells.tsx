/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HeadingProps } from '@amsterdam/design-system-react'

import { Grid } from '@amsterdam/design-system-react'

import type { LinkGroup } from './links'

import { LinkBlock } from './LinkBlock'

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
