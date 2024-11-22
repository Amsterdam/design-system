import figma from '@figma/code-connect'
import React from 'react'
import { Accordion } from '../src/Accordion/Accordion'
import { AccordionSection } from '../src/Accordion/AccordionSection'

figma.connect(
  Accordion,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=21707-769&m=dev',
  {
    props: {
      children: figma.children(['_Accordion section']),
    },
    example: ({ children }) => <Accordion headingLevel={1}>{children}</Accordion>,
  },
)

figma.connect(
  AccordionSection,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=14668-75916&m=dev',
  {
    props: {
      label: figma.string('Label'),
      expanded: figma.boolean('Expanded'),
      children: figma.instance('Content'),
    },
    example: ({ label, expanded, children }) => (
      <Accordion.Section label={label} expanded={expanded}>
        {children}
      </Accordion.Section>
    ),
  },
)
