/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { Timeline } from './Timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  args: {
    children: [
      <Timeline.Step
        date="01-01-2025"
        expanded
        key="1"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
        title="Bezoek huisadres Dagobert Duck"
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
      <Timeline.Step
        date="01-01-2025"
        key="2"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
        title="Beroving geldpakhuis"
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
      <Timeline.Step
        date="01-01-2025 14:30"
        key="3"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
        title="Overlast Muntplein"
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
    ],
    collapsible: true,
    editable: true,
  },
} satisfies Meta<typeof Timeline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: meta.args.children,
    collapsible: meta.args.collapsible,
    editable: meta.args.editable,
  },
}
