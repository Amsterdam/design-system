/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const ibanPattern = /^([a-z]{2})(\d{2})([a-z]{4})(\d{4})(\d{4})(\d{2})$/i

/**
 * Formats a Dutch IBAN bank account number in groups of four, ending in a group of two,
 * according to the City of Amsterdam writing guidelines.
 *
 * Accepts common input variations like `NL70TRIO0123456789` or `nl70 trio 0123 4567 89`.
 * Formats any input shaped like a Dutch IBAN — two letters, two digits, four letters, ten digits —
 * without checking the country code. Returns the input unchanged if it does not match that shape.
 *
 * @param iban - A string containing a Dutch IBAN.
 * @returns A formatted IBAN string, e.g. `'NL70 TRIO 0123 4567 89'`, or an empty string for non-string input.
 * @example formatIban('NL70TRIO0123456789') // 'NL70 TRIO 0123 4567 89'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/rekeningnummers/ Amsterdam Writing Guide – Rekeningnummers}
 */
export const formatIban = (iban: string): string => {
  if (typeof iban !== 'string') {
    return ''
  }

  const match = iban.replace(/\s/g, '').match(ibanPattern)

  if (!match) {
    return iban
  }

  const [, country, check, bank, group1, group2, group3] = match

  return `${country.toUpperCase()}${check} ${bank.toUpperCase()} ${group1} ${group2} ${group3}`
}
