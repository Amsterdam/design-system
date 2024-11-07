/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Image, SearchField } from '@amsterdam/design-system-react'
import { Overlap } from '@amsterdam/design-system-react/src'
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
      <Image
        key={1}
        alt=""
        aspectRatio="2x-wide"
        sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
        src="https://picsum.photos/1600/500"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
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
