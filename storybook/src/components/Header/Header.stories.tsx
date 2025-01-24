/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import { Header } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
} satisfies Meta<typeof Header>

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
      <Grid paddingBottom="large">
        <Header.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Header.GridCellNarrowWindowOnly>
        <Grid.Cell span={4}>
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
      <Header.MenuLink href="#" key={1} lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink fixed href="#" key={2}>
        Zoeken
      </Header.MenuLink>,
    ],
  },
}

export const WithMovingLinks: Story = {
  args: {
    children: (
      <Grid gapVertical="small" paddingBottom="large">
        <Header.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Header.GridCellNarrowWindowOnly>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#">Regular collapsible menu link</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      <Header.MenuLink href="#" key={1} lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink fixed href="#" key={2}>
        Zoeken
      </Header.MenuLink>,
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
      <LinkList className="ams-mb--lg">
        {WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
          <LinkList.Link href={href} key={label}>
            {label}
          </LinkList.Link>
        ))}
      </LinkList>
    ),
    menuItems: [
      ...WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
        <Header.MenuLink href={href} key={label}>
          {label}
        </Header.MenuLink>
      )),
      <Header.MenuLink fixed href="#" key="Zoeken">
        Zoeken
      </Header.MenuLink>,
    ],
    noMenuButtonOnWideWindow: true,
  },
}

export const WithoutMenuButton: Story = {
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: (
      <Header.MenuLink fixed href="#">
        Inloggen
      </Header.MenuLink>
    ),
  },
}

export const WithCustomLogoLink: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
  },
}

export const WithCustomTexts: Story = {
  args: {
    children: (
      <Grid>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie',
  },
}
