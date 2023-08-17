/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { OrderedList } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Ordered List',
  component: OrderedList,
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <OrderedList.Item key={1}>
        Voor deze actie hebben uw kinderen een persoonlijke OV-chipkaart nodig. Hebben zij die nog niet, dan kunt u die
        nu al aanvragen. Ieder kind heeft een eigen OV-chipkaart nodig.
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
        U kunt hem aanvragen via ov-chipkaart.nl. De kaart kost € 7,50. U krijgt hem na een dag of 5 thuisgestuurd.
      </OrderedList.Item>,
      <OrderedList.Item key={3}>
        Op de OV-chipkaart kunt u gratis reizen voor kinderen aanvragen vanaf maandag 3 juli 9.00 uur tot uiterlijk 23
        november.
      </OrderedList.Item>,
      <OrderedList.Item key={4}>
        We helpen mensen die er zelf niet uitkomen. Daarvoor zit een speciaal belteam klaar, bereikbaar via 14 020.
      </OrderedList.Item>,
      <OrderedList.Item key={5}>
        Het product is geldig in alle bussen, trams en metro’s van GVB. Kinderen reizen met ten minste 1 volwassen
        begeleider.
      </OrderedList.Item>,
    ],
  },
}

export const TwoLevels: Story = {
  args: {
    children: [
      <OrderedList.Item key={1}>
        Stadsdeel West
        <OrderedList>
          <OrderedList.Item key={1.1}>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item key={1.2}>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item key={1.3}>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
        Stadsdeel Nieuw-West
        <OrderedList>
          <OrderedList.Item key={2.1}>De Aker, Sloten en Nieuw Sloten</OrderedList.Item>
          <OrderedList.Item key={2.2}>Geuzenveld, Slotermeer en Sloterdijken</OrderedList.Item>
          <OrderedList.Item key={2.3}>Osdorp</OrderedList.Item>
          <OrderedList.Item key={2.4}>Slotervaart</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
    ],
  },
}
