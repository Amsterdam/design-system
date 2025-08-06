/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Timeline } from './Timeline'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  args: {
    collapsible: true,
    editable: true,
    children: [
      <Timeline.Step
        key="1"
        date="01-01-2025"
        title="Bezoek huisadres Dagobert Duck"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
        expanded
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
      <Timeline.Step
        key="2"
        date="01-01-2025"
        title="Beroving geldpakhuis"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
      <Timeline.Step
        key="3"
        date="01-01-2025 14:30"
        title="Overlast Muntplein"
        lastEdit="Laatst bewerkt door Mark van Dijk 31-12-2024"
      >
        <Paragraph>
          We liepen langs de plek en we hebben gezien dat iemand over een paaltje was gestruikeld en ongelukkig op zijn
          rug was terecht gekomen. Daffy stond van een afstand toe te kijken. (Persoon verwijderd; pas eventueel de rest
          van je notitie nog aan) was er ook. ██████
        </Paragraph>
      </Timeline.Step>,
    ],
  },
} satisfies Meta<typeof Timeline>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    collapsible: meta.args.collapsible,
    editable: meta.args.editable,
    children: meta.args.children,
  },
}
