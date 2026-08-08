/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { UnorderedList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

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
      <UnorderedList.Item key={6}>
        Een lijst in een lijstitem is een niveau dieper.
        <UnorderedList>
          <UnorderedList.Item>Deze krijgt een half kastlijntje en minder inspringing.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
      <UnorderedList.Item key={7}>
        Een lijst achter een tussenliggend element hoort niet bij deze lijst.
        <div>
          <UnorderedList>
            <UnorderedList.Item>Deze krijgt de opmaak van een eerste niveau.</UnorderedList.Item>
          </UnorderedList>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={8}>
        Een geneste lijst zonder opsommingstekens houdt die weg.
        <UnorderedList markers={false}>
          <UnorderedList.Item>Deze krijgt geen teken en geen inspringing.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
    ],
  },
  render: (args, context) => renderComponentVariants(UnorderedList, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
