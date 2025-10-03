/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Grid } from '@amsterdam/design-system-react'
import { CloseIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Button } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    icon: undefined,
    iconBefore: false,
    iconOnly: undefined,
    variant: 'primary',
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
    iconBefore: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
    iconOnly: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Versturen'))
  },
}

export const Secondary: Story = {
  args: {
    children: 'Annuleren',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Terug',
    variant: 'tertiary',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
  },
}

export const WithIconBefore: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true,
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary',
  },
}

export const TextWrapping: Story = {
  args: {
    children: 'Vergunningsaanvraag verzenden',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '16rem' }}>
        <Story />
      </div>
    ),
  ],
}

export const TestCases: Story = {
  args: {
    onClick: fn(),
  },
  parameters: {
    pseudo: {
      hover: ['.hover'],
    },
  },
  play: async ({ args, canvas, userEvent }) => {
    expect(args.onClick).not.toHaveBeenCalled()

    for (let idx = 0; idx <= 7; idx++) {
      await userEvent.click(canvas.getByTestId(`test-button-${idx}`))
      expect(args.onClick).toHaveReturnedTimes(idx < 4 ? idx + 1 : 4)
    }
  },
  render: (args) => (
    <Grid>
      <Grid.Cell span={4}>
        <Column>
          <Button data-testid="test-button-0" onClick={args.onClick} variant="primary">
            Primary
          </Button>
          <Button data-testid="test-button-1" onClick={args.onClick} variant="secondary">
            Secondary
          </Button>
          <Button data-testid="test-button-2" onClick={args.onClick} variant="tertiary">
            Tertiary
          </Button>
          <Button data-testid="test-button-3" icon={<CloseIcon />} onClick={args.onClick} variant="primary">
            Close
          </Button>
        </Column>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Column>
          <Button data-testid="test-button-4" disabled onClick={args.onClick} variant="primary">
            Primary Disabled
          </Button>
          <Button data-testid="test-button-5" disabled onClick={args.onClick} variant="secondary">
            Secondary Disabled
          </Button>
          <Button data-testid="test-button-6" disabled onClick={args.onClick} variant="tertiary">
            Tertiary Disabled
          </Button>
          <Button data-testid="test-button-7" disabled icon={<CloseIcon />} onClick={args.onClick} variant="primary">
            Close Disabled
          </Button>
        </Column>
      </Grid.Cell>
      <Grid.Cell span={4}>
        <Column>
          <Button className="hover" variant="primary">
            Primary hover
          </Button>
          <Button className="hover" variant="secondary">
            Secondary hover
          </Button>
          <Button className="hover" variant="tertiary">
            Tertiary hover
          </Button>
          <Button className="hover" icon={<CloseIcon />} variant="primary">
            Close hover
          </Button>
        </Column>
      </Grid.Cell>
    </Grid>
  ),
  tags: ['!dev', '!autodocs'],
}
