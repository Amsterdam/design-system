type HeaderMenuLink = {
  fixed?: boolean
  href?: string
  label: string
  lang?: 'en'
}

export const headerMenuLinks: HeaderMenuLink[] = [
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
