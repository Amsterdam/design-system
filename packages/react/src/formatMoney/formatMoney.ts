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
 * Returns an empty string for input that is not a finite number, rather than a misleading amount.
 *
 * @param amount - The amount in euros.
 * @returns A formatted currency string, or an empty string for invalid input.
 * @example formatMoney(198)     // '€ 198,-'
 * @example formatMoney(1040.25) // '€ 1.040,25'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/getallen-bedragen-breuken-percentages/ Amsterdam Writing Guide – Bedragen}
 */
export const formatMoney = (amount: number): string => {
  if (!Number.isFinite(amount)) {
    return ''
  }

  // Adding zero normalises negative zero, which would otherwise format as '€ -0,-'.
  const normalised = amount + 0

  if (Number.isInteger(normalised)) {
    return `€ ${wholeFormatter.format(normalised)},-`
  }

  return `€ ${centsFormatter.format(normalised)}`
}
