/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Grid, IconProps } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { IconButton } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'

const meta = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  args: {
    disabled: false,
    label: 'Sluiten',
    size: undefined,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    size: {
      control: {
        labels: { undefined: 'default' },
        type: 'select',
      },
      options: [undefined, ...iconSizes],
    },
    svg: {
      control: {
        type: 'select',
      },
      mapping: Icons,
      options: Object.keys(Icons),
    },
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}

export const ContrastColour: Story = {
  args: {
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}

const sizes: IconProps['size'][] = [
  'small',
  'large',
  'heading-0',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
]

export const TestCase: Story = {
  args: {
    label: 'Sluiten',
    onClick: fn(),
  },
  parameters: {
    pseudo: {
      hover: '.hover',
    },
  },
  play: async ({ args, canvas, userEvent }) => {
    expect(args.onClick).not.toHaveBeenCalled()

    for (let idx = 0; idx <= 19; idx++) {
      await userEvent.click(canvas.getByTestId(`icon-button-${idx}`))
      expect(args.onClick).toHaveBeenCalledTimes(idx < 10 ? idx + 1 : 10)
    }
  },
  render: (args) => (
    <Grid>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map((size, idx) => (
            <IconButton {...args} data-testid={`icon-button-${idx}`} key={size} size={size} svg={Icons.CloseIcon} />
          ))}
          <IconButton {...args} data-testid="icon-button-9" svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map((size, idx) => (
            <IconButton
              {...args}
              data-testid={`icon-button-${idx + 10}`}
              disabled
              key={`${size}-disabled`}
              size={size}
              svg={Icons.CloseIcon}
            />
          ))}
          <IconButton {...args} data-testid="icon-button-19" disabled svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
      <Grid.Cell span={1}>
        <Column alignHorizontal="center">
          {sizes.map((size) => (
            <IconButton className="hover" {...args} key={`${size}-hover`} size={size} svg={Icons.CloseIcon} />
          ))}
          <IconButton className="hover" {...args} svg={Icons.CloseIcon} />
        </Column>
      </Grid.Cell>
    </Grid>
  ),
  tags: ['!dev', '!autodocs'],
}
