/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import {
  ActionGroup,
  Breadcrumb,
  Button,
  Grid,
  Heading,
  LinkList,
  Paragraph,
  Row,
  TableOfContents,
  TabNavigation,
} from '@amsterdam/design-system-react'
import {
  EyeOpenIcon,
  LinkExternalIcon,
  MagnifyingGlassWithEyeIcon,
  PencilIcon,
} from '@amsterdam/design-system-react-icons'
import { useState } from 'react'

import { commonMeta, pageParameters } from '../common/commonMeta'
import detailPageData from './detailPageData.json'
import { DetailPageEditGeneralInformationTab } from './DetailPageEditGeneralInformationTab'
import { DetailPageEditHistoryTab } from './DetailPageEditHistoryTab'
import { DetailPageEditMapTab } from './DetailPageEditMapTab'
import { ObjectInformationDescriptionList } from './ObjectInformationDescriptionList'
import { ObjectInformationMap } from './ObjectInformationMap'
import { ObjectInformationTable } from './ObjectInformationTable'

type EditTabId = 'algemene-informatie' | 'historie' | 'kaart'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  parameters: pageParameters(
    'Suits websites whose content is organised into a handful of main sections ' +
      'that each have their own subsections.',
  ),
} satisfies Meta

export default meta

export const ReadOnly: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because the `render` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: `
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance="transparent" span="all">
            <Breadcrumb>
              {detailPageData.breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Link href="#" key={breadcrumb}>
                  {breadcrumb}
                </Breadcrumb.Link>
              ))}
            </Breadcrumb>
            <Row align="between" wrap>
              <Heading level={1}>{detailPageData.name}</Heading>
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
                  <TableOfContents.Link href="#algemene-informatie" label="Algemene informatie" />
                  <TableOfContents.Link href="#geschiedenis" label="Geschiedenis" />
                  <TableOfContents.Link href="#kaart" label="Kaart" />
                </TableOfContents.List>
              </TableOfContents>
            </Grid.Cell>
            <Grid.Cell span="all">
              <Heading className="ams-mb-xs" level={3}>
                Bronnen
              </Heading>
              <LinkList>
                {detailPageData.links.map(({ label, url }) => (
                  <LinkList.Link href={url} icon={LinkExternalIcon} key={url}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          </Grid.Subgrid>

          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Heading id="algemene-informatie" level={2}>
                Algemene informatie
              </Heading>
              <Paragraph>{detailPageData.description}</Paragraph>
              <ObjectInformationDescriptionList items={detailPageData.basicInformation} />
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Heading id="geschiedenis" level={2}>
                Geschiedenis
              </Heading>
              <ObjectInformationTable events={detailPageData.history} />
            </Grid.Cell>
            <Grid.Cell span="all">
              <Heading className="ams-mb-s" id="kaart" level={2}>
                Kaart
              </Heading>
              <ObjectInformationMap geoJson={detailPageData.geoJson} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
        `,
        language: 'tsx',
      },
    },
  },
  render: () => {
    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Breadcrumb>
            {detailPageData.breadcrumbs.map((breadcrumb) => (
              <Breadcrumb.Link href="#" key={breadcrumb}>
                {breadcrumb}
              </Breadcrumb.Link>
            ))}
          </Breadcrumb>
          <Row align="between" wrap>
            <Heading level={1}>{detailPageData.name}</Heading>
            <ActionGroup>
              <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                Review
              </Button>
              <Button icon={PencilIcon}>Bewerken</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 3 }}>
          <Grid.Cell span="all">
            <TableOfContents heading="Op deze pagina">
              <TableOfContents.List>
                <TableOfContents.Link href="#algemene-informatie" label="Algemene informatie" />
                <TableOfContents.Link href="#geschiedenis" label="Geschiedenis" />
                <TableOfContents.Link href="#kaart" label="Kaart" />
              </TableOfContents.List>
            </TableOfContents>
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-xs" level={3}>
              Bronnen
            </Heading>
            <LinkList>
              {detailPageData.links.map(({ label, url }) => (
                <LinkList.Link href={url} icon={LinkExternalIcon} key={url}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
        </Grid.Subgrid>

        <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }}>
          <Grid.Cell className="ams-prose" span="all">
            <Heading id="algemene-informatie" level={2}>
              Algemene informatie
            </Heading>
            <Paragraph>{detailPageData.description}</Paragraph>
            <ObjectInformationDescriptionList items={detailPageData.basicInformation} />
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span="all">
            <Heading id="geschiedenis" level={2}>
              Geschiedenis
            </Heading>
            <ObjectInformationTable events={detailPageData.history} />
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-s" id="kaart" level={2}>
              Kaart
            </Heading>
            <ObjectInformationMap geoJson={detailPageData.geoJson} />
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    )
  },
}

