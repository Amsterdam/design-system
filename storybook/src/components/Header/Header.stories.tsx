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
  { label: 'Stad', href: '#' },
  { label: 'Techniek', href: '#' },
  { label: 'Historie', href: '#' },
  { label: 'Duurzaamheid', href: '#' },
  { label: 'Zoeken', href: '#' },
]

export const Default: Story = {
  args: {
    appName: 'Aan de Amsterdamse grachten',
    menu: (
      <>
        {defaultStoryLinks.map(({ label, href }) => (
          <Header.MenuLink key={label} href={href} secondary>
            {label}
          </Header.MenuLink>
        ))}
      </>
    ),
    children: (
      <Grid.Cell span="all">
        <Heading size="level-2" className="ams-mb--sm">
          Alle onderwerpen
        </Heading>
        <LinkList>
          {defaultStoryLinks.map(({ label, href }) => (
            <LinkList.Link key={label} href={href}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>
    ),
  },
}

const alwaysShowMenuButtonStoryLinks = [
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

export const AlwaysShowMenuButton: Story = {
  args: {
    appName: 'Data Amsterdam',
    menu: (
      <>
        <Header.MenuLink href="#" secondary>
          Inloggen
        </Header.MenuLink>
      </>
    ),
    showMenuButton: 'always',
    children: [
      <Grid.Cell key={0} span="all">
        <Header.SecondaryLinkList>
          <Header.SecondaryLinkListLink href="#">Inloggen</Header.SecondaryLinkListLink>
        </Header.SecondaryLinkList>
      </Grid.Cell>,
      <Grid.Cell key={1} span={4}>
        <Heading level={2} size="level-3" className="ams-mb--sm">
          Onderdelen
        </Heading>
        <LinkList>
          {alwaysShowMenuButtonStoryLinks[0].map(({ label, href }) => (
            <LinkList.Link key={label} href={href}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>,
      <Grid.Cell key={2} span={4}>
        <Heading level={2} size="level-3" className="ams-mb--sm">
          Over ons
        </Heading>
        <LinkList>
          {alwaysShowMenuButtonStoryLinks[1].map(({ label, href }) => (
            <LinkList.Link key={label} href={href}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>,
      <Grid.Cell key={3} span={4}>
        <Heading level={2} size="level-3" className="ams-mb--sm">
          Help
        </Heading>
        <LinkList>
          {alwaysShowMenuButtonStoryLinks[2].map(({ label, href }) => (
            <LinkList.Link key={label} href={href}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>,
    ],
  },
}

export const NeverShowMenuButton: Story = {
  args: {
    appName: 'Mijn Amsterdam',
    showMenuButton: 'never',
  },
}

export const WithCustomLogoLink: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
    showMenuButton: 'never',
  },
}

export const WithCustomTexts: Story = {
  args: {
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie',
    showMenuButton: 'always',
  },
}
