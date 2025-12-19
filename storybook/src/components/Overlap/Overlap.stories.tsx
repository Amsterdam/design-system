/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Image, SearchField } from '@amsterdam/design-system-react'
import { Overlap } from '@amsterdam/design-system-react/src'

import spiegelgracht640 from './assets/spiegelgracht.640.jpg'
import spiegelgracht1280 from './assets/spiegelgracht.1280.jpg'
import spiegelgracht1440 from './assets/spiegelgracht.1440.jpg'

const meta = {
  title: 'Components/Layout/Overlap',
  component: Overlap,
} satisfies Meta<typeof Overlap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Image
        alt=""
        aspectRatio="16:5"
        key={1}
        sizes="(max-width: 37.5rem) 640px, (max-width: 72.5rem) 1280px, 1440px"
        src={spiegelgracht1440}
        srcSet={`${spiegelgracht640} 640w, ${spiegelgracht1280} 1280w, ${spiegelgracht1440} 1440w`}
      />,
      <Grid key={2} style={{ alignSelf: 'center' }}>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <SearchField onSubmit={(e) => e.preventDefault()}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>,
    ],
  },
}
