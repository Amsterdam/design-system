/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Badge,
  Button,
  Checkbox,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Icon,
  IconButton,
  Link,
  Paragraph,
  Row,
  StandaloneLink,
  Table,
  TableOfContents,
} from '@amsterdam/design-system-react'
import {
  BuildingsFillIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CogwheelFillIcon,
  DocumentCheckMarkFillIcon,
  DocumentIcon,
  DownloadIcon,
  GridFillIcon,
  HouseFillIcon,
  LayersFillIcon,
  LinkExternalIcon,
  MagnifyingGlassWithEyeFillIcon,
  PencilIcon,
  SearchIcon,
  SettingsFillIcon,
  VideoIcon,
} from '@amsterdam/design-system-react-icons'

import type { MenuItem } from '../common/MenuWithItems'

import { commonMeta } from '../common/commonMeta'

const documents = [
  { addedOn: '28-5-2026', icon: DocumentIcon, name: 'brugdek-bovenaanzicht.jpg', size: '317,79 kB' },
  { addedOn: '28-5-2026', icon: DocumentIcon, name: 'landhoofd-west.jpg', size: '581,70 kB' },
  { addedOn: '30-5-2026', icon: DocumentIcon, name: 'inspectierapport-2025.pdf', size: '288,57 kB' },
  { addedOn: '30-5-2026', icon: VideoIcon, name: 'overzicht-noordzijde.mp4', size: '96 kB' },
  { addedOn: '31-5-2026', icon: VideoIcon, name: 'vooropname-brugdek.mp4', size: '789,78 kB' },
  { addedOn: '31-5-2026', icon: DocumentIcon, name: 'detail-scharnierpunt.jpg', size: '462,18 kB' },
  { addedOn: '1-6-2026', icon: DocumentIcon, name: 'conditiemeting.pdf', size: '396,61 kB' },
  { addedOn: '1-6-2026', icon: DocumentIcon, name: 'leuning-oostzijde.jpg', size: '449,78 kB' },
]

