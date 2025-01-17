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
    { label: 'Kaart', href: '#' },
    { label: 'Panoramabeelden', href: '#' },
    { label: 'Tabellen', href: '#' },
    { label: 'Catalogus (Beta)', href: '#' },
    { label: 'Kaarten', href: '#' },
    { label: 'Datacatalogus', href: '#' },
  ],
  [
    { label: 'Over de organisatie', href: '#' },
    { label: 'Over het dataplatform', href: '#' },
  ],
  [
    { label: 'Help', href: '#' },
    { label: 'Contact', href: '#' },
  ],
]

export const Default: Story = {
  args: {
    brandName: 'Data Amsterdam',
    menuItems: [
      <Header.MenuLink key={1} href="#" lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink key={2} href="#" fixed>
        Zoeken
      </Header.MenuLink>,
    ],
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
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Onderdelen
          </Heading>
          <LinkList>
            {defaultStoryLinks[0].map(({ label, href }) => (
              <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Over ons
          </Heading>
          <LinkList>
            {defaultStoryLinks[1].map(({ label, href }) => (
              <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Help
          </Heading>
          <LinkList>
            {defaultStoryLinks[2].map(({ label, href }) => (
              <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const WithMovingLinks: Story = {
  args: {
    menuItems: [
      <Header.MenuLink key={1} href="#" lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink key={2} href="#" fixed>
        Zoeken
      </Header.MenuLink>,
    ],
    children: (
      <Grid paddingBottom="large" gapVertical="small">
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
  },
}

const WithoutMenuButtonOnWideWindowStoryLinks = [
  { label: 'Stad', href: '#' },
  { label: 'Techniek', href: '#' },
  { label: 'Historie', href: '#' },
  { label: 'Duurzaamheid', href: '#' },
]

export const WithoutMenuButtonOnWideWindow: Story = {
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    menuItems: [
      ...WithoutMenuButtonOnWideWindowStoryLinks.map(({ label, href }) => (
        <Header.MenuLink key={label} href={href}>
          {label}
        </Header.MenuLink>
      )),
      <Header.MenuLink key="Zoeken" href="#" fixed>
        Zoeken
      </Header.MenuLink>,
    ],
    noMenuButtonOnWideWindow: true,
    children: (
      <LinkList className="ams-mb--lg">
        {WithoutMenuButtonOnWideWindowStoryLinks.map(({ label, href }) => (
          <LinkList.Link key={label} href={href}>
            {label}
          </LinkList.Link>
        ))}
      </LinkList>
    ),
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
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie',
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
  },
}
