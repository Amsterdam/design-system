/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote, Grid, Heading, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { Spotlight } from '@amsterdam/design-system-react/src'
import { spotlightColors } from '@amsterdam/design-system-react/src/Spotlight/Spotlight'

import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'purple (default)' },
      },
      options: [undefined, ...spotlightColors],
    },
  },
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ as, color }) => (
    <Spotlight as={as} color={color}>
      <Grid paddingVertical="x-large">
        <Grid.Cell span="all">
          <Blockquote color={!color || ['azure', 'green', 'magenta'].includes(color) ? 'inverse' : undefined}>
            {quote}
          </Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
}

export const HighlightContent: Story = {
  args: {
    color: 'green',
  },
  render: ({ color }) => {
    const lightBackgroundColors = ['lime', 'orange', 'yellow']
    const textColor = lightBackgroundColors.includes(color!) ? undefined : 'inverse'
    const linkColor = lightBackgroundColors.includes(color!) ? 'contrast' : 'inverse'

    return (
      <Spotlight color={color}>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
            <Heading className="ams-mb-s" color={textColor} level={2} size="level-3">
              Steun geven aan een partij
            </Heading>
            <Paragraph className="ams-mb-m" color={textColor}>
              Van 19 januari tot en met 2 februari kunt u uw steun geven aan een partij voor de gemeenteraad of een
              stadsdeel- of bestuurscommissie. Dit doet u met een ondersteuningsverklaring.
            </Paragraph>
            <StandaloneLink color={linkColor} href="#">
              Ondersteuningsverklaring inleveren
            </StandaloneLink>
          </Grid.Cell>
        </Grid>
      </Spotlight>
    )
  },
}
