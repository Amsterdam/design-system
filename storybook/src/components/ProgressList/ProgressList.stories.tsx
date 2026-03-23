/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

import { exampleParagraph, exampleUnorderedList } from '../../_common/exampleContent'

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

/**
 * A completed step is collapsed by default so past information does not
 * dominate the page. Steps without a status, or with status `'current'`,
 * default to expanded.
 *
 * Use the `expanded` prop to override the initial state for any individual
 * step.
 */
export const ExpandedOverride: Story = {
  args: {
    children: [
      <ProgressList.Step expanded heading="2024" key={0} status="completed">
        <Paragraph>{paragraphs[3]}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step heading="2025" key={1} status="completed">
        <Paragraph>{paragraphs[4]}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={2} status="current">
        <Paragraph className="ams-mb-m">{paragraphs[1]}</Paragraph>
        <UnorderedList>{unorderedList}</UnorderedList>
      </ProgressList.Step>,
      <ProgressList.Step expanded={false} heading="2027" key={3}>
        <Paragraph>{paragraphs[5]}</Paragraph>
      </ProgressList.Step>,
    ],
  },
}

export const WithSubsteps: Story = {
  args: {
    children: [
      <ProgressList.Step heading="2026" key={1} status="completed">
        <Paragraph>{paragraphs[0]}</Paragraph>
      </ProgressList.Step>,
      <ProgressList.Step hasSubsteps heading="2027" key={2} status="current">
        <Paragraph>{paragraphs[1]}</Paragraph>
        <ProgressList.Substeps>
          <ProgressList.Substep status="completed">
            <Paragraph>Februari: De Clercqstraat en Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="completed">
            <Paragraph>April: Kruispunt Admiraal de Ruijterweg-Jan Evertsenstraat</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep status="current">
            <Paragraph>Juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Augustus: Kruispunt Marnixstraat-Rozengracht</Paragraph>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <Paragraph>Oktober: Nieuwezijds Voorburgwal</Paragraph>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>,
      <ProgressList.Step heading="2028" key={3}>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </ProgressList.Step>,
    ],
  },
}
