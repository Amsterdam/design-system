/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Accordion, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/accordion/accordion.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'CSS Components/Accordion',
  component: Accordion,
  args: {
    headingLevel: 1,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
    section: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Tweede sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
    ],
  },
  parameters: {
    docs: {
      source: {
        lang: 'html',
        code: `<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>`,
      },
    },
  },
}

export const ExpandedByDefault: Story = {
  args: {
    children: [
      <Accordion.Section key={1} label="Eerste sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Tweede sectie" expanded>
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Derde sectie">
        <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>
      </Accordion.Section>,
    ],
  },
  parameters: {
    docs: {
      source: {
        lang: 'html',
        code: `<div class="amsterdam-accordion" role="button" tabindex="-1">
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rf:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rf:" type="button">
        Eerste sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rf:" aria-labelledby="button-:rf:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rg:" aria-expanded="true" class="amsterdam-accordion__button" id="button-:rg:" type="button">
        Tweede sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rg:" aria-labelledby="button-:rg:" class="amsterdam-accordion__panel amsterdam-accordion__panel--expanded">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
  <div class="amsterdam-accordion__section">
    <h1 class="amsterdam-accordion__header">
      <button aria-controls="panel-:rh:" aria-expanded="false" class="amsterdam-accordion__button" id="button-:rh:" type="button">
        Derde sectie
        <span class="amsterdam-icon amsterdam-icon-size-5">
          <svg>...</svg>
        </span>
      </button>
    </h1>
    <section id="panel-:rh:" aria-labelledby="button-:rh:" class="amsterdam-accordion__panel">
      <p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>
    </section>
  </div>
</div>`,
      },
    },
  },
}
