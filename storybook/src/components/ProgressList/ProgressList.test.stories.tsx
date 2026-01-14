/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as progressListMeta } from './ProgressList.stories'

const exampleUnorderedList = [
  'Kopie van de pagina’s van het huur- of koopcontract waarop uw naam, adres en handtekeningen staan.',
  'Als u bij iemand woont: een toestemmingsverklaring van de bewoner en een kopie van het paspoort, rijbewijs of ID-kaart van de bewoner.',
  'Bij antikraak: kopie gebruikersovereenkomst.',
].map((text) => <li key={text}>{text}</li>)

const meta = {
  ...progressListMeta,
  title: 'Components/Containers/Progress List',
  args: {
    children: [
      <ProgressList.Step heading="2025" key={0} status="completed">
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 6 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </ProgressList.Step>,
      <ProgressList.Step heading="2026" key={1} status="current">
        <p className="ams-mb-m">
          Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te
          adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.
        </p>
        <ol>{exampleUnorderedList}</ol>
      </ProgressList.Step>,
      <ProgressList.Step hasSubsteps heading="2027" key={2}>
        <p>
          Na een flink aantal jaren zijn alle laaghangende takken weg, zodat de boom geen hinder meer geeft. Daarom zie
          je in het onderste deel van een stadsboom meestal geen zijtakken. Ook halen we takken weg die dood of zwak
          zijn. Zij kunnen afbreken en dat kan gevaarlijk zijn.
        </p>
        <ProgressList.Substeps>
          <ProgressList.Substep>
            <p>
              U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad, wanneer u van daar met
              het openbaar vervoer (ov) naar het centrumgebied van Amsterdam reist. Anders betaalt u het duurdere
              standaard parkeertarief, dat per P+R-locatie verschilt.
            </p>
          </ProgressList.Substep>
          <ProgressList.Substep>
            <p>
              Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig
              hebt. Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of
              vooraankondiging.
            </p>
          </ProgressList.Substep>
        </ProgressList.Substeps>
      </ProgressList.Step>,
    ],
    headingLevel: 3,
  },
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(ProgressList, { args }),
  tags: ['!dev', '!autodocs'],
}
