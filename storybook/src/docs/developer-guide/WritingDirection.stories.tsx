/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  ActionGroup,
  Alert,
  Avatar,
  Badge,
  Blockquote,
  Breadcrumb,
  Breakout,
  Button,
  Calendar,
  CallToActionLink,
  Card,
  CharacterCount,
  Checkbox,
  Column,
  DateInput,
  DatePicker,
  DescriptionList,
  Dialog,
  ErrorMessage,
  Field,
  FieldSet,
  Figure,
  FileInput,
  FileList,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  ImageSlider,
  InvalidFormAlert,
  Label,
  Link,
  LinkList,
  Logo,
  Mark,
  Menu,
  OrderedList,
  Overlap,
  Page,
  PageFooter,
  PageHeader,
  Pagination,
  Paragraph,
  PasswordInput,
  ProgressList,
  Radio,
  Row,
  SearchField,
  Select,
  Skeleton,
  SkipLink,
  Spotlight,
  StandaloneLink,
  Switch,
  Table,
  TableOfContents,
  TabNavigation,
  Tabs,
  TextArea,
  TextInput,
  TimeInput,
  UnorderedList,
} from '@amsterdam/design-system-react'
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MastodonIcon,
  PhoneIcon,
  PieChartFillIcon,
  SearchIcon,
} from '@amsterdam/design-system-react-icons'
import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

type WritingDirectionArgs = {
  dir: 'ltr' | 'rtl'
  lang: 'nl' | 'ar'
}

const halfWidth = { narrow: 4, medium: 8, wide: 6 } as const
const thirdWidth = { narrow: 4, medium: 4, wide: 3 } as const

// The page chrome and the article below switch to Arabic when that language is selected, so the story
// exercises a full right-to-left script. The 60 component samples further down stay in Dutch.
// The Arabic strings are illustrative demo copy, not verified production translations.
const content = {
  ar: {
    brandName: 'بيانات أمستردام',
    footerLinks: ['حول هذا الموقع', 'الخصوصية', 'ملفات تعريف الارتباط'],
    footerSpotlight: {
      cityHeading: 'أنشطة في المدينة',
      cityLinks: ['اللقاءات والأنشطة', 'الخروج في أمستردام', 'أمستردام 750 عامًا'],
      contactHeading: 'اتصل بنا',
      contactLinks: ['نموذج الاتصال', '14 020', 'العناوين وساعات العمل'],
      followHeading: 'تابعونا',
      followLinks: ['تطبيق أمستردام', 'النشرات الإخبارية', 'Facebook', 'Instagram', 'LinkedIn', 'Mastodon'],
      vacanciesHeading: 'الوظائف الشاغرة',
      vacanciesLink: 'العمل لدى أمستردام',
    },
    heading: 'جميع المكونات',
    megaMenu: [
      { heading: 'الأقسام', links: ['الخريطة', 'الصور البانورامية', 'الجداول', 'دليل البيانات'] },
      { heading: 'معلومات عنا', links: ['عن المنظمة', 'عن منصة البيانات'] },
      { heading: 'المساعدة', links: ['المساعدة', 'اتصل بنا'] },
    ],
    search: 'بحث',
    skipLink: 'انتقل إلى المحتوى',
  },
  nl: {
    brandName: 'Data Amsterdam',
    footerLinks: ['Over deze site', 'Privacy', 'Cookies op deze site'],
    footerSpotlight: {
      cityHeading: 'Doen in de stad',
      cityLinks: ['Bijeenkomsten en activiteiten', 'Uit in Amsterdam', 'Amsterdam 750 jaar'],
      contactHeading: 'Contact',
      contactLinks: ['Contactformulier', '14 020', 'Adressen en openingstijden'],
      followHeading: 'Volg ons',
      followLinks: ['De Amsterdam App', 'Nieuwsbrieven', 'Facebook', 'Instagram', 'LinkedIn', 'Mastodon'],
      vacanciesHeading: 'Vacatures',
      vacanciesLink: 'Werken bij Amsterdam',
    },
    heading: 'Alle componenten',
    megaMenu: [
      { heading: 'Onderdelen', links: ['Kaart', 'Panoramabeelden', 'Tabellen', 'Datacatalogus'] },
      { heading: 'Over ons', links: ['Over de organisatie', 'Over het dataplatform'] },
      { heading: 'Help', links: ['Help', 'Contact'] },
    ],
    search: 'Zoeken',
    skipLink: 'Direct naar inhoud',
  },
} as const

