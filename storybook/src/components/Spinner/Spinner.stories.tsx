/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Spinner, spinnerSizes } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: spinnerSizes },
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LoadingResults: Story = {
  render: (args) => (
    <section aria-busy="true">
      <p className="ams-visually-hidden" role="status">
        Zoekresultaten worden geladen
      </p>
      <Spinner {...args} />
    </section>
  ),
}

export const InButton: Story = {
  parameters: {
    controls: { exclude: ['size'] },
  },
  render: () => (
    <Button>
      <Spinner size="small" /> Versturen
    </Button>
  ),
}
