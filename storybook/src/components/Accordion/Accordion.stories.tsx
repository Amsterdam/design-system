/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AccordionProps, Paragraph } from '@amsterdam/design-system-react'
import { Accordion } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

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
  argTypes: {
    headingLevel: {
      control: 'radio',
      options: [2, 3, 4], // Level 1 is deprecated, the argTypes object can be removed when Level 1 is removed
    },
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

export const Level: Story = {
  args: {
    children: (
      <Accordion.Section label="Heading level 4">
        <Paragraph>{paragraph1}</Paragraph>
      </Accordion.Section>
    ),
    headingLevel: 4,
  },
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

const exampleAccordions = [
  {
    label: 'Dit grof afval halen we niet op',
    paragraph:
      'Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.',
  },
  {
    label: 'Verhuizing doorgeven bij stadsloket',
    paragraph:
      'U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad, wanneer u van daar met het openbaar vervoer (ov) naar het centrumgebied van Amsterdam reist. Anders betaalt u het duurdere standaard parkeertarief, dat per P+R-locatie verschilt.',
  },
]

const headingLevels = [2, 3, 4]
const variants = ['expanded', 'closed']

export const TestCases: Story = {
  play: async ({ canvas, userEvent }) => {
    for (const headingLevel of headingLevels) {
      for (const variant of variants) {
        for (const { label, paragraph } of exampleAccordions) {
          const accordionLabel = canvas.getByTestId(`${headingLevel}-${variant}-${label}`)
          const accordionParagraph = canvas.getByTestId(`${headingLevel}-${variant}-${paragraph}`)
          const accordionButton = accordionLabel.querySelector('.ams-accordion__button')

          if (!accordionButton) break

          if (variant === 'expanded') {
            await expect(accordionParagraph).toBeVisible()
            await userEvent.click(accordionButton)
            await expect(accordionParagraph).not.toBeVisible()
          } else {
            await expect(accordionParagraph).not.toBeVisible()
            await userEvent.click(accordionButton)
            await expect(accordionParagraph).toBeVisible()
          }
        }
      }
    }
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
        {headingLevels.map((headingLevel) =>
          variants.flatMap((variant) => (
            <Accordion headingLevel={headingLevel as AccordionProps['headingLevel']} key={`${headingLevel}-${variant}`}>
              {exampleAccordions.map(({ label, paragraph }) => (
                <Accordion.Section
                  data-testid={`${headingLevel}-${variant}-${label}`}
                  expanded={variant === 'expanded' ? true : undefined}
                  key={`${label}-${variant}-${headingLevel}`}
                  label={label}
                >
                  <Paragraph data-testid={`${headingLevel}-${variant}-${paragraph}`}>{paragraph}</Paragraph>
                </Accordion.Section>
              ))}
            </Accordion>
          )),
        )}
      </div>
    )
  },
}
