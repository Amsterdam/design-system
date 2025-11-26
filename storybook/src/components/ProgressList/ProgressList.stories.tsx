/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList, UnorderedList } from '@amsterdam/design-system-react/src'

import { exampleParagraph, exampleUnorderedList } from '../shared/exampleContent'

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList,
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0}>
        <UnorderedList>
          {exampleUnorderedList().map((text) => (
            <UnorderedList.Item key={text}>{text}</UnorderedList.Item>
          ))}
        </UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1}>
        <Paragraph>{exampleParagraph()}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{exampleParagraph()}</Paragraph>
        <UnorderedList>
          {exampleUnorderedList().map((text) => (
            <UnorderedList.Item key={text}>{text}</UnorderedList.Item>
          ))}
        </UnorderedList>
      </ProgressList.Step>,
    ],
    headingLevel: 3,
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
