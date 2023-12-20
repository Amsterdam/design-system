/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Image, SearchField, Stack } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Stack',
  component: Stack,
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Image
          cover
          sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
          src="https://picsum.photos/640/180"
          srcSet="https://picsum.photos/640/180 640w, https://picsum.photos/1280/360 1280w, https://picsum.photos/1600/450 1600w"
        />
        <Grid style={{ alignSelf: 'center' }}>
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <SearchField onSubmit={(e) => e.preventDefault()}>
              <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
              <SearchField.Button />
            </SearchField>
          </Grid.Cell>
        </Grid>
      </>
    ),
  },
}
