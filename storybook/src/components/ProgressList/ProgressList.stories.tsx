/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressList, UnorderedList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Progress List',
  component: ProgressList,
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0}>
        <UnorderedList>
          <UnorderedList.Item>Start aanleg nieuwe openbare ruimte rondom HEROS (LEBO blok C).</UnorderedList.Item>
          <UnorderedList.Item>Oplevering lammetjesfontein.</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1}>
        <UnorderedList>
          <UnorderedList.Item>Start aanleg nieuwe openbare ruimte rondom HEROS (LEBO blok C).</UnorderedList.Item>
          <UnorderedList.Item>Oplevering lammetjesfontein.</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <UnorderedList>
          <UnorderedList.Item>Start aanleg nieuwe openbare ruimte rondom HEROS (LEBO blok C).</UnorderedList.Item>
          <UnorderedList.Item>Oplevering lammetjesfontein.</UnorderedList.Item>
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2028 - Afronding" key={3} />,
    ],
    headingLevel: 3,
  },
  argTypes: {
    headingLevel: {
      control: 'radio',
      options: [2, 3, 4], // Level 1 is deprecated, the argTypes object can be removed when Level 1 is removed
    },
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
