/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { default as tabsMeta } from './Tabs.stories'

const meta = {
  ...tabsMeta,
  title: 'Components/Containers/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvas, userEvent }) => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // This delay is required to finish the first tab opening
    const gegevensParagraph = canvas.getByTestId('gegevens-panel')
    const aanslagenTab = canvas.getByTestId('aanslagen')

    await expect(gegevensParagraph).toBeVisible()
    await userEvent.click(aanslagenTab)
    await expect(canvas.getByTestId('aanslagen-panel')).toBeVisible()
    await expect(gegevensParagraph).not.toBeVisible()
  },
  render: (args) => (
    <Tabs {...args} activeTab="Gegevens">
      <Tabs.List>
        <Tabs.Button aria-controls="Gegevens" data-testid="gegevens" onClick={() => {}}>
          Gegevens
        </Tabs.Button>
        <Tabs.Button aria-controls="Aanslagen" data-testid="aanslagen" onClick={() => {}}>
          Aanslagen
        </Tabs.Button>
      </Tabs.List>
      <Tabs.Panel id="Gegevens">
        <h3 className="ams-mb-xs">Gegevens</h3>
        <p data-testid="gegevens-panel">
          Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te
          adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.
        </p>
      </Tabs.Panel>
      <Tabs.Panel id="Aanslagen">
        <h3 className="ams-mb-xs">Aanslagen</h3>
        <p data-testid="aanslagen-panel">
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
      </Tabs.Panel>
    </Tabs>
  ),
  tags: ['!dev', '!autodocs'],
}
