/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb } from '@amsterdam/design-system-react/src'

import { default as breadcrumbMeta } from './Breadcrumb.stories'

const meta = {
  ...breadcrumbMeta,
  title: 'Components/Navigation/Breadcrumb',
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Afval</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Bedrijfsafval</Breadcrumb.Link>
      <Breadcrumb.Link className="hover" href="#">
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>
    </Breadcrumb>
  ),
  tags: ['!dev', '!autodocs'],
}
