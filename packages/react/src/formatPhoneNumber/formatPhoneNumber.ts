/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * The 30 two-digit area codes (netnummers) in the Netherlands.
 * These have a 7-digit subscriber number; all others have 3-digit area codes with a 6-digit subscriber number.
 * @see {@link http://www.euronet.nl/users/cor/netnrs.html Telephone dialling codes in The Netherlands}
 */
const twoDigitAreaCodes = new Set([
  '10',
  '13',
  '15',
  '20',
  '23',
  '24',
  '26',
  '30',
  '33',
  '35',
  '36',
  '38',
  '40',
  '43',
  '45',
  '46',
  '50',
  '53',
  '55',
  '58',
  '70',
  '71',
  '72',
  '73',
  '74',
  '75',
  '76',
  '77',
  '78',
  '79',
])

/**
 * Formats a Dutch phone number according to the City of Amsterdam writing guidelines.
 *
 * Landline numbers with a 2-digit area code: `020 123 4567`.
 * Landline numbers with a 3-digit area code: `0343 255 922`.
 * Mobile numbers: `06 1234 5678`.
 * International: `+31 20 123 4567` or `+31 6 1234 5678`.
 * Service numbers: `0800 1234` or `0800 123 4567`.
 *
 * Unrecognised input is returned unchanged.
 *
 * @param phoneNumber - A phone number string in any common notation.
 * @returns A formatted phone number string.
 * @example formatPhoneNumber('0201234567')    // '020 123 4567'
 * @example formatPhoneNumber('+31612345678')  // '+31 6 1234 5678'
 * @see {@link https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/tekstonderdelen-heldere-taal/telefoonnummers/ Amsterdam Writing Guide – Telefoonnummers}
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/[\s\-–—()]/g, '')

  let nationalDigits: string
  let isInternational = false

  if (cleaned.startsWith('+31')) {
    nationalDigits = `0${cleaned.slice(3)}`
    isInternational = true
  } else if (cleaned.startsWith('0031')) {
    nationalDigits = `0${cleaned.slice(4)}`
    isInternational = true
  } else {
    nationalDigits = cleaned
  }

  // Mobile: 06 + 8 digits
  if (/^06\d{8}$/.test(nationalDigits)) {
    const s = nationalDigits.slice(2)
    const formatted = `${s.slice(0, 4)} ${s.slice(4)}`

    return isInternational ? `+31 6 ${formatted}` : `06 ${formatted}`
  }

  // 0800 / 0900 with 4-digit number (8 digits total)
  if (/^0[89]00\d{4}$/.test(nationalDigits)) {
    return `${nationalDigits.slice(0, 4)} ${nationalDigits.slice(4)}`
  }

  // 0800 / 0900 with 7-digit number (11 digits total)
  if (/^0[89]00\d{7}$/.test(nationalDigits)) {
    const s = nationalDigits.slice(4)

    return `${nationalDigits.slice(0, 4)} ${s.slice(0, 3)} ${s.slice(3)}`
  }

  // Standard 10-digit landline: 0 + 9 digits
  if (/^0\d{9}$/.test(nationalDigits)) {
    const potentialTwoDigit = nationalDigits.slice(1, 3)

    if (twoDigitAreaCodes.has(potentialTwoDigit)) {
      // 2-digit area code, 7-digit subscriber: group as 3 + 4
      const s = nationalDigits.slice(3)
      const formatted = `${s.slice(0, 3)} ${s.slice(3)}`

      return isInternational ? `+31 ${potentialTwoDigit} ${formatted}` : `0${potentialTwoDigit} ${formatted}`
    }

    // 3-digit area code, 6-digit subscriber: two equal groups of 3
    const threeDigitCode = nationalDigits.slice(1, 4)
    const s = nationalDigits.slice(4)
    const formatted = `${s.slice(0, 3)} ${s.slice(3)}`

    return isInternational ? `+31 ${threeDigitCode} ${formatted}` : `0${threeDigitCode} ${formatted}`
  }

  return phoneNumber
}
