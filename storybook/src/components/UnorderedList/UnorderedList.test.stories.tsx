/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { UnorderedList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as unorderedListMeta } from './UnorderedList.stories'

const meta = {
  ...unorderedListMeta,
  title: 'Components/Text/Unordered List',
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <UnorderedList.Item key={1}>Ervaring is niet noodzakelijk.</UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        Er is veel werk in diverse functies, zoals monteur of timmerman. Er zijn ook banen op kantoor, zoals
        werkvoorbereider of engineer.
      </UnorderedList.Item>,
      <UnorderedList.Item key={3}>Deze banen bieden stabiliteit en zekerheid.</UnorderedList.Item>,
      <UnorderedList.Item key={4}>Er blijft altijd vraag naar werknemers in de bouw en techniek.</UnorderedList.Item>,
      <UnorderedList.Item key={5}>
        Er zijn veel mogelijkheden in de bouw, infrastructuur, haven en groenvoorziening.
      </UnorderedList.Item>,
    ],
  },
  render: (args) =>
    renderComponentVariants(UnorderedList, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
