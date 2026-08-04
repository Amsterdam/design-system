/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PieChartFillIcon, WarningFillIcon } from '@amsterdam/design-system-react-icons'
import {
  Blockquote,
  Heading,
  Icon,
  LinkList,
  Menu,
  PageFooter,
  Paragraph,
  Spotlight,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react/src'
import { spotlightColors } from '@amsterdam/design-system-react/src/Spotlight/Spotlight'

import { loFiMeta } from './loFiMeta'

const meta = {
  ...loFiMeta,
  title: 'Modes/Lo-fi/Inverse',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * Lo-fi turns every inverse surface pale, so `color="inverse"` — white text meant for a dark
 * background — is flipped to near-black across eight component token sets at once. Each of those
 * sets is overridden separately, so one that is missed keeps painting white on pale grey and
 * disappears. Every inverse-capable text component sits on the first Spotlight for that reason.
 *
 * The colour row below it is deliberately content-free: `ams.color.highlight.*` collapses onto one
 * grey, so all six Spotlights must look identical. Repeating the full inventory in each colour would
 * have made the sheet four times taller for the same single bit of information.
 *
 * The Menu is the counter-example and the reason this sheet is not Spotlight-only. It keeps a dark
 * background in Lo-fi while consuming the same inverse link tokens, so the blanket flip would have
 * given it near-black on near-black; `menu.lo-fi.tokens.json` re-whitens its links. The Menu below is
 * the regression test for that exception — its labels must stay readable while everything above them
 * goes dark.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      <Spotlight>
        <div className="_ams-tests-stack" style={{ padding: 'var(--ams-space-xl)' }}>
          <Heading color="inverse" level={2}>
            Zuidoost viert 750 jaar Amsterdam
          </Heading>
          <Paragraph color="inverse">
            Vraag subsidie aan voor uw initiatief. Aanvragen kan tot en met 1 oktober.
          </Paragraph>
          <UnorderedList color="inverse">
            <UnorderedList.Item>Voor bewoners en ondernemers.</UnorderedList.Item>
            <UnorderedList.Item>Maximaal 5.000 euro per initiatief.</UnorderedList.Item>
          </UnorderedList>
          <Blockquote color="inverse">De buurt is van iedereen die er woont, werkt en langskomt.</Blockquote>
          <Icon color="inverse" size="heading-2" svg={WarningFillIcon} />
          <LinkList>
            <LinkList.Link color="inverse" href="#">
              Bekijk de voorwaarden
            </LinkList.Link>
          </LinkList>
          <StandaloneLink color="inverse" href="#">
            Vraag subsidie aan
          </StandaloneLink>
        </div>
      </Spotlight>

      <div className="_ams-tests-grid">
        {spotlightColors.map((color) => (
          <Spotlight color={color} key={color}>
            <div style={{ padding: 'var(--ams-space-m)' }}>
              <Paragraph color="inverse">{color}</Paragraph>
            </div>
          </Spotlight>
        ))}
      </div>

      <PageFooter>
        <PageFooter.Spotlight>
          <Paragraph color="inverse">Adressen en openingstijden</Paragraph>
        </PageFooter.Spotlight>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>

      {/* `inWideWindow` is required: a bare Menu is `display: none` outside a Page Header’s nav. */}
      <Menu inWideWindow>
        <Menu.Link href="#" icon={PieChartFillIcon}>
          Dashboard
        </Menu.Link>
        <Menu.Link href="#" icon={PieChartFillIcon}>
          Projecten
        </Menu.Link>
        <Menu.Link className="hover" href="#" icon={PieChartFillIcon}>
          Rapportages
        </Menu.Link>
      </Menu>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
