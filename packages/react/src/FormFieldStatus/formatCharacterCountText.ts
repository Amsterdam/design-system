/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

export type FormatCharacterCountText = (length: number, maxLength: number) => string

export type FormatCharacterCountOverLimitText = (charactersOverLimit: number) => string

const arabicPluralRules = new Intl.PluralRules('ar')

// Arabic picks a counted noun from six plural categories, and by the remainder rather than the size of
// the number: 3 to 10 take the plural, 11 to 99 the accusative, but 100 and 1000 the singular again.
// `Intl.PluralRules` resolves which category applies.
const arabicCharacterNouns: Record<Intl.LDMLPluralRule, string> = {
  few: 'أحرف',
  many: 'حرفًا',
  one: 'حرف',
  other: 'حرف',
  two: 'حرفين',
  zero: 'حرف',
}

const arabicCharacterNoun = (count: number) => arabicCharacterNouns[arabicPluralRules.select(count)]

/** Formats the character count in Arabic, e.g. ‘7 من 10 أحرف’. */
export const formatCharacterCountTextAr: FormatCharacterCountText = (length, maxLength) =>
  `${length} من ${maxLength} ${arabicCharacterNoun(maxLength)}`

/** Formats the character count in German, e.g. ‘7 von 10 Zeichen’. */
export const formatCharacterCountTextDe: FormatCharacterCountText = (length, maxLength) =>
  `${length} von ${maxLength} Zeichen`

/** Formats the character count in English, e.g. ‘7 of 10 characters’. */
export const formatCharacterCountTextEn: FormatCharacterCountText = (length, maxLength) =>
  `${length} of ${maxLength} ${maxLength === 1 ? 'character' : 'characters'}`

/** Formats the character count in French, e.g. ‘7 caractères sur 10’. */
export const formatCharacterCountTextFr: FormatCharacterCountText = (length, maxLength) =>
  `${length} ${length < 2 ? 'caractère' : 'caractères'} sur ${maxLength}`

/** Formats the character count in Dutch, e.g. ‘7 van 10 tekens’. */
export const formatCharacterCountTextNl: FormatCharacterCountText = (length, maxLength) =>
  `${length} van ${maxLength} ${maxLength === 1 ? 'teken' : 'tekens'}`

/** Formats the character count in Turkish, e.g. ‘10 karakterden 7’. */
export const formatCharacterCountTextTr: FormatCharacterCountText = (length, maxLength) =>
  `${maxLength} karakterden ${length}`

/** Formats the number of characters over the limit in Arabic, e.g. ‘5 أحرف زيادة’. */
export const formatCharacterCountOverLimitTextAr: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} ${arabicCharacterNoun(charactersOverLimit)} زيادة`

/** Formats the number of characters over the limit in German, e.g. ‘5 Zeichen zu viel’. */
export const formatCharacterCountOverLimitTextDe: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} Zeichen zu viel`

/** Formats the number of characters over the limit in English, e.g. ‘5 characters too many’. */
export const formatCharacterCountOverLimitTextEn: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} ${charactersOverLimit === 1 ? 'character' : 'characters'} too many`

/** Formats the number of characters over the limit in French, e.g. ‘5 caractères de trop’. */
export const formatCharacterCountOverLimitTextFr: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} ${charactersOverLimit < 2 ? 'caractère' : 'caractères'} de trop`

/** Formats the number of characters over the limit in Dutch, e.g. ‘5 tekens te veel’. */
export const formatCharacterCountOverLimitTextNl: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} ${charactersOverLimit === 1 ? 'teken' : 'tekens'} te veel`

/** Formats the number of characters over the limit in Turkish, e.g. ‘5 karakter fazla’. */
export const formatCharacterCountOverLimitTextTr: FormatCharacterCountOverLimitText = (charactersOverLimit) =>
  `${charactersOverLimit} karakter fazla`
