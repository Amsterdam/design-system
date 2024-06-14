/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Grid, Image, Overlap, SearchField } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Overlap',
  component: Overlap,
} satisfies Meta<typeof Overlap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <AspectRatio key="background-image" ratio="2x-wide">
        <Image
          alt=""
          cover
          sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
          srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
        />
      </AspectRatio>,
      <Grid key="search-field" style={{ alignSelf: 'center' }}>
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
