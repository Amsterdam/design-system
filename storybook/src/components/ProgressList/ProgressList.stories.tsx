/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

import { exampleParagraph, exampleUnorderedList } from '../shared/exampleContent'

const paragraph1 = exampleParagraph()
const paragraph2 = exampleParagraph()
const unorderedList1 = exampleUnorderedList()
  .slice(0, 3)
  .map((text) => <UnorderedList.Item key={text}>{text}</UnorderedList.Item>)
const unorderedList2 = exampleUnorderedList()
  .slice(0, 2)
  .map((text) => <UnorderedList.Item key={text}>{text}</UnorderedList.Item>)

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList,
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0}>
        <UnorderedList>{unorderedList1}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1}>
        <Paragraph className="ams-mb-m">{paragraph1}</Paragraph>
        <UnorderedList>{unorderedList2}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraph2}</Paragraph>
      </ProgressList.Step>,
    ],
    headingLevel: 3,
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
