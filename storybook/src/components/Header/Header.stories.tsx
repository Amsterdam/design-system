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
      <Header.SecondaryLinkList key={0}>
        <Header.SecondaryLinkListLink href="#">Inloggen</Header.SecondaryLinkListLink>
      </Header.SecondaryLinkList>,
      <Grid.Cell key={1} span={4}>
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
      </Grid.Cell>,
      <Grid.Cell key={2} span={4}>
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
      </Grid.Cell>,
      <Grid.Cell key={3} span={4}>
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
      </Grid.Cell>,
    ],
  },
}

const WithoutMenuButtonOnWideScreenStoryLinks = [
  { label: 'Stad', href: '#' },
  { label: 'Techniek', href: '#' },
  { label: 'Historie', href: '#' },
  { label: 'Duurzaamheid', href: '#' },
  { label: 'Zoeken', href: '#' },
]

export const WithoutMenuButtonOnWideScreen: Story = {
  args: {
    appName: 'Aan de Amsterdamse grachten',
    menu: (
      <>
        {WithoutMenuButtonOnWideScreenStoryLinks.map(({ label, href }) => (
          <Header.MenuLink key={label} href={href} secondary>
            {label}
          </Header.MenuLink>
        ))}
      </>
    ),
    children: (
      <Grid.Cell span="all">
        <LinkList>
          {WithoutMenuButtonOnWideScreenStoryLinks.map(({ label, href }) => (
            <LinkList.Link key={label} href={href}>
              {label}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>
    ),
  },
}

export const WithoutMenuButton: Story = {
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
