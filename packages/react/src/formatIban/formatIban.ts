/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const ibanPattern = /^([a-z]{2})(\d{2})([a-z]{4})(\d{4})(\d{4})(\d{2})$/i

/**
 * Formats a Dutch IBAN bank account number in groups of four, according to the City of Amsterdam writing guidelines.
 *
 * Accepts common input variations like `NL21TRIO0123456789` or `nl21 trio 0123 4567 89`.
 * Returns the input unchanged if it does not match the expected pattern.
 *
 * @param iban - A string containing a Dutch IBAN.
 * @returns A formatted IBAN string, e.g. `'NL21 TRIO 0123 4567 89'`.
 * @example formatIban('NL21TRIO0123456789') // 'NL21 TRIO 0123 4567 89'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/rekeningnummers/ Amsterdam Writing Guide – Rekeningnummers}
 */
export const formatIban = (iban: string): string => {
  const match = iban.replace(/\s/g, '').match(ibanPattern)

  if (!match) {
    return iban
  }

  const [, country, check, bank, group1, group2, group3] = match

  return `${country.toUpperCase()}${check} ${bank.toUpperCase()} ${group1} ${group2} ${group3}`
}
