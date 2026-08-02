/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'

import { Grid, Heading, LinkList, PageFooter, StandaloneLink } from '@amsterdam/design-system-react'
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MastodonIcon,
  PhoneIcon,
} from '@amsterdam/design-system-react-icons'

type FollowLink = {
  icon?: IconProps['svg']
  text: string
}

const followLinks: FollowLink[] = [
  { text: 'De Amsterdam App' },
  { text: 'Nieuwsbrieven' },
  { icon: <FacebookIcon />, text: 'Facebook' },
  { icon: <InstagramIcon />, text: 'Instagram' },
  { icon: <LinkedInIcon />, text: 'LinkedIn' },
  { icon: <MastodonIcon />, text: 'Mastodon' },
]

type PageFooterContentProps = {
  /** Makes the Grid Cells transparent, which Compact Mode needs to keep the Spotlight colour visible. */
  readonly cellAppearance?: 'transparent'
}

/**
 * The example content of the Page Footer.
 * Shared by the Page Footer story and the public page templates, so that both show the same footer.
 */
export const PageFooterContent = ({ cellAppearance }: PageFooterContentProps) => (
  <>
    <PageFooter.Spotlight>
      <Grid paddingVertical="x-large">
        {/* A Subgrid stacks Contact and Vacatures in one column, spaced by the row gap of the Grid. */}
        <Grid.Subgrid span={4}>
          {/* ams-prose sets the vertical rhythm between the heading and the links of each section. */}
          <Grid.Cell appearance={cellAppearance} className="ams-prose" span="all">
            <Heading color="inverse" level={2} size="level-3">
              Contact
            </Heading>
            <LinkList>
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
          </Grid.Cell>
          <Grid.Cell appearance={cellAppearance} className="ams-prose" span="all">
            <Heading color="inverse" level={2} size="level-3">
              Vacatures
            </Heading>
            <StandaloneLink color="inverse" href="#">
              Werken bij Amsterdam
            </StandaloneLink>
          </Grid.Cell>
        </Grid.Subgrid>
        <Grid.Cell appearance={cellAppearance} className="ams-prose" span={4}>
          <Heading color="inverse" level={2} size="level-3">
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
        <Grid.Cell appearance={cellAppearance} className="ams-prose" span={4}>
          <Heading color="inverse" level={2} size="level-3">
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
    </PageFooter.Spotlight>
    <PageFooter.Menu>
      <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
      <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
      <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
      <PageFooter.MenuLink href="#">Webarchief</PageFooter.MenuLink>
    </PageFooter.Menu>
  </>
)
