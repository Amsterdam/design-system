/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as tabsMeta } from './Tabs.stories'

const meta = {
  ...tabsMeta,
  title: 'Components/Containers/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    activeTab: 'Gegevens',
    children: [
      <Tabs.List key={1}>
        <Tabs.Button aria-controls="Gegevens">Gegevens</Tabs.Button>
        <Tabs.Button aria-controls="Aanslagen">Aanslagen</Tabs.Button>
        <Tabs.Button aria-controls="Acties">Acties</Tabs.Button>
      </Tabs.List>,
      <Tabs.Panel id="Gegevens" key={2}>
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Tabs.Panel>,
      <Tabs.Panel id="Aanslagen" key={3}>
        <p>
          Daarom organiseren we in 2024 het burgerberaad schone stad, waarin 150 Amsterdammers in gesprek gaan over hoe
          we de stad beter schoonhouden. Wat vinden Amsterdammers belangrijk? Welke oplossingen zien zij? Hier zijn we
          benieuwd naar. Want elke Amsterdammer heeft afval en moet het kwijt. Wij kunnen als gemeente veel van deze
          afvalexperts leren.
        </p>
      </Tabs.Panel>,
      <Tabs.Panel id="Acties" key={4}>
        <p>
          Afgelopen maand konden bewoners hun reactie op de plannen geven tijdens informatiebijeenkomsten. Online kunt u
          tot en met 31 oktober reageren via amsterdam.nl/oranjeloper. Daar vindt u ook een overzicht van alle
          werkzaamheden die op de planning staan. En u kunt zich inschrijven voor de digitale nieuwsbrief.
        </p>
      </Tabs.Panel>,
    ],
  },
  render: (args) => renderComponentVariants({ component: Tabs, args }),
  tags: ['!dev', '!autodocs'],
}
