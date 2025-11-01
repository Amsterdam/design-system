/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
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
      <Accordion.Section key={1} label="Verhuizing doorgeven bij stadsloket">
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>,
      <Accordion.Section key={2} label="Dit grof afval halen we niet op">
        <p>
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>,
      <Accordion.Section key={3} label="Verhuizing doorgeven per post">
        <p>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
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
  render: (args) => (
    <>
      {renderComponentVariants(Accordion, {
        args,
      })}
      <Accordion.Section expanded label="Verhuizing doorgeven bij stadsloket">
        <p data-testid="expanded-paragraph">
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>
      <Accordion.Section data-testid="test-label" label="Dit grof afval halen we niet op">
        <p data-testid="test-paragraph">
          Veel Amsterdammers in de bijstand zijn huiverig om te gaan werken. Ze denken dat ze dan minder geld krijgen,
          bijvoorbeeld omdat ze hun toeslagen verliezen. Voor deze mensen ontwikkelen we de ‘garantieknop’. Als mensen
          in de bijstand beginnen met werken en binnen 7 maanden hun baan verliezen, kunnen zij met de ‘garantieknop’
          meteen weer bijstand krijgen als dat nodig is. Dit zorgt ervoor dat zij minder stress hebben. Het wordt zo
          makkelijker om weer een nieuwe baan te zoeken.
        </p>
      </Accordion.Section>
      <Accordion.Section label="Verhuizing doorgeven per post">
        <p>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </p>
      </Accordion.Section>
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
