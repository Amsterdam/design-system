/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AccordionGroup, AccordionSection } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/accordion/accordion.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Accordion',
  component: AccordionGroup,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    // headingLevel: {
    //   control: { type: 'select' },
    //   options: [1, 2, 3, 4],
    //   table: {
    //     category: 'API',
    //   },
    // },
    // summary: {
    //   control: { type: 'text' },
    //   table: {
    //     category: 'API',
    //   },
    // },
    // open: {
    //   control: { type: 'boolean' },
    //   table: {
    //     category: 'HTML attribute',
    //   },
    // },
  },
} satisfies Meta<typeof AccordionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionSection label="hoi" headingLevel={1}>
          test
        </AccordionSection>
        <AccordionSection label="hoi2" headingLevel={1}>
          test2
        </AccordionSection>
      </>
    ),
  },
}

// export const WithHeading: Story = {
//   args: {
//     summary: 'Zichtbare titel',
//     headingLevel: 4,
//     children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
//   },
// }

// export const ExpandedByDefault: Story = {
//   args: {
//     summary: 'Zichtbare titel',
//     open: true,
//     children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
//   },
// }
