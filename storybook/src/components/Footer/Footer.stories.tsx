/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList, Paragraph } from '@amsterdam/design-system-react'
import { Footer } from '@amsterdam/design-system-react/src'
import {
  CameraIcon,
  ClockIcon,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PhoneIcon,
  TwitterIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

const socialPlatforms = [
  { icon: TwitterIcon, name: 'Twitter' },
  { icon: FacebookIcon, name: 'Facebook' },
  { icon: LinkedinIcon, name: 'Linkedin' },
  { icon: CameraIcon, name: 'Instagram' },
]

export const Default: Story = {
  args: {
    children: [
      <Footer.Spotlight key="footer-spotlight">
        <Grid paddingVertical="medium">
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
              Meer weten
            </Heading>
            <LinkList>
              {['Veel gestelde vragen', 'Over ons', 'Werken bij', 'Kalender', 'Uit in Amsterdam', 'Bronnen'].map(
                (label, index) => (
                  <LinkList.Link color="inverse" href="#" key={index} size="small">
                    {label}
                  </LinkList.Link>
                ),
              )}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
              Contact
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse" size="small">
              Hebt u een vraag en kunt u het antwoord niet vinden op deze website? Neem dan contact met ons op.
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="mailto:redactie@amsterdam.nl" icon={EmailIcon} size="small">
                E-mail
              </LinkList.Link>
              <LinkList.Link color="inverse" href="tel:+3114020" icon={PhoneIcon} size="small">
                14 020
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" icon={ClockIcon} size="small">
                Contactgegevens en openingstijden
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <div className="ams-mb-xl">
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                Nieuwsbrief
              </Heading>
              <LinkList>
                <LinkList.Link color="inverse" href="#" size="small">
                  Inschrijven
                </LinkList.Link>
              </LinkList>
            </div>
            <div>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
                Volg ons
              </Heading>
              <LinkList>
                {socialPlatforms.map(({ icon, name }) => (
                  <LinkList.Link color="inverse" href="#" icon={icon} key={name} size="small">
                    {name}
                  </LinkList.Link>
                ))}
              </LinkList>
            </div>
          </Grid.Cell>
        </Grid>
      </Footer.Spotlight>,
      <Heading className="ams-visually-hidden" key="footer-heading" level={2}>
        Over deze website
      </Heading>,
      <Footer.Menu key="footer-menu">
        <Footer.MenuLink href="#">Over deze site</Footer.MenuLink>
        <Footer.MenuLink href="#">Privacy</Footer.MenuLink>
        <Footer.MenuLink href="#">Cookies</Footer.MenuLink>
      </Footer.Menu>,
    ],
  },
}

export const OnderzoekEnStatistiek: Story = {
  args: {
    children: [
      <Footer.Spotlight key="footer-spotlight">
        <Grid paddingVertical="medium">
          <Grid.Cell span={3}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
              Contact
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse" size="small">
              Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="mailto:redactie.os@amsterdam.nl" icon={EmailIcon} size="small">
                E-mail
              </LinkList.Link>
              <LinkList.Link color="inverse" href="tel:+31202510333" icon={PhoneIcon} size="small">
                020 251 0333
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
              Panels en enquêtes
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse" size="small">
              Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
            </Paragraph>
            <LinkList>
              <LinkList.Link color="inverse" href="#" rel="external" size="small">
                Meedoen aan onderzoek
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external" size="small">
                Panel Amsterdam
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external" size="small">
                Stadspaspanel Amsterdam
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-4">
              Onderzoek en Statistiek
            </Heading>
            <LinkList>
              <LinkList.Link color="inverse" href="#" size="small">
                Over Onderzoek en Statistiek
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" size="small">
                Veelgestelde vragen
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" rel="external" size="small">
                Nieuwsbrief
              </LinkList.Link>
              <LinkList.Link color="inverse" href="#" size="small">
                Vacatures
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </Footer.Spotlight>,
      <Heading className="ams-visually-hidden" key="footer-heading" level={2}>
        Over deze website
      </Heading>,
      <Footer.Menu key="footer-menu">
        <Footer.MenuLink href="#">Over deze site</Footer.MenuLink>
        <Footer.MenuLink href="#">Privacy</Footer.MenuLink>
        <Footer.MenuLink href="#">Cookies</Footer.MenuLink>
      </Footer.Menu>,
    ],
  },
}
