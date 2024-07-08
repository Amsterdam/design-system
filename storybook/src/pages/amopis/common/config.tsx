import { Meta } from '@storybook/react'
import { Layout } from '../common/Layout'

export const menu = {
  level2: ['Projectdetails', 'Projectstructuur', 'Planning', 'Capaciteitsraming', 'Financiën'],
  level3: ['Overzicht', 'Kerngegevens', 'Projectinformatie', 'Projectgrenzen', 'Projectcodes', 'Autorisaties'],
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