export const Edit: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because the `render` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: `<Grid paddingVertical="x-large">
  <Grid.Cell appearance="transparent" span="all">
    <Breadcrumb>
      {detailPageData.breadcrumbs.map((breadcrumb) => (
        <Breadcrumb.Link href="#" key={breadcrumb}>
          {breadcrumb}
        </Breadcrumb.Link>
      ))}
    </Breadcrumb>
    <Row align="between" wrap>
      <Heading level={1}>{detailPageData.name}</Heading>
      <ActionGroup>
        <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
          Exporteren
        </Button>
        <Button icon={EyeOpenIcon}>Toon Object</Button>
      </ActionGroup>
    </Row>
  </Grid.Cell>
  <Grid.Cell appearance="flush" span="all">
    <TabNavigation accessibleName="Subnavigatie voor dit project">
      <TabNavigation.List>
        <TabNavigation.Link
          aria-current={currentTabId === 'algemene-informatie' ? 'page' : undefined}
          href="#algemene-informatie"
          onClick={(event) => handleTabClick(event, 'algemene-informatie')}
        >
          Algemene informatie
        </TabNavigation.Link>
        <TabNavigation.Link
          aria-current={currentTabId === 'historie' ? 'page' : undefined}
          href="#historie"
          onClick={(event) => handleTabClick(event, 'historie')}
        >
          Historie
        </TabNavigation.Link>
        <TabNavigation.Link
          aria-current={currentTabId === 'kaart' ? 'page' : undefined}
          href="#kaart"
          onClick={(event) => handleTabClick(event, 'kaart')}
        >
          Kaart
        </TabNavigation.Link>
      </TabNavigation.List>
    </TabNavigation>
  </Grid.Cell>
  <Grid.Subgrid span="all">
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
      <DetailPageEditGeneralInformationTab hidden={currentTabId !== 'algemene-informatie'} />
      <DetailPageEditHistoryTab hidden={currentTabId !== 'historie'} />
      <DetailPageEditMapTab hidden={currentTabId !== 'kaart'} />
    </Grid.Cell>
  </Grid.Subgrid>
</Grid>`,
        language: 'tsx',
      },
    },
  },
  render: () => {
    const [currentTabId, setCurrentTabId] = useState<EditTabId>('algemene-informatie')

    const handleTabClick = (event: MouseEvent<HTMLAnchorElement>, tabId: EditTabId) => {
      event.preventDefault()
      setCurrentTabId(tabId)
    }

    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Breadcrumb>
            {detailPageData.breadcrumbs.map((breadcrumb) => (
              <Breadcrumb.Link href="#" key={breadcrumb}>
                {breadcrumb}
              </Breadcrumb.Link>
            ))}
          </Breadcrumb>
          <Row align="between" wrap>
            <Heading level={1}>{detailPageData.name}</Heading>
            <ActionGroup>
              <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                Exporteren
              </Button>
              <Button icon={EyeOpenIcon}>Toon Object</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Cell appearance="flush" span="all">
          <TabNavigation accessibleName="Subnavigatie voor dit project">
            <TabNavigation.List>
              <TabNavigation.Link
                aria-current={currentTabId === 'algemene-informatie' ? 'page' : undefined}
                href="#algemene-informatie"
                onClick={(event) => handleTabClick(event, 'algemene-informatie')}
              >
                Algemene informatie
              </TabNavigation.Link>
              <TabNavigation.Link
                aria-current={currentTabId === 'historie' ? 'page' : undefined}
                href="#historie"
                onClick={(event) => handleTabClick(event, 'historie')}
              >
                Historie
              </TabNavigation.Link>
              <TabNavigation.Link
                aria-current={currentTabId === 'kaart' ? 'page' : undefined}
                href="#kaart"
                onClick={(event) => handleTabClick(event, 'kaart')}
              >
                Kaart
              </TabNavigation.Link>
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>

        <Grid.Subgrid span="all">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
            <DetailPageEditGeneralInformationTab hidden={currentTabId !== 'algemene-informatie'} />
            <DetailPageEditHistoryTab hidden={currentTabId !== 'historie'} />
            <DetailPageEditMapTab hidden={currentTabId !== 'kaart'} />
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    )
  },
}
