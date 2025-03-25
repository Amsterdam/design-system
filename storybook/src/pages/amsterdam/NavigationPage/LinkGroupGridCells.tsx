import { Column, Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import type { LinkGroup } from './links'

type LinkGroupGridCellsProps = {
  linkGroups: LinkGroup[]
}

export const LinkGroupGridCells = ({ linkGroups }: LinkGroupGridCellsProps) =>
  linkGroups.map(({ heading, links }, index) => (
    <Grid.Cell
      key={heading}
      span={{ narrow: 4, medium: 4, wide: 5 }}
      start={{ narrow: 1, medium: index % 2 === 0 ? 1 : 5, wide: index % 2 === 0 ? 2 : 7 }}
    >
      <Column gap="extra-small" key={heading}>
        <Heading className="ams-mb-sm" level={2} size="level-3">
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
    </Grid.Cell>
  ))
