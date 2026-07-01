/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'

import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

/** The Dutch defaults; also the fallback for the default and any unknown locale. */
const nlNL = {
  accessibleName: 'Kalender',
  locale: undefined,
  nextMonthButtonLabel: 'Volgende maand',
  nextYearButtonLabel: 'Volgend jaar',
  previousMonthButtonLabel: 'Vorige maand',
  previousYearButtonLabel: 'Vorig jaar',
  rangeEndAccessibleName: 'einddatum',
  rangeStartAccessibleName: 'startdatum',
}

/**
 * Every text that Calendar and Date Picker expose but `Intl` cannot supply, translated for each
 * supported locale. Weekday and month names come from `locale` automatically, so they are not
 * listed here. The stories apply the matching entry when the locale changes, so the examples show
 * a fully localised component instead of leaving these labels in Dutch. Translations verified with
 * native speakers.
 */
export const localeTranslations = [
  nlNL,
  {
    accessibleName: 'Calendar',
    locale: 'en-GB',
    nextMonthButtonLabel: 'Next month',
    nextYearButtonLabel: 'Next year',
    previousMonthButtonLabel: 'Previous month',
    previousYearButtonLabel: 'Previous year',
    rangeEndAccessibleName: 'end date',
    rangeStartAccessibleName: 'start date',
  },
  {
    accessibleName: 'Kalender',
    locale: 'de-DE',
    nextMonthButtonLabel: 'Nächster Monat',
    nextYearButtonLabel: 'Nächstes Jahr',
    previousMonthButtonLabel: 'Vorheriger Monat',
    previousYearButtonLabel: 'Vorheriges Jahr',
    rangeEndAccessibleName: 'Enddatum',
    rangeStartAccessibleName: 'Startdatum',
  },
  {
    accessibleName: 'Calendrier',
    locale: 'fr-FR',
    nextMonthButtonLabel: 'Mois suivant',
    nextYearButtonLabel: 'Année suivante',
    previousMonthButtonLabel: 'Mois précédent',
    previousYearButtonLabel: 'Année précédente',
    rangeEndAccessibleName: 'date de fin',
    rangeStartAccessibleName: 'date de début',
  },
  {
    accessibleName: 'Takvim',
    locale: 'tr-TR',
    nextMonthButtonLabel: 'Sonraki ay',
    nextYearButtonLabel: 'Sonraki yıl',
    previousMonthButtonLabel: 'Önceki ay',
    previousYearButtonLabel: 'Önceki yıl',
    rangeEndAccessibleName: 'bitiş tarihi',
    rangeStartAccessibleName: 'başlangıç tarihi',
  },
  {
    accessibleName: 'التقويم',
    locale: 'ar-MA',
    nextMonthButtonLabel: 'الشهر التالي',
    nextYearButtonLabel: 'السنة التالية',
    previousMonthButtonLabel: 'الشهر السابق',
    previousYearButtonLabel: 'السنة السابقة',
    rangeEndAccessibleName: 'تاريخ النهاية',
    rangeStartAccessibleName: 'تاريخ البداية',
  },
]

type LocaleTranslation = (typeof localeTranslations)[number]

/** The label set for a locale, falling back to Dutch for the default and any unknown locale. */
const translationFor = (locale: string | undefined): LocaleTranslation =>
  localeTranslations.find((translation) => translation.locale === locale) ?? nlNL

/** Only Arabic is right-to-left among the supported locales. */
const dirFor = (locale: string | undefined) => (locale === 'ar-MA' ? 'rtl' : undefined)

/** The locale-derived props for Calendar: text direction plus every label it renders. */
export const calendarLocaleProps = (locale: string | undefined) => {
  const translation = translationFor(locale)

  return {
    accessibleName: translation.accessibleName,
    dir: dirFor(locale),
    nextMonthButtonLabel: translation.nextMonthButtonLabel,
    nextYearButtonLabel: translation.nextYearButtonLabel,
    previousMonthButtonLabel: translation.previousMonthButtonLabel,
    previousYearButtonLabel: translation.previousYearButtonLabel,
  }
}

/**
 * The locale-derived props for Date Picker: text direction and the navigation labels, plus the
 * range boundary names when `range` is set (they only apply in range mode).
 */
export const datePickerLocaleProps = (locale: string | undefined, range = false) => {
  const translation = translationFor(locale)

  return {
    dir: dirFor(locale),
    nextMonthButtonLabel: translation.nextMonthButtonLabel,
    nextYearButtonLabel: translation.nextYearButtonLabel,
    previousMonthButtonLabel: translation.previousMonthButtonLabel,
    previousYearButtonLabel: translation.previousYearButtonLabel,
    ...(range && {
      rangeEndAccessibleName: translation.rangeEndAccessibleName,
      rangeStartAccessibleName: translation.rangeStartAccessibleName,
    }),
  }
}

