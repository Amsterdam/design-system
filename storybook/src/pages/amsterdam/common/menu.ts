type PageHeaderMenuLink = {
  fixed?: boolean
  href?: string
  label: string
  lang?: 'en'
}

export const pageHeaderMenuLinks: PageHeaderMenuLink[] = [
  {
    label: 'English',
    lang: 'en',
  },
  {
    href: 'https://mijn.amsterdam.nl/',
    label: 'Mijn Amsterdam',
  },
  {
    fixed: true,
    label: 'Zoeken',
  },
]

type MegaMenuLink = string

export const megaMenuLinks: MegaMenuLink[] = ['Afval', 'Bestuur en organisatie', 'Gemeentebelastingen', '…']
