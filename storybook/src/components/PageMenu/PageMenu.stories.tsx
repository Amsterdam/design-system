/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Page Menu',
  component: PageMenu,
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <PageMenu.Link href="#" key={1}>
        English
      </PageMenu.Link>,
      <PageMenu.Link href="#" icon={LoginIcon} key={2}>
        Inloggen Mijn Amsterdam
      </PageMenu.Link>,
    ],
  },
}

export const AlignEnd: Story = {
  args: {
    alignEnd: true,
    children: [
      <PageMenu.Link href="#" key={1}>
        Onderzoeken
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={2}>
        Bezoeken
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={3}>
        Archiveren
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={4}>
        Nieuws
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={5}>
        Themasites
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={6}>
        Onderwijs
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={7}>
        Steun ons
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={8}>
        Organisatie
      </PageMenu.Link>,
      <PageMenu.Link href="#" key={9}>
        Contact
      </PageMenu.Link>,
    ],
  },
}
