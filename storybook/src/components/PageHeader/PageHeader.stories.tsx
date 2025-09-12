/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import { PageHeader } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Containers/Page Header',
  component: PageHeader,
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

const defaultStoryLinks = [
  [
    { href: '#', label: 'Kaart' },
    { href: '#', label: 'Panoramabeelden' },
    { href: '#', label: 'Tabellen' },
    { href: '#', label: 'Catalogus (Beta)' },
    { href: '#', label: 'Kaarten' },
    { href: '#', label: 'Datacatalogus' },
  ],
  [
    { href: '#', label: 'Over de organisatie' },
    { href: '#', label: 'Over het dataplatform' },
  ],
  [
    { href: '#', label: 'Help' },
    { href: '#', label: 'Contact' },
  ],
]

export const Default: Story = {
  args: {
    brandName: 'Data Amsterdam',
    children: (
      <Grid paddingVertical="large">
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </PageHeader.GridCellNarrowWindowOnly>
        <Grid.Cell span={4}>
          <Heading className="ams-mb-s" level={2} size="level-3">
            Onderdelen
          </Heading>
          <LinkList>
            {defaultStoryLinks[0].map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading className="ams-mb-s" level={2} size="level-3">
            Over ons
          </Heading>
          <LinkList>
            {defaultStoryLinks[1].map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading className="ams-mb-s" level={2} size="level-3">
            Help
          </Heading>
          <LinkList>
            {defaultStoryLinks[2].map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
}

export const WithMovingLinks: Story = {
  args: {
    children: (
      <Grid gapVertical="large" paddingVertical="large">
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </PageHeader.GridCellNarrowWindowOnly>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#">Regular collapsible menu link</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
}

const WithoutMenuButtonOnWideWindowStoryLinks = [
  { href: '#', label: 'Stad' },
  { href: '#', label: 'Techniek' },
  { href: '#', label: 'Historie' },
  { href: '#', label: 'Duurzaamheid' },
]

export const WithoutMenuButtonOnWideWindow: Story = {
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: (
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <LinkList>
            {WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      ...WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
        <PageHeader.MenuLink href={href} key={label}>
          {label}
        </PageHeader.MenuLink>
      )),
      <PageHeader.MenuLink fixed href="#" key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>,
    ],
    noMenuButtonOnWideWindow: true,
  },
}

export const WithoutMenuButton: Story = {
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: (
      <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
    ),
  },
}

export const WithCustomLogoLink: Story = {
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam',
  },
}

export const WithCustomTexts: Story = {
  args: {
    children: (
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuButtonText: 'Alle onderwerpen',
    navigationLabel: 'Navigatie',
  },
}
