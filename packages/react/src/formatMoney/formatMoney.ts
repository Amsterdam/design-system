/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const locale = 'nl-NL'

const wholeFormatter = new Intl.NumberFormat(locale)

const centsFormatter = new Intl.NumberFormat(locale, {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})

/**
 * Formats an amount of money in euros according to the City of Amsterdam writing guidelines.
 *
 * Whole amounts use a trailing dash: `€ 198,-`.
 * Amounts with cents show two decimal places: `€ 198,50`.
 * Thousands are separated by periods: `€ 1.000,-` and `€ 1.040,25`.
 *
 * @param amount - The amount in euros.
 * @returns A formatted currency string.
 * @example formatMoney(198)     // '€ 198,-'
 * @example formatMoney(1040.25) // '€ 1.040,25'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/getallen-bedragen-breuken-percentages/ Amsterdam Writing Guide – Bedragen}
 */
export const formatMoney = (amount: number): string => {
  if (Number.isInteger(amount)) {
    return `€ ${wholeFormatter.format(amount)},-`
  }

  return `€ ${centsFormatter.format(amount)}`
}
