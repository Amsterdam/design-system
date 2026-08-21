/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  ActionGroup,
  Breadcrumb,
  Button,
  Grid,
  Heading,
  LinkList,
  Row,
  TableOfContents,
} from '@amsterdam/design-system-react'
import {
  DownloadIcon,
  LinkExternalIcon,
  MagnifyingGlassWithEyeIcon,
  PencilIcon,
} from '@amsterdam/design-system-react-icons'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { ObjectInformationDescriptionList } from './ObjectInformationDescriptionList'
import { ObjectInformationMap } from './ObjectInformationMap'
import { ObjectInformationTable } from './ObjectInformationTable'

const objectInformationUrl = 'https://api.data.amsterdam.nl/v1/civieleconstructies/v1/brug/651389'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  parameters: pageParameters(
    'Suits websites whose content is organised into a handful of main sections ' +
      'that each have their own subsections.',
  ),
  render: () => {
    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
          </Breadcrumb>
          <Row align="between" wrap>
            <Heading level={1}>Naam van het project</Heading>
            <ActionGroup>
              <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                Exporteren
              </Button>
              <Button icon={PencilIcon}>Bewerken</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 3 }}>
          <Grid.Cell span="all">
            <TableOfContents heading="Op deze pagina">
              <TableOfContents.List>
                <TableOfContents.Link href="#section-1" label="Zo werkt het" />
                <TableOfContents.Link href="#section-2" label="Voorwaarden" />
                <TableOfContents.Link href="#section-3" label="Aanvragen" />
                <TableOfContents.Link href="#section-4" label="Zie ook" />
              </TableOfContents.List>
            </TableOfContents>
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-xs" level={3}>
              Downloads
            </Heading>
            <LinkList>
              <LinkList.Link href="#" icon={DownloadIcon}>
                Export PDF
              </LinkList.Link>
              <LinkList.Link href="#" icon={DownloadIcon}>
                Export Excel
              </LinkList.Link>
              <LinkList.Link href="#" icon={LinkExternalIcon}>
                External ref
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid.Subgrid>

        <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }}>
          <Grid.Cell className="ams-prose" span="all">
            <Heading level={2}>Object informatie</Heading>
            <ObjectInformationDescriptionList url={objectInformationUrl} />
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span="all">
            <ObjectInformationTable url={objectInformationUrl} />
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-s" level={2}>
              Kaart
            </Heading>
            <ObjectInformationMap url={objectInformationUrl} />
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    )
  },
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because the `render` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: `<TODO />`,
        language: 'tsx',
      },
    },
  },
}
