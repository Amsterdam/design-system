/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, LinkList, Paragraph } from '@amsterdam/design-system-react'
import { MailIcon, PhoneIcon } from '@amsterdam/design-system-react-icons'
import { PageFooter } from '@amsterdam/design-system-react/src'

import { wrapInPage } from '#storybook/_common/decorators'
import { useIsCompactTheme } from '#storybook/_common/useIsCompactTheme'

import { PageFooterContent } from './PageFooterContent'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter,
  decorators: [wrapInPage],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const compact = useIsCompactTheme()

    return (
      <PageFooter {...args}>
        <PageFooterContent cellAppearance={compact ? 'transparent' : undefined} />
      </PageFooter>
    )
  },
}

export const CustomContent: Story = {
  render: (args) => {
    const cellAppearance = useIsCompactTheme() ? 'transparent' : undefined

    return (
      <PageFooter {...args}>
        <PageFooter.Spotlight>
          <Grid paddingVertical="x-large">
            {/* ams-prose sets the vertical rhythm between the heading and the text and links below it. */}
            <Grid.Cell appearance={cellAppearance} className="ams-prose" span={4}>
              <Heading color="inverse" level={2} size="level-3">
                Contact
              </Heading>
              <Paragraph color="inverse">
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
            <Grid.Cell appearance={cellAppearance} className="ams-prose" span={4}>
              <Heading color="inverse" level={2} size="level-3">
                Panels en enquêtes
              </Heading>
              <Paragraph color="inverse">
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
            <Grid.Cell appearance={cellAppearance} className="ams-prose" span={4}>
              <Heading color="inverse" level={2} size="level-3">
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
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    )
  },
}

export const CustomMenuHeading: Story = {
  args: {
    children: (
      <PageFooter.Menu heading="Support links">
        <PageFooter.MenuLink href="#">About this website</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Web archive</PageFooter.MenuLink>
      </PageFooter.Menu>
    ),
  },
}
