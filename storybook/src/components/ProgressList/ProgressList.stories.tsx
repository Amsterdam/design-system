/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

import { exampleParagraph, exampleUnorderedList } from '../shared/exampleContent'

const paragraphs = Array.from({ length: 6 }, () => exampleParagraph())

const unorderedList = exampleUnorderedList()
  .slice(0, 2)
  .map((text) => <UnorderedList.Item key={text}>{text}</UnorderedList.Item>)

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList,
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1} status="current">
        <Paragraph className="ams-mb-m">{paragraphs[1]}</Paragraph>
        <UnorderedList>{unorderedList}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step heading="2027" key={2}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>,
    ],
    headingLevel: 3,
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSubsteps: Story = {
  args: {
    children: [
      <ProgressList.Step hasSubsteps heading="2026" key={1} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step hasSubsteps heading="2027" key={2} status="current">
        <Paragraph>{paragraphs[1]}</Paragraph>
        <ProgressList.Substeps>
          <ProgressList.Substep status="completed">
            <Paragraph>februari: De Clercqstraat en Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="completed">
            <Paragraph>april: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="current">
            <Paragraph>juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>augustus: Kruispunt Marnixstraat-Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>oktober: Nieuwezijds Voorburgwal</Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>,
      <ProgressList.Step heading="2028" key={3}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>,
    ],
  },
}
