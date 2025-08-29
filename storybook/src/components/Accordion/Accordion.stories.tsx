/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Accordion } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { exampleAccordionHeading, exampleParagraph } from '../shared/exampleContent'

const heading1 = exampleAccordionHeading()
const heading2 = exampleAccordionHeading()
const heading3 = exampleAccordionHeading()
const paragraph1 = exampleParagraph()
const paragraph2 = exampleParagraph()
const paragraph3 = exampleParagraph()

const meta = {
  title: 'Components/Containers/Accordion',
  component: Accordion,
  args: {
    headingLevel: 3,
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>,
    ],
  },
}

export const Levels: Story = {
  render: (args) => (
    <>
      <Accordion {...args} headingLevel={2}>
        <Accordion.Section label="Heading level 2">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingLevel={3}>
        <Accordion.Section label="Heading level 3">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingLevel={4}>
        <Accordion.Section label="Heading level 4">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
    </>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <>
      <Accordion {...args} headingSize="level-2">
        <Accordion.Section label="Heading size 2">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-3">
        <Accordion.Section label="Heading size 3">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-4">
        <Accordion.Section label="Heading size 4">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
      <Accordion {...args} headingSize="level-5">
        <Accordion.Section label="Heading size 5">
          <Paragraph>{paragraph1}</Paragraph>
        </Accordion.Section>
      </Accordion>
    </>
  ),
}

export const ExpandedByDefault: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section expanded key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>,
    ],
  },
}

export const ReduceLandmarks: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label={heading1}>
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label={heading2}>
        <Paragraph>{paragraph2}</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label={heading3}>
        <Paragraph>{paragraph3}</Paragraph>
      </Accordion.Section>,
    ],
    sectionAs: 'div',
  },
}
