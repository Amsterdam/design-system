import figma from '@figma/code-connect'
import React from 'react'
import { Accordion } from '../src/Accordion/Accordion'
import { AccordionSection as _AccordionSection } from '../src/Accordion/AccordionSection'

figma.connect(
  Accordion,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=21707-769&m=dev',
  {
    example: ({ children }) => <Accordion headingLevel={1}>{children}</Accordion>,
    props: {
      children: figma.children(['_Accordion section']),
    },
  },
)

figma.connect(
  _AccordionSection,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=14668-75916&m=dev',
  {
    example: ({ children, expanded, label }) => (
      <Accordion.Section expanded={expanded} label={label}>
        {children}
      </Accordion.Section>
    ),
    props: {
      children: figma.instance('Content'),
      expanded: figma.boolean('Expanded'),
      label: figma.string('Label'),
    },
  },
)
