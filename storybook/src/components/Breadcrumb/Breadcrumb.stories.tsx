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
      <Breadcrumb.Link href="#" key={1}>
        Home
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={2}>
        Afval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={3}>
        Bedrijfsafval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={4}>
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>,
    ],
  },
}
