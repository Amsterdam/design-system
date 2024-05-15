/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Select } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Select',
  component: Select,
  args: {
    invalid: false,
    disabled: false,
    children: [
      <Select.Option key="1" value="1">
        Centrum
      </Select.Option>,
      <Select.Option key="2" value="2">
        Noord
      </Select.Option>,
      <Select.Option key="3" value="3">
        West
      </Select.Option>,
      <Select.Option key="4" value="4" disabled>
        Westpoort
      </Select.Option>,
      <Select.Option key="6" value="5">
        Nieuw-West
      </Select.Option>,
      <Select.Option key="7" value="6">
        Zuid
      </Select.Option>,
      <Select.Option key="8" value="7">
        Zuidoost
      </Select.Option>,
    ],
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Use sparingly.',
    },
    invalid: {
      description: 'Whether the value fails a validation rule.',
    },
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Grouped: Story = {
  args: {
    children: [
      <Select.Group label="Burgwallen-Oude Zijde" key="1">
        <Select.Option>BG-terrein e.o.</Select.Option>
        <Select.Option>Burgwallen oost</Select.Option>
        <Select.Option>Kop Zeedijk</Select.Option>
        <Select.Option>Nes e.o.</Select.Option>
        <Select.Option>Oude Kerk e.o.</Select.Option>
      </Select.Group>,
      <Select.Group label="Burgwallen-Nieuwe Zijde" key="2">
        <Select.Option>Begijnhofbuurt</Select.Option>
        <Select.Option>Hemelrijk</Select.Option>
        <Select.Option>Kalverdriehoek</Select.Option>
        <Select.Option>Nieuwe Kerk e.o.</Select.Option>
        <Select.Option>Nieuwendijk Noord</Select.Option>
        <Select.Option>Spuistraat Noord</Select.Option>
        <Select.Option>Spuistraat Zuid</Select.Option>
        <Select.Option>Stationsplein e.o.</Select.Option>
      </Select.Group>,
      <Select.Group label="Grachtengordel-West" key="3">
        <Select.Option>Felix Meritisbuurt</Select.Option>
        <Select.Option>Langestraat e.o.</Select.Option>
        <Select.Option>Leidsegracht Noord</Select.Option>
        <Select.Option>Leliegracht e.o.</Select.Option>
      </Select.Group>,
      <Select.Group label="Haarlemmerbuurt" key="4">
        <Select.Option>Haarlemmerbuurt Oost</Select.Option>
        <Select.Option>Haarlemmerbuurt West</Select.Option>
        <Select.Option>Planciusbuurt Noord</Select.Option>
        <Select.Option>Planciusbuurt Zuid</Select.Option>
        <Select.Option>Westelijke eilanden</Select.Option>
        <Select.Option>Westerdokseiland</Select.Option>
      </Select.Group>,
      <Select.Group label="Jordaan" key="5">
        <Select.Option>Anjeliersbuurt Noord</Select.Option>
        <Select.Option>Anjeliersbuurt Zuid</Select.Option>
        <Select.Option>Bloemgrachtbuurt</Select.Option>
        <Select.Option>Driehoekbuurt</Select.Option>
        <Select.Option>Elandsgrachtbuurt</Select.Option>
        <Select.Option>Groenmarktkadebuurt</Select.Option>
        <Select.Option>Marnixbuurt Midden</Select.Option>
        <Select.Option>Marnixbuurt Noord</Select.Option>
        <Select.Option>Marnixbuurt Zuid</Select.Option>
        <Select.Option>Passeerdersgrachtbuurt</Select.Option>
        <Select.Option>Zaagpoortbuurt</Select.Option>
      </Select.Group>,
    ],
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