/** The `dir` and `locale` controls, shared by both components. */
export const localeArgTypes = {
  dir: {
    control: {
      labels: { undefined: 'ltr (default)' },
      type: 'inline-radio',
    },
    description:
      'Reading direction. Read-only here: `locale` sets it — `ar-MA` selects `rtl`, every other locale clears it.',
    options: [undefined, 'rtl'],
    table: { readonly: true },
  },
  locale: {
    control: {
      labels: {
        'ar-MA': 'العربية (Arabic)',
        'de-DE': 'Deutsch (German)',
        'en-GB': 'English (English)',
        'fr-FR': 'Français (French)',
        'tr-TR': 'Türkçe (Turkish)',
        undefined: 'Nederlands (Dutch)',
      },
      type: 'select',
    },
    description:
      'BCP 47 language tag. Sets the weekday and month names and the accessible date labels, and here also applies the matching navigation and accessible-name labels below. See the Localisation developer guide for the tested locales.',
    options: [undefined, 'en-GB', 'de-DE', 'fr-FR', 'tr-TR', 'ar-MA'],
  },
} as const

/** A read-only text control whose value the stories fill in from `locale`. */
const readonlyLabel = (description: string) =>
  ({ control: { type: 'text' }, description, table: { readonly: true } }) as const

/** Calendar's locale controls: `dir`, `locale`, and its read-only, locale-derived labels. */
export const calendarLocaleArgTypes = {
  accessibleName: readonlyLabel('Accessible landmark name. Applied from `locale` here; set it yourself to localise.'),
  dir: localeArgTypes.dir,
  locale: localeArgTypes.locale,
  nextMonthButtonLabel: readonlyLabel('Accessible label for the next-month button. Applied from `locale` here.'),
  nextYearButtonLabel: readonlyLabel('Accessible label for the next-year button. Applied from `locale` here.'),
  previousMonthButtonLabel: readonlyLabel(
    'Accessible label for the previous-month button. Applied from `locale` here.',
  ),
  previousYearButtonLabel: readonlyLabel('Accessible label for the previous-year button. Applied from `locale` here.'),
} as const

/** Date Picker's locale controls: `dir`, `locale`, and its read-only, locale-derived labels. */
export const datePickerLocaleArgTypes = {
  dir: localeArgTypes.dir,
  locale: localeArgTypes.locale,
  nextMonthButtonLabel: readonlyLabel('Accessible label for the next-month button. Applied from `locale` here.'),
  nextYearButtonLabel: readonlyLabel('Accessible label for the next-year button. Applied from `locale` here.'),
  previousMonthButtonLabel: readonlyLabel(
    'Accessible label for the previous-month button. Applied from `locale` here.',
  ),
  previousYearButtonLabel: readonlyLabel('Accessible label for the previous-year button. Applied from `locale` here.'),
} as const

/** The extra read-only labels a range Date Picker announces; merge into the Range story's argTypes. */
export const datePickerRangeLocaleArgTypes = {
  rangeEndAccessibleName: readonlyLabel(
    'Appended to the accessible name of the range end date. Applied from `locale` here.',
  ),
  rangeStartAccessibleName: readonlyLabel(
    'Appended to the accessible name of the range start date. Applied from `locale` here.',
  ),
} as const

type LocaleVariant = 'calendar' | 'datePicker' | 'datePickerRange'

/**
 * Keeps the read-only, locale-derived controls in sync with `locale`, so the controls panel shows
 * the values actually applied to the component: the text direction and every navigation and
 * accessible-name label. Set `parameters.localeVariant` to pick which labels apply.
 */
export const SyncLocaleArgs: Decorator = (Story, { parameters }) => {
  const [{ locale }, updateArgs] = useArgs()
  const variant: LocaleVariant = parameters['localeVariant'] ?? 'calendar'

  // Re-applies whenever `locale` changes; `updateArgs` and `variant` are stable, so they never
  // trigger it on their own.
  useEffect(() => {
    updateArgs(
      variant === 'calendar'
        ? calendarLocaleProps(locale)
        : datePickerLocaleProps(locale, variant === 'datePickerRange'),
    )
  }, [locale, updateArgs, variant])

  return <Story />
}

type SourceTransformCtx = { args: Record<string, unknown> }

/** The name a JSX attribute string starts with, used to sort props alphabetically. */
const propName = (prop: string) => prop.match(/^\s*([\w-]+)/)?.[1] ?? ''

/** Turns the locale-derived props into JSX attribute strings, or none for the default Dutch locale. */
const localePropStrings = (locale: unknown, variant: LocaleVariant): string[] => {
  if (typeof locale !== 'string') {
    return []
  }

  const props =
    variant === 'calendar' ? calendarLocaleProps(locale) : datePickerLocaleProps(locale, variant === 'datePickerRange')

  return [
    `locale="${locale}"`,
    ...Object.entries(props)
      .filter(([, value]) => value !== undefined)
      .map(([name, value]) => `${name}="${value}"`),
  ]
}

/**
 * Creates a Storybook `docs.source.transform` that shows fully localised, copy-paste-ready JSX.
 * It injects `locale`, `dir`, and the translated labels for the selected locale, merges them with
 * the story's own `fixedProps`, and sorts everything alphabetically like the linter would.
 */
export const localeSourceTransform =
  (componentName: string, variant: LocaleVariant, fixedProps: string[], prefix?: string) =>
  (_src: string, { args }: SourceTransformCtx): string => {
    const props = [...fixedProps, ...localePropStrings(args['locale'], variant)].sort((a, b) =>
      propName(a).localeCompare(propName(b)),
    )
    const multiLine = props.length > 1 || props.some((prop) => prop.includes('\n'))
    const jsx = multiLine ? `<${componentName}\n  ${props.join('\n  ')}\n/>` : `<${componentName} ${props[0] ?? ''} />`

    return prefix ? `${prefix}\n\n${jsx}` : jsx
  }
