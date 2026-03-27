/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const postalCodePattern = /^(\d{4})\s*([a-z]{2})$/i

/**
 * Formats a Dutch postal code as `1234 AB` — four digits, a space, and two uppercase letters.
 *
 * Accepts common input variations like `1234ab`, `1234 ab`, or `1234AB`.
 * Returns the input unchanged if it does not match the expected pattern.
 *
 * @param postalCode - A string containing a Dutch postal code.
 * @returns A formatted postal code string.
 * @example formatPostalCode('1014ba') // '1014 BA'
 */
export const formatPostalCode = (postalCode: string): string => {
  const match = postalCode.trim().match(postalCodePattern)

  if (!match) {
    return postalCode
  }

  return `${match[1]} ${match[2].toUpperCase()}`
}
