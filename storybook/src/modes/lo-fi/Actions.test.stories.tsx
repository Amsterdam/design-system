/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ChevronForwardIcon, CloseIcon } from '@amsterdam/design-system-react-icons'
import {
  Alert,
  Badge,
  Button,
  CallToActionLink,
  IconButton,
  Paragraph,
  ProgressList,
  StandaloneLink,
} from '@amsterdam/design-system-react/src'
import { badgeColors } from '@amsterdam/design-system-react/src/Badge/Badge'
import { buttonVariants } from '@amsterdam/design-system-react/src/Button/Button'

import { loFiMeta } from './loFiMeta'

const meta = {
  ...loFiMeta,
  title: 'Modes/Lo-fi/Actions',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const severities = [undefined, 'error', 'success', 'warning'] as const

/**
 * The three components that each carry their own hand-drawn radius — Button, Alert and Call to
 * Action Link — plus the two brand colour groups that Lo-fi flattens to grey.
 *
 * Badge and Alert are the sheet’s colour witnesses: `ams.color.highlight.*` and
 * `ams.color.feedback.*` collapse onto one grey each, so every badge and every severity should
 * render identically apart from its icon and label. A badge that still shows a hue means a token
 * escaped the mode build, which is exactly the regression this sheet is for. Progress List covers
 * `ams.color.progress.*` the same way.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack" style={{ maxInlineSize: '44rem' }}>
      <div className="_ams-tests-grid">
        {buttonVariants.map((variant) => (
          <Button key={variant} variant={variant}>
            Verstuur
          </Button>
        ))}
        <Button disabled>Verstuur</Button>
        <Button icon={ChevronForwardIcon}>Volgende stap</Button>
        <IconButton label="Sluiten" svg={CloseIcon} />
      </div>

      <div className="_ams-tests-grid">
        <CallToActionLink href="#">Vraag een subsidie aan</CallToActionLink>
        <StandaloneLink href="#">Bekijk alle voorwaarden</StandaloneLink>
      </div>

      <div className="_ams-tests-grid">
        {badgeColors.map((color) => (
          <Badge color={color} key={color} label={color} />
        ))}
      </div>

      {severities.map((severity) => (
        <Alert
          closeable
          heading="Uw aanvraag is ontvangen"
          headingLevel={2}
          key={severity ?? 'info'}
          severity={severity}
        >
          <Paragraph>U krijgt binnen 3 weken bericht over uw aanvraag.</Paragraph>
        </Alert>
      ))}

      <ProgressList headingLevel={2}>
        <ProgressList.Step heading="Aanvraag ontvangen" status="completed">
          <Paragraph>Wij hebben uw aanvraag ontvangen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Aanvraag in behandeling" status="current">
          <Paragraph>Een medewerker beoordeelt uw aanvraag.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Besluit">
          <Paragraph>U krijgt bericht over het besluit.</Paragraph>
        </ProgressList.Step>
      </ProgressList>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