const contactIcons = [MailIcon, PhoneIcon, ClockIcon]
const followIcons = [undefined, undefined, FacebookIcon, InstagramIcon, LinkedInIcon, MastodonIcon]

// `dir` follows `lang`: Arabic is a right-to-left script, the others are left-to-right. This mirrors the
// locale-driven approach in Calendar and Date Picker, where choosing the language also sets the direction.
const SyncDirToLang: Decorator = (Story) => {
  const [{ lang }, updateArgs] = useArgs()

  // Re-applies whenever `lang` changes; `updateArgs` is stable, so it never triggers on its own.
  useEffect(() => {
    updateArgs({ dir: lang === 'ar' ? 'rtl' : 'ltr' })
  }, [lang, updateArgs])

  return <Story />
}

const meta = {
  title: 'Docs/Developer Guide/Writing Direction',
  args: {
    dir: 'ltr',
    lang: 'nl',
  },
  argTypes: {
    dir: {
      control: { type: 'inline-radio' },
      description: 'Reading direction. Read-only here: `lang` sets it — `ar` selects `rtl`, `nl` selects `ltr`.',
      options: ['ltr', 'rtl'],
      table: { readonly: true },
    },
    lang: {
      control: {
        labels: {
          ar: 'العربية (Arabic)',
          nl: 'Nederlands (Dutch)',
        },
        type: 'select',
      },
      description: 'The language applied to the root element, for pronunciation, hyphenation, and `:lang()` styling.',
      options: ['nl', 'ar'],
    },
  },
  decorators: [SyncDirToLang],
  parameters: {
    layout: 'fullscreen',
    viewMode: 'story',
  },
  tags: ['!autodocs'],
} satisfies Meta<WritingDirectionArgs>

export default meta

type Story = StoryObj<WritingDirectionArgs>

