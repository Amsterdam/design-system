/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { GridCell, PageGrid, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/grid/page-grid.scss'
import '@amsterdam/design-system-css/src/grid/grid-cell.scss'
import '@amsterdam/design-system-css/src/heading/heading.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '../../../../storybook-css/src/docs/stories.scss'

const meta = {
  title: 'PageGrid',
  component: PageGrid,
} satisfies Meta<typeof PageGrid>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: Array.from(Array(12).keys()).map((i) => (
      <GridCell key={i}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>{i + 1}</Paragraph>
        </div>
      </GridCell>
    )),
  },
  parameters: {
    docs: {
      layout: 'centered',
    },
  },
}

export const ThreeColumns: Story = {
  args: {
    children: [
      <GridCell key={1} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 1: kolom 1 t/m 4</Paragraph>
        </div>
      </GridCell>,
      <GridCell key={2} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 2: kolom 5 t/m 8</Paragraph>
        </div>
      </GridCell>,
      <GridCell key={3} gridColumns={4}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok 3: kolom 9 t/m 12</Paragraph>
        </div>
      </GridCell>,
    ],
  },
}

export const ThreeImages: Story = {
  args: {
    children: [
      <GridCell key={1} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/1037047/20230614_poma_visuals_pn_singel-zuid940.jpg" />
        </figure>
      </GridCell>,
      <GridCell key={2} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/987083/33464-amstel-01-01sep2017-e-v-eis9403.jpg" />
        </figure>
      </GridCell>,
      <GridCell key={3} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img src="https://www.amsterdam.nl/publish/pages/1036935/46116-sara-burgerhardtstr-26-17072019-17juli2019-e-v-eis940.jpg" />
        </figure>
      </GridCell>,
    ],
  },
}

export const MiddleBlock: Story = {
  args: {
    children: (
      <GridCell gridColumns={{ start: 2, span: 10 }}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok: kolom 2 t/m 11</Paragraph>
        </div>
      </GridCell>
    ),
  },
}

export const Paragraphs: Story = {
  args: {
    children: [
      <Paragraph key={1} gridColumns={{ start: 1, span: 3 }}>
        A paragraph, directly on the grid, with a width of 3 columns.
      </Paragraph>,
      <Paragraph key={2} gridColumns={{ start: 4, span: 9 }}>
        A paragraph, directly on the grid, with a width of 9 columns. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur at debitis, deserunt ea error ex impedit
        magnam nihil odio perferendis placeat porro quidem repellat temporibus ut voluptate.
      </Paragraph>,
    ],
  },
}