const menuItems: MenuItem[] = [
  { href: '#', icon: <HouseFillIcon />, text: 'Dashboard' },
  { href: '#', icon: <GridFillIcon />, text: 'Objecten' },
  { href: '#', icon: <SearchIcon />, text: 'Inspecties' },
  { href: '#', icon: <MagnifyingGlassWithEyeFillIcon />, text: 'Nader onderzoek' },
  { href: '#', icon: <DocumentCheckMarkFillIcon />, text: 'Contracten' },
  { href: '#', icon: <LayersFillIcon />, text: 'Batches' },
  { href: '#', icon: <BuildingsFillIcon />, text: 'Bedrijven' },
  { href: '#', icon: <SettingsFillIcon />, text: 'Instellingen' },
  { href: '#', icon: <CogwheelFillIcon />, text: 'Beheerder' },
]

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Data Page',
  parameters: {
    ...commonMeta.parameters,
    menuItems,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Row align="between" alignVertical="center" wrap>
          <Heading level={1}>Brug 231</Heading>
          <Row wrap>
            <Button icon={LinkExternalIcon} variant="secondary">
              Open DMS
            </Button>
            <Button icon={PencilIcon}>Bewerk</Button>
          </Row>
        </Row>
      </Grid.Cell>
      {/*
       * The sidebar comes first in source, so it precedes the sections in the reading and the tab order.
       * Its two Cells need a Subgrid of their own: a Cell inside a Cell has no columns to align to, and
       * placing them straight in the Grid would drop the second one below the sections beside them.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Grid.Cell span="all">
          <DescriptionList className="ams-mb-l">
            <DescriptionList.Term>Projectnummer</DescriptionList.Term>
            <DescriptionList.Description>1001260601</DescriptionList.Description>
            <DescriptionList.Term>Object</DescriptionList.Term>
            <DescriptionList.Description>
              <Link href="#">Brug 231</Link>
            </DescriptionList.Description>
            <DescriptionList.Term>Inspectiemodel</DescriptionList.Term>
            <DescriptionList.Description>Instandhouding</DescriptionList.Description>
            <DescriptionList.Term>Bouwjaar</DescriptionList.Term>
            <DescriptionList.Description>1999</DescriptionList.Description>
            <DescriptionList.Term>Locatie</DescriptionList.Term>
            <DescriptionList.Description>Amsterdam</DescriptionList.Description>
            <DescriptionList.Term>Uitvoerder</DescriptionList.Term>
            <DescriptionList.Description>Uitvoerend bedrijf A</DescriptionList.Description>
            <DescriptionList.Term>Inspecteur</DescriptionList.Term>
            <DescriptionList.Description>InspectieBedrijf A</DescriptionList.Description>
            <DescriptionList.Term>Batch</DescriptionList.Term>
            <DescriptionList.Description>Gemaakt zonder batch</DescriptionList.Description>
            <DescriptionList.Term>Datum</DescriptionList.Term>
            <DescriptionList.Description>1-6-2026</DescriptionList.Description>
            <DescriptionList.Term>Status</DescriptionList.Term>
            <DescriptionList.Description>
              <Badge color="orange" label="Bezig" />
            </DescriptionList.Description>
          </DescriptionList>
          <Button className="ams-mb-l" icon={DocumentIcon} variant="secondary">
            Toon paspoort
          </Button>
        </Grid.Cell>
        <Grid.Cell span="all">
          <TableOfContents heading="Op deze pagina">
            <TableOfContents.List>
              <TableOfContents.Link href="#risicoscan" label="Amsterdamse risicoscan bruggen" />
              <TableOfContents.Link href="#rode-sheet" label="Amsterdamse risicoscan bruggen | Rode-sheet" />
              <TableOfContents.Link href="#arb-conditierapport" label="ARB Conditierapport" />
              <TableOfContents.Link href="#fmeca-conditierapport" label="FMECA Conditierapport" />
              <TableOfContents.Link href="#maatregelen" label="Maatregelen" />
              <TableOfContents.Link href="#documenten" label="Documenten" />
              <TableOfContents.Link href="#nader-onderzoek" label="Nader onderzoek" />
              <TableOfContents.Link href="#aanpassingen" label="Aanpassingen" />
            </TableOfContents.List>
          </TableOfContents>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. It also keeps the sections in one grid item
       * beside the sidebar, so neither the sidebar nor the sections need to span rows.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        <Grid.Cell id="risicoscan" span="all">
          <Heading className="ams-mb-m" level={2}>
            Amsterdamse risicoscan bruggen
          </Heading>
          <Column gap="small">
            <Row alignVertical="center" gap="small">
              <Badge color="azure" label="Onbepaald" />
              <Paragraph>Samengestelde initiële constructieve risicobeoordeling</Paragraph>
            </Row>
            <Row alignVertical="center" gap="small">
              <Badge color="azure" label="Onbepaald" />
              <Paragraph>Samengestelde definitieve constructieve risicobeoordeling</Paragraph>
            </Row>
          </Column>
        </Grid.Cell>
        <Grid.Cell id="rode-sheet" span="all">
          <Heading className="ams-mb-m" level={2}>
            Amsterdamse risicoscan bruggen | Rode-sheet
          </Heading>
          <Column gap="small">
            <Row alignVertical="center" gap="small">
              <Badge color="azure" label="0: Onbepaald" />
              <Paragraph>Risicoscore</Paragraph>
            </Row>
            <Paragraph>Definitieve constructieve risicobeoordeling</Paragraph>
          </Column>
        </Grid.Cell>
        <Grid.Cell id="arb-conditierapport" span="all">
          <Heading className="ams-mb-m" level={2}>
            Amsterdamse risicoscan bruggen Conditierapport
          </Heading>
          <Row align="end" className="ams-mb-m" wrap>
            <Button icon={ChevronDownIcon} variant="secondary">
              Decompositie uitklappen
            </Button>
            <Button icon={ChevronUpIcon} variant="secondary">
              Decompositie inklappen
            </Button>
          </Row>
          <Table>
            <Table.Caption className="ams-visually-hidden">
              Amsterdamse risicoscan bruggen Conditierapport
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Code</Table.HeaderCell>
                <Table.HeaderCell scope="col">Deel</Table.HeaderCell>
                <Table.HeaderCell scope="col">Materiaal</Table.HeaderCell>
                <Table.HeaderCell scope="col">Jaar</Table.HeaderCell>
                <Table.HeaderCell scope="col">Initieel</Table.HeaderCell>
                <Table.HeaderCell scope="col">Historie</Table.HeaderCell>
                <Table.HeaderCell scope="col">Inspectie</Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <span className="ams-visually-hidden">Details</span>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {['Bovenbouw', 'Onderbouw', 'Fundering'].map((part) => (
                <Table.Row key={part}>
                  <Table.Cell />
                  <Table.Cell>{part}</Table.Cell>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell>
                    <Checkbox>
                      <span className="ams-visually-hidden">Initieel voor {part}</span>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox>
                      <span className="ams-visually-hidden">Historie voor {part}</span>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox>
                      <span className="ams-visually-hidden">Inspectie voor {part}</span>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton label={`Toon onderdelen van ${part}`} svg={ChevronDownIcon} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Cell>
        <Grid.Cell id="fmeca-conditierapport" span="all">
          <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
            <Heading level={2}>FMECA Conditierapport</Heading>
            <StandaloneLink href="#" icon={DownloadIcon}>
              Excel export
            </StandaloneLink>
          </Row>
          <Row align="end" className="ams-mb-m" wrap>
            <Button icon={ChevronDownIcon} variant="secondary">
              Decompositie uitklappen
            </Button>
            <Button icon={ChevronUpIcon} variant="secondary">
              Decompositie inklappen
            </Button>
          </Row>
          <Table>
            <Table.Caption className="ams-visually-hidden">FMECA Conditierapport</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Code</Table.HeaderCell>
                <Table.HeaderCell scope="col">Deel</Table.HeaderCell>
                <Table.HeaderCell scope="col">Materiaal</Table.HeaderCell>
                <Table.HeaderCell scope="col">Jaar</Table.HeaderCell>
                <Table.HeaderCell scope="col">Bureaustudie</Table.HeaderCell>
                <Table.HeaderCell scope="col">Inspectie</Table.HeaderCell>
                <Table.HeaderCell scope="col">Onderhoud</Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <span className="ams-visually-hidden">Details</span>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>103</Table.Cell>
                <Table.Cell>Aandrijving en bewegingswerk; mechanisch</Table.Cell>
                <Table.Cell />
                <Table.Cell>1996</Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  <IconButton label="Toon onderdelen van Aandrijving en bewegingswerk" svg={ChevronDownIcon} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Cell>
        <Grid.Cell id="maatregelen" span="all">
          <Table>
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Maatregelen</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Locatie</Table.HeaderCell>
                <Table.HeaderCell scope="col">Maatregel</Table.HeaderCell>
                <Table.HeaderCell scope="col">Kosten incl. opslag</Table.HeaderCell>
                <Table.HeaderCell scope="col">Gepland</Table.HeaderCell>
                <Table.HeaderCell scope="col">Conditie / Risico</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={5}>Geen gegevens beschikbaar</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Cell>
        <Grid.Cell id="documenten" span="all">
          <Table>
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Documenten</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Beeld</Table.HeaderCell>
                <Table.HeaderCell scope="col">Bestandsnaam</Table.HeaderCell>
                <Table.HeaderCell scope="col">Datum toegevoegd</Table.HeaderCell>
                <Table.HeaderCell align="end" scope="col">
                  Grootte
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">Acties</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {documents.map(({ addedOn, icon, name, size }) => (
                <Table.Row key={name}>
                  <Table.Cell>
                    <Icon svg={icon} />
                  </Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{addedOn}</Table.Cell>
                  <Table.Cell align="end">{size}</Table.Cell>
                  <Table.Cell>
                    <IconButton label={`Download ${name}`} svg={DownloadIcon} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Grid.Cell>
        <Grid.Cell id="nader-onderzoek" span="all">
          <Table>
            <Table.Caption className="ams-mb-m">
              <Heading level={2}>Nader onderzoek</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">Locatie</Table.HeaderCell>
                <Table.HeaderCell scope="col">Beschrijving</Table.HeaderCell>
                <Table.HeaderCell scope="col">Prioriteit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={3}>Geen gegevens beschikbaar</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Cell>
        <Grid.Cell id="aanpassingen" span="all">
          <Heading className="ams-mb-m" level={2}>
            Aanpassingen
          </Heading>
          <Paragraph>Er zijn momenteel geen versiewijzigingen ingevoerd.</Paragraph>
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments and expands the maps. Provide the source by hand so the guidance below stays visible
        // in the panel. Repetitive sections are shortened with `{/* … */}` markers.
        code: `<Grid paddingVertical="x-large">
  {/* appearance="transparent" lets the page title and its actions sit directly on the page. */}
  <Grid.Cell appearance="transparent" span="all">
    <Row align="between" alignVertical="center" wrap>
      <Heading level={1}>Brug 231</Heading>
      <Row wrap>
        <Button icon={LinkExternalIcon} variant="secondary">Open DMS</Button>
        <Button icon={PencilIcon}>Bewerk</Button>
      </Row>
    </Row>
  </Grid.Cell>
  {/*
   * The sidebar comes first in source, so it precedes the sections in the reading and the tab order.
   * Its two Cells need a Subgrid of their own: a Cell inside a Cell has no columns to align to, and
   * placing them straight in the Grid would drop the second one below the sections beside them.
   */}
  <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 3 }}>
    <Grid.Cell span="all">
      {/* A Section only groups several terms that share one description, so these pairs do without. */}
      <DescriptionList className="ams-mb-l">
        <DescriptionList.Term>Projectnummer</DescriptionList.Term>
        <DescriptionList.Description>1001260601</DescriptionList.Description>
        {/* … more pairs … */}
      </DescriptionList>
      <Button className="ams-mb-l" icon={DocumentIcon} variant="secondary">Toon paspoort</Button>
    </Grid.Cell>
    <Grid.Cell span="all">
      <TableOfContents heading="Op deze pagina">
        <TableOfContents.List>
          <TableOfContents.Link href="#risicoscan" label="Amsterdamse risicoscan bruggen" />
          {/* … more links … */}
        </TableOfContents.List>
      </TableOfContents>
    </Grid.Cell>
  </Grid.Subgrid>
  {/*
   * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
   * columns of the page rather than on columns of their own. It also keeps the sections in one grid item
   * beside the sidebar, so neither the sidebar nor the sections need to span rows.
   */}
  <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
    <Grid.Cell id="risicoscan" span="all">
      <Heading className="ams-mb-m" level={2}>Amsterdamse risicoscan bruggen</Heading>
      <Column gap="small">
        <Row alignVertical="center" gap="small">
          <Badge color="azure" label="Onbepaald" />
          <Paragraph>Samengestelde initiële constructieve risicobeoordeling</Paragraph>
        </Row>
        {/* … */}
      </Column>
    </Grid.Cell>
    <Grid.Cell id="arb-conditierapport" span="all">
      <Heading className="ams-mb-m" level={2}>Amsterdamse risicoscan bruggen Conditierapport</Heading>
      <Row align="end" className="ams-mb-m" wrap>
        <Button icon={ChevronDownIcon} variant="secondary">Decompositie uitklappen</Button>
        <Button icon={ChevronUpIcon} variant="secondary">Decompositie inklappen</Button>
      </Row>
      <Table>
        {/* Repeat the heading non-visually in the Caption for accessibility. */}
        <Table.Caption className="ams-visually-hidden">Amsterdamse risicoscan bruggen Conditierapport</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Code</Table.HeaderCell>
            <Table.HeaderCell scope="col">Deel</Table.HeaderCell>
            {/* … more header cells … */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell />
            <Table.Cell>Bovenbouw</Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell>
              <Checkbox>
                <span className="ams-visually-hidden">Initieel voor Bovenbouw</span>
              </Checkbox>
            </Table.Cell>
            {/* … more cells … */}
            <Table.Cell>
              <IconButton label="Toon onderdelen van Bovenbouw" svg={ChevronDownIcon} />
            </Table.Cell>
          </Table.Row>
          {/* … more rows … */}
        </Table.Body>
      </Table>
    </Grid.Cell>
    <Grid.Cell id="documenten" span="all">
      <Table>
        {/* If nothing sits between the Heading and the Table, wrap the Heading in the Caption. */}
        <Table.Caption className="ams-mb-m">
          <Heading level={2}>Documenten</Heading>
        </Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col">Beeld</Table.HeaderCell>
            <Table.HeaderCell scope="col">Bestandsnaam</Table.HeaderCell>
            <Table.HeaderCell scope="col">Datum toegevoegd</Table.HeaderCell>
            <Table.HeaderCell align="end" scope="col">Grootte</Table.HeaderCell>
            <Table.HeaderCell scope="col">Acties</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Icon svg={DocumentIcon} />
            </Table.Cell>
            <Table.Cell>brugdek-bovenaanzicht.jpg</Table.Cell>
            <Table.Cell>28-5-2026</Table.Cell>
            <Table.Cell align="end">317,79 kB</Table.Cell>
            <Table.Cell>
              <IconButton label="Download brugdek-bovenaanzicht.jpg" svg={DownloadIcon} />
            </Table.Cell>
          </Table.Row>
          {/* … more rows … */}
        </Table.Body>
      </Table>
    </Grid.Cell>
    {/* … more sections: Rode-sheet, FMECA Conditierapport, Maatregelen, Nader onderzoek, Aanpassingen … */}
  </Grid.Subgrid>
</Grid>`,
        language: 'tsx',
      },
    },
  },
}
