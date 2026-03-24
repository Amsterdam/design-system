/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from '@amsterdam/design-system-react/src'

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
        Afval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={2}>
        Bedrijfsafval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={3}>
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>,
    ],
  },
}
