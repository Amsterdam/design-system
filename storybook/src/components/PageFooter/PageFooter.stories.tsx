/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ReactNode } from 'react'

import { Grid, Heading, LinkList, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MastodonIcon,
  PhoneIcon,
} from '@amsterdam/design-system-react-icons'
import { PageFooter } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter,
} satisfies Meta<typeof PageFooter>

export default meta

type Story = StoryObj<typeof meta>

type FollowLink = {
  icon?: ReactNode
  text: string
}

const followLinks: FollowLink[] = [
  { text: 'De Amsterdam App' },
  { text: 'Nieuwsbrieven' },
  { icon: <FacebookIcon />, text: 'Facebook' },
  { icon: <InstagramIcon />, text: 'Instagram' },
  { icon: <LinkedinIcon />, text: 'LinkedIn' },
  { icon: <MastodonIcon />, text: 'Mastodon' },
]

export const Default: Story = {
  args: {
    children: [
      <PageFooter.Spotlight key={1}>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Contact
            </Heading>
            <LinkList className="ams-mb-xl">
              <LinkList.Link color="inverse" href="#" icon={<MailIcon />}>
                Contactformulier
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" icon={<PhoneIcon />}>
                14 020
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" icon={<ClockIcon />}>
                Adressen en openingstijden
              </LinkList.Link>
            </LinkList>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Vacatures
            </Heading>
            <StandaloneLink color="inverse" href="#">
              Werken bij Amsterdam
            </StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={4} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Volg ons
            </Heading>
            <LinkList>
              {followLinks.map(({ icon, text }) => (
                <LinkList.Link color="inverse" href="#" icon={icon} key={text}>
                  {text}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Doen in de stad
            </Heading>
            <LinkList>
              <LinkList.Link color="inverse" href="#">
                Bijeenkomsten en activiteiten
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#">
                Uit in Amsterdam
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#">
                Amsterdam 750 jaar
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageFooter.Spotlight>,
      <Heading className="ams-visually-hidden" key={2} level={2}>
        Over deze website
      </Heading>,
      <PageFooter.Menu key={3}>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Webarchief</PageFooter.MenuLink>
      </PageFooter.Menu>,
    ],
  },
}

export const OnderzoekEnStatistiek: Story = {
  args: {
    children: [
      <PageFooter.Spotlight key={1}>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={3}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse">
              Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="mailto:redactie.os@amsterdam.nl" icon={<MailIcon />}>
                E-mail
              </LinkList.Link>
              <LinkList.Link color="inverse" href="tel:+31202510333" icon={<PhoneIcon />}>
                020 251 0333
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Panels en enquêtes
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse">
              Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="#" rel="external">
                Meedoen aan onderzoek
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external">
                Panel Amsterdam
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external">
                Stadspaspanel Amsterdam
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Onderzoek en Statistiek
            </Heading>
            <LinkList>
              <LinkList.Link color="inverse" href="#">
                Over Onderzoek en Statistiek
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#">
                Veelgestelde vragen
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#">
                Termen en categorieën
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external">
                Nieuwsbrief
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#">
                Vacatures
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageFooter.Spotlight>,
      <Heading className="ams-visually-hidden" key={2} level={2}>
        Over deze website
      </Heading>,
      <PageFooter.Menu key={3}>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
      </PageFooter.Menu>,
    ],
  },
}
