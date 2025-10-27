/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Image, SearchField } from '@amsterdam/design-system-react'
import { Overlap } from '@amsterdam/design-system-react/src'

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
        src="https://picsum.photos/1440/450"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w"
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