export const Playground: Story = {
  render: ({ dir, lang }) => {
    const t = lang === 'ar' ? content.ar : content.nl
    const appointmentDate = new Date(2026, 4, 1)
    const formattedDate = new Intl.DateTimeFormat(lang, { dateStyle: 'long' }).format(appointmentDate)

    return (
      <div dir={dir} lang={lang}>
        <SkipLink href="#writing-direction-content">{t.skipLink}</SkipLink>
        <Page>
          <PageHeader
            brandName={t.brandName}
            defaultOpen
            menuItems={[
              <PageHeader.MenuLink href="#" key="english" lang="en">
                English
              </PageHeader.MenuLink>,
              <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="search">
                {t.search}
              </PageHeader.MenuLink>,
            ]}
          >
            <Grid>
              <PageHeader.GridCellNarrowWindowOnly span="all">
                <LinkList>
                  <LinkList.Link href="#" lang="en">
                    English
                  </LinkList.Link>
                </LinkList>
              </PageHeader.GridCellNarrowWindowOnly>
              {t.megaMenu.map((section) => (
                <Grid.Cell key={section.heading} span={4}>
                  <Heading className="ams-mb-s" level={2} size="level-3">
                    {section.heading}
                  </Heading>
                  <LinkList>
                    {section.links.map((label) => (
                      <LinkList.Link href="#" key={label}>
                        {label}
                      </LinkList.Link>
                    ))}
                  </LinkList>
                </Grid.Cell>
              ))}
            </Grid>
          </PageHeader>
          <main id="writing-direction-content">
            <Grid gapVertical="large" paddingVertical="large">
              <Grid.Cell span="all">
                <Heading className="ams-visually-hidden" level={1}>
                  {t.heading}
                </Heading>
              </Grid.Cell>
              <Grid.Cell span="all">
                {lang === 'ar' ? (
                  <>
                    <Heading className="ams-mb-s" level={2}>
                      موعدك في مكتب المدينة
                    </Heading>
                    <Paragraph className="ams-mb-s">
                      موعدك يوم <time dateTime="2026-05-01">{formattedDate}</time> في مكتب المدينة.
                    </Paragraph>
                    <Paragraph>
                      يقع مكتب المدينة في <span lang="nl">Nieuwezijds Voorburgwal</span> في وسط أمستردام.
                    </Paragraph>
                  </>
                ) : (
                  <>
                    <Heading className="ams-mb-s" level={2}>
                      Afspraak bij het stadsloket
                    </Heading>
                    <Paragraph className="ams-mb-s">
                      Uw afspraak vindt plaats op <time dateTime="2026-05-01">{formattedDate}</time>.
                    </Paragraph>
                    <Paragraph>
                      Het stadsloket bevindt zich aan de <span lang="nl">Nieuwezijds Voorburgwal</span> in
                      Amsterdam-Centrum.
                    </Paragraph>
                  </>
                )}
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Accordion headingLevel={3}>
                  <Accordion.Section label="Hoe ziet de sollicitatieprocedure eruit?">
                    <Paragraph>De gemeente Amsterdam volgt de NVP Sollicitatiecode.</Paragraph>
                  </Accordion.Section>
                  <Accordion.Section label="Heb ik een VOG nodig?">
                    <Paragraph>Ja, als je gaat werken bij de gemeente Amsterdam heb je een VOG nodig.</Paragraph>
                  </Accordion.Section>
                </Accordion>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <ActionGroup>
                  <Button>Doorgaan</Button>
                  <Button variant="secondary">Stoppen</Button>
                </ActionGroup>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Alert heading="Tijdelijk geen verkeer mogelijk" headingLevel={2}>
                  <Paragraph>Tijdens de hijswerkzaamheden geldt er een korte verkeersstop.</Paragraph>
                </Alert>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Avatar label="DS" />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Badge label="Tip" />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Blockquote>Zorg goed voor de stad en voor elkaar.</Blockquote>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Breadcrumb>
                  <Breadcrumb.Link href="#">Afval</Breadcrumb.Link>
                  <Breadcrumb.Link href="#">Bedrijfsafval</Breadcrumb.Link>
                  <Breadcrumb.Link href="#">Recyclepunten voor bedrijven</Breadcrumb.Link>
                </Breadcrumb>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Button>Versturen</Button>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Calendar linkTemplate={(date) => `?date=${date.toISOString().slice(0, 10)}`} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <CallToActionLink href="#">Rijbewijs aanvragen</CallToActionLink>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Card>
                  <Card.Heading level={2}>
                    <Card.Link href="#">Gemeentebelastingen</Card.Link>
                  </Card.Heading>
                  <Paragraph>Bekijk welke belastingen en heffingen er zijn en hoe u bezwaar maakt.</Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <CharacterCount length={7} maxLength={10} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Checkbox>Ik ga akkoord met de voorwaarden</Checkbox>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Column>
                  <Paragraph>Zoekresultaten één</Paragraph>
                  <Paragraph>Zoekresultaten twee</Paragraph>
                </Column>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-date">Wat is uw geboortedatum?</Label>
                  <DateInput id="wd-date" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <DatePicker onChange={() => {}} value={null} />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <DescriptionList>
                  <DescriptionList.Term>Laagopgeleid</DescriptionList.Term>
                  <DescriptionList.Description>Praktisch opgeleid</DescriptionList.Description>
                  <DescriptionList.Term>Hoogopgeleid</DescriptionList.Term>
                  <DescriptionList.Description>Theoretisch opgeleid</DescriptionList.Description>
                </DescriptionList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Button onClick={() => Dialog.open('#wd-dialog')}>Open dialoog</Button>
                <Dialog
                  footer={<Button onClick={(event) => Dialog.close(event)}>Sluiten</Button>}
                  heading="De gegevens zijn opgeslagen"
                  id="wd-dialog"
                >
                  <Paragraph>U ontvangt een bevestiging per e-mail.</Paragraph>
                </Dialog>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <ErrorMessage>Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.</ErrorMessage>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-field">Wat is uw achternaam?</Label>
                  <TextInput id="wd-field" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <FieldSet legend="Wat is uw naam?">
                  <Field>
                    <Label htmlFor="wd-fieldset-first" inFieldSet>
                      Voornaam
                    </Label>
                    <TextInput id="wd-fieldset-first" />
                  </Field>
                  <Field>
                    <Label htmlFor="wd-fieldset-last" inFieldSet>
                      Achternaam
                    </Label>
                    <TextInput id="wd-fieldset-last" />
                  </Field>
                </FieldSet>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Figure>
                  <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
                  <Figure.Caption>Een rij geparkeerde fietsen langs een smalle Amsterdamse gracht.</Figure.Caption>
                </Figure>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-file">Voeg een bijlage toe</Label>
                  <FileInput id="wd-file" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <FileList>
                  <FileList.Item
                    file={new File(['sample'], 'document.pdf', { type: 'application/pdf' })}
                    onDelete={() => {}}
                  />
                </FileList>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Grid>
                  <Grid.Cell span={halfWidth}>
                    <Paragraph>Grid-cel links</Paragraph>
                  </Grid.Cell>
                  <Grid.Cell span={halfWidth}>
                    <Paragraph>Grid-cel rechts</Paragraph>
                  </Grid.Cell>
                </Grid>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Heading level={2}>Meer plekken voor kunst en cultuur, verspreid over de stad</Heading>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Icon svg={<MailIcon />} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <IconButton label="Sluiten" />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Image alt="" src="https://picsum.photos/640/360" />
              </Grid.Cell>
              <Grid.Cell span="all">
                <ImageSlider
                  images={[
                    { alt: 'Brug', src: 'https://picsum.photos/id/122/1280/720' },
                    { alt: 'Bunker', src: 'https://picsum.photos/id/101/1280/720' },
                    { alt: 'Stoelen', src: 'https://picsum.photos/id/153/1280/720' },
                  ]}
                />
              </Grid.Cell>
              <Grid.Cell span="all">
                <InvalidFormAlert
                  errors={[
                    { id: '#', label: 'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' },
                    { id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' },
                  ]}
                  headingLevel={2}
                />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Label>Label</Label>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Paragraph>
                  Een <Link href="#">typograaf</Link> ontwerpt letters.
                </Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <LinkList>
                  <LinkList.Link href="#">Contactformulier</LinkList.Link>
                  <LinkList.Link href="#">Adressen en openingstijden</LinkList.Link>
                  <LinkList.Link href="#">Bel 14 020</LinkList.Link>
                </LinkList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Logo />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Paragraph>
                  Wij kunnen als gemeente veel van deze <Mark>afvalexperts</Mark> leren.
                </Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Menu>
                  <Menu.Link href="#" icon={<PieChartFillIcon />}>
                    Dashboard
                  </Menu.Link>
                </Menu>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <OrderedList>
                  <OrderedList.Item>Zorg voor een duidelijke schrijfopdracht.</OrderedList.Item>
                  <OrderedList.Item>Verzamel, selecteer en structureer de informatie.</OrderedList.Item>
                  <OrderedList.Item>Controleer de tekst en de schrijfopdracht.</OrderedList.Item>
                </OrderedList>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Overlap>
                  <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
                  <Grid style={{ alignSelf: 'center' }}>
                    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
                      <SearchField onSubmit={(event) => event.preventDefault()}>
                        <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
                        <SearchField.Button />
                      </SearchField>
                    </Grid.Cell>
                  </Grid>
                </Overlap>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Pagination linkTemplate={(page) => `#?pagina=${page}`} maxVisiblePages={7} page={5} totalPages={10} />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Paragraph>De politie controleert op overtredingen met opgevoerde e-bikes en fatbikes.</Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-password">Wachtwoord</Label>
                  <PasswordInput id="wd-password" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <ProgressList headingLevel={3}>
                  <ProgressList.Step heading="Aanvraag ingediend" status="completed">
                    <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
                  </ProgressList.Step>
                  <ProgressList.Step heading="In behandeling" status="current">
                    <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt bij vragen contact met u op.</Paragraph>
                  </ProgressList.Step>
                  <ProgressList.Step heading="Besluit">
                    <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
                  </ProgressList.Step>
                </ProgressList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Radio>Op de hoogte blijven via e-mail</Radio>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Row>
                  <Paragraph>Een</Paragraph>
                  <Paragraph>Twee</Paragraph>
                </Row>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <SearchField onSubmit={(event) => event.preventDefault()}>
                  <SearchField.Input label="Zoeken" />
                  <SearchField.Button />
                </SearchField>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-select">Kies een stadsdeel</Label>
                  <Select id="wd-select">
                    <Select.Option value="Centrum">Centrum</Select.Option>
                    <Select.Option value="Noord">Noord</Select.Option>
                    <Select.Option value="Zuid">Zuid</Select.Option>
                  </Select>
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Skeleton>
                  <Skeleton.Image />
                  <Skeleton.Heading />
                  <Skeleton.Paragraph lines={3} />
                </Skeleton>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Spotlight color="green">
                  <Grid paddingVertical="x-large">
                    <Grid.Cell span="all">
                      <Blockquote color="inverse">Zorg goed voor de stad en voor elkaar.</Blockquote>
                    </Grid.Cell>
                  </Grid>
                </Spotlight>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <StandaloneLink href="#">Bekijk alle onderwerpen</StandaloneLink>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Label htmlFor="wd-switch">Meldingen ontvangen</Label>
                <Switch id="wd-switch" />
              </Grid.Cell>
              <Grid.Cell span="all">
                <TabNavigation>
                  <TabNavigation.List>
                    <TabNavigation.Link aria-current="page" href="#gegevens">
                      Gegevens
                    </TabNavigation.Link>
                    <TabNavigation.Link href="#aanslagen">Aanslagen</TabNavigation.Link>
                    <TabNavigation.Link href="#documenten">Documenten</TabNavigation.Link>
                  </TabNavigation.List>
                </TabNavigation>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Table>
                  <Table.Caption>
                    <Heading level={3}>Kosten voor de aanvraag</Heading>
                  </Table.Caption>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Type</Table.HeaderCell>
                      <Table.HeaderCell align="end">Normale levertijd</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Paspoort</Table.Cell>
                      <Table.Cell align="end">€ 77,85</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>ID-kaart</Table.Cell>
                      <Table.Cell align="end">€ 70,35</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <TableOfContents heading="Op deze pagina">
                  <TableOfContents.List>
                    <TableOfContents.Link href="#writing-direction-content" label="Zo werkt het" />
                    <TableOfContents.Link href="#writing-direction-content" label="Voorwaarden" />
                    <TableOfContents.Link href="#writing-direction-content" label="Aanvragen" />
                  </TableOfContents.List>
                </TableOfContents>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Tabs>
                  <Tabs.List>
                    <Tabs.Button aria-controls="wd-tab-west">West</Tabs.Button>
                    <Tabs.Button aria-controls="wd-tab-centrum">Centrum</Tabs.Button>
                  </Tabs.List>
                  <Tabs.Panel id="wd-tab-west">
                    <Paragraph>Bos en Lommerplein 250, 1055 EK Amsterdam</Paragraph>
                  </Tabs.Panel>
                  <Tabs.Panel id="wd-tab-centrum">
                    <Paragraph>Amstel 1, 1011 PN Amsterdam</Paragraph>
                  </Tabs.Panel>
                </Tabs>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-textarea">Toelichting</Label>
                  <TextArea id="wd-textarea" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-textinput">Woonplaats</Label>
                  <TextInput id="wd-textinput" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-time">Hoe laat is uw afspraak?</Label>
                  <TimeInput id="wd-time" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <UnorderedList>
                  <UnorderedList.Item>De Clercqstraat en Jan Evertsenstraat</UnorderedList.Item>
                  <UnorderedList.Item>Raadhuisstraat, Westermarkt en Rozengracht</UnorderedList.Item>
                  <UnorderedList.Item>Nieuwezijds Voorburgwal</UnorderedList.Item>
                </UnorderedList>
              </Grid.Cell>
              <Grid.Cell span="all" style={{ paddingBottom: 'var(--ams-space-2xl)' }}>
                <Breakout>
                  <Breakout.Cell colSpan="all" has="spotlight" rowSpan={{ narrow: 2, medium: 2, wide: 1 }} rowStart={2}>
                    <Spotlight color="green" />
                  </Breakout.Cell>
                  <Breakout.Cell
                    colSpan={{ narrow: 4, medium: 8, wide: 6 }}
                    colStart={1}
                    rowStart={{ narrow: 3, medium: 3, wide: 2 }}
                  >
                    <Paragraph color="inverse">
                      Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
                    </Paragraph>
                  </Breakout.Cell>
                  <Breakout.Cell
                    colSpan={{ narrow: 4, medium: 8, wide: 6 }}
                    colStart={{ narrow: 1, medium: 1, wide: 7 }}
                    has="figure"
                    rowSpan={2}
                    rowStart={1}
                  >
                    <Image alt="" aspectRatio="1:1" src="https://picsum.photos/960/960" />
                  </Breakout.Cell>
                </Breakout>
              </Grid.Cell>
            </Grid>
          </main>
          <PageFooter>
            <PageFooter.Spotlight>
              <Grid paddingVertical="x-large">
                <Grid.Cell span={4}>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                    {t.footerSpotlight.contactHeading}
                  </Heading>
                  <LinkList className="ams-mb-xl">
                    {t.footerSpotlight.contactLinks.map((label, index) => {
                      const ContactIcon = contactIcons[index]

                      return (
                        <LinkList.Link
                          color="inverse"
                          href="#"
                          icon={ContactIcon ? <ContactIcon /> : undefined}
                          key={label}
                        >
                          {label}
                        </LinkList.Link>
                      )
                    })}
                  </LinkList>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                    {t.footerSpotlight.vacanciesHeading}
                  </Heading>
                  <StandaloneLink color="inverse" href="#">
                    {t.footerSpotlight.vacanciesLink}
                  </StandaloneLink>
                </Grid.Cell>
                <Grid.Cell span={4}>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                    {t.footerSpotlight.followHeading}
                  </Heading>
                  <LinkList>
                    {t.footerSpotlight.followLinks.map((label, index) => {
                      const FollowIcon = followIcons[index]

                      return (
                        <LinkList.Link
                          color="inverse"
                          href="#"
                          icon={FollowIcon ? <FollowIcon /> : undefined}
                          key={label}
                        >
                          {label}
                        </LinkList.Link>
                      )
                    })}
                  </LinkList>
                </Grid.Cell>
                <Grid.Cell span={4}>
                  <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                    {t.footerSpotlight.cityHeading}
                  </Heading>
                  <LinkList>
                    {t.footerSpotlight.cityLinks.map((label) => (
                      <LinkList.Link color="inverse" href="#" key={label}>
                        {label}
                      </LinkList.Link>
                    ))}
                  </LinkList>
                </Grid.Cell>
              </Grid>
            </PageFooter.Spotlight>
            <PageFooter.Menu>
              {t.footerLinks.map((label) => (
                <PageFooter.MenuLink href="#" key={label}>
                  {label}
                </PageFooter.MenuLink>
              ))}
            </PageFooter.Menu>
          </PageFooter>
        </Page>
      </div>
    )
  },
}
