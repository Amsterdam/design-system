/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Breadcrumb } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Breadcrumb.Link key={1} href="#">
        Home
      </Breadcrumb.Link>,
      <Breadcrumb.Link key={2} href="#">
        Afval
      </Breadcrumb.Link>,
      <Breadcrumb.Link key={3} href="#">
        Bedrijfsafval
      </Breadcrumb.Link>,
      <Breadcrumb.Link key={4} href="#">
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>,
    ],
  },
}
