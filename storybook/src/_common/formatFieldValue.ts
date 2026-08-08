/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * Converts the visible label of a form control to the value it submits.
 * Lower cases it, strips the accents from letters that carry them, and replaces every run of characters that is
 * not a letter or a digit with a single hyphen.
 *
 * A label reaches a query string as the value of a checkbox, a radio button or a select option, so it needs a form
 * that survives being written there: `?stadsdeel=stadsgebied-weesp` rather than `?stadsdeel=stadsgebied+weesp`.
 * Lower casing alone leaves the spaces and the commas in, which is what several of these pages used to do.
 *
 * Labels that differ only in punctuation collapse to the same value, so check that a list of them stays distinct.
 *
 * @param label - The visible label, e.g. `'Stadsgebied Weesp'`.
 * @returns The value to submit, e.g. `'stadsgebied-weesp'`.
 *
 * @example
 * formatFieldValue('Stadsgebied Weesp')            // "stadsgebied-weesp"
 * formatFieldValue('Nieuw-West')                   // "nieuw-west"
 * formatFieldValue('Ontmoeting, zorg en welzijn')  // "ontmoeting-zorg-en-welzijn"
 */
export function formatFieldValue(label: string): string {
  return label
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-|-$/g, '')
}
