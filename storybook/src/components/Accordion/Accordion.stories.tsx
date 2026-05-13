/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Link, Paragraph } from '@amsterdam/design-system-react'
import { Accordion } from '@amsterdam/design-system-react/src'

const faqItems = [
  {
    content: (
      <Paragraph>
        Op de pagina <Link href="#">Solliciteren bij Amsterdam</Link> vind je uitgebreide informatie over solliciteren
        bij de gemeente Amsterdam. De gemeente Amsterdam volgt daarbij de <Link href="#">NVP Sollicitatiecode</Link>.
        Dit is een gedragscode met basisregels die een transparant en eerlijk werving- en selectieproces waarborgt.
      </Paragraph>
    ),
    label: 'Hoe ziet de sollicitatieprocedure eruit?',
  },
  {
    content: (
      <Paragraph>
        Het is momenteel alleen mogelijk om een open sollicitatie voor stages in te sturen. Kun je geen passende{' '}
        <Link href="#">stagevacature</Link> vinden en wil je een open sollicitatie insturen? Mail dan jouw cv en een
        korte motivatie naar <Link href="#">stage@amsterdam.nl</Link>.
      </Paragraph>
    ),
    label: 'Kan ik een open sollicitatie sturen?',
  },
  {
    content: (
      <Paragraph>
        Ja, als je gaat werken bij de gemeente Amsterdam heb je een VOG nodig. Een VOG staat voor Verklaring Omtrent het
        Gedrag. Meer informatie hierover vind je op de pagina <Link href="#">VOG</Link>.
      </Paragraph>
    ),
    label: 'Heb ik een VOG nodig?',
  },
]

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
    children: faqItems.map(({ content, label }, index) => (
      <Accordion.Section key={index} label={label}>
        {content}
      </Accordion.Section>
    )),
  },
}

export const Level: Story = {
  args: {
    children: <Accordion.Section label={faqItems[0].label}>{faqItems[0].content}</Accordion.Section>,
    headingLevel: 4,
  },
}

export const ExpandedByDefault: Story = {
  args: {
    children: faqItems.map(({ content, label }, index) => (
      <Accordion.Section defaultExpanded={index === 0} key={index} label={label}>
        {content}
      </Accordion.Section>
    )),
  },
}

export const ReduceLandmarks: Story = {
  args: {
    children: faqItems.map(({ content, label }, index) => (
      <Accordion.Section key={index} label={label}>
        {content}
      </Accordion.Section>
    )),
    sectionAs: 'div',
  },
}
