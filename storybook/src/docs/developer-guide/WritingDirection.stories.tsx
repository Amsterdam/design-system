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
  formatCharacterCountTextAr,
  formatCharacterCountTextNl,
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
import { Fragment, useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

import { calendarLocaleProps, datePickerLocaleProps } from '../../_common/locale'

type WritingDirectionArgs = {
  dir: 'ltr' | 'rtl'
  lang: 'nl' | 'ar'
}

const halfWidth = { narrow: 4, medium: 8, wide: 6 } as const
const thirdWidth = { narrow: 4, medium: 4, wide: 3 } as const

// The entire page – chrome, article, and every component sample – switches to Arabic when that
// language is selected, so the story exercises a full right-to-left script.
// The Arabic strings are illustrative demo copy, not verified production translations.
// Proper nouns such as street names stay in Latin script, as they would on a real page.
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
      followLinks: ['تطبيق أمستردام', 'النشرات الإخبارية', 'فيسبوك', 'إنستغرام', 'لينكد إن', 'ماستودون'],
      vacanciesHeading: 'الوظائف الشاغرة',
      vacanciesLink: 'العمل لدى أمستردام',
    },
    heading: 'جميع المكونات',
    megaMenu: [
      { heading: 'الأقسام', links: ['الخريطة', 'الصور البانورامية', 'الجداول', 'دليل البيانات'] },
      { heading: 'معلومات عنا', links: ['عن المنظمة', 'عن منصة البيانات'] },
      { heading: 'المساعدة', links: ['المساعدة', 'اتصل بنا'] },
    ],
    // `menuButtonText` is a verified translation; the other values are unverified drafts.
    pageHeader: {
      logoLinkTitle: 'انتقل إلى الصفحة الرئيسية لبيانات أمستردام',
      menuButtonText: 'القائمة',
      menuButtonTextForHide: 'أخفِ قائمة التنقل',
      menuButtonTextForShow: 'أظهر قائمة التنقل',
      navigationLabel: 'القائمة الرئيسية',
    },
    samples: {
      accordion: {
        sections: [
          { body: 'تتبع بلدية أمستردام مدونة NVP للتوظيف.', label: 'كيف تبدو إجراءات التقديم للوظيفة؟' },
          {
            body: 'نعم، إذا كنت ستعمل لدى بلدية أمستردام فستحتاج إلى شهادة حسن سلوك.',
            label: 'هل أحتاج إلى شهادة حسن سلوك (VOG)؟',
          },
        ],
      },
      actionGroup: { proceedLabel: 'متابعة', stopLabel: 'إيقاف' },
      alert: { body: 'أثناء أعمال الرفع، تتوقف حركة المرور لفترة قصيرة.', heading: 'حركة المرور متوقفة مؤقتًا' },
      avatarLabel: 'بأ',
      badgeLabel: 'نصيحة',
      blockquote: 'اعتنوا جيدًا بالمدينة وببعضكم البعض.',
      breadcrumbLinks: ['النفايات', 'نفايات الشركات', 'نقاط إعادة التدوير للشركات'],
      breakoutParagraph: 'هدف هذا النادي هو أن تصبح منطقة Zuidas أكثر استدامة باستمرار.',
      buttonLabel: 'إرسال',
      callToActionLabel: 'طلب رخصة قيادة',
      card: { body: 'اطلع على الضرائب والرسوم المفروضة وكيفية تقديم اعتراض.', heading: 'الضرائب البلدية' },
      characterCountFormatText: formatCharacterCountTextAr,
      checkboxLabel: 'أوافق على الشروط',
      columnParagraphs: ['نتيجة البحث الأولى', 'نتيجة البحث الثانية'],
      dateInputLabel: 'ما هو تاريخ ميلادك؟',
      descriptionList: [
        { description: 'تعليم عملي', term: 'تعليم منخفض' },
        { description: 'تعليم نظري', term: 'تعليم عالٍ' },
      ],
      dialog: {
        body: 'ستتلقى تأكيدًا عبر البريد الإلكتروني.',
        closeButtonLabel: 'إغلاق',
        heading: 'تم حفظ البيانات',
        openButtonLabel: 'افتح مربع الحوار',
      },
      errorMessage: 'أدخل عنوان بريد إلكتروني صالحًا، مثل naam@voorbeeld.nl.',
      fieldSet: { firstNameLabel: 'الاسم الأول', lastNameLabel: 'اسم العائلة', legend: 'ما هو اسمك؟' },
      figureCaption: 'صف من الدراجات المتوقفة على طول قناة ضيقة في أمستردام.',
      fileInputLabel: 'أضف مرفقًا',
      fileName: 'مستند.pdf',
      gridParagraphs: ['خلية الشبكة الأولى', 'خلية الشبكة الثانية'],
      heading: 'المزيد من الأماكن للفنون والثقافة في جميع أنحاء المدينة',
      iconButtonLabel: 'إغلاق',
      imageSlider: {
        imageLabel: 'صورة',
        images: [
          { alt: 'جسر', src: 'https://picsum.photos/id/122/1280/720' },
          { alt: 'ملجأ', src: 'https://picsum.photos/id/101/1280/720' },
          { alt: 'كراسي', src: 'https://picsum.photos/id/153/1280/720' },
        ],
        nextLabel: 'التالية',
        previousLabel: 'السابقة',
      },
      invalidFormAlert: {
        errors: ['أدخل تاريخًا صالحًا (مثل 6 يناير 2030).', 'يجب أن يكون تاريخ انتهاء صلاحية جواز سفرك في المستقبل.'],
        heading: 'صحّح الأخطاء قبل المتابعة',
      },
      labelText: 'تسمية',
      linkListLinks: ['نموذج الاتصال', 'العناوين وساعات العمل', 'اتصل بالرقم 14 020'],
      linkSentence: { linkText: 'مصمم الخطوط', textAfter: ' يصمم الحروف.', textBefore: '' },
      markSentence: { markText: 'خبراء النفايات', textAfter: '.', textBefore: 'يمكننا كبلدية أن نتعلم الكثير من ' },
      menuLinkLabel: 'لوحة المعلومات',
      orderedListItems: [
        'احرص على أن تكون مهمة الكتابة واضحة.',
        'اجمع المعلومات وانتقِها ونظمها.',
        'راجع النص ومهمة الكتابة.',
      ],
      pagination: { nextLabel: 'التالي', previousLabel: 'السابق' },
      paragraph: 'تراقب الشرطة المخالفات المتعلقة بالدراجات الكهربائية المعدّلة والدراجات ذات الإطارات العريضة.',
      passwordInputLabel: 'كلمة المرور',
      progressList: [
        { body: 'تم استلام طلبك في 2 يناير 2026.', heading: 'تم تقديم الطلب' },
        { body: 'يراجع أحد الموظفين طلبك وسيتواصل معك عند وجود أسئلة.', heading: 'قيد المعالجة' },
        { body: 'ستتلقى القرار في غضون 8 أسابيع من تقديم طلبك.', heading: 'القرار' },
      ],
      radioLabel: 'البقاء على اطلاع عبر البريد الإلكتروني',
      rowParagraphs: ['واحد', 'اثنان'],
      searchPlaceholder: 'ماذا يمكننا أن نجد لك؟',
      select: {
        label: 'اختر حيًا',
        options: [
          { label: 'المركز', value: 'Centrum' },
          { label: 'الشمال', value: 'Noord' },
          { label: 'الجنوب', value: 'Zuid' },
        ],
      },
      standaloneLinkLabel: 'عرض جميع المواضيع',
      surnameLabel: 'ما هو اسم عائلتك؟',
      switchLabel: 'تلقي الإشعارات',
      table: {
        caption: 'تكاليف الطلب',
        deliveryTimeHeader: 'مدة التسليم العادية',
        rows: [
          { price: '€ 77,85', type: 'جواز السفر' },
          { price: '€ 70,35', type: 'بطاقة الهوية' },
        ],
        typeHeader: 'النوع',
      },
      tableOfContents: { heading: 'في هذه الصفحة', links: ['كيف يعمل', 'الشروط', 'التقديم'] },
      tabNavigationLinks: ['البيانات', 'الإشعارات الضريبية', 'المستندات'],
      tabs: [
        { address: 'Bos en Lommerplein 250, 1055 EK Amsterdam', label: 'الغرب' },
        { address: 'Amstel 1, 1011 PN Amsterdam', label: 'المركز' },
      ],
      textAreaLabel: 'توضيح',
      textInputLabel: 'مكان الإقامة',
      timeInputLabel: 'في أي ساعة موعدك؟',
      unorderedListItems: [
        'De Clercqstraat وJan Evertsenstraat',
        'Raadhuisstraat وWestermarkt وRozengracht',
        'Nieuwezijds Voorburgwal',
      ],
    },
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
    pageHeader: {
      logoLinkTitle: 'Ga naar de homepage van Data Amsterdam',
      menuButtonText: 'Menu',
      menuButtonTextForHide: 'Verberg navigatiemenu',
      menuButtonTextForShow: 'Laat navigatiemenu zien',
      navigationLabel: 'Hoofdmenu',
    },
    samples: {
      accordion: {
        sections: [
          {
            body: 'De gemeente Amsterdam volgt de NVP Sollicitatiecode.',
            label: 'Hoe ziet de sollicitatieprocedure eruit?',
          },
          {
            body: 'Ja, als je gaat werken bij de gemeente Amsterdam heb je een VOG nodig.',
            label: 'Heb ik een VOG nodig?',
          },
        ],
      },
      actionGroup: { proceedLabel: 'Doorgaan', stopLabel: 'Stoppen' },
      alert: {
        body: 'Tijdens de hijswerkzaamheden geldt er een korte verkeersstop.',
        heading: 'Tijdelijk geen verkeer mogelijk',
      },
      avatarLabel: 'DS',
      badgeLabel: 'Tip',
      blockquote: 'Zorg goed voor de stad en voor elkaar.',
      breadcrumbLinks: ['Afval', 'Bedrijfsafval', 'Recyclepunten voor bedrijven'],
      breakoutParagraph: 'Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.',
      buttonLabel: 'Versturen',
      callToActionLabel: 'Rijbewijs aanvragen',
      card: {
        body: 'Bekijk welke belastingen en heffingen er zijn en hoe u bezwaar maakt.',
        heading: 'Gemeentebelastingen',
      },
      characterCountFormatText: formatCharacterCountTextNl,
      checkboxLabel: 'Ik ga akkoord met de voorwaarden',
      columnParagraphs: ['Zoekresultaten één', 'Zoekresultaten twee'],
      dateInputLabel: 'Wat is uw geboortedatum?',
      descriptionList: [
        { description: 'Praktisch opgeleid', term: 'Laagopgeleid' },
        { description: 'Theoretisch opgeleid', term: 'Hoogopgeleid' },
      ],
      dialog: {
        body: 'U ontvangt een bevestiging per e-mail.',
        closeButtonLabel: 'Sluiten',
        heading: 'De gegevens zijn opgeslagen',
        openButtonLabel: 'Open dialoog',
      },
      errorMessage: 'Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.',
      fieldSet: { firstNameLabel: 'Voornaam', lastNameLabel: 'Achternaam', legend: 'Wat is uw naam?' },
      figureCaption: 'Een rij geparkeerde fietsen langs een smalle Amsterdamse gracht.',
      fileInputLabel: 'Voeg een bijlage toe',
      fileName: 'document.pdf',
      gridParagraphs: ['Grid-cel links', 'Grid-cel rechts'],
      heading: 'Meer plekken voor kunst en cultuur, verspreid over de stad',
      iconButtonLabel: 'Sluiten',
      imageSlider: {
        imageLabel: 'Afbeelding',
        images: [
          { alt: 'Brug', src: 'https://picsum.photos/id/122/1280/720' },
          { alt: 'Bunker', src: 'https://picsum.photos/id/101/1280/720' },
          { alt: 'Stoelen', src: 'https://picsum.photos/id/153/1280/720' },
        ],
        nextLabel: 'Volgende',
        previousLabel: 'Vorige',
      },
      invalidFormAlert: {
        errors: [
          'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).',
          'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.',
        ],
        heading: 'Verbeter de fouten voor u verder gaat',
      },
      labelText: 'Label',
      linkListLinks: ['Contactformulier', 'Adressen en openingstijden', 'Bel 14 020'],
      linkSentence: { linkText: 'typograaf', textAfter: ' ontwerpt letters.', textBefore: 'Een ' },
      markSentence: {
        markText: 'afvalexperts',
        textAfter: ' leren.',
        textBefore: 'Wij kunnen als gemeente veel van deze ',
      },
      menuLinkLabel: 'Dashboard',
      orderedListItems: [
        'Zorg voor een duidelijke schrijfopdracht.',
        'Verzamel, selecteer en structureer de informatie.',
        'Controleer de tekst en de schrijfopdracht.',
      ],
      pagination: { nextLabel: 'volgende', previousLabel: 'vorige' },
      paragraph: 'De politie controleert op overtredingen met opgevoerde e-bikes en fatbikes.',
      passwordInputLabel: 'Wachtwoord',
      progressList: [
        { body: 'Uw aanvraag is op 2 januari 2026 ontvangen.', heading: 'Aanvraag ingediend' },
        {
          body: 'Een medewerker beoordeelt uw aanvraag en neemt bij vragen contact met u op.',
          heading: 'In behandeling',
        },
        { body: 'U ontvangt het besluit binnen 8 weken na uw aanvraag.', heading: 'Besluit' },
      ],
      radioLabel: 'Op de hoogte blijven via e-mail',
      rowParagraphs: ['Een', 'Twee'],
      searchPlaceholder: 'Wat kunnen we voor u vinden?',
      select: {
        label: 'Kies een stadsdeel',
        options: [
          { label: 'Centrum', value: 'Centrum' },
          { label: 'Noord', value: 'Noord' },
          { label: 'Zuid', value: 'Zuid' },
        ],
      },
      standaloneLinkLabel: 'Bekijk alle onderwerpen',
      surnameLabel: 'Wat is uw achternaam?',
      switchLabel: 'Meldingen ontvangen',
      table: {
        caption: 'Kosten voor de aanvraag',
        deliveryTimeHeader: 'Normale levertijd',
        rows: [
          { price: '€ 77,85', type: 'Paspoort' },
          { price: '€ 70,35', type: 'ID-kaart' },
        ],
        typeHeader: 'Type',
      },
      tableOfContents: { heading: 'Op deze pagina', links: ['Zo werkt het', 'Voorwaarden', 'Aanvragen'] },
      tabNavigationLinks: ['Gegevens', 'Aanslagen', 'Documenten'],
      tabs: [
        { address: 'Bos en Lommerplein 250, 1055 EK Amsterdam', label: 'West' },
        { address: 'Amstel 1, 1011 PN Amsterdam', label: 'Centrum' },
      ],
      textAreaLabel: 'Toelichting',
      textInputLabel: 'Woonplaats',
      timeInputLabel: 'Hoe laat is uw afspraak?',
      unorderedListItems: [
        'De Clercqstraat en Jan Evertsenstraat',
        'Raadhuisstraat, Westermarkt en Rozengracht',
        'Nieuwezijds Voorburgwal',
      ],
    },
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
            logoLinkTitle={t.pageHeader.logoLinkTitle}
            menuButtonText={t.pageHeader.menuButtonText}
            menuButtonTextForHide={t.pageHeader.menuButtonTextForHide}
            menuButtonTextForShow={t.pageHeader.menuButtonTextForShow}
            menuItems={[
              <PageHeader.MenuLink href="#" key="english" lang="en">
                English
              </PageHeader.MenuLink>,
              <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="search">
                {t.search}
              </PageHeader.MenuLink>,
            ]}
            navigationLabel={t.pageHeader.navigationLabel}
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
                  {t.samples.accordion.sections.map((section) => (
                    <Accordion.Section key={section.label} label={section.label}>
                      <Paragraph>{section.body}</Paragraph>
                    </Accordion.Section>
                  ))}
                </Accordion>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <ActionGroup>
                  <Button>{t.samples.actionGroup.proceedLabel}</Button>
                  <Button variant="secondary">{t.samples.actionGroup.stopLabel}</Button>
                </ActionGroup>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Alert heading={t.samples.alert.heading} headingLevel={2}>
                  <Paragraph>{t.samples.alert.body}</Paragraph>
                </Alert>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Avatar label={t.samples.avatarLabel} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Badge label={t.samples.badgeLabel} />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Blockquote>{t.samples.blockquote}</Blockquote>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Breadcrumb>
                  {t.samples.breadcrumbLinks.map((label) => (
                    <Breadcrumb.Link href="#" key={label}>
                      {label}
                    </Breadcrumb.Link>
                  ))}
                </Breadcrumb>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Button>{t.samples.buttonLabel}</Button>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Calendar
                  {...(lang === 'ar' ? { ...calendarLocaleProps('ar-MA'), locale: 'ar-MA' } : {})}
                  linkTemplate={(date) => `?date=${date.toISOString().slice(0, 10)}`}
                />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <CallToActionLink href="#">{t.samples.callToActionLabel}</CallToActionLink>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Card>
                  <Card.Heading level={2}>
                    <Card.Link href="#">{t.samples.card.heading}</Card.Link>
                  </Card.Heading>
                  <Paragraph>{t.samples.card.body}</Paragraph>
                </Card>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <CharacterCount formatText={t.samples.characterCountFormatText} length={7} maxLength={10} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Checkbox>{t.samples.checkboxLabel}</Checkbox>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Column>
                  {t.samples.columnParagraphs.map((text) => (
                    <Paragraph key={text}>{text}</Paragraph>
                  ))}
                </Column>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-date">{t.samples.dateInputLabel}</Label>
                  <DateInput id="wd-date" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <DatePicker
                  {...(lang === 'ar' ? { ...datePickerLocaleProps('ar-MA'), locale: 'ar-MA' } : {})}
                  onChange={() => {}}
                  value={null}
                />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <DescriptionList>
                  {t.samples.descriptionList.map((item) => (
                    <Fragment key={item.term}>
                      <DescriptionList.Term>{item.term}</DescriptionList.Term>
                      <DescriptionList.Description>{item.description}</DescriptionList.Description>
                    </Fragment>
                  ))}
                </DescriptionList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Button onClick={() => Dialog.open('#wd-dialog')}>{t.samples.dialog.openButtonLabel}</Button>
                <Dialog
                  closeButtonLabel={t.samples.dialog.closeButtonLabel}
                  footer={<Button onClick={(event) => Dialog.close(event)}>{t.samples.dialog.closeButtonLabel}</Button>}
                  heading={t.samples.dialog.heading}
                  id="wd-dialog"
                >
                  <Paragraph>{t.samples.dialog.body}</Paragraph>
                </Dialog>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <ErrorMessage>{t.samples.errorMessage}</ErrorMessage>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-field">{t.samples.surnameLabel}</Label>
                  <TextInput id="wd-field" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <FieldSet legend={t.samples.fieldSet.legend}>
                  <Field>
                    <Label htmlFor="wd-fieldset-first" inFieldSet>
                      {t.samples.fieldSet.firstNameLabel}
                    </Label>
                    <TextInput id="wd-fieldset-first" />
                  </Field>
                  <Field>
                    <Label htmlFor="wd-fieldset-last" inFieldSet>
                      {t.samples.fieldSet.lastNameLabel}
                    </Label>
                    <TextInput id="wd-fieldset-last" />
                  </Field>
                </FieldSet>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Figure>
                  <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
                  <Figure.Caption>{t.samples.figureCaption}</Figure.Caption>
                </Figure>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-file">{t.samples.fileInputLabel}</Label>
                  <FileInput id="wd-file" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <FileList>
                  <FileList.Item
                    file={new File(['sample'], t.samples.fileName, { type: 'application/pdf' })}
                    onDelete={() => {}}
                  />
                </FileList>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Grid>
                  {t.samples.gridParagraphs.map((text) => (
                    <Grid.Cell key={text} span={halfWidth}>
                      <Paragraph>{text}</Paragraph>
                    </Grid.Cell>
                  ))}
                </Grid>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Heading level={2}>{t.samples.heading}</Heading>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Icon svg={<MailIcon />} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <IconButton label={t.samples.iconButtonLabel} />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Image alt="" src="https://picsum.photos/640/360" />
              </Grid.Cell>
              <Grid.Cell span="all">
                <ImageSlider
                  imageLabel={t.samples.imageSlider.imageLabel}
                  images={[...t.samples.imageSlider.images]}
                  nextLabel={t.samples.imageSlider.nextLabel}
                  previousLabel={t.samples.imageSlider.previousLabel}
                />
              </Grid.Cell>
              <Grid.Cell span="all">
                <InvalidFormAlert
                  errors={t.samples.invalidFormAlert.errors.map((label) => ({ id: '#', label }))}
                  heading={t.samples.invalidFormAlert.heading}
                  headingLevel={2}
                />
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Label>{t.samples.labelText}</Label>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Paragraph>
                  {t.samples.linkSentence.textBefore}
                  <Link href="#">{t.samples.linkSentence.linkText}</Link>
                  {t.samples.linkSentence.textAfter}
                </Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <LinkList>
                  {t.samples.linkListLinks.map((label) => (
                    <LinkList.Link href="#" key={label}>
                      {label}
                    </LinkList.Link>
                  ))}
                </LinkList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Logo />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Paragraph>
                  {t.samples.markSentence.textBefore}
                  <Mark>{t.samples.markSentence.markText}</Mark>
                  {t.samples.markSentence.textAfter}
                </Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Menu>
                  <Menu.Link href="#" icon={<PieChartFillIcon />}>
                    {t.samples.menuLinkLabel}
                  </Menu.Link>
                </Menu>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <OrderedList>
                  {t.samples.orderedListItems.map((item) => (
                    <OrderedList.Item key={item}>{item}</OrderedList.Item>
                  ))}
                </OrderedList>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Overlap>
                  <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
                  <Grid style={{ alignSelf: 'center' }}>
                    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
                      <SearchField onSubmit={(event) => event.preventDefault()}>
                        <SearchField.Input label={t.search} placeholder={t.samples.searchPlaceholder} />
                        <SearchField.Button>{t.search}</SearchField.Button>
                      </SearchField>
                    </Grid.Cell>
                  </Grid>
                </Overlap>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Pagination
                  linkTemplate={(page) => `#?pagina=${page}`}
                  maxVisiblePages={7}
                  nextLabel={t.samples.pagination.nextLabel}
                  page={5}
                  previousLabel={t.samples.pagination.previousLabel}
                  totalPages={10}
                />
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Paragraph>{t.samples.paragraph}</Paragraph>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-password">{t.samples.passwordInputLabel}</Label>
                  <PasswordInput id="wd-password" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <ProgressList headingLevel={3}>
                  <ProgressList.Step heading={t.samples.progressList[0].heading} status="completed">
                    <Paragraph>{t.samples.progressList[0].body}</Paragraph>
                  </ProgressList.Step>
                  <ProgressList.Step heading={t.samples.progressList[1].heading} status="current">
                    <Paragraph>{t.samples.progressList[1].body}</Paragraph>
                  </ProgressList.Step>
                  <ProgressList.Step heading={t.samples.progressList[2].heading}>
                    <Paragraph>{t.samples.progressList[2].body}</Paragraph>
                  </ProgressList.Step>
                </ProgressList>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Radio>{t.samples.radioLabel}</Radio>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Row>
                  {t.samples.rowParagraphs.map((text) => (
                    <Paragraph key={text}>{text}</Paragraph>
                  ))}
                </Row>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <SearchField onSubmit={(event) => event.preventDefault()}>
                  <SearchField.Input label={t.search} placeholder={t.samples.searchPlaceholder} />
                  <SearchField.Button>{t.search}</SearchField.Button>
                </SearchField>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-select">{t.samples.select.label}</Label>
                  <Select id="wd-select">
                    {t.samples.select.options.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
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
                      <Blockquote color="inverse">{t.samples.blockquote}</Blockquote>
                    </Grid.Cell>
                  </Grid>
                </Spotlight>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <StandaloneLink href="#">{t.samples.standaloneLinkLabel}</StandaloneLink>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Label htmlFor="wd-switch">{t.samples.switchLabel}</Label>
                <Switch id="wd-switch" />
              </Grid.Cell>
              <Grid.Cell span="all">
                <TabNavigation>
                  <TabNavigation.List>
                    {t.samples.tabNavigationLinks.map((label, index) => (
                      <TabNavigation.Link aria-current={index === 0 ? 'page' : undefined} href="#" key={label}>
                        {label}
                      </TabNavigation.Link>
                    ))}
                  </TabNavigation.List>
                </TabNavigation>
              </Grid.Cell>
              <Grid.Cell span="all">
                <Table>
                  <Table.Caption>
                    <Heading level={3}>{t.samples.table.caption}</Heading>
                  </Table.Caption>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>{t.samples.table.typeHeader}</Table.HeaderCell>
                      <Table.HeaderCell align="end">{t.samples.table.deliveryTimeHeader}</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {t.samples.table.rows.map((row) => (
                      <Table.Row key={row.type}>
                        <Table.Cell>{row.type}</Table.Cell>
                        <Table.Cell align="end">{row.price}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <TableOfContents heading={t.samples.tableOfContents.heading}>
                  <TableOfContents.List>
                    {t.samples.tableOfContents.links.map((label) => (
                      <TableOfContents.Link href="#writing-direction-content" key={label} label={label} />
                    ))}
                  </TableOfContents.List>
                </TableOfContents>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Tabs>
                  <Tabs.List>
                    <Tabs.Button aria-controls="wd-tab-west">{t.samples.tabs[0].label}</Tabs.Button>
                    <Tabs.Button aria-controls="wd-tab-centrum">{t.samples.tabs[1].label}</Tabs.Button>
                  </Tabs.List>
                  <Tabs.Panel id="wd-tab-west">
                    <Paragraph>
                      <span lang="nl">{t.samples.tabs[0].address}</span>
                    </Paragraph>
                  </Tabs.Panel>
                  <Tabs.Panel id="wd-tab-centrum">
                    <Paragraph>
                      <span lang="nl">{t.samples.tabs[1].address}</span>
                    </Paragraph>
                  </Tabs.Panel>
                </Tabs>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-textarea">{t.samples.textAreaLabel}</Label>
                  <TextArea id="wd-textarea" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <Field>
                  <Label htmlFor="wd-textinput">{t.samples.textInputLabel}</Label>
                  <TextInput id="wd-textinput" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={thirdWidth}>
                <Field>
                  <Label htmlFor="wd-time">{t.samples.timeInputLabel}</Label>
                  <TimeInput id="wd-time" />
                </Field>
              </Grid.Cell>
              <Grid.Cell span={halfWidth}>
                <UnorderedList>
                  {t.samples.unorderedListItems.map((item) => (
                    <UnorderedList.Item key={item}>
                      <span lang="nl">{item}</span>
                    </UnorderedList.Item>
                  ))}
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
                    <Paragraph color="inverse">{t.samples.breakoutParagraph}</Paragraph>
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
