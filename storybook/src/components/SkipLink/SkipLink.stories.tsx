/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Paragraph, Screen, SkipLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Skip Link',
  component: SkipLink,
  args: {
    children: 'Direct naar inhoud',
    href: '#',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Screen>
        <Grid>
          <Grid.Cell span="all">
            <Story />
          </Grid.Cell>
        </Grid>
      </Screen>
    ),
  ],
} satisfies Meta<typeof SkipLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // This resets the default behaviour of only showing the link
    // on focus, in order to always show the link in Storybook
    style: {
      clip: 'initial',
      clipPath: 'initial',
      height: 'initial',
      overflow: 'initial',
      position: 'initial',
      whiteSpace: 'initial',
      width: 'initial',
    },
  },
}

export const OnFocus: Story = {
  decorators: [
    (Story) => (
      <>
        <Paragraph size="small" style={{ marginBottom: '2rem' }}>
          Klik op deze tekst en druk vervolgens op tab om de Skip Link te tonen.
        </Paragraph>
        <Story />
      </>
    ),
  ],
}

export const MultipleLinks: Story = {
  render: () => (
    <>
      <Paragraph size="small" style={{ marginBottom: '2rem' }}>
        Klik op deze tekst en druk vervolgens twee keer op tab om de Skip Links te tonen.
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
  ),
}
