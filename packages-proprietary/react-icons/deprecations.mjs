/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// @ts-check

// Icons whose component is deprecated, by file basename (e.g. `TrashBin`,
// exported as `TrashBinIcon`). Adds an `@deprecated` comment to the component.
/** @type {Record<string, { removeOnOrAfter: string; replacement: string }>} */
export const deprecatedIcons = {
  Bell: { removeOnOrAfter: '2026-07-09', replacement: 'Notification' },
  BellFill: { removeOnOrAfter: '2026-07-09', replacement: 'NotificationFill' },
  CheckMarkCircle: { removeOnOrAfter: '2026-05-01', replacement: 'Success' },
  CheckMarkCircleFill: { removeOnOrAfter: '2026-05-01', replacement: 'SuccessFill' },
  Cogwheel: { removeOnOrAfter: '2026-05-01', replacement: 'Settings' },
  CogwheelFill: { removeOnOrAfter: '2026-05-01', replacement: 'SettingsFill' },
  HandWithEuroCoin: { removeOnOrAfter: '2026-05-01', replacement: 'PersonsWithEuroCoin' },
  PersonCircle: { removeOnOrAfter: '2026-07-09', replacement: 'UserAccount' },
  PersonCircleFill: { removeOnOrAfter: '2026-07-09', replacement: 'UserAccountFill' },
  TrashBin: { removeOnOrAfter: '2026-07-09', replacement: 'Delete' },
  TrashBinFill: { removeOnOrAfter: '2026-07-09', replacement: 'DeleteFill' },
}

// Deprecated re-exports that alias an icon under another name, keyed by alias.
/** @type {Record<string, { comment: string; icon: string }>} */
export const deprecatedAliases = {
  LinkedinIcon: {
    comment:
      'This icon misspells the brand as ‘Linkedin’, with a lowercase ‘i’. Use ‘LinkedInIcon’ instead. Will be removed on or after 2026-05-01.',
    icon: 'LinkedIn',
  },
}

// Fail the build on a malformed removal date.
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

for (const [iconName, { removeOnOrAfter }] of Object.entries(deprecatedIcons)) {
  if (!ISO_DATE.test(removeOnOrAfter)) {
    throw new Error(
      `deprecatedIcons.${iconName}: ‘removeOnOrAfter’ must be a YYYY-MM-DD date, got ‘${removeOnOrAfter}’.`,
    )
  }
}

// The `@deprecated` JSDoc comment for each deprecated icon, keyed by file
// basename.
/** @type {Record<string, string>} */
export const deprecatedIconComments = Object.fromEntries(
  Object.entries(deprecatedIcons).map(([iconName, { removeOnOrAfter, replacement }]) => [
    iconName,
    [
      '/**',
      ` * @deprecated The ‘${iconName}’ icon will be removed on or after ${removeOnOrAfter}.`,
      ` * Use ‘${replacement}’ instead.`,
      ' */',
    ].join('\n'),
  ]),
)
