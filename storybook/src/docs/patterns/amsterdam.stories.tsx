/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { AmsterdamPage } from './AmsterdamPage'

const meta = {
  title: 'Docs/Patterns/Amsterdam/Article',
  component: AmsterdamPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Screen>

export default meta

export const Default: StoryObj = {
  render: () => <AmsterdamPage />,
}

// export const Article: StoryObj = {
//   args: {
//     children: (
//       <Grid>
//         <Grid.Cell span={12}>
//           <h1>Article title</h1>
//           <p>Article content</p>
//         </Grid.Cell>
//       </Grid>
//     ),
//   },
// }
