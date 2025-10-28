/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { default as accordionMeta } from './Accordion.stories'

const meta = {
  ...accordionMeta,
  title: 'Components/Containers/Accordion',
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <Accordion.Section expanded key={1} label="Dit grofvuil halen we niet op">
        <p data-testid="expanded-paragraph">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Accordion.Section>,
      <Accordion.Section data-testid="test-label" key={2} label="Verhuizing doorgeven bij het stadsloket">
        <p data-testid="test-paragraph">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Accordion.Section>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const accordionLabel = canvas.getByTestId('test-label')
    const accordionParagraph = canvas.getByTestId('test-paragraph')
    const accordionButton = accordionLabel.querySelector('button')

    if (!accordionButton) return

    await expect(canvas.getByTestId('expanded-paragraph')).toBeVisible()
    await expect(accordionParagraph).not.toBeVisible()
    await userEvent.click(accordionButton)
    await expect(accordionParagraph).toBeVisible()
    await userEvent.click(accordionButton)
    await expect(accordionParagraph).not.toBeVisible()
  },
  tags: ['!dev', '!autodocs'],
}
