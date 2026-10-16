/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

type LinkItem = {
  href: string
  label: string
  slug: string
}

type ReportingSection = {
  pages?: Array<LinkItem>
} & LinkItem

export const topNavigationItems: Array<LinkItem> = [
  { href: '#dashboard', label: 'Dashboard', slug: 'dashboard' },
  { href: '#projecten', label: 'Projecten', slug: 'projecten' },
  { href: '#rapportages', label: 'Rapportages', slug: 'rapportages' },
  { href: '#analyses', label: 'Analyses', slug: 'analyses' },
  { href: '#instellingen', label: 'Instellingen', slug: 'instellingen' },
]

export const reportingSections: Array<ReportingSection> = [
  {
    href: '#vergunninghouders',
    label: 'Vergunninghouders',
    pages: [
      { href: '#vergunninghouders-2024-2025', label: '2024/2025', slug: '2024-2025' },
      { href: '#vergunninghouders-2025-2026', label: '2025/2026', slug: '2025-2026' },
      { href: '#vergunninghouders-2026-2027', label: '2026/2027', slug: '2026-2027' },
    ],
    slug: 'vergunninghouders',
  },
  { href: '#maandrapportages', label: 'Maandrapportages', slug: 'maandrapportages' },
  { href: '#jaarrapportages', label: 'Jaarrapportages', slug: 'jaarrapportages' },
]

export const currentTopNavigationSlug = 'rapportages'
export const currentReportingSectionSlug = 'vergunninghouders'
export const currentReportingPageSlug = '2026-2027'
