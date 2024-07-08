import {
  DocumentTextIcon,
  ExternalLinkIcon,
  HousingIcon,
  StopIcon,
  SuitcaseIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta } from '@storybook/react'
import type { ElementType } from 'react'
import { Layout } from '../common/Layout'

type Menu = {
  level1: Array<MenuItem>
  level2: Array<MenuItem>
  level3: Array<MenuItem>
}

type MenuItem = {
  Icon?: ElementType
  label: string
}

export const menu: Menu = {
  level1: [
    { Icon: HousingIcon, label: 'Dashboard' },
    { Icon: SuitcaseIcon, label: 'Projecten' },
    { Icon: DocumentTextIcon, label: 'Rapportages' },
    { Icon: ExternalLinkIcon, label: 'Analyses' },
    { Icon: StopIcon, label: 'Instellingen' },
  ],
  level2: [
    { label: 'Projectdetails' },
    { label: 'Projectstructuur' },
    { label: 'Planning' },
    { label: 'Capaciteitsraming' },
    { label: 'Financiën' },
  ],
  level3: [
    { label: 'Overzicht' },
    { label: 'Kerngegevens' },
    { label: 'Projectinformatie' },
    { label: 'Projectgrenzen' },
    { label: 'Projectcodes' },
    { label: 'Autorisaties' },
  ],
}

export const commonMeta = {
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} satisfies Meta
